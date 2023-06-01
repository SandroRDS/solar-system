import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../styles/Missions.scss';

function Missions() {
  return (
    <div className="missions" data-testid="missions">
      <Title headline="Missões" />
      {
        missions.map((missionInfos, index) => (
          <MissionCard key={ index } { ...missionInfos } />))
      }
    </div>
  );
}

export default Missions;
