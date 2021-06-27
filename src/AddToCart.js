import React, { Component } from 'react';
import serializeForm from 'form-serialize';
import PropTypes from 'prop-types';

class AddtoCart extends Component {
    static propTypes = {
        onAddToCart: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            productname: ""
        };
    }

    inputIsEmpty = () => {
        return this.state.productname === '';
    };

    handleChange = (event) => {
        this.setState({
            productname: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const values = serializeForm(event.target, { hash: true });
        this.props.onAddToCart(values);
    };

    render() {
        return(
            <div>
                <h2>Shopping List</h2>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" placeholder="Enter New Item" name="productname" 
                        value={ this.state.productname } onChange={ this.handleChange } />
                    <button type="submit" disabled={ this.inputIsEmpty() } >Add</button>
                </form>
            </div>
        );
    }
}

export default AddtoCart;