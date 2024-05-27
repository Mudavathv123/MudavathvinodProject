// Write your code here
import {ListItemContainer, Title, NoteDescription} from './styledComponents'

const NoteItem = props => {
  const {notes} = props
  const {title, note} = notes
  return (
    <ListItemContainer>
      <Title>{title}</Title>
      <NoteDescription>{note}</NoteDescription>
    </ListItemContainer>
  )
}

export default NoteItem
