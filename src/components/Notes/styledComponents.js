// Style your elements here
import Styled from 'styled-components'

export const NotesContainer = Styled.div`
    min-height:100vh;
    padding:20px;
    display:flex;
    flex-direction:column;
    gap:20px;
    align-items:center;
   
  `
export const Heading = Styled.h1`
    font-size:36px;
    font-family:"Bree Serif";
    font-weight:800;
    color:#4c63b6;
  `
export const Form = Styled.form`
    min-width:600px;
    max-width:600px;
    box-shadow: 8px 8px 20px #aab8c8, -8px -8px 20px #aab8c8;
    border-radius:8px;
    height:200px;
    display:flex;
    flex-direction:column;
    gap:20px;
    padding:20px;
    box-sizing:border-box;

    @media screen and (max-width:768px){
      min-width:100vw;
      max-width:100vw;
    }
  `
export const Input = Styled.input`
    border:none;
    outline:none;
    background-color:transparent;
  `
export const TextArea = Styled(Input)``

export const AddBtn = Styled.button`
    height:36px;
    width:64px;
    color:#ffffff;
    font-size:16px;
    cursor:pointer;
    border:none;
    align-self:flex-end;
    border-radius:8px;
    background-color:#4c63b6;
    outline:none;
    margin-top:30px;
`
export const ListContainer = Styled.ul`
  list-style-type:none;
  display:flex;
  gap:20px;
  flex-wrap:wrap;

  @media screen and (min-width:768px){
    max-width:600px;
  }
`

export const NoteEmptyView = Styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:10px;
  min-height:600px;
`

export const Img = Styled.img`
  height:120px;
`

export const NoteEmptyViewHead = Styled.h1`
    font-size:36px;
    font-family:"Roboto";
    font-weight:800;
    color:#334155;
`

export const NoteEmptyViewDescription = Styled.p`
    font-size:16px;
    font-family:"Roboto";
    color:#475569;
`
