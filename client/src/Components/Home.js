import React from 'react';
import '../Styles/Home.css';

function Home() {
  const handlePlanSelect = (plan) => {
    if (plan === 'Basic') {
      alert('You have selected the Basic Plan. You will have access to all news.');
    } else if (plan === 'Pro') {
      alert('You have selected the Pro Plan. You will have access to top news and can save articles.');
    } else if (plan === 'Ultimate') {
      alert('You have selected the Ultimate Plan. You will have access to top news, can save articles, and more.');
    }
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to NewsApp!</h1>
      <div className="plan-container">
        <div className="plan-card">
          <img src="/path/to/basic-image.jpg" alt="Basic Plan" />
          <h2>Basic</h2>
          <p>2 Audio Files</p>
          <p>$ 00.00</p>
          <button onClick={() => handlePlanSelect('Basic')}>Choose Plan</button>
        </div>
        <div className="plan-card">
          <img src="https://www.vecteezy.com/png/24724631-a-happy-smiling-young-college-student-with-a-book-in-hand-isolated-on-a-transparent-background-generative-ai" alt="Pro Plan" />
          <h2>Pro</h2>
          <p>10 Audio Files</p>
          <p>$ 24.99</p>
          <button onClick={() => handlePlanSelect('Pro')}>Choose Plan</button>
        </div>
        <div className="plan-card">
          <img src="/path/to/ultimate-image.jpg" alt="Ultimate Plan" />
          <h2>Ultimate</h2>
          <p>50 Audio Files</p>
          <p>$ 99.99</p>
          <button onClick={() => handlePlanSelect('Ultimate')}>Choose Plan</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
