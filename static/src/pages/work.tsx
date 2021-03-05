import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { string } from "prop-types"
import { description } from "core-js/fn/symbol/match"


interface workprops {
  title: string,
  description: string,
  since: string,
  until: string,
  location: string,
  tags: string[]
}

const works: workprops[] = [{
title: 'Native Instruments',
  description: 'Web development',
  since: "July 2020",
  until: 'Now',
  location: 'Germany Berlin',
  tags: ['ReactJS', 'GraphQL']
},
{
  title: 'Open Virtual Mobility',
  description: 'Full Stack Development',
  since: "July 2020",
  until: 'Now',
  location: 'Germany Berlin',
  tags: ['ReactJS', 'NodeJS', 'Neo4j']
},
{
  title: 'Beuth Hochschule für Technik Berlin',
  description: 'Python & Web Development',
  since: "July 2020",
  until: 'Now',
  location: 'Germany Berlin',
  tags: ['Typo3', 'HTML & CSS', 'Python']
},
{
  title: 'Native Instruments',
  description: 'Web development',
  since: "July 2020",
  until: 'Now',
  location: 'Germany Berlin',
  tags: []
},
]


const WorkCard = ({title, description, since, until,location, tags}: workprops) => (
  <div >
    <h4 style={{marginBottom: '0'}}>{title}</h4>
    <p style={{fontFamily: 'monospace', fontSize: 'small', marginBlockEnd: '0.5rem'}}>{location},  {since} - {until}</p>
    <div style={{display: 'flex', marginBottom: '3rem'}}>
      {tags.map(tag => <div className='tag-card'>{tag}</div>)}
    </div>
  </div>
)

const Work = () => (
  <Layout>
    <SEO title="work" />
    {works.map((work) => WorkCard({...work}))}
  </Layout>
)

export default Work
