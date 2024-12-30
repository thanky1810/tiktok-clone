import { useEffect, useState, } from 'react';
import PropTypes from 'prop-types'

import * as searchServices from '~/services/searchServices';
import classNames from "classnames/bind";
import styles from './SuggestAccounts.module.scss'
import AccountItem from './AccountItem';



const cx = classNames.bind(styles)


function SuggestAccounts({ label }) {
    const [searchResult, setSearchResult] = useState([]);
    const searchValue = 'h';



    useEffect(() => {

        const fetchApi = async () => {

            const result = await searchServices.search(searchValue);

            setSearchResult(result)

            console.log(result)
        }

        fetchApi();
    }, [searchValue]);




    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
            ))}
            <p className={cx('more-btn')}>See All</p>
        </div>
    );
}


SuggestAccounts.protoTypes = {
    label: PropTypes.node.isRequired,
}

export default SuggestAccounts;