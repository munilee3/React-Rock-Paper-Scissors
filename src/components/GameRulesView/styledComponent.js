import styled from 'styled-components'

export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GameRulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 90%;
  max-width: 450px;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    max-width: 1110px;
  }
`
export const RulesBtn = styled.button`
  border: none;
  background-color: #ffffff;
  font-family: 'Bree Serif';
  outline: none;
  cursor: pointer;
  font-size: 20px;
  padding: 8px 15px 8px 15px;
  border-radius: 8px;
`
export const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`
export const RulesImg = styled.img`
  width: 80%;
`
