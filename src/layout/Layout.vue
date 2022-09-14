<script setup lang="ts">
import { DHeader, DMain, DFooter } from './modules';
</script>
<template>
    <div class="container-wrapper">
        <DHeader />
        <DMain />
        <DFooter />
    </div>
</template>
<style scoped>
.container-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>