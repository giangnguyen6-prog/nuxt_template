<script setup lang="ts">
defineProps<{ todos: any[] }>()
const emit = defineEmits(['toggle', 'remove'])
</script>

<template>
  <UCard>
    <div class="space-y-2">
      <TodoItem
        v-for="t in todos"
        :key="t.id"
        :todo="t"
        @toggle="emit('toggle', t)"
        @remove="emit('remove', t.id)"
      />
    </div>
  </UCard>
</template>
