import React from 'react';
import { connect } from 'react-redux';

const HomeFoods = ({foods}) => {
  return (
    <div>
      <h2>Home foods</h2>
      {console.log(foods)}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    foods: state.foods.foods
  }
}

export default connect(mapStateToProps)(HomeFoods);