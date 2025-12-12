<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
<script setup lang="ts">
const { result, loading, error } = useExampleQuery()
  console.log(result, loading, error)
</script>
