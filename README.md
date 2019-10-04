# proj3-support-center

这是我在学习[Vue.js 2 Web Development Projects](https://www.packtpub.com/web-development/vuejs-2-web-development-projects?utm_source=github&utm_medium=repository&utm_campaign=9781787127463) Chapter5的过程中所做的一个练习项目。

项目实现了一家虚构公司的支持中心，包括

- 一个FAQ页面，包含几个问题和答案；
- 一个支持工单管理页面，用户能够在此显示和创建新的工单。

这个应用具有一个认证系统，允许用户创建账户或登录。

## 运行

### 服务器

[服务器端代码](https://github.com/PacktPublishing/Vue-js-2-Web-Development-Projects/tree/master/Chapter05/chapter5-full/server)

```
npm install
npm start
```
会得到一个运行在3000端口的服务器。

### 客户端

客户端即本项目。

```
npm install
npm run serve / npm run build
```

访问<http://localhost:8080>即可查看。

## 技术点

- 使用[vue-router](https://router.vuejs.org/)设置路由，并设置嵌套路由对应组件的嵌套；
- 使用[vue-router](https://router.vuejs.org/)的导航守卫`beforeEach`管理公开/私有/访客等不同类型的路由的访问；
- 使用[vue-router](https://router.vuejs.org/)的动态路由实现根据ID访问工单详情；
- 使用浏览器的`fetch` API与服务器进行通信；
- 自定义Vue插件，在所有组件上添加方法。其中：
  - `fetch`插件使用预定义的URL向服务器发出请求，并处理了会话过期（403响应）的情况；
  - `state`插件方便了对于集中式state对象的访问；
- 定义mixin，在多个组件中复用组件定义。其中：
  - `RemoteData`mixin允许任何组件向服务器发出请求，并进行了加载管理和错误管理；
  - `PersistantData`mixin使用浏览器`localStorage` API自动将一些数据属性保存到本地，并在创建组件时恢复；
- 创建并复用表单以及输入框组件，其中：
  - `SmartForm`定义表单组件的通用结构，并自动调用一个传入的操作函数（大多数情况下是对服务器发出的`POST`请求），显示加载动画和该操作抛出的错误消息；
  - `FormInput`定义通用输入框组件，其中使用自定义`v-model`改变了默认`v-model`利用的prop和事件；
- 在过滤器中使用[momentjs](https://momentjs.com/)实现日期的格式化显示。

## 项目结构

```
│  filters.js             // 时间过滤器
│  global-components.js   // 注册全局组件
│  main.js                // 主程序
│  router.js              // 路由配置
│  state.js               // 定义集中式state存储用户数据
│
├─assets
│      logo.svg           // 原书给定的logo
│
├─components
│      AppLayout.vue      // 项目入口
│      FAQ.vue            // FAQ页面
│      FormInput.vue      // 通用输入框
│      Home.vue           // 主页
│      Loading.vue        // 加载动画
│      Login.vue          // 登录页面
│      NavMenu.vue        // 导航栏
│      NewTicket.vue      // 新建工单页面
│      NotFound.vue       // not found页面
│      SmartForm.vue      // 通用表单
│      Ticket.vue         // 工单详情页面 
│      Tickets.vue        // 工单列表页面
│      TicketsLayout.vue  // 工单整体页面
│
├─mixins                  // 在多个组件中复用组件定义
│      PersistantData.js  // 自动保存数据属性
│      RemoteData.js      // 向服务器发起请求，加载及错误管理
│
├─plugins                 // 在所有组件上添加方法
│      fetch.js           // 向服务器发起请求的$fetch方法
│      state.js           // 访问state对象的$state方法
│
└─style                   // 原书给定的stylus样式
        imports.styl
        main.styl
        md-colors.styl
        mixins.styl
        transitions.styl
        vars.styl
```