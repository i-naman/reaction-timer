<template>
    <p>Reaction Time: {{ score }} ms</p>
    <div class="rank">
        {{ rank }}
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults } from 'vue';

const props = withDefaults(defineProps<{ score: number }>(), {
    score: 0
});

const rank = ref<string>('');

onMounted(() => {
    if (props.score < 250) {
        rank.value = "Master";
    } else if (props.score < 400) {
        rank.value = "Expert";
    } else if (props.score < 700) {
        rank.value = "Average";
    } else if (props.score < 1000) {
        rank.value = "Beginner";
    } else {
        rank.value = "Newbie";
    }
});
</script>
  
<style scoped>
.rank {
  font-size: 1.4em;
  color: #17a2b8;
  font-weight: bold;
}
</style>
  