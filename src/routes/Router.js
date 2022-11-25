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
            element:<Products></Products>,
            loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path:'/addproduct',
            element:<AddProduct></AddProduct>
        },
        {
            path:'/myproduct',
            element:<MyProduct></MyProduct>
        },
    ]
    
},
{
    path:'*',
    element:<ExtraPage></ExtraPage>
}
])