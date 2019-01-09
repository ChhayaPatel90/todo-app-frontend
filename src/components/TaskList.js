import React from 'react';
import Task from './Task';

class TaskList extends React.Component {

    render() {

        let listofTasks = [
            "Weigh out ingredients",
            "Sieve flour into the bowl",
            "Add and mix all of other dry ingredients",
            "Add the 2 eggs into the bowl",
            "Whisk the mixture until smooth",
            "Add mixture to a greased proof baking tray"
        ];

        return (
            <div>
                {
                    listofTasks.map((task, i) => 
                        <Task taskDescription={task} key={i} />
                    )
                }
            </div>
        );
    }

}

export default TaskList;