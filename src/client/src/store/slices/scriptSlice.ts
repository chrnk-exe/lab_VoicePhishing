import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	step: 1,
	result: 0,
	callState: true
};

export const scriptSlice = createSlice({
	name: 'script',
	initialState,
	reducers: {
		incrementResult: (state) => {
			state.result = state.result + 1;
		},
		nextStep: (state) => {
			state.step = state.step + 1;
		},
		setCallState: (state, action: PayloadAction<boolean>) => {
			state.callState = action.payload;
		}
	},
});

export const { incrementResult, nextStep, setCallState } = scriptSlice.actions;
export default scriptSlice.reducer;
