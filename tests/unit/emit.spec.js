// 引入 mount
import { mount } from "@vue/test-utils";
// 引入组件
import Item from "@/components/item.vue";

describe("components Item", () => {
  describe("emit", () => {
    // 组件里点击时，会有一个emit事件
    it("detail click", () => {
      const wrapper = mount(Item);
      const mockFn = jest.fn();
      // 在组件自身实例上监听 detail 事件
      wrapper.vm.$on("detail", mockFn);
      // 找到按钮并模拟点击
      const button = wrapper.find(".button");
      button.trigger("click");
      // 验证是否正确 emit
      expect(mockFn).toBeCalled();
      // 销毁
      wrapper.destroy();
    });
  });
});
