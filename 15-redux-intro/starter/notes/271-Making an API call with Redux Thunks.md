
In order to use the middleware Thunks, we need to follow 3 steps:
1. Install the middleware package
2. Apply the middleware to our store
3. Use the middleware in the action creator functions

1.
```
npm i redux-thunk
```

store.js
```
import thunk from 'redux-thunk'
```

key code
```
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };

```