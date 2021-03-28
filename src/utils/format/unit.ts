import { getType } from "../validate/dataType";

/**
 * px转rem
 * @param {String} str 含 px 字符串  例如：50px 10px 0 10px ; <span style="16px">测试</span>
 * @return {String} 转化后含rem字符串 例如：1rem 0.3rem 0 0.2rem ; <span style="0.32rem">测试</span>
 */
export function changeRem(str = ""): string {
  if (getType(str) !== 'String') str = str.toString();
  const nospace = str.trim();
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