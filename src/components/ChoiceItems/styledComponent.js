import styled from 'styled-components'

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
