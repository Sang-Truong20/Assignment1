import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { data } from "../Share/ListOfPlayer";
import Modal from './Modal';
import { Icon } from "react-materialize";

const Detail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userName = useParams();
  const player = data.find((obj) => {
    return obj.id === userName.id;
  });
  console.log(player);

  //let cost = player.cost.toLocaleString();
  
  return (
    <div className="details-container">
      <div className="product-card">
        <div className="head">
            <div className="badge">{player.name}</div>
            <div className="product-tumb">
              <img src={`../${player.img}`} alt="" />
            </div>
        </div>
        <div className="product-details">
            <a href="2" onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red" style={{position:"absolute", right:"24rem", bottom:"6rem"}}>
              <Icon>ondemand_video</Icon>
            </a>
          <h4>{player.club}</h4>
          <div className="product-price">Market value: € {player.cost}</div>
          <div className="product-bottom-details">
          <p>{player.info}</p>
          </div>
        </div>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} player={player} />}
    </div>
  );
};

export default Detail;
