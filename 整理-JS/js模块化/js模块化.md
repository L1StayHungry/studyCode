# JS模块化

AMD、CommonJs、ESM



## CommonJs

- 由nodejs支持
- 如何划分模块
  - 以【文件】划分模块
- 同步的
  - 阻塞
- 实现
  - 模块加载器：解析文件地址
    - require
      - 返回一个对象，包含了解析之后的内容
  - 模块解析器：执行文件内容，node里面是用v8执行的
    - 运行一下，把结果缓存，避免多次require时重复解析



## ESM

- 由底层实现

- nodejs
  - 现在已经支持ESM