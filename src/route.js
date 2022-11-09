import App from "./App";
import About from "./pages/About";
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
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default Routes;
