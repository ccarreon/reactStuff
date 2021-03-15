class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };       
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
        console.log(this.state.visibility);
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                <p>{this.state.visibility ? 'Hey. These are some details you can now see!' : ''}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


// const appRoot = document.getElementById('app');

// let clicked = false;

// const onClicked = () => {
//     clicked = !clicked;
//     render();
// }

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onClicked}>{clicked ? 'Hide details' : 'Show details'}</button>
//             <p>{clicked ? 'Hey. These are some details you can now see!' : ''}</p>
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// };

// render();