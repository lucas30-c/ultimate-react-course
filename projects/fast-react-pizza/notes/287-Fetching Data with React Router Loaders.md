
React Router's new data loading feature: Loaders

When somewhere in our code, we create a function that fetches some data from an API;
**We then provide that loader function to one of our routes,
and that route will fetch that data**:

```
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },

```

Then, once the data has arrived, it will be provided to the page component itself using a custom hook.

Steps:
1. Create a loader
   (To get both the page and the data in one place)
    In App.jsx
    ```
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },

      import Menu, { loader as menuLoader } from "./features/menu/Menu";

    ```

2. Provide the loader
  In Menu.jsx

```  export async function loader() {
  const menu = await getMenu();
  return menu;
}```


3. We provide the data to the page
    ```
    function Menu() {
    const menu = useLoaderData();
    console.log(menu);

    return (
      <h1>
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </h1>
    );
    }

  ```


## Render as you fetch strategy
React router will actually start fetching the data at the same time as it starts rendering the correct route.

Compare to useEffect: fetch on render approach, basically, we render the component first, then after the component was already rendered is when we then start to fetch the data.

**Fetch on render may cause waterfalls.**


What Does the useLoaderData Hook Do?
The useLoaderData hook in React Router is used to access data that has been preloaded by a loader function associated with a specific route. When you use useLoaderData, it gives you access to the data that was fetched or prepared by the loader function before the component rendered.

How It Works Together:
Route Configuration: When you configure the route for Menu, you will link the loader function to it. This tells React Router to call loader before rendering the Menu component.

Data Preloading: When the user navigates to the route associated with Menu, the loader function is executed. It fetches the menu data (e.g., a list of pizzas) and returns it.

Rendering with Preloaded Data: Once the loader function completes, the data it returned is automatically available to the Menu component via useLoaderData. This means the Menu component doesn't need to manage the data fetching itself; it can directly use the data for rendering.