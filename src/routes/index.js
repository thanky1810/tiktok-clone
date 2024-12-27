


import routesConfig from '~/config/routes'
//HeaderOnly
import { HeaderOnly } from '~/Components/Layout'


//Pages
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
// for features needn't login still use it
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
    { path: routesConfig.profile, component: Profile }
];




// for features have to login still use it
const privateRoutes = [];

export { publicRoutes, privateRoutes }