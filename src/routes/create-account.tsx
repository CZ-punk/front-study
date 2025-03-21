import { Wrapper, Title, Form, Input, Error, Switcher } from "../components/auth-components";
import { useState } from "react";
import SignUp from "../api/auth/signUp";
import { Link, useNavigate } from "react-router-dom";
import CustomError from "../util/customError";
import { OAuth2Button } from "../components/oauth2-btn";


export default function CreateAccount() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    loginId: "",
    loginPw: "",
    confirmPw: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const validation = (): string | null => {
    if (formData.name === "") {
      return "Name is required 😥";
    } else if (formData.loginId.length < 6) {
      return "Email must be at least 6 characters 😥";
    } else if (formData.loginPw.length < 6) {
      return "Password must be at least 6 characters 😥";
    } else if (formData.loginPw !== formData.confirmPw) {
      return "Password does not match 😥";
    }
    return null; // 에러가 없을 경우 null 반환
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      setErrorMessage('');
      const error = validation()
      if (error) {
        setErrorMessage(error);
        setIsLoading(false);
        return;
      }

      const dto = {
        loginId: formData.loginId,
        loginPw: formData.loginPw,
        username: formData.name
      }

      const data = await SignUp(dto); // response.data

      console.log("data: ", data);
      console.log('회원가입 성공');
      alert('Sign Up Success!');
      navigate("/login");

    } catch (error) {
      if (error instanceof CustomError) {
        setErrorMessage(error.response.data);
        setIsLoading(false);
      }

      navigate("/create-account");
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
      <Switcher>
        Already have an account? {""}
        <Link to="/login">Log in &rarr;</Link>

      </Switcher>
      <OAuth2Button/>
    </Wrapper>
  );
}
