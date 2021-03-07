<template>
  <div class="list-container">
    <div class="header">
      <navDiv type="main" />
    </div>
    <div class="body">
      <p style="position: absolute;top: 70px;">{{ countvalue }}</p>
      <div class="content">
        <div
          :class="{ bodernone: index === list.length - 1 }"
          class="item-body"
          v-for="(item, index) in list"
          :key="index"
        >
          <itemDiv @detail="onDetail" :itemText="item.text" :itemId="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navDiv from "@/components/nav";
import itemDiv from "@/components/item";
export default {
  name: "list",
  computed: {
    countvalue() {
      return "data里的u值为：" + this.u;
    }
  },
  components: { navDiv, itemDiv },
  data: function() {
    return {
      u: 100,
      list: [
        {
          text: "公共函数测试",
          id: "fn"
        },
        {
          text: "props测试 & render测试",
          id: "propsRender"
        },
        {
          text: "计算属性测试",
          id: "computed"
        },
        {
          text: "模拟用户操作测试",
          id: "operating"
        },
        {
          text: "组件 emit 事件测试",
          id: "emit"
        }
      ]
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
.list-container {
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
    background: linear-gradient(#fff, #009688);
    .content {
      padding: 24px;
      width: 60vw;
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
    }
    .item-body {
      border-bottom: 1px solid #eee;
    }
  }
}
.bodernone {
  border: none !important;
}
</style>
