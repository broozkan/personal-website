import React, { Component } from 'react'
import { Card, Feed, Icon } from 'semantic-ui-react'

class Projects extends React.Component {



  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4><a href="https://farmasya.com/" target="_blank">Farmasya Joint Purchase </a></h4>
            </div>
            <div className="card-body">
              <p>A software that allows pharmacies come together when they purchasing medicines for lower costs. </p>
              <p>I used LAMP stack for this software. It has MVC pattern. Also integrated with bank online payment system and <a href="https://its.gov.tr" target="_blank">its.gov.tr.</a> </p>
              <p>Currently above 100 pharmacies using this software.</p>
            </div>
          </div>
        </div>

        <div className="col-lg-12 mt-3">
          <div className="card">
            <div className="card-header">
              <h4><a href="https://www.brosoft.com.tr/tr/cozumler/kolay-perde-perde-olcu-programi" target="_blank">Easy Curtain </a></h4>
            </div>
            <div className="card-body">
              <p>A ERP solution for curtain maintainer. It has sale point module, factory production module, tailor module integrated with each other. </p>
              <p>I used LAMP stack for this software. It has MVC pattern. Also integrated with bank online payment system too.</p>
              <p>Currently 4 companies using it.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-3">
          <div className="card">
            <div className="card-header">
              <h4><a href="#" target="_blank">History Book</a></h4>
            </div>
            <div className="card-body">
              <p>A project made by who has all students, teachers, staffs informations in famous high schools in Sivas. </p>
              <p>I used MERN stack for this software. There is above thousands data in this project. So i used elastic search for accessing them.</p>
              <p>Also it has donate system.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-3">
          <div className="card">
            <div className="card-header">
              <h4><a href="https://baristapos.brosoft.com.tr/" target="_blank">BaristaPOS</a></h4>
            </div>
            <div className="card-body">
              <p>A restaurant POS, manage system. </p>
              <p>I used LAMP stack for this software. Design pattern allows software to working offline inside restaurant but accessible from outside.</p>
              <p>I experienced and designed network topologies in this project.</p>
              <p>Software integrated with HUGIN Verifone POS device through websocket.</p>
              <p>Also every restaurant's software running on their virtual debian server. So i experienced system administration.</p>
              <p>Currently 15-20 restaurants using it.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-3">
          <div className="card">
            <div className="card-header">
              <h4><a href="https://www.turkeyballoonscappadocia.com/" target="_blank">E-Commerce Solution For Travel Agency</a></h4>
            </div>
            <div className="card-body">
              <p>An e-commerce solution made with MERN Stack. </p>
              <p>Includes all e-commerce software requirements. Bank payment system, customer management etc.</p>
              <p>I experienced and designed network topologies in this project.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-3">
          <div className="card">
            <div className="card-header">
              <h4><a href="https://sivaseo.broozkan.com" target="_blank">CMS For Organization</a></h4>
            </div>
            <div className="card-body">
              <p>A cms website for large organizations. In this project it created for <a href="https://sivaseo.org.tr" target="_blank">Sivas Eczacılar Odası</a> </p>
              <p>Created with MERN stack.</p>
            </div>
          </div>
        </div>
      </div>



    )
  }
}

export default Projects