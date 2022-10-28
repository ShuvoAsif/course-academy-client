import { FaQq } from 'react-icons/fa';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import CourseCard from './components/CourseCard/CourseCard';
import CourseSummaryCard from './components/CourseSummaryCard/CourseSummaryCard';
import Home from './components/Home/Home';
import LeftSideNav from './components/LeftSideNav/LeftSideNav';
import Main from './layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('http://localhost:5000/course'),
          element: <Home></Home>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/course/:_id',
          element: <CourseSummaryCard></CourseSummaryCard>,
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params._id}`)
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
