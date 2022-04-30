import styled from "styled-components"

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #2784be;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  color: white;
  gap: 20px;

  input {
    width: 350px;
    height: 40px;
    border: none;
    text-decoration: #1A75AE;
    padding: 0 10px;
    border-radius: 3px;

    ::placeholder {
      color: #1A75AE;
    }

    :hover {
      border: 2px solid #52A5D9;
    }
  }

  select {
    width: 350px;
    height: 40px;
    border: none;
    text-decoration: #1A75AE;
    padding: 0 10px;
    border-radius: 3px;

    ::placeholder {
      color: #1A75AE;
    }

    :hover {
      border: 2px solid #52A5D9;
    }
  }

  @media screen and (min-device-width : 300px) and (max-device-width : 480px) {
    width: 95vw;
    h2{font-size: 1.3em;}
    input{width: 100%;}
    select{width: 100%;}
  }
`