// 引入 shallowMount
import { shallowMount } from "@vue/test-utils";
// 引入页面
import List from "@/views/list.vue";

describe("views List", () => {
  describe("computed", () => {
    // 设置 data.u
    it("countvalue", async () => {
      const wrapper = shallowMount(List);
      await wrapper.setData({
        u: 200
      });
      // 验证计算属性是否正确返回
      expect(wrapper.vm.countvalue).toBe("data里的u值为：200");
      // 销毁
      wrapper.destroy();
    });
  });
});
