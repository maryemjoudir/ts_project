import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

interface IncDecInitialStateType {
  currentNumber: number;
  loading: boolean;
  apiNumber: number | null;
  errorStatus: number | null;
}

const initialState: IncDecInitialStateType = {
  currentNumber: 0,
  loading: false,
  apiNumber: null,
  errorStatus: null,
};
//pour les actions asynchrone
const getRandomNumber = createAsyncThunk(
  "incDecSlice/getRandomNumber",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(
        "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1"
      );
      const data = await response.data;
      return thunkApi.fulfillWithValue(data[0]);
    } catch (error) {
      const err = error as AxiosError;
      return thunkApi.rejectWithValue(err.response?.status);
    }
  }
);

const IncDecSlice = createSlice({
  name: "incDecSlice",
  initialState,
  reducers: {
    //reducer prendre l'etat actuel et l'action qui peut contenir un payload(une donnée supplémentaire envoyée avec une action) et renvoie le nouvel état en fonction de l'action.
    //actions
    incrementNumber: (state) => {
      state.currentNumber += 1;
    },
    decrementNumber: (state) => {
      state.currentNumber -= 1;
    },
    incrementUserValue: (state, action) => {
      state.currentNumber += action.payload;
    },
    decrementUserValue: (state, action) => {
      state.currentNumber -= action.payload;
    },
    resetValue: (state) => {
      state.currentNumber = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRandomNumber.pending, (state) => {
      //pending (gère l'état de chargement de l'asyncThunk)
      state.loading = true;
    });
    builder.addCase(getRandomNumber.fulfilled, (state, action) => {
      //fulfilled (état de réussite de la gestion)
      state.apiNumber = action.payload;
    });
    builder.addCase(getRandomNumber.rejected, (state, action) => {
      //rejected (gère l'état d'échec)
      state.errorStatus = action.payload as number;
    });
    builder.addMatcher(
      isAnyOf(getRandomNumber.fulfilled, getRandomNumber.rejected),
      (state) => {
        state.loading = false;
      }
    );
  },
});

const IncDecThunks = {
  getRandomNumber,
};

export const IncDecServices = {
  ...IncDecThunks,
  actions: IncDecSlice.actions,
};

const IncDecReducer = IncDecSlice.reducer;
export default IncDecReducer;
