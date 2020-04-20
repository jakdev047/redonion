import { SET_FOOD_ITEMS } from "../actions/types";

const init = {
  foods: [
    {
      title:'Healthy Meal Plan',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/Ph7HZpK/lunch1.png',
      catagories:'lunch',
      price:9.99,
      id:100123
    },
    {
      title:'Fried Chicken Bento',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/8Yfk9Y4/lunch2.png',
      catagories:'lunch',
      price:12.99,
      id:1001234,
    },
    {
      title:'Trragon-Rubbed-Salmon',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/5BPBJKH/lunch3.png',
      catagories:'lunch',
      price:23.99,
      id:100145234,
    },
    {
      title:'Indian Lunch',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/R3rLv58/lunch4.png',
      catagories:'lunch',
      price:15.99,
      id:10012347,
    },
    {
      title:'Beaf Steak',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/zxQ2mR3/lunch5.png',
      catagories:'lunch',
      price:7.99,
      id:1001423,
    },
    {
      title:'Honey Soy Salmon',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/Vttm4HL/lunch6.png',
      catagories:'lunch',
      price:19.99,
      id:1770123,
    },
    {
      title:'Salmon with Grapefruits',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/fqzz97r/dinner1.png',
      catagories:'dinner',
      price:9.99,
      id:108453,
    },
    {
      title:'Lemony Salmon',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/qFcr7vr/dinner2.png',
      catagories:'dinner',
      price:12.99,
      id:199123,
    },
    {
      title:'Pork Tenderiain',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/pLtqXfB/dinner3.png',
      catagories:'dinner',
      price:23.99,
      id:10483,
    },
    {
      title:'Baked Chicken',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/McDVR1C/dinner4.png',
      catagories:'dinner',
      price:15.99,
      id:107484,
    },
    {
      title:'Curlic Butter baked salmon',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/Kynmst1/dinner5.png',
      catagories:'dinner',
      price:7.99,
      id:114414,
    },
    {
      title:'French fries with cheese',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/Kmvyhdn/dinner6.png',
      catagories:'dinner',
      price:19.99,
      id:1178123,
    },
    {
      title:'Bagel and cream cheese',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/YWxtdqc/breakfast1.png',
      catagories:'breakfast',
      price:9.99,
      id:1001234854,
    },
    {
      title:'Breakfast sandwich',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/t2pmW5S/breakfast2.png',
      catagories:'breakfast',
      price:12.99,
      id:10012374874,
    },
    {
      title:'baked chicken',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/0FGxwXy/breakfast3.png',
      catagories:'breakfast',
      price:23.99,
      id:10014564723,
    },
    {
      title:'Eggs benedict',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/QC0KJPt/breakfast4.png',
      catagories:'breakfast',
      price:15.99,
      id:1001778623,
    },
    {
      title:'Toast fried Egg Butter',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/pwjPPM3/breakfast5.png',
      catagories:'breakfast',
      price:7.99,
      id:100123545444,
    },
    {
      title:'Full breakfast egg toast',
      subtitle:'How we dream about our future',
      description:'Toothsome, strictly used, refers to edible and pleasant food, or you could even write tasty, appetizing or delicious instead, something really pleasant to the sense of taste. But you will see it very often meaning healthy food, good tasting food that has something more than good taste going for it.',
      img:'https://i.ibb.co/fSvwzpZ/breakfast6.png',
      catagories:'breakfast',
      price:19.99,
      id:100142447423,
    },
  ]
}

const reducers = (state=init,action) => {

  switch (action.type) {
    case SET_FOOD_ITEMS:
      return {
        ...state,
        foods: action.payload
      };
    default:
      return state;
  }
};

export default reducers;