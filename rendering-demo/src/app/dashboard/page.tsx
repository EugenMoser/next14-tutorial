'use client';
import { useState } from 'react';

import { log } from 'console';

interface DashboardProps {}

function Dashboard({}: DashboardProps): JSX.Element {
  console.log('Dashboard client Compoenent');
  const [name, setName] = useState<string>('');
  return (
    <>
      <h1>Dashboard page</h1>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>The name is {name}</p>
    </>
  );
}

export default Dashboard;
