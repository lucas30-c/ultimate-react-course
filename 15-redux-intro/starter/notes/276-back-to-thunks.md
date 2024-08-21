
In order to create thunks in the Redux toolkit, we can use the createAsyncThunk

Easy way out, we can simply use the **action creator function**.

```
export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount }; // Redux can figure out this is the action creator of that reducer. sliceName/reducerName convention

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };
}

```