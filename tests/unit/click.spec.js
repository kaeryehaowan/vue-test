// 引入 mount
import { mount } from "@vue/test-utils";
// 引入组件
import Item from "@/components/item.vue";

describe("components Item", () => {
  describe("click", () => {
    it("detail", () => {
      // 挂载组件
      const wrapper = mount(Item);
      const mockFn = jest.fn();
      // 设置组件点击方法
      wrapper.setMethods({
        onDetail: mockFn
      });
      // 找到按钮
      const button = wrapper.find(".button");
      // 模拟点击
      button.trigger("click");
      // 验证是否被点击
      expect(mockFn).toBeCalled();
      // 销毁 wrapper
      wrapper.destroy();
    });
  });
});
