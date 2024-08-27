

In order to display a loading indicator, we need to know whether this data is actually being loaded right now. Currently, there is no like the loading indicator to be seen.

Therefore, we need to get that info into our application.
And in React Router, we can access this by using the **useNavigation** hook. With this we are able to see whether the app is idle, loading or submitting.