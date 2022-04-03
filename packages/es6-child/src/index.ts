import { CustomType } from "es6-pkg-template";

export function multiplyTwo({ array }: { array: CustomType[] }): CustomType[] {
    return array.map((ele) => ({ name: ele.name, count: ele.count * 2 }));
}
