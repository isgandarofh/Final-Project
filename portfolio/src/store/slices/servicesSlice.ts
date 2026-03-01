import {createSlice, type PayloadAction} from "@reduxjs/toolkit"

type Arr = {
    id : string,
    title : string,
    image : string,
    desc : string
}

type initialStateType = {
    servicesContent : Arr[]
}

const initialState : initialStateType= {
    servicesContent : []
}

const servicesSlice = createSlice({
    name : 'services',
    initialState,
    reducers : {
        setServicesContent(state,action : PayloadAction<Arr[]>){
            state.servicesContent = action.payload
        }
    }
});

export const {setServicesContent} = servicesSlice.actions;

export default servicesSlice.reducer