import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
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
          path: '/news/:id',
          element: <LeftSideNav></LeftSideNav>,
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
