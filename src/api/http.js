import axios from 'axios'

export default {
    axios_get(url, data) {
        return new Promise((resolove, reject) => {
            axios.get(url,data).then(res => {
                resolove(res.data)
            }).catch(error=> {
                reject(error)
            })
        })
    }
}