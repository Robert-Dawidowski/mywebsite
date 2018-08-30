import React, {Component} from 'react';
import classNames from 'classnames';
import logo from '../../images/RD-logo.png';


class NavBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
          condition: false,
          scrollingLock: false,
      };
      this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    toggleClass = () => {
      this.setState({
          condition: !this.state.condition
      });
    };

    handleScroll = () => {

      if (window.innerWidth > 480) {

        if (window.scrollY > 100) {
          this.setState({
            scrollingLock: true
          });
        } else if (window.scrollY < 60) {
          this.setState({
            scrollingLock: false
          });
        }
      } else {
        if (window.scrollY > 80) {
          this.setState({
            scrollingLock: true
          });
        } else if (window.scrollY < 20) {
          this.setState({
            scrollingLock: false
          });
        }
      }
    };

    render() {
        return (

            <nav className={classNames('nav-box')}>
                <div className={classNames('menu-wrapper', this.state.scrollingLock ? "navbar-fixed-top slideDown" : "")}>
                    <div className={classNames('col-lg-4 col-lg-offset-2 col-md-5 col-md-offset-1 col-sm-5 col-xs-12 menu-box')}>
                        <div className={classNames('row')}>
                            <div className={classNames('col-lg-12 col-md-12 col-sm-12 col-xs-12')}>
                                <ul className={classNames('top-logo')}>
                                    <li className={classNames('logo')}>
                                        <img src={logo} className={classNames('logo-img')} alt='RobertDawidowski'/>
                                    </li>
                                    <li className={classNames('text-logo')}>
                                        <p className={classNames('site-name')}>Robert <strong>Dawidowski</strong></p>
                                        <p><strong>FRONT END</strong> DEVELOPER</p>
                                    </li>
                                </ul>
                                <div className={classNames('menu-btn-box border-radius', this.state.condition ? "open" : "")} onClick={this.toggleClass}>
                                    <div className={classNames('nav-icon')}>
                                        <span> </span>
                                        <span> </span>
                                        <span> </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames('col-lg-6 col-md-6 col-sm-7 col-xs-12 menu-right')}>
                        <div className={classNames('row')}>
                            <ul id={'menu'} className={classNames('menu-list', this.state.condition ? "open" : "")}>
                                <li className={classNames('menu-item')}>
                                    <a href='#about-me' className={classNames('site-nav')}>
                                        About Me
                                    </a>
                                </li>
                                <li className={classNames('menu-item')}>
                                    <a href='#tools' className={classNames('site-nav')}>
                                        Tools
                                    </a>
                                </li>
                                <li className={classNames('menu-item')}>
                                    <a href='#experience' className={classNames('site-nav')}>
                                        Experience
                                    </a>
                                </li>
                                <li className={classNames('menu-item')}>
                                    <a href='#contact' className={classNames('site-nav')}>
                                        Contact Me
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;