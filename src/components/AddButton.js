import React from 'react';

class AddButton extends React.Component {

    render() {
        return (<input style={styles.AddButton} type="button" value="Add" class="primaryButton"/>);
    }

}

const styles = {
    AddButton : {
    textAlign: "center",
    position: "relative; left:auto; right:auto"
    }
};

export default AddButton;