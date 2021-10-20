import React from "react";
import './homepage.styles.scss';
import Directory from "../../components/directory/directory.component";
import { Route } from "react-router";

const Hats = (props) => {
  console.log(props);
  return <div>
    <h1>Hats {props.match.params.some} </h1>
  </div>
}

const HomePage = () => (
  <div className='homepage'>
    <Route exact path='/' component={Directory}/>
    <Route exact path='/hats/:some' component={Hats}/>
  </div>
);

export default HomePage;