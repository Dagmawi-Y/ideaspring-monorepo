import Head from 'next/head';
import Image from 'next/image';
import "./style.css"
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>McKenzie Business School</title>
        <meta name="description" content="McKenzie Business School Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <img src="/mount.jpg" alt="banner" style={{width:"100%",height:"200px"}} />

      <nav className="nav">
        <ul>
          <li className="active"><a href='#Overview'>Overview</a></li>
          <li><a href="#Highlights">Highlights</a></li>
          <li><a href='#Short'>Short Summary</a></li>
          <li>Documents</li>
        </ul>
        <div className="buttons">
          <button className="getStarted">Get Started</button>
        </div>
      </nav>

      <div className="content">
        <div className="warning">
          <p>The content of this promotion has not been approved by an authorised person within the meaning of the Financial Services and Markets Act 2000. Reliance on this promotion for the purpose of engaging in any investment activity may expose an individual to a significant risk of losing all of the property or other assets invested. Investors should carry out their own due diligence and take professional advice where necessary.</p>
        </div>

        <div className="mainContent" id='Short'>
          <div className="summary">
            <h2>Short Summary</h2>
            <p>Launching South East Asia's first and most profitable practical business school, focused solely on business owners, with a groundbreaking plan to be the first in the country to list publicly. A proven EMBA course founded 5 years ago. Website is LIVE ✅</p>
          </div>

          <div className="highlights" id="Highlights">
            <h2>Highlights</h2>
            <ul>
              <li><strong>Practical Focus:</strong> EMBA courses emphasize hands-on, real-world training.</li>
              <li><strong>Experienced Leadership:</strong> Founder and main lecturer with extensive expertise.</li>
              <li><strong>Proven Success:</strong> EMBA program initially designed for Gah Hong Precision.</li>
              <li><strong>Ambitious Objectives:</strong> Help 10,000 SMEs reach 100 million in revenue.</li>
              <li><strong>Pioneering Vision:</strong> Aim to be the first listed business school in SEA.</li>
            </ul>
          </div>
        </div>

        <aside className="sidebar">
          <h3 id="Overview">Overview</h3>
          <table>
            <tbody>
              <tr>
                <td>Target</td>
                <td>150,000 Birr</td>
              </tr>
              <tr>
                <td>Minimum</td>
                <td>1,000 Birr</td>
              </tr>
              <tr>
                <td>Investment Raised</td>
                <td>4,000 Birr</td>
              </tr>
              <tr>
                <td>Previous Rounds</td>
                <td>0 Birr</td>
              </tr>
              <tr>
                <td>Stage</td>
                <td>MVP/Finished Product</td>
              </tr>
              <tr>
                <td>Investor Role</td>
                <td>Silent</td>
              </tr>
            </tbody>
          </table>
          <div className="questionBox">
            <p>Ask a question</p>
            <button>Ask a question</button>
          </div>
        </aside>
      </div>
    </div>
  );
}