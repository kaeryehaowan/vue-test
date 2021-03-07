<template>
  <div class="md-container">
    <div class="header">
      <navDiv type="main" />
    </div>
    <div class="body">
      <vue-markdown class="markdown-body">
        {{ md }}
      </vue-markdown>
    </div>
  </div>
</template>
<script>
import navDiv from "@/components/nav";
import md from "!!raw-loader!@/docs/md.md";
export default {
  name: "md",
  components: { navDiv },
  data: function() {
    return {
      md
    };
  },
  methods: {
    onDetail(e) {
      this.$router.push({
        path: "/detail",
        query: {
          type: e.itemId
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.md-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    flex: none;
    z-index: 1;
  }
  .body {
    padding: 24px 240px 200px;
  }
}
.bodernone {
  border: none !important;
}
</style>
