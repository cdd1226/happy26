<template>
  <div>
     <div class='header'>
       <i class="icon iconfont icon-yuyin"></i>
       <input text='type' placeholder='猜你喜欢 浮生'>
       <i class="icon iconfont icon-gengduo-2"></i>
   </div>
    <div class='section'>
    <ul class='nav'>
       <router-link to='/rank'>个性推荐</router-link>
       <router-link to='/ranks'>主播电台</router-link>
    </ul>
      <main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
     </main>
 </div>
  </div>
</template>

<script>

export default {
 
}
</script>

<style>

.header{
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #363B3E;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
   
}
.header i{
    color: #fff;
    font-size: 20px;
}
.header input{
    background: #5B6161;
    border-radius: 15px;
    color: #fff !important;
    flex: 1;
    margin: 20px 30px;
    height: 40px;
    line-height: 40px;
    border: 0;
    text-align: center;  
}
.section{
   width: 100%;
   display: flex;
   flex: 1;
   flex-direction: column;
}
.section .nav{
    width: 100%;
    display: flex;
    height: 40px;
    line-height: 40px;
    background: #363B3E;
}
.section .nav a{
    color: #5B6161;
    flex: 1;
    text-align: center;
}
.section .nav .router-link-active{
  color: #fff;
}
 .section main{
    flex: 1;
}
.dl{
    width: 100%;
    height: 110px;
    display: flex;
    justify-content: space-around;
    border-bottom: 1px  solid #E1E2E4;   
}
.dl dl{
    flex: 1;
    text-align: center;
}
.dl dl dt{
   width: 60px;
   height: 60px;
   line-height: 60px;
   background: #33373A;
   margin: 0 auto;
   border-radius: 50%;
   margin-top: 6px;
}
.dl dl dt i{
    color: #fff;
    font-size: 26px;
}
.dl dl dd{
    color: #454648;
   margin-top: 6px;
}
.h3{
    color: #5B5A59;
    padding:0 10px;
    margin-top: 6px;
}
.h3 i{
    margin-left: 6px;
}
.box{
    width: 100%;
    overflow: hidden;
    margin-top: 6px;
    display: flex;
    flex-wrap: wrap; 
    position: relative;
    box-sizing: border-box;
}

.box dl{
    width: 30%;
    height: 200px;
    display: flex;
    flex-direction: column;
    margin: 0 1%;
}
.box dl dt img{
    width: 100%;
   border-radius: 10px;
}
.box dl dd p{
    position: absolute;
    left: 50px;
    top: -120px;
    color: #fff;
}
.box dl dd h3{
    color: #303231;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
</style>

