<script setup lang="ts"></script>
<template>
  <div class="side-wrapper">
    <nav class="nav-wrapper">
      <p class="nav-sectiontitle">관리</p>
      <router-link to="/admin/user">유저 관리</router-link>
      <router-link to="/admin/category">카테고리 관리</router-link>
      <router-link to="/admin/hashtag">해시태그 관리</router-link>
      <router-link to="/admin/service">서비스 관리</router-link>
      <router-link to="/admin/template">템플릿 관리</router-link>
      <p class="nav-sectiontitle">기타</p>
      <router-link to="/url">외부이동</router-link>
      <router-link to="/statistics">통계</router-link>
    </nav>
  </div>
</template>
<style scoped>
.side-wrapper {
  width: 210px;
  min-width: 210px;
  height: 100%;
  padding: 10px;
}

.side-wrapper .nav-wrapper {
  display: flex;
  align-items: flex-start;
}

.nav-wrapper {
  height: 100%;
  background: #fff;
  border: 1px solid #e1e1e1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
}

.nav-wrapper a {
  margin-left: 15px;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
  padding: 10px 0;
  color: #000;
}

.nav-wrapper a:first-child {
  padding: 0 0 10px 0;
}

.nav-wrapper a:hover {
  color: salmon;
}

.nav-sectiontitle {
  margin: 0;
  padding: 10px 0 10px 15px;
  background: #f1f1f1;
  color: navy;
  font-weight: 600;
  width: 100%;
}

.router-link-exact-active {
  color: salmon;
}
</style>
