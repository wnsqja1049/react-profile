import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const asyncUpFetch = createAsyncThunk(
	'counterSlice/asyncUpFetch',
	async () => {
		const res = await fetch('api')
		const data = res.data.json();
		return data;
	}
)

const counterSlice = createSlice({
	name: 'counter',
	initialState: { 
		value: 0,
		status:'Welcome'
	},
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
		incrementByAmount(state, action) {
			state.value += action.payload;
		}
	},
	extraReducers: (builder) => {
		builder.addCase(asyncUpFetch.pending, (state, action) => {
			state.status = 'Loading';
		})
		builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
			state.status = 'Complete';
		})
		builder.addCase(asyncUpFetch.rejected, (state, action) => {
			state.status = 'Failed';
		})
	}
});


export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;