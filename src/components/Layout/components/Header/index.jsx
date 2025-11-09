import clsx from 'clsx'
import styles from './Header.module.scss'
import { useEffect, useState } from 'react'
import Tippy from '@tippyjs/react/headless'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'

import images from '@/assets/images'
import { Wrapper as PopperWrapper } from '@/components/Popper'
import AccountItem from '@/components/AccountItem'



function Header() {
    const [searchResult, setSearchResult] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0)
    }, [])

    return (
        <header className={clsx(styles.wrapper)}>
            <div className={clsx(styles.inner)}>
                <div className={clsx(styles.logo)}>
                    <img src={images.logo} alt="TikTok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    appendTo={(ref) => ref.parentNode}
                    render={(attrs) => (
                            <div
                                className={clsx(styles.searchResult)}
                                tabIndex="-1"
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <h4 className={clsx(styles.searchTitle)}>
                                        Accounts
                                    </h4>
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                    <AccountItem />
                                </PopperWrapper>
                            </div>
                    )}
                >
                    <div>
                        <div className={clsx(styles.search)}>
                            <input
                                type="text"
                                placeholder="Search accounts and videos"
                            />
                            <button className={clsx(styles.clear)}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon
                                className={clsx(styles.loading)}
                                icon={faSpinner}
                            />
                            <button className={clsx(styles.searchBtn)}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>
                </Tippy>
                <div className={clsx(styles.actions)}></div>
            </div>
        </header>
    )
}

export default Header
