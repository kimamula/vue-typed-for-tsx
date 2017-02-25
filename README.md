# vue-typed-for-tsx

Provides better TypeScript declarations of Vue.js for TSX users.
This library does nothing more than that.
i.e., `Vue` and `Component` exported from this library are exactly the same objects as what are exported from vue and vue-class-component, respectively.

# Prerequisites

* TypeScript ^2.2.0

# Install

**Note: This library is not yet published to NPM.**

```sh
$ npm i https://github.com/kimamula/vue-typed-for-tsx.git --save
```

# Usage

```ts
// App.tsx
import { Vue, Component } from 'vue-typed-for-tsx'

interface Props {
  name: string
}

@Component<Props>({
  // Prop validation by Vue.js at run time is not necessary,
  // as TypeScript do it at compile time.
  props: { name: null }
})
export default class App extends Vue<Props> {
  render (h) {
    // You don't need to declare `name` as instance valiable by yourself.
    return <div id="hello" title={this.name}>Hello {this.name}!</div>
  }
}
```

```ts
// main.tsx
import { Vue } from 'vue-typed-for-tsx'
import App from './App'

new Vue({
  render (h) {
    return (
      <App name="Vue.js" />
    )
  }
}).$mount('#app')
```

See https://github.com/kimamula/vue-todomvc-tsx for implementation of TodoMVC with this library.
