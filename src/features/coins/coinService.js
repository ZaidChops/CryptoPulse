import axios from "axios";
const api_url = "https://api.coingecko.com/api/v3"

export const getTrending = async () => {
    const response = await axios.get(`${api_url}/search/trending`)
    const data = await response.data
    return data
}

export const allCoins = async () => {
    const response = await axios.get(`${api_url}/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en
    `)
    const data = await response.data
    return data
}

export const search = async (name) => {
    // console.log(name);
    const response = await axios.get(`${api_url}/search?query=${name}`)
    const data = await response.data
    return data
}

export const details = async (id) => {
    const response = await axios.get(`${api_url}/coins/${id}?market_data=true`)
    return response.data

}

export const chart = async (id) => {
    const response = await axios.get(`${api_url}/coins/${id}/market_chart?vs_currency=inr&days=1`)
    return response.data.prices
}
