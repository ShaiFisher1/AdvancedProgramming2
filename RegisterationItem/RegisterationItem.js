import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import React, { Component } from 'react';
import './RegisterationItem.css';

export class ReisterationItem extends Component {
    state={
        profileImg:'https://hamiltonrykerit.com/wp-content/uploads/2015/07/blank-user.jpg'
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2) {
                this.setState({profileImg: reader.result})
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }
    render() {
        const {profileImg} = this.state
        return (
            <div>
                <Card className="RegisterationItem-card"> 
                    <Card.Img src="https://media2.clevescene.com/clevescene/imager/u/slideshow/36345264/image2.jpg" />
                    <Card.Body>
                        <div clasName="page">
                            <div class="container" className="container-1">
                                <div class="row">
                                    <div classame="img-holder">
                                        <img src={profileImg} alt="" id="img" className="img"></img>
                                    </div>
                                    <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler}></input>
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
                                        <Form.Control type="username" placeholder="Enter username" />
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
                                        <Form.Control type="password" placeholder="Password" />
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
                                        <Form.Control type="password" placeholder="Confirm Password" />
                                    </div>    
                                    </div>
                                </div>    
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPassword">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-3">
                                            <Form.Label>Display Name</Form.Label>
                                        </div>
                                    <div class="col">
                                        <Form.Control type="password" placeholder="Enter display name" />
                                    </div>    
                                    </div>
                                </div>    
                            </Form.Group>
                            <Form.Text className="text-muted">Already registered? </Form.Text>
                            <a className="LoginItem-link" href="\">Click here</a>
                            <Form.Text className="text-muted"> to login</Form.Text>
                            <Button variant="primary" type="submit" style={{ width: '15rem', display: 'grid' }}>
                                Register
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>    
            </div>
        );
    }
}

export default ReisterationItem;