import React from 'react';

import Social from '../components/Social';

const Contact = () => {

    const [formData, setFormData] = React.useState({
        'name': "",
        'email': "",
        'message': "",
        'nameError': "",
        'emailError': "",
        'messageError': ""
    });

    const validate = () => {
        let emailError = "";
        let nameError = "";
        let messageError = "";

        if (formData.name.length < 3) nameError = 'Name must contain 3 or more characters.';
        if (formData.message.length < 6) messageError = 'Message must be longer than 6 characters.';
        if (!formData.email.includes('@')) emailError = 'Invalid email.';

        if (emailError) {
            setFormData({
                ...formData,
                'nameError': nameError,
                'messageError': messageError,
                'emailError': emailError
            });

            return false;
        }

        return true;
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name + 'Error']: '',
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const isValid = validate();

        if (isValid) {
            console.log(formData);
        }
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
                            <input type="text" name="name"
                                value={formData.name} onChange={handleChange}
                                className="o-form__control" placeholder="your name"/>

                            {formData.nameError ? (
                                <React.Fragment>
                                    <br /><br />
                                    <p class="o-badge">{formData.nameError}</p>
                                </React.Fragment>
                            ) : null}
						</li>

						<li className="o-form__item">
							<input type="email" name="email"
                                   value={formData.email} onChange={handleChange}
                                   className="o-form__control" placeholder="your email" />

                            {formData.emailError ? (
                                <React.Fragment>
                                    <br /><br />
                                    <p class="o-badge">{formData.emailError}</p>
                                </React.Fragment>
                            ) : null}
						</li>

						<li className="o-form__item">
							<textarea name="message" cols="20" rows="5"
                                      value={formData.message} onChange={handleChange}
                                      className="o-form__control o-form__textarea" placeholder="What's up?"></textarea>

                            <React.Fragment>
                                <br /><br />
                                <p class="o-badge">{formData.messageError}</p>
                            </React.Fragment>
                       </li>

						<li className="o-form__item">
							<input type="submit" className="o-form__button" onClick={handleSubmit} value="send" />
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
