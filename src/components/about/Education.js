import React, { Component } from 'react';

// image
import  calendar from '../../assets/images/calendar.svg';
import  bulgaria from '../../assets/images/bulgaria.svg';
import   albania from '../../assets/images/albania.svg';


class Education extends Component {

    constructor() {
        super();

        this.state = {
            educations: []
        }
    }

    componentDidMount () {
        fetch('https://ancient-waters-95274.herokuapp.com/api/v1/schools')
            .then((response) => {
                if (response.status !== 200) {
                    console.log("Something went wrong! Status Code:" + response.status);
                    return;
                }

                return response.json();
            }).then(data => {
                this.setState({
                    educations: data.schools
                });
            }).catch(error => {
                console.log(error);
            });
    }


    render () {
        return (
            <div className="o-row">

                <div className="o-column">
                    <h2 className="o-column__title">
                        Education
                    </h2>
                </div>

                <div className="o-column">
                    {this.state.educations.map(education => (

                        <div className="o-column__row" key={education.id}>

                            <h2 className="o-column__subtitle">
                                {education.study}

                                <a href="https://www.aubg.edu/" className="o-badge">
                                    {education.institution}
                                </a>
                            </h2>

                            <small className="o-column__description o-column__description--small">
                                <img className="o-icon" src={calendar} alt="Calendar" />
                                {education.period}

                                <img style={{marginLeft: 25 + 'px'}}
                                     className="o-icon"
                                     src={(education.flag === 'albania.svg') ? albania : bulgaria}
                                     alt={education.location} />
                                {education.location}
                            </small>

                        </div>
                    ))}

                </div>
            </div>
        )
    }
};

export default Education;
