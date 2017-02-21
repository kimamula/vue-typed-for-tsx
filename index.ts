import _Vue = require('vue')
import _Component from 'vue-class-component'
import * as jsx from './lib/jsx'

interface CommonProps {
  key?: string | number
  ref?: string
  slot?: string
}

export type VueClass<Props, Data = {}> = typeof _Vue & { new(): _Vue & Props & Data & { _elementAttributesProperty: Props & CommonProps } }
export const Vue: typeof _Vue & (new<Props, Data = {}>() => _Vue & Props & Data & { _elementAttributesProperty: Props & CommonProps }) = _Vue

type Constructor = {
  new (...args: any[]): any
}

export const Component: typeof _Component & (
  <Props>(options: _Vue.ComponentOptions<any> & {
    props: { [K in keyof Props]: _Vue.PropOptions | Constructor | Constructor[] | null } | (keyof Props)[]
  }) => (<V extends VueClass<Props>>(target: V) => V)
) & (
  <Props, Data>(options: _Vue.ComponentOptions<any> & {
    props: { [K in keyof Props]: _Vue.PropOptions | Constructor | Constructor[] | null } | (keyof Props)[]
    data: Data
  }) => (<V extends VueClass<Props, Data>>(target: V) => V)
) = _Component
