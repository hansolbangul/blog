/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const inputSize = {
  small: {
    fontSize: "1rem",
    padding: "4px 8px"
  },
  middle: {
    fontSize: "1.167rem",
    padding: "6px 10px"
  },
  large: {
    fontSize: "1.333rem",
    padding: "8px 12px"
  },
};

const backColors = {
  default: 'black',
  warning: 'red',
  success: 'blue',
  info: 'green'
}

function Input({ size = "middle", color = "default", onChange }) {
  return (
    <input onChange={onChange}
      css={{
        outline: 'none',
        ...inputSize[size],
        color: backColors[color],
        flex: '1 1 auto',
      }}
    />
  );
}

export default Input;
