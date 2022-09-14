<script setup lang="ts">

</script>
<template>
    <div class="side-wrapper">
        <nav class="nav-wrapper">
            <router-link to="/adm">홈 화면</router-link>
            <p class="nav-sectiontitle">관리</p>
            <router-link to="/22">카테고리</router-link>
            <router-link to="/22">해시태그</router-link>
            <router-link to="/22">서비스</router-link>
            <p class="nav-sectiontitle">기타</p>
            <router-link to="/22">서비스</router-link>
            <router-link to="/22">통계</router-link>
        </nav>
    </div>
</template>
<style scoped>
.side-wrapper {
    width: 80px;
    height: 100%;
    padding: 10px;
    transition: all .3s;
}

.side-wrapper:hover {
    width: 220px;
    transition: all .3s;
}

.side-wrapper .nav-wrapper {
    display: flex;
    align-items: flex-start;
}

.nav-wrapper {
    height: 100%;
    background: #fdfdfd;
    border: 1px solid #e1e1e1;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    overflow-y: auto;
    overflow-x: hidden;
}

.nav-wrapper a {
    margin-left: 15px;
    font-size: 16px;
    text-decoration: none;
    white-space: nowrap;
    padding: 10px 0;
}

.nav-wrapper a:first-child {
    padding: 0 0 10px 0;
}

.nav-wrapper a:hover {
    color: navy;
    font-weight: 800;
}

.nav-sectiontitle {
    margin: 0;
    padding: 10px 0 10px 15px;
    background: #e1e1e1;
    width: 100%;
}
</style>