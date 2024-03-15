import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { allCoins, chart, details, getTrending, search } from "./coinService";
const initialState = {
    coins: [],
    allCoins: [],
    searchCoins: [],
    chartData: [],
    singleCoin: null,
    isLoading: false,
    isSuccess: false,
    isErrror: false
}

const coinSlice = createSlice({
    name: "coins",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(TrendingCoins.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(TrendingCoins.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.coins = action.payload
            })
            .addCase(TrendingCoins.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isErrror = true
            })
            .addCase(getAll.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.allCoins = action.payload
            })
            .addCase(getAll.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isErrror = true
            })
            .addCase(searchCoin.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(searchCoin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.searchCoins = action.payload
            })
            .addCase(searchCoin.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isErrror = true
            })
            .addCase(getCoinDetail.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getCoinDetail.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.singleCoin = action.payload
            })
            .addCase(getCoinDetail.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isErrror = true
            })
            .addCase(getChartDetails.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(getChartDetails.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.chartData = action.payload
            })
            .addCase(getChartDetails.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isErrror = true
            })
    }
})

export const TrendingCoins = createAsyncThunk("GET/COINS", async () => {
    const response = await getTrending()
    const data = response.coins
    return data
})

export const getAll = createAsyncThunk("GET/ALL", async () => {
    const response = await allCoins()
    return response
})

export const searchCoin = createAsyncThunk("GET/SEARCH", async (name) => {
    // console.log(name);
    const response = await search(name)
    const data = response.coins
    return data
})

export const getCoinDetail = createAsyncThunk("GET/DETAIL", async (id) => {
    const response = await details(id)
    return response



})

export const getChartDetails = createAsyncThunk("GET/CHART", async (id) => {
    const response = await chart(id)
    return response
})

export default coinSlice.reducer