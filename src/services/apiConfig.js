import axios from 'axios'

const getToken = () => {
    return new Promise((resolve)=>{
        const token = localStorage.getItem("token")
        resolve(token ? `Bearer ${token}` : null)
    })
}

const api = axios.create({
    baseURL: "http://127.0.0.1:8000"
})

api.interceptors.request.use(
    async function (config) {
        const token = await getToken();

        if (token){
            config.headers["Authorization"] = token;
        }

        return config
    },
    function (error) {
        console.log(error)
        return Promise.reject(error)
    }
)

export default api;