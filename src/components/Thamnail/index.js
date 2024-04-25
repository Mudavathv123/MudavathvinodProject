import './index.css'

const Thamnail = props => {
    const {images,matchImage} = props
    const {id,thumbnailUrl} = images
    const onClickThumnail = () => {
        matchImage(id)
    }
    return (
        <li className = "thumnail-items">
            <button className = "thumnail-buuton" type = "button" onClick = {onClickThumnail}>
                <img src = {thumbnailUrl} alt = "thumbnail"  className = "thumnail-img"/>
            </button>
        </li>
    )
}

export default Thamnail