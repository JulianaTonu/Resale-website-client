import { createBrowserRouter } from "react-router-dom";
import Register from "../components/Shared/Register";
import Main from "../layout/Main";
import Home from './../components/HomePage/Home';
import Login from './../components/Shared/Login';
import Products from './../components/Products/Products';
import Blog from './../components/Blog/Blog';
import ExtraPage from "../components/ExtraPage/ExtraPage";
import AddProduct from './../components/Products/AddProduct/AddProduct';
import MyProduct from "../components/Products/MyProduct/MyProduct";
import AllSellers from './../components/AllSellers/AllSellers';
import AllUser from "../components/AllUser/AllUser";
import DashBoard from './../components/DashBoard/DashBoard';
import DashboardLayout from "../layout/DashboardLayout";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import Order from './../components/Products/MyProduct/OrderProduct/Order';
import BuyerRoute from './BuyerRoute';
import ReportProducts from "../components/Products/ReportProduct";
import ReportProduct from "../components/Products/ReportProduct";
import PrivateRoute from './PrivateRoute';
import Payment from "../components/Payment/Payment";
import DisplayError from './../components/Shared/DiaplayError';


export const router = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path:'/categories/:id',
            element:<PrivateRoute><Products></Products></PrivateRoute>,
            loader:({params})=>fetch(`https://resale-website-serverside.vercel.app/category/${params.id}`)
        },
       
        {
            path:'/allusers',
            element:<AllUser></AllUser>
        },

        
       
    ]
    
},
{
    path:'*',
    element:<ExtraPage></ExtraPage>
},
{
path:'/dashboard',
element:<DashboardLayout></DashboardLayout>,
errorElement:<DisplayError></DisplayError>,
children:[
    {
        path:'/dashboard',
        element:<DashBoard></DashBoard>
    },
    {
        path:'/dashboard/sellers',
        element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
    },
    {
        path:'/dashboard/allusers',
        element:<AdminRoute><AllUser></AllUser></AdminRoute>
    },
    
    {
        path:'/dashboard/addproduct',
        element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
    },
    {
        path:'/dashboard/myproduct',
        element:<SellerRoute><MyProduct></MyProduct></SellerRoute>
    },
    {
        path:'/dashboard/myorder',
        element:<BuyerRoute><Order></Order></BuyerRoute>
    },
    {
        path:'/dashboard/report',
        element:<AdminRoute><ReportProduct></ReportProduct></AdminRoute>
    },
    {
        path:'/dashboard/payment/:id',
        element:<Payment></Payment>,
        loader:({params})=>fetch(`https://resale-website-serverside.vercel.app/booking/${params.id}`)
    },
]

}

])