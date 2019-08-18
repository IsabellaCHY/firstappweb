<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe667;</span>
    </div>
    <div class="header-search">
      <span class="iconfont">&#xe61f;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      北京
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      msg: 'HomeHeader'
    }
  }
}
</script>

<style scoped lang='stylus'>
/* style中引入css，需要在目录前面加上'~'
   js中引入css，不需要在目录前面加上'~'
*/
@import '~css/var.styl';

.header {
  widows: 100%;
  /* 子元素垂直居中 */
  line-height: 0.88rem;
  // background: #00bcd4;
  background: $bgColor;
  font-size: 0.36rem;
  // color: #fff;
  color: $textColor;
  /* 弹性盒子，为了让搜索框中间占满，左靠左，右靠右 */
  display: flex;
}

.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  text-align: center;
  font-weight: bold;
}

.header-search {
  flex: 1;
  background: #fff;
  height: 0.6rem;
  margin: 0.15rem 0;
  border-radius: 0.1rem;
  color: #e4e7ea;
  line-height: 0.6rem;
  font-size: 0.28rem;
  padding-left: 0.2rem;
}

.header-right {
  font-size: 0.28rem;
  padding: 0 0.2rem;
}
</style>
