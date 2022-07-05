
import { defineStore } from "pinia";
export const helloStore = defineStore("userInfo", {
    // state(){} 错误的写法 
    // 必须用箭头函数
    // 必须有 返回值 
    // state: () => ({name:'温言铁语'}),
   //  2种写法等价的
    state: () => {
        return {
            userID: '10001',
			userName: '某同学',
            name:'cwd'
        };
    },
    getters: {
		fullName: (state) => {
			return `${state.userName}(${state.userID})`
		},
	},
	// action 支持 async/await 的语法，可以自行添加使用
	// action 里的方法相互之间调用，直接用 this 访问即可
	actions: {
		updateUserName(name: string) {
			this.userName = name
		},
	},

});

