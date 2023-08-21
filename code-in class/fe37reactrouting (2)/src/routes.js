import Home from "./pages/home/Home";
import About from "./pages/home/About";
import ListMovie from "./pages/home/ListMovie";
import DetailMovie from "./pages/home/DetailMovie";
import HOC from "./HOC";
import Dashboard from "./pages/admin/Dashboard";
import AddUser from "./pages/admin/AddUser"

const routesHome = [
  {
    path: "/",
    exact: true,
    component: Home
  },
  {
    path: "/home",
    exact: false,
    component: Home
  },
  {
    path: "/about",
    exact: false,
    component: About
  },
  {
    path: "/list-movie",
    exact: false,
    component: ListMovie
  },
  {
    path: "/detail-movie/:id",
    exact: false,
    component: DetailMovie
  },
  {
    path: "/hoc",
    exact: false,
    component: HOC
  }
];

const routesAdmin = [
  {
    path: "./admin/dashboard",
    exact: false,
    component: Dashboard
  },
  {
    path: "./admin/adduser",
    exact: false,
    component: AddUser
  }
];

export { routesHome, routesAdmin };
