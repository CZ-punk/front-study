import { Wrapper, Title, Form, Input, Error, Switcher } from "../style/login-routes.style";
import { useState } from "react";
import SignUp from "../api/auth/signUp";
import { Link, useNavigate } from "react-router-dom";
import CustomError from "../util/customError";
import { OAuth2Button } from "../components/auth/auth-btn";
import {OAuth2Login} from "../api/auth/oauth2Login";
import ouath2PopupHandler  from "../util/oauth2-popup-handler";
import { useApi } from "../api/useApi";


const CreateAccount: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [popup, setPopup] = useState<WindowProxy | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    loginId: "",
    loginPw: "",
    confirmPw: "",
  });
  const navigate = useNavigate();
  const api = useApi();

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
    return null;
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  ouath2PopupHandler(popup, setErrorMessage);

  const oAuth2Popup = (provider: string) => {
    const popup = window.open(OAuth2Login(provider), "Login", "width=400,height=500");
    setPopup(popup);
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

      const data = await SignUp(dto, api);

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
      <OAuth2Button ouath2Login={oAuth2Popup} />
    </Wrapper>
  );
}

export default CreateAccount;