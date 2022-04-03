import { CustomType } from "es6-pkg-template";
import { addTwo, getGithubUserProfile } from "../src";

describe("", () => {
    it("test", () => {
        const arr: CustomType[] = [{ name: "a", count: 1 }, { name: "b", count: 2 }];
        const newArr = addTwo({ array: arr });
        expect(newArr[0].count).toBe(3);
        expect(newArr[1].count).toBe(4);
    });

    it("test", async () => {
        const res = await getGithubUserProfile();
        expect(res.status).toBe(200);
    });
})