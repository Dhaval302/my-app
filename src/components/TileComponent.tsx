import React, { useEffect, useState } from 'react';
import { EventProps } from './EventProps';
import { ClipLoader } from 'react-spinners';

interface TileComponentProps {
  event: EventProps;
  onQuantityChange: (quantity: number) => void;
}

const TileComponent: React.FC<TileComponentProps> = ({ event, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const existingTiles: EventProps[] = JSON.parse(localStorage.getItem('allEvents') || '[]');
    const currEventIndex = existingTiles.findIndex(e => e.name === event.name);
    if (currEventIndex >= 0) {
      setQuantity(existingTiles[currEventIndex].quantity);
    }

    let eventInLocalStore = "";
    try {
      eventInLocalStore = JSON.parse(localStorage.getItem(event.name) || '');
    } catch (e) {
      console.log("event not found in local store");
    }

    if (eventInLocalStore.length !== 0) {
      setQuantity(parseInt(eventInLocalStore));
      onQuantityChange(parseInt(eventInLocalStore));
    } else {
      setQuantity(0);
    }

    fetchEventData();
  }, []);

  const fetchEventData = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay
    } finally {
      setLoading(false);
    }
  };

  const updatePerEventStorage = (currQuantity: number) => {
    localStorage.setItem(event.name, JSON.stringify(currQuantity));
  }

  const handleBuyClick = () => {
    setQuantity(1);
    onQuantityChange(1);
    updatePerEventStorage(1);
  };

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
    updatePerEventStorage(newQuantity);
  };

  const handleDecrement = () => {
    const newQuantity = quantity - 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
    updatePerEventStorage(newQuantity);
  };

  const handleQuantityRemove = () => {
    setQuantity(0);
    onQuantityChange(0);
    updatePerEventStorage(0);
  };

  return (
    <div className="group relative flex flex-col items-center justify-center p-6 w-full max-w-sm bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out transform hover:bg-gray-50 cursor-pointer">
      {loading ? (
        <div className="loading-spinner">
          <ClipLoader color="#000" loading={true} speedMultiplier={1} />
        </div>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-green-600 transition-colors duration-300">
            {event.name}
          </h2>
          <p className="text-gray-700 mb-2">${event.price}</p>
          <p className="text-gray-500 mb-4">{event.description}</p>
          {quantity === 0 ? (
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ease-in-out"
              onClick={handleBuyClick}
            >
              Buy
            </button>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 ease-in-out"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="text-gray-800 font-semibold">{quantity}</span>
              <button
                className="bg-gray-200 text-gray-800 py-1 px-3 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 ease-in-out"
                onClick={handleIncrement}
              >
                +
              </button>
              <button
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 ease-in-out"
                onClick={handleQuantityRemove}
              >
                Remove
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default TileComponent;
