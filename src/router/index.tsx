import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../app/Dashboard";
import { Stats } from "../pages/statistik";
import { Layouts } from "../pages/layouts";
import { Pages } from "../pages/pages";
import { Charts } from "../pages/charts";
import { Tables } from "../pages/tables";

export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                index: true,  // `/` yo‘nalishi uchun
                element: <Stats />
            },
            {
                path: "layouts",
                element: <Layouts />
            },
            {
                path: "pages",
                element: <Pages />
            },
            {
                path: "charts",
                element: <Charts />
            },
            {
                path: "tables",
                element: <Tables />
            }
        ]
    },
    {
        path: "*",
        element: <h2>Page not found</h2>
    }
]);
