import React from 'react'

function Contact(){
    return(
        <>
        <section id="three">
                <h2 className='major'>Get In Touch</h2>
                <p className='margin-bottom'>If you would like to find out more about how we can help you, please give us a call or drop us an email.</p>
                <p>We welcome your comments and suggestions about this website and/or any other issues that you wish to raise.</p>
                <div className="row">
                    <div className="col-8 col-12-small">
                        <form method="post" action="#">
                            <div className="row gtr-uniform gtr-50">
                                <div className="col-6 col-12-xsmall"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                <div className="col-6 col-12-xsmall"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                <div className="col-12"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                            </div>
                        </form>
                        <ul className="actions">
                            <li><input type="submit" value="Send Message" /></li>
                        </ul>
                    </div>
                    <div className="col-4 col-12-small">
                        <ul className="labeled-icons">
                            <li>
                                <h3 className="icon solid fa-home"><span className="label">Address</span></h3>
                                161 alcock crescent.<br />
                                Crayford<br />
                                Dartford, kent DA1 4FW<br />
                                United Kingdom (UK)
                            </li>
                            <li>
                                <h3 className="icon solid fa-mobile-alt"><span className="label">Phone</span></h3>
                                +44-7778775953‬
                            </li>
                            <li>
                                <h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
                                <a href="mailto:chanchalpsoni@gmail.com" target="#">info@mostak.co.uk</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;