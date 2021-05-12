import Clipboard from "clipboard";

const copyText = function (text: string, container?: HTMLElement) {
  return new Promise(function (resolve, reject) {
    const fakeElement = document.createElement('button')
    const clipboard = new Clipboard(fakeElement, {
      text: function () { return text },
      action: function () { return 'copy' },
      container: container || document.body
    })
    clipboard.on('success', function (e) {
      clipboard.destroy()
      resolve(e)
    })
    clipboard.on('error', function (e) {
      clipboard.destroy()
      reject(e)
    })
    document.body.appendChild(fakeElement)
    fakeElement.click()
    document.body.removeChild(fakeElement)
  })
}

export {
  copyText
}
export default copyText