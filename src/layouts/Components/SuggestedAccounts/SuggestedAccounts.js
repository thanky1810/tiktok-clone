
import PropTypes from 'prop-types'

import classNames from "classnames/bind";
import styles from './SuggestAccounts.module.scss'
import AccountItem from './AccountItem';

const cx = classNames.bind(styles)


function SuggestAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />


            <p className={cx('more-btn')}>See All</p>
        </div>
    );
}


SuggestAccounts.protoTypes = {
    label: PropTypes.node.isRequired,
}

export default SuggestAccounts;