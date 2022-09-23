import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/button/Button";
import '../scss/singup.scss';
import { Axios } from "axios";
const handleClickSingUp = (values) => {
  console.log(values);
  Axios.post("https://localhost:3001/api/singup",
  {
    email: values.email,
    password: values.password,

  }).then((response) => {
    alert(response.data.msg);
    console.log(response);

  })

};
const validationSingUp = yup.object().shape({
  email: yup
    .string()
    .email("Não é um email válido")
    .required("este campo é obrigatorio"),
  password: yup
    .string()
    .min(8, "A senha deve ter no minimo 8 caracteres")
    .required("este campo é obrigatorio"),
  confirmPassowrd:yup.string().oneOf([yup.ref("password"),null],"as senhas não são iguais")  
});
const SingUp = () => {
  return (
    <div className="container">
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1>Cadastro</h1>
          <Formik
            initialValues={{}}
            onSubmit={handleClickSingUp}
            validationSchema={validationSingUp}
          >
            <Form className="SingUp-form">
              <div className="SingUp-form-group">
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
              <div className="SingUp-form-group">
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
                <div className="SingUp-form-group">
                <Field
                  name="Confirmpassword"
                  className="form-field"
                  placeholder="Confirmar Senha"
                ></Field>
                <ErrorMessage
                  component="span"
                  name="password"
                  className="form-erro"
                />
              </div>
              <OutlineButton className="small">Cadastre-se</OutlineButton>
            </Form>
          </Formik>
          <Link to="/login">
            <OutlineButton className="small">Efetue Login</OutlineButton>
          </Link>
        </Box>
      </Container>
    </div>
  );
};

export default SingUp;
