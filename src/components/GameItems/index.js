import {Button, IMG} from './styledComponents'

const GameItems = props => {
  const {choice, checkMatchingImage} = props
  const {id, imageUrl} = choice

  const onClickCheckMatch = () => checkMatchingImage(id)

  return (
    <li>
      <Button
        onClick={onClickCheckMatch}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <IMG src={imageUrl} alt={id} />
      </Button>
    </li>
  )
}

export default GameItems
