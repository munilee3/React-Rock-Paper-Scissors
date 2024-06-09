import styled from 'styled-components'

export const PlayingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #223a5f;
`

export const ResponsiveContainer = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 100vh;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const ScoreContainer = styled.div`
  border: 2px solid #ffffff;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`

export const ChoiceList = styled.div``

export const Choice = styled.p`
  color: ${props => (props.score ? '#223a5f' : '#ffffff')};
  font-family: ${props => (props.family ? 'Roboto' : 'Bree Serif')};
  font-size: ${props => (props.fontSize ? 35 : 20)}px;
  margin: 0px;
  font-weight: ${props => (props.family ? 'bold' : '')};
  @media screen and (min-width: 768px) {
    font-size: ${props => (props.fontSize ? 50 : 30)}px;
  }
`

export const ScoreItem = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 20px 10px 20px;
  @media screen and (min-width: 768px) {
    padding: 10px 40px 10px 40px;
  }
`
export const ChoiceContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const RulesCont = styled.div`
  align-self: flex-end;
`

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const ChoiceWithImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 45%;
`

export const ChoiceImgCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const UserType = styled.p`
  font-family: 'roboto';
  font-size: ${props => (props.size ? 35 : 20)}px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  marign-bottom: 0px;
`
export const Img = styled.img`
  width: 220px;
`
export const ResultOfChoice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
`

export const PlayAgainBtn = styled.button`
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  font-family: 'Bree Serif';
  align-text: center;
  padding: 15px;
  margin-top: 0px;
`
export const ChoiceItem = styled.li`
  list-style: none;
  width: 50%;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`
export const ChoiceBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ChoiceImg = styled.img`
  width: 200px;
`
