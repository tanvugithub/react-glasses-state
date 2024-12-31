import { useRoutes } from "react-router-dom";
import { MainLayout } from "../components/layouts/MainLayout";

import { HomePage } from "../pages/Home";
import { PATH } from "../constants";

export const Router = () => {
    return useRoutes([
        {
            path: PATH.home,
            element: <MainLayout />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
            ],
        },
    ]);
};
