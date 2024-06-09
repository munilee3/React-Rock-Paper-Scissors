import {ChoiceItem, ChoiceBtn, ChoiceImg} from './styledComponent'

const ChoiceItems = props => {
  const {choiceDetails, changeChoice} = props
  const {id, imageUrl} = choiceDetails
  const onClickChoice = () => {
    changeChoice(id)
  }
  return (
    <ChoiceItem>
      <ChoiceBtn onClick={onClickChoice}>
        <ChoiceImg src={imageUrl} />
      </ChoiceBtn>
    </ChoiceItem>
  )
}

export default ChoiceItems
