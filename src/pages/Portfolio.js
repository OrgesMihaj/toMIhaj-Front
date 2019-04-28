import React, { useState } from 'react';



const Portfolio = () => {
    const [projects] = useState([
        {
            'id': 1,
            'name': '3handymen',
            'description': '3handymen is renovation company offering sevices such as insulation, painting, stucco, demolition, and drywall. I developed a simple responsive website which is focused on simplicity. The website is rich in animations which draw attention to the information provided.',
            'link': 'https://3handymen.net/#/',
            'categories': ['Motion Design', 'Front-end Development'],
            'image': '3handymen.png'
        },
        {
            'id': 2,
            'name': 'Rootonym',
            'description': 'Rootonym is a cross-word type web game where you have Given root words, short definitions, parts of speech and the number of letters in each word, players work to complete the missing word at two levels.',
            'link': 'https://3handymen.net/#/',
            'categories': ['Front-end Development'],
            'image': 'root.png'
        }
    ]);

    return (
		<div className="c-portfolio">


            {projects.map(project => (

    			<div className="o-row" key={project.id}>

                    {/* Project section starts here */}
                    <div className={(project.id % 2 === 0) ? 'c-project o-text-align--right' : 'c-project'}>

                        <div className="c-project__cover"
                             style={(project.id % 2 === 0) ? {'order': 2} : {}}>

    						<img className="c-project__image" src={"projects/" + project.image} alt={project.name} />

                            {/* display all categories related to this project */}
                            <p className="c-project__categories">
                                {project.categories.map(category => (
                                    <span className="o-badge">{category} </span>
                                ))}
							</p>

    					</div>

                        <div className="c-project__details">
    						<h3 className="c-project__name">{project.name}</h3>

    						<p className="c-project__description">
    							{project.description}

    							<a className="c-project__link" href={project.link}>Visit Site</a>
    						</p>
    					</div>
                    </div>
                    {/* Project section ends here */}


                    <br /><br />

                    <div className="o-row o-row--divider"></div>

                    <br /><br />
    			</div>
            ))}

		</div>
    )
}

export default Portfolio;
