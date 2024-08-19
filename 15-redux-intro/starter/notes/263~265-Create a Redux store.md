
```
  npm i redux
```

265 Adding more state - Key code
```
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);
```