import React from 'react';
import Restaurant from './Restaurants';

class RestaurantList extends React.Component {
    render() {
        return (
            <div className="RestaurantList">
                {
                    this.props.businesses.map(business => {
                        return <Restaurant business={business} key={business.id} />
                    })
                }
            </div>
        );
    }
}

export default RestaurantList;