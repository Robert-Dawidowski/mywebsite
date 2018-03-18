import React, {Component} from 'react';
import classNames from 'classnames';
import ScrollAnimation from 'react-animate-on-scroll';



class Facts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={classNames('row feats-row')} id='facts'>
                <div className={classNames('col-md-6')}>
                    <section>
                        <span className={classNames('icon-facts icon-header')}> </span>
                        <h3>Pure Facts</h3>
                        <ul className={classNames('fact-list')}>
                            <li>
                                <span className={classNames('main-color')}>Education: </span>
                                I got my Engineering degree at the Naval Academy in Gdynia. My final work was about artificial intelligence
                            </li>
                            <li>
                                <span className={classNames('main-color')}>Coding: </span>
                                I am a so-called css ninja. HTML, CSS or JS have no secrets from me. However, I like ReactJS and react native
                            </li>
                            <li>
                                <span className={classNames('main-color')}>Hobbies: </span>
                                I'm a DJ. I love showing the beauty of music in my own way. I'm a fan of board and RPG games. I also love psychological literature,
                                my favourite author is Judith Orloff.
                            </li>
                        </ul>
                    </section>
                </div>
                <div className={classNames('col-md-6 text-center hidden-xs')}>
                    <section>
                        <ScrollAnimation animateIn="bounceInRight" ref={(node) => {
                            this.node = node;
                        }}>
                            <div className={classNames('mine-hobbies')}> </div>
                        </ScrollAnimation>
                    </section>

                </div>
            </div>

        )
    }
}

export default Facts;