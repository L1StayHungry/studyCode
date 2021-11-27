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

#### Js合并成大文件？out了

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

```
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

```
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

  ```
  // undefined是由null派生出来的
  null == undefined  // true
  // ==操作符会为了比较二转换它的操作数
  ```

  - null。空对象指针。
  - number数值。双精度。

  ```
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

  ```
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

  ```
  //符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。
  
  //Symbol()函数不能和new一起使用
  ```

- 复杂数据类型

  - object

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


#### 流控制语句

#### 函数