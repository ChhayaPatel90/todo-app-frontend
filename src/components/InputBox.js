import React from 'react';

class InputBox extends React.Component {

    render() {
        return (
            <input type="text" id="addTextField" placeholder="What is your next task?" style={styles.InputBox} />);
        }

}

const styles = {
    InputBox: {
        width: "100%",
        borderWidth: "2px",
        borderColor: "teal"
    }
};

export default InputBox;