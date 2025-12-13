<script setup lang="ts">
defineProps<{
	todo: any;
}>();

const emit = defineEmits(['toggle', 'remove']);
</script>

<template>
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-2 cursor-pointer" @click="emit('toggle')">
			<UCheckbox :model-value="todo.completed" />
			<span :class="{ 'line-through text-gray-400': todo.completed }">
				{{ todo.title }}
			</span>
		</div>

		<UButton icon="i-heroicons-trash" color="red" variant="ghost" size="xs" @click="emit('remove')" />
	</div>
</template>
