import React, { useState, useEffect } from 'react';

interface ProgressiveImgProps {
    placeholderSrc: string;
    src: string;
    alt?: string;
}

const ProgressiveImg: React.FC<ProgressiveImgProps> = ({ placeholderSrc, src, ...props }) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImgSrc(src);
        };
    }, []);
    return (
        <img
            {...{ src: imgSrc, ...props }}
            alt={props.alt || ""}
        />
    );
};

export default ProgressiveImg;
