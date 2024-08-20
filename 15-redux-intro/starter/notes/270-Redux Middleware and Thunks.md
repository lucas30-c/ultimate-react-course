
Where to make async API call(or any other async operation) in Redux?

Middleware is a function that sits bewteen dispatching the action and the store. It allows us to run code after dispatching, but before reaching the reducer in the store.

Middlewate is the go-to place for asyncronous actions.

**Thunk**
With the Thunk middleware in place, the action will no longer be immediately be dispatched, but will first go to the middleware.

We use the Thunk to defer dispatching.