import React, { useEffect } from 'react'
import axios from 'axios'
import { Styled } from 'direflow-component'
import styles from './Modal.css'
import { useState } from 'react'

const Modal = () => {
  const coursesArray = []
  const [arrayCourses, setArrayCourses] = useState([])
  useEffect(() => {
    axios.get('http://anhanguera.cogna.digital/pimback/es/aggs/courses/anhanguera/site/anhanguera')
    .then((res) => {
      res.data.data.hits.map(courses => coursesArray.push(courses.title.split('-')[0]))
      setArrayCourses(coursesArray.sort())
    }).catch((err) => console.error(err))
  }, [])
  return (
    <Styled styles={styles}>
      <div className="container">
        <div className="form__text">
          <h4 >LIGAREMOS PARA VOCÊ</h4>
          <span>Preencha os campos abaixo</span>
        </div>
        <div className="form___container">
          <form className="form___box">
            <div className="form___input">
              <input type="text" id="nome" placeholder="Nome*" />
            </div>
            <div className="form___input">
              <input
                type="tel"
                pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                id="phone"
                placeholder="Telefone*"
              />
            </div>
            <div className="form___input">
              <select placeholder="Curso Interessado" type="text" id="cursos">
              <option selected defaultValue> Curso interessado </option>
                {arrayCourses.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  )
                })}
              </select>
            </div>
          </form>
          <div>
            <button type="button" className="btn___enviar">
              Enviar
            </button>
          <div className="text__tempo">Tempo de espera aproximado:5 minutos</div>
        </div>
        </div>
      </div>
    </Styled>
  )
}

export default Modal
