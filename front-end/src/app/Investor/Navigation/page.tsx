"use client"
import Head from 'next/head';
import './style.css';
import { useState } from 'react';
import MyPortfolio from "../myPortfolio/page"
import Search from "../InvestorFirstPage/page"
import Explore from "../Explore/page"
import Match from "../Match/page"
export default function Home() {
  const [activeTab, setActiveTab] = useState('Explore');

  return (
    <div className="container6">
      <Head>
        <title>Navigation Bar Page</title>
        <meta name="description" content="Page with navigation bar" />
      </Head>

      <main className="main">
      <nav className="navbar2 sticky">
      <div className="nav-links">
            {['My Portfolio', 'My Matches', 'Explore',"Search"].map(tab => (
              <a
                key={tab}
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </a>
            ))}
          </div>
        </nav>

        <div className="active-tab-content">
          {activeTab === 'My Portfolio' && (
            <MyPortfolio/>
          )}
          {activeTab === 'My Matches' && (
            <Match/>
          )}
          {activeTab === 'Explore' && (
            <Explore/>
          )}
          {activeTab === 'Search' && (
            <Search/>
          )}

        </div>
      </main>
    </div>
  );
}