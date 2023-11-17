import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    clear: (state) => {
      state.value = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () =>
        console.log("IncrementAsync Pending")
      )
      .addCase(incrementAsync.fulfilled, (state, action) => {
        console.log("IncrementAsync Fulfilled");
        state.value += action.meta.arg;
      });
    builder
      .addCase(decrementAsync.pending, () =>
        console.log("DecrementAsync Pending")
      )
      .addCase(decrementAsync.fulfilled, (state, action) => {
        console.log("DecrementAsync Fulfilled");
        state.value -= action.meta.arg;
      });
  },
});

export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
      return amount;
    });
  }
);

export const decrementAsync = createAsyncThunk(
  "counter/decrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
      return amount;
    });
  }
);

export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  clear,
} = counterSlice.actions;
export default counterSlice.reducer;
