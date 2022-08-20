import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = (e) => {
        e.preventDefault()
        const { REACT_APP_PUBLIC_KEY, REACT_APP_TEMPLATE_ID, REACT_APP_SERVICE_ID } = process.env
        const serviceId = `${REACT_APP_SERVICE_ID}`
        const templateId = `${REACT_APP_TEMPLATE_ID}`
        const publicKey = `${REACT_APP_PUBLIC_KEY}`

        const params = {
            name, email, message
        }
        emailjs.send(serviceId, templateId, params, publicKey)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
        setTimeout(() => {
            setEmailSent(false)
        }, 5000);
    }

    return (
        <>
            <h3>Contact<strong className='purple'> Form</strong></h3>
            <Form onSubmit={submit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required autoComplete='off' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} required autoComplete='off' />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={8} placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} autoComplete='off' />
                </Form.Group>
                <Button type="submit">
                    Send Message
                </Button>
                <Form.Group>
                    <Form.Text className={emailSent ? "text-muted" : "invisible"}>
                        Thank you for your message, we will be in touch in no time!
                    </Form.Text>
                </Form.Group>
            </Form>
        </>

    );
};

export default ContactForm;