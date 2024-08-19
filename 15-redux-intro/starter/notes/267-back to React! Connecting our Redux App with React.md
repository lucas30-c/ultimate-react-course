
```
npm i react-redux
```

Key Code
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

** The useSelector hook provided by "react-redux" basically creates a subscription to the store.**
Whenever the store changes, the component that subscribes to that store will re-render.
