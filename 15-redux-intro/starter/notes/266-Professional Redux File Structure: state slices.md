## Slice
A slice is a piece or just a part of the total state. The entire state lives in the store, then we can take one slice of that state.

In each slice, we co-locate as much as the Redux logic as possible in one file, so we don't have to jump around between files.

In this example, we create a feature folder, putting our business logic in respective sub-folders.