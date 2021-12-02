### 一、介绍

#### 历史

1. 1995年问世，网景公司、sun。代替Perl等服务器语言处理输入验证。
2. 微软的Jscript,网景的NetScape Navigator中的JavaScript
3. 1997年，ECMA-262标准。98年，ISO、IEC采纳

#### 实现

1. 核心：ECMAScript
   1. 宿主环境：浏览器、nodejs、AdobeFlash(即将淘汰)
   2. 定义了：
      - 语法
      - 类型
      - 语句
      - 关键字
      - 保留字
      - 操作符
      - 全局对象
   3. 版本：
      - ECMA-262 (第3版)，字符串处理、错误定义、数值输出、正则表达式、try/catch等，标志着ECMAScript作为以吗真正的编程语言
      - 2009，ECMAScript 3.1 (第5版)。JSON对象等
      - 2015，ES6,类、模块、迭代器、生成器、箭头函数、期约、反射、代理、新数据类型等
      - 2017，ES8,异步(async/await)等
2. 文档对象模型DOM
   1. 本质：应用编程接口，用于在HTML中使用扩展的XML
   2. DOM级别：
      - 98年，DOM Level1成为W3C推荐标准，映射文档结构
      - DOM Level 2 : DOM视图、DOM事件、DOM样式、DOM遍历和范围
      - Level 3 ： 统一的方式加载和保存文档、验证文档的方法
3. 浏览器对象模型BOM
   1. 用于支持访问和操作浏览器的窗口、子窗口（frame）
   2. H5的出现，BOM才开始标准化
      - 新弹窗
      - 移动、缩放、关闭窗口
      - navigator对象，浏览器信息
      - location对象，浏览器加载页面信息
      - screen对象，屏幕信息
      - performance对象，内容、导航、时间统计等信息
      - cookie支持
      - 其他，如XMLHttpRequest

#### ES6

- 模板字面量---使用`我是字符串`反引号定义字符串
- symbol符号，ES6新增
- Map、weakMap
- Set、weakSet
- Object.is( )   (和===类似，但更完善)
- 对象解构
- 代理与反射
- 箭头函数
- 函数实现默认参数值
- Promise/A+
- async/await(es8)

### 二、HTML中的Js

#### < script />元素

属性：

1. **async ：立即开始下载脚本但不阻止其他页面动作，只对外部脚本文件有效。不保证下载顺序。HTML5开始**.异步脚本不应该在加载期间修改DOM
2. charset : 使用src属性指定的代码字符集
3. crossorigin : 配置相关请求的CORS设置。默认不使用CORS.
4. **defer : 脚本可以延迟文档完全解析显示后再执行，只对外部脚本有效（HTML 4.01）。保证下载顺序**
5. integrity
6. src , 包含要执行的代码的外部文件
7. type : 表示代码块中脚本语言的内容类型：text/javascript

注意点：

1. < script >元素的强大又被争议的点：可以包含来自外部域的Js。GET请求获取资源。初始的i请求不受浏览器同源策略限制，但返回并被执行的Js则受限制。

位置：< body >元素中的页面内容后面

#### 行内代码or外部文件？

尽可能将js代码放在外部文件中

1. 可维护性强
2. 缓存。被重复引用的js文件只需下载一次。

#### Js合并？no

       在配置浏览器请求外部文件时，要重点考虑的一点是它们会占用多少带宽。在 SPDY/HTTP2 中， **预请求**的消耗已显著降低，以轻量、独立 JavaScript 组件形式向客户端送达脚本更具优势。

#### 文档模式

通过doctype切换

- 混杂模式（quirks mode）
- 标准模式（standards mode）
- 准标准模式（almost standards mode）: 主要区别在于如何对待图片元素周围的空白（在表格中使用图片时最明显）。

#### < noscript >

- 早期：早期部分浏览器不支持js, **优雅降级**
- 现在：浏览器对脚本的支持被关闭时，显示。

### 三、语言基础

#### 语法

- 区分大小写。

- 严格模式。ES5添加的。

```
//启用严格模式
use strict;
```

- 关键字/保留字

```javascript
关键字：不能作为标识符和属性名
break     do        in            typeof
case      else      instanceof    var
catch     export    new           void
class     extends   return        while
const     finally   super         with
continue  for       switch        yield
debugger  function  this
default   if        throw
delete    import    try
```

```javascript
保留字:不能作为标识符但可以作为属性名
始终保留：
enum
严格模式下保留:
implements    interface    let
package       protected    private
public        static
模块代码中保留
await
```

- 变量： var let (const) 。let和const为ES6及之后版本可使用。**var是函数作用域，let是块作用域。**
  - 在函数内，定义变量但是省略了var操作符时，会创建一个全局变量（局部作用域中的全局变量）。**严格模式下禁止**，抛出ReferenceError。
  - **var声明提升**。变量的**声明**被提升到了作用域的顶部
  - 全局声明。全局作用域中声明的变量，let不会成为window对象的属性，var会

#### 数据类型

- 基本数据类型

  - undefined。值未定义。

  ```javascript
  // undefined是由null派生出来的
  null == undefined  // true
  // ==操作符会为了比较二转换它的操作数
  ```

  - null。空对象指针。
  - number数值。双精度。

  ```javascript
  // 默认十进制
  
  // 八进制（严格模式下无效）
  let octalNum1 = 070 // 八进制的56
  let octalNUm3 = 08 // 无效，当成8处理
  
  // 十六进制 前缀0x(零·)
  let hexNum1 = 0xA; // 10
  
  小数点后面如果没有数字或数字是0，ES会把值转换为整数，
  
  NaN不等于任何包括NaN在内的任何值
  
  // 数值转换
  Number()  parseInt()  parseFloat()
  Number(null) //0
  Number(undifined) //NaN
  Number..如果字符串包含有效的十六进制则转换为对应的十进制整数值
  PasreInt..如果开头不是数字或加减号，返回NaN
  ```

  - string字符串

  ```javascript
  字符串本身是不可变的，通常情况下的修改字符串的值本质上是新建另一个字符串
  
  //转换为字符串
  let age = 10;
  age.toString(); // ‘10’
  age.toString(8); // '12'
  //如果是数字的话可以转为进制
  
  //ES6新增：模板字面量---使用`我是字符串`反引号定义字符串
  
  //原始字符串 String.raw()
  console.log(`\u00A9`); // ©
  console.log(String.raw`\u00A9`); // \u00A9
  ```

  - boolean布尔值

  ```
  Boolean('hhh') // true
  
  数据类型     转换为 true 的值     转换为 false 的值
  Boolean          true                 false
  String        非空字符串            ""（空字符串）
  Number      非零数值（包括无穷值） 0、NaN（参见后面的相关内容）
  Object          任意对象               null
  Undefined      N/A（不存在）          undefined
  ```

  - symbol符号，ES6新增

  ```javascript
  //符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。
  
  //Symbol()函数不能和new一起使用
  ```

- 复杂数据类型

  - object
    - constructor
    - **hasOwnProperty(propertyName) : 用于判断是否有给定的属性**
    - isPrototypeOf(object): 判断当前对象是否为另一个对象的原型
    - toString()
    - valueOf() : 通常与toString返回值相同
    - 对象的属性是无序的，不能保证遍历时的顺序

  ```javascript
  let o = new Object()
  ```

  

- typeof 是操作符。可带参数也可不带【typeof 'hhh' === typeof( 'hhh' )】

  ```javascript
  typeof a;    //'undefined'
  typeof(true);  //'boolean'
  typeof '123';  //'string'
  typeof 123;   //'number'
  typeof NaN;   //'number'
  typeof null;  //'object' 
  
  var obj = new String();
  typeof(obj);    //'object'
  
  var  fn = function(){};
  typeof(fn);  //'function'
  
  typeof(class c{});  //'function'
  严格来讲，函数在 ECMAScript 中被认为是对象，并不代表一种数据类型。可是，函数也有自己特殊的属性。为此，就有必要通过 typeof 操作符来区分函数和其他对象。
  ```

#### 操作符

- 一元操作符

  - 递增递减： ++/--
  - 一元加和减：+str => Number(str)：布尔值 false 和 true 转换为 0 和 1，字符串根据特殊规则进行解析，对象会调用它们的 valueOf()和/或 toString() 方法以得到可以转换的值。

- 位操作符

  - ES中数值以64位格式存储，但位操作符不直接应用到64位表示，而是先把值转换为32位整数进行位操作后再把结果转换为64位
  - 32位整数前31位表示数值，第32位表示符号，0为正，1为负
  - **按位非（~）**：取反，补数。**按位非的最终效果是对数值取反并减 1**

  ```javascript
  let num1 = 25; // 二进制 00000000000000000000000000011001
  let num2 = ~num1; // 二进制 11111111111111111111111111100110
  console.log(num2); // -26
  ```

  - **按位与（&）**：11得1，其它得0
  - **按位或（|）**：00得0，其它得1
  - **按位异或（^）**：相同取1，相反取0
  - **左移（<<）**: 空位补0，保留符号
  - **有符号右移（>>）**
  - **无符号右移（>>>）**

- 布尔操作符

  - 逻辑非
  - 逻辑与
  - 逻辑或

- 乘性操作符

  - 乘法操作符
  - 除法操作符
  - 取模操作符 %

- 指数操作符（ES7新增）**

  - 3 ** 2 = 9 与Math.pow(3，2)等效

- 相等操作符

  - **等于和不等于：==    !=**

    - 会进行强制类型转换

    - 如果任一操作数是布尔值，则将其**转换为数值再比较**是否相等。false 转换为 0，true 转换 为 1。 

    - 如果一个操作数是字符串，另一个操作数是数值，则尝试将字符串**转换为数值**，再比较是否相等。 

    - 如果一个操作数是对象，另一个操作数不是，则调用对象的 valueOf()方法取得其原始值，再 根据前面的规则进行比较。 在进行比较时，这两个操作符会遵循如下规则。 

    - **null 和 undefined 相等**。 null 和 undefined 不能转换为其他类型的值再进行比较。 

    - 如果有任一操作数是 NaN，则相等操作符返回 false，不相等操作符返回 true。记住：即使两 个操作数都是 NaN，相等操作符也返回 false，因为按照规则，NaN 不等于 NaN。 

    - **如果两个操作数都是对象，则比较它们是不是同一个对象。如果两个操作数都指向同一个对象， 则相等操作符返回 true。否则，两者不相等**。

    - ```javascript
      null == undefined         true
      "NaN" == NaN              false
      5 == NaN                  false
      NaN == NaN                false
      NaN != NaN                true
      false == 0                true
      true == 1                 true
      true == 2                 false
      undefined == 0            false
      null == 0                 false
      "5" == 5                  true
      ```

  - **全等和不全等： ===   !==**

- 条件操作符

  - ？ ：

#### 语句

- if语句
- do-while语句
- while语句
- for语句
- for-in语句：枚举**对象**中的非符号键**属性**。如果是对象就返回key,如果是数组就返回index
- for-of：于遍历**可迭代对象**的**元素**
- 标签语句
- break和continue语句
- with语句
- switch语句：和其它语言不同的是，ES的switch的条件的值不需要是常量、也可以是变量或表达式

#### 函数

- 不指定返回值的函数实际上会返回undefined



### 四、变量、作用域与内存

#### 原始值与引用值

- 引用值是保存在内存中的对象，js不允许直接访问内存位置
- 原始值-栈；引用值-堆
- **确定类型**：instanceof

```javascript
person instanceof Object; // 变量 person 是 Object 吗？
colors instanceof Array; // 变量 colors 是 Array 吗？
pattern instanceof RegExp; // 变量 pattern 是 RegExp 吗？
```

#### 执行上下文与作用域javascript

- 浏览器中，全局上下文就是常说的window对象。使用let和const的顶级声明不会定义在全局上下文中，但在作用域链解析上效果和var一样
- 全局上下文在关闭浏览器或网页时才会被销毁

- let：块级作用域，一对包含花括号{ }界定。if块、while块、function块

#### 垃圾回收

- 执行环境负责在代码执行时管理内存
- 基本思路：确定哪个变量不会再 使用，然后释放它占用的内存
  - 垃圾回收程序每隔一定时间（或者说在代码执行过程中某个预定的收集时间）就会自动运行
  - 找出哪些变量不会再使用
  - 在浏览器的发展史上，用到过两种主要的标记策略：标记清理和引用计数
    - 标记清理：垃圾回收程序运行的时候，会标记**内存中存储的**所有变量，然后看哪些变量是在上下文中的变量，去掉标记，剩下的就是要清理的
    - 引用计数：少用。引用计数在代码中存在循环引用时会出现问题。
- 性能：垃圾回收程序的时间调度问题
- 内存管理
  - 如果数据不再必要，把它设置为null，从而释放其引用
  - 隐藏类和删除操作
  - 内存泄漏：
    - 新建变量没有关键字
    - 闭包。引用的数据无法被清理
  - 静态分配和对象池

### 五、基本引用类型

引用类型是把数据和功能组织到一起的结构

#### Date

- new Date() 构造函数传参为空则取当前时间，传参为毫秒格式
- Date.parse() 获取时间戳。如果new Date()传入的是时间字符串，会默认内部调用Date.parse()

```
支持下列日期格式：
1、 “月/日/年”，如"5/23/2019"；
2、 “月名 日, 年”，如"May 23, 2019"；
3、 “周几 月名 日 年 时:分:秒 时区”，如"Tue May 23 2019 00:00:00 GMT-0700"；
4、 YYYY-MM-DDTHH:mm:ss.sssZ
```

- Date.now() 当前时间戳
- 重写了toLocaleString、toString、valueOf。
  - toLocaleString() - 2/1/2019 12:00:00 AM
  - toString() - Thu Feb 1 2019 00:00:00 GMT-0800 (Pacific Standard Time)

```javascript
******getTime()  返回日期的毫秒表示；与 valueOf()相同
******setTime(milliseconds) 设置日期的毫秒表示，从而修改整个日期
******getFullYear() 返回 4 位数年（即 2019 而不是 19）
getUTCFullYear() 返回 UTC 日期的 4 位数年
setFullYear(year) 设置日期的年（year 必须是 4 位数）
setUTCFullYear(year) 设置 UTC 日期的年（year 必须是 4 位数）
***getMonth() 返回日期的月（0 表示 1 月，11 表示 12 月）
getUTCMonth() 返回 UTC 日期的月（0 表示 1 月，11 表示 12 月）
setMonth(month) 设置日期的月（month 为大于 0 的数值，大于 11 加年）
setUTCMonth(month) 设置 UTC 日期的月（month 为大于 0 的数值，大于 11 加年）
******getDate() 返回日期中的日（1~31）
getUTCDate() 返回 UTC 日期中的日（1~31）
setDate(date) 设置日期中的日（如果 date 大于该月天数，则加月）
setUTCDate(date) 设置 UTC 日期中的日（如果 date 大于该月天数，则加月）
getDay() 返回日期中表示周几的数值（0 表示周日，6 表示周六）
getUTCDay() 返回 UTC 日期中表示周几的数值（0 表示周日，6 表示周六）
******getHours() 返回日期中的时（0~23）
getUTCHours() 返回 UTC 日期中的时（0~23）
setHours(hours) 设置日期中的时（如果 hours 大于 23，则加日）
setUTCHours(hours) 设置 UTC 日期中的时（如果 hours 大于 23，则加日）
******getMinutes() 返回日期中的分（0~59）
getUTCMinutes() 返回 UTC 日期中的分（0~59）
setMinutes(minutes) 设置日期中的分（如果 minutes 大于 59，则加时）
setUTCMinutes(minutes) 设置 UTC 日期中的分（如果 minutes 大于 59，则加时）
******getSeconds() 返回日期中的秒（0~59）
getUTCSeconds() 返回 UTC 日期中的秒（0~59）
setSeconds(seconds) 设置日期中的秒（如果 seconds 大于 59，则加分）
setUTCSeconds(seconds) 设置 UTC 日期中的秒（如果 seconds 大于 59，则加分）
******getMilliseconds() 返回日期中的毫秒
getUTCMilliseconds() 返回 UTC 日期中的毫秒
setMilliseconds(milliseconds) 设置日期中的毫秒
setUTCMilliseconds(milliseconds) 设置 UTC 日期中的毫秒
getTimezoneOffset() 返回以分钟计的 UTC 与本地时区的偏移量（如美国 EST 即“东部标准时间”返回 300，进入夏令时的地区可能有所差异）
```

#### RegExp 

```javascript
let expression = /pattern/flags;
表示匹配模式的标记。
 g：全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。
 i：不区分大小写，表示在查找匹配时忽略 pattern 和字符串的大小写。
 m：多行模式，表示查找到一行文本末尾时会继续查找。
 y：粘附模式，表示只查找从 lastIndex 开始及之后的字符串。
 u：Unicode 模式，启用 Unicode 匹配。
 s：dotAll 模式，表示元字符.匹配任何字符（包括\n 或\r）。
```

- exec( ): 返回匹配项的数组或null

#### 原始值包装类型

- Boolean、Number、String

  - String
    - substring()
    - charAt()
    - charCodeAt()
    - indexOf()  没找到则返回-1
    - laseIndexOf()
    - startsWith()
    - endsWith()
    - includes(targetStr, ? index)
    - trim()
    - reqeat()
    - toLocaleUpperCase()、.toUpperCase()
    - toLocaleLowerCase()、toLowerCase()
    - match()方法 == RegExp.exec()
  - Number
    - toFixed(2) 保留两位小数

- ```
  注意，使用 new 调用原始值包装类型的构造函数，与调用同名的转型函数并不一样。例如：
  let value = "25";
  let number = Number(value); // 转型函数
  console.log(typeof number); // "number"
  let obj = new Number(value); // 构造函数
  console.log(typeof obj); // "object" 
  ```

#### 单例内置对象

- Global对象: 事实上，不存在全局变量或全局函 数这种东西。在全局作用域中定义的变量和函数都会变成 Global 对象的属性 
  - isNaN()
  - isFinite()
  - parseInt()
  - parseFloat()
  - encodeURI()
  - eval()   这个方法就是一个完 整的 ECMAScript 解释器
  - 对象属性：Global 对象有很多属性，其中一些前面已经提到过了。像 undefined、NaN 和 Infinity 等特殊 值都是 Global 对象的属性。此外，所有原生引用类型构造函数，比如 Object 和 Function，也都是 Global 对象的属性。
  - window对象：Global对象的代理
  
- #### math

  ```
  Math 对象上提供的计算要比直接在 JavaScript 实现的快得多，因为 Math 对象上的计算使用了 JavaScript 引擎中更高效的实现和处理器指令。但使用 Math 计算的问题是精度会因浏览器、操作系统、指令集和硬件而异。
  ```

  - Math.max()和Math.min()
  - 舍入方法
    - Math.ceil( ) 向上取整
    - Math.floor( ) 向下取整
    - Math.round( ) 四舍五入
    - Math.fround( ) 返回数值最接近的单精度（32位）浮点数表示
  - Math.random( ) 随机数[0，1）
  - 其它：

  ```
  Math.abs(x)           返回 x 的绝对值
  Math.exp(x)           返回 Math.E 的 x 次幂
  Math.expm1(x)         等于 Math.exp(x) - 1
  Math.log(x)           返回 x 的自然对数
  Math.log1p(x)         等于 1 + Math.log(x)
  Math.pow(x, power)    返回 x 的 power 次幂
  Math.hypot(...nums)   返回 nums 中每个数平方和的平方根
  Math.clz32(x)         返回 32 位整数 x 的前置零的数量
  Math.sign(x)          返回表示 x 符号的 1、0、-0 或-1
  Math.trunc(x)         返回 x 的整数部分，删除所有小数
  Math.sqrt(x)          返回 x 的平方根
  Math.cbrt(x)          返回 x 的立方根
  Math.acos(x)          返回 x 的反余弦
  Math.acosh(x)         返回 x 的反双曲余弦
  Math.asin(x)          返回 x 的反正弦
  Math.asinh(x)         返回 x 的反双曲正弦
  Math.atan(x)          返回 x 的反正切
  Math.atanh(x)         返回 x 的反双曲正切
  Math.atan2(y, x)      返回 y/x 的反正切
  Math.cos(x)           返回 x 的余弦
  Math.sin(x)           返回 x 的正弦
  Math.tan(x)           返回 x 的正切
  ```


### 六、集合引用类型

#### Object

#### Array

- Array.from( ) :将类数组结构转换为数组示例

  - 将字符串拆分为单字符数组
  - 将集合（Map）和映射（Set）转换为一个数组
  - 对现有数组进行浅复制
  - arguments对象转数组

- Array.of( ) :将一组参数转换为数组实例

- 判断数组类型：

  - arr **instanceof** Array 在只有一个网页的时候适用（只有一个全局上下文
  - **Array.isArray( )** 

- 迭代器方法

  - keys()
  - values()
  - aEntries()

- 转换方法

  - toString()
  - valueOf()
  - join()

- 栈方法

  - push()
  - pop()

- 队列方法

  - unshift()
  - shift()

- 排序方法

  - reverse()
  - sort(?fun())  fun()返回正值则第一个参数在第二个参数后

- 操作方法

  - concat() : arr1.concat(arr2) 返回新数组；

    ```
    
    ```

  - slice(startIndex, ?endIndex): 返回索引内元素，不影响原数组

  - splice(要删除的第一个元素Index, 删除的元素数量，?要插入的元素...),影响原数组

  ```javascript
  let arr = ['a','b','c']
  const result = arr.splice(1, 0, 'bbb') // result []
  // arr ['a', 'bbb', 'b', 'c']
  ```

- 搜索和位置方法

  - indexOf() 没有返回-1
  - lastIndexOf()  没有返回-1
  - includes() 返回布尔值
  - find() 返回第一个匹配的元素
  - findIndex()

- 迭代方法, 都不改变原数组

  - every() 返回布尔值
  - filter()
  - forEach()
  - map()
  - some() 返回布尔值

- 归并方法

  - reduce()
  - reduceRight()

#### 定型数组

定型数组（typed array）是 ECMAScript 新增的结构，目的是提升向原生库传输数据的效率。实际上，
JavaScript 并没有“TypedArray”类型，它所指的其实是一种特殊的包含数值类型的数组。

- ArrayBuffer是一个普通的 JavaScript 构造函数，可用于在内存中分配特定数量的字节空间。
- DataView
  - ElementType
  - 字节序
  - 边界情形
  - 定型数组，是另一种形式的 ArrayBuffer 视图。

#### Map

ES6新增。真正的键/值存储机制

- 基本API

  - 创建 new Map()

  ```javascript
  /**如果想在创建的同时初始化实例，可以给 Map 构造函数传入一个可迭代对象，需要包含键/值对数
  组。可迭代对象中的每个键/值对都会按照迭代顺序插入到新映射实例中：**/
  // 使用嵌套数组初始化映射
  const m1 = new Map([
   ["key1", "val1"],
   ["key2", "val2"],
   ["key3", "val3"]
  ]);
  alert(m1.size); // 3
  
  for (let pair of m.entries()) {
   alert(pair);
  }
  // [key1,val1]
  // [key2,val2]
  // [key3,val3]
  ```

  - size() 大小
  - get(key)
  - set(key, val) 新增键值对
  - delete(key)
  - clear()
  - has(key)
  - entries() 转数组
  - forEach((val, key) => {})
  - 与object不同，Map实例会维护键值对的插入顺序--迭代顺序保证

#### WeakMap

ES6新增

- 弱映射的键只能是object或其继承类型
- 只要建存在，键/值对就会存在于映射中，并被当作对值的引用，因此就不会被当作垃圾回收。
- 不可迭代建
- 一些用途
  - 私有变量

#### Set

ES6新增

- 基本API
  - 创建 new Set()
  - add()
  - has()
  - size() 大小
  - delete

#### WeakSet

#### 迭代与扩展操作

### 七、迭代器与生成器

#### 迭代器模式

- 迭代器协议
  - next()
  - done属性和value属性

 - 提前终止迭代器
  - for-of循环通过 break、continue、return 或 throw 提前退出；

#### 生成器

  - 生成器基础：生成器的形式是一个函数，函数名称前面加一个星号（*）表示它是一个生成器。只要是可以定义
    函数的地方，就可以定义生成器。
  - next()
  - yeild
  - return
  - throw

  ```javascript
  // 生成器函数声明
  function* generatorFn() {}
  // 生成器函数表达式
  let generatorFn = function* () {}
  ```

### 八、对象、类与面向对象编程

无序集合

#### 理解对象

- 属性的类型

  - 数据属性

    - [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义

    - [[Enumerable]]：表示属性是否可以通过 for-in 循环返回

    - [[Writable]]：表示属性的值是否可以被修改

    - [[Value]]：包含属性实际的值

    - 要修改对象的默认特性，就必须使用Object.defineProperty

    - ```javascript
      let person = {};
      Object.defineProperty(person, "name", {
       writable: false,
       value: "Nicholas"
      });
      console.log(person.name); // "Nicholas"
      person.name = "Greg";
      console.log(person.name); // "Nicholas" 
      ```

  - 访问器属性

    - [[get]]：获取函数，在读取属性时调用。默认值为 undefined。

    - [[set]]：设置函数，在写入属性时调用。默认值为 undefined。

    - [[Configurable]]：表示属性是否可以通过 delete 删除并重新定义

    - [[Enumerable]]：表示属性是否可以通过 for-in 循环返回

    - 访问器属性是不能直接定义的，必须使用 Object.defineProperty()。

    - ```javascript
      // 定义一个对象，包含伪私有成员 year_和公共成员 edition
      let book = {
       year_: 2017,
       edition: 1
       };
      Object.defineProperty(book, "year", {
       get() {
       return this.year_;
       },
       set(newValue) {
       if (newValue > 2017) {
       	this.year_ = newValue;
       	this.edition += newValue - 2017;
         }
       }
      });
      book.year = 2018;
      console.log(book.edition); // 2 
      ```

    - 合并对象

      Object.assign(targetObj, obj1, ?obj2...): 实际上是对每个源对象执行浅复制（如果对象内部还有引用值，慎用），如果多个源对象有相同的属性则使用最后一个复制的值

    - Object.is( ),ES6新增，与===很像，但考虑了边界情形

    ```javascript
    console.log(Object.is(true, 1)); // false
    console.log(Object.is({}, {})); // false
    console.log(Object.is("2", 2)); // false
    
    // 正确的 0、-0、+0 相等/不等判定
    console.log(Object.is(+0, -0)); // false
    console.log(Object.is(+0, 0)); // true
    console.log(Object.is(-0, 0)); // false
    // 这些情况在不同 JavaScript 引擎中表现不同，但仍被认为相等
    console.log(+0 === -0); // true
    console.log(+0 === 0); // true
    console.log(-0 === 0); // true
    
    // 正确的 NaN 相等判定
    console.log(Object.is(NaN, NaN)); // true
    // 要确定 NaN 的相等性，必须使用极为讨厌的 isNaN()
    console.log(NaN === NaN); // false
    console.log(isNaN(NaN)); // true
    ```

  - 对象解构，es6新增：使用与对象匹配的结构来实现对象属性赋值  let { name: personName, age: personAge } = person;

#### 创建对象

- ES6 的类都仅仅是封装了 ES5.1 构造函数加原型继承的语法糖而已

- 工厂模式

  ```javascript
  function createPerson(name) {
   let o = new Object();
   o.name = name;
   o.sayName = function() {
   	console.log(this.name);
   };
   return o;
  }
  let person1 = createPerson("Nicholas");
  ```

- 构造函数模式

  ```javascript
  function Person(name){
   this.name = name;
   this.sayName = function() {
   	console.log(this.name);
   };
  }
  let person1 = new Person("Nicholas");
  person1.sayName(); // Nicholas
  ```

  缺点：其定义的方法会在每个实例上都创建一遍，没必要

- 原型模式

  每个函数都会创建一个 prototype 属性，这个属性是一个对象，包含应该由特定引用类型的实例 共享的属性和方法。使用原型对象的好处是，在它上面定义的属性和方法可以被对象实例共享。

  ```javascript
  function Person() {}
  Person.prototype.name = "Nicholas";
  Person.prototype.sayName = function() {
   console.log(this.name);
  };
  let person1 = new Person();
  person1.sayName(); // "Nicholas"
  ```

  - 原型
    - prototype属性
    - constructor属性：Person.prototype.constructor 指向 Person
    - 在自定义构造函数时，原型对象默认只会获得 constructor 属性，其他的所有方法都继承自 Object。
    - 每次调用构造函数创建一个新实例，这个实例的内部[[Prototype]]指针就会被赋值为构 造函数的原型对象。
    - 脚本中没有访问这个[[Prototype]]特性的标准方式，但 Firefox、Safari 和 Chrome 会在每个对象上暴露\_\_proto\_\_属性，通过这个属性可以访问对象的原型。
    - isPrototypeOf(): Person.prototype.isPrototypeOf(person2); // true
  - 原型层级
    - hasOwnProperty( ) 于确定某个属性是在**实例**上还是在原型对象上
  - 原型和in操作符
    - 单独使用时，只要可以在原型链上找到对应的字符，就返回true
  - 属性枚举顺序
    - for-in 循环、Object.keys()、Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()以及 Object.assign()在属性枚举顺序方面有很大区别
    - for-in 循环和 Object.keys() 的枚举顺序是不确定的，取决于 JavaScript 引擎，可能因浏览器而异。
    - Object.getOwnPropertyNames()、Object.getOwnPropertySymbols()和 Object.assign() 的枚举顺序是确定性的。
  - 对象迭代
    - Object.values( ) 返回对象值数组
    - Object.entries( ) 返回键值对数组

- 继承

  - 实现继承是 ECMAScript 唯一支持的继承方式，而这主要是通过原型链实现的。
  - instanceof、 isPrototypeOf( )
  - 盗用构造函数，解决原型包含引用值导致的继承问题
  - 组合继承
    - 使用原型链继承原型上的属性和方法
    - 通过盗用函数继承实例属性

- 类

  - 类声明不能被提升
  - 类受块作用域限制
  - typeof 类 === 'function'
  - ES6原生支持了类继承机制，背后使用的依旧是原型链
  - 构造函数、HomeObject、super( )



### 九、代理和反射

给目标对象定义一个关联的代理对象，而这个代理对象可以作为抽象的目标对象来使用。在对 目标对象的各种操作影响目标对象之前，可以在代理对象中对这些操作加以控制

#### 代理基础

- 代理是目标对象的抽象
- 类似C++指针
- Proxy构造函数创建（目标对象，处理程序对象）
- 使用代理的主要目的是可以定义**捕获器（trap）**,每个处理程序对象可以包含零个或多个捕获器，每个捕获器都对应一种基本操作，可以直接或间接在代理对象上调用。

```
// 定义get捕获器
const target = {
 foo: 'bar'
};
const handler = {
 // 捕获器在处理程序对象中以方法名为键
 get() {
 return 'handler override';
 }
};
const proxy = new Proxy(target, handler);
```

- 捕获器参数和反射API

  - 全局Reflect对象的同名方法

  - ```javascript
    const target = {
     foo: 'bar',
     baz: 'qux'
    };
    const handler = {
     get(trapTarget, property, receiver) {
     let decoration = '';
     if (property === 'foo') {
     decoration = '!!!';
     }
     return Reflect.get(...arguments) + decoration;
     }
    };
    const proxy = new Proxy(target, handler);
    console.log(proxy.foo); // bar!!!
    console.log(target.foo); // bar
    console.log(proxy.baz); // qux
    console.log(target.baz); // qux 
    ```

  - 捕获器不变式
  - 可撤销代理
  - 实用反射API

#### 代理捕获器与反射方法

- 代理可以捕获13种不同的基本操作，这些操作有各自不同的反射API方法、参数、关联ES操作和不变式
- 任何一种操作，只会有一个捕获处理程序被调用
- get() -- Reflect.get()
- set() -- Reflect.set()
- has() -- Reflect.has()
- defineProperty()
- getOwnPropertyDescriptor
- deleteProperty()
- ownKeys( )
- getPrototypeOf()
- setPrototypeOf()
- isExtensible()
- preventExtensions()
- apply()
- construct()

#### 代理模式

- 跟踪属性访问
- 隐藏属性
- 属性验证
- 函数与构造函数参数验证
- 数据绑定与可观察对象

### 十、函数

#### 箭头函数

- 不能使用arguments、super和new.target,

- 也不能用作构造函数，

- 没有prototype属性

#### 函数名

- 函数名就是指向函数的指针

- ```javascript
  function foo() {}
  let bar = function() {};
  let baz = () => {};
  console.log(foo.name); // foo
  console.log(bar.name); // bar
  console.log(baz.name); // baz
  console.log((() => {}).name); //（空字符串）
  console.log((new Function()).name); // anonymous 
  ```

#### 理解函数

参数在内部表现为一个数组

没有重载

#### 默认参数值

​	function func(aaa = 'defaultValue')

​    暂时性死区

#### 参数扩展与收集

扩展操作符传参

#### 函数声明与函数表达式

函数声明提升

函数表达式方式不会被提升

#### 函数内部

- arguments。类数组对象
- this
  - 标准函数中，this引用的是**把函数当成方法调用的上下文对象**----->必须要到函数被调用时才能确定
  - 箭头函数中，this引用的是**定义箭头函数的上下文**
- new.target ,ES6新增
  - 如果函数是正常调用的，new.target = undefined
  - 如果是new关键字，则new.target将引用被调用的构造函数
- caller: 引用的是调用当前函数的函数，如果是全局作用域中则为null

#### 函数属性与方法

- length
- prototype
  - 是保存引用类型所有实例方法的地方,这意味着toString()、valueOf()等方法实际上都保存在 prototype 上
- apply(函数内this的值，参数数组)
- call(函数内this的值，参数，参数...)
- bind(被绑定的对象)

#### 函数表达式

- 函数表达式创建的也叫匿名函数

#### 递归

- arguments.callee ：一个指向正在执行的函数的指针

- 尾调用优化

#### 闭包

- 指的是引用了另一个函数作用域中变量的函数
- this和arguments都是不能在内部函数中访问的
- 内存泄漏

#### 立即调用的函数表达式

（function() { //块级作用域 }）()

#### 私有变量

### 十一、期约与异步函数

#### 异步编程

#### 期约

- Promise/A+规范

- Promise
  - 状态机：pending、fulfilled、rejected
  - resolve, reject
  - then catch finally
  - Promise.all() 、Promise.race()

#### 异步函数

- async/await



### 十二、BOM

是使用Js开发web应用程序的核心。BOM 提供了与网页无关的浏览器功能对象。

#### window对象

ES中的Global对象、浏览器窗口的javascript接口

- Global作用域

- 窗口关系：top 对象始终指向最上层（最外层）窗口，即浏览器窗口本身。而 parent 对象则始终指向当前窗 口的父窗口。如果当前窗口是最上层窗口，则 parent 等于 top（都等于 window）。最上层的 window 如果不是通过 window.open()打开的，那么其 name 属性就不会包含值

- 窗口位置和像素比

  - screenLeft、screenTop
  - moveTo( )、moveBy( )

- 窗口大小

  - innerWidth( )、innerHeight( )浏览器窗口大小/(移动端)视口大小
  - outerWidth( )、outerHeight()浏览器本身大小
  - document.documentElement.clientWidth 和 document.documentElement.clientHeight 返回页面视口的宽度和高度

- 视口位置

  - 度量文档相对于视口滚动距离的属性有两对，返回相等的值：window.pageXoffset/window. scrollX 和 window.pageYoffset/window.scrollY。
  - 可以使用 scroll()、scrollTo()和 scrollBy()方法滚动页面。

- 导航与打开新窗口

  - window.open()
    - 弹出窗口
    - 。。。

  ```javascript
  // 与<a href="http://www.wrox.com" target="topFrame"/>相同
  window.open("http://www.wrox.com/", "topFrame");
  ```

- 定时器

- 系统对话框

  - alert()
  - confirm()

  ```
  if (confirm("Are you sure?")) {
   alert("I'm so glad you're sure!");
  } else {
   alert("I'm sorry to hear you're not sure.");
  } 
  ```

  - promt()

#### location对象

- 这个对象独特的地方在于，它既是 window 的属性，也是 document 的属性
- 提供了当前窗口中加载文档的信息，以及通常的导航功能

#### navigator对象

```
activeVrDisplays 返回数组，包含 ispresenting 属性为 true 的 VRDisplay 实例
appCodeName 即使在非 Mozilla 浏览器中也会返回"Mozilla"
appName 浏览器全名
appVersion 浏览器版本。通常与实际的浏览器版本不一致
battery 返回暴露 Battery Status API 的 BatteryManager 对象
buildId 浏览器的构建编号
connection 返回暴露 Network Information API 的 NetworkInformation 对象
cookieEnabled 返回布尔值，表示是否启用了 cookie
credentials 返回暴露 Credentials Management API 的 CredentialsContainer 对象
deviceMemory 返回单位为 GB 的设备内存容量
doNotTrack 返回用户的“不跟踪”（do-not-track）设置
geolocation 返回暴露 Geolocation API 的 Geolocation 对象
getVRDisplays() 返回数组，包含可用的每个 VRDisplay 实例
getUserMedia() 返回与可用媒体设备硬件关联的流
hardwareConcurrency 返回设备的处理器核心数量
javaEnabled 返回布尔值，表示浏览器是否启用了 Java
language 返回浏览器的主语言
languages 返回浏览器偏好的语言数组
locks 返回暴露 Web Locks API 的 LockManager 对象
mediaCapabilities 返回暴露 Media Capabilities API 的 MediaCapabilities 对象
mediaDevices 返回可用的媒体设备
maxTouchPoints 返回设备触摸屏支持的最大触点数
mimeTypes 返回浏览器中注册的 MIME 类型数组
onLine 返回布尔值，表示浏览器是否联网
oscpu 返回浏览器运行设备的操作系统和（或）CPU
permissions 返回暴露 Permissions API 的 Permissions 对象
platform 返回浏览器运行的系统平台
plugins 返回浏览器安装的插件数组。在 IE 中，这个数组包含页面中所有<embed>元素
product 返回产品名称（通常是"Gecko"）
productSub 返回产品的额外信息（通常是 Gecko 的版本）
registerProtocolHandler() 将一个网站注册为特定协议的处理程序
requestMediaKeySystemAccess() 返回一个期约，解决为 MediaKeySystemAccess 对象
sendBeacon() 异步传输一些小数据
serviceWorker 返回用来与 ServiceWorker 实例交互的 ServiceWorkerContainer
share() 返回当前平台的原生共享机制
storage 返回暴露 Storage API 的 StorageManager 对象
userAgent 返回浏览器的用户代理字符串
vendor 返回浏览器的厂商名称
vendorSub 返回浏览器厂商的更多信息
vibrate() 触发设备振动
webdriver 返回浏览器当前是否被自动化程序控制
```

- 检测插件-plugins数组

#### screen对象

```
availHeight 屏幕像素高度减去系统组件高度（只读）
availLeft 没有被系统组件占用的屏幕的最左侧像素（只读）
availTop 没有被系统组件占用的屏幕的最顶端像素（只读）
availWidth 屏幕像素宽度减去系统组件宽度（只读）
colorDepth 表示屏幕颜色的位数；多数系统是 32（只读）
height 屏幕像素高度
left 当前屏幕左边的像素距离
pixelDepth 屏幕的位深（只读）
top 当前屏幕顶端的像素距离
width 屏幕像素宽度
orientation 返回 Screen Orientation API 中屏幕的朝向
```

#### history对象

出于安全考虑，这个对象不会暴露用户访问过的 URL， 但可以通过它在不知道实际 URL 的情况下前进和后退。

- 导航

```
// 后退一页
history.go(-1);
// 前进一页
history.go(1);
// 前进两页
history.go(2);
// 后退一页
history.back();
// 前进一页
history.forward();
```

- 历史状态管理

### 十三、客户端检测

#### 能力检测

只需关心自己需要的能力存在与否

#### 用户代理检测

检测通过浏览器的用户代理字符串确定使用的是什么浏览器；不可靠。

#### 软件与硬件检测

现代浏览器提供了一组与页面执行环境相关的信息，包括浏览器、操作系统、硬件和周边设备信息。 这些属性可以通过暴露在 window.navigator 上的一组 API 获得。

### 十四、DOM

文档对象模型，是HTML和XML文档的编程接口

与浏览器中的HTML网页有关，并在Js中提供了DOM API

#### 节点层级

document节点表示每个文档的根节点

\<html\>-----在 HTML 页面中，文档元素始终是\<html\>元素。

- Node类型

  - 所有节点类型都继承 Node 类型

  - nodeName 与 nodeValue 保存着有关节点的信息。对元素 而言，nodeName 始终等于元素的标签名，而 nodeValue 则始终为 null。

  - 节点关系

    - 每个节点都有一个 **childNodes** 属性，其中包含一个 NodeList 的实例

    ```javascript
    let firstChild = someNode.childNodes[0];
    let secondChild = someNode.childNodes.item(1);
    let count = someNode.childNodes.length;
    ```

    - 每个节点都有一个 **parentNode** 属性，指向其 DOM 树中的父元素
    - **firstChild**      **lastChild**
    - **hasChildNodes**() 查询是否有子节点

  - 操纵节点

    - **appendChild()** 用于在childNodes列表末尾添加节点，返回新添加的节点。*如果把文档中已经存在的节点传给 appendChild()，则这个节点会从之前的位置被转移到新位置。*
    - **insertBefore(要插入的节点，参照节点)**
    - **replaceChild(要插入的节点，要替换的节点)**
    - **removeChild(要移除的节点)**
    - **cloneNode(要复制的节点，是否深克隆)**
    - normallize()

- document类型

  - 在浏览器中，文档对象 document 是 HTMLDocument 的实例（HTMLDocument 继承 Document），表示整个 HTML 页面。**document 是 window 对象的属性**，因此是一个全局对象。

  - 文档子节点

    - DocumentType、Element、Processing-Indtruction、Comment
    - documentElement: 始终指向\<html\>元素
    - body: 直接指向\<body\>元素
    - DocumentType

  - 文档信息

    - title
    - URL
    - domain 取得域名。可利用实现frame通信
    - referrer 取得来源

  - 定位元素

    - getElementById(),如果id相同，返回第一个
    - getElementsByTagName，返回NodeList
    - getElementsByName，返回NodeList

  - 特殊集合

    - document.anchors 包含文档中所有带 name 属性的元素。 
    - document.applets 包含文档中所有元素（因为元素已经不建议使用，所 以这个集合已经废弃）。
    -  document.forms 包含文档中所有元素（与 document.getElementsByTagName ("form") 返回的结果相同）。
    -  document.images 包含文档中所有\<img\>元素（与 document.getElementsByTagName ("img") 返回的结果相同）。 
    - document.links 包含文档中所有带 href 属性的元素。

  - DOM兼容性检测

  - 文档写入

    - write(str)

    ```javascript
    document.write("<strong>" + (new Date()).toString() + "</strong>");
    ```

    - writeIn(str)还会在字符串末尾追加一个换行符 （\n）
    - open()
    - close()

- Element类型：Element 表示XML或HTML 元素，对外暴露出访问元素标签名、子节点和属性的能力

  - HTML元素
  - 取得属性\设置属性
    - getAttribute("id")
    - setAttribute("class","mycassName")
    - removeAttribute()
  - 创建元素
    - **document.createElement("tagName")**
  - 元素后代

- Text类型

  - \<li\>间的空格

- Comment类型

  - 注释

- CDATASection类型

- DocumentType类型

- DocumentFragment 类型

- Attr 类型。属性节点尽管是节点，却不被认为是 DOM 文档树的一部分。

#### DOM编程

- 动态脚本\<script\>

- 动态样式

  - \<link\>元素用于包含CSS外部文件，而\<style\>元素用于添加嵌入样式

  ```javascript
  let link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "styles.css";
  let head = document.getElementsByTagName("head")[0];
  head.appendChild(link); 
  
  let style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode("body{background-color:red}"));
  let head = document.getElementsByTagName("head")[0];
  head.appendChild(style); 
  ```

- 操作表格

#### MutationObserver接口

- 可以在DOM被修改时异步执行回调

  - observe(DOM 节点， MutationObserverInit 对象)，，，**观察者**

  ```
  let observer = new MutationObserver(() => console.log('<body> attributes changed'));
  observer.observe(document.body, { attributes: true });
  //观察属性： attributes: true
  //观察字符数据   characterData: true
  //观察子节点 childList: true
  //观察子树  subtree: true
  
  document.body.className = 'foo';
  console.log('Changed body class');
  // Changed body class
  // <body> attributes changed
  注意，回调中的 console.log()是后执行的。这表明回调并非与实际的 DOM 变化同步执行
  ```

- MutationRecord

- disconnect() 终止执行回调

- 复用MutationObserver

- 重用MutationObserver，被disconnect之后

- MutationObserverInit与观察范围

- 异步回调与记录队列

  - 每次变化的信息保存在MutationRecord实例中，然后添加到记录队列
  - 每个队列对每个MutationObserver实例是唯一的

- 性能、内存与垃圾回收

  - 将变化回调委托给微任务来执行可以保证事件同步触发，同时避免随之而来的混乱
  - MutationObserver 实例与目标节点之间的引用关系是非对称的。MutationObserver 拥有对要 观察的目标节点的弱引用。然而，目标节点却拥有对 MutationObserver 的强引用。

- MutationObserver 是为代替性能不好的 MutationEvent 而问世的。使用它可以有效精准地监控 DOM 变化，而且 API 也相对简单。

### 十五、DOM扩展

#### Selectors API

是 W3C 推荐标准，规定了浏览器原生支 持的 CSS 查询 API

- querySelector()

  - 接收 CSS 选择符参数，返回匹配该模式的第一个后代元素，如果没有匹配 项则返回 null。

  - ```javascript
    // 取得<body>元素
    let body = document.querySelector("body");
    // 取得 ID 为"myDiv"的元素
    let myDiv = document.querySelector("#myDiv");
    // 取得类名为"selected"的第一个元素
    let selected = document.querySelector(".selected");
    ```

- querySelectorAll()

- matches()

- find()

- findAll()

#### 元素遍历

#### HTML5

在所有以前的 HTML 规范中，从未出现过描述 JavaScript 接口的情形，但HTML5 规范包含了与标记相关的大量 JavaScript API 定义

- CSS类扩展
  - getElementsByClassName()
  - classList
    - add(value)，向类名列表中添加指定的字符串值 value。如果这个值已经存在，则什么也不做。 
    - contains(value)，返回布尔值，表示给定的 value 是否存在。 
    - remove(value)，从类名列表中删除指定的字符串值 value。 
    - toggle(value)，如果类名列表中已经存在指定的 value，则删除；如果不存在，则添加。
- 焦点管理
  - document.activeElement
  - document.hasFocus
- HTMLDocument扩展
  - readyState
    - loading 文档正在加载
    - complete 加载完成
  - compatMode属性
    - 指示浏览器当前处于什么渲染模式（标准、混杂）
  - head属性
- 字符集属性 
  - characterSet 属性表示文档实际使用的 字符集，也可以用来指定新字符集。这个属性的默认值是"UTF-16"，但可以通过元素或响应头， 以及新增的 characterSeet 属性来修改
  - document.characterSet = "UTF-8";
- 自定义数据属性
  - data-     开头，设置
  - 通过dataset访问
- 插入标记
  - innerHTML
  - outerHTML 包含自身元素
  - insertAdjacentHTML(要插入的位置，HTML/文本)，insertAdjacentText()
    - "beforebegin"，插入当前元素前面，作为前一个同胞节点； 
    - "afterbegin"，插入当前元素内部，作为新的子节点或放在第一个子节点前面； 
    - "beforeend"，插入当前元素内部，作为新的子节点或放在最后一个子节点后面； 
    - "afterend"，插入当前元素后面，作为下一个同胞节点。
- 内存和性能问题
  - 可能在浏览器（特别是 IE）中导致内存问题
  - 比如，如果被移除的 子树元素中之前有关联的事件处理程序或其他 JavaScript 对象（作为元素的属性），那它们之间的绑定关 系会滞留在内存中。如果这种替换操作频繁发生，页面的内存占用就会持续攀升。
  - 在使用 innerHTML、 outerHTML 和 insertAdjacentHTML()之前，最好手动删除要被替换的元素上关联的事件处理程序和 JavaScript 对象。
- 跨站点脚本
- scrollIntoView()  存在于所有 HTML 元素上
  - alignToTop 是一个布尔值。 
    - true：窗口滚动后元素的顶部与视口顶部对齐。 
    - false：窗口滚动后元素的底部与视口底部对齐。 
  - scrollIntoViewOptions 是一个选项对象。 
    - behavior：定义过渡动画，可取的值为"smooth"和"auto"，默认为"auto"。 
    - block：定义垂直方向的对齐，可取的值为"start"、"center"、"end"和"nearest"，默认为 "start"。 
    - inline：定义水平方向的对齐，可取的值为"start"、"center"、"end"和"nearest"，默认为 "nearest"。 
  - 不传参数等同于 alignToTop 为 true。

#### 专有扩展

- children属性
- contains方法
- 插入标记
  - innerText
  - outerText
- 滚动
  - scrollIntoViewIfNeeded()

### 十六、DOM2和DOM3

在DOM结构上加入更多交互能力

- DOM Core：在 DOM1 核心部分的基础上，为节点增加方法和属性。
- DOM Views：定义基于样式信息的不同视图。
- DOM Events：定义通过事件实现 DOM 文档交互。
- DOM Style：定义以编程方式访问和修改 CSS 样式的接口。
- DOM Traversal and Range：新增遍历 DOM 文档及选择文档内容的接口。
- DOM HTML：在 DOM1 HTML 部分的基础上，增加属性、方法和新接口。
- DOM Mutation Observers：定义基于 DOM 变化触发回调的接口。这个模块是 DOM4 级模块， 用于取代 Mutation Events。

#### DOM的演进

#### 样式

- 元素尺寸
  - **偏移尺寸**：包含元素在屏幕上占用的所有视觉空间。元素在页 面上的视觉空间由其高度和宽度决定，包括所有内边距、滚动条和边框（但**不包含外边距**）。
    - offsetHeight
    - offsetLeft, 元素左边框外侧距离包含元素左边框内侧的像素数,相对于包含元素
    - offsetTop
    - offsetWidth
  - **客户端尺寸**：包含元素内容及其内边距所占用的空间，**不包含边框和外边距**, 不包含滚动条
    - clientHeight
    - clientWidth
    - 常用于确定 浏览器视口尺寸
  - **滚动尺寸**
    - scrollHeight 元素内容的总高度
    - scrollLeft 左侧隐藏的像素数
    - scrollTop 顶部隐藏的像素数
    - scrollWidth  元素内容的总宽度
  - 确定元素尺寸getBoundingClientRect()

#### 遍历

#### 范围

### 十七、事件

#### 事件流

- 事件冒泡（IE）：从最具体元素开始向上传播
- 事件捕获：从顶层到具体
- DOM事件流
  - 事件捕获
  - 到达目标
  - 事件冒泡

#### 事件处理程序

- HTML事件处理程序
  - onclick
- DOM0事件处理程序
- DOM2事件处理程序
  - 为事件处理程序的赋值和移除定义了两个方法：addEventListener()和 removeEventListener()
  - 它们接收 3 个参数：事件名、事件处理函 数和一个布尔值，true 表示在捕获阶段调用事件处理程序，false（默认值）表示在冒泡阶段调用事 件处理程序。
- IE事件处理程序
  - 在冒泡阶段添加事件处理
- 跨浏览器事件处理程序

#### 事件对象

- DOM事件对象
- IE事件对象

#### 事件类型

- 用户界面事件（UIEvent）：涉及与 BOM 交互的通用浏览器事件。 
  - load事件：会在整个页面（包括 所有外部资源如图片、JavaScript 文件和 CSS 文件）加载完成后触发。
    - 监听
    - 元素添加onload属性
  - unload事件
  - resize事件
  - scroll事件
- 焦点事件（FocusEvent）：在元素获得和失去焦点时触发。
  -  blur：当元素**失去焦点**时触发。这个事件不冒泡，所有浏览器都支持。
  - DOMFocusIn：当元素获得焦点时触发。这个事件是 focus 的冒泡版。Opera 是唯一支持这个事 件的主流浏览器。DOM3 Events 废弃了 DOMFocusIn，推荐 focusin。
  - DOMFocusOut：当元素失去焦点时触发。这个事件是 blur 的通用版。Opera 是唯一支持这个事 件的主流浏览器。DOM3 Events 废弃了 DOMFocusOut，推荐 focusout。
  - focus：当元素**获得焦点**时触发。这个事件不冒泡，所有浏览器都支持。
  - focusin：当元素获得焦点时触发。这个事件是 focus 的冒泡版。
  - focusout：当元素失去焦点时触发。这个事件是 blur 的通用版。
- 鼠标事件（MouseEvent）：使用鼠标在页面上执行某些操作时触发。
  - click
  - dblclick
  - mousedown
  - mouseenter
  - mouselease
  - mousemove
  - mouseout
  - mouseover
  - mouseup
- 滚轮事件（WheelEvent）：使用鼠标滚轮（或类似设备）时触发。
- 输入事件（InputEvent）：向文档中输入文本时触发。
- 键盘事件（KeyboardEvent）：使用键盘在页面上执行某些操作时触发。 
  - keypress
- 合成事件（CompositionEvent）：在使用某种 IME（Input Method Editor，输入法编辑器）输入 字符时触发。

#### 内存和性能

- 事件委托
  - 将事件冒泡委托至上级元素
- 删除事件处理程序

#### 模拟事件

### 十八、动画与Canvas图形

#### 使用requestAnimationFrame

- 早期定时动画通过setInterval控制
- 时间间隔的问题
- requestAnimationFrame()只会调用一次传入的函数，所以每次更新用户界面时需要再手 动调用它一次
- cancelAnimationFrame

#### 基本的画布功能

- 创建元素时至少要设置其 width 和 height 属性

```javascript
<canvas id="drawing" width="200" height="200">A drawing of something.</canvas>
```

-  getContext() : 以获取对绘图上下文的 引用
- toDataURL() : 导出元素上的图像

```javascript
let drawing = document.getElementById("drawing");
// 确保浏览器支持<canvas>
if (drawing.getContext) {
 // 取得图像的数据 URI
 let imgURI = drawing.toDataURL("image/png");
 // 显示图片
 let image = document.createElement("img");
 image.src = imgURI;
 document.body.appendChild(image);
} 
```

#### 2D绘图上下文

- 填充和描边fillStyle 和 strokeStyle

  - 填充以指定样式（颜色、渐变或图像）自动填充形 状
  - 描边只为图形边界着色

- 绘制矩形

  - fillRect(x ，y， 矩形宽度，矩形高度)  实心
  - strokeRect(x ，y， 矩形宽度，矩形高度)  空心
  - clearRect(x ，y， 矩形宽度，矩形高度)  擦除矩形

- 绘制路径

  - beginPath()
    - arc(x, y, radius半径, startAngle起始角度, endAngle结束角度, counterclockwise是否逆时针)
    - arcTo(x1, y1, x2, y2, radius)
    - bezierCurveTo(c1x, c1y, c2x, c2y, x, y)
    - lineTo(x,y)
    - moveTo(x,y)
    - quadraticCurveTo(cx, cy, x, y)
    - rect(x, y, width, height)

- 绘制文本

  - fillText()

  - strokeText

    - font

    - textAlign

    - textBaseLine

    - ```javascript
      context.font = "bold 14px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText("12", 100, 20);
      ```

- 变换

  - rotate(angle)：围绕原点把图像旋转 angle 弧度

  - scale(scaleX, scaleY)：通过在 x 轴乘以 scaleX、在 y 轴乘以 scaleY 来缩放图像。scaleX 和 scaleY 的默认值都是 1.0

  - translate(x, y)：把原点移动到(x, y)。执行这个操作后，坐标(0, 0)就会变成(x, y)

  - transform(m1_1, m1_2, m2_1, m2_2, dx, dy)：像下面这样通过矩阵乘法直接修改矩阵

    ```javascript
    m1_1 m1_2 dx
    m2_1 m2_2 dy
    0    0    1
    ```

  - setTransform(m1_1, m1_2, m2_1, m2_2, dx, dy)：把矩阵重置为默认值，再以传入的 参数调用 transform()

- 绘制图像

  - drawImage(image/canvas, x, y, width, height, 目标区域 x 坐标、目标区域 y 坐标、 目标区域宽度和目标区域高度)
  - **如果绘制的图像来自其他域而非当前页面，则不能获取 其数据**

- 阴影

  - shadowColor：CSS 颜色值，表示要绘制的阴影颜色，默认为黑色。 
  - shadowOffsetX：阴影相对于形状或路径的 x 坐标的偏移量，默认为 0。 
  - shadowOffsetY：阴影相对于形状或路径的 y 坐标的偏移量，默认为 0。
  - shadowBlur：像素，表示阴影的模糊量。默认值为 0，表示不模糊。

- 渐变

  - 渐变通过 CanvasGradient 的实例表示
  - 要创建一个新的 线性渐变，可以调用上下文的 createLinearGradient()方法：起点 x 坐标、 起点 y 坐标、终点 x 坐标和终点 y 坐标
  - 使用 addColorStop()方法为渐变指定色标

  ```javascript
  let gradient = context.createLinearGradient(30, 30, 70, 70);
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "black");
  ```

- 图案

  - 用 createPattern(image/video/canvas, 该如何重复图像)
    - repeat
    - repeat-x
    - repeat-y
    - no-repeat

- 图像数据

  - getImageData()方法获取原始图像数据
    - 4 个参数：
    - 要取得数据中第一个像素的左上角坐标
    - 要取得的像素宽度及高度

- 合成

  - globalAlpha 绘制内容的透明度
  - globalCompositionOperation 新绘制的形状如何与上下文中已有的形状融合

#### WebGL

3D上下文

### 十九、表单脚本

#### 表单基础

- 提交表单

  - ```javascript
    <!-- 通用提交按钮 -->
    <input type="submit" value="Submit Form">
    <!-- 自定义提交按钮 -->
    <button type="submit">Submit Form</button>
    <!-- 图片按钮 -->
    <input type="image" src="graphic.gif">
        
    如果表单中有上述任何一个按钮，且焦点在表单中某个控件上，则按回车键也可以提交表单。
    （textarea 控件是个例外，当焦点在它上面时，按回车键会换行。）
    ```

  - form.submit()

- 重置表单

  - type="reset"
  - form.reset()

#### 文本框编程

- input

- textarea

- 选择文本 select( )

- 输入过滤

  - ```javascript
    // 只允许输入数字
    textbox.addEventListener("keypress", (event) => {
     if(!/\d/.test(String.fromCharCode(event.charCode))){
     	event.preventDefault();
     }
    });
    ```

- 自动切换

#### 选择框编程

- select
- option

#### 表单序列化

#### 富文本编辑

### 二十、JavaScript API

#### Atomics与SharedArrayBuffer

多个上下文访问 SharedArrayBuffer 时，如果同时对缓冲区执行操作，就可能出现资源争用问 题。Atomics API 通过强制同一时刻只能对缓冲区执行一个操作，可以让多个上下文安全地读写一个 SharedArrayBuffer。Atomics API 是 ES2017 中定义的。

- SharedArrayBuffer
  - 可以被任意多个执行上下文同时使用,意味着并发线程操作成为了可能
- 原子操作基础

#### 跨上下文消息

跨文档消息，有时候也简称为 XDM（cross-document messaging），是一种在不同执行上下文（如不 同工作线程或不同源的页面）间传递信息的能力

- postMessage(消息，表示目标接收源的字符串，可选的可传输对象的数组)

#### Encoding API

- 文本编码
  - 批量编码
  - 流编码
- 文本解码

#### File API与Blob API

- FIle类型

- FileReader类型

  - 异步文件读取机制
  - readAsText(file, encoding)：从文件中读取纯文本内容并保存在 result 属性中。第二个 参数表示编码，是可选的
  - readAsDataURL(file)：读取文件并将内容的数据 URI 保存在 result 属性中
  - readAsBinaryString(file)：读取文件并将每个字符的二进制数据保存在 result 属性中
  - readAsArrayBuffer(file)：读取文件并将文件内容以 ArrayBuffer 形式保存在 result 属性

- FileReaderSync，FileReader 的同步版本

- Blob 与部分读取

  - Blob 实际上是 File 的超类
  - blob 表示二进制大对象（binary larget object），是 JavaScript 对不可修改二进制数据的封装类型
  - 可以使用 FileReader 从 Blob 中读取数据

  ```javascript
  let filesList = document.getElementById("files-list");
  filesList.addEventListener("change", (event) => {
   let info = "",
   output = document.getElementById("output"),
   progress = document.getElementById("progress"),
   files = event.target.files,
   reader = new FileReader(),
   blob = blobSlice(files[0], 0, 32);
   if (blob) {
   reader.readAsText(blob);
   reader.onerror = function() {
   output.innerHTML = "Could not read file, error code is " +
   reader.error.code;
   };
   reader.onload = function() {
   output.innerHTML = reader.result;
   };
   } else {
   console.log("Your browser doesn't support slice().");
   }
  }); 
  ```

- 对象URL与Blob

- 读取拖放文件

#### 媒体元素

- video
- audio

#### 原生拖放

- dragstart
- drag
- dragend

#### Notifications API

用于向用户显示通知

#### Page Visibility API

为 开发者提供页面对用户是否可见的信息

#### Streams API

实现 Observable 接口的 JavaScript 库共享了很多流的基础概念

- 可读流
- 可写流
- 转换流

#### 计时API

Performance 接口通过 JavaScript API 暴露了浏览器内部 的度量指标，允许开发者直接访问这些信息并基于这些信息实现自己想要的功能

#### Web组件

#### Web Cryptography API

描述了一套密码学工具，规范了 JavaScript 如何以安全和符合惯例的方式实现 加密