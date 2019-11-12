import React, { Component } from 'react';
import NumberFormat from 'react-number-format';

class Money extends Component {
    render() {
        return (
            <div className="tien">
                <NumberFormat thousandSeparator={true} prefix={'VND'} />
            </div>
            
        );
    }
}

export default Money;