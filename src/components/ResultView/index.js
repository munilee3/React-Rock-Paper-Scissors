import {
  ResultContainer,
  ChoiceWithImg,
  ResultOfChoice,
  UserType,
  ChoiceImgCon,
  Img,
  PlayAgainBtn,
} from './styledComponent'

const ResultView = props => {
  const {activeResult, text, playAgain} = props
  const onPlayAgainBtn = () => {
    playAgain()
  }
  return (
    <ResultContainer>
      <ChoiceWithImg>
        <ChoiceImgCon>
          <UserType>YOU</UserType>
          <Img src={activeResult[0].imageUrl} alt="your choice" />
        </ChoiceImgCon>
        <ChoiceImgCon>
          <UserType>OPPONENT</UserType>
          <Img src={activeResult[1].imageUrl} alt="opponent choice" />
        </ChoiceImgCon>
      </ChoiceWithImg>
      <ResultOfChoice>
        <UserType size="true">{text}</UserType>
        <PlayAgainBtn type="button" onClick={onPlayAgainBtn}>
          PLAY AGAIN
        </PlayAgainBtn>
      </ResultOfChoice>
    </ResultContainer>
  )
}

export default ResultView
