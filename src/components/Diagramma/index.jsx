import "./index.css";

const Diagramma = () => {
  return(
    <svg class="chart" width="370" height="370" viewBox="0 0 50 50">
      <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
      <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
      <circle class="unit" r="15.9" cx="50%" cy="50%"></circle>
      <g className="chart__text">
        <text x="47%" y="50%" className="chart__procent_integers">72</text>
        <text x="58%" y="50%" className="chart__procent_decimal">.7</text>
        <text x="59%" y="50%" className="chart__procent_procent">%</text>
        <text x="50%" y="50%" className="chart__title">Лояльность</text>
        <text x="50%" y="50%" className="chart__subtitle">ниже среднего</text>
        <text x="50%" y="50%" className="chart__description chart__description_first">по отрасли: FMCG</text>
        <text x="50%" y="50%" className="chart__description chart__description_second">значение слева от медианы</text>
        <text x="50%" y="50%" className="chart__description chart__description_third">52.0% - 83.1%</text>
        <text x="54%" y="50%" className="chart__growth">3.1</text>
      </g>
    </svg>
  );
};

export default Diagramma;