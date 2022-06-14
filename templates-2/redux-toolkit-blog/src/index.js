import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { fetchUsers } from "./features/users/usersSlice";
import { fetchPosts } from "./features/posts/postsSlice";

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
