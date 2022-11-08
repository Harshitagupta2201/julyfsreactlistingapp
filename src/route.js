import App from "./App";
import Listing from "./pages/Listing";
import Login from "./pages/Login";


const Routes=[
    {
        path: "/",
    element: <App />,
    children:[
        {
            path: "listing",
            element: <Listing/>,
        },
        {
            path: "login",
            element: <Login/>,
        }

    ]

    },
    ]


    export default Routes;