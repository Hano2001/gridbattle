/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import Grid from "./Grid";
import Header from "./Header";
function App() {
  return (
    <div>
      <Header />

      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Grid />
      </div>
    </div>
  );
}

export default App;
