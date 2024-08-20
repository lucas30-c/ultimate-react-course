
```
npm i react-redux
```

Key Code
index.js
```
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

 Every single component in the application **can now read data from the store, and can dispatch actions to it.** This resembles Context API; It is like broadcasting the global state into every consumer that subscribes to the context.

 In order to read data from the Redux store, **all we have to do is to use the useSelector hook provided by react-redux.**


The useSelector hook takes a callback function, and this function takes a single argument of the entire Redux store, and from that store, we can simply get the data we want.

```
  const customer = useSelector((store) => store.customer.fullName);
```

The store.customer comes from here:
in store.js
```
  const rootReducer = combineReducers({
    account: accountReducer,
    **customer**: customerReducer,
  })
```

(4:57) ** The useSelector hook provided by "react-redux" basically creates a subscription to the store.**
Whenever the store changes, the component that subscribes to that store will re-render. (The state in store changes, the component re-renders)