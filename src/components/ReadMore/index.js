// Write your code here
import {useState} from 'react'
import {
  ReadMoreContainer,
  Heading,
  Description,
  ReactImg,
  Container,
  ReadMoreBtn,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [isExpanded, setExpanded] = useState(false)

  const onClickMoreDescription = () => setExpanded(prevState => !prevState)

  const onClickLessDescription = () => setExpanded(prevState => !prevState)

  return (
    <ReadMoreContainer>
      <Container>
        <Heading>React Hooks</Heading>
        <Description>Hooks are a new addition to React</Description>
        <ReactImg
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Description>
          {isExpanded
            ? reactHooksDescription
            : `${reactHooksDescription.slice(0, 170)}`}
        </Description>
        {isExpanded ? (
          <ReadMoreBtn type="button" onClick={onClickLessDescription}>
            Read Less
          </ReadMoreBtn>
        ) : (
          <ReadMoreBtn type="button" onClick={onClickMoreDescription}>
            Read More
          </ReadMoreBtn>
        )}
      </Container>
    </ReadMoreContainer>
  )
}

export default ReadMore
