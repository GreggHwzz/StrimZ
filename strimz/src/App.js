
import NavBar from './components/Navbar';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import HomePage from "./pages/HomePage"
import HomePageConnected from "./pages/HomePageConnected"
import Profile from "./pages/Profile"

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
    }
  ])

  return (
    <>
    <NavBar/>
    <RouterProvider router={router} />
    </>
  )
}

export default App