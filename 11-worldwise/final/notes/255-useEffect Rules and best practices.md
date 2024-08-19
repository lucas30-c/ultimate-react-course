## Dependency Array Rules
1. Every state variable, prop and context value used inside the effect MUST be included in the dependency array
2. All "react values" must be included! That means any function or variable that reference any other value
3. You should never use objects or arrays as dependencies. {} !== {}

These rules also apply to useCallback and useMemo

## What are "reactive values"?
In React, "reactive values" refer to any values that can change over time and that your component might react to. These include:

State Variables: Variables defined using useState (e.g., const [count, setCount] = useState(0);). If count is used inside an effect, it must be included in the dependency array.

Props: Properties passed down from a parent component (e.g., props.userId). If userId is used inside an effect, it should be included in the dependency array.

Context Values: Values provided by React's Context API (e.g., const theme = useContext(ThemeContext);). If theme is used in the effect, it should be included in the dependency array.

Derived or Computed Values: Any values computed based on state, props, or context, or any functions that use these values. For example:

const doubled = count * 2; — If doubled is used in the effect, count should be in the dependency array.
const isEven = () => count % 2 === 0; — If isEven() is used in the effect, count should be in the dependency array.

**Functions:** Functions that are defined inside the component and use state, props, or context. For example:

const increment = () => setCount(count + 1); — If increment is used inside an effect, count should be included as a dependency.
Functions in React are closures, meaning they "capture" the variables from their surrounding scope. If these variables change, but the function is not re-created (by being re-rendered), your effect might not behave as expected. Hence, you need to include the function in the dependency array, or the state and props that the function depends on.


Example
```
function MyComponent({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`/api/user/${userId}`);
      const data = await response.json();
      setUser(data);
    }

    fetchUser();
  }, [userId]); // `userId` is a reactive value and must be in the dependency array

  return <div>{user?.name}</div>;
}
```


**If a function is inside an effect, it is no longer the dependency of the effect. **