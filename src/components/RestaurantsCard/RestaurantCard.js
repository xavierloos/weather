import React from 'react';
import './Restaurants.css';

import RestaurantList from './RestaurantList';
import RestaurantSearch from './RestaurantSearch';

import Yelp from './YelpAPIConnection';

class RestaurantCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            businesses: []
        };

        this.searchYelp = this.searchYelp.bind(this);
    }
    searchYelp(q) {
        Yelp.search(q).then(businesses => {
            this.setState({ businesses: businesses });
        });
    }

    render() {
        return (
            <div>
                <RestaurantSearch searchYelp={this.searchYelp} />
                <RestaurantList businesses={this.state.businesses} />
            </div>
        );
    }
}

export default RestaurantCard;