<script setup lang="ts">
import IconLogo from "../../components/core/icons/IconLogo.vue"
</script>
<template>
    <header class="header-wrapper">
        <div class="logo-wrapper">
            <IconLogo :height="29" :width="29" />
            &nbsp;
            <span>Administrator</span>
        </div>
        <div class="user-wrapper">
            <span class="user-point">관리자</span>님 반갑습니다.
        </div>
    </header>
</template>
<style scoped>
.header-wrapper {
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 0 20px;
    box-shadow: 2px 2px 1px #e1e1e1;
}

.logo-wrapper {
    height: 28px;
    display: flex;
    align-items: flex-end;
    font-weight: 900;
    font-size: 20px;
}

.user-wrapper {
    font-size: 14px;
    font-weight: bold;
    color: #555;
}

.user-point {
    color: navy;
}
</style>