import {Component} from 'react'
import {
  Heading,
  Label,
  Input,
  Select,
  Button,
  P,
  Output,
  Form,
  MemeGeneratorContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: '',
    showMemes: false,
  }

  onClickGenerateMems = event => {
    const {imageUrlInput, topTextInput, bottomTextInput, fontSizeInput} =
      this.state
    event.preventDefault()
    this.setState({
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
      showMemes: true,
    })
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeToptext = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomtext = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  renderOuputView = () => {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
      showMemes,
    } = this.state

    return (
      <>
        {showMemes && (
          <Output imageUrl={imageUrlInput} data-testid="meme">
            <P fontSize={fontSizeInput}>{topTextInput}</P>
            <P fontSize={fontSizeInput}>{bottomTextInput}</P>
          </Output>
        )}
      </>
    )
  }

  render() {
    const {imageUrlInput, topTextInput, bottomTextInput, fontSizeInput} =
      this.state
    return (
      <MemeGeneratorContainer>
        <Form onSubmit={this.onClickGenerateMems}>
          <Heading>Meme Generator</Heading>
          <div className="input-container">
            <Label htmlFor="imageURL">Image URL</Label>
            <br />
            <Input
              id="imageURL"
              placeholder="Enter the image URL"
              value={imageUrlInput}
              type="text"
              onChange={this.onChangeImageUrl}
            />
          </div>
          <div className="input-container">
            <Label htmlFor="topText">Top Text</Label>
            <br />
            <Input
              id="topText"
              placeholder="Enter the top text"
              value={topTextInput}
              onChange={this.onChangeToptext}
            />
          </div>
          <div className="input-container">
            <Label htmlFor="buttomText">Bottom Text</Label>
            <br />
            <Input
              id="buttomText"
              placeholder="Enter the button text"
              value={bottomTextInput}
              onChange={this.onChangeBottomtext}
            />
          </div>
          <div className="input-container">
            <Label htmlFor="fontSize">Font Size</Label>
            <br />
            <Select
              id="fontSize"
              as="select"
              value={fontSizeInput}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(eachFontSize => (
                <option
                  value={eachFontSize.optionId}
                  key={eachFontSize.optionId}
                >
                  {eachFontSize.displayText}
                </option>
              ))}
            </Select>
          </div>
          <Button type="submit">Generate</Button>
        </Form>
        {this.renderOuputView()}
      </MemeGeneratorContainer>
    )
  }
}

export default MemeGenerator
