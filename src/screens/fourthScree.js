
import { LogoLinkedin } from 'react-ionicons'
import React,{useState} from 'react'
import '../screens/fourthScreen.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const FourthScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    if (isValidEmail(email)) {
      setEmailError(false);
      // Perform form submission logic here
      setShowSnackbar(true);
      // Reset form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setEmailError(true);
    }
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  return (
   <body style={{background:"#ffd2d2"}} >
    <div className='main2'>
    <div className='container'>
    <div className="contact-form">
      <h1 className='contact'>CONTACT ME</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="social-links">
        
        <a href="https://www.linkedin.com/in/surya-rengadurai-07ab8624b" target="_blank">
          <LogoLinkedin height={5} />
        </a>
      </div>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success">
          Message sent
        </Alert>
      </Snackbar>
    </div>
 
    </div>
</div>
   </body>
  )
}

export default FourthScreen

