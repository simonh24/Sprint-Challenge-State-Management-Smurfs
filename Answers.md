1. What problem does the context API help solve?

Context API allows us to easily access the state that is used across many components without needing to go through every parent/child component. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions allow us to manage the state/store and are dispatched to our reducer.
Reducers carry out the action via the type and payload provided. This is where the store is actually updated.
The store sets the state. It's known as the "single source of truth" because the only way to alter the UI is to change the store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

The application state is global, and the component state is local to the component. Component state should be used when it is only needed within one component and is not passed through other components. The application should be used when it is used across the whole application.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that allows us to allow the program to be asynchronous through changing the `action-creators`. For example we can dispatch and action inside a `.then`.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

My favorite state management system at the moment has to be Redux. It allows for easier accessibilty to the application state management, which can get confusing with a larger application.