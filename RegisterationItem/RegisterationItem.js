import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Link, useNavigate  } from 'react-router-dom';
import './RegisterationItem.css';
import { addUser } from'../UsersData/UsersData.js';

function RegisterationItem() {
    let [profileImg, setProfileImg] = useState('https://hamiltonrykerit.com/wp-content/uploads/2015/07/blank-user.jpg')
    function imageHandler(e) {
        setProfileImg(URL.createObjectURL(e.target.files[0]))
    }

    let navigate = useNavigate()

    function handlerButton() {
        var username = document.getElementById("Username").value;
        var password = document.getElementById("Password").value;
        var nickname = document.getElementById("Nickname").value;
        var confirm = document.getElementById("Confirm").value;
        if (profileImg === 'https://hamiltonrykerit.com/wp-content/uploads/2015/07/blank-user.jpg') {
            alert("Please choose a profile picture.");
            return;
        }
        if (username.length == 0) {
            alert("Please fill out a username.");
            return;
        }
        if (nickname.length == 0) {
            alert("Please fill out a nickname.");
            return;
        }
        if (password.length < 8) {
            alert("Password should contain at least 8 characters.");
            return;
        }
        if (password != confirm) {
            alert("The password confirmarion does not match.");
            return;
        }
        if (!(/\d/.test(password)) || !(/[a-zA-Z]/.test(password))) {
            alert("Password must contain letters and numbers.");
            return;
        }
        addUser(username, password, nickname, profileImg, null);
        alert("registered");
        navigate("/")
        return;
    }
    return (
        <div>
            <Card className="RegisterationItem-card"> 
                <Card.Img className="card-image" src="https://media2.clevescene.com/clevescene/imager/u/slideshow/36345264/image2.jpg" />
                <Card.Body>
                    <div className="page">
                        <div class="container" className="container-1">
                            <div class="row">
                                <div className="img-holder" required>
                                    <img src={profileImg} alt="" id="img" className="img"></img>
                                </div>
                                <input type="file" name="image-upload" id="input" accept="image/*" onChange={imageHandler}></input>
                                <div className="label">
                                    <label htmlFor="input" className="image-upload">
                                        <i className="material-icons">add_photo_alternate</i>
                                            Choose your photo
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <div class="container">
                            <div class="row">
                                <div class="col-3">
                                    <Form.Label>Username</Form.Label>
                                </div>
                                <div class="col">
                                    <input type="username" className="form-control" id="Username" placeholder="Enter username" required/>
                                </div>
                            </div>
                          </div>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <div class="container">
                                <div class="row">
                                    <div class="col-3">
                                        <Form.Label>Password</Form.Label>
                                    </div>
                                <div class="col">
                                    <input type="password" className="form-control" id="Password" placeholder="Password" required/>
                                </div>    
                                </div>
                            </div>    
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <div class="container">
                                <div class="row">
                                    <div class="col-3">
                                        <Form.Label>Confirm password</Form.Label>
                                    </div>
                                <div class="col">
                                    <input type="password" className="form-control" id="Confirm" placeholder="Confirm Password" required/>
                                </div>    
                                </div>
                            </div>    
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <div class="container">
                                <div class="row">
                                    <div class="col-3">
                                        <Form.Label>Nickname</Form.Label>
                                    </div>
                                <div class="col">
                                    <input type="username" className="form-control" id="Nickname" placeholder="Enter nickname" required/>
                                </div>    
                                </div>
                            </div>    
                        </Form.Group>
                        <Form.Text className="text-muted">Already registered? </Form.Text>
                        <a className="LoginItem-link" href="\">Click here</a>
                        <Form.Text className="text-muted"> to login</Form.Text>
                        <Button variant="primary" type="submit" style={{ width: '15rem', display: 'grid' }} onClick={handlerButton}>
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>    
        </div>
    );
}       
export default RegisterationItem;