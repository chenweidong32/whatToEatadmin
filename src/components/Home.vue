<!--
 * @Author: 1784026306@qq.com
 * @Date: 2022-07-05 21:59:24
 * @LastEditors: 1784026306@qq.com
 * @LastEditTime: 2022-07-05 22:30:20
 * @FilePath: \koa2typecsriptc:\Users\Administrator\Desktop\个人项目\koaAdmin\src\components\Home.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 1784026306@qq.com s15915138892, All Rights Reserved. 
-->
<template>

  <div>home组件sssssssssssssssssssssss</div>
  <div @click="toPagePath('./Hello')">tiaozhuan</div>
</template>

<script setup lang="ts">

import { defineComponent } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const toPagePath = (url: string) => {
  router.push({
    path: url,
  });
};



</script>