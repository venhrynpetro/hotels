/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import Map from './Map'
import { useStaticQuery, graphql } from 'gatsby'
import Content from "~u/Content"
import Img from '~c/general/Image'

// eslint-disable-next-line react/react-in-jsx-scope
const Contact = () => {
  const content = Content(useContactQuery())

  return (
    <section className="contact" id="contact">
      <Img className="contact_img" src={content.mapImage} />
      <div className="container-small">
        <div className="contact_cont">
          <h2 className="sub-title">КОНТАКТИ ТА БРОНЮВАННЯ</h2>
          <div className="contact_cont_info">
            <div className="contact_cont_info_items">
              <p className="general_paragraph">вул. Липинського 60а,</p>
              <p className="general_paragraph">Поштовий індекс 79024</p>
              <p className="general_paragraph">Львів, Україна</p>
            </div>
            <div className="contact_cont_info_items">
              <a href="tel:38-(032)-242-4-951" className="general_paragraph">+38 (032) 242 4 951</a>
              <a href="tel:38-(032)-242-49-59" className="general_paragraph">+38 (032) 242 49 59</a>
              <a href="tel:38-(096)-557-88-88" className="general_paragraph">+38 (096) 557 88 88</a>
            </div>
          </div>
          <div className="contact_cont_info">
            <div className="contact_cont_info_items">
              {content.contactSoz.map((data, index) => {
                return (
                  <a
                    // eslint-disable-next-line react/no-array-index-key
                    key={`list_item_${index}`}
                    href={data.src ? data.src : '/'}
                    className="contact_cont_info_items_link"
                  >
                    <Img src={data.img} />
                  </a>
                )
              })}
            </div>
            <div className="contact_cont_info_items">
              <div className="contact_cont_btn">
                Прокласти шлях
                <div className="contact_cont_btn_mapIcon" />
              </div>
            </div>
          </div>
          <div className="contact_cont_map">
            <Map />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


export const useContactQuery = () =>
  useStaticQuery(graphql`
    query ContactQuery {
      allFile(filter: {name: {eq: "content"}}) {
        nodes {
          childEnJson {
            mapImage
            contactSoz {
              img
              src
            }
          }
          childUkJson {
            mapImage
            contactSoz {
              img
              src
            }
          }
          sourceInstanceName
        }
      }
    }
  `).allFile.nodes