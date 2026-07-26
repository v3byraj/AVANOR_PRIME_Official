import { createBrowserRouter, RouterProvider }  from "react-router-dom";
import { Home } from "./Pages/Home";
import { AppLayout } from "./Components/Layout/AppLayout";
import { LatestInnovations } from "./Pages/LatestInnovations";
import Dashboard from "./Pages/Admin/Dashboard";
import CreateArticle from "./Pages/Admin/CreateArticle";
import EditArticle from "./Pages/Admin/EditArticle";
import InnovationDetails from "./Pages/InnovationDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/research",
                element: <LatestInnovations />
            },
            {
                path: "/research/:id",
                element: <InnovationDetails />
            },
            {
                path: "/admin",
                element: <Dashboard />
            },
            {
                path: "/admin/create",
                element: <CreateArticle />
            },
            {
                path: "/admin/edit/:id",
                element: <EditArticle />
            },
        ]
    }
]);

const App = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}

export default App;