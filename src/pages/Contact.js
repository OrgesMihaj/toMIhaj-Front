import React from 'react';

import Social from '../components/Social';

const Contact = () => {

    const formData = {
        'name': React.useRef(),
        'email': React.useRef(),
        'message': React.useRef()
    }

    const sendData = () => {
        alert(formData.name.current.value + " ("+ formData.email.current.value +")")
    }

    return (
        <div className="c-contact">

			<div className="o-row">
				<form className="o-form" action="">

		    		<div className="o-form__header">
		    			<h3 className="o-form__title">Contact me</h3>
						<p className="o-form__subtitle">Send me a message and we'll respond as soon as possible.</p>
		    		</div>

					<ul className="o-form__list">
						<li className="o-form__item">
							<input type="text" ref={formData.name} className="o-form__control" placeholder="your name"/>
						</li>

						<li className="o-form__item">
							<input type="email" ref={formData.email} className="o-form__control" placeholder="your email" />
						</li>

						<li className="o-form__item">
							<textarea name="message" ref={formData.message} cols="20" rows="5" className="o-form__control o-form__textarea" placeholder="What's up?"></textarea>
						</li>

						<li className="o-form__item">
							<input type="submit" className="o-form__button" onClick={sendData} value="send" />
						</li>
					</ul>
		        </form>
			</div>

			<div className="o-row">
                <Social />
			</div>

		</div>
    )
}

export default Contact;
