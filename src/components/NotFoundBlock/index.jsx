import React from 'react'

import styles from './NotFoundBlock.module.scss'

console.log(styles);
const NotFoundBlock = () => {

    return (
        <div className={styles.root}>
            <span>🙁</span>
            <br />
            <h2>Nothing found</h2>
            <p></p>
        </div>
    )
}

export default NotFoundBlock;
