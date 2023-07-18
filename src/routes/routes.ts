import { LazyExoticComponent, lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import (/* webpackChunkName: "LazyPage1" */'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import (/* webpackChunkName: "LazyPage2" */'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import (/* webpackChunkName: "LazyPage3" */'../01-lazyload/pages/LazyPage3'));
const shop = lazy(() => import (/* webpackChunkName: "shoppinpage" */'../02-component-patterns/pages/ShoppingPage'));

export const routes: Route[] = [
    {
        to: '/Lazy1',
        path: 'Lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'lazy-2'
    },{
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'lazy-3'
    },{
        to: '/shop',
        path: 'shop',
        Component: shop,
        name: 'shop'
    },
]