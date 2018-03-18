import React, {Component} from 'react';
import classNames from 'classnames';
import Description from "./about/descripion";
import Skills from "./about/skills";
import Facts from "./about/facts";


class About extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
        <section className={classNames('about')}>
            <Description/>
            <Skills/>
            <Facts/>
        </section>
    )
  }
}

export default About;