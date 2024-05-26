# What is Redux?
- state management library for JavaScript applications, commonly used with React. It helps manage and centralize application state, making it easier to developer, tes, and maintain complex applications. The core concepts of Redux is include:

- 1. **store**: a single, immutable state tree that holds the entire state of the application.
- 2. **actions**: plain JS objects that describe changes in the state. Actions must have a "type" property that indicates the type of actions being performed.
- 3. **reducers**: Pure functions that take the current state and actions as arguments and return a new state. Reducers specify how the state changes in response to an action.
- 4. **Dispatch**: a function used to send actions to the store.
- 5. **Selectors**: Functions to extract and compute specific pieces of state from the store.

# Redux Toolkit:
-  is the official, recommended way to write Redux logic. it provides a set of tools that simplify the development of Redux applications. key features of Redux Toolkit include:

- 1. **configureStore**: simplifies store setup and includes good defaults for development.
- 2. **createSlice**: combines action creators and reducers into a single function.
- 3. **createAsyncThunk**: simplifies handling of async logic.
- 4. **RTK Query**: A powerful data fetching and caching tool.  