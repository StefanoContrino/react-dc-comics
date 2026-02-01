import style from "./Header.module.css"
import links from "../data/headerLinks"
import Logo from "./DCLogo";

function Header() {

    return (

        <header className={`${style.header} ${style["container-flex"]}`}>

            <Logo />

            <nav className={`${style.nav} ${style["container-flex"]}`}>

                {links.map(link => {
                    return <h3><a href={link.href} key={link.key}>{link.nome}</a></h3>
                })}


            </nav>

        </header>

    )

}

export default Header;