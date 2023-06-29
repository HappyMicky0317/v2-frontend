import {V1} from "~/types/V1";

export class Api<SecurityDataType = unknown> extends V1<SecurityDataType> {

    constructor() {
        super();
        // let token = useCookie("XSRF-TOKEN").value;
        // this.instance.defaults.headers = useRequestHeaders(["cookie"]);
        // this.instance.defaults.headers = {
        //     accept: "application/json",
        //     ...(token && {['X-XSRF-TOKEN']: token}),
        //     ...useRequestHeaders(["cookie"]),
        //     referer: 'http://localhost:3000',
        // };
        const token = localStorage.getItem('token');
        this.instance.defaults.headers = {'Authorization': `Bearer ${token}`, accept: "application/json"};
        // this.instance.defaults.baseURL = process.env.NUXT_PUBLIC_BACKEND_URL;
        this.instance.defaults.baseURL = '/api/proxy/api/';
        // this.instance.defaults.withCredentials = true;

        this.instance.interceptors.response.use(
            response => {
                return Promise.resolve(response);
            },
            error => {
                const status = error.response?.status ?? -1;

                if ([401, 419].includes(status)) {
                    // Token expired, refresh the token
                    if (error.config.url !== "/v1/token/refresh" && localStorage.getItem("token") && !error.config._retry) {
                        return this.refreshTokenAndRetry(error);
                    }

                    localStorage.removeItem("token");
                    return useRouter().push("/login");
                }

                if ([409].includes(status)) {
                    useRouter().push("/verify-email");
                }

                if ([500].includes(status)) {
                    console.error("[API Error]", error.data?.message, error.data);
                }
                return Promise.reject(error.response);
            }
        );
    }

    private async refreshTokenAndRetry(error: any) {
        try {
            const {data} = await this.instance.post("/v1/token/refresh");
            const token = data.token;
            localStorage.setItem("token", token);
            error.config.headers["Authorization"] = `Bearer ${token}`;
            return this.instance.request(error.config);
        } catch (e) {
            return Promise.reject(error);
        }
    }
}