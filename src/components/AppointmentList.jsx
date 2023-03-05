import React from 'react'
import  Row  from "react-bootstrap/Row"
import  Col  from "react-bootstrap/Col"
import { FaTimesCircle } from "react-icons/fa"
import  Container  from 'react-bootstrap/Container'

const AppointmentList = ({appointments, setAppointments}) => {

  const deleteClick= (id) =>{
    setAppointments(appointments.filter((item) => item.id !== id ))
  }

  const handleDoubleClick = (id) =>{
    setAppointments(appointments.map((item) => item.id === id ? {...item, consulted : !item.consulted} : item ))
  }



  return (
    <div>
      <div><h2 className='m-3'>AppointmentList</h2></div>
      {
        !appointments.length && <img src="./img/appointment.jpg" alt="appoinment.jpg" width="50%"  />
      }

      {
        appointments.map((item) =>{
            const {id, patient, day, consulted, doctor} = item
            return(
              <Container key={id}>
                <Row className={consulted ? "appointments consulted bg-success  mt-2 p-3 justify-content-center align-items-center" : "bg-success  mt-2 p-3 justify-content-center align-items-center"} style={{color:"white"}} onDoubleClick={() =>  handleDoubleClick(id)} >
                  <Col>
                  <h5> {patient} </h5>
                  <h6> {doctor} </h6>
                  </Col>
                  <Col>
                  <h5> {new Date(day).toLocaleDateString()} </h5>
                  <h6> {new Date(day).toLocaleTimeString()} </h6>
                  </Col>
                  <Col className='text-end'>
                  <FaTimesCircle className='text-danger fs-3' type='button' onClick={() => deleteClick(id)} />
                  </Col>
                </Row>
              </Container>
            )
        })
      }
    </div>
  )
}

export default AppointmentList