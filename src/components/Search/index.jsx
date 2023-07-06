import React, { useRef, useState } from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import debounce from 'lodash/debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    const onClearInput = () => {
        setInputValue('');
        dispatch(setSearchValue(''))
        inputRef.current.focus();
    }
    
    const testDebounce = React.useCallback(
        debounce((value) => {
        dispatch(setSearchValue(value))
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
