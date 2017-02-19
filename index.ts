import _Vue = require('vue')
import _Component from 'vue-class-component'
import * as jsx from './lib/jsx'

interface CommonProps {
  key?: string | number
  ref?: string
  slot?: string
}

export type Vue<Props> = typeof _Vue & { new(): _Vue & Props & { _elementAttributesProperty: Props & CommonProps } }
export const Vue: typeof _Vue & (new<Props>() => _Vue & Props & { _elementAttributesProperty: Props & CommonProps }) = _Vue

type Constructor = {
  new (...args: any[]): any
}

export const Component: typeof _Component & (
  <Props>(options: _Vue.ComponentOptions<any> & {
    props: { [K in keyof Props]: _Vue.PropOptions | Constructor | Constructor[] } | (keyof Props)[]
  }) => (<V extends Vue<Props>>(target: V) => V)
) = _Component
