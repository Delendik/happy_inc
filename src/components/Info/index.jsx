import InfoBlock from "../InfoBlock";
import "./index.css";

const Info = () => {
  return(
    <div className="info__container">
      <InfoBlock title={"Промоутеры"} procentTotal={"32.0"} users={81} color={"rgb(128 178 95)"} procent={"+1.2"} />
      <InfoBlock title={"Скептики"} procentTotal={"39.1"} users={8} color={"rgb(252 216 65)"} procent={"+4.8"} />
      <InfoBlock title={"Критики"} procentTotal={"79.8"} users={7} color={"red"} procent={"-9.7"} />
    </div>
  );
};

export default Info;
