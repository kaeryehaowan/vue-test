<template>
  <div class="item-container">
    <img
      src="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
      width="32"
      height="32"
      alt=""
      srcset=""
    />
    <div class="value">{{ itemText }}</div>
    <el-button class="button" @click="onDetail" type="text">详情</el-button>
  </div>
</template>

<script>
import { Button } from "element-ui";
export default {
  name: "item-container",
  components: {
    elButton: Button
  },
  props: {
    itemId: {
      default: "",
      type: String
    },
    itemText: {
      default: "",
      type: String
    }
  },
  methods: {
    onDetail() {
      this.$emit("detail", { itemId: this.itemId });
    }
  }
};
</script>

<style lang="less" scoped>
.item-container {
  width: 100%;
  display: flex;
  align-items: center;
  height: 48px;
  padding: 12px 0;
  img {
    flex: none;
    border-radius: 50%;
  }
  .button {
    flex: none;
  }
  .value {
    flex: 1;
    margin: 0 24px;
    color: #414e5a;
    letter-spacing: 2px;
    font-size: 14px;
  }
}
</style>
