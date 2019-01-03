import React from 'react';

class Header extends React.Component {

    render() {
        return (<h1 style={styles.header}>Chhaya's To Do Application</h1>);
    }

}

const styles = {
    header : {
        colour: "red"
    }
};

export default Header;