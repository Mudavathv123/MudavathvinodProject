// Write your code here
import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {direction, changeColorsOfLinearGradient, isActive} = props
  const {value, displayText} = direction

  const onClickChnageColors = () => {
    changeColorsOfLinearGradient(value)
  }
  return (
    <ListItem>
      <DirectionButton
        type="button"
        onClick={onClickChnageColors}
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
