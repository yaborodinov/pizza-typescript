import React, { useRef, useState, useCallback } from 'react';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import debounce from 'lodash/debounce';
import { useDispatch } from 'react-redux';
import { setSearchValue } from '../../redux/slices/filterSlice';

const Search: React.FC = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const onClearInput = () => {
        setInputValue('');
        dispatch(setSearchValue(''))
        inputRef.current?.focus();
    }
    
    const testDebounce = useCallback(
        debounce((value: string) => {
            dispatch(setSearchValue(value))
        }, 500),
            []
    )
    
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                onChange={onChangeInput}
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
