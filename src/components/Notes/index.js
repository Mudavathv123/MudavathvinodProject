// Write your code here
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  NotesContainer,
  Heading,
  Form,
  Input,
  AddBtn,
  TextArea,
  ListContainer,
  NoteEmptyView,
  Img,
  NoteEmptyViewHead,
  NoteEmptyViewDescription,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeSetTitle = event => setTitle(event.target.value)

  const onChangeSetNote = event => setNote(event.target.value)

  const onSubmitAddBtn = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      note,
    }
    setTitle('')
    setNote('')
    setNotesList(prveStae => [...prveStae, newNote])
  }

  const notesEmptyView = () => (
    <NoteEmptyView>
      <Img
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <NoteEmptyViewHead>No Notes Yet</NoteEmptyViewHead>
      <NoteEmptyViewDescription>
        Notes you add will appear here
      </NoteEmptyViewDescription>
    </NoteEmptyView>
  )

  return (
    <NotesContainer>
      <Heading>Notes</Heading>
      <Form onSubmit={onSubmitAddBtn}>
        <Input
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeSetTitle}
        />
        <TextArea
          as="textarea"
          type="text"
          placeholder="Take a Note..."
          value={note}
          onChange={onChangeSetNote}
        />
        <AddBtn type="submit">Add</AddBtn>
      </Form>

      {notesList.length > 0 ? (
        <ListContainer>
          {notesList.map(eachNote => (
            <NoteItem notes={eachNote} key={eachNote.id} />
          ))}
        </ListContainer>
      ) : (
        notesEmptyView()
      )}
    </NotesContainer>
  )
}

export default Notes
