import { IoMdPlay } from "react-icons/io";
import { TfiTimer } from "react-icons/tfi";
import { MdFavoriteBorder ,MdOutlineMoreHoriz} from "react-icons/md";
import { BsTransparency } from "react-icons/bs";
import DataTable , {createTheme} from "react-data-table-component";
import {TableContainer,customStyles} from '../../SpecificPageTableStyles'
import '../../specificpage.css'

createTheme('solarized', {
    background: {
      default: BsTransparency,
    }
  });


const PopularRadioes = props => {

    const {radioes} = props


    const columns = [
        {
            name: <span className="row-number">#</span>,
            selector: row => row.rowNumber,
            width:"36px",
            
        },
        {
            name: <span className="title-head">Title</span>,
            selector: row => row.title,
        },
        {
            name: <span className="song-duration-timer"><TfiTimer size="20" /></span>,
            selector: row => row.time,
            width:"240px",
            style: { 
                minWidth: '240px',
                textAlign: "center" 
            },
        },
    ]

   
    let rno = 0;
   const data = radioes.map(eachSeong => ({
            rowNumber : <>
            <span className="row-number">{ rno += 1}</span>
                 <span className="paly-icon"><IoMdPlay size="18" /></span>
            </>,
            title :  <div className="title-head-container">
                         <h3 className='song-name'>{eachSeong.songName}</h3>
                         <p className='song-coresh'>{eachSeong.songArtist}, {eachSeong.singer}, {eachSeong.songCoresh}</p>
                     </div>,
            time : <div className="favirote-icon-contaier">
                     <MdFavoriteBorder size = "16" className='favarate-icon'/>
                     <span className='song-duration'>{eachSeong.songDuration}</span>
                     <MdOutlineMoreHoriz size = "16" className='song-more-icon'/>
                 </div>
           
    }))


    return (
        <TableContainer >
            <DataTable
            columns={columns}
            data={data}
            theme="solarized"
            customStyles={customStyles}
            >
            </DataTable>
        </TableContainer>
    )
}

export default PopularRadioes