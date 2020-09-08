const apiKey = 'F6W2LQWPM-wPR6w1irLXwCDNyQH6of-g2cP7W2-mhwwdcg0hOJWRhP49YV9Q7kbiPJ59g-n5CsgagiZlDPE07M3RgyqgU9vuFfL7fxjJhK4bwpk9ZtAdIgtG88U-X3Yx';
const Yelp = {
    search(q) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${q}`, {
        headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                }));
            }
        });
    }
};

export default Yelp;
