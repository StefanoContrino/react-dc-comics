import style from "./Body.module.css"
import comics from "../data/comics.js"
import totalProducts from "../data/bodyLinks.jsx"
import ComicImage from "./ComicImage.jsx"

function Body() {

    return (

        <main>

            <div className={style.jumbotron} >

            </div>

            <div className={`${style["black-bg"]} ${style["container-flex"]}`}>

                <ComicImage />

            </div>

            <div className={`${style["blue-bg"]} ${style["container-flex"]}`}>

                {totalProducts.map(product => {
                    return (

                        <>
                            <img className={style.icon} src={product.src} alt={product.alt} />
                            <h4>{product.nome}</h4>
                        </>
                    )
                })}


            </div>

        </main>

    )

}

export default Body;