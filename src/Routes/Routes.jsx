import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Home/Home";
import AddProduct from "../AddProduct/AddProduct";
import Login from './../Login/Login';
import SignUp from "../SignUp/SignUp";
import Cart from "../Cart/Cart";
import Cars from "../Categories/Cars";


const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('data.json')
            },
            {
                path:'addproduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'cars/:brandName',
                element:<Cars></Cars>,
                loader:({params})=>fetch(`http://localhost:5000/cars/${params.brandName}`)
            },
            {
                path:'cart',
                element:<Cart></Cart>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signup',
                element:<SignUp></SignUp>
            }         
        ]
    }
]);


export default router;
