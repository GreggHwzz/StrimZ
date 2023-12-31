
import './App.css';
import { createBrowserRouter, RouterProvider, Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import HomePageConnected from "./pages/HomePageConnected"
import Profile from "./pages/Profile"
import About from "./pages/About"
import Contact from "./pages/Contact"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import Terms from "./pages/Terms"
import NavBar from './components/navbar/Navbar';

function App() {
  // initialize a browser router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/profile",
      element: <Profile />,
    },
    
    {
      path: "/homepage",
      element: <HomePageConnected />,
    },

    {
      path: "/about",
      element: <About/>
    },

    {
      path: "/contact",
      element: <Contact/>
    },

    {
      path: "/privacypolicy",
      element: <PrivacyPolicy/>
    },

    {
      path: "/terms",
      element: <Terms/>
    },


  ])

  return (
    <>
    <NavBar/>
    <RouterProvider router={router} />
    </>
  );
}

export default App;