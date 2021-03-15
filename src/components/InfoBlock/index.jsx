import "./index.css";
import icon from "../../images/human.svg"

const InfoBlock = ({title, procent, users, color, procentTotal}) => {
  return(
    <div className="infoBlock__container">
      <p className="infoBlock__title">{title}</p>
      <div className="infoBlock__statistic">
        <p className="infoBlock__procentTotal">{procentTotal}%</p>
        <div className="infoBlock__usersInfo">
          <div className="infoBlock__users">{users}</div>
          <img src={icon} alt="иконка человека" className="infoBlock__icon" />
        </div>
      </div>
      <div 
        className="infoBlock__colorPercent"
        style={{background: `linear-gradient(to right, ${color} 30%, rgb(249 249 249) 30% 70%)`}}
      >
        {procent}%
      </div>
    </div>
  );
};

export default InfoBlock;
