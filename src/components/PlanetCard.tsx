import '../styles/PlanetCard.scss';

type PlanetCardInfos = {
  planetName: string,
  planetImage: string
};

function PlanetCard({ planetName, planetImage }: PlanetCardInfos) {
  return (
    <div className="planet-card" data-testid="planet-card">
      <div className="planet">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
      <p data-testid="planet-name">{planetName}</p>
    </div>
  );
}

export default PlanetCard;
