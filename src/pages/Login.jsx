import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/button/Button";
import { Axios } from "axios";
import '../scss/login.scss';
const handleClickLogin = (values) => {
console.log(values);
Axios.post("https://localhost:3001/api/login",
  {
    email: values.email,
    password: values.password,

  }).then((response) => {
    console.log(response);
    alert(response.data.msg);

  })
};
const validationLogin = yup.object().shape({
  email: yup
    .string()
    .email("Não é um email válido")
    .required("este campo é obrigatorio"),
  password: yup
    .string()
    .min(8, "A senha deve ter no minimo 8 caracteres")
    .required("este campo é obrigatorio"),
});
const Login = () => {
  return (
    <div className="container">
      <Container component="main" maxWidth="xs">
        <Box 
          sx={{
            marginTop:30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Login</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleClickLogin}
            validationSchema={validationLogin}
          >
            <Form className="login-form">
              <div className="login-form-group">
                <Field
                  name="email"
                  className="form-field"
                  placeholder="Email"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="email"
                  className="form-erro"
                />
              </div>
              <div className="login-form-group">
                <Field
                  name="password"
                  className="form-field"
                  placeholder="Senha"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-erro"
                />
              </div>
              <OutlineButton className="small">Login</OutlineButton>
            </Form>
          </Formik>
          <Link to="/singup">
            <OutlineButton className="small">Efetue o cadastro</OutlineButton>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default Login;
