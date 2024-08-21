
npm i @reduxjs/toolkit

```
const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});
```

prepare Function:
The prepare function is used to preprocess the action's payload before it reaches the reducer. It allows you to shape the payload or add meta and error fields to the action. The prepare function returns an object that must contain a payload field and can optionally include meta and error fields.

```
requestLoan: {
  prepare(amount, purpose) {
    return {
      payload: { amount, purpose },
    };
  },

  reducer(state, action) {
    if (state.loan > 0) return;

    state.loan = action.payload.amount;
    state.loanPurpose = action.payload.purpose;
    state.balance = state.balance + action.payload.amount;
  },
},
```

You're right that the `prepare` function in your example doesn't seem to add any additional functionality beyond what's already possible by directly passing the payload when dispatching the action. In this specific case, the `prepare` function is **somewhat redundant** because it simply formats the `amount` and `purpose` into a payload, which you could do directly when dispatching the action.

### When Is `prepare` Useful?

The `prepare` function becomes useful in scenarios where:

1. **Complex Payload Construction**: You need to preprocess or transform the input arguments into a specific structure before the action is dispatched. For example, if you need to add timestamps, generate unique IDs, or normalize data.

2. **Adding Meta or Error Properties**: If you need to include additional properties like `meta` or `error` in the action, `prepare` allows you to do that. For example:
   ```javascript
   prepare(amount, purpose) {
     const id = generateUniqueId();
     return {
       payload: { id, amount, purpose },
       meta: { timestamp: Date.now() },
     };
   },
   ```

3. **Validation or Default Values**: If you want to validate inputs or set default values before the action is processed by the reducer.

### Example of When `prepare` Is Beneficial:

Let's consider an example where `prepare` is actually useful:

```javascript
requestLoan: {
  prepare(amount, purpose) {
    // Adding a unique ID and timestamp to the payload
    const id = Math.random().toString(36).substr(2, 9);
    const timestamp = Date.now();

    return {
      payload: { id, amount, purpose },
      meta: { timestamp },
    };
  },

  reducer(state, action) {
    if (state.loan > 0) return;

    state.loan = action.payload.amount;
    state.loanPurpose = action.payload.purpose;
    state.balance += action.payload.amount;
    // We could also use the meta information if needed
  },
},
```

In this example:
- **Unique ID**: Each loan request is assigned a unique ID.
- **Timestamp**: The time when the loan request was created is recorded in `meta`.
- **Usage**: This is more than just passing the original inputs and demonstrates why `prepare` can be beneficial.

### In Your Case:

If you're only passing `amount` and `purpose` as-is, you don't need the `prepare` function. You could simply handle the action directly like this:

```javascript
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    requestLoan(state, action) {
      if (state.loan > 0) return;

      state.loan = action.payload.amount;
      state.loanPurpose = action.payload.purpose;
      state.balance += action.payload.amount;
    },
    // other reducers...
  },
});

export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount, purpose },
  };
}
```

reducer is the function that actually updates the state when an action is dispatched.

P275 1:04
The createSlice function gives us 3 benefits:
1. It automatically creates action creator from reducers
2. It makes writing these reducers a lot easier, because we no longer needs the switch statement and the default case is automatically handled.
3. **We can actually mutate our state inside the reducers**. This behind scene uses the immer library, converting our logic back to immutable logic.

```
const accountSlice = createSlice({
  name: "account", // The name of the slice
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload; // mutating logic
      state.isLoading = false;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },

      reducer(state, action) {
        // in the new reducer, we no longer need to return the entire state. We can directly mutate the state object, modifying only the properties we need to change.
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});
```

console.log(accountSlice.reducer)
```
ƒ (state, action) {
    return createNextState(
        state || initialState,
        function (draft) {
            switch (action.type) {
                case 'account/deposit': {
                    draft.balance += action.payload;
                    draft.isLoading = false;
                    break;
                }
                case 'account/withdraw': {
                    draft.balance -= action.payload;
                    break;
                }
                case 'account/requestLoan': {
                    if (draft.loan > 0) return;
                    draft.loan = action.payload.amount;
                    draft.loanPurpose = action.payload.purpose;
                    draft.balance += action.payload.amount;
                    break;
                }
                case 'account/payLoan': {
                    draft.balance -= draft.loan;
                    draft.loan = 0;
                    draft.loanPurpose = '';
                    break;
                }
                case 'account/convertingCurrency': {
                    draft.isLoading = true;
                    break;
                }
                default:
                    break;
            }
        }
    );
}


```