import { IoMdPlay } from "react-icons/io";
import { MdFavoriteBorder ,MdOutlineMoreHoriz} from "react-icons/md";
import './specificAlbumb.css'

const Songs = props => {

    const { song, rowNumber } = props
    const { singer, songArtist, songCoresh, songDuration, songName, songId } = song

    return (
        <li className="song-list-head-container">
            <div className="title-and-number-container">
                <span className="row-number">{rowNumber}</span>
                <span className="paly-icon"><IoMdPlay size="18" /></span>
                <div className="title-head-container">
                    <h3 className='song-name'>{songName}</h3>
                    <p className='song-coresh'>{songArtist}, {singer}, {songCoresh}</p>
                </div>
            </div>
            <div className="favirote-icon-contaier">
                <span className='favarate-icon'><MdFavoriteBorder size = "16" /></span>
                <span className='song-duration'>{songDuration}</span>
                <span className='song-more-icon'><MdOutlineMoreHoriz size = "16" /></span>
            </div>
        </li>
    )
}

export default Songs