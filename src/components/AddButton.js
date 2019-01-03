import React from 'react';

class AddButton extends React.Component {

    render() {
        return (<input style={styles.AddButton} type="button" value="Add" class="primaryButton"/>);
    }

}

const styles = {
    AddButton : {
        marginLeft: "10px",
        color: "white",
        backgroundColor: "teal"
    }
};

export default AddButton;