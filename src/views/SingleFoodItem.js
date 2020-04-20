import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const SingleFoodItem = ({foods}) => {

  const {id} = useParams();
  const food = foods.find(item=>item.id === parseInt(id));

  return (
    <section className="food-details pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 py-5">
            <div className="food-details-content">
              <h3>{food.itle}</h3>
              <p className="subtitle muted pt-3">{food.description}</p>
            <div className="cart-item d-flex align-items-center p-3">
              <h3>${food.price}</h3>
              <div className="input-group input-cart-item ml-4">
                <button className="btn btn-default">
                  <FontAwesomeIcon icon={faMinus}/>
                </button>
                <button className="btn btn-default">
                  <FontAwesomeIcon icon={faPlus}/>
                </button>
              </div>
            </div>
            <button className="btn primary-btn">
              <span><FontAwesomeIcon icon={faCartArrowDown}/></span> Add
            </button>
            </div>
          </div>
          <div className="col-md-6 m-auto d-block">
            <img src={food.img} className="food-img m-auto d-block" alt=""/>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    foods: state.foods.foods
  }
}

export default connect(mapStateToProps)(SingleFoodItem);