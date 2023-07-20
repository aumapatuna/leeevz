
function AmpleIcon(props) {

  if (props.type === 'filled') {
    return (
      <svg viewBox="0 0 28.3 28.3" className="App-icon">
        <use xlinkHref={"./filled-icons/icons.svg#" + props.icon } />
      </svg>
    );
  } else if (props.type === 'linear') {
    return (
      <svg viewBox="0 0 28.3 28.3" className="App-icon">
        <use xlinkHref={"./linear-icons/icons.svg#" + props.icon } />
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 28.3 28.3" className="App-icon">
        <use xlinkHref={"./icons.svg#" + props.icon } />
      </svg>
    );
  }
    
}

export default AmpleIcon;
