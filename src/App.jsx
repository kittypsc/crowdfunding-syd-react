import React, { Children } from "react";
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import ReviewBar from "./components/ReviewBar/ReviewBar";
import Nav from './components/Nav/Navbar';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ExplorePage from './pages/ExplorePage';
import NewProject from './pages/NewProject';
import "./App.css";
import LoginPage from "./pages/LoginPage";
import Footer from "./components/Footer/Footer";
import NewUserPage from "./pages/NewUser";

const HeaderLayout = () => {
  return (
    <div>
      <ReviewBar />
      <Nav />
      <Outlet />
      <Footer />
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
      },
      {
        path: '/project-form',
        element: <NewProject />
      },
      {
        path: '/createanaccount',
        element: <NewUserPage/>
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
