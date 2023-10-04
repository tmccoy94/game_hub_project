import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: '321f1fd70c794506b0ed92e84b911d3c'
    }
})

