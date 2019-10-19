import React from 'react'
import PropTypes from 'prop-types'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-diamond"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>HI. I'm Nursoltan</h1>
        <p>
          Ruby on Rails developer. Problem Solver. Life long Learner
          <br />
        </p>
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/Nursoltan_S"
              className="icon fa-twitter"
              target="__blank"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/nursoltan-s"
              className="icon fa-github"
              target="__blank"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/10302548/nursoltan-saipolda"
              className="icon fa-stack-overflow"
              target="__blank"
            >
              <span className="label">Stackoverflow</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100010840962859"
              className="icon fa-facebook"
              target="__blank"
            >
              <span className="label">Facebook</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('blog')
            }}
          >
            Blog
          </a>
        </li>
        <li>
          <a
            href="javascript:;"
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
