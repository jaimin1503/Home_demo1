import { useState } from "react";
import "./style.css";
import logo from "./586273b931349e0568ad89df.png";
import "../../index.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
    setVisible(!visible);
  };
  return (
    <>
      <div onClick={handleClick} className="burger" id="burger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`navbar ${isOpen ? "h_nav_resp" : ""} gradient_home`}>
        <div className="left_side">
          <ul className={`ula ${!visible ? "v_nav_resp" : ""}`}>
            <li className=" li">
              <img className="logo" src={logo} alt="sdfg" />
            </li>
            <li className=" li">Development & IT</li>
            <li className=" li">Design & Creation</li>
          </ul>
        </div>
        <div className={`right_side ${!visible ? "v_nav_resp" : ""}`}>
          <div className="log_in">
            <li className=" text-white cursor-pointer px-5 hover:text-purple-200 list-none">
              log in
            </li>
          </div>
          <div className="up">
            <button className="sign_up">Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
}
