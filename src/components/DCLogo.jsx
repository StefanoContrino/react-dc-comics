import style from "../components/Header.module.css"

function DCLogo() {
    return <figure className={`${style["first-logo"]} ${style["container-flex"]}`}>

        <img src="/dc-logo.png" alt="DC Logo" />

    </figure>
}

export default DCLogo;