import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

function getNavigationLinks(user) {
  if (user) {
    return (
      <nav role="navigation" className="usa-nav">
        <button className="usa-nav-close">
          <img src="/assets/img/close.svg" alt="close" />
        </button>
        <ul className="usa-nav-primary usa-accordion">
          <li>
            <Link className="usa-nav-link" to="/eligibility">
              <span>Eligibility</span>
            </Link>
          </li>
          <li>
            <Link className="usa-nav-link" to="/coverage">
              <span>Coverage</span>
            </Link>
          </li>
          {
          // <li>
          //   <button className="
          //   usa-accordion-button usa-nav-link" aria-expanded="false" aria-controls="side-nav-1">
          //     <span>Coverage</span>
          //   </button>
          //   <ul id="side-nav-1" className="usa-nav-submenu">
          //     <li>
          //       <a href="#">Subsection title</a>
          //     </li>
          //     <li>
          //       <a href="#">Subsection title</a>
          //     </li>
          //     <li>
          //       <a href="#">Subsection title</a>
          //     </li>
          //   </ul>
          // </li>
          }
          <li>
            <Link className="usa-nav-link" to="/payments">
              <span>Payments</span>
            </Link>
          </li>

          <li>
            <Link className="usa-nav-link" to="/logout">
              <span>Logout</span>
            </Link>
          </li>
        </ul>
        {
        // <form className="usa-search usa-search-small">
        //   <div role="search">
        //     <label className="usa-sr-only" htmlFor="search-field-small">Search small</label>
        //     <input id="search-field-small" type="search" name="search" />
        //     <button type="submit">
        //       <span className="usa-sr-only">Search</span>
        //     </button>
        //   </div>
        // </form>
        }
      </nav>
    );
  }
  return null;
}

function header(props) {
  return (
    <header className="usa-header usa-header-basic main" role="banner">
      <div className="usa-banner">
        <div className="usa-accordion">
          <header className="usa-banner-header">
            <div className="usa-grid usa-banner-inner">
              <p>This website is a prototype</p>
            </div>
          </header>
        </div>
      </div>
      <div className="usa-nav-container">
        <div className="usa-navbar">
          <button className="usa-menu-btn">Menu</button>
          <div className="usa-logo" id="logo">
            <em className="usa-logo-text">
              <Link to="/" title="Home" aria-label="Home"><img src="/images/modss.png" alt="" />MO HealthNet</Link>
            </em>
          </div>
        </div>
        {getNavigationLinks(props.user)}
      </div>
    </header>
  );
}

header.propTypes = {
  user: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user !== false
  };
}

export default connect(mapStateToProps)(header);
