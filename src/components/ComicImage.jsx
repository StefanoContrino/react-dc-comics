import comics from "../data/comics";
import ComicCard from "./ComicCard";
import style from "./Body.module.css";

function ComicImage() {


    return <div className={`${style["container-flex"]}`}>

        {comics.map(comic => {
            return <ComicCard img={comic.thumb} title={comic.title} />
        })}

    </div>
}



export default ComicImage;