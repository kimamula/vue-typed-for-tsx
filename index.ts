import _Vue = require('vue')
import _Component from 'vue-class-component'
import * as jsx from './lib/jsx'

interface CommonProps {
  key?: string | number
  ref?: string
  slot?: string
}

export type VueInstance<Props, Data> = _Vue & Props & Data & { _elementAttributesProperty: Props & CommonProps }
export type VueClass<Props, Data> = new() => VueInstance<Props, Data>
export const Vue: typeof _Vue & (new<Props, Data>() => VueInstance<Props, Data>) & (new<Props>() => VueInstance<Props, {}>) = _Vue

type Constructor = {
  new (...args: any[]): any
}

export const Component: typeof _Component & (
  <Props>(options: _Vue.ComponentOptions<any> & {
    props: { [K in keyof Props]: _Vue.PropOptions | Constructor | Constructor[] | null } | (keyof Props)[]
  }) => (<V extends VueClass<Props, {}>>(target: V) => V)
) & (
  <Props, Data>(options: _Vue.ComponentOptions<any> & {
    props: { [K in keyof Props]: _Vue.PropOptions | Constructor | Constructor[] | null } | (keyof Props)[]
    data(this: VueInstance<Props, {}>): Data
  }) => (<V extends VueClass<Props, Data>>(target: V) => V)
) = _Component
