import style from "./Body.module.css"
import totalProducts from "../data/bodyLinks.jsx"
import ComicImage from "./ComicImage.jsx"

function Body() {

    return (

        <main>

            <div className={style.jumbotron} >
                <img src="/jumbotron.jpg" alt="" />
            </div>

            <div className={`${style["black-bg"]} ${style["container-flex"]} ${style.relative}`}>

                <div className={style["btn-container"]}>

                    <button className={`${style["blue-btn"]} ${style.absolute}`}>Current Series</button>

                </div>

                <ComicImage />

                <div className={style["btn-container"]}>

                    <button className={style["blue-btn"]}>Load More</button>

                </div>

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