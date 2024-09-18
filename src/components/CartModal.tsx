import React, { useEffect, useState } from 'react';
import { EventProps } from './EventProps';
import eventData from './events.json';

interface CartModalProps {
    onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
    const [selectedMap, setSelectedMap] = useState<Map<string, number>>(new Map());

    useEffect(() => {
        let updatedEvents: EventProps[] = eventData;
        let selectedMap: Map<string, number> = new Map();

        updatedEvents.forEach(event => {
            try {
                const eventInLocalStore: number = JSON.parse(localStorage.getItem(event.name) || '');
                if (eventInLocalStore > 0) {
                    selectedMap.set(event.name, eventInLocalStore);
                }
            } catch (e) {}
        });

        setSelectedMap(selectedMap);
    }, []);

    const renderMapItems = () => {
        return Array.from(selectedMap).map(([key, value]: [string, number]) => (
            <div
                key={key}
                className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-2 shadow-sm transform transition-transform duration-200 hover:bg-gray-200 hover:shadow-md hover:-translate-y-1"
            >
                <div className="text-lg font-semibold text-gray-800">{key}</div>
                <div className="text-sm text-gray-600">Quantity: {value}</div>
            </div>
        ));
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-out">
            <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative transform transition-transform duration-300 ease-out scale-95 hover:scale-100">
                {/* Close Button (Top Right) */}
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors duration-200 ease-in-out"
                    onClick={onClose}
                >
                    &times;
                </button>

                <h2 className="text-2xl font-bold text-center mb-4">Your Cart</h2>

                {/* Cart Items */}
                <div className="space-y-4 max-h-64 overflow-y-auto">
                    {renderMapItems()}
                </div>

                {/* Checkout Button */}
                <div className="mt-6">
                    <button
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-200 ease-in-out"
                        onClick={() => alert('Proceeding to checkout...')}
                    >
                        Checkout
                    </button>
                </div>

                {/* Small Discouraging Close Button */}
                <div className="mt-3 flex justify-center">
                    <button
                        className="text-sm py-1 px-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors duration-200 ease-in-out"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
