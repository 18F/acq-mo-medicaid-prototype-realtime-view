import React from 'react';

import Eligibility from './eligibility';
import Coverage from './coverage';

export default function landingPage() {
  return (
    <div>
      <h1>Overview</h1>

      <h2>Eligibility</h2>
      <Eligibility />

      <h2>Coverage</h2>
      <Coverage />
    </div>
  );
};
