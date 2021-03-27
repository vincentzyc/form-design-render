/**
 * 执行js代码
 * @param {String} code js代码
 * @param {String} id id标识（相同id只执行一次，不传id每次都会执行）
 */
function createScript(code: string, id: string): void {
  if (/<script(.*)src=(.*)><\/script>/.test(code)) {
    const arr = code.match(/src=["|']?(.*?)('|"|>|\\s+)/);
    const script = document.createElement("script");
    script.src = arr ? arr[1] : '';
    document.head.appendChild(script);
    return;
  }
  const arr = code.match(/<script(.*?)>(.*)<\/script>/);
  if (Array.isArray(arr) && arr.length >= 3) code = arr[2];  //提取js代码
  if (!/[A-Za-z]/.test(code)) return;
  const script = document.createElement("script");
  if (id) script.id = id;
  script.type = "text/javascript";
  script.innerHTML = code;
  document.head.appendChild(script);
}
/**
 * 批量执行js代码
 * @param {String} jscode js代码
 * @param {String} scriptid id标识（相同id只执行一次，不传id每次都会执行）
 */
export function initScript(jscode: string, scriptid: string): void {
  if (typeof jscode !== 'string') return;
  if (scriptid && document.getElementById(scriptid)) return;
  jscode = jscode.replace(/[\r\n]/g, '');  //去除换行
  const scriptArr = jscode.match(/<script(.*?)>(.*?)<\/script>/g);
  scriptArr ? scriptArr.forEach(v => createScript(v, scriptid)) : createScript(jscode, scriptid);
}

/**
 * 滑动到底部
 */
export function easeBottom(): void {
  let position = window.pageYOffset
  const destination = document.documentElement.offsetHeight - document.documentElement.clientHeight
  // 不存在原生`requestAnimationFrame`，用`setTimeout`模拟替代
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (fn) {
      return setTimeout(fn, 17);
    };
  }
  function step() {
    position = position + (destination - position) / 8;
    if (Math.abs(destination - position) < 2) {
      //动画结束
      window.scrollTo(0, destination)
      return;
    }
    window.scrollTo(0, position)
    requestAnimationFrame(step);
  }
  step();
}
/**
   * 滑动到指定位置的缓冲动画函数
   * @param {Object} dom 目标dom
   * @param {Number} destination 目标位置
   * @param {Number} rate 缓动率(越大速度越慢)
   * 示例用法
     let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
     let dom = scrollTop === document.documentElement.scrollTop ? document.documentElement : document.body;
     easeout(dom, 0);
   */
export function easeout(dom: HTMLElement, destination = 0, rate = 5): void {
  let position = dom.scrollTop;
  if (position === destination || typeof destination !== "number" || rate === 0) {
    return;
  }
  // 不存在原生`requestAnimationFrame`，用`setTimeout`模拟替代
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (fn) {
      return setTimeout(fn, 17);
    };
  }
  function step() {
    position = position + (destination - position) / rate;
    if (Math.abs(destination - position) < 1) {
      //动画结束
      dom.scrollTop = destination;
      return;
    }
    dom.scrollTop = position;
    requestAnimationFrame(step);
  }
  step();
}

/**
 * 滚动到指定元素
 * @param {Object} el 当前dom元素 
 * @param {Number} offset 元素距离顶部的偏移量
 */
export function scrollIntoView(el: HTMLElement, offset = 200): void {
  if (!el) return;
  if (typeof offset !== 'number') return;
  const clientRect = el.getBoundingClientRect();
  const isElementInViewport = clientRect.top >= 0 && clientRect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
  if (!isElementInViewport) {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const dom = scrollTop === document.documentElement.scrollTop ? document.documentElement : document.body;
    const destination = (scrollTop + clientRect.top - offset) > 0 ? (scrollTop + clientRect.top - offset) : 0
    easeout(dom, destination, 10)
  }
}