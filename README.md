
## vue-toast-cpn
----------
A toast component for vue .
### Install
```
npm install --save vue-toast-cpn
```

### Usage
import:
```
import Toast from 'vue-toast-cpn'
Vue.use(Toast)
```

or
```
import Toast from 'vue-toast-cpn'
Vue.use(Toast, {
  duration: 2000
})
```

Use in component:
```
this.$toast('toast text')
```

or
```
this.$toast('toast text', {
  duration: 2000
})
```

### options
```
Vue.use(Toast, [options])
```
- type : position of Toast. | String | default: 'center' | possible 'top, center,bottom'
- position : Number | default 80 (px) | valid when type is top or bottom
- duration : Number | default 2000ms

```
this.$toast('toast text', [options])
```
- type : position of Toast. | String | default: 'center' | possible 'top, center,bottom'
- position : Number | default 80 (px) | valid when type is top or bottom
- duration : Number | default 2000ms

note: In general, you can define the default options you need in `Vue.use ()`. When you call the `options` of the `this.$toast` at a specific time, you can override the corresponding `Vue.use () option in order to make it special.




