import React, { Component } from 'react';

// image
import  calendar from '../../assets/images/calendar.svg';
import  bulgaria from '../../assets/images/bulgaria.svg';
import   albania from '../../assets/images/albania.svg';

class WorkExperience extends Component {

    constructor() {
        super();

        this.state = {
            experiences: []
        }
    }

    componentDidMount () {
        fetch('https://ancient-waters-95274.herokuapp.com/api/v1/jobs')
            .then((response) => {
                if (response.status !== 200) {
                    console.log("Something went wrong! Status Code:" + response.status);
                    return;
                }

                return response.json();
            }).then(data => {
                this.setState({
                    experiences: data.jobs
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
                        Work <br /> experience
                    </h2>
                </div>

                <div className="o-column">

                    {this.state.experiences.map(experience => (

                        <div className="o-column__row" key={experience.id}>
                            <h2 className="o-column__subtitle">
                                {experience.position}

                                <a href={experience.companyWeb} className="o-badge">{experience.company}</a>
                            </h2>

                            <small className="o-column__description o-column__description--small">
                                <img className="o-icon" src={calendar} alt="Calendar" />
                                {experience.period}

                                <img style={{marginLeft: 25 + 'px'}}
                                     className="o-icon"
                                     src={(experience.flag === 'albania.svg') ? albania : bulgaria}
                                     alt={experience.location} />

                                {experience.location}
                            </small>

                            <br /><br />

                            <p className="o-column__description">
                                {experience.description}
                            </p>
                        </div>

                    ))}

                </div>
            </div>
        )
    }
}


export default WorkExperience;
