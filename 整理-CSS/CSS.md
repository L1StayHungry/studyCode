### CSS3新增特性

- 圆角边框 border-radios

- 阴影 border-shadow

- border-image：设置边框图像

- 渐变： 

  - Linear-gradient（）线性渐变
  - Radial-gradient（）径向渐变

- 文本效果

  - Word-break：定义如何换行 

    Word-wrap：允许长的内容可以自动换行 

    Text-overflow：指定当文本溢出包含它的元素，应该干啥 

    Text-shadow：文字阴影（水平位移，垂直位移，模糊半径，阴影颜色） 

    转换： 

    Transform 应用于 2D3D 转换，可以将元素旋转，缩放，移动，倾斜 

    Transform-origin 可以更改元素转换的位置，（改变 xyz 轴） 

    Transform-style 指定嵌套元素怎么样在三位空间中呈现

- 2D转换

- 3D转换

- 过渡

- 动画

### 语法

- 层叠
- 继承
- 简写
- @规则

### 定位

- position
  - static
  - absolute
  - relative
  - fixed
- z-index
- 关于居中

### 样式

- 背景
- 文本
  - px、rem、em的区别
- 轮廓
- 列表

### 布局

- BFC

- 盒子模型

  - 实际高宽包括外边距在内
  - Border-box（怪异模式默认） 和 content-box（标准模式默认）
    - 顾名思义，Border-box就是设置width-height时包含border在内计算的盒子模型，content-box则只是针对内容
    - 这里需要和其它xxxWidth做一下对比
      - offSetWidth指的是元素实际上占用的宽，是除了maigin，其它都算
      - clientWidth指的是视口尺寸，只算内容和内边距（+滚动条）
      - scrollWidth算内容和内边距（即使溢出）
  - Margin和padding的使用场景

- FlexBox

  - 属性有哪些
    - flex-direction 主轴方向
    - flex-wrap 换行方式
    - align-item 交叉轴对齐方式
    - justify-content 主轴对齐方式
      - center
      - space-between
      - space around
      - flex-start
      - flex-end
    - order 排列顺序
    - flex-shrink 缩小比例，默认为1，如果设为0，空间不足时-不缩小
  - 布局原理

- Gird

- Column

- Float

  - 清除浮动的方式。高度塌陷：当所有的子元素浮动的时候，且父元素没有设置高度，这时候父元素就会产生高度塌陷

    - 给父元素单独定义高度
      - 快速简单代码少，无法进行响应式布局
    - 父级元素overflow: hidden; (zoom: 1;   ie6); 超出部分会被隐藏
    - 浮动元素后加空标签，clear:both; height:0; overflow:hidden
    - **添加伪元素**

    ```css
    .father:after{ 
        Content: ""; 
        Clear: both; 
        display: block; 
    }
    ```

- 双飞翼和圣杯布局

### 选择器

- 元素选择器
- 选择器分组
- 类选择器
- ID选择器
- 属性选择器
- 后代选择器
  - 后续兄弟选择器 ~     :可以在动态添加元素时设下边距
- 子元素选择器
  - 符号 >
- 相邻选择器
  - 符号 +
- 伪类
- 伪元素

### 应用-响应式

- 响应式
- 自适应

### 动画

- Animation
  - 动画
- transition
  - 过渡
- js动画和css动画的不同
  - 渲染线程分为 main thread 和 compositor thread，如果 css 动画 只 改 变 transform 和 opacity ， 这时整个 CSS 动 画 得 以 在 compositor trhead 完成（而 JS 动画则会在 main thread 执行， 然后出发 compositor thread 进行下一步操作），特别注意的是如果改变 **transform 和 opacity 是不会 layout 或者 paint 的**。 
  - 区别： 
    - 功能涵盖面，JS 比 CSS 大 实现/重构难度不一，CSS3 比 JS 更加简单
    - 性能调优方向固定对帧速表现不好的低版本浏览器，
    - css3 可以做到自然降级
    - css 动画有天然事件支持 
    - css3 有兼容性问题

### 关于重排(回流)以及重绘

- 浏览器渲染过程

  - HTML代码转化成DOM Tree
  - CSS代码转化成CSSOM Tree（CSS Object Model）
  - 结合DOM和CSSOM，生成一棵渲染树Render Tree
  - 生成布局（**flow**），将所有渲染树进行平面合成（！此步骤再次触发即回流）
  - 将布局绘制（**paint**）在屏幕上（！此步骤再次触发即重绘）

- 触发重排

  - 操作dom节点，添加移动删除更新，display:none

  - 元素尺寸改变——边距、填充、边框、宽度和高度

  - 内容改变——比如文本改变或者图片大小改变而引起的计算值宽度和高度改变

  - 页面渲染初始化

  - 浏览器窗口尺寸改变

  - 查询某些属性或调用某些方法。比如说：

    offsetTop、offsetLeft、 offsetWidth、offsetHeight、scrollTop、scrollLeft、scrollWidth、scrollHeight、clientTop、clientLeft、clientWidth、clientHeight

  - 激活CSS伪类（例如：`:hover`）

  - **通过相对定位绝对定位来实现居中**

- 触发重绘

  - 看得到的网页变化实际上都会触发重绘
- display:visibility
  - 背景色等属性的改变
- **通过transform实现居中**
  - 重绘不一定导致重排，但重排一定会导致重绘


​    