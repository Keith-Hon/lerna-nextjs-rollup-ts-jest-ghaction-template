import { addOne, CustomType } from "../src";

describe("", () => {
    it("test", () => {
        const arr: CustomType[] = [{ name: "a", count: 1 }, { name: "b", count: 2 }];
        const newArr = addOne({ array: arr });
        expect(newArr[0].count).toBe(2);
        expect(newArr[1].count).toBe(3);
    });
})