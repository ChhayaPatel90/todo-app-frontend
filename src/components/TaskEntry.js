import React from 'react';

class TaskEntry extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         taskDescription: ""
    //     };

    //     // Event binding functions
    //     this.onSaveClicked = this.onSaveClicked.bind(this);
    //     this.onTaskTextFieldUpdated = this.onTaskTextFieldUpdated.bind(this);
    // }


    render() {
        return (
            <div className="row">
                <div className="col">
                    <input type="text" onChange={this.props.handleChange} />
                </div>
                <div className="col">
                <button type="submit" onClick={this.props.handleSubmit}>Save</button>
                </div>
            </div>
        );
    }

}

export default TaskEntry;