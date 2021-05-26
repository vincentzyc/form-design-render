import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { StateType } from './types';

export const key: InjectionKey<Store<StateType>> = Symbol()

export const store = createStore<StateType>({
  state: {
    pageData: null,
    wgForms: [],
    formData: {},
  },
  mutations: {
    setFormData(state, payload) {
      state.formData = payload;
    },
    setPageData(state, payload) {
      state.pageData = payload;
    },
    setWgForms(state, payload) {
      state.wgForms = payload
    }
  }
  // actions: {
  // },
  // modules: {
  // }
})

// 定义自己的 `useStore` 组合式函数
export function useStore() {
  return baseUseStore(key)
}