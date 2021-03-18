type UrlParamBack = null | string | Record<string, any>

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

/**
 * 获取数据类型
 * @param {any} value 需要判断的值
 * @return "String","Object","Array"...
 */
export function getType(value: any) {
  return Object.prototype.toString.call(value).slice(8, -1)
}

export function isDef(val: unknown): boolean {
  return val !== undefined && val !== null;
}

export function isObject(val: unknown): val is Record<any, any> {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Object';
}

export function isArray(val: unknown): boolean {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Array';
}

export function isString(val: unknown): boolean {
  return Object.prototype.toString.call(val).slice(8, -1) === 'String';
}

export function isBoolean(val: unknown): boolean {
  return Object.prototype.toString.call(val).slice(8, -1) === 'Boolean';
}

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
  const obj = {}
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
 * 执行js代码
 * @param {String} jscode js代码
 * @param {String} scriptid id标识（相同id只执行一次，不传id每次都会执行）
 */
export function initScript(jscode: string, scriptid: string): void {
  if (typeof jscode !== 'string') return;
  if (scriptid && document.getElementById(scriptid)) return;
  jscode = jscode.replace(/[\r\n]/g, '');  //去除换行
  if (/<script(.*)src=(.*)><\/script>/.test(jscode)) {
    let arr = jscode.match(/src=["|']?(.*?)('|"|>|\\s+)/);
    let script = document.createElement("script");
    script.src = arr![1];
    document.head.appendChild(script);
    return;
  }
  let arr = jscode.match(/<script(.*)>(.*)<\/script>/);
  if (Array.isArray(arr) && arr.length >= 3) jscode = arr[2];  //提取js代码
  let script = document.createElement("script");
  if (scriptid) script.id = scriptid;
  script.type = "text/javascript";
  script.innerHTML = jscode;
  document.head.appendChild(script);
}
