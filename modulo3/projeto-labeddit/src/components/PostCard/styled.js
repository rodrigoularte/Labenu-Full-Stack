import styled from "styled-components"

//Styled PostCard

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 18px;

  width: 100%;

  background: #FBFBFB;
  border: 1px solid #E0E0E0;
  border-radius: 12px;

  margin-bottom: 10px;
`

export const BottomContainer = styled.div`
  display: flex;
  gap: 16px;

  height: 30px;
`

export const VoteContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100px;

  border: 1px solid #ECECEC;
  border-radius: 28px;
`

export const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 70px;

  border: 1px solid #ECECEC;
  border-radius: 28px;
`

export const VoteUp = styled.button`
  display: flex;
  align-items: center;

  height: 100%;

  font-size: 18px;
  border: none;
  background-color: #FBFBFB;
`

export const VoteDown = styled.button`
  display: flex;
  align-items: center;

  height: 100%;

  font-size: 18px;
  border: none;
  background-color: #FBFBFB;
  transform: rotate(180deg);
`