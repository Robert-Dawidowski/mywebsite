import React, {Component} from 'react';
import classNames from 'classnames';
import NavBar from '../header/navbar';
import SocialNav from '../header/socialNav';

class Top extends Component {

    render() {
        return (
            <div className={classNames('row')}>
                <NavBar/>
                <div className={classNames('col-lg-12')}>
                    <div className={classNames('row')}>
                        <div className={classNames('hero-wrapper')}>
                            <div className={classNames('home-header typing')}>
                                <span className={classNames('sub-title')}>Welcome to my digital world. I'm Robert. </span>
                                <span className={classNames('tw-caret')}>|</span>
                                <h1 className={classNames('front-title')}>Front End Developer & Web Designer</h1>
                            </div>
                            <SocialNav/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Top;