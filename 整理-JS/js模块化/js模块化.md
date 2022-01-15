# JS模块化

发展

- 无模块化

  - 文件分离，基础模块化的第一步

    - 会污染全局作用域，不利于大型项目的开发及团队维护

  - 模块化雏形-IIFE语法侧的优化

    - 作用域

      - 函数块作用域

      - ```javascript
        const iifeModule = (() => {
          let count = 0;
          return {
            increase: () => ++count;
            reset: () => {
              count = 0;
            }
          }
        })();
        
        iifeModule.increase();
        iifeModule.reset();
        ```

- 传统模块化

  - CommonJS
  - AMD & CMD & UMD
  - ES6(ESM)

- 现代型模块化

- 模块化与工程化

- 模块化与组件化

- 模块化与设计模式



AMD、CommonJs、ESM



## CommonJs(CJS)

- 由nodejs支持
- 如何划分模块
  - 以【文件】划分模块
- 同步的
  - 阻塞
- 使用
  - 通过module + exports 去对外暴露接口
  - 通过require来调用其他模块

- 实现
  - 模块加载器：解析文件地址
    - require
      - 返回一个对象，包含了解析之后的内容
  - 模块解析器：执行文件内容，node里面是用v8执行的
    - 运行一下，把结果缓存，避免多次require时重复解析
- 新的问题 —— 异步依赖（主要针对了服务端的解决方案。对于异步拉取依赖的处理整合不是那么的友好。）

## AMD

- 异步加载+允许制定回调函数

- 定义

  - ```
      define('amdModule', ['dependencyModule1', 'dependencyModule2'], (dependencyModule1, dependencyModule2) => {
        // 业务逻辑
        // 处理部分
        let count = 0;
        const increase = () => ++count;
        const reset = () => {
          count = 0;
        }
    
        return {
          increase, reset
        }
      })
    ```

- 引入

  - ```
      require(['amdModule'], amdModule => {
        amdModule.increase();
      })
    ```

## UMD

- 兼容AMD&CMD
- 适合在浏览器中加载异步模块，可以并行加载多个模块
- 会有引入成本，不能按需加载

## 

## ESM

- 由底层实现

- nodejs
  - 现在已经支持ESM

- 新增定义：
  引入关键字 —— import
  导出关键字 —— export

```
  // 引入区域
  import dependencyModule1 from './dependencyModule1.js';
  import dependencyModule2 from './dependencyModule2.js';

  // 实现代码逻辑
  let count = 0;
  export const increase = () => ++count;
  export const reset = () => {
    count = 0;
  }

  // 导出区域
  export default {
    increase, reset
  }
  
  
  ****************或者这样引入*************************
   <script type="module" src="esModule.js"></script>
```

- 动态模块

- es11原生解决方案

  ```
    import('./esModule.js').then(dynamicEsModule => {
      dynamicEsModule.increase();
    })
   
    // 优点（重要性）：通过一种最统一的形态整合了js的模块化
    // 缺点（局限性）：本质上还是运行时的依赖分析
  ```

  

## 前端工程化

- 线下执行
- 方案
  - grunt
  - gulp
  - webpack
- 优点
  - 构建时生成配置，运行时执行
  - 最终转化成执行处理依赖
  - 可以拓展

完全体 webpack为核心的工程化 + mvvm框架组件化 + 设计模式