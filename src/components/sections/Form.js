import React, { useState } from 'react'
import { useInput } from '~h/useInput'
import Img from '~c/general/Image'
import { dataContent } from '~u/data'
import { encode } from '~u/helpers'
import { useStaticQuery, graphql } from 'gatsby'
import Content from "~u/Content"

export default function Form2() {
  const content = Content(useFormQuery())

  const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
  const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('');
  const { value:guestName, bind:bindGuest, reset:resetGuest } = useInput('');
  const [ submit, setSubmit ] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // alert(`Submitting Name ${firstName} ${lastName}`);
    // resetFirstName();
    // resetLastName();
    const discordData = {
      number: firstName,
      months: lastName,
      guest: guestName
    };

    fetch('/',{
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'Volter', ...discordData })
      
    })
    setSubmit(true);
  }

  return(
    <>
      {!submit ?
        <form className="teaser_cont_form-normal" name="Volter"
        data-netlify="true" onSubmit={handleSubmit}>
            <div className="teaser_cont_form-normal_block" >
              <label className="teaser_cont_form-normal_block_data">
                <span>
                <Img src={content.dataImage} />
                  Дата заїзду
                </span>
                <div className="teaser_cont_form-normal_block_data_outside">
                  <input
                    name="number"
                    type="date" 
                    {...bindFirstName}
                  />
                  <p>
                    {
                      firstName ? 
                          firstName.split('-').reverse().map(function(el, index) {
                            return <span key={index} >{el}</span>
                          })
                          :
                          dataContent
                      }
                  </p>
                </div>
              </label>
            </div>
            <div className="teaser_cont_form-normal_block">
              <label className="teaser_cont_form-normal_block_data">
                <span>
                  <Img src={content.dataImage} />
                  Дата виїзду
                </span>
                <div className="teaser_cont_form-normal_block_data_outside">
                  <input
                    type="date"
                    name="months"
                    {...bindLastName}
                  />
                  <p>
                    {
                      lastName ? 
                          lastName.split('-').reverse().map(function(el, index) {
                                return <span key={index} >{el}</span>
                          })
                          :
                          dataContent
                      }
                  </p>
                </div>
              </label>
            </div>
            <div className="teaser_cont_form-normal_block">
              <label className="teaser_cont_form-normal_block_data">
                <span>
                  <Img src={content.guestsImage} />
                  Гості
                </span>
                <div className="teaser_cont_form-normal_block_data_outside">
                  <input
                    type="number"
                    name="guest"
                    {...bindGuest}
                    placeholder="01"
                  />
                </div>
              </label>
            </div>

            <button className="general-button" type="submit">
                Знайти номер
            </button>
            <input type="hidden" name="form-name" value="Volter" />
        </form>
      :
        <div className="teaser_cont_thanks">
          <h2 className="teaser_cont_thanks_title">Thanks You!!!</h2>
        </div>
     }
    </>
  )
}


export const useFormQuery = () =>
useStaticQuery(graphql`
  query FormQuery {
    allFile(filter: {name: {eq: "content"}}) {
      nodes {
        childEnJson {
          dataImage
          guestsImage
        }
        childUkJson {
          dataImage
          guestsImage
        }
        sourceInstanceName
      }
    }
  }
`).allFile.nodes