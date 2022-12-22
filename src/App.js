import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import CheckOut from './components/CheckOut/CheckOut';
import CourseSummaryCard from './components/CourseSummaryCard/CourseSummaryCard';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Registration from './components/Registration/Registration';
import DisplayError from './DisplayError/DisplayError';
import Main from './layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <DisplayError></DisplayError>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://course-server-two.vercel.app/course'),
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/checkout',
          element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Registration></Registration>
        },
        {
          path: '/course/:_id',
          element: <CourseSummaryCard></CourseSummaryCard>,
          loader: ({ params }) => fetch(`https://course-server-two.vercel.app/course/${params._id}`)
        },
      ]

    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} ></RouterProvider>
    </div>
  );
}

export default App;
