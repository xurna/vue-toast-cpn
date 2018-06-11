
import toast from './toast.vue'
// toast vm instance
let toastVm = null
// toast hide timer
let timer = null

const Toast = {
  /**
   * vue.js plugin should have a public function named install
   * @param {constructor} Vue constructor
   * @param {object} options
   */
  install (Vue, options) {
    // default options
    const opt = {
      type: 'center',
      duration: '2000',
      position: 80
    }

    for (const property in options) {
      opt[property] = options[property]
    }
    Vue.prototype.$toast = (text, opts = {}) => {
      const toastType = opts.type ? opts.type : opt.type
      const toastDuration = opts.duration ? opts.duration : opt.duration
      const toastPos = opts.position ? opts.position : opt.position

      // whether create an instance
      if (!toastVm) {
        const ToastTpl = Vue.extend(toast) // create a constructor
        toastVm = new ToastTpl() // create an instance,the instance is in unmounted status
        const tpl = toastVm.$mount().$el // rendering outside the document and subsequently mounting
        document.body.appendChild(tpl) // inserting it into a document using a native DOM API
      }
      // set status
      toastVm.text = text
      toastVm.show = true
      toastVm.type = toastType
      if (toastType === 'center') {
        toastVm.style = 'top: 50%;transform: translateY(-50%);-webkit-transform: translateY(-50%)'
      }
      else if (toastType === 'top') {
        toastVm.style = `top:${toastPos}px`
      }
      else if (toastType === 'bottom') {
        toastVm.style = `bottom:${toastPos}px`
      }

      // a timer that clears up the last hint
      clearTimeout(timer)
      timer = setTimeout(() => {
        toastVm.show = false
      }, toastDuration)
    }
  }
}

export default Toast
