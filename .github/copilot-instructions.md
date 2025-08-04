# Copilot Instructions for reduxlecture

## Project Overview
- This is a React application bootstrapped with Create React App, using Redux Toolkit for state management.
- The main entry point is `src/index.js`, which renders the `App` component from `src/App.js`.
- Redux store configuration is located in `src/store/store.js`. Add reducers and middleware here as needed.

## Architecture & Patterns
- **State Management:** Use Redux Toolkit (`@reduxjs/toolkit`). All store logic should be placed in `src/store/store.js`.
- **Component Structure:** Components are currently flat; add new components in `src/` and import them into `App.js` or other parent components.
- **Testing:** Tests use React Testing Library and Jest. Place test files alongside components (e.g., `App.test.js`).
- **Styling:** CSS files are colocated with components (e.g., `App.css`).

## Developer Workflows
- **Start Development Server:**
  ```powershell
  npm start
  ```
- **Run Tests:**
  ```powershell
  npm test
  ```
- **Build for Production:**
  ```powershell
  npm run build
  ```
- **Eject Configuration (irreversible):**
  ```powershell
  npm run eject
  ```

## Conventions & Integration Points
- **Redux Store:** Always use `configureStore` from Redux Toolkit. Add reducers as key-value pairs in the store config.
- **Testing Setup:** Custom Jest matchers are enabled via `src/setupTests.js`.
- **Web Vitals:** Performance metrics are reported via `src/reportWebVitals.js`.
- **Public Assets:** Static files are in `public/`. Reference them using `%PUBLIC_URL%` in HTML.
- **External Dependencies:**
  - React, ReactDOM, Redux Toolkit, React Testing Library, web-vitals, ajv (JSON schema validation).

## Examples
- **Adding a Reducer to the Store:**
  ```js
  import counterReducer from '../features/counter/counterSlice';
  export const store = configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
  ```
- **Writing a Test:**
  ```js
  import { render, screen } from '@testing-library/react';
  import App from './App';
  test('renders learn react link', () => {
    render(<App />);
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
  });
  ```

## Key Files & Directories
- `src/index.js`: App entry point
- `src/App.js`: Main component
- `src/store/store.js`: Redux store configuration
- `src/setupTests.js`: Jest setup
- `public/`: Static assets

---

**If you add new features, update this file to document new patterns or workflows.**
