// import { BrowserRouter, Routes, Route, NavLink, Navigate, Router, switch, Switch } from 'react-router-dom';
import {
  Route, NavLink, Routes, BrowserRouter, Navigate
} from 'react-router-dom';
import logo from '../logo.svg'
import { routes } from './routes';
// import {Suspense} from 'react';
import { Suspense } from 'react';


export const Navigation = () => {
  return (
    <Suspense fallback={null}>
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="react logo"/>
            <ul>
              {
                routes.map(route => 
                <li key={route.to}>
                  <NavLink to={route.to} className={({isActive}) => isActive ? 'nav-active' : '' }>
                    {route.name}
                  </NavLink>
                </li>)
              }
            </ul>
            </nav>
            <Routes>
              {routes.map(route => <Route key={route.to} path={route.path} element={<route.Component/>}/>)}
              <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
            </Routes>
        </div>
    </BrowserRouter>
    </Suspense>
  )
}
