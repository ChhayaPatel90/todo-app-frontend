import React from 'react';

class TextEntry extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <input type="text" value="" />
                </div>
                <div className="col">
                    <input type="button" value="Save" />
                </div>
            </div>
        );
    }

}

export default TextEntry;