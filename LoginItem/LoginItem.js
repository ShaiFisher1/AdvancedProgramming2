import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import React from 'react';
import { BrowserRouter as Router, Link, useNavigate  } from 'react-router-dom';
import './LoginItem.css';
import { validateUser } from'../UsersData/UsersData.js';
import LoginAndRegisterImg from '../Media/LoginAndRegisterImg.png'

function LoginItem(){
    
    let navigate = useNavigate()

    function validate() {
        var userName = document.getElementById("Username").value;
        var password = document.getElementById("Password").value;
        if (password.length < 8) {
            alert("Password should contain at least 8 characters.");
            return;
        }
        if (validateUser(userName, password)) {
            navigate(`/ChatsItem/${userName}`);
        } else {
            alert("Username or password are not correct.")
            return;
        }
    }
    return (
        <div>
            <Card className="LoginItem-card"> 
                <Card.Img src={LoginAndRegisterImg} />
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <Form.Label>Username</Form.Label>
                                </div>
                                <div className="col">
                                    <input type="username" className="form-control" id="Username" placeholder="Enter username" required/>
                                </div>
                            </div>
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <div className="container">
                                <div className="row">
                                    <div className="col-3">
                                        <Form.Label>Password</Form.Label>
                                    </div>
                                    <div className="col">
                                    <input type="password" className="form-control" id="Password" placeholder="Password" required/>
                                </div>    
                                </div>
                            </div>    
                        </Form.Group>
                        <Form.Text className="text-muted">Not registered? </Form.Text>
                        <Link to="/RegisterationItem" className="LoginItem-link">Click here</Link>
                        <Form.Text className="text-muted"> to register</Form.Text>
                        <Button variant="primary" type="submit" style={{ width: '15rem', display: 'grid' }} onClick={validate}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>    
        </div>
    );
}
export default LoginItem;