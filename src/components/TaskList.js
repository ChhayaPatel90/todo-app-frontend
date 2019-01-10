import React from 'react';
import Task from './Task';

class TaskList extends React.Component {

    render() {

        let listofTasks = [
            {
               id: 1,
               description: "Weigh out ingredients",
               completed: false
            },
            {
                id: 2,
                description: "Sieve flour into the bowl",
                completed: false
            },
            {
                id: 3,
                description: "Add and mix all of other dry ingredients",
                completed: false
            }
        ];
    

        return (
            <div>
                {
                    listofTasks.map((task, i) => 
                        <Task taskDescription={task.description} key={i} />
                    )
                }
            </div>
        );
    }

}

export default TaskList;