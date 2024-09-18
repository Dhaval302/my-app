import '../css/Body.css';
import { EventProps } from './EventProps';
import { useEffect, useState } from 'react';
import TileComponent from './TileComponent';
import { SelectedEvents } from './SelectedEvents';

interface BodyProps {
  events: EventProps[];
  onAddToCart: (event: EventProps, quantity: number) => void;
}

const Body: React.FC<BodyProps> = ({ events, onAddToCart }) => {

  const [currEvents, setCurrEvents] = useState<EventProps[]>([]);

  useEffect(() => {
    // let updatedEvents : EventProps[] = eventData;
    // setEvents(updatedEvents);
    console.log("app tsx blank arg useEffect");   
  }, currEvents);


  return (
    <div>
      <div className='container'>
      <img src="./UrbanNest_transparent.png" alt="Banner" className="banner-img animate-fade-in" />
      {/* <h1 className=''>Eventzo!!</h1> */}
      </div>
      <div>
      {/* <button className="theme-switcher" onClick={handleAddEvent}>Add Event</button> */}
      </div>
      <div>
        <div className="event-list">
        {events.map(event => (
          //TODO: leanrn index of map
          <TileComponent
            key={event.name}
            event={event}
            onQuantityChange={(quantity) => onAddToCart(event, quantity)}
            />
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Body;
