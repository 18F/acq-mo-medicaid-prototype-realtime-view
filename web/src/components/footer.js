/* eslint no-script-url: 0 */
// [TODO] This rule is good and should be enabled when actual
// links are identified.  In the meantime, the javascript:void();
// pattern is a good one for making links that the browser doesn't
// try to navigate through.

import React from 'react';

export default function footer() {
  return (
    <footer className="usa-footer usa-footer-slim" role="contentinfo">
      <div className="usa-grid usa-footer-return-to-top">
        <a href="javascript:void(0);">Return to top</a>
      </div>

      <div className="usa-footer-primary-section">
        <div className="usa-grid-full">
          <nav className="usa-footer-nav usa-width-two-thirds">
            <ul className="usa-unstyled-list">
              <li className="usa-width-one-fourth usa-footer-primary-content">
                <a className="usa-footer-primary-link" href="javascript:void(0);">Primary link</a>
              </li>
              <li className="usa-width-one-fourth usa-footer-primary-content">
                <a className="usa-footer-primary-link" href="javascript:void(0);">Primary link</a>
              </li>
              <li className="usa-width-one-fourth usa-footer-primary-content">
                <a className="usa-footer-primary-link" href="javascript:void(0);">Primary link</a>
              </li>
              <li className="usa-width-one-fourth usa-footer-primary-content">
                <a className="usa-footer-primary-link" href="javascript:void(0);">Primary link</a>
              </li>
            </ul>
          </nav>
          <div className="usa-width-one-third">
            <div className="usa-footer-primary-content usa-footer-contact_info">
              <p>(555) THE-PHON</p>
            </div>
            <div className="usa-footer-primary-content usa-footer-contact_info">
              <a href="mailto:info@agency.gov">info@agency.gov</a>
            </div>
          </div>
        </div>
      </div>

      <div className="usa-footer-secondary_section">
        <div className="usa-grid">
          <div className="usa-footer-logo">
            <img className="usa-footer-slim-logo-img" src="/images/modss.png" alt="missouri department of social services logo" />
            <h3 className="usa-footer-slim-logo-heading">Missouri Department of Social Services</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}
