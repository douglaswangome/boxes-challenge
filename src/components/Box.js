import './Box.css';

const Box = (props) => {
  const styles = {
    backgroundColor: props.colored ? "#212121" : 'transparent'
  }
  return (
    <div className="box" onClick={props.switchColor} style={styles}></div>
  );
}

export default Box;