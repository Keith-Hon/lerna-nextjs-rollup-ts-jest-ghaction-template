import axios, { AxiosResponse } from "axios";
import axiosRetry from "axios-retry";

export type { Method, AxiosRequestConfig } from "axios";

function getAxiosInstance() {
    axiosRetry(axios, { retries: 10 });

    axios.interceptors.response.use(
        function (response: AxiosResponse) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
        },
        function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            if (error.request) {
                console.log("Request host: " + JSON.stringify(error.host));
                console.log("Request url: " + JSON.stringify(error.request.path));
                console.log("Request headers: " + JSON.stringify(error.request._header));
                console.log("Request data: " + JSON.stringify(error.request.data));
            }

            if (error.response) {
                console.log("Error: " + JSON.stringify(error.response.data));
            }

            return Promise.reject(error);
        }
    );

    return axios;
}

export { getAxiosInstance };
