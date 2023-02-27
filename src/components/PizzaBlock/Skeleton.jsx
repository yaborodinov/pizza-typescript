import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
    <ContentLoader 
        className="pizza-block"
        speed={2}
        width={280}
        height={466}
        viewBox="0 0 280 466"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="140" cy="125" r="125" /> 
        <rect x="20" y="266" rx="10" ry="10" width="220" height="20" /> 
        <rect x="13" y="411" rx="10" ry="10" width="90" height="27" /> 
        <rect x="161" y="399" rx="25" ry="25" width="110" height="45" /> 
        <rect x="10" y="305" rx="10" ry="10" width="260" height="60" />
    </ContentLoader>
)

export default Skeleton;
