import styled from "styled-components"

// page
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
`

export const Line = styled.hr`
  width: 100%;
  height: 1px;
  margin: 18px 0;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  border: 0 none;
`


// form
export const InputField = styled.input`
width: 100%;
height: 60px;
border: 1px solid #D5D8DE;
border-radius: 4px;
padding-left: 16px;
margin-bottom: 8px;
`


// buttons
export const GradientButton1 = styled.button`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 27px;
  font-size: 18px;
  color: white;
  background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
  margin-top: 48px;
`

export const CreateAccountButton = styled.button`
  width: 100%;
  height: 50px;
  border: 1px solid #FE7E02;
  border-radius: 27px;
  font-size: 18px;
  color: #FE7E02;
  background-color: white;
`