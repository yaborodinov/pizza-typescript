import React, { useRef } from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { SearchContext } from '../../App';

const Search = () => {
    const {searchValue, setSearchValue} = React.useContext(SearchContext);
    const inputRef = useRef();

    const onClearInput = () => {
        inputRef.current.focus();
        setSearchValue('');
    }
    
    return (
        <div className={styles.root}>
            <span className={styles.icon}>
                <FontAwesomeIcon
                    icon={solid("magnifying-glass")}
                />
            </span>
            <input 
                ref={inputRef}
                type="text" 
                placeholder="Search pizza..." 
                value={searchValue} 
                onChange={e => setSearchValue(e.target.value)}
            />
            {searchValue && 
            <FontAwesomeIcon 
                className={`${styles.icon} ${styles.iconx}`} 
                icon={solid("xmark")}
                onClick={onClearInput} 
            />}
        </div>
    )
}

export default Search;
