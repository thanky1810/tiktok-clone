import classNames from 'classnames/bind'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestAccounts.module.scss'



const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src='https://i0.wp.com/spellmana.com/wp-content/uploads/2024/07/roronoa-zoro-deck-guide.webp?fit=768%2C429&amp;ssl=1' alt=''>
            </img>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>thanvanky</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Than Van ky</p>
            </div>

        </div>
    );
}

AccountItem.propTypes = {

}

export default AccountItem;