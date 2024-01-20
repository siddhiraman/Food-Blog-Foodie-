import React from 'react';
import { useParams } from 'react-router-dom';

const MustTryItemDetailPage = () => {
    // Use useParams to get the item id from the URL
    const { id } = useParams();

    // Sample "Must Try!" item data (replace with your actual data)
    const mustTryItem = {
        id: 1,
        name: 'Must Try Item 1',
        imageUrl: 'url_to_item_1_image.jpg',
        fullDetails: 'Full details for Must Try Item 1...',
    };

    // Fetch the specific item details based on the id from the URL
    // You can replace this with your actual data fetching logic
    // For example, you can fetch the item details from an API or a data store

    // If you have a function to fetch item details, you can use it like this:
    // const mustTryItem = fetchMustTryItemDetails(id);

    return (
        <div>
            <h2>{mustTryItem.name}</h2>
            <div className="must-try-item-detail">
                <img src={mustTryItem.imageUrl} alt={mustTryItem.name} />
                <p>{mustTryItem.fullDetails}</p>
            </div>
        </div>
    );
};

export default MustTryItemDetailPage;
