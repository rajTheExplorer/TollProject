import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../AxiosInstance";



let initialState={
    googlePolylineData:'',
    tollGuruTollData:'',
    GOOGLE_DATA_LOADING:false,
    GOOGLE_DATA_SUCCESS:false,
    GOOGLE_DATA_FAILED:false,
    TOLL_DATA_LOADING:false,
    TOLL_DATA_SUCCESS:false,
    TOLL_DATA_FAILED:false
}


let fetchGooglePolydata = createAsyncThunk("map/fetchGooglePolydata",async({source,destination})=>
{
    let response=await axios('/google',{source,destination})
    console.log(response.data)
    return response.data
});

let MapSlice=createSlice({
    name:'map',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>
    {
        builder
          .addCase(fetchGooglePolydata.pending, (state) => {
            state.GOOGLE_DATA_LOADING = true;
            state.GOOGLE_DATA_SUCCESS = false;
          })
          .addCase(fetchGooglePolydata.fulfilled, (state, action) => {
            state.GOOGLE_DATA_LOADING = false;
            state.GOOGLE_DATA_SUCCESS = true;
            console.log(action.payload)
          })
          .addCase(fetchGooglePolydata.fulfilled, (state) => {
            state.GOOGLE_DATA_LOADING = false;
            state.GOOGLE_DATA_FAILED = true;
            state.GOOGLE_DATA_SUCCESS = false;
          });
    }
})


export default MapSlice.reducer
