import React from 'react';

// images
import albania from '../../assets/images/albania.svg';
import bulgaria from '../../assets/images/bulgaria.svg';



const GeneralInformation = () => {
    return (
        <div className="o-row">

			<div className="o-column">
				<h2 className="o-column__title">
					About
				</h2>
			</div>

			<div className="o-column">
				<div className="o-column__description o-column__description--medium">
					<p>
						My name is <a className="o-column_link" href="index.html">Orges Mihaj</a>.
                        I was born and raised in <img className="o-icon" src={albania} alt="Albania" />
                    Albania and currently, I study in <img className="o-icon" src={bulgaria} alt="Bulgaria" />
                        Bulgaria. Since I was a child I’ve always been attracted to new technology. I’m passionate about creating websites...
					</p>
				</div>
			</div>

        </div>
    )
}

export default GeneralInformation;
