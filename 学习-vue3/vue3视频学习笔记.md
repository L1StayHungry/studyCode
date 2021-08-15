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

## 兼容v2.x

- 2.x的问题。数据和业务逻辑分散了。

## 组合API

- setup(){}  组合api入口函数
- composition API(vue 3), option API(vue2)
- 本质：composition api注入到option api

## setup执行时机及注意点

- 执行时间
  - beforeCreate -> setup -> created
  - setup 不可以使用 data()、methods()
- setup只能是同步的，不能是异步的

## reactive

- 是vue3提供的响应式数据的方法

- vue2中的响应式数据通过defineProperty实现，Vue3则通过ES6的proxy实现

- 注意点：

  - 参数必须是对象（/json/arr）

  - ---

## ref

- 实现简单值的监听

- ref本质还是一个reactive,ref函数底层自动将ref转换成reactive。 ref(18) => reactive({value: 18})
- 通过isRef()和isReactive()判断两者区别

## 递归监听

- 默认情况下创建的数据（ref, reactive）都是递归监听
-  每一层都包装了一个proxy对象
- shallowReactive
- shallowRef
- triggerRef。根据修改过的数据更新。

## toRaw

- 从reactive或ref中获得原始数据 
- 做一些不想被监听的事情

## markRaw

- 数据永远不想被追踪

## toRef

- 复制生成响应式数据
  - ref->复制，不会影响以前的数据
  - toRef->会影响被复制的数据，界面（被复制的数据）不会自动更新