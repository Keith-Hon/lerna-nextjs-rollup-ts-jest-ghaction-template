export type CustomType = {
    name: string,
    count: number
}

export function addOne({ array }: { array: CustomType[] }): CustomType[] {
    return array.map(ele => ({ name: ele.name, count: ele.count + 1 }));
}