/** @jsxImportSource @emotion/react */
import { divCss } from "./export";
import Input from "./Input/Input";

function App() {

  return (
    <div css={divCss}>
      <h2>데굴데굴 굴러가유.. emotion!!</h2>
      <div>
        <span>DEFAULT</span>
        <Input />
      </div>
      <div>
        <span>SMALL</span>
        <Input size="small" />
      </div>
      <div>
        <span>MIDDLE</span>
        <Input size="middle" />
      </div>
      <div>
        <span>LARGE</span>
        <Input size="large" />
      </div>
      <div>
        <span>SUCCESS</span>
        <Input color="success" />
      </div>
      <div>
        <span>WARNING</span>
        <Input color="warning" />
      </div>
      <div>
        <span>INFO</span>
        <Input color="info" />
      </div>
    </div>
  );
}

export default App;
