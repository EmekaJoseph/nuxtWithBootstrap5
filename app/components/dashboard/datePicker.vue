<template>
    <div>
        <vue-date-picker v-model="date"></vue-date-picker>
    </div>
</template>

<script setup lang="ts">
const date = ref(new Date())
</script>