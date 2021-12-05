#### 1、语义化

两个优点：

- 便于开发者阅读和写出更优雅的代码，结构清晰、利于维护
- 让搜索引擎更易懂（SEO）：爬虫依赖于标签来确定上下文和各个关键字的权重，比如H1、header、footer等

#### 2、H5新增的内容有哪些

- 语义化标签
  - header、main、footer
  - nav、aside、article
  - section
  - video
  - audio
  - dialog
- 新增表单类型
- 多媒体标签
  - video
  - audio

#### 3、行内元素/块级元素有哪些

- 行内：a br span img input select textarea...
- 块级：div h1-h6 p ul table...

#### 4、Doctype作用

- 声明文档类型，指定HTML版本

  - HTML 5

    ```
    <!DOCTYPE html>
    ```

  - HTML 4.01 Strict

    ```
    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    ```

#### 5、视频音频标签的使用

- src 视频地址
- width/height 仅视频
- autoplay
- controls 控制条
- poster 占位图片 仅视频
- loop 是否循环播放
- perload 预加载视频---与autoplay冲突
- muted 静音模式

#### 6、HTML中的href和src的区别

- href表示超文本引用，用在link和a等元素上，href是引用和页面关联，是在当前元素和引用资源之间建立联系。**会下载并且不会停止**对当前文档的处理，这也是为什么建议使用link方式来加载css而不是使用@import
- src表示引用资源，表示替换当前元素，用在img，script，iframe上，src是页面内容不可缺少的一部分。**会暂停**其他资源的下载和处理，直至讲该资源加载，编译，执行完毕

#### 7、link和@import的异同

- 都是外部引用css的方式
- 1
  - link是XHTML标签，除了加载css外，还可以定义RSS等其他事物
  - @import属于css范畴，只能加载css
- 2
  - link引用css时，在页面载入时同时加载
  - @import需要页面网页完全载入以后加载。
- 3
  - link是XHTML标签，无兼容问题
  - @import是css2.1提出的，低版本的浏览器不支持
- 4
  - link支持使用javascript控制dom去改变样式；而@import不支持