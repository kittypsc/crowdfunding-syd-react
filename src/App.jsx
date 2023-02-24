import React, { Children } from "react";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import ReviewBar from "./components/ReviewBar/ReviewBar";
import Nav from './components/Nav/Navbar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ExplorePage from './pages/ExplorePage';
import "./App.css";
import LoginPage from "./pages/LoginPage";

const HeaderLayout = () => {
  return (
    <div>
      <ReviewBar />
      <Nav />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/explore',
        element: <ExplorePage />
      },
      {
        path: '/project/:id',
        element: <ProjectPage />
      },
      {
        path: '/login',
        element: <LoginPage />
      }

    ],
  },
]);

function App() {


  return (
    <RouterProvider router={router}></RouterProvider>
    
  )
}

export default App
