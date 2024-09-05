
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useHistory } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Info } from './Info';
import { Header } from '../Components/Header';
import axios from "axios";
import { url } from '../../Commons/constants';
import Footer from '../Components/Footer';




function ContactUs () {
    const history = useHistory();
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: '',
    });
    const [validated, setValidated] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        const form = e.currentTarget;
        
        if (form.checkValidity() === true) {
            e.preventDefault();
            
            setValidated(true);

            const data = new FormData();
            data.append("fname", form.firstname.value);
            data.append("lname", form.lastname.value);
            data.append("email", form.email.value);
            data.append("message", form.message.value);
            // const data = {
            //     fname: form.firstname.value,
            //     lname: form.lastname.value,
            //     email: form.email.value,
            //     message: form.message.value
            //   }; 

              axios.post(url + "/contactus/", data).then((response) => {
                const result = response.data;
                console.log(result.status);
                console.log(result);
                history.goBack();
                if (result.status === "success") {
                  alert("Message sent sucessfully");
                } else {
                  alert({ api: "Error sending message" });
                }
              });

        } else {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
          
        }

    };

    const handleCloseToast = () => {
        setShowToast(false);
    };

    return (
        <>
        <Header />
        
        <Col md={{ span: 6, offset: 3 }} className='mt-5 mb-5'>
            <h2>Contact Us</h2>
            <hr/>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="validationCustom01">
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                            required
                            name='firstname'
                            type="text"
                            placeholder="First name"
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="validationCustom02">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                            required
                            name='lastname'
                            type="text"
                            placeholder="Last name"
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustomUsername">
                        <Form.Label>Email Address</Form.Label>
                        <InputGroup hasValidation>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                name='email'
                                type="email"
                                placeholder="Email"
                                aria-describedby="inputGroupPrepend"
                                onChange={handleChange}
                                required pattern=".+@gmail\.com"
                            />
                            <Form.Control.Feedback type="invalid">
                                { 'Enter Your Email Address'}
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom03">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            name='message'
                            as="textarea"
                            rows={3}
                            placeholder="Your Message"
                            onChange={handleChange}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please write a message to us.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button id="btn" type="submit">Submit form</Button>
            </Form>
            <ToastContainer position="top-end">
                <Toast bg="success" onClose={handleCloseToast} show={showToast} autohide delay={3000}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Confirmation</strong>
                    </Toast.Header>
                    <Toast.Body className='text-white'>Message Sent!</Toast.Body>
                </Toast>
            </ToastContainer>
        </Col>

        <Container>
           {<Info/>}
        </Container>
        <Footer />
        </>
    );
};

export default ContactUs;