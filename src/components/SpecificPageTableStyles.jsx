import styled from 'styled-components';

export const TableContainer = styled.div`
margin-right:20px;
::-webkit-scrollbar {
width: 0px; // width of the scrollbar
}
`;

export const customStyles = {
	rows: {
		style: {
			minHeight: '72px', // override the row height
            display: "flex",
            alignItems: "center",
            gap: '30px',
            listStyleType: "disc",
            color: '#fff',
            paddingLeft: '0px',
            borderBottom:'none !important',
            '&:hover':{
                backgroundColor: "#2b2929",
                borderRadius: "8px",
                '.song-coresh': {
                color: '#fff',
            },
            '.row-number': {
                display: 'none',
            },
            '.paly-icon': {
                display: 'block',
                color: '#fff',
            },
            '.favarate-icon': {
                display: 'block',
            },
            '.song-more-icon': {
               display: 'block',
               color: '#fff',
            }
            }
            
		}
	},
	headCells: {
		style: {
            textAlign:"center !important",
			paddingLeft: '8px', // override the cell padding for head cells
			paddingRight: '8px',
            borderBottom: 'none !important'
		},
	},
	cells: {
		style: {
			paddingLeft: '8px', // override the cell padding for data cells
			paddingRight: '8px',
            borderBottom: 'none !important'
		},
	},
};

