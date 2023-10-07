import { createSlice } from '@reduxjs/toolkit';

const addressInitial = localStorage.getItem('address')
  ? JSON.parse(localStorage.getItem('address'))
  : { latitude: 28.6667, longitude: 77.2167, city: 'Delhi' };
const addressSlice = createSlice({
  name: 'address',
  initialState: { address: addressInitial },
  reducers: {
    addAddress: (state, action) => {
      const loaction = action.payload;

      if (loaction) {
        state.address.latitude = loaction.coord.lat;
        state.address.longitude = loaction.coord.lon;
        state.address.city = loaction.name;
      }
      localStorage.setItem('address', JSON.stringify(state.address));
    },
  },
});

export const { addAddress } = addressSlice.actions;
export default addressSlice.reducer;
