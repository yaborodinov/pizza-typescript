import React from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { SearchContext } from '../../App';

const Search = () => {
    const {searchValue, setSearchValue} = React.useContext(SearchContext);
    
    return (
        <div className={styles.root}>
            <span className={styles.icon}>
                <FontAwesomeIcon
                    icon={solid("magnifying-glass")}
                />
            </span>
            <input 
                type="text" 
                placeholder="Search pizza..." 
                value={searchValue} 
                onChange={e => setSearchValue(e.target.value)}
            />
            {searchValue && 
            <FontAwesomeIcon 
                className={`${styles.icon} ${styles.iconx}`} 
                icon={solid("xmark")}
                onClick={() => setSearchValue('')} 
            />}
        </div>
    )
}

export default Search;
