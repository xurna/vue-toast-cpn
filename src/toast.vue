<template>
  <div>
    <div v-show="show" class="toastContainer" :style="style">
      <div class="toastText">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false,
      text: '',
      type: 'center',
      style: ''
    }
  }
}
</script>

<style scoped>
.toastContainer {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9999;
  text-align: center;
}

.toastText {
  display: inline-block;
  max-width: 80%;
  background: rgba(0, 0, 0, 0.8);
  padding: 12px 22px;
  text-align: center;
  font-size: 15px;
  line-height: 22px;
  border-radius: 5px;
  color: #fff;
}

.hide {
  display: none;
}

.show {
  display: block;
}
</style>
