import React, { Component } from 'react';

import Icon from './Link/Icon/Icon';
import Link from './Link/Link';

// import { GoMarkGithub } from 'react-icons/go';
// import { IconContext } from 'react-icons';
import SVG from 'react-inlinesvg';

import github from '../../assets/imgs/github.svg';
import twitter from '../../assets/imgs/twitter.svg';
import linkedin from '../../assets/imgs/linkedin.svg';
import avatar from '../../assets/imgs/avatar.jpg';

import './Navbar.css';

class Navbar extends Component {
  state = {
    icons: [
      {
        name: 'github',
        style: {},
        icon: <SVG src={github} className="icon icon--github" />,
        href: 'https://github.com/mhijack',
      },
      {
        name: 'twitter',
        style: {},
        icon: <SVG src={twitter} className="icon icon--twitter" />,
        href: 'https://twitter.com/jianyuan94',
      },
      {
        name: 'linkedin',
        style: {},
        icon: <SVG src={linkedin} className="icon icon--twitter" />,
        href: 'https://www.linkedin.com/in/jianyuan-chen',
      },
      // {
      //     name: 'avatar',
      //     style: {
      //         borderRadius: '10rem'
      //     },
      //     href: '/'
      // }
    ],
  };

  render() {
    const icons = this.state.icons.map((icon, index) => {
      return (
        <Link className={`link ${icon.name}`} href={icon.href} key={index}>
          {icon.icon}
        </Link>
      );
    });

    return (
      <div className="nav">
        <div className="navInnerWrapper">{icons}</div>
      </div>
    );
  }
}

export default Navbar;
