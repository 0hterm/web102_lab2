import './Upgrade.css';

const Upgrade = (props) => {
  return (
    <div className='upgrade'>
      <h3>{props.name}</h3>
      <p>{props.desc}</p>
      <button onClick={props.buyFunction}>{props.cost}</button>
    </div>
  );
}

export default Upgrade;