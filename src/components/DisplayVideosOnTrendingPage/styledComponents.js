import Styled from 'styled-components'

export const TrendingListItems = Styled.li`
display:flex;
width:800px;
gap:20px;

@media screen and (max-width:768px){
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:center;
    width:100vw;
    max-width:400px;
    padding:10px;
}
`
