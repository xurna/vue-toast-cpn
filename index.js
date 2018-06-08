
import toast from './toast'
// toast vm instance
var toastVm = null
// toast hide timer
var timer = null

var Toast = {
  /**
   * Vue.js plugin should have a public function named install
   * @param {constructor} Vue constructor
   * @param {object} options
   */
  install: function (Vue, options) {
    // default options
    var opt = {
      type: 'center',
      duration: '2000',
      position: 80
    }
    for (var property in options) {
      opt[property] = options[property]
    }
    Vue.prototype.$toast = function (text, opts = {}) {
      var toastType = opts.type ? opts.type : opt.type
      var toastDuration = opts.duration ? opts.duration : opt.duration
      var toastPos = opts.position ? opts.position : opt.position

      // whether create an instance
      if (!toastVm) {
        var ToastTpl = Vue.extend(toast) // create a constructor
        toastVm = new ToastTpl() // create an instance,the instance is in unmounted status
        var tpl = toastVm.$mount().$el // Rendering outside the document and subsequently mounting
        document.body.appendChild(tpl) // Inserting it into a document using a native DOM API
      }
      // set status
      toastVm.text = text
      toastVm.show = true
      toastVm.type = toastType
      if (toastType === 'center') {
        toastVm.style = 'top: 50%;transform: translateY(-50%);-webkit-transform: translateY(-50%)'
      } else if (toastType === 'top') {
        toastVm.style = `top:${toastPos}px`
      } else if (toastType === 'bottom') {
        toastVm.style = `bottom:${toastPos}px`
      }

      // A timer that clears up the last hint
      clearTimeout(timer)
      timer = setTimeout(function () {
        toastVm.show = false
      }, toastDuration)
    }
  }
}

export default Toast
