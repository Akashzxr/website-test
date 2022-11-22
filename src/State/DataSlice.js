import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataFetch } from "./DataFetch";


const initialState = {
   data:'',
   isLoaded:false,
   category:0,
   itemcount: 0,
   newc: [],
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
        setCategory:(state,action)=>{
            state.category = action.payload;
        },
        increment:(state)=>{
          state.itemcount+=1;
        },
        decrement:(state)=>{
            state.itemcount-=1;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(FetchData.pending, (state)=>{
            state.isLoaded=false;
        })
        .addCase(FetchData.fulfilled, (state,action)=>{
            state.data=action.payload;
            console.log(state.data[0])
            console.log(state.category)
            state.isLoaded= true;
        })
        .addCase(FetchData.rejected, (state)=>{
            state.isLoaded = false;
            console.log("error")
        })
    }
});

export const { setCategory ,increment,decrement} = DataSlice.actions;
export default DataSlice.reducer