import React from 'react';


// components
import              Cover from '../components/about/Cover';
import GeneralInformation from '../components/about/GenInfo';
import     WorkExperience from '../components/about/WorkExperience';
import          Education from '../components/about/Education';
import              Award from '../components/about/Award';


// images
import coverImage from '../assets/images/cover.jpg';


const About = () => {
    return (
        <React.Fragment>
			<Cover image={coverImage} />

            <GeneralInformation />

            <div className="o-row o-row--divider"></div>

            <WorkExperience />

            <div className="o-row o-row--divider"></div>

            <Education />

            <div className="o-row o-row--divider"></div>

            <Award />

			<div className="o-row o-row--large-empty-space"></div>
        </React.Fragment>
    )
}

export default About;
