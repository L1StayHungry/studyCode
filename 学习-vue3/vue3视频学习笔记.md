## vue3六大亮点

- 性能。比v2快1.2~2倍

  - diff算法

    - vue2虚拟dom进行全量比较
    - vue3新增了**静态标记**。根据标记不同可以知道对应的变化类型。

  - hoistStatic 静态提升

    - vue2无论元素是否参与更新，每次都会被重新创建再渲染

    - vue3对于不参与更新的元素会做静态提升，只会被创建一次，在渲染时直接复用

  - cacheHandlers 事件侦听器缓存

    - 去除静态标记

  - ssr渲染

- 按需编译

- 组合API

- 更好的Ts支持

- 暴露了自定义渲染API

- 更先进的组件

## 项目创建

### 创建方式

- vue-cli
- webpack
- **vite**
  - 利用Es6的import特性，拦截请求进行预编译，省去webpack的打包时间
  - 安装： npm install -g create-vite-app
  - 创建项目：create-vite-app projectName

### 兼容v2.x

- 2.x的问题。数据和业务逻辑分散了。
- 组合API。
  - setup(){}  组合api入口函数
  - composition API(vue 3), option API(vue2)
  - 本质：composition api注入到option api