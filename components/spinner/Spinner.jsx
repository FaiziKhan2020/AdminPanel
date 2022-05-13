import React from "react";
import style from "./style.module.css";
// import { Audio } from 'react-loader-spinner';
const index = () => {
  return (
    // <Audio height="100" width="100" color="red" ariaLabel="Loading" />
    <div className={style.spinner}>
      <div class={`spinner-border m-5 spinner ${style.spinner}`} role='status'>
        <span class='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default index;
