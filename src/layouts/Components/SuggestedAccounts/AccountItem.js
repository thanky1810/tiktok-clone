import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import styles from './SuggestAccounts.module.scss'
import AccountPreview from './AccountPreview';



const cx = classNames.bind(styles)


function AccountItem({ data }) {


    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        )
    }

    console.log()

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
                        src={data.avatar} alt={data.full_name}>
                    </img>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>{data.nickname}</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}>{data.full_name}</p>
                    </div>

                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {

}

export default AccountItem;