import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  Heading,
  P,
  UnOderList,
  Input,
  Button,
  InputCard,
  InputContainer,
  AppContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGraientDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradientValue: `to ${
      gradientDirectionsList[0].value
    },${'#8ae323'},${'#014f7b'}`,
  }

  changeColorsOfLinearGradient = value => {
    this.setState({activeGraientDirection: value})
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onClickChangeBackgroundColor = () => {
    const {color1, color2, activeGraientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGraientDirection},${color1},${color2}`,
    })
  }

  render() {
    const {color1, color2, gradientValue, activeGraientDirection} = this.state
    return (
      <AppContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <P>Choose Direction</P>
        <UnOderList className="list-container">
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              direction={eachDirection}
              key={eachDirection.directionId}
              changeColorsOfLinearGradient={this.changeColorsOfLinearGradient}
              isActive={activeGraientDirection === eachDirection.value}
            />
          ))}
        </UnOderList>
        <P>Pick the Colors</P>
        <InputContainer>
          <InputCard>
            <P>{color1}</P>
            <Input type="color" value={color1} onChange={this.onChangeColor1} />
          </InputCard>
          <InputCard>
            <P>{color2}</P>
            <Input type="color" value={color2} onChange={this.onChangeColor2} />
          </InputCard>
        </InputContainer>
        <Button type="button" onClick={this.onClickChangeBackgroundColor}>
          Generate
        </Button>
      </AppContainer>
    )
  }
}

export default GradientGenerator
