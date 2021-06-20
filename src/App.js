/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Grid from './Grid';
function App() {
    return (
        <div
            css={css`
                display: flex;
                justify-content: center;
            `}
        >
            <Grid />
        </div>
    );
}

export default App;
