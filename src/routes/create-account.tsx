import { styled } from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  padding: 50px 0px;
`;

const Title = styled.div`
  font-size: 42px;
`;

const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const Input = styled.input`
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

const Error = styled.span`
  font-weight: 600;
  color: tomato;
  margin-top: 10px;
`;

export default function CreateAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    loginId: "",
    loginPw: "",
    confirmPw: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const validation = () => {
    if (formData.name === "") setErrorMessage("Name is required 😥");
    else if (formData.loginId.length < 6)
      setErrorMessage("Email must be at least 6 characters 😥");
    else if (formData.loginPw.length < 6)
      setErrorMessage("Password must be at least 6 characters 😥");
    else if (formData.loginPw !== formData.confirmPw)
      setErrorMessage("Password does not match 😥");
    else setErrorMessage("");
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      validation();
      
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(true);
    }
  };

  return (
    <Wrapper>
      <Title>Join 📡</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="name"
          value={formData.name}
          placeholder="Name"
          type="text"
        />
        <Input
          onChange={onChange}
          name="loginId"
          value={formData.loginId}
          placeholder="Email"
          type="text"
        />
        <Input
          onChange={onChange}
          name="loginPw"
          value={formData.loginPw}
          placeholder="Password"
          type="password"
        />
        <Input
          onChange={onChange}
          name="confirmPw"
          value={formData.confirmPw}
          placeholder="Confirm Password"
          type="password"
        />
        <Input
          type="submit"
          value={isLoading ? "Loading..." : "Create Account"}
        />
      </Form>
      {errorMessage !== "" ? <Error>{errorMessage}</Error> : null}
    </Wrapper>
  );
}
