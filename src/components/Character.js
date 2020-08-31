import React, { Component } from 'react'



class Character extends React.Component {


    render() {
        return (
            <div className="col-lg-3">
                <div className="card">
                    <div className="card-body">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="img-fluid" />
                    </div>
                    <div className="card-footer">
                        <h6>{ this.props.item.name }</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Character;