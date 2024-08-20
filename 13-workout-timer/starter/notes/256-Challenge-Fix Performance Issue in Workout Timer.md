
The line of code `const partOfDay = time.slice(-2);` is used to extract the last two characters from the string time and assign them to the variable partOfDay

-2 as an Argument:
The -2 tells the slice() method to start the extraction two characters from the end of the string and continue to the end of the string.

For `time = "08:30AM":`

`time.slice(-2)` would extract the last two characters: "AM".

## Performace Issue
```
  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, []);

```

The App component re-renders every single time along with its child component


This is function does not contain any reactive value(Do not need to recreate this function on every render; don't have to put it inside a component)
```
  function formatTime(date) {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  }
```