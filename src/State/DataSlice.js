import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataFetch } from "./DataFetch";


const initialState = {
   data:'',
   isLoaded:false,
}

//fetching data
export const FetchData = createAsyncThunk('Fetchdata',async () => {
    try{
        return await DataFetch()
        }catch(error){
        console.log("error")
    }
})


export const DataSlice = createSlice({
    name: "Data",
    initialState,
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(FetchData.pending, (state)=>{
            state.isLoaded=false;
        })
        .addCase(FetchData.fulfilled, (state,action)=>{
            state.data=action.payload;
            console.log(state.data[0])
            state.isLoaded= true;
        })
        .addCase(FetchData.rejected, (state)=>{
            state.isLoaded = false;
            console.log("error")
        })
    }
});


export default DataSlice.reducer