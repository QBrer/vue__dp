<template>
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="0" @click="goTo('/zero')">zero</el-menu-item>
    <el-menu-item index="1" @click="goTo('/one')">one</el-menu-item>
    <el-menu-item index="2" @click="goTo('/two')">two</el-menu-item>
    <el-menu-item index="3" @click="goTo('/three')">three</el-menu-item>
</el-menu>
</template>
<script>
export default {
  methods: {
  goTo(route) {
    if (this.$route.path !== route) {
      this.$router.push(route);
    }
  }
}
};
</script>
<style>

</style>