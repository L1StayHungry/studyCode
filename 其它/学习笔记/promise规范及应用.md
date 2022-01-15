# PromiseA+规范

## 术语

- promise
- thenable
- value
- reason
- exception

## 规范

### Promise States

- pending
  - 初始态可变
- fulfilled
  - 终态不可变
- rejected
  - 终态不可变

### 入参

```
new Promise((resolve, reject) => {
	...
})
```

入参fn会被马上执行

### then

```javascript
promise.then(onFulfilled, onRejected){}
```

- onFulfilled 
  - 必须是函数，否则被忽略（默认函数）
  - promise变成fulfilled时调用，参数是value,只能被调用一次
  - 应该在微任务中被执行
- onRejected
  - 基本同上
- then方法可以被多次执行（不是链式）,需要一个数组来存储onFulfilled

```
promise.then(cb1, cb2)
promise.then(cb1, cb2)
promise.then(cb1, cb2)
```

- then的返回值是一个新的promise

```javascript
promise2 = promise1.then(onFulfilled, onRejected);
```

1 onFulfilled 或 onRejected 执行的结果为x, 调用 **resolvePromise**

2 如果 onFulfilled 或者 onRejected 执行时抛出异常e, promise2需要被**reject**

3 如果 onFulfilled 不是一个函数, promise2 以promise1的value 触发fulfilled

4 如果 onRejected 不是一个函数, promise2 以promise1的reason 触发rejected

- 习惯上我们经常会忽略onRejected的传入

### resolvePromise

```
resolvePromise(promise2, x, resolve, reject)
```

实际上就是用来resolve掉then返回的新promise

## 实现

```javascript
// 状态常量
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Mpromise{
    // 存放onFulfilled数组及onRejected数组
    // 应对异步及多次使用then的情况
    FULFILLED_CALLBACK_LIST = [];
    REJECTED_CALLBACK_LIST = [];
	// 真正的status
	_status = PENDING;
    get status() {
        return this._status;
    }
	// 监听status改变
	set status(newStatus) {
        this._status = newStatus;
        switch (newStatus) {
            case FULFILLED: {
                this.FULFILLED_CALLBACK_LIST.forEach(callback => {
                    callback(this.value);
                });
                break;
            }
            case REJECTED: {
                this.REJECTED_CALLBACK_LIST.forEach(callback => {
                    callback(this.reason);
                });
                break;
            }
        }
    }
	// 初始化
	constructor(fn){
		// this.status = PENDING;
        this.value = null;
        this.reason = null;
        
        try {
            fn(this.resolve.bind(this), this.reject.bind(this));
        } catch (e) {
            this.reject(e);
        }
	}
    
    resolve(value){
        if(this.status === PENDING){
            this.value = value;
            this.status = FULFILLED;
        }
    }
    
    reject(reason){
        if(this.status === PENDING){
            this.reason = reason;
            this.status = REJECTED;
        }
    }
    
    isFunction(param) {
        return typeof param === 'function';
    }
    
    then(onFulfilled, onRejected){
        // 确保入参是函数
        const realOnFulfilled = this.isFunction(onFulfilled) ? onFulfilled : (value) => {
            return value
        };
        const realOnRejected = this.isFunction(onRejected) ? onRejected : (reason) => {
            throw reason;
        };
        const promise2 = new MPromise((resolve, reject) => {
            const fulfilledMicrotask = () => {
                try {
                    const x = realOnFulfilled(this.value);
                    this.resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e)
                }
            };
            const rejectedMicrotask = () => {
                try {
                    const x = realOnRejected(this.reason);
                    this.resolvePromise(promise2, x, resolve, reject);
                } catch (e) {
                    reject(e);
                }
            }
            switch(this.status) {
                case FULFILLED: {
                    fulfilledMicrotask();
                    break;
                }
                case REJECTED: {
                    rejectedMicrotask();
                    break;
                }
                case PENDING: { 
                    this.FULFILLED_CALLBACK_LIST.push(realOnFulfilled)
                    this.REJECTED_CALLBACK_LIST.push(realOnRejected)
                }
            }
        })
        return promise2;
    }

	resolvePromise(promise2, x, resolve, reject) {
    // 如果 newPromise 和 x 指向同一对象，以 TypeError 为据因拒绝执行 newPromise
    // 这是为了防止死循环
    if (promise2 === x) {
        return reject(new TypeError('The promise and the return value are the same'));
    }

    if (x instanceof MPromise) {
        // 如果 x 为 Promise ，则使 newPromise 接受 x 的状态
        // 也就是继续执行x，如果执行的时候拿到一个y，还要继续解析y
        queueMicrotask(() => {
            x.then((y) => {
                this.resolvePromise(promise2, y, resolve, reject);
            }, reject);
        })
    } else if (typeof x === 'object' || this.isFunction(x)) {
        // 如果 x 为对象或者函数
        if (x === null) {
            // null也会被判断为对象
            return resolve(x);
        }

        let then = null;

        try {
            // 把 x.then 赋值给 then 
            then = x.then;
        } catch (error) {
            // 如果取 x.then 的值时抛出错误 e ，则以 e 为据因拒绝 promise
            return reject(error);
        }

        // 如果 then 是函数
        if (this.isFunction(then)) {
            let called = false;
            // 将 x 作为函数的作用域 this 调用
            // 传递两个回调函数作为参数，第一个参数叫做 resolvePromise ，第二个参数叫做 rejectPromise
            try {
                then.call(
                    x,
                    // 如果 resolvePromise 以值 y 为参数被调用，则运行 resolvePromise
                    (y) => {
                        // 需要有一个变量called来保证只调用一次.
                        if (called) return;
                        called = true;
                        this.resolvePromise(promise2, y, resolve, reject);
                    },
                    // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
                    (r) => {
                        if (called) return;
                        called = true;
                        reject(r);
                    });
            } catch (error) {
                // 如果调用 then 方法抛出了异常 e：
                if (called) return;

                // 否则以 e 为据因拒绝 promise
                reject(error);
            }
        } else {
            // 如果 then 不是函数，以 x 为参数执行 promise
            resolve(x);
        }
    } else {
        // 如果 x 不为对象或者函数，以 x 为参数执行 promise
        resolve(x);
    }
}

    catch (onRejected) {
        return this.then(null, onRejected);
    }

	static resolve(value) {
        if (value instanceof MPromise) {
            return value;
        }

        return new MPromise((resolve) => {
            resolve(value);
        });
    }

    static reject(reason) {
        return new MPromise((resolve, reject) => {
            reject(reason);
        });
    }

	
}
```

