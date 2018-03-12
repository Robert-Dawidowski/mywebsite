import React, {Component} from 'react';
import classNames from 'classnames';

class SocialNav extends Component {

    render() {
        return(
            <nav className={classNames('social-nav')}>
                <div className={classNames('social-wrapper')}>
                    <ul className={classNames('nav animated flipInX')}>
                        <li>
                            <a className={classNames('social-fb')} href='https://www.facebook.com/robert.da.7' rel="noopener noreferrer" target='_blank'>
                                <span className={classNames('facebook')}> </span>
                            </a>
                        </li>
                        <li>
                            <a className={classNames('social-linkedin')} href='https://www.linkedin.com/in/robert-dawidowski' rel="noopener noreferrer" target='_blank'>
                                <span className={classNames('linkedin')}> </span>
                            </a>
                        </li>
                        <li>
                            <a className={classNames('social-github')} href='https://github.com/Robert-Dawidowski' rel="noopener noreferrer" target='_blank'>
                                <span className={classNames('github')}> </span>
                            </a>
                        </li>
                        <li>
                            <a className={classNames('social-email')} href='mailto:dawidowski.robert@gmail.com'>
                                <span className={classNames('mail')}> </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default SocialNav;