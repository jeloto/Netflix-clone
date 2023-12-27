import { createSlice } from '@reduxjs/toolkit';



//userSlice is like a huuuge stadium that holds users
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
 login:(state,action) =>{
  state.user = action.payload;
 },
 logout:(state) =>{
  //this resets the user back to null
  state.user = null;
 }
  },
});
export const { login,logout } = userSlice.actions;
//gets the user out of the stadium
export const selectUser= (state) => state.user.user;
export default userSlice.reducer;
