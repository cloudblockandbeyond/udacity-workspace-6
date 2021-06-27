import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Basket extends Component {
    static propTypes = {
        products: PropTypes.array.isRequired
    };

    render() {
        const { products } = this.props;
        
        return(
            <div>
                <p className="items">Items</p>
                <ol className="item-list">
                    { products.map( (product, index) => (
                        <li key={ index }>
                            { product }
                        </li>
                    ) ) }
                </ol>
            </div>
        );
    }
}

export default Basket;