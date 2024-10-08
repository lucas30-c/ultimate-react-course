## Redux

3rd-party libary to manage global state

Standalone library, but easy to **integrate** with React apps using **react-redux library**

All global state is stored in **one globally accessible store**, which is easy to update using "actions"

Global store is updated => All consuming components re-render

Redux conceptually similar to using the Context API + useReducer

2 versions: (1) Classic Redux (2) Modern Redux Toolkit

Recommendation: When you have a lot of global UI states, it is ideal to use Redux.

For remote global state, we have better, more specialised tool:
React Query, SWR, RTK(Redux Toolkit) Query

### Store
(7:56) All global states live in a centralised container; It is the single source of truth of global state in the app.
The store is also the place where one or multiple reducers live.

**Each reducer is a pure function that has a single task to calculate the next state.** based on the action and the current state. Usually one reducer per **app feature**(e.g. shopping cart + user data + theme).

### Action creator function
To automate writing action. Helpful to keep all possible actions in one central place.

### Redux Cycle Goal
To make the state update logic separate from the rest of the application