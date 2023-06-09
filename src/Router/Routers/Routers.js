import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blogs from "../../Pages/Blogs/Blogs";
import Error from "../../Pages/Error/Error";
import About from "../../Pages/Home/About/About";
import Contact from "../../Pages/Home/Contact";
import Feature from "../../Pages/Home/Feature";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import Register from "../../Pages/Register/Register";
import Reviews from "../../Pages/Reviews/Reviews";
import Services from "../../Pages/Services/Services";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/*",
        element: <Error></Error>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews/:id",
        element: <Reviews></Reviews>,
        loader: ({ params }) =>
          fetch(
            `https://swipy-server-anas-mahmud.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://swipy-server-anas-mahmud.vercel.app/myReview/${params.id}`
          ),
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/features",
        element: <Feature />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
