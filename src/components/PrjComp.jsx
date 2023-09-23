import './projects.css';
import React from 'react'
import ProCard from './ProCard';
import {PROJECTS} from "../projects"

function PrjComp() {
  return (
    <>
    <div className='proj-container'>
        <h1 className='proj-heading'>Projects</h1>
        <div className='card-container'>
          {PROJECTS.map((project)=>(
            <ProCard data={project}/>
          ))}
        </div>
    </div>
    </>
  )
}

export default PrjComp