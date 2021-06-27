import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RemoveFromCart extends Component {
    static propTypes = {
        products: PropTypes.array.isRequired, 
        onDeleteLastItem: PropTypes.func.isRequired
    };

    noItemsFound = (products) => {
        return products.length === 0;
    };

    render() {
        const { products, onDeleteLastItem } = this.props;

        return(
            <div>
                <button type="button" disabled={ this.noItemsFound(products) } onClick={ onDeleteLastItem }>
                    Delete Last Item
                </button>
            </div>
        );
    }
}

export default RemoveFromCart;