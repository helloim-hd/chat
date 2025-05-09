<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const emit = defineEmits(['message']);

const count = ref(0);
const message = ref('');

function submit() {
  emit('message', message.value);
}
</script>

<template>
  <form @submit.prevent="submit">
    <div class="relative">
      <input
        v-model="message"
        type="text"
        class="border-2 border-purple-500 w-lg rounded-xl"
      />
      <button
        type="submit"
        class="absolute end-1 border-none outline-none bg-transparent focus:outline-none"
      >
        <svg
          class="h-6 w-6 text-purple-400"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1="10" y1="14" x2="21" y2="3" />
          <path
            d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3"
          />
        </svg>
      </button>
    </div>
  </form>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
