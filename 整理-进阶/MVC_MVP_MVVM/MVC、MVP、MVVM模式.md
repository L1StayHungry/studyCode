# MVC、MVP、MVVM模式

简介：MVP、MVVM是MVC模式的衍生物。

- 共同点：

- M:MOdel
  - 模型。
  - 除了数据外，还要有get/set等操作数据的方法

- V:View
  - 视图层。
  - 用户能够看到的view层。



## MVC

- Model（模型）表示应用程序核心（如数据库）。
- View（视图）显示效果（HTML页面）。
- Controller（控制器）处理输入（业务逻辑）。

![image-20201022191352487](C:\Users\16643\AppData\Roaming\Typora\typora-user-images\image-20201022191352487.png)

1. View 传送指令到 Controller
2. Controller 完成业务逻辑后，要求 Model 改变状态
3. Model 将新的数据发送到 View，用户得到反馈.
4. 通信是单向的

- 优点：
  - [**耦合性**](https://links.jianshu.com/go?to=https%3A%2F%2Fbaike.baidu.com%2Fitem%2F%E8%80%A6%E5%90%88%E6%80%A7)**低**。视图层和业务层分离，这样就允许更改视图层代码而不用重新编译模型和控制器代码，同样，一个应用的业务流程或者业务规则的改变只需要改动MVC的模型层即可。因为模型与控制器和视图相分离，所以很容易改变应用程序的数据层和业务规则。
  - **重用性高**。MVC模式允许使用各种不同样式的视图来访问同一个服务器端的代码，因为多个视图能共享一个模型。
  - [**生命周期**](https://links.jianshu.com/go?to=https%3A%2F%2Fbaike.baidu.com%2Fitem%2F%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F)**成本低**。MVC使开发和维护用户[接口](https://links.jianshu.com/go?to=https%3A%2F%2Fbaike.baidu.com%2Fitem%2F%E6%8E%A5%E5%8F%A3)的技术含量降低。
  - **部署快**。它使程序员（Java开发人员）集中精力于业务逻辑，界面程序员（HTML和JSP开发人员）集中精力于表现形式上。
  - **可维护性高**。
  - **有利软件工程化管理**
- 缺点：
  - **没有明确的定义**。
  - **不适合小型，中等规模的应用程序**
  - **增加系统结构和实现的复杂性**
  - **视图与控制器间的过于紧密的连接**
  - **视图对模型数据的低效率访问**
  - **一般高级的界面工具或构造器不支持模式**

​	

## MVP

- MVP 模式将 Controller 改名为 Presenter，同时改变了通信方向

![image-20201022191825194](C:\Users\16643\AppData\Roaming\Typora\typora-user-images\image-20201022191825194.png)

1. 各部分之间的通信，都是双向的。

2. View 与 Model 不发生联系，都通过 Presenter 传递。

3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。

- 优点:

  1、模型与视图**完全分离**，我们可以修改视图而不影响模型

  2、可以更高效地使用模型，因为所有的交互都发生在一个地方——Presenter内部

  3、我们可以将一个Presenter用于多个视图，而不需要改变Presenter的逻辑。这个特性非常的有用，因为视图的变化总是比模型的变化频繁。

  4、如果我们把逻辑放在Presenter中，那么我们就可以脱离用户接口来测试这些逻辑（单元测试）

- 缺点：

  - 由于对视图的渲染放在了Presenter中，所以视图和Presenter的交互会过于频繁。还有一点需要明白，如果Presenter过多地渲染了视图，往往会使得它与特定的视图的联系过于紧密。一旦视图需要变更，那么Presenter也需要变更了。比如说，原本用来呈现Html的Presenter现在也需要用于呈现Pdf了，那么视图很有可能也需要变更。

- 和MVC的区别：

  - 作为一种新的模式，MVP与MVC有着一个重大的区别：在MVP中View并不直接使用Model，它们之间的通信是通过Presenter (MVC中的Controller)来进行的，所有的交互都发生在Presenter内部，而在MVC中View会直接从Model中读取数据而不是通过 Controller。

## MVVM

- ***(VM)视图模型***是暴露公共属性和命令的视图的抽象。MVVM没有MVC模式的控制器，也没有MVP模式的presenter，有的是一个*绑定器*。在视图模型中，绑定器在视图和数据绑定器之间进行通信。

![image-20201022192125162](C:\Users\16643\AppData\Roaming\Typora\typora-user-images\image-20201022192125162.png)

- MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。
- 唯一的区别是，它采用**双向绑定**（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。Vue/[Angular](https://angularjs.org/) 和 [Ember](http://emberjs.com/) 都采用这种模式。

### 以Vue框架为例：

Model：在MVVM中，Model层仅仅是存储数据就足够了，对于数据进行处理并不在model层中，仅仅存放数据，所以在Vue中只是一个类似于json对象的东西：

```
let data = {
  val: 0
}
```

View：在View层中，只是负责对数据进行格式化展示，在vue中有模板语法。用两个大括号来显示data中的值：

```
<div id="myapp">
    <div>
        <span>{{ val }}rmb</span>
    </div>
    <div>
        <button v-on:click="sub(1)">-</button>
        <button v-on:click="add(1)">+</button>
    </div>
</div>
```

ViewModel：这个是MVC中的Controller或MVP中的Presenter，也是整个模式的重点，业务逻辑也是集中在这里。其中的核心是数据绑定。与MVP不同的是，View层中并没有提供接口给VM层进行调用，因为View层用的是模板语法直接穿插在html中，所以VM的逻辑开发并没有接口可调。所以VM需要处理View和Model之间的数据同步。当Model变化的时候View会自动更新，当View中变化的时候，Model也会随着变化。

```
new Vue({
    el: '#myapp',
    data: data,
    methods: {
        add(v) {
            if(this.val < 100) {
                this.val += v;
            }
        },
        sub(v) {
            if(this.val > 0) {
                this.val -= v;
            }
        }
    }
});
```

整体来看，比MVC/MVP精简了很多，不仅仅简化了业务与界面的依赖，还解决了数据频繁更新（以前用jQuery操作DOM很繁琐）的问题。因为在MVVM中，View不知道Model的存在，ViewModel和Model也察觉不到View，这种低耦合模式可以使开发过程更加容易，提高应用的可重用性。

[![img](https://camo.githubusercontent.com/065914fb4ebbe395c92070fdf2a95a7daf81defd/68747470733a2f2f696d61676573323031352e636e626c6f67732e636f6d2f626c6f672f3933343634342f3230313730362f3933343634342d32303137303630353036353031343731352d3735363934313835342e706e67)](https://camo.githubusercontent.com/065914fb4ebbe395c92070fdf2a95a7daf81defd/68747470733a2f2f696d61676573323031352e636e626c6f67732e636f6d2f626c6f672f3933343634342f3230313730362f3933343634342d32303137303630353036353031343731352d3735363934313835342e706e67)

#### 双向绑定原理

在Vue中，使用了**双向绑定**技术（Two-Way-Data-Binding），就是View的变化能实时让Model发生变化，而Model的变化也能实时更新到View。

- 不同的MVVM框架中，实现双向数据绑定的技术有所不同。目前一些主流的前端框架实现数据绑定的方式大致有以下几种：
  - 数据劫持 (Vue)
  - 发布-订阅模式 (Knockout、Backbone)
  - 脏值检查 (Angular)

- Vue2.x采用数据劫持&发布-订阅模式的方式，通过ES5提供的 `Object.defineProperty()` 方法来劫持（监控）各属性的 `getter` 、`setter` ，并在数据（对象）发生变动时通知订阅者，触发相应的监听回调。并且，由于是在不同的数据上触发同步，可以精确的将变更发送给绑定的视图，而不是对所有的数据都执行一次检测。
  - 要实现Vue中的双向数据绑定，大致可以划分三个模块：Observer、Compile、Watcher，如图：

[![img](https://camo.githubusercontent.com/b449d11965717609db6e1b9b00bacdc466fcabc3/68747470733a2f2f696d61676573323031352e636e626c6f67732e636f6d2f626c6f672f3933343634342f3230313730362f3933343634342d32303137303630353036353035363138342d3330373534373938362e706e67)](https://camo.githubusercontent.com/b449d11965717609db6e1b9b00bacdc466fcabc3/68747470733a2f2f696d61676573323031352e636e626c6f67732e636f6d2f626c6f672f3933343634342f3230313730362f3933343634342d32303137303630353036353035363138342d3330373534373938362e706e67)

​	1.Observer **数据监听器** 负责对数据对象的所有属性进行监听（数据劫持），监听到数据发生变化后**通知订阅者**。

​	2.Compiler **指令解析器** 扫描模板，并对指令进行解析，然后**绑定指定事件**。

​	3.Watcher **订阅者** 关联Observer和Compile，能够订阅并收到属性变动的通知，执行指令绑定的相应操作，更新视图。Update()是它自身的一个方法，用于执行Compile中绑定的回调，更新视图。

##### 数据劫持

- vue2.x的数据劫持：

  - 对数据的劫持都是通过Object.defineProperty方法进行的，Vue中对应的函数为 `defineReactive` ，其普通对象的劫持的精简版代码如下：

  - ```javascript
    var foo = {
      name: 'vue',
      version: '2.x'
    }
    
    function observe(data) {
        if (!data || typeof data !== 'object') {
            return
        }
        // 使用递归劫持对象属性
        Object.keys(data).forEach(function(key) {
            defineReactive(data, key, data[key]);
        })
    }
    
    function defineReactive(obj, key, value) {
         // 监听子属性 比如这里data对象里的 'name' 或者 'version'
         observe(value)
    
        Object.defineProperty(obj, key, {
            get: function reactiveGetter() {
                return value
            },
            set: function reactiveSetter(newVal) {
                if (value === newVal) {
                    return
                } else {
                    value = newVal
                    console.log(`监听成功：${value} --> ${newVal}`)
                }
            }
        })
    }
    
    observe(foo)
    foo.name = 'angular' // “监听成功：vue --> angular”[![复制代码](https://common.cnblogs.com/images/copycode.gif)](javascript:void(0)
    ```

  - 上面完成了对数据对象的监听，接下来还需要在监听到变化后去通知订阅者，这需要实现一个消息订阅器 `Dep` ，Watcher通过 `Dep` 添加订阅者，当数据改变便触发 `Dep.notify()` ，Watcher调用自己的 `update()` 方法完成视图更新。

