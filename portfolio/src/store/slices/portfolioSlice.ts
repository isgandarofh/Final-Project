import {createSlice, type PayloadAction} from "@reduxjs/toolkit"

type initialStateType = {
    categories : any[],
    portfolioContent : any[]
}

const initialState : initialStateType= {
    categories : [],
    portfolioContent : [],
}

const portfolioSlice = createSlice({
    name : 'portfolio',
    initialState,
    reducers : {
        setPortfolioCategory(state, action : PayloadAction<any>){
            state.categories = action.payload
        },
        setPortfolioContent(state, action : PayloadAction<any>){
            state.portfolioContent = action.payload
        }

    }
});

export const {setPortfolioCategory,setPortfolioContent} = portfolioSlice.actions;

export default portfolioSlice.reducer