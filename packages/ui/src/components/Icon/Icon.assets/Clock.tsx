import React from 'react';

import { IconAsset } from '../IconRoot';

export const Clock: React.FC<IconAsset> = (props) => (
    <svg width={10} height={10} viewBox="0 0 10 10" fill="none" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 9a4 4 0 100-8 4 4 0 000 8zm0 1A5 5 0 105 0a5 5 0 000 10zm0-7.5a.5.5 0 01.5.5v2H6a.5.5 0 010 1H5a.5.5 0 01-.5-.5V3a.5.5 0 01.5-.5z"
            fill="currentColor"
        />
    </svg>
);
