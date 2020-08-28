import React from 'react'


const Joke = (props) => {
    return(
        <div className="col-lg-4">
            <div className="card card-joke">
                <div className="card-body">
                    <h4> {props.prop.question} </h4>
                </div>
                <div className="card-footer">
                    <h4> {props.prop.punchLine} </h4>
                </div>
            </div>
        </div>
    );
}

export default Joke;