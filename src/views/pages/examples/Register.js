import React, { useRef, useState } from "react";
import classnames from "classnames";
import { Link as RouterLink, NavLink, useHistory, Redirect } from 'react-router';

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
} from "reactstrap";
import AuthHeader from "components/Headers/AuthHeader.js";
import { signup, useAuth, logout, login } from "../../../firebase";
import Login from "./Login";
import {auth} from '../../../firebase';
import {UserContext} from '../../../index'


function Register() {
  const [focusedName, setfocusedName] = React.useState(false);
  const [focusedEmail, setfocusedEmail] = React.useState(false);
  const [focusedPassword, setfocusedPassword] = React.useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const [ loading, setLoading ] = useState(false)
  const currentUser = useAuth();


  

//  async function handleSignup(){

//    try{
//     await signup(emailRef.current.value, passwordRef.current.value)
//    };
//    } catch{
//      alert("errror")
//    }
//    setLoading(false);
//   }
 
async function handleLogout(){
  setLoading(true);
  try{
    await logout();
  }catch{
    alert("errror");
  }
  setLoading(false);
}

async function handleLogin() {
  setLoading(true);
  try {
    await login(emailRef.current.value, passwordRef.current.value).then(()=> {
      <Redirect to="/admin/dashboard" />
    });
  } catch {
    alert("Error!");
  }
  setLoading(false);
}

  return (
    <>
      <AuthHeader
        title="Create an account"
        lead="Use these awesome forms to login or create new account in your project for free."
      />
      <Container className="mt--8 pb-5">
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <Card className="bg-secondary border-0">
              <CardHeader className="bg-transparent pb-5">
                <div className="text-muted text-center mt-2 mb-4">
                  <small>Sign up with</small>
                </div>
                <div className="text-center">
                  <Button
                    className="btn-neutral btn-icon mr-4"
                    color="default"
                    href="#pablo"
                  >
                    <span className="btn-inner--icon mr-1">
                      <img
                        alt="..."
                        src={
                          require("assets/img/icons/common/github.svg").default
                        }
                      />
                    </span>
                    <span className="btn-inner--text">Github</span>
                  </Button>
                  <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="#pablo"
                  >
                    <span className="btn-inner--icon mr-1">
                      <img
                        alt="..."
                      
                      />
                    </span>
                    <span className="btn-inner--text">Google</span>
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Or sign up with credentials</small>
                  
                </div>
                <div>user{currentUser?.email}</div>
                <Form role="form">
                  
                  {/* <FormGroup
                    className={classnames({
                      focused: focusedName,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-hat-3" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Name"
                        required
                        type="text"
                        onFocus={() => setfocusedName(true)}
                        onBlur={() => setfocusedName(false)}
                      />
                    </InputGroup>
                  </FormGroup> */}
                  <FormGroup
                    className={classnames({
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        required
                        type="email"
                        ref={emailRef}
                     
                      />
                    </InputGroup>
                  </FormGroup>
                  <FormGroup
                    className={classnames({
                      focused: focusedPassword,
                    })}
                  >
                    <InputGroup className="input-group-merge input-group-alternative mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        required
                        ref={passwordRef}
                        type="password"
                     
                      />
                    </InputGroup>

                   
                    
                  </FormGroup>
                  <div className="text-muted font-italic">
                    <small>
                      password strength:{" "}
                      <span className="text-success font-weight-700">
                        strong
                      </span>
                    </small>
                  </div>
                  <Row className="my-4">
                    <Col xs="12">
                      <div className="custom-control custom-control-alternative custom-checkbox">
                        <input
                          className="custom-control-input"
                          id="customCheckRegister"
                          type="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheckRegister"
                        >
                          <span className="text-muted">
                            I agree with the{" "}
                            <a
                              href="#pablo"
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center">
                    {/* <Button  onClick={handleSignup} className="mt-4" color="info" type="button">
                      Create account
                    </Button> */}
                    <Button  onClick={handleLogout} className="mt-4" color="info" type="button">
                      Logout
                    </Button>
                    <Button  onClick={handleLogin} className="mt-4" color="info" type="button">
                      Login
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Register;

