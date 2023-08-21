import Home from "./page/home/Home"
import About from "./page/home/About"
import ListMovie from "./page/home/ListMovie"


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
        path: "/home",
        exact: false,
        component: ListMovie
    },
]

export {routesHome}