import { css } from "@emotion/react";

export const divCss = css({
  position: 'absolute',
  width: '300px',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '10px',
  div: {
    display: 'flex',
    alignItems: 'center',
    columnGap: '10px'
  }
})