import {createSlice, type PayloadAction} from "@reduxjs/toolkit"

type initialStateType = {
    categories : any[],
    portfolioContent : any[];
    currentCategoryId : number
}

const initialState : initialStateType= {
    categories : [],
    portfolioContent : [],
    currentCategoryId : 0
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
        },
        setCurrentCategoryId(state, action:PayloadAction<number>){
            state.currentCategoryId = action.payload;
        }

    }
});

export const {setPortfolioCategory,setPortfolioContent, setCurrentCategoryId} = portfolioSlice.actions;

export default portfolioSlice.reducer