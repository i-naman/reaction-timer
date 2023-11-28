<template>
	<div class="container">
		<h1>Reaction Timer</h1>
		<button @click="start" :disabled="isPlaying">Play</button>
		<Block v-if="isPlaying && delay !== null" :delay="delay" @end="endGame" />
		<Result v-if="showResults && score !== null" :score="score" />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Block from './components/Block.vue';
import Result from './components/Results.vue';

const isPlaying = ref(false);
const delay = ref<number | null>(null);
const score = ref<number | null>(null);
const showResults = ref(false);

function start() {
	delay.value = 2000 + Math.random() * 5000;
	isPlaying.value = true;
	showResults.value = false;
}

function endGame(reactionTime: number) {
	score.value = reactionTime;
	isPlaying.value = false;
	showResults.value = true;
}
</script>

<style scoped>
/* App.vue */
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #333;
	margin-top: 30px;
}

button {
	background: #007bff;
	color: white;
	border: none;
	padding: 10px 20px;
	border-radius: 5px;
	cursor: pointer;
	font-size: 18px;
	letter-spacing: 1px;
	margin: 15px;
	transition: background-color 0.3s;
}

button[disabled] {
	opacity: 0.5;
	cursor: not-allowed;
}

button:hover {
	background-color: #0056b3;
}
</style>
