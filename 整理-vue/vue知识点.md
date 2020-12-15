# vue知识点

## vue概念

- 渐进式框架：可以应用一部分功能...
- 响应式

## 基础语法

### 插值操作

- mustache

  ```javascript
  {{message}} {{nextMessage}} {{message+nextMessage}}
  ```

- v-once

  ```javascript
  <h1 v-once>{{message}}</h1>
  
  只会渲染一次，意味着渲染后视为静态内容，不再动态绑定
  ```

- v-html

  将插入的值转换为html语句

  ```html
  <div id="app">
     <h1 v-html="url"></h>
  </div>
  
  data: {
    message: '你好呀',
    url:'<a href="http://www.baidu.com">百度</a>'
  },
  ```

- v-pre

  ```h&#39;t&#39;m
  跳过这个元素和它的子元素的编译过程。一些静态的内容不需要编辑加这个指令可以加快编辑
  
  <span v-pre>{{ this will not be compiled }}</span>   
  显示的是
  {{ this will not be compiled }}
  ```

- v-clock

  - 防止页面加载时出现 vuejs 的变量名而设计的，添加了这条指令的话会等待变量编译完毕后再显示，不会出现瞬间的变量名

### 绑定

- v-bind

```html
<img v-bind:src="imgUrl" alt="">
<a v-bind:href="baiduUrl">百度</a>

语法糖：
<img :src="imgUrl" alt="">
<a :href="baiduUrl">百度</a>
```

### 事件监听

- v-on

```html
<button @click="btnClick()">按钮1</button>

methods : {
    btnClick() {
        ...
    }
}
```

修饰符：

- .stop	
  - 阻止事件冒泡
- .prevent     
  - 阻止默认事件
- .{ keyCode | keyAlias }
- .native
- .once