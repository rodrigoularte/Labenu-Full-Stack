import styled from "styled-components"

//Styled PostPage

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const Comment = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 18px;
  resize: none;

  color: #6F6F6F;
  font-size: 18px;

  background-color: #EDEDED;
  border: none;
  border-radius: 12px;
`