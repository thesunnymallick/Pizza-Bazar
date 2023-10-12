import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
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
        toast.success('Location access successfully.');
      }
      localStorage.setItem('address', JSON.stringify(state.address));
    },
    removeAddress: (state) => {
      state.address.latitude = 28.6667;
      state.address.longitude = 77.2167;
      state.address.city = 'Delhi';
      localStorage.removeItem('address');
    },
  },
});

export const { addAddress, removeAddress } = addressSlice.actions;
export default addressSlice.reducer;
