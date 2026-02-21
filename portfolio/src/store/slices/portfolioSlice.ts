import {createSlice} from "@reduxjs/toolkit"

type initialStateType = {
    portfolio : any[],
}

const initialState : initialStateType= {
    portfolio : []
}

const portfolioSlice = createSlice({
    name : 'portfolio',
    initialState,
    reducers : {
        
    }
})