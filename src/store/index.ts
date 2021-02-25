import { createStore } from 'vuex'

export default createStore({
  state: {
    pageData: "",
    valiPopupDate: false
  },
  mutations: {
    setPageData(state, payload) {
      state.pageData = payload;
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
