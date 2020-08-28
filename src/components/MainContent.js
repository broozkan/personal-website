import React from 'react'
import '../css/main.css'
import Joke from './Joke';

const MainContent = () => {

    const name = "Burhan";
    const styles = {
        color: "#FF8C00",
        fontSize: 50
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <h1 style={styles}>{name} Özkan</h1>
                    <p>Welcome to my React.js website!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="row">
                        <Joke prop={{question:"Say hello",punchLine:"Deneme"}} />
                    </div>



                </div>
            </div>
        </div>
    );
}

export default MainContent