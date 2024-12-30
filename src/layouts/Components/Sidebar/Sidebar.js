
import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'

import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon } from "~/components/Icons";
import Menu, { MenuItem } from './Menu'
import config from "~/config";
import SuggestAccounts from "../SuggestedAccounts";
const cx = classNames.bind(styles)


function Sidebar() {
    
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon />} />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />    
            </Menu>

            <SuggestAccounts label='Suggested Accounts' />
            <SuggestAccounts label='Following Accounts' />
        </aside>
    );
}

export default Sidebar;