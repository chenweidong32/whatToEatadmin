
<template>
  <div>
    <h1>Pinia语法</h1>
    <hr />
    <!-- <h1>{{ store.name }}</h1> -->
    <div @click="zujian()">222222222</div>
    {{ store.fullName }}
	<p>
		<button @click="onChangeName('cwdcwdcwd')">改变Store里的名字</button>
	</p>
  </div>
</template>

<script setup lang="ts">
import { defineComponent,ref,onMounted } from "vue";
import {helloStore} from '../store/user';
import { useRouter } from "vue-router";
const router = useRouter();

const store = helloStore();

const onChangeName = (name:string) => {
    store.updateUserName(name ?? '李同学')
}

onMounted(() => {
    onChangeName('张同学')
})


const zujian = () => {
  router.push({
    path: './Home',
  });
}



</script>

<style scoped>
</style>