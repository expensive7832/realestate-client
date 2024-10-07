import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: {},
  login: false,
  data: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
  isLogin: (state) => {
      state.login = true
  },
  isLogout: (state) => {
      state.login = false
      state.token = {}
  },

  addToken: (state, action) =>{
    state.token = action.payload
  }, 

  setData:(state, {payload}) =>{
    state.data = payload
  }

   
  },
})

// Action creators are generated for each case reducer function
export const { addToken, isLogin, isLogout, setData} = userSlice.actions

export default userSlice.reducer