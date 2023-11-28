<template>
    <div class="block" v-if="showBlock" @click="stopTimer">Click Me</div>
</template>
  
<script setup lang="ts">

import { ref, onMounted, withDefaults } from 'vue';

const props = withDefaults(defineProps<{ delay: number }>(), {
    delay: 0
});
const emit = defineEmits(['end']);

const showBlock = ref(false);
const reactionTime = ref(0);
let timer: ReturnType<typeof setInterval> | null = null;

onMounted(() => {
    setTimeout(() => {
        showBlock.value = true;
        startTimer();
    }, props.delay);
});

function startTimer() {
    timer = setInterval(() => {
        reactionTime.value += 10;
    }, 10);
}

function stopTimer() {
    if (timer) clearInterval(timer);
    timer = null;
    emit("end", reactionTime.value);
}
</script>
  
<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background: #28a745;
  color: white;
  text-align: center;
  padding: 50px 0;
  margin: 20px auto;
}

</style>
  