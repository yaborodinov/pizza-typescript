import React from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const Search = ({searchValue, onSearchValueChange}) => {
    
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
                onChange={e => onSearchValueChange(e.target.value)}
            />
            {searchValue && 
            <FontAwesomeIcon 
                className={`${styles.icon} ${styles.iconx}`} 
                icon={solid("xmark")}
                onClick={() => onSearchValueChange('')} 
            />}
        </div>
    )
}

export default Search;
