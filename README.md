🎯 React Redux Toolkit Counter App
A clean, minimal, and highly educational project demonstrating how to use Redux Toolkit with React functional components using hooks like useSelector and useDispatch.

This project was built as part of my Redux learning journey, and I hope it helps you understand the core concepts and structure of modern Redux + React development.

📝 Table of Contents
Overview

Technologies Used

Project Structure

How Redux Works Here

Installation & Running

Redux Flow in This App

What You Can Learn

Suggestions to Extend

License

✅ Overview
This app demonstrates:

Setting up a Redux store using configureStore()

Creating a Redux slice using createSlice()

Connecting the Redux store to React using <Provider>

Using useSelector() to read global state

Using useDispatch() to modify global state

Understanding immutable updates made easy by Redux Toolkit with Immer

The app is a simple counter with Up and Down buttons.

🛠️ Technologies Used
React 18+

Redux Toolkit

React Redux

JavaScript (ES6+)

Vite / CRA (optional)

📂 Project Structure
redux-lecture/
├── src/
│ ├── component/
│ │ └── Counter/
│ │ ├── index.js → Counter component (UI + logic)
│ │ └── Counter.css → Counter styling
│ ├── slices/
│ │ └── counterSlice.js → Redux Toolkit slice
│ ├── store/
│ │ └── store.js → Redux store setup
│ ├── App.js → Root component
│ ├── index.js → Entry point with Provider wrapper
│ ├── index.css → Global styles
│ └── App.css (optional)
├── public/
├── package.json
└── README.md

⚙️ How Redux Works Here
Step 1: Create Redux Slice
src/slices/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.count += 1; },
        decrement: (state) => { state.count -= 1; }
    }
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;

This defines your state, actions, and reducers in one file!

Step 2: Setup Redux Store
src/store/store.js

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;

This adds your slice to the global Redux store.

Step 3: Provide Store to React App
src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

Now all components can access the global Redux state.

Step 4: Connect Redux State & Actions to Component
src/component/Counter/index.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../slices/counterSlice';
import './Counter.css';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className="counter-container">
            <h1>React Redux</h1>
            <h2>{count}</h2>
            <div className="button-group">
                <button onClick={() => dispatch(increment())}>Up</button>
                <button onClick={() => dispatch(decrement())}>Down</button>
            </div>
        </div>
    );
};

export default Counter;

👉 useSelector to read state

👉 useDispatch to call actions

Step 5: Add Styling (optional)
src/component/Counter/Counter.css

.counter-container {
    text-align: center;
    margin-top: 100px;
}

.button-group button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

🚀 Installation & Running
1️⃣ Clone the repo

git clone https://github.com/your-username/redux-lecture.git
cd redux-lecture

2️⃣ Install dependencies

npm install

3️⃣ Run the app

npm start

4️⃣ Visit
Open your browser to http://localhost:3000 to see the application.

🎯 Redux Flow in This App
graph TD
    A[User clicks a button] --> B(useDispatch sends an action);
    B --> C(counterSlice reducer updates state);
    C --> D(useSelector gets new state);
    D --> E(React component re-renders);

This is the entire magic of Redux Toolkit + React Hooks!

🎓 What You Can Learn
Why createSlice() simplifies Redux boilerplate.

How Redux uses Immer for safe immutable state updates.

Best practice folder structure for scalable Redux apps.

How Redux integrates with functional React components.

💡 Suggestions to Extend
You can expand this project further:

Add more slices (e.g., todo list, theme toggler).

Add middleware (e.g., Redux Logger).

Try createAsyncThunk() for API calls.

Use TypeScript for extra type safety.

🙏 License
This project is free and open source under the MIT License.

📸 Screenshots
You can add screenshots of your project running here!
(Example: counter page with buttons)

🔗 Helpful Links
Redux Toolkit Docs

React Redux Docs

Immer (for understanding immutable updates)