<template>
    <button @click="showAlert" class="btn btn-primary">Show Alert</button>
</template>

<script setup lang="ts">

const { alertToast } = utilityFxn

const showAlert = () => {
    alertToast('Hello', 'info')
}

</script>