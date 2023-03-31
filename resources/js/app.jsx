import './bootstrap.js'
import ReactDOM from 'react-dom/client';		
import Main from './Main';
import PostByCategory from './Pages/PostByCategory.jsx';
import PostByAuthor from './Pages/PostByAuthor.jsx';
import SinglePost from './Pages/SinglePost.jsx';
import { Provider } from 'react-redux'
import store from './store'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
        path: "/home",
        element: <Main />,
    },
    {
        path: "/category/:slug",
        element: <PostByCategory />,
    },
    {
        path: "/post/:slug",
        element: <SinglePost />,
    },
    {
        path: "/user/:slug",
        element: <PostByAuthor />,
    },
]);

ReactDOM.createRoot(document.getElementById('app')).render(		
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);