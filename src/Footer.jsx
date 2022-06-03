import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return ( 
  <div className='footer-container'>
      <section className = 'footer-subscription'>
        <p className= 'footer-subscription-heading'>
            Creativity is endless
        </p>
        <p className= 'footer-subscription-text'>
            Join us for more information
        </p>
        <div className='input-area'>
            <form>
                <input type="email" name='email' placeholder='Your Email' className='footer-input'/>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
    </section>  
    <div className='footer-link'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to ='/sign-up'> How it works </Link>
                <Link to = '/'>Test</Link>
                <Link to='/'>Careers</Link>
                <Link to='/'>Investors</Link>
                <Link to='/'>Terms of Service</Link>
            </div>
        </div>
    </div>
    <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to ='/'className='social-logo'>
                    LOGO <i className='fab fa-typo3'>
                    </i>
                </Link>
            </div>
            <small className='website-rights'>Websites right</small>
            <div className='social-icons'>
                <Link className='social-icon-link facebook'
                    to ='/'
                    target = '_blank'
                    aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f' />
                </Link>
                <Link className='social-icon-link instagram'
                    to ='/'
                    target = '_blank'
                    aria-label='Instagram'
                    >
                        <i className='fab fa-instagram' />
                </Link>
            </div>
        </div>
    </section>
  </div>
  );
}

export default Footer;