import React, { useState, useEffect } from 'react';

function CardAll() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('http://localhost:1337/api/cards');
            const data = await res.json();
            setCards(data.data);
        }
        fetchData();
    }, []);


    return (

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {cards.map(item => (
                <div className="w-full rounded-lg shadow-md lg:max-w-sm m-2">
                    <img
                        className="object-cover w-full h-48"
                        alt="image"
                        src={item.attributes.urlImage}
                    />
                    <div className="p-4">
                        <h4 className="text-xl font-semibold tracking-tight text-blue-600">
                            {item.attributes.title}
                        </h4>
                        <p className="mb-2 leading-normal">
                            {item.attributes.description}
                        </p>
                        <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                            Ver mais...
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CardAll;
