<template>
  <div class="header-swiper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <!-- <swiper-slide>
        <img src="../../../assets/img/01.jpg" />
      </swiper-slide>
      <swiper-slide>
        <img src="../../../assets/img/02.jpg" />
      </swiper-slide>-->
      <swiper-slide v-for="(item,index) in swiperList" v-bind:key="index">
        <img :src="item.url" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true // 轮播效果
      },
      swiperList: [
        {
          id: '01',
          // js里必须用require引入图片src路径
          url: require('@/assets/img/01.jpg')
        },
        {
          id: '02',
          // js里必须用require引入图片src路径
          url: require('@/assets/img/02.jpg')
        },
        {
          id: '03',
          // js里必须用require引入图片src路径
          url: require('@/assets/img/03.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped  >
.header-swiper {
  width: 100%;
  height: 2rem;
}

/* 定义下面的图片 */
.header-swiper img {
  width: 100%;
  height: 100%;
}

/* vue实现样式穿透，轮播图上蓝色小圆点改成白色 */
.header-swiper >>> .swiper-pagination-bullet-active {
  background: #fff;
}
</style>
