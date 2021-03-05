import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  data = data.allMarkdownRemark.nodes
  data.sort(function (a, b) {
    let dateA = a.frontmatter.date.split("-")
    let dateB = b.frontmatter.date.split("-")
    return (
      new Date(dateA[2], dateA[1] - 1, dateA[0]) -
      new Date(dateB[2], dateB[1] - 1, dateB[0])
    )
  })
  data.reverse()

  let dateBuilder = {}
  data.forEach(entry => {
    let splittedEntryDate = entry.frontmatter.date.split("-")
    let entryDate = new Date(
      splittedEntryDate[2],
      splittedEntryDate[1] - 1,
      splittedEntryDate[0]
    )
    const numericMonth = splittedEntryDate[1] - 1
    const month = entryDate.toLocaleString("default", { month: "long" })
    const year = entryDate.getUTCFullYear()
    if (!(year in dateBuilder)) {
      dateBuilder[year] = {}
    }
    if (dateBuilder[year]) {
      if (!dateBuilder[year][numericMonth]) {
        dateBuilder[year][numericMonth] = { month: month, days: [] }
      }
      if (dateBuilder[year][numericMonth].month) {
        dateBuilder[year][numericMonth].days.push(entry.frontmatter)
      }
    }
  })
  return (
    <Layout>
      <SEO title="Home" />
      {Object.keys(dateBuilder)
        .reverse()
        .map(year => {
          let numericMonths = Object.keys(dateBuilder[year]).reverse()
          return (
            <div>
              <h2>{year}</h2>
              <div className="month-container">
                {numericMonths.map(numMonth => {
                  let entry = dateBuilder[year][numMonth]
                  return (
                    <div className="month-section">
                      <h3>{entry.month}</h3>
                      <ul>
                        {entry.days.reverse().map((day, idx) => (
                          <Link key={idx} to={day.slug}>
                            <li>
                              <span>{day.date}</span>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title
          date
          slug
          month
          year
        }
      }
    }
  }
`
