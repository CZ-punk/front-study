import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

export const Title = styled.div`
  font-size: 42px;
`;

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Error = styled.span`
  font-weight: 600;
  color: tomato;
  margin-top: 10px;
`;

export const Switcher = styled.span`
  display: flex;
  margin-top: 20px;
  a {
    color: #1d9bf0;
  }

  gap: 10px;

  img { 
    width: 50px;
    height: 50px;
    objectFit: contain;
    cursor: pointer;
  }
`

