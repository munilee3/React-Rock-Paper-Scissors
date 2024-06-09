import {Component} from 'react'
import ResultView from './components/ResultView'
import {
  PlayingViewContainer,
  ResponsiveContainer,
  ScoreContainer,
  ChoiceList,
  Choice,
  ScoreItem,
  ChoiceContainer,
  RulesCont,
  ChoiceItem,
  ChoiceBtn,
  ChoiceImg,
} from './components/ResultView/styledComponent'
import GameRulesView from './components/GameRulesView'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    isShowingResult: false,
    isWin: '',
    activeResult: [choicesList[0], choicesList[1]],
  }

  getResult = (choice1, choice2) => {
    if (choice1.id === 'ROCK') {
      switch (choice2.id) {
        case 'PAPER':
          return 'YOU LOSE'
        case 'SCISSORS':
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (choice1.id === 'PAPER') {
      switch (choice2.id) {
        case 'ROCK':
          return 'YOU WON'
        case 'SCISSORS':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (choice2.id) {
        case 'PAPER':
          return 'YOU WON'
        case 'ROCK':
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    }
  }

  changeChoice = activeChoice => {
    const {score} = this.state
    const choice1 = choicesList.filter(
      eachChoice => eachChoice.id === activeChoice,
    )
    const userChoice = choice1[0]
    const choiceLenght = choicesList.length
    const opponentChoice = Math.floor(Math.random() * choiceLenght)
    const randomChoice = choicesList[opponentChoice]
    const result = this.getResult(userChoice, randomChoice)
    let newScore = score
    if (result === 'YOU WON') {
      newScore = score + 1
    } else if (result === 'YOU LOSE') {
      newScore = score - 1
    } else {
      newScore = score
    }
    this.setState({
      score: newScore,
      isShowingResult: true,
      isWin: result,
      activeResult: [userChoice, randomChoice],
    })
  }

  playAgain = () => {
    this.setState({isShowingResult: false})
  }

  render() {
    const {score, isShowingResult, isWin, activeResult} = this.state
    return (
      <PlayingViewContainer>
        <ResponsiveContainer>
          <ScoreContainer>
            <ChoiceList>
              <Choice as="h1">
                ROCK <br />
                PAPER <br />
                SCISSORS
              </Choice>
            </ChoiceList>
            <ScoreItem>
              <Choice score>Score</Choice>
              <Choice score fontSize="true" family="true">
                {score}
              </Choice>
            </ScoreItem>
          </ScoreContainer>
          {isShowingResult ? (
            <ResultView
              activeResult={activeResult}
              text={isWin}
              score={score}
              isShowingResult={isShowingResult}
              playAgain={this.playAgain}
            />
          ) : (
            <ChoiceContainer>
              <ChoiceItem>
                <ChoiceBtn
                  onClick={() => this.changeChoice(choicesList[0].id)}
                  type="button"
                  data-testid="rockButton"
                >
                  <ChoiceImg
                    src={choicesList[0].imageUrl}
                    alt={choicesList[0].id}
                    key={choicesList[0].id}
                  />
                </ChoiceBtn>
              </ChoiceItem>
              <ChoiceItem>
                <ChoiceBtn
                  onClick={() => this.changeChoice(choicesList[1].id)}
                  type="button"
                  data-testid="scissorsButton "
                >
                  <ChoiceImg
                    src={choicesList[1].imageUrl}
                    alt={choicesList[1].id}
                    key={choicesList[1].id}
                  />
                </ChoiceBtn>
              </ChoiceItem>
              <ChoiceItem>
                <ChoiceBtn
                  onClick={() => this.changeChoice(choicesList[2].id)}
                  type="button"
                  data-testid="paperButton "
                >
                  <ChoiceImg
                    src={choicesList[2].imageUrl}
                    alt={choicesList[2].id}
                    key={choicesList[2].id}
                  />
                </ChoiceBtn>
              </ChoiceItem>
            </ChoiceContainer>
          )}
          <RulesCont>
            <GameRulesView />
          </RulesCont>
        </ResponsiveContainer>
      </PlayingViewContainer>
    )
  }
}

export default App
