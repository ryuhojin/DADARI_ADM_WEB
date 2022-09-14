<script setup lang="ts">
import DSide from './DSide.vue';

</script>
<template>
    <div class="main-wrapper">
        <DSide />
        <div class="content-wrapper">
            <h4 class="menu-title">SUB TITLE</h4>
            <RouterView />
        </div>
    </div>
</template>
<style scoped>
.main-wrapper {
    min-width: 1024px;
    flex-grow: 1;
    display: flex;
}

.content-wrapper {
    flex-grow: 1;
    padding: 10px;
}

.menu-title {
    margin: 10px 0 10px 0;
    font-size: 15px;
    border-left: 3px solid navy;
    padding-left: 10px;
}
</style>