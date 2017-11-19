import React from 'react';
import { formatPrice } from '../helpers';

class Dish extends React.Component {
    render() {
        const { details, index } = this.props;
        const isAvailable = details.status === "available";
        const buttonText = isAvailable ? "Add To Order" : "Sold out";
        return (
            <li className="menu-fish">
                <img src={details.image} alt={details.name} />
                <h3 className="fish-name">
                    {details.name}
                    <span className="price">{formatPrice(details.price)}</span>
                </h3>
                <p>{details.desc}</p>
                // how to pass arguments in addToOrder
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(index)}>{buttonText}</button>
            </li>
        )
    }
}

export default Dish;
