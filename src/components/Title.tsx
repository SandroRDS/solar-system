import '../styles/Title.scss';

function Title({ headline }: { headline: string }) {
  return (
    <h2 className="title">{headline}</h2>
  );
}

export default Title;
