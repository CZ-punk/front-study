import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center; 
  width: 50%;
  margin: 0 auto;
  padding: 50px 0px;
`;

export const Title = styled.div`
  margin: 0 15px;
  font-size: 42px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  gap: 10px;
  width: 100%;
`;

export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: none;
  width: 50%;
  font-size: 16px;
  text-align: center;

  &[type="submit"] {
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  };

  &::placeholder:
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

