import '../styles/MissionCard.scss';

type MissionInfos = {
  name: string,
  year: string,
  country: string,
  destination: string
};

function MissionCard(missionInfos: MissionInfos) {
  const { name, year, country, destination } = missionInfos;

  return (
    <div className="mission-card" data-testid="mission-card">
      <p className="name" data-testid="mission-name">{name}</p>
      <p className="year" data-testid="mission-year">
        <span className="material-symbols-outlined">calendar_month</span>
        {year}
      </p>
      <p className="country" data-testid="mission-country">
        <span className="material-symbols-outlined">location_on</span>
        {country}
      </p>
      <p className="destination" data-testid="mission-destination">
        <span className="material-symbols-outlined">flag</span>
        {destination}
      </p>
    </div>
  );
}

export default MissionCard;
