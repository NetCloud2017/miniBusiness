import axios from "axios";
import qs from "qs";

const axiosInstance = axios.create({
    baseURL: "http://localhost",
    timeout: "6000",
});
/*  

    1、请求拦截里面针对token进行处理
    2、响应拦截里面判断token是否过期等等
    3、在config/index.js里面动态更改baseURL
    4、在请求拦截里面根据业务场景修改请求头
    5、在拦截里面设置全局请求进度条等等
    6、如何重复请求、 取消发送请求；

    
*/
function generateReqKey(config) {
    let { method, url, params, data } = options;
    return [method, url, qs.stringify(params), qs.stringify(data)].join("&");
}

// 拦截请求是 后添加先行，拦截响应式 先添加的先执行
const pendingRequest = new Map();
const controller = new AbortController(); // axios  0.22.0 开始弃用 CancelToken, 所以用 AbortController;

function removePenddingRequest(config) {
     const requestKey = generateReqKey(config);
    if(pendingRequest.has(requestKey)) {
        let cancelToken = pendingRequest.get(requestKey);
        cancelToken("取消请求");
        pendingRequest.delete(requestKey);
    }
}
const CancelToken = axios.CancelToken;
let cancel = null;
/*
const source =  CancelToken.source()
options.cancelToken = source.token
source.cancel(errorMsg);
*/
axiosInstance.interceptors.request.use(
    (options) => {
        // 检测或者添加请求参数修改请求头等操作
        // GET -> params; POST -> data
        let requestKey = generateReqKey(options);

        if (typeof cancel === "function") {
            cancel("");
            removePenddingRequest(options);
        }
        options.cancelToken = new CancelToken(function executor(cancel) {
            cancel = cancel;
            if (!pendingRequest.has(requestKey)) {
                // 添加 拦截 token
                pendingRequest.set(requestKey, cancel);
            }
        });
        return options;
    },
    (err) => {
      return  Promise.reject(err);
    }
);

axiosInstance.interceptors.response.use(
    (res) => {
        //  响应处理
        cancel = null;
        return res;
    },
    (error) => {
        // 错误处理
        if (axios.isCancel(error)) {
            return new Promise((resolve, reject) => {
                throw new Error(error.message);
            });
        } else {
            cancel = null;
            return Promise.reject(error);
        }
    }
);
