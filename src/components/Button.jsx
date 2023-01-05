import React from "react";

const Button = ({ styles }) => (
  <a href='#contact'>
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    資料請求
  </button>
  </a>
);

export default Button;