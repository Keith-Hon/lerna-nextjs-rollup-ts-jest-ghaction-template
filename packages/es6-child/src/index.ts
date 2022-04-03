import { CustomType, addOne } from "es6-pkg-template";

export function addTwo({ array }: {
    array: CustomType[];
}): CustomType[] {
    return addOne({ array: addOne({ array }) });
}

export function multiplyTwo({ array }: { array: CustomType[] }): CustomType[] {
    return array.map((ele) => ({ name: ele.name, count: ele.count * 2 }));
}
