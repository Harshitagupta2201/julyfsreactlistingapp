import App from "./App";
import Listing from "./pages/Listing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const Routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "listing",
        element: <Listing />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
];

export default Routes;
