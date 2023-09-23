import './projects.css';
import React from 'react'
import pro1 from '../assets/portpic4.jpg'
import { NavLink } from 'react-router-dom';


function ProCard(props) {
    const {title, details, source, projectImage} =props.data;
  return (
    <>
            <div className='proj-card'>
                <img src={projectImage} alt="images" />
                <h2 className='proj-title'>{title}</h2>
                <div className='proj-details'>
                    <p>{details}</p>
                    <div className='proj-btns'>
                        <NavLink to="url.com" className="btn">View</NavLink>
                        <NavLink to={source} className="btn">Source</NavLink>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ProCard