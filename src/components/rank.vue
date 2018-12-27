<template>
<div>
<div class='swipers'>
       <swiper :options='swiperops'>
        <swiper-slide>
            <img src="../../static/images/1.jpg" >
        </swiper-slide>
           <swiper-slide>
            <img src="../../static/images/2.jpg" >
        </swiper-slide>
           <swiper-slide>
            <img src="../../static/images/3.jpg" >
        </swiper-slide>
           <swiper-slide>
            <img src="../../static/images/5.jpg" >
        </swiper-slide>
    </swiper>
    </div>
    <div class='dl'>
      <dl>
        <dt><i class="icon iconfont icon-tian"></i></dt>
        <dd>私人FM</dd>
      </dl>
       <dl>
        <dt><i class="icon iconfont icon-tian"></i></dt>
        <dd>每日推荐</dd>
      </dl>
       <dl>
        <dt><i class="icon iconfont icon-fenlei-xuanzhong"></i></dt>
        <dd>歌单</dd>
      </dl>
       <dl>
        <dt><i class="icon iconfont icon-gengduo-2"></i></dt>
        <dd>排行榜</dd>
      </dl>
   </div>
     <h3 class='h3'>推荐歌单<i class="icon iconfont icon-angle-right"></i></h3>
   <div class='box'>
    <dl>
        <dt><img src="../../static/images/12.jpg" ></dt>
        <dd>
          <p><i class="icon iconfont icon-yinlezanting"></i><span>133万</span></p>
          <h3>要做什么梦是每个人的自由</h3>
        </dd>
      </dl>
        <dl>
        <dt><img src="../../static/images/13.jpg" ></dt>
        <dd>
          <p><i class="icon iconfont icon-yinlezanting"></i><span>82万</span></p>
          <h3>若不能一起,来世,你愿陪我看遍千山万水和速度胡哈多好多匟</h3>
        </dd>
      </dl>
     <dl>
        <dt><img src="../../static/images/14.jpg" ></dt>
        <dd>
          <p><i class="icon iconfont icon-yinlezanting"></i><span>6244万</span></p>
          <h3>我的民谣,你的故事,你愿陪我看遍千山万水和速度胡哈多好多匟</h3>
        </dd>
      </dl>
        <dl>
        <dt><img src="../../static/images/12.jpg" ></dt>
        <dd>
          <p><i class="icon iconfont icon-yinlezanting"></i><span>133万</span></p>
          <h3>要做什么梦是每个人的自由</h3>
        </dd>
      </dl>
        <dl>
        <dt><img src="../../static/images/13.jpg" ></dt>
        <dd>
          <p><i class="icon iconfont icon-yinlezanting"></i><span>82万</span></p>
          <h3>若不能一起,来世,你愿陪我看遍千山万水和速度胡哈多好多匟</h3>
        </dd>
      </dl>
     <dl>
        <dt><img src="../../static/images/14.jpg" ></dt>
        <dd>
          <p><i class="icon iconfont icon-yinlezanting"></i><span>6244万</span></p>
          <h3>我的民谣,你的故事,你愿陪我看遍千山万水和速度胡哈多好多匟</h3>
        </dd>
      </dl>
   </div>
   </div>
</template>
<script>
import  {swiper,swiperSlide} from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
  export default {
  name: '',
  components:{
      swiper,
      swiperSlide
  },
  data(){
    return{
        swiperops:{
           effect:"fade",
           loop:true 
        }
    }
  }
}
</script>
<style>
.swipers img{
      width:100%;
      height:auto;
      overflow: hidden;
      padding:0 10px;
      border-radius:10px;
}
</style>