import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../styles/SolarSystem.scss';

function SolarSystem() {
  return (
    <div className="solar-system" data-testid="solar-system">
      <Title headline="Planetas" />
      {
        planets.map(({ name, image }, index) => (
          <PlanetCard key={ index } planetName={ name } planetImage={ image } />))
      }
    </div>
  );
}

export default SolarSystem;
