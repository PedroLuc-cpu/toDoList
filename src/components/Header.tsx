import "./header.module.css"
import Logo from "../assets/Logo.svg"
import Style from "./header.module.css"

export default function Header(){
       return(
              <header className={Style.header}>
                     <img className={Style.logo} src={Logo} alt="" />
              </header>
       )   
}