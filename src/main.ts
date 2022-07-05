/*
 * @Author: 1784026306@qq.com
 * @Date: 2022-07-05 21:37:37
 * @LastEditors: 1784026306@qq.com
 * @LastEditTime: 2022-07-05 22:20:16
 * @FilePath: \koa2typecsriptc:\Users\Administrator\Desktop\个人项目\koaAdmin\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by 1784026306@qq.com s15915138892, All Rights Reserved. 
 */
import { createApp } from 'vue'
import App from './App.vue'

import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'


// 挂载到Vue根实例上
createApp(App).use(store).use(ElementPlus).use(router).mount('#app')
