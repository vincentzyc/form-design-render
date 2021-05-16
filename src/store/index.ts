import { createStore } from 'vuex'

export default createStore({
  state: {
    pageData: "",
    wgList: [],
    formData: {},
    valiPopupDate: false
  },
  mutations: {
    setFormData(state, payload) {
      state.formData = payload;
    },
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
