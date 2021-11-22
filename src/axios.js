import axios from 'axios'

const instance = axios.create({
    baseURL:"https://mern-tiktok-clone-app.herokuapp.com"
})

export default instance