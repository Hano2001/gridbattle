/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const Cell = ({ children }) => {
    return (
        <div
            css={css`
                display: flex;
                justify-content: center;
                align-items: center;
                &:hover {
                    background-color: lightgreen;
                }
            `}
        >
            {children}
        </div>
    );
};

export default Cell;
