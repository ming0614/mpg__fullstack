import React from 'react';
import { renderRoutes } from 'react-router-config';
import {NavLink} from 'react-router-dom';
function Home(props) {
    //路由有点难,react-router-routes
    //嵌套路由 /rank/123
    const { route } = props;
    console.log(route)
    return (
        <div>Home
            <NavLink to="/recommend">Recommend</NavLink>
            <NavLink to="/singers">Singers</NavLink>
            <NavLink to="/bank">Bank</NavLink>
            {renderRoutes(route.routes)}
        </div>
    )
}
export default Home;
