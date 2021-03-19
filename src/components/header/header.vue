<template>
  <div class="header">
    <div class="header-left" @click="$router.back()" v-show="data.status">
      <i class="iconfont icon-zuojiantou"></i>
    </div>
    <div class="header-in">{{ data.title }}</div>
    <div class="header-right"></div>
  </div>
</template>

<script>
export default {
  name: "header",
  props: ["data"]
};
</script>

<style lang="stylus" scoped>
@import './header.less';
</style>
