/*
 * @Author: 1784026306@qq.com
 * @Date: 2022-07-05 21:58:19
 * @LastEditors: 1784026306@qq.com
 * @LastEditTime: 2022-07-05 22:30:13
 * @FilePath: \koa2typecsriptc:\Users\Administrator\Desktop\个人项目\koaAdmin\src\router\index.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by 1784026306@qq.com s15915138892, All Rights Reserved. 
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 2. 配置路由
const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		component: () => import("../components/HelloWorld.vue"),
	},
	{
		path: "/Home",
		component: () => import("../components/Home.vue"),
	},
	{
		path: "/Hello",
		component: () => import("../components/HelloWorld.vue"),
	},

];
// 1.返回一个 router 实列，为函数，里面有配置项（对象） history
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router