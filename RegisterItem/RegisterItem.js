import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import './RegisterItem.css';


function RegisterItem(){
    return (
        <div>
            <Card className="RegisterItem-card"> 
                <Card.Img src="https://media2.clevescene.com/clevescene/imager/u/slideshow/36345264/image2.jpg" />
                <Card.Body>
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
                        <Form.Text className="text-muted">Not registered? </Form.Text>
                        <a className="RegisterItem-link" href="https://reactjs.org">Click here</a>
                        <Form.Text className="text-muted"> to register</Form.Text>
                        <Button variant="primary" type="submit" style={{ width: '15rem', display: 'grid' }}>
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>    
        </div>
    );
}

export default RegisterItem;