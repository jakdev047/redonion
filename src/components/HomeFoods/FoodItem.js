import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const FoodItem = ({item}) => {
  const {id,title, img, subtitle, price} = item;
  return (
      <Col  lg={4} sm={6} xs={12}>
        <div className="single-item text-center m-4">
            <div className="card p-4">
                <Link to={`/foods/${id}`}>
                  <img className="card-img-top" src={img} alt=""/>
                </Link>
                <div className="card-body">
                    <h5 className="card-title">
                      <Link to={`/foods/${id}`}>
                        {title}
                      </Link>
                    </h5>
                    <p className="card-text">{subtitle}</p>
                    <h4 className="price">${price}</h4>
                </div>
            </div>
        </div>
      </Col>
  );
};

export default FoodItem; 