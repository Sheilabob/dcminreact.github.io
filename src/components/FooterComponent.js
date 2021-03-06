import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">             
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/directory'>Classes</Link></li>
                            <li><Link to='/aboutus'>About</Link></li>
                            <li><Link to='/resources'>Resources</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a> 
                    </div>
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+14352592985"><i className="fa fa-phone" /> 1-435-259-2985</a><br />
                        <a role="button" className="btn btn-link" href="mailto:smstrahan@gmail.com"><i className="fa fa-envelope-o" /> smstrahan@gmail.com</a>

                        <iframe width="250" height="175" loading="lazy" allowfullscreen
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJc4bl6frhR4cRgSbPcJx1bOI&key=AIzaSyCkHxeFNcX0PsKqpLjq7-zi2KRKwkJqx5Q"></iframe>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;