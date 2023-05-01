import React, { useRef, useState } from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import debounce from 'lodash/debounce';
import { SearchContext } from '../../App';

const Search = () => {
    const [inputValue, setInputValue] = useState('');
    const { setSearchValue } = React.useContext(SearchContext);
    const inputRef = useRef();

    const onClearInput = () => {
        inputRef.current.focus();
        setInputValue('');
        setSearchValue('');
    }
    
    const testDebounce = React.useCallback(
        debounce((value) => {
        setSearchValue(value)
    }, 500),
        []
    )
    
    const onSlowChange = (e) => {
        setInputValue(e.target.value);
        testDebounce(e.target.value);
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
                value={inputValue} 
                onChange={onSlowChange}
            />
            {inputValue && 
            <FontAwesomeIcon 
                className={`${styles.icon} ${styles.iconx}`} 
                icon={solid("xmark")}
                onClick={onClearInput} 
            />}
        </div>
    )
}

export default Search;
