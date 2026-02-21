import {createSlice, type PayloadAction} from "@reduxjs/toolkit"

type initialStateType = {
    portfolio : any[],
    count : number
}

const initialState : initialStateType= {
    portfolio : [],
    count : 0,
}

const portfolioSlice = createSlice({
    name : 'portfolio',
    initialState,
    reducers : {
        setPortfolio(state, action : PayloadAction<any>){
            state.portfolio = action.payload
        },

        setCount(state, action : PayloadAction<number>){
            state.count = action.payload
        }

    }
});

export const {setPortfolio, setCount} = portfolioSlice.actions;

export default portfolioSlice.reducer