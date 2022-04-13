import { computed } from "vue"
import { useStore } from '@/store'

export function useWgFormList() {
  const store = useStore()
  const formData = computed(() => store.state.formData)
  const wgForms = computed(() => store.state.wgForms)

  const useAddForm = (item: Record<string, any>) => {
    const index = wgForms.value.findIndex(v => v.key === item.key)
    index > -1 ? wgForms.value.splice(index, 1, item) : wgForms.value.push(item)
    if (item.apiKey) formData.value[item.apiKey] = item.value || ''
    if (item.codeKey) formData.value[item.codeKey] = item.value || ''
    return {
      formData: formData.value,
      wgForms: wgForms.value,
      wgData: item
    }
  }

  const useRemoveForm = (list: Record<string, any>[]) => {
    for (let index = 0; index < list.length; index++) {
      const item = list[index];
      for (let formIndex = 0; formIndex < wgForms.value.length; formIndex++) {
        const formItem = wgForms.value[formIndex];
        if (formItem.key === item.key) {
          wgForms.value.splice(formIndex, 1)
          delete formData.value[formItem.apiKey]
          delete formData.value[formItem.codeKey]
        }
      }
    }
    return {
      formData: formData.value,
      wgForms: wgForms.value
    }
  }

  return {
    formData,
    wgForms,
    useRemoveForm,
    useAddForm
  }
}
// const wgFormList = useWgFormList()
// const { wgData, formData } = wgFormList.useAddForm(props.item)

export function useWgForm(item: Record<string, any>) {
  const store = useStore()
  const formData = computed(() => store.state.formData)
  const wgForms = computed(() => store.state.wgForms)
  const index = wgForms.value.findIndex(v => v.key === item.key)
  index > -1 ? wgForms.value.splice(index, 1, item) : wgForms.value.push(item)
  if (item.apiKey) formData.value[item.apiKey] = item.value || ''
  if (item.codeKey) formData.value[item.codeKey] = item.value || ''
  return {
    formData: formData.value,
    wgForms: wgForms.value,
    wgData: item
  }
}
// use
// import { useWgForm } from '@/composition/use-wgform'
// const { wgData,formData } = useWgForm(props.item)