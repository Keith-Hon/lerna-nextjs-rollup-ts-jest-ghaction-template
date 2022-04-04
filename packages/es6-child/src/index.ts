import { getAxiosInstance } from "custom-axios-template";
import { CustomType, addOne } from "es6-pkg-template";

export function addTwo({ array }: { array: CustomType[] }): CustomType[] {
    return addOne({ array: addOne({ array }) });
}

export function multiplyTwo({ array }: { array: CustomType[] }): CustomType[] {
    return array.map((ele) => ({ name: ele.name, count: ele.count * 2 }));
}

export async function getGithubUserProfile() {
    const url = "https://api.github.com/users/moredeal-org";
    const axios = getAxiosInstance();
    const res = await axios.get(url);
    return res;
}
