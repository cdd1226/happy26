<template>
<div>
<div class='swipers'>
       <swiper :options='swiperops'>
        <swiper-slide>
            <img src="../../static/images/2.jpg" >
        </swiper-slide>
           <swiper-slide>
            <img src="../../static/images/1.jpg" >
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
     <h3 class='h4'>今日优选<i class="icon iconfont icon-angle-right">换一换</i></h3>
   <div class='box1'>
    <dl>
        <dt><img src="../../static/images/12.jpg" ></dt>
        <dd>
          <h3>末那大叔</h3>
            <h4>节目:18</h4>
            <h5>愿你的故事有人懂</h5>
        </dd>
      </dl>
        <dl>
        <dt><img src="../../static/images/14.jpg" ></dt>
        <dd>
           <h3>七月的风八月的雨，卑微的我喜欢遥远的你</h3>
            <h4>节目:281</h4>
            <h5>失去才懂 纯音乐(完整版)</h5>
        </dd>
      </dl>
    <dl>
        <dt><img src="../../static/images/13.jpg" ></dt>
        <dd>
          <h3>末那大叔</h3>
            <h4>节目:18</h4>
            <h5>愿你的故事有人懂</h5>
        </dd>
      </dl>
    <dl>
        <dt><img src="../../static/images/13.jpg" ></dt>
        <dd>
           <h3>七月的风八月的雨，卑微的我喜欢遥远的你</h3>
            <h4>节目:281</h4>
            <h5>失去才懂 纯音乐(完整版)</h5>
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
.h4{
    color: #5B5A59;
    padding:0 10px;
    margin-top: 6px;
    display: flex;
    justify-content: space-between; 
}
.box1{
      width:100%;  
      margin-top:10px; 
}
.box1 dl{
      width:100%;
      height:140px;
      display:flex;  
}
.box1 dl dt{ 
      width:30%;  
}
.box1 dl dt img{
    width:100%;
}

.box1 dl dd{
    width:69%;
    margin:10px;
    line-height:30px;

}
.box1 dl dd h3{
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
}
</style>