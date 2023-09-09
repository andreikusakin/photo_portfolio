import React from 'react'
import './section.css'
import { Link } from 'react-router-dom';


export default function Section({ list }) {
    return (
      <div className="section">
        <div
          style={{
            backgroundColor: "rgb(255,255,255)",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "-1",
          }}
        
        ></div>
        <div className='grid-container'>

        {list.map((i) => (
          <Link key={i.pathName} to={`${i.pathName}`} onClick={() => window.scrollTo(0, 0)}>
            <div className="section-item">
              <img src={i.coverImg} alt={i.name} />
              <p>{i.name}</p>
            </div>
          </Link>
        ))}
      </div>
      </div>
    );
  }