import React from 'react';
import { Link } from 'react-router-dom';

const MustTryPage = () => {
    // Sample "Must Try!" data (replace with your actual data)
    const mustTryItems = [
        {
            id: 1,
            name: 'Must Try Item 1',
            imageUrl: 'url_to_item_1_image.jpg',
            description: 'Description for Must Try Item 1...',
            fullDetails: 'Full details for Must Try Item 1...',
        },
        {
            id: 2,
            name: 'Must Try Item 2',
            imageUrl: 'url_to_item_2_image.jpg',
            description: 'Description for Must Try Item 2...',
            fullDetails: 'Full details for Must Try Item 2...',
        },
        // Add more "Must Try!" items as needed
    ];

    return (
        <div>
            <h2>Must Try!</h2>
            <div className="must-try-container">
                {mustTryItems.map((item) => (
                    <div key={item.id} className="must-try-item">
                        <Link to={`/must-try/${item.id}`}>
                            <img src={item.imageUrl} alt={item.name} />
                            <h3>{item.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MustTryPage;
