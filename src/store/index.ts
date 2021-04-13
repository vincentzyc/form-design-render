import { createStore } from 'vuex'

export default createStore({
  state: {
    pageData: "",
    wgList: [],
    valiPopupDate: false
  },
  mutations: {
    setPageData(state, payload) {
      state.pageData = payload;
    },
    setWgList(state, payload) {
      state.wgList = payload
    },
    setValiPopupDate(state, payload) {
      state.valiPopupDate = payload;
    }
  }
  // actions: {
  // },
  // modules: {
  // }
})
