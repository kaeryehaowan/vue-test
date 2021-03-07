// 引入 shallowMount
import { shallowMount } from "@vue/test-utils";
// 引入组件
import Item from "@/components/item.vue";
// 定义公共函数
const itemId = "itemId";
const itemText = "itemText";
const factory = propsData => {
  return shallowMount(Item, {
    propsData: {
      ...propsData
    }
  });
};

describe("component Item", () => {
  describe("render props", () => {
    // 测试组件传入 itemId
    it("props itemId", () => {
      const wrapper = factory({
        itemId
      });
      expect(wrapper.props().itemId).toBe(itemId);
      wrapper.destroy();
    });

    // 测试组件传入 itemText
    it("props itemText", () => {
      const wrapper = factory({
        itemText
      });
      expect(wrapper.props().itemText).toBe(itemText);
      wrapper.destroy();
    });

    // 测试组件传入 itemText dom 渲染
    it("props itemText render", () => {
      const wrapper = factory({
        itemText
      });
      // 找到 dom 验证dom的内容是否是正确
      expect(wrapper.find(".value").text()).toBe(itemText);
      wrapper.destroy();
    });
  });
});
