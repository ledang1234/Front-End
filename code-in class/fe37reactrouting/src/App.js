import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./page/home/Home"
import About from "./page/home/About"
import ListMovie from './page/home/ListMovie';
import Navbar from "./components/Navbar"
import PageNotFound from './page/PageNotFound';
import { routesHome } from "./routes"

function App() {

  const showMenuHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return <Route
          key={index}
          exact={item.exact}
          path={item.path}
          component={item.component}
        />
      })
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
         {/* Trang chu - localhost:3000   */}
        {/* <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} /> */}
        {/* Trang chu - localhost:3000/about */}
       {/* <Route path="/about" component={About} /> */}
        {/* Trang chu - localhost:3000/list- movie */}
        {/* <Route path="/list-movie" component={ListMovie} />  */}

        {/* Trang ko co */}
        <Route path="" component={PageNotFound} />

      </div>
    </BrowserRouter>
  );
}
export default App;
