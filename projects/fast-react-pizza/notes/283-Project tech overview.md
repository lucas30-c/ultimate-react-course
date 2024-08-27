
## Key Features
1. User: Global UI state(no accounts, so stay in app)
2. Menu: Global remote state(menu is fetched from API)
3. Cart: Global UI state(no need for API, just stored in app)
4. Order: GLobal remote state(fetched and submitted to API)

State **Domains/Slices** These usually map quite nicely to the app features

Remote state management - React Router: "render as you fetch" instead of "fetch-on-render". Not really state management, as it doesn't persist state.

UI State Management: Redux

## File Structure
a feature-based structure