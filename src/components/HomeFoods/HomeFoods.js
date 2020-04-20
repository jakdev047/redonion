import React,{useState} from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Nav,NavItem,NavLink, Container,TabContent,TabPane,Row} from 'reactstrap';
import FoodItem from './FoodItem';

const HomeFoods = ({foods}) => {
  const [activeTab, setActiveTab] = useState('2');
  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  const breakFast = foods.filter( food => food.catagories === 'breakfast');
  const lunchFood = foods.filter( food => food.catagories === 'lunch');
  const dinnerFood = foods.filter( food => food.catagories === 'dinner');

  return (
    <div className="home-tab">
      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: activeTab === '1' })}
              onClick={() => { toggle('1'); }} >
              Breakfast
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: activeTab === '2' })}
              onClick={() => { toggle('2'); }} >
              Lunch
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: activeTab === '3' })}
              onClick={() => { toggle('3'); }} >
              Dinner
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              {breakFast.map(item=>{
                return <FoodItem key={item.id} item={item}/>
              })}
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              {lunchFood.map(item=>{
                return <FoodItem key={item.id} item={item}/>
              })}
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              {dinnerFood.map(item=>{
                return <FoodItem key={item.id} item={item}/>
              })}
            </Row>
          </TabPane>
        </TabContent>
      </Container>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    foods: state.foods.foods
  }
}

export default connect(mapStateToProps)(HomeFoods);