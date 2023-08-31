import React from 'react'
import './section.css'
import { Link } from 'react-router-dom';

export default function Section({ list }) {
    return (
      <div className="section-container">
        {list.map((i) => (
          <Link to={`${i.pathName}`}>
            {/* <div className="section-item" onClick={() => onClickFunction(i.gallery)}> */}
            <div className="section-item">
              <img src={i.coverImg} alt={i.name} />
              <p>{i.name}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }