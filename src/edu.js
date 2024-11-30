import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import bachelors from './images/bachelors.jpg';
import masters from './images/masters.jpg';

function Edu() {
  const [flipMaster, setFlipMaster] = useState(false);
  const [flipBachelor, setFlipBachelor] = useState(false);
  const [hoverMasterMessage, setHoverMasterMessage] = useState(false);
  const [hoverBachelorMessage, setHoverBachelorMessage] = useState(false);

  return (
    <div>
      <hr />

      {/* Masters */}
      <ReactCardFlip isFlipped={flipMaster} flipDirection="vertical">
        <div onClick={() => setFlipMaster(!flipMaster)} onMouseEnter={() => setHoverMasterMessage(true)} onMouseLeave={() => setHoverMasterMessage(false)} style={{ position: 'relative' }} >
          <img src={masters} alt="Masters of Computer Science" style={{ paddingLeft: '30%', paddingRight: '30%', paddingTop: '1%', paddingBottom: '1%', width: '40%', height: '45%', alignItems: 'center', }} />
          {hoverMasterMessage && (
            <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '5px 10px', borderRadius: '4px', }} >
              Click to Flip
            </div>
          )}
        </div>

        <div onClick={() => setFlipMaster(!flipMaster)} style={{ textAlign: 'center', padding: '10%' }} >
          <p>
            <b>Master of Computer Science</b>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aug. 2022 - Aug. 2024
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Illinois Institute of Technology (Chicago, IL, USA)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPA: 3.0 / 4.0
          </p>
        </div>
      </ReactCardFlip>

      {/* Bachelors */}
      <ReactCardFlip isFlipped={flipBachelor} flipDirection="vertical">
        <div onClick={() => setFlipBachelor(!flipBachelor)} onMouseEnter={() => setHoverBachelorMessage(true)} onMouseLeave={() => setHoverBachelorMessage(false)} style={{ position: 'relative' }} >
          <img src={bachelors} alt="Bachelor of Technology" style={{ paddingLeft: '35%', paddingRight: '35%', paddingTop: '1%', paddingBottom: '1%', width: '30%', height: '50%', alignItems: 'center', }} />
          {hoverBachelorMessage && (
            <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0, 0, 0, 0.7)', color: 'white', padding: '5px 10px', borderRadius: '4px', }} >
              Click to Flip
            </div>
          )}
        </div>

        <div onClick={() => setFlipBachelor(!flipBachelor)} style={{ textAlign: 'center', padding: '10%' }} >
          <p>
            <b>Bachelor of Technology</b>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jun. 2015 - Apr. 2019
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Usha Mittal Institute of Technology (Mumbai, MH, India)
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GPA: 3.3 / 4.0
          </p>
        </div>
      </ReactCardFlip>
    </div>
  );
}

export default Edu;