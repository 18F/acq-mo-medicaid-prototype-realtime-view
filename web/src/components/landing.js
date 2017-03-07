import React from 'react';

import Eligibility from './eligibility';
import Coverage from './coverage';

export default function landingPage() {
  return (
    <div className="landing-page">
      <h1>Overview</h1>

      <section className="landing-component">
        <h2>Eligibility</h2>
        <Eligibility />
      </section>

      <section className="landing-component">
        <h2>Coverage</h2>
        <Coverage />
      </section>
    </div>
  );
}
