import {React,useState} from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
function Login(props) { 

    const data =[{user1:"password1"}, {user2:"password2"}];
    const [user, setuser] = useState("");
    const [password, setpassword] = useState("")
    const handleKeyDown=(e)=> {
        e.preventDefault();
        console.log();
        data.forEach(x=>{if(x[user]===password){
            props.setlogin(false)
        }})
}
    return (<>
        <h2>Login</h2>
        <div className="loginContainer">
            <Form >
                <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label column sm="2">
                        Email
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control onChange={(e)=>{setuser(e.target.value)}} plaintext placeholder="email@example.com" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                    <Form.Label column sm="2">
                        Password
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control  onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Password" />
                    </Col>
                </Form.Group>
                <Button onKeyDown={(e)=>handleKeyDown} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div></>
    )
}

export default Login
