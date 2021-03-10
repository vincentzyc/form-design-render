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