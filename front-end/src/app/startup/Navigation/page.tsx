"use client"
import Head from 'next/head';
import './style.css';
import { useState } from 'react';
import MyPitchs from "../myPitch/page"
import MyInvestor from "../MyInvestor/page"
import InvestorSearch from "../../Investor/Forms/page"
import Chat from "../../chat/page"
export default function Home() {
  const [activeTab, setActiveTab] = useState('My Pitches');

  return (
    <div className="container6">
      <Head>
        <title>Navigation Bar Page</title>
        <meta name="description" content="Page with navigation bar" />
      </Head>

      <main className="main">
      <nav className="navbar2 sticky">
      <div className="nav-links">
            {['My Pitches', 'My Investors', 'Investor Search',"Messages"].map(tab => (
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

        {/* Display a sentence based on the active tab */}
        <div className="active-tab-content">
          {activeTab === 'My Pitches' && (
            <MyPitchs/>
          )}
          {activeTab === 'My Investors' && (
            <MyInvestor/>
          )}
          {activeTab === 'Investor Search' && (
            <InvestorSearch/>
          )}
          {activeTab === 'Messages' && (
            <Chat/>
          )}

        </div>
      </main>
    </div>
  );
}