import React from 'react';
import Task from './Task';

class TaskList extends React.Component {

    render() {  
        return (
            <div>
                {
                    this.props.listofTasks.map((task, i) => 
                        <Task taskDescription={task.description} key={i} />
                    )
                }
            </div>
        );
    }

}

export default TaskList;