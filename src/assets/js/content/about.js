import React, {Component} from 'react';
import classNames from 'classnames';
import ScrollAnimation from 'react-animate-on-scroll';



class About extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className={classNames('row feats-row')} id='about-me'>
        <h2>About me</h2>
        <div className={classNames('col-md-6')}>
          <section>
            <span className={classNames('icon-about icon-header')}> </span>
            <h3>Who I Am</h3>
            <p>
              Hallo, my name is Robert Dawidowski. I am a Frontend Engineer working for
              <a href='https://bpol.net/' target='_blank' rel="noopener noreferrer"> Bpol Software House </a>
              in Warsaw. I also hold a Engineering degree in computer science. Since the age of 16, I have delved into numerous programming languages.
              I was interested in the frontend, because I love the idea that I can be responsible for the appearance of a tiny part of our world.
            </p>
          </section>
        </div>
        <div className={classNames('col-md-6')}>
            <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft" ref={(node) => { this.node = node; }}>
                    <div className={classNames('mine-img')}> </div>
            </ScrollAnimation>
        </div>
      </div>
    )
  }
}

export default About;