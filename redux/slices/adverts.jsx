import {createSlice} from '@redux/toolkit'

const initialState = {
    adverts: {
    items: [],
    status: 'loading',
},

tags:{
    items: [],
    status: 'loading',
},
};

const advertsSlice = createSlice({
    name: 'adverts',
    initialState,
    reducer: {},
})

export const advertsReducer = advertsSlice.reducer;