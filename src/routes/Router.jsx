import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import Main from "../components/Main.jsx";
import FestivalList from "../components/festivals/FestivalList.jsx";
import FestivalShow from "../components/festivals/FestivalShow.jsx";
import StayList from "../components/stays/StayList.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/festivals',
        element: <FestivalList />
      },
      {
        path: '/festivals/:id', // /:segment 파라미터(변동되는 값)/:2개도 가능
        element: <FestivalShow />
      },
      {
        path: '/stays',
        element: <StayList />
      }
    ]
  }
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router;