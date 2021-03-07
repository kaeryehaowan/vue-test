<template>
  <div class="detail-container">
    <div class="header">
      <navDiv type="main" />
    </div>
    <div class="body">
      <pre v-highlightjs="value" class="code-container">
        <code class="js code-value"></code>
      </pre>
    </div>
  </div>
</template>
<script>
import navDiv from "@/components/nav";
import click from "!!raw-loader!~/unit/click.spec.js";
import components from "!!raw-loader!~/unit/components.spec.js";
import computed from "!!raw-loader!~/unit/computed.spec.js";
import emit from "!!raw-loader!~/unit/emit.spec.js";
import utils from "!!raw-loader!~/unit/utils.spec.js";
export default {
  name: "detail",
  data() {
    return {
      operating: click,
      propsRender: components,
      computed,
      emit,
      fn: utils
    };
  },
  components: { navDiv },
  computed: {
    value() {
      return this[this.type] || this.fn;
    },
    type() {
      return this.$route.query ? this.$route.query.type : "";
    }
  }
};
</script>
<style lang="less" scoped>
.detail-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    flex: none;
    z-index: 1;
  }
  .body {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    background: linear-gradient(#fff, #009688);
  }

  .code-container {
    border: 1px solid #d7dae2;
    border-radius: 2px;
    padding: 8px;
    font-size: 0;
  }
  .code-value {
    font-size: 14px;
  }
}
</style>
