import _Vue = require('vue')
import _Component from 'vue-class-component'
import * as jsx from './lib/jsx'

export type Vue<Props> = { new(): _Vue & Props & { _elementAttributesProperty: Props } }
export const Vue: typeof _Vue & (new<Props>() => _Vue & Props & { _elementAttributesProperty: Props }) = _Vue

type Constructor = {
  new (...args: any[]): any
}

export const Component: typeof _Component & (
  <Props>(options: _Vue.ComponentOptions<any> & {
    props: { [K in keyof Props]: _Vue.PropOptions | Constructor | Constructor[] } | (keyof Props)[]
  }) => (<V extends Vue<Props>>(target: V) => V)
) = _Component
