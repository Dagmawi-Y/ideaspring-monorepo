"use client"
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaMoneyBillAlt, FaHandHoldingUsd, FaEnvelope, FaQuestionCircle, FaCaretDown, FaUserCircle } from 'react-icons/fa';
import styles from './style.css'; // Assuming style.css is your CSS file
import { BiMoney,BiLineChart, BiEnvelope, BiCoin, BiChevronDown, BiInfoCircle,BiCoinStack } from 'react-icons/bi';

export default function Home() {
  return (
    <div className="" style={{marginBottom:"100px"}}>
      <Head>
        <title>Navbar Example</title>
        <meta name="description" content="Navbar Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={`navbar ${styles.sticky}`}> {/* Apply 'sticky' class from styles.css */}
        <div className="logoContainer">
          <Image src="/mlogo.png" alt="Logo" width={200} height={95} />
        </div>
      </nav>
    </div>
  );
}
