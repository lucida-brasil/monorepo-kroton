import React from 'react'
import styles from './App.css'
import Banner from './components/Banner/Banner'
import { Styled } from 'direflow-component'
import Divider from './components/Divider/Divider'
import MiddleBanner from './components/MiddleBanner/MiddleBanner'
import { CardContent } from '../../content/CardContent'
import Card from './components/Card/Card'
import carouselStyle from 'react-responsive-carousel/lib/styles/carousel.min.css'
import CarouselCards from './components/CarrouselCards/CarouselCards'
import { HTMLActions } from '../../../../libs/hooks'

const App = () => {
  const element = document.querySelector('envelopamento-medicina')
  const images =
    HTMLActions.getWindowDimensions().width > 768
      ? 'https://storage.googleapis.com/cro_seo-hospedagem_de_assets/Imagens%20Kroton%20-%20Ex%20Maxymiser/Builds/Tdk09dktS0ilMPrStt7MSA/assets/Rectangle%20240.png'
      : 'https://storage.googleapis.com/cro_seo-hospedagem_de_assets/Imagens%20Kroton%20-%20Ex%20Maxymiser/Builds/Tdk09dktS0ilMPrStt7MSA/assets/middle-banner-full-banner.png'
  return (
    <Styled styles={[styles, carouselStyle]}>
      <div className="app">
        <section>
          <div className="wrapper-banner">
            <Banner src="https://storage.googleapis.com/cro_seo-hospedagem_de_assets/Imagens%20Kroton%20-%20Ex%20Maxymiser/Builds/Tdk09dktS0ilMPrStt7MSA/assets/1980x693_BANNEER_pitagoras_medicina%201.png" />
          </div>
        </section>
        <section>
          <div className="wrapper-divider">
            <Divider
              text={`<span class='text-divider'>POR QUE FAZER MEDICINA</span> NA ${element.university.toUpperCase()}?`}
            />
          </div>
          <div className="wrapper-banner-with-carousel">
            <MiddleBanner src={images} color={element.color} />
          </div>
        </section>
        <div className="wrapper-divider cursos">
            <Divider text="<span class='text-divider'>CURSOS DE GRADUAÇÃO PARA</span> ALAVANCAR SEU FUTURO" />
        </div>
        <section className="wrapper-cards-section">
     
          <div className="wrapper-cards">
            {CardContent.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <Card
                    image={item.image}
                    title={item.title}
                    modalidade={item.modalidade}
                    content={item.content}
                    link={item.link}
                    buttonColor={element.color}
                  />
                </React.Fragment>
              )
            })}
          </div>
          <div className="link__todos-cursos">
            <a className="link__todos-cursos text">VER TODOS OS CURSOS</a>
          </div>
        </section>
        <section className="wrapper-cards-mobile">
          <CarouselCards />
          <div className="link__todos-cursos">
            <a className="link__todos-cursos text">VER TODOS OS CURSOS</a>
          </div>
        </section>
        <section>
          <div className="wrapper-divider">
            <Divider
              text={`<span class='text-divider'>VENHA PARA</span> ${element.university.toUpperCase()}`}
            />
          </div>
        </section>
      </div>
    </Styled>
  )
}

export default App
