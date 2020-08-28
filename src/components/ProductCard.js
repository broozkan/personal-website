import React from 'react'


const ProductCard = (props) => {
    return (
        <div className="col-lg-3">
            <div className="card">
                <div className="card-body">
                    <img src={props.image} className="img-fluid" />
                </div>
                <div className="card-footer">
                    <h3>{props.name}</h3>
                    <h4>{props.price}</h4>
                </div>
            </div>
        </div>

    );
}

export default ProductCard