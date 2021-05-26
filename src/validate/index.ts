import { store } from '@/store';
import { scrollIntoView } from '@/utils/dom';
import { openLoading, closeLoading } from '@/utils/loading';
import { Dialog } from 'vant';
import { computed } from 'vue';

const formData: Record<string, any> = {}

const ruleList = {
  phone: (value: string) => {
    if (!value) return '请输入手机号';
    if (/^1[0-9]{10}$/.test(value)) return true;
    return '手机号码不正确'
  },
  verifyCode: (value: string) => {
    if (!value) return '请输入验证码';
    if (value.length === 6) return true;
    return "验证码错误";
  },
  name: (value: string) => {
    if (!value) return '请输入姓名';
    if (/^[\u4e00-\u9fa5]{2,20}$/.test(value)) return true;
    if (value.length < 2 || value.length > 20) return '姓名长度不能小于2或超过20';
    return '姓名必须为汉字'
  },
  mail: (value: string) => {
    if (!value) return '请输入邮箱';
    const emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (emailReg.test(value)) return true;
    return '邮箱格式不正确'
  },
  shootPlace: (value: string[]) => {
    if (value.length === 0) return '请选择旅拍城市';
    return true;
  },
  sex: (value: string) => {
    if (!value) return '请选择性别';
    return true;
  },
  loanTimeList: (value: string) => {
    if (!value) return '请选择贷款时间';
    return true;
  },
  educationLevel: (value: string) => {
    if (!value) return '请选择教育程度';
    return true;
  },
  profession: (value: string) => {
    if (!value) return '请选择职业身份';
    return true;
  },
  socialSecurity: (value: string) => {
    if (!value) return '请选择是否有社保';
    return true;
  },
  age: (value: string) => {
    if (!value) return '请选择年龄';
    return true;
  },
  amount: (value: string) => {
    if (!value) return '请选择金额';
    return true;
  },
  birthday: (value: string) => {
    if (!value) return '请选择生日';
    return true;
  },
  idCardValidity: (value: string) => {
    if (!value) return '请选择身份证有效期';
    return true;
  },
  idCard: (value: string) => {
    if (!value) return '请输入身份证号';
    if (/(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/.test(value)) return true;
    return '请输入正确的身份证号码'
  },
  city: (value: string[]) => {
    if (!value) return '请选择城市';
    return true;
  },
  agreement: (value: boolean) => {
    if (!value) return '请勾选同意相关协议';
    return true;
  },
  randomCode: (value: string, item: Record<string, any>) => {
    if (!value) return '请输入验证码';
    if (item.value.toUpperCase() !== item.codeValue.toUpperCase()) {
      item.getCode()
      return '验证码错误';
    }
    return true
  }
}

export function valiDate(obj: Record<string, any>): boolean | string {
  if (typeof (obj.isRequired) !== 'boolean') obj.isRequired = true; //默认必填
  if (obj.isRequired && obj.value === '') return obj.placeholder || '请完善信息';
  if (!ruleList[obj.apiKey]) return true;
  if (obj.apiKey === 'phone') {
    if (ruleList[obj.apiKey](obj.value) === true) {
      return obj.showCode ? ruleList[obj.codeKey](obj.codeValue) : true
    }
  }
  if (obj.isRequired === false && (obj.value === '' || obj.value === false)) return true;
  return ruleList[obj.apiKey](obj.value, obj)
}


export function handleSubmit() {
  const formData = computed(() => store.state.formData)
  console.log(formData);
  // const valiDateRes = State.valiPopupDate ? valiPopupDate(State.pageData.list) : valiAllDate(State.pageData.list);
  // if (valiDateRes !== true && valiDateRes !== false) return Toast(valiDateRes)
  submit(formData.value);
}


export function submit(data: Record<string, any>) {
  console.log('提交数据', data);
  openLoading("正在提交...")
  setTimeout(() => {
    closeLoading()
    Dialog.alert({
      message: '提交成功'
    })
  }, 2500);
}

function valiPopupDate(list: Record<string, any>[]): boolean | string {
  for (const item of list) {
    if (Array.isArray(item.list) && item.list.length > 0) {
      const res = valiPopupDate(item.list);
      if (res !== true) return res;
    }
    if (Array.isArray(item.popupList) && item.popupList.length > 0 && item.showPopup) {
      return valiAllDate(item.popupList, false);
    }
  }
  return true;
}

function valiAllDate(list: Record<string, any>[], isScrollIntoView = true): boolean | string {
  for (const item of list) {
    if (Array.isArray(item.list) && item.list.length > 0) {
      const res = valiAllDate(item.list, isScrollIntoView);
      if (res !== true) return res;
    }
    if (!item.apiKey) continue;
    const res = valiDate(item);
    if (res === true) {
      formatParam(item);
      continue
    }
    if (isScrollIntoView) {
      const dom = document.getElementById(item.key)
      if (dom) scrollIntoView(dom)
    }
    return res;
  }
  return true;
}

function formatParam(item: Record<string, any>) {
  if (!Object.prototype.hasOwnProperty.call(item, 'apiKey')) return;
  if (item.type === 'phone' && item.showCode) {
    formData[item.codeKey] = item.codeValue;
  }
  formData[item.apiKey] = item.value;
}