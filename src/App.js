import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routes/Router';

function App() {
  return (
    <div className="">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
