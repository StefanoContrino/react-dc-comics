import style from "./Body.module.css"

function ComicCard(props) {

    const img = props.img
    const title = props.title

    return <div className={`${style["comics-container"]}`}>
        <img src={img} alt="" />
        <h4>{title}</h4>
    </div>

}

export default ComicCard;