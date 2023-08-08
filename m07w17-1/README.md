# M07W17 - State Management and Immutable Update Patterns

### To Do
- [x] Review state
- [x] Stale state and `prev`
- [x] Demonstrate spread operator
- [x] Update state using the spread operator
- [x] Demonstrate `useReducer`

### React is Lazy
* whenever state or props change, any affected component is re-rendered
* `eqObjects` `eqArrays` {} === {}

* oldState = []
* oldState.push('newValue')
* setState(oldState);

### useReducer
* managing complex state (objects)
* ALL updates to state happen in one function (`reducer`)
* reducer is a function that takes in current state and an object that specifies how to update state

```js
const reducer = (state, action) => {
  action.type

  const copy = {
    ...state,
    hobbies: [
      ...state.hobbies,
      action.newHobby
    ]
  }
  // update state
  return copy; // becomes state
};

const arr = useReducer(reducer, initialState)
const state = arr[0];
const dispatch = arr[1];

dispatch({ type: 'add-a-new-hobby', newHobby: 'lawn bowling' });
```





















