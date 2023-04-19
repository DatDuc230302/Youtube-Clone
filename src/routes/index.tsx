import { routePath as path } from './routePath';
import Home from '../pages/home';
import Watch from '../pages/watch';
import MainLayout from '../layouts/mainLayout';
import LayoutHeader from '../layouts/layoutHeader';
import EmptyLayout from '../layouts/emptyLayout';
import Shorts from '../pages/shorts';
import Search from '../pages/search';
import Library from '../pages/library';
import Register from '../pages/register';
import Upload from '../pages/upload';
interface route {
    path: string;
    component: any;
    layout?: any;
}

export const routes: route[] = [
    { path: path.home, component: <Home />, layout: MainLayout },
    { path: path.watch, component: <Watch />, layout: LayoutHeader },
    { path: path.shorts, component: <Shorts />, layout: MainLayout },
    { path: path.search, component: <Search />, layout: MainLayout },
    { path: path.library, component: <Library /> },
    { path: path.register, component: <Register />, layout: MainLayout },
    { path: path.upload, component: <Upload />, layout: EmptyLayout },
];
