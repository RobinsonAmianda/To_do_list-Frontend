import { Link } from 'react-router-dom';

import welcome from '../images/welcome.jpeg'
import '../Styling/WelcomePage.css'


const WelcomePage = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="heading">Welcome to task manager</h1>
        <br />
        <p className="description">Get tasks done quicker in a well managed and organised manner</p>
        <img src={welcome} alt="Office Snapshot" className="office-image" />
        <Link to="/login" className="link login-link">Login</Link>
        <Link to="/signup" className="link signup-link">Create account</Link>
      </div>
    </div>
  );
};

export default WelcomePage;