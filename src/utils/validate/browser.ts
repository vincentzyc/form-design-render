/**
 * 判断是否QQ内置浏览器
 */
 export function isQQInternalBrowser() {
  return window.navigator.userAgent.toLowerCase().indexOf(' qq') > -1
}
/**
 * 判断是否UC浏览器
 */
export function isUCBrowser() {
  return window.navigator.userAgent.indexOf('UCBrowser') > -1
}
/**
 * 判断是微信内还是微信外打开
 */
export function isWechat() {
  return /micromessenger/.test(window.navigator.userAgent.toLowerCase());
}