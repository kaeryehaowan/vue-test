// 引入需要测试的函数
import { isEmpty } from "@/utils";

describe("utils", () => {
  describe("utils fn isEmpty", () => {
    // isEmpty 不传参
    it("isEmpty 不传参", () => {
      let res = isEmpty();
      expect(res).toBe(true);
    });

    // isEmpty 传 null
    it("isEmpty 传 null", () => {
      let res = isEmpty(null);
      expect(res).toBe(true);
    });

    // isEmpty 传 boolean true
    it("isEmpty 传 boolean true", () => {
      let res = isEmpty(true);
      expect(res).toBe(false);
    });

    // isEmpty 传 boolean false
    it("isEmpty 传 boolean false", () => {
      let res = isEmpty(false);
      expect(res).toBe(false);
    });

    // isEmpty 传 number 0
    it("isEmpty 传 number 0", () => {
      let res = isEmpty(0);
      expect(res).toBe(true);
    });

    // isEmpty 传 number 1
    it("isEmpty 传 number 1", () => {
      let res = isEmpty(1);
      expect(res).toBe(false);
    });

    // isEmpty 传 error new Error
    it("isEmpty 传 error new Error", () => {
      let res = isEmpty(new Error());
      expect(res).toBe(true);
    });

    // isEmpty 传 error new Error('error message')
    it("isEmpty 传 error new Error('error message')", () => {
      let res = isEmpty(new Error("error message"));
      expect(res).toBe(false);
    });

    // isEmpty 传 string ''
    it("isEmpty 传 string ''", () => {
      let res = isEmpty("");
      expect(res).toBe(true);
    });

    // isEmpty 传 string 'test'
    it("isEmpty 传 string 'test'", () => {
      let res = isEmpty("test");
      expect(res).toBe(false);
    });

    // isEmpty 传 array []
    it("isEmpty 传 array []", () => {
      let res = isEmpty([]);
      expect(res).toBe(true);
    });

    // isEmpty 传 array [1]
    it("isEmpty 传 array [1]", () => {
      let res = isEmpty([1]);
      expect(res).toBe(false);
    });

    // isEmpty 传 file size为0
    it("isEmpty 传 file size为0", () => {
      let objFile = new File([""], "test.js", {
        type: "text/plain",
        lastModified: Date.now()
      });
      let res = isEmpty(objFile);
      expect(res).toBe(true);
    });

    // isEmpty 传 file size不为0
    it("isEmpty 传 file size不为0", () => {
      let objFile = new File(["jest"], "test.js", {
        type: "text/plain",
        lastModified: Date.now()
      });
      let res = isEmpty(objFile);
      expect(res).toBe(false);
    });

    // isEmpty 传 map size为0
    it("isEmpty 传 map size为0", () => {
      let objMap = new Map();
      let res = isEmpty(objMap);
      expect(res).toBe(true);
    });

    // isEmpty 传 map size不为0
    it("isEmpty 传 map size不为0", () => {
      let objMap = new Map([["name", "test"]]);
      let res = isEmpty(objMap);
      expect(res).toBe(false);
    });

    // isEmpty 传 set size为0
    it("isEmpty 传 set size为0", () => {
      let objSet = new Set();
      let res = isEmpty(objSet);
      expect(res).toBe(true);
    });

    // isEmpty 传 set size不为0
    it("isEmpty 传 set size不为0", () => {
      let objSet = new Set([1, 2, 3, 3]);
      let res = isEmpty(objSet);
      expect(res).toBe(false);
    });

    // isEmpty 传 object 为 {}
    it("isEmpty 传 object 为 {}", () => {
      let obj = {};
      let res = isEmpty(obj);
      expect(res).toBe(true);
    });

    // isEmpty 传 object 不为 {}
    it("isEmpty 传 object 不为 {}", () => {
      let obj = {
        name: "test"
      };
      let res = isEmpty(obj);
      expect(res).toBe(false);
    });

    // isEmpty 传 function
    it("isEmpty 传 function ", () => {
      let res = isEmpty(() => {});
      expect(res).toBe(false);
    });
  });
});
