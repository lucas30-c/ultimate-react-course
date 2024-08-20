
```
  useEffect(() => {
    document.title = `Your ${number}-exercise workout`;
  }, [])

```

A closure has been created here at the first render, and it closes over the props and the state in the case of React.
In React, we can also call this current props/ current state a snapshot.
**So, any function that was created at the initial render and then not recreated, still has access to that initial snapshot of state and props.**

This is a stale closure here. It is an outdated closure because the function has captured the values from a time where the number was still something else.

Corrected code:
```
  useEffect(() => {
    document.title = `Your ${number}-exercise workout`;
  }, [number, duration, sets]);

```