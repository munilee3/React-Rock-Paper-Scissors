import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  PopupContainer,
  GameRulesContainer,
  RulesBtn,
  CloseBtn,
  RulesImg,
} from './styledComponent'

const GameRulesView = () => (
  <PopupContainer>
    <Popup modal trigger={<RulesBtn type="button">Rules</RulesBtn>}>
      {close => (
        <GameRulesContainer>
          <CloseBtn type="button" onClick={() => close()}>
            <RiCloseLine size="30" />
          </CloseBtn>
          <RulesImg
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </GameRulesContainer>
      )}
    </Popup>
  </PopupContainer>
)

export default GameRulesView
