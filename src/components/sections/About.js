/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import Slider from 'react-slick'
import { useStaticQuery, graphql } from 'gatsby'
import Content from "~u/Content"
import Img from '~c/general/Image'

// eslint-disable-next-line react/prefer-stateless-function
const About = () => {
  const content = Content(useAboutQuery())

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
    ]
  }
  return (
    <section className="about" id="about">
      <Img className="about_img" src={content.aboutImage} />
      <div className="container-small">
        <div className="about_cont">
          <h2 className="sub-title">ПРО НАС</h2>
          <p className="general_paragraph">
            Готель
            <strong> ВОЛТЕР </strong>
            приймає гостей вже не один рік, тому наш досвід дозволяє нам з
            першого знайомства зрозуміти потреби гостей та справдити
            очікування від наших послуг. Привітний персонал цілодобово
            зустрічає гостей, допоможе з бронюванням, поселенням, замовленням
            інших послуг. У нас полюбляють зупинятись як індивідуальні
            подорожуючі, сім’ї, так і туристичні групи, дитячі групи,
            спортсмени та інші гості.
          </p>
          <p className="general_paragraph">
            <strong>
              Для нас немає нічого неможливого! Звертайтесь – завжди
              усміхнемось і допоможемо!
            </strong>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="about_gallery">
          <div className="about_gallery_outside" />
          <Slider {...settings}>
            {content.galleryAbout.map((data, index) => {
              return (
                <Img
                  // eslint-disable-next-line react/no-array-index-key
                  key={`galleryAbout_img_${index}`}
                  src={data.img}
                  className="about_gallery_img"
                />
              )
            })}
          </Slider>
        </div>
      </div>
      <div className="container-small">
        <div className="about_cont_bottom">
          <p className="general_paragraph">
            У готелі ВОЛТЕР 100 номерів різних категорій, кожен з яких
            обладнаний ванною кімнатою з туалетом, душем або ванною, феном,
            кондиціонером, телевізором та телефоном, холодильником, сучасними
            меблями, комфортними ліжками і ортопедичними матрацами. Більшість
            номерів є новими, мають площу від 26 м2, відповідають вимогам
            чотиризіркових готелів.
          </p>
        </div>
      </div>
      <div className="container-small">
        <div className="sevices" id="sevices">
          <h2 className="sub-title">НАШІ ПОСЛУГИ</h2>
          <div className="sevices_gallery">
            {content.galleryServices.map((data, index) => {
              return (
                <div
                  className="sevices_gallery_items"
                  // eslint-disable-next-line react/no-array-index-key
                  key={`galleryServices_img_${index}`}
                >
                  <Img
                    className="sevices_gallery_items_img"
                    src={data.img}
                  />
                  <p className="sevices_gallery_items_info">{data.info}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


export const useAboutQuery = () =>
  useStaticQuery(graphql`
    query AboutQuery {
      allFile(filter: {name: {eq: "content"}}) {
        nodes {
          childEnJson {
            aboutImage
            galleryAbout {
              img
            }
            galleryServices {
              img
              info
            }
          }
          childUkJson {
            aboutImage
            galleryAbout {
              img
            }
            galleryServices {
              img
              info
            }
          }
          sourceInstanceName
        }
      }
    }
  `).allFile.nodes