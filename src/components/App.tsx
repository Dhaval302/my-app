import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../css/App.css';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import eventData from './events.json'; 
import { EventProps } from './EventProps';
import AddTileModal from './AddTileModal';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

// import { SelectedEvents } from './SelectedEvents';

// interface SelectedEvent {
//   event: EventProps;
//   quantity: number;
// }

const App: React.FC = () => {
  const [events, setEvents] = useState<EventProps[]>([]);
  // const [selectedEvents, setSelectedEvents] = useState<EventProps[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const convertToSelectedEvents = (events: EventProps[]): SelectedEvents[] => {
  //   return events.map(event => ({
  //     event: event,
  //     quantity: 0, // You can set the initial quantity to 0 or any other value
  //   }));
  // };

  // Fetch and display random events on load
  useEffect(() => {
    let updatedEvents : EventProps[] = eventData;
    const existingTiles: EventProps[] = JSON.parse(localStorage.getItem('allEvents') || '[]');
    if(existingTiles.length !== 0) {
      updatedEvents = existingTiles;
    }
    setEvents(updatedEvents);
    console.log("app tsx blank arg useEffect");   
  }, [events]);

  // useEffect(() => {
  //   const currentStorage : SelectedEvents[] = JSON.parse(localStorage.getItem('allEventsData') || '[]');
  //   currentStorage.map(currentStorage => {
  //     if(currentStorage.)
  //   });
  // }, [selectedEvents]);

  // const updateEventsLocalStorage = () => {
  //   localStorage.setItem("allEventsData", JSON.stringify(events));
  // }

  // const getEventsLocalStorage = () => {
  //   const existingTiles: EventProps[] = JSON.parse(localStorage.getItem('allEvents') || '[]');
  //   return existingTiles;
  // }

  const addEventToCart = (event: EventProps, quantity: number) => {
    // const existingTiles: EventProps[] = JSON.parse(localStorage.getItem('allEvents') || '[]');
    const addedEventIndex = events.findIndex(e => e.name === event.name);
    if(addedEventIndex >= 0) {
      const currEvents = [...events];
      currEvents[addedEventIndex].quantity = quantity;
      setEvents(currEvents);
      // updateEventsLocalStorage();
      return currEvents.filter(event => event.quantity > 0);
    }
    // events.forEach(listEvent => {
    //   const addedEventIndex = 
    // })
    // setSelectedEvents(prevSelectedEvents => {
    //   const existingEventIndex = prevSelectedEvents.findIndex(e => e.name === event.name);
    //   if (existingEventIndex >= 0) {
    //     const updatedSelectedEvents = [...prevSelectedEvents];
    //     updatedSelectedEvents[existingEventIndex].quantity = quantity;
    //     return updatedSelectedEvents.filter(e => e.quantity > 0); // Remove events with quantity 0
    //   } else {
    //     return quantity > 0 ? [...prevSelectedEvents, { event, quantity }] : prevSelectedEvents;
    //   }
    // });
  };

  const getTotalQuantity = () => {
    return events.reduce((total, item) => total + item.quantity, 0);
  };

  const handleAddTile = () => {
    setIsModalOpen(true);
  };

  const handleSaveNewEvent = (name: string, price: number, description: string, quantity: number) => {
    const newEvent: EventProps = { name, price, description, quantity };
    const existingTiles: EventProps[] = JSON.parse(localStorage.getItem('allEvents') || '[]');
    const updatedTiles = [...existingTiles, newEvent];
    localStorage.setItem('allEvents', JSON.stringify(updatedTiles));
    setEvents(updatedTiles);
  };

  return (
    <Router>
      <div className="app bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 min-h-screen">
      <Header totalQuantity={getTotalQuantity()} onAddTile={handleAddTile} />
        <main className="main">
        
        <Routes>
          <Route path="/"  />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        
        <Body events={events} onAddToCart={addEventToCart} />
        <AddTileModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSave={handleSaveNewEvent} />
        </main>
       
        <Footer />
      </div>
    </Router>
  );
};

export default App;

/*
- make about and contact page as new pages
- make profile, add wallet money
- add db, new products
- checkout cart 
- ** IMPROVE UI
*/
