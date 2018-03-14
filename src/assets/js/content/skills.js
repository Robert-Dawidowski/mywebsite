import React, {Component} from 'react';
import classNames from 'classnames';

class Skills extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={classNames('row')} id='skills'>
                <h2>Skills</h2>
                <div className={classNames('col-md-6')}>
                   <div className={classNames('skills-hart')}>
                       <div id='my-canvas-container'>
                           <canvas id='my-canvas' width={500} height={500}>
                               <ul>
                                   <li>
                                       <a>HTML 5</a>
                                   </li>
                                   <li>
                                       <a>ReactJS</a>
                                   </li>
                                   <li>
                                       <a>jQuery</a>
                                   </li>
                                   <li>
                                       <a>CSS 3</a>
                                   </li>
                                   <li>
                                       <a>SASS</a>
                                   </li>
                                   <li>
                                       <a>Bootstrap</a>
                                   </li>
                                   <li>
                                       <a>npm</a>
                                   </li>
                                   <li>
                                       <a>Git</a>
                                   </li>
                                   <li>
                                       <a>JavaScript</a>
                                   </li>
                                   <li>
                                       <a>RWD</a>
                                   </li>
                                   <li>
                                       <a>AJAX</a>
                                   </li>
                                   <li>
                                       <a>JSON</a>
                                   </li>
                                   <li>
                                       <a>TWIG</a>
                                   </li>
                                   <li>
                                       <a>Symfony</a>
                                   </li>
                                   <li>
                                       <a>Magento</a>
                                   </li>
                                   <li>
                                       <a>Photoshop</a>
                                   </li>
                                   <li>
                                       <a>OS X</a>
                                   </li>
                                   <li>
                                       <a>Linux</a>
                                   </li>
                                   <li>
                                       <a>Scrum</a>
                                   </li>
                                   <li>
                                       <a>Gulp</a>
                                   </li>
                                   <li>
                                       <a>Webpack</a>
                                   </li>
                                   <li>
                                       <a>MariaDB</a>
                                   </li>
                               </ul>
                           </canvas>
                       </div>
                   </div>
                </div>
                <div className={classNames('col-md-6')}>
                    <section>
                        <span className={classNames('icon-skills icon-header')}> </span>
                        <h3>My skills</h3>
                        <p>My main area in which I have experience is front-end development and everything related with this side of web.
                            In particular, I'm thinking about HTML, CSS and JavaScript.
                            I'm also developing small and medium single-page web applications (ReactJS), landing pages
                            creating custom functions, animations and just leyout coding.</p>
                        <p>If you would like to know more, please check <br/>
                            my <a href='https://www.linkedin.com/in/robert-dawidowski/' target='_blank' rel="noopener noreferrer">linkedIn</a> profile.</p>
                    </section>
                </div>
            </div>
        )
    }
}

export default Skills