import React from 'react'
import IconSelector from '../components/IconSelector/IconSelector'
import Layout from '../components/Layout/Layout'
import Result from '../components/Result/Result'
import './homePage.scss'

const HomePage = () => {
  return (
    <Layout>
      <div className="homePage">

        <div className="homePage__starting">
          <h2>Choose a hand to play</h2>
          <IconSelector />
        </div>

        <div className="homePage__result hidden">
          <Result />
        </div>

      </div>
    </Layout>
  )
}

export default HomePage
