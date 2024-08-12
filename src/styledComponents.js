import styled from 'styled-components'

export const GlobalDiv = styled.div`
  display: flex;
  font-family: Roboto;
  letter-spacing: 3px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  text-align: start;
  color: #ffffff;
  width: 90%;
`

export const TaskBlock = styled.div`
  width: 30%;
  padding: 10px;
  background-color: #131213;
  color: #f3aa4e;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`

export const Input = styled.input`
  padding: 10px;
`

export const Select = styled.select`
  padding: 10px;
`

export const Button = styled.button`
  padding: 15px 30px;
  background-color: #f3aa4e;
  color: #ffffff;
  width: 50%;
  outline: none;
  border: none;
  border-radius: 10px;
  align-self: center;
  cursor: pointer;
`

export const ShowTab = styled.div`
  background-color: #000000;
  color: #ffffff;
  width: 70%;
  padding: 10px;
`

export const TagBtns = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
`
export const TaskShow = styled.ul`
  list-style-type: none;
`
