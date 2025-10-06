import React from 'react'
import './home.css'
import Project from '../../components/project/Project'
import Upload from '../../components/upload-project/Upload'
import PlagCheck from '../../components/plagiarism-check/PlagCheck'
import IntegrityPolicy from '../../components/intergrity-policy/IntergrityPolicy'


const Home = () => {
  return (
    <div>
      <Project/>
      <Upload/>
      <PlagCheck/>
      <IntegrityPolicy/>
    </div>
  )
}

export default Home
