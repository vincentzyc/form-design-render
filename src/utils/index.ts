type UrlParamBack = null | string | Record<string, any>

/**
 * 获取url参数值
 * @param {String} name 参数名称(不传则返回一个全部参数对象)
 */
export function getUrlParam(name: string = ''): UrlParamBack {
  const href = window.location.href, i = href.indexOf("?");
  if (i < 0) return null;
  const str = href.slice(i);
  if (!str) return null;
  const arr = str.match(/([^?&=#]+)=([^?&=#/]*)/g);
  if (!arr) return null;
  const obj: UrlParamBack = {}
  arr.forEach(v => {
    const temp = v.split('=');
    if (temp.length > 0) {
      obj[temp[0]] = temp[1];
    }
  })
  if (name) return obj[name]
  return obj
}

/**
 * 判断是否存在 key
 * @param obj 判断对象
 * @param key 判断 key值
 * @return {Boolean} 是否存在标识
 */
export function hasKey(obj: unknown, key: string): boolean {
  if (!obj) return false
  return Object.prototype.hasOwnProperty.call(obj, key)
}


export function isDef(val: unknown): boolean {
  return val !== undefined && val !== null;
}
