<template>
  <div class="index">
    <div class="header">
      <navDiv />
    </div>
    <div class="bg">
      <div class="content">
        <div>提供描述组件行为的文档</div>
        <div>节省手动测试的时间</div>
        <div>减少研发新特性时产生的 bug</div>
        <div>改进设计</div>
        <div>促进重构</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import navDiv from "@/components/nav";
export default {
  name: "index",
  computed: {
    ...mapState({
      bg: state => state.indexbg
    })
  },
  components: { navDiv },
  methods: {
    push(e) {
      this.$router.push(e);
    }
  }
};
</script>
<style lang="less" scoped>
.index {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    flex: none;
    z-index: 1;
  }
  .bg {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(http://xsyx-front-daily-1259014075.cos.ap-shanghai.myqcloud.com/hanzo-docs/0.6.0/banner4.04732dc.png)
      center/cover no-repeat;
    .content {
      font-size: 24px;
      color: #fff;
      line-height: 2;
      letter-spacing: 4px;
      text-shadow: 6px 4px 2px rgba(0, 0, 0, 0.3);
      div {
        position: relative;
        &::before {
          content: "";
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #fff;
          position: absolute;
          top: 50%;
          left: -30px;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
