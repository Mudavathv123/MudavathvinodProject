import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  TextEditorBgContainer,
  TextEditorHeading,
  Heading,
  Image,
  TextAreaContainer,
  TextButtonContainer,
  CustomButton,
  TextArea,
  TextContainer,
} from './styledComponents'

class TextEditor extends Component {
  state = {bold: false, italic: false, underline: false}

  onClickBold = () => {
    this.setState(prveState => ({bold: !prveState.bold}))
  }

  onClickItalic = () => {
    this.setState(prveState => ({italic: !prveState.italic}))
  }

  onClickUnderline = () => {
    this.setState(prveState => ({underline: !prveState.underline}))
  }

  render() {
    const {bold, italic, underline} = this.state

    const boldText = bold ? 'bold' : 'normal'
    const italicText = italic ? 'italic' : 'normal'
    const underLineText = underline ? 'underline' : 'normal'
    const boldTextColor = bold ? '#faff00' : '#f1f5f9'
    return (
      <TextEditorBgContainer>
        <TextContainer>
          <TextEditorHeading>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorHeading>
          <TextAreaContainer>
            <TextButtonContainer>
              <li>
                <CustomButton
                  data-testid="bold"
                  onClick={this.onClickBold}
                  boldTextColor={boldTextColor}
                >
                  <VscBold size="24" aria-label="bold" />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  data-testid="italic"
                  onClick={this.onClickItalic}
                  boldTextColor={italic ? '#faff00' : '#f1f5f9'}
                >
                  <GoItalic size="24" aria-label="italic" />
                </CustomButton>
              </li>
              <li>
                <CustomButton
                  data-testid="underline"
                  onClick={this.onClickUnderline}
                  boldTextColor={underline ? '#faff00' : '#f1f5f9'}
                >
                  <AiOutlineUnderline size="24" aria-label="underline" />
                </CustomButton>
              </li>
            </TextButtonContainer>
            <hr />
            <TextArea
              rows="20"
              cols="35"
              boldText={boldText}
              italicText={italicText}
              underLineText={underLineText}
            />
          </TextAreaContainer>
        </TextContainer>
      </TextEditorBgContainer>
    )
  }
}

export default TextEditor
