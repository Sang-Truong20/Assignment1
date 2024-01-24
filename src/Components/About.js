import React, { useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/dist/css/materialize.min.css';

const About = () => {
  useEffect(() => {
    const collapsibleElems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibleElems);
  }, []);

  return (
    <ul className="collapsible">
      <li>
        <div className="collapsible-header"><i className="material-icons">people</i>THE TEAM</div>
        <div className="collapsible-body"><span>Here you can see the player card, which consists of over 50 soccer football players from over the world</span></div>
      </li>
      <li>
        <div className="collapsible-header"><i className="material-icons">place</i>Nation</div>
        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
      <li>
        <div className="collapsible-header"><i className="material-icons">whatshot</i>Daily news</div>
        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
      </li>
    </ul>
  );
}

export default About;