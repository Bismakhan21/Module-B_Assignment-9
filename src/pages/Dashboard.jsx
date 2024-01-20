import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="container3">
        <h2 className='headding2'>Welcome to Dashboard</h2>

        <button><Link to={'/'}>Back</Link> </button>
    </div>
    
  )
}

export default Dashboard