import React from 'react';

// Define the shape of the cache object
type CacheObject = {
    [key: string]: boolean | Promise<void>;
};

// Define the shape of the cache manager
interface ImgCache {
    __cache: CacheObject;
    read(src: string): Promise<void> | undefined;
    clearImg(src: string): void;
}

// Initialize the cache manager
const imgCache: ImgCache = {
    __cache: {},
    read(src: string): Promise<void> | undefined {
        if (!src) {
            return undefined;
        }

        if (!this.__cache[src]) {
            this.__cache[src] = new Promise<void>((resolve) => {
                const img = new Image();
                img.onload = () => {
                    this.__cache[src] = true;
                    resolve();
                };
                img.src = src;
                setTimeout(() => resolve(), 60);
            });
        }

        if (this.__cache[src] instanceof Promise) {
            throw this.__cache[src]; // Return the promise instead of throwing
        }
        return undefined; // Return undefined if the image is already cached
    },
    clearImg(src: string): void {
        delete this.__cache[src];
    }
};

// Define the props for the SuspenseImg component
interface SuspenseImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
}

// Create the SuspenseImg component
export const SuspenseImg: React.FC<SuspenseImgProps> = ({ src, ...rest }: SuspenseImgProps) => {
    const cachedImg = imgCache.read(src);
    if (cachedImg instanceof Promise) {
        throw cachedImg; // Throw the promise if it's not resolved yet
    }

    return <img alt="" src={src} {...rest} />;
};
