import React from 'react';

class Header extends React.Component {

    render() {
        return (<h1 style={styles.header}>Chhaya's To Do Application</h1>);
    }

}

const styles = {
    header : {
        color: "black",
        fontSize: "20px",
        fontFamily: "Open Sans",
        margin: "40px",
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "4px"
    }
};

export default Header;