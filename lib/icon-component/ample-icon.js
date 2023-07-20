
function AmpleIcon(props) {
    if (props.type === 'linear'){
        return (

            <svg viewBox="0 0 16 16" className="App-icon">
                <use xlinkHref={"../linear-icons/icons.svg#" + props.icon } />
            </svg>

        );
    }
    if (props.type === 'filled'){
        return (

            <svg viewBox="0 0 16 16" className="App-icon">
                <use xlinkHref={"../filled-icons/icons.svg#" + props.icon } />
            </svg>

        );
    }



}

export default AmpleIcon;
