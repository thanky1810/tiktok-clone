import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './SuggestAccounts.module.scss'
import AccountPreview from './AccountPreview';



const cx = classNames.bind(styles)

const renderPreview = (props) => {
    return (
        <div tabIndex='-1' {...props}>
            <PopperWrapper>
                <AccountPreview />
            </PopperWrapper>
        </div>
    )
}
function AccountItem() {
    return (
        <div>
            <Tippy
                interactive
                delay={[1000, 0]}
                offset={[-20, 0]}
                render={renderPreview}
                placement='bottom'
            >
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
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {

}

export default AccountItem;