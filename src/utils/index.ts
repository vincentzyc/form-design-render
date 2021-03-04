type StringObj = { [k: string]: string }
type UrlParamBack = null | string | StringObj

/**
 * 判断是否存在 key
 * @param obj 判断对象
 * @param key 判断 key值
 * @return {Boolean} 是否存在标识
 */
export function hasKey(obj: any, key: string): boolean {
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
/**
 * 判断Android还是iOS
 */
export function checkDevice() {
  let u = navigator.userAgent;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if (isAndroid) {
    return 'Android';
  } else if (isiOS) {
    return 'iOS';
  } else {
    return 'others';
  }
}
/**
 * 判断是否QQ内置浏览器
 */
export function isQQInternalBrowser() {
  return window.navigator.userAgent.toLowerCase().indexOf(' qq') > -1
}
/**
 * 判断是否QQ内置浏览器
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
/**
 * 文本截取换行
 * @param {String} text 文本字符
 * @param {String} sign 换行标识 
 */
export function textBr(text: string, sign: string = '\n'): string {
  let brstr = '';
  let arr = text.split(sign);
  arr.forEach(v => {
    brstr += v + "</br>"
  })
  return brstr;
}
/**
 * px转rem
 * @param {String} str 含 px 字符串  例如：50px 10px 0 10px ; <span style="16px">测试</span>
 * @return {String} 转化后含rem字符串 例如：1rem 0.3rem 0 0.2rem ; <span style="0.32rem">测试</span>
 */
export function changeRem(str: string = ""): string {
  if (getType(str) !== 'String') str = str.toString();
  let nospace = str.trim();
  return nospace.replace(/(-?\d+)(px)/g, (a, b) => {
    return b / 50 + 'rem'
  })
}
/**
 * 格式化对象格式样式 px转rem
 * @param {Object} obj 格式化对象
 */
export function formatStyle(obj: Record<string, any>): Record<string, any> {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && getType(obj[key]) === 'String') {
      if (obj[key].includes('px')) obj[key] = changeRem(obj[key])
    }
  }
  return obj
}