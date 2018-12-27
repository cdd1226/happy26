<template>
  <div id="app">
  <div class='sections'>
      <router-view></router-view>
  </div>
     <ul class='footer'>
     <router-link tag='li' v-for='(val,index) in Musiclist' :key='index' :to='val.name'>{{val.title}}</router-link>
   </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
        Musiclist:[{
            title:"发现",
            name:"recommend"
            },{
            title:"视频",
            name:"singer"
            },{
            title:"我的",
            name:"ranking"
            },{
            title:"朋友",
            name:"friend"
            },{
            title:"账号",
            name:"search"
            }]
    }
  }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}

html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.sections{
    overflow-y: scroll;
}
  .footer{
    width: 100%;
    list-style:none;
    overflow: hidden;
    position: fixed;
    bottom:0;
    left:0;
    background:red;
    display: flex;
    justify-content: space-around;
    background: #F5EBEC;
    height: 40px;
    line-height: 40px;
}
.footer li{
    flex: 1;
    text-align: center;
} 
.footer .router-link-exact-active{
    color: #2E383A;
}
</style>

