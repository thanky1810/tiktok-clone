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
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null }
]


// for features have to login still use it
const privateRoutes = [

]

export { privateRoutes, publicRoutes }