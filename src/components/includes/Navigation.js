import React from "react"
import { Link } from "gatsby"
import MediaQuery from 'react-responsive'
import GeneralNavigation from '~c/includes/GeneralNavigation'
import { useSelector } from 'react-redux'
import Img from '~c/general/Image'
import Content from "~u/Content"
import { useStaticQuery, graphql } from 'gatsby'

function Navigation() {
  const state = useSelector(props => props); 
  const content = Content(useNavigationQuery())

  return (
    <MediaQuery minDeviceWidth={767.97}>
      <header className="header">
        <div className="container">
          <nav className="navigation">
            <Link
              to={`/${state.languageValue === "uk" ? "" : state.languageValue}`}
              className="navigation_logo"
            >
              <Img
                src={content.logo}
                className="navigation_logo_img"
              />
            </Link>
            <GeneralNavigation />
          </nav>
        </div>
      </header>
    </MediaQuery>
  )
}

export default Navigation


export const useNavigationQuery = () =>
  useStaticQuery(graphql`
    query NavigationQuery {
      allFile(filter: {name: {eq: "header"}}) {
        nodes {
          childEnJson {
            logo
          }
          childUkJson {
            logo
          }
          sourceInstanceName
        }
      }
    }
  `).allFile.nodes