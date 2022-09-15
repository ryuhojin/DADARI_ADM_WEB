<script setup lang="ts">
import DSide from './DSide.vue';
import { computed } from "vue";
import router from '../../router';
const getTitle = computed(() => {
    return router.currentRoute.value.name
})
</script>
<template>
    <div class="main-wrapper">
        <DSide />
        <div class="content-wrapper">
            <h4 class="menu-title">{{getTitle}}</h4>
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
    padding: 10px 10px 10px 0;
    display: flex;
    flex-direction: column;
}

.menu-title {
    background: #fff;
    padding: 10px;
    margin: 0 0 10px 0;
    font-size: 15px;
    border: 1px solid #e1e1e1;
    border-left: 3px solid navy;
    padding-left: 10px;
}
</style>