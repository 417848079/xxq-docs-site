# Vue 面试题

## 1. Vue 中的 data 为什么是一个函数？

> 为了保证组件的独立性和可复用性，如果 data 是个函数的话，每复用一次组件就会返回新的 data，类似于给每个组件实例创 建一个私有的数据空间，保护各自的数据互不影响

## 2. Vue 内置指令

- v-model: 实现表单输入和应用状态之间的双向绑定。
- v-text：更新元素的文本内容，会覆盖元素中原有的所有内容。
- v-html：更新元素的 innerHTML，会替换元素中原有的所有内容。
- v-show：根据表达式的真假值，切换元素的 display 属性。
- v-if：根据表达式的真假值来插入或删除元素。
- v-else：v-if 的“else”块。
- v-for：根据数据源创建多个元素或组件。
- v-on：绑定事件监听器。
- v-bind：动态地绑定一个或多个特性，或一个组件 prop 到表达式。

## 3.v-model 实现原理

- v-model 是一个语法糖
- 原理：v-model 实际上是 v-bind:value 和 v-on:input 的语法糖。
- 分两步骤  
   v-bind 绑定一个 value 属性  
   v-on 指令给当前元素绑定 input 事件

  ```html
  <input type="text" :value="username" @input="username = $event.target.value" />
  ```

## 4. computed 和 watch 的区别

| 特性       | 计算属性(Computed)                 | 监听器(Watch)                    |
| ---------- | ---------------------------------- | -------------------------------- |
| 用途       | 基于依赖数据计算新值               | 观察特定数据变化并执行副作用操作 |
| 缓存       | 有缓存，依赖不变时直接返回缓存结果 | 无缓存，每次变化都会执行         |
| 异步       | 不支持异步操作                     | 支持异步操作                     |
| 返回值     | 必须返回一个值                     | 不需要返回值                     |
| 多依赖     | 可以依赖多个数据                   | 通常观察单个数据                 |
| 初始化执行 | 默认立即执行                       | 默认不立即执行(可配置)           |

## 5.v-if 和 v-for 一起使用的弊端和解决办法

- 弊端：
  - 1.每次渲染都会进行条件判断，可能导致性能问题。
  - 2.如果 v-if 和 v-for 一起使用，v-for 的优先级高于 v-if。
- 解决办法：
  - 1.将 v-if 放在外层元素上，使用 template 标签包裹，避免每次渲染都进行条件判断。
  - 2.使用 v-show 替代 v-if，v-show 不会每次渲染都进行条件判断，只会根据条件切换元素的 display 属性。
  - 3.使用计算属性或方法来过滤数据，然后再使用 v-for 进行渲染。

## 6.为什么 v-for 需要加 key

- ### 1.高效的 DOM 更新
  - key 作为唯一标识：key 帮助 Vue 识别哪些元素是新增的、删除的或只是被重新排序的，从而最小化 DOM 操作。
- ### 2.维持组件状态
  - 没有 key 时，Vue 会采用"就地复用"策略，可能导致元素状态（如表单输入值、焦点状态等）在重新渲染时出现意外保留。
- ### 3.动画效果正确性

## 5. 组件上的双向绑定

### v-model 绑定在组件上的时候做了以下步骤

1.  在父组件内给子组件标签添加 v-model ，其实就是给子组件绑定了 value 属性
2.  子组件内使用 prop 创建 创建 value 属性可以拿到父组件传递下来的值，名字必须是 value。
3.  子组件内部更改 value 的时候，必须通过 ¥emit 派发一个 input 事件，并携最新的值
4.  v-model 会自动监听 input 事件，把接收到的最新的值同步赋值到 v-model 绑定的变量上

## 5. 父组件调用子组件方法(Vue3)

- 子组件 defineExpose 暴露方法 父组件通过 ref 调用子组件方法

## 6. Vue 的组件通信方式(组件传参)

- ### 6-1. props (父传子)

  > #### 父组件通过属性（props）向子组件传递数据

  - **优点：** 简单直观，易于理解和使用

  - **缺点：** 只能单向传递数据，即父组件传递给子组件，子组件不能修改父组件传递的数据（尽管可以通过事件触发父组件更新数据）

- ### 6-2. $emit (子传父)

  > #### P 子组件通过触发自定义事件向父组件传递数据或信息

  - **优点：** 实现了子组件向父组件的数据传递，增强了组件间的交互性
  - **缺点：** 相对于 Props，事件传递数据的方式稍微复杂一些，需要定义事件和监听事件

- ### 6-3. v-model（父子组件数据双向绑定）

  > 在父组件中，使用 v-model 指令将数据和子组件进行绑定。在子组件中，使用 defineModel（Vue 3.4+）或同时使用 defineProps 和 defineEmits 来接收父组件传递的值和触发更新事件

- ### 6.4. Provide/Inject（跨代传递）

  > **是 Vue 3 中一种高级的组件间传值方式，它允许祖先组件向后代组件注入数据，而不需要显式地将数据传递给中间组件**

  - **用法：** 在祖先组件中，通过 provide 函数提供数据。在后代组件中，通过 inject 选项接收数据。
  - **优点：** 实现了跨代组件之间的数据传递，简化了中间组件的传值过程。
  - **缺点：** 使用 Provide/Inject 可能会导致数据流向不明确，增加了组件间的耦合度。

- ### 6-5 插槽（Slot）

  > **插槽允许父组件向子组件传递 DOM 结构或组件，从而实现更灵活的组件组合和复用**

  - **用法：** 在子组件中定义插槽，并在父组件中使用插槽标签将内容传递给子组件

  - **优点：** 提供了高度的灵活性和可扩展性，允许父组件向子组件传递任意内容

  - **缺点：** 插槽的使用可能会增加组件的复杂性和调试难度

- ### 6-6 全局状态管理（如 Pinia 或 Vuex）

  > #### 对于复杂的应用，可以使用全局状态管理工具（如 Pinia 或 Vuex）来管理应用的状态和数据流

  - **用法：** 在全局状态管理工具中定义状态、修改状态的方法和订阅状态变化的回调。在组件中通过特定的 API（如 useStore）访问和修改全局状态。

  - **优点：** 实现了跨组件的状态共享和同步，增强了应用的可维护性和可扩展性。

  - **缺点：** 增加了应用的复杂性和学习成本，需要深入理解全局状态管理工具的工作原理和使用方法。

- ### 6-7 attrs/listeners（属性/事件监听器传递）

- ### 6-8 事件总线（EventBus）

## 7. 二次封装组件默认传参

- ### v-bind="$attrs"

  v-bind="$attrs" 是一个 Vue 指令，用于将父组件传递给子组件的非 prop 属性 (即普通 HTML 属性和自定义属性，但不包括 class 和 style) 绑定到子组件的根 DOM 元素上。
  使用 $attrs 变量可以获得父组件传递下来的所有属性 (除了通过 props 定义的属性之外)，然后一次性绑定到内部元素上。

- ### v-on="$listeners"

  v-on="$listeners" 也是一个 Vue 指令，用于添加父组件在子组件上设置的所有事件监听器。$listeners 对象包含了在子组件上侦听的所有事件 (这些事件还没有配置相应的方法或尚未作为 prop 被识别)。使用这个指令可以方便地将所有父组件绑定的事件监听器添加到子组件的根 DOM 元素上

- ### inheritAttrs: false

  inheritAttrs: false 是一个组件选项，使得所有的非 prop 属性 (比如 class, style 等) 不会默认绑定到组件的根 DOM 元素上。默认情况下，Vue 会将任何不被识别为 prop 的属性自动添加到组件的根元素上。当你不希望建立这种默认行为时（比如你希望手动确定哪些属性应该被添加到哪个元素上），可以设置 inheritAttrs: false。

## 2. Vue2 和 Vue3 的区别

- 1. **架构设计**

  - Vue2: 使用 Options API（选项式 API）
  - Vue3: 引入 Composition API（组合式 API），同时兼容 Options API

- 2. **响应式原理**
  - Vue2: 使用 Object.defineProperty 实现响应式
    - 无法检测对象属性的添加/删除
    - 对数组的变化需要通过特殊方法（如 push, pop 等）触发更新
  - Vue3: 使用 Proxy 实现响应式
    - 可以检测到所有属性的变化，包括新增/删除属性
    - 更好的数组变化检测
- 3. **性能优化**   
Vue3 相比 Vue2 有显著的性能提升：  
  - 更小的打包体积 
  - 更快的渲染速度
  - 更高效的内存使用
  - 优化了虚拟 DOM 的 diff 算法
  - 引入了新的性能优化特性，如 Fragment、Teleport、Suspense 等
  - Vue2: 对性能进行了优化，如虚拟 DOM 缓存、异步更新队列等
  - Vue3: 引入了新的性能优化特性，如 Fragment、Teleport、Suspense 等
## 3. Vue3 的生命周期有哪些

Vue 3 引入了 Composition API，这带来了编写组件的新方式，但同时也保留了 Options API。无论是使用哪种 API，Vue 3 的组件生命周期都是相似的，但有一些细微的差别和新增的钩子。

- ### setup()

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

  - ##### vuex 是一个状态管理工具，集中式的管理所有组件的状态数据。统一的去管理组件，将组件的状态抽象为一个 store 文件，通过 commit 方法触发 mutation 里的函数来改变组件属性

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

## 什么是虚拟 dom

**本质就是一个 js 对象，所以能实现跨平台**
