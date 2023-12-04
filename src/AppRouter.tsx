import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "./App";
import { Page404 } from "./pages/Page404";
import { PageFetch } from "./pages/PageFetch";
import { PageLocalStorage } from "./pages/PageLocalStorage";
import { PageToggle } from "./pages/PageToggle";

export const router = createBrowserRouter([
	{
		path: "/",
		errorElement: <Page404 />,
		element: <App />,
		children: [
			{
				path: "/toggle",
				element: <PageToggle />,
			},
			{
				path: "/fetch",
				element: <PageFetch />,
			},
			{
				path: "/localstorage",
				element: <PageLocalStorage />,
			},
			{
				path: "/",
				element: <Navigate to="/toggle" replace />,
			},
		],
	},
]);