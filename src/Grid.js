/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import Cell from './Cell';

const Grid = () => {
    const generateCells = (count) => {
        let cells = [];
        for (let i = 0; i <= count - 1; i++) {
            cells.push(<Cell>{i}</Cell>);
        }
        return cells;
    };

    return (
        <div
            css={css`
                display: grid;
                grid-template-columns: repeat(16, 100px);
                grid-template-rows: repeat(8, 100px);
                gap: 5px;
                padding: 5px;
                background-color: darkgreen;
            `}
        >
            {generateCells(128)}
        </div>
    );
};

export default Grid;
