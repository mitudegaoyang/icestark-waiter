import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { isInIcestark, registerAppEnter, registerAppLeave, getMountNode } from '@ice/stark-app';
import { getMountNode } from '@ice/stark-app';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

export interface IContainerProps { }
let containerSetR: any;
function Container(props: IContainerProps) {
  const [r, setR] = useState(true);
  useEffect(() => {
    containerSetR = setR;
  }, []);
  if (r) {
    return (
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    return null;
  }
}

// if (isInIcestark()) {
//   registerAppEnter(() => {
//     ReactDOM.render(
//       <Container />,
//       getMountNode("root")
//     );
//   });
//   registerAppLeave(() => {
//     ReactDOM.unmountComponentAtNode(getMountNode());
//   });
// }

ReactDOM.render(<Container />, getMountNode("root"));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   getMountNode("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
