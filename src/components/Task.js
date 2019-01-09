import React from 'react';

class TaskList extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    Weigh out all of the ingredients
                </div>
                <div className="col">
                    <input type="button" value="Done" />
                </div>
                <div className="col">
                    <input type="button" value="Delete" />
                </div>
            </div>
        );
    }
}

export default TaskList;