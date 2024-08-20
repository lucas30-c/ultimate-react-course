
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