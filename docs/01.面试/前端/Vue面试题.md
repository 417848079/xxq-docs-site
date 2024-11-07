## 1. Vue 中的 data 为什么是一个函数？

> 组件实例化的时候这个函数将会被调用，返回一个对象， 计算机会给这个对象分配一个内存地址，实例化几次就分配几个内存地址，他们的地址都不一样，所以每个组件中的数据不会相互干扰，改变其中一个组件的状态，其它组件不变。  
> 为了保证组件的独立性和可复用性，如果 data 是个函数的话，每复用一次组件就会返回新的 data，类似于给每个组件实例创 建一个私有的数据空间，保护各自的数据互不影响

## 2. Vue2 和 Vue3 的区别

- 1.  性能提升
      > 更快的渲染速度：Vue 3 通过改进虚拟 DOM 的算法和底层架构，实现了更快的渲染速度和更低的内存使用率。在处理大量数据或复杂组件时，Vue 3 能够提供更流畅的用户体验。
           体积更小：通过 webpack 的 tree-shaking 功能，Vue 3 能够移除未使用的代码，从而减小最终打包的体积。这使得 Vue 3 在开发大型应用时更加高效。
- 2.  API 设计
      > 组合式 API（Composition API）：  
      > Vue 3 引入了一个新的 API——组合式 API，它提供了一种更灵活的方式来组织组件的逻辑。通过组合式 API，开发者可以将组件的功能拆分成更小的、可复用的函数（称为 composables），这有助于构建大型应用并保持代码的可维护性。与 Vue 2 的选项式 API 相比，组合式 API 使得代码更加简洁和易于理解。  
      > 生命周期钩子函数：  
      > Vue 3 中的生命周期钩子函数有所变化，如 beforeCreate 和 created 被 setup 函数替代，beforeMount 和 mounted 等钩子函数则需要在 onBeforeMount 和 onMounted 等函数中显式调用。此外，Vue 3 还增加了一些新的钩子函数，如 onRenderTracked 和 onRenderTriggered。

  - 3. 响应式系统

       > Proxy vs. Object.defineProperty：
       > Vue 3 的响应式系统是基于 ES6 的 Proxy API 实现的，而 Vue 2 则是基于 Object.defineProperty。Proxy API 能够提供更全面的属性监听（包括属性的添加、删除以及数组内部的变化），从而解决了 Vue 2 中响应式系统的一些限制。
       > 响应式 API 的改进：  
       > Vue 3 提供了一系列新的响应式 API，如 reactive、ref、computed 等，这些 API 使得开发者能够更灵活地处理响应式数据。

  - 4. TypeScript 支持
       > 更好的 TypeScript 集成：Vue 3 从一开始就把 TypeScript 作为一等公民来考虑，这意味着 Vue 3 与 TypeScript 的集成更加自然，为开发大型应用提供了更好的支持。Vue 3 的 API 和内部实现都充分考虑了 TypeScript 的类型安全特性。

- 5. 新特性
     > 多个根节点（Fragments）：  
     > Vue 3 支持组件拥有多个根节点，这在 Vue 2 中是不被支持的。这使得 Vue 3 的组件模板更加灵活。  
     > Teleport：  
     > Vue 3 引入了 Teleport 功能，它允许开发者将模板中的某个部分渲染到 DOM 中的其他位置，这在处理模态框、悬浮框等 UI 元素时非常有用。  
     > 自定义渲染器（createRenderer）：  
     > Vue 3 提供了 createRenderer 函数，允许开发者构建自定义渲染器，从而将 Vue 的开发模型扩展到其他平台（如 canvas）。

## Vue3 的生命周期有哪些

Vue 3 引入了 Composition API，这带来了编写组件的新方式，但同时也保留了 Options API。无论是使用哪种 API，Vue 3 的组件生命周期都是相似的，但有一些细微的差别和新增的钩子。

- #### setup()：
  这是 Vue3 中引入的组合式 API 的一个核心部分，它在组件创建之前执行，用于替代 Vue2 中的 beforeCreate 和 created 钩子。在 setup 中，可以定义响应式数据、计算属性、方法等，并且可以访问到组件的 props 和 context。
- #### Options API 生命周期钩子

  在 Options API 中，生命周期钩子被定义在组件的 `options` 对象中。以下是 Vue 3 中 Options API 的主要生命周期钩子：

  - 挂载（Mounting）
    - **beforeCreate**：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
    - **created**：实例已经创建完成之后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，`$el` 属性目前不可见。
    - **beforeMount**：在挂载开始之前被调用：相关的 render 函数首次被调用。该钩子在服务器端渲染期间不被调用。
    - **mounted**：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
  - 更新（Updating）
    - **beforeUpdate**：数据更新时调用，发生在虚拟 DOM 打补丁之前。这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器。
    - **updated**：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用这个钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
  - 卸载（Unmounting）
    - **beforeUnmount**：在卸载组件实例之前调用。在这个阶段，实例仍然是完全可用的。
    - **unmounted**：Vue 实例卸载后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也都会被销毁。

- ### 激活与停用（对于 `<keep-alive>`）

- **activated**：被 keep-alive 缓存的组件激活时调用。
- **deactivated**：被 keep-alive 缓存的组件停用时调用。

- ### Composition API 生命周期钩子

  在 Composition API 中，生命周期钩子通过 `onXXX` 函数引入，这些函数可以在 `setup()` 函数内部使用。

  - **onBeforeMount**
  - **onMounted**
  - **onBeforeUpdate**
  - **onUpdated**
  - **onBeforeUnmount**
  - **onUnmounted**
  - **onActivated**
  - **onDeactivated**

  这些函数的使用方式与 Options API 中的生命周期钩子类似，但它们在 `setup()` 函数中通过导入 `onMounted` 等函数来使用，而不是直接定义在组件的 `options` 对象中。

  ```javascript
  import { onMounted } from 'vue';

  export default {
    setup() {
      onMounted(() => {
        console.log('组件已挂载');
      });
    },
  };
  ```

  ## Vuex 是什么

  - ##### vuex 是一个状态管理工具，集中式的管理所有组件的状态数据。统一的去管理组件，将组件的状态抽象为一个 store 文件，通过 commit 方法触发 mutation 里的函数来改变组件属性。

  - ##### 五个属性 state（存储） getters（获取） mutations（同步操作 /this.$store.commit(“方法名”,数据)/mapMutations） actions（异步操作 /this.$store.dispatch(“方法名”,数据)/mapActions） modules（放多个 vuex）

  - #### Vuex 的优势
    **集中式存储管理：**  
    Vuex 将应用的所有组件的状态集中存储和管理，便于维护和调试。  
    **可预测的状态变化：**  
    Vuex 通过规定状态变化的流程（actions -> mutations -> state），保证了状态变化的可预测性。  
    **组件间通信：**  
    Vuex 提供了一种在组件间共享状态的机制，避免了组件间直接通信的复杂性。  
    **强大的开发工具支持：**  
    Vuex 集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

## vue2 和 vue3 全局组件

- Vue2 全局组件
  在 Vue2 中，全局组件是通过 Vue.component 方法注册的。这个方法接受两个参数：组件的名称（字符串格式，且首字母大写）和组件的定义对象（通常是使用 Vue.extend()创建的，但在实际项目中，我们更常直接传入一个.vue 文件导出的 Vue 组件对象）。一旦组件被全局注册，它就可以在任何新创建的 Vue 根实例的模板中通过其注册的名称作为标签来使用了。

  ```javascript
  // 引入组件
  import MyComponent from './components/MyComponent.vue';
  // 全局注册组件
  Vue.component('MyComponent', MyComponent);
  // 现在，MyComponent 可以在任何 Vue 实例的模板中使用了
  ```

  - Vue3 全局组件
    在 Vue3 中，全局组件的注册方式发生了变化。首先，你需要通过 createApp 方法创建一个 Vue 应用实例。然后，在这个实例上调用 component 方法来注册全局组件。最后，通过 mount 方法将应用挂载到 DOM 上。

  ```javascript
  // 引入Vue和组件
  import { createApp } from 'vue';
  import MyComponent from './components/MyComponent.vue';
  import App from './App.vue';

  // 创建Vue应用实例
  const app = createApp(App);

  // 全局注册组件
  app.component('MyComponent', MyComponent);

  // 挂载应用到DOM
  app.mount('#app');
  // 现在，MyComponent可以在App组件及其所有子组件的模板中使用了
  ```
