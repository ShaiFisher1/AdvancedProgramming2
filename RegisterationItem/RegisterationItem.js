import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import React, { Component } from 'react';
import './RegisterationItem.css';

export class ReisterationItem extends Component {
    constructor (props) {
        super(props);
        this.state = {
          username: '',
          password: '',
          confirmPassword: '',
          nickname: '',
          formErrors: {username: '', password: '', confirmPassword: ''},
          uusernameValid: false,
          passwordValid: false,
          formValid: false,
          profileImg:'https://hamiltonrykerit.com/wp-content/uploads/2015/07/blank-user.jpg'
        }
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
                    <Card.Img className="card-image" src="https://media2.clevescene.com/clevescene/imager/u/slideshow/36345264/image2.jpg" />
                    <Card.Body>
                        <div className="page">
                            <div class="container" className="container-1">
                                <div class="row">
                                    <div className="img-holder" required>
                                        <img src={profileImg} alt="" id="img" className="img" required></img>
                                    </div>
                                    <input type="file" name="image-upload" id="input" accept="image/*" onChange={this.imageHandler} required></input>
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
                                        <Form.Control type="username" placeholder="Enter username" required/>
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
                                        <Form.Control type="password" placeholder="Password" required/>
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
                                        <Form.Control type="password" placeholder="Confirm Password" required/>
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
                                        <Form.Control type="username" placeholder="Enter nickname" required/>
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