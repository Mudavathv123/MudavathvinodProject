import {Component} from 'react'
import Popup from 'reactjs-popup'
import {IoIosClose} from 'react-icons/io'
import GameItems from '../GameItems'
import {
  GameContainer,
  ScoreContainer,
  CardContainer,
  Heading,
  UnOderList,
  P,
  RuleButton,
  PopupImageContainer,
  IMG,
  CloseButton,
  GameResultViewContainer,
  GameResultImageContainer,
  PlayAgainButton,
  ResultIMG,
  Result,
} from './styledComponents'

const constGameStatus = {
  inprogress: 'INPROGRESS',
  win: 'WIN',
  loss: 'LOSS',
  draw: 'DRAW',
}

class Game extends Component {
  state = {
    score: 0,
    userChoice: '',
    opponentChoice: '',
    gameStatus: constGameStatus.inprogress,
  }

  checkMatchingImage = id => {
    this.setState(
      {userChoice: id, opponentChoice: this.getOpponentChoice()},
      this.evaluateGame,
    )
  }

  getOpponentChoice = () => {
    const {choicesList} = this.props
    const gameChoicesList = choicesList.map(eachChoice => eachChoice.id)
    const randomChoice = Math.floor(Math.random() * gameChoicesList.length)
    return gameChoicesList[randomChoice]
  }

  evaluateGame = () => {
    const {userChoice, opponentChoice} = this.state
    if (userChoice === opponentChoice) {
      this.setState({gameStatus: constGameStatus.draw})
    } else if (userChoice === 'PAPER') {
      if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: constGameStatus.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: constGameStatus.loss,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (opponentChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: constGameStatus.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: constGameStatus.loss,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'ROCK') {
      if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: constGameStatus.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: constGameStatus.loss,
          score: prevState.score - 1,
        }))
      }
    }
  }

  onClickPlayAgain = () => {
    this.setState({gameStatus: constGameStatus.inprogress})
  }

  renderWonView = () => {
    const {choicesList} = this.props
    const {userChoice, opponentChoice} = this.state
    const userFilterChoiceList = choicesList.filter(
      eachChoice => eachChoice.id === userChoice,
    )
    const userChoiceImage = userFilterChoiceList[0]

    const opponentChoiceFilterList = choicesList.filter(
      eachChoice => eachChoice.id === opponentChoice,
    )

    const opponentChoiceImage = opponentChoiceFilterList[0]

    return (
      <GameResultViewContainer>
        <GameResultImageContainer>
          <Result>
            <Heading>YOU</Heading>
            <ResultIMG src={userChoiceImage.imageUrl} alt="your choice" />
          </Result>
          <Result>
            <Heading>OPPONENT</Heading>
            <ResultIMG
              src={opponentChoiceImage.imageUrl}
              alt="opponent choice"
            />
          </Result>
        </GameResultImageContainer>
        <P>YOU WON</P>
        <PlayAgainButton
          type="button"
          playAgain
          onClick={this.onClickPlayAgain}
        >
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderLossView = () => {
    const {choicesList} = this.props
    const {userChoice, opponentChoice} = this.state
    const userFilterChoiceList = choicesList.filter(
      eachChoice => eachChoice.id === userChoice,
    )
    const userChoiceImage = userFilterChoiceList[0]

    const opponentChoiceFilterList = choicesList.filter(
      eachChoice => eachChoice.id === opponentChoice,
    )

    const opponentChoiceImage = opponentChoiceFilterList[0]

    return (
      <GameResultViewContainer>
        <GameResultImageContainer>
          <div>
            <Heading>YOU</Heading>
            <ResultIMG src={userChoiceImage.imageUrl} alt="your choice" />
          </div>
          <div>
            <Heading>OPPONENT</Heading>
            <ResultIMG
              src={opponentChoiceImage.imageUrl}
              alt="opponent choice"
            />
          </div>
        </GameResultImageContainer>
        <P>YOU LOSE</P>
        <PlayAgainButton
          type="button"
          playAgain
          onClick={this.onClickPlayAgain}
        >
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderDRAWView = () => {
    const {choicesList} = this.props
    const {userChoice, opponentChoice} = this.state
    const userFilterChoiceList = choicesList.filter(
      eachChoice => eachChoice.id === userChoice,
    )
    const userChoiceImage = userFilterChoiceList[0]

    const opponentChoiceFilterList = choicesList.filter(
      eachChoice => eachChoice.id === opponentChoice,
    )

    const opponentChoiceImage = opponentChoiceFilterList[0]

    return (
      <GameResultViewContainer>
        <GameResultImageContainer>
          <div>
            <Heading>YOU</Heading>
            <ResultIMG src={userChoiceImage.imageUrl} alt="your choice" />
          </div>
          <div>
            <Heading>OPPONENT</Heading>
            <ResultIMG
              src={opponentChoiceImage.imageUrl}
              alt="opponent choice"
            />
          </div>
        </GameResultImageContainer>
        <P>IT IS DRAW</P>
        <PlayAgainButton
          type="button"
          playAgain
          onClick={this.onClickPlayAgain}
        >
          PLAY AGAIN
        </PlayAgainButton>
      </GameResultViewContainer>
    )
  }

  renderFilterGameViews = () => {
    const {gameStatus} = this.state
    const {choicesList} = this.props

    switch (gameStatus) {
      case constGameStatus.inprogress:
        return (
          <UnOderList>
            {choicesList.map(eachChoice => (
              <GameItems
                choice={eachChoice}
                key={eachChoice.id}
                checkMatchingImage={this.checkMatchingImage}
              />
            ))}
          </UnOderList>
        )
      case constGameStatus.win:
        return this.renderWonView()
      case constGameStatus.loss:
        return this.renderLossView()
      case constGameStatus.draw:
        return this.renderDRAWView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <GameContainer>
        <CardContainer>
          <Heading>
            Rock
            <br />
            Paper
            <br /> Scissors
          </Heading>
          <ScoreContainer>
            <P>Score</P>
            <P score>{score}</P>
          </ScoreContainer>
        </CardContainer>
        {this.renderFilterGameViews()}
        <Popup trigger={<RuleButton type="button">Rules</RuleButton>} modal>
          {close => (
            <>
              <PopupImageContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <IoIosClose size="24px" aria-label="close" />
                </CloseButton>
                <br />
                <IMG
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupImageContainer>
            </>
          )}
        </Popup>
      </GameContainer>
    )
  }
}

export default Game
