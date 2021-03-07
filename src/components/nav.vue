<template>
  <div :class="{ 'component-nav': true, main: type === 'main' }">
    <div class="logo">
      <div class="ico"></div>
      <div class="title" @click="push('index')">关于单元测试的个人报告</div>
    </div>
    <div class="nav">
      <div @click="push('md')">MD</div>
      <div @click="push('list')">List</div>
      <div @click="push('detail')" v-if="route !== '/detail'">Detail</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "component-nav",
  computed: {
    route() {
      return this.$route.path;
    }
  },
  props: {
    type: {
      type: String,
      defautl: "main"
    }
  },
  methods: {
    push(e) {
      if (e === "detail") {
        this.$router.push({
          path: "/detail",
          query: {
            type: "fn"
          }
        });
        return;
      }
      this.$router.push(e);
    }
  }
};
</script>

<style lang="less" scoped>
.component-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background: #181747;
  color: #fff;
  font-size: 18px;
  .logo {
    display: flex;
    align-items: center;
    padding-left: 24px;
    .ico {
      background-image: url(https://front-xps-cdn.xsyx.xyz/2019/12/09/2040208153.ico);
      width: 40px;
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: 50%;
      height: 60px;
      margin-right: 24px;
    }
    .title {
      cursor: pointer;
      transition: all 0.4s;
      &:hover {
        color: #1890ff !important;
      }
    }
  }
  .nav {
    display: flex;
    align-items: center;
    font-size: 14px;
    padding-right: 24px;
    div {
      cursor: pointer;
      padding: 12px;
      transition: all 0.4s;
      &:hover {
        color: #1890ff !important;
      }
    }
  }
  &.main {
    background: #fff;
    color: #314659;
  }
}
</style>
