import React, { useState } from 'react';
import '../css/Modal.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (name: string, price: number, description: string, quantity: number) => void;
}

const AddTileModal: React.FC<ModalProps> = ({ isOpen, onClose, onSave }) => {
    const [formError, setFormError] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);

    const handleSave = () => {
        if (name && (price > 0) && description) {
            onSave(name, parseFloat(price as unknown as string), description, quantity);
            setFormError('')
            onClose(); 
        } else {
            setFormError("Name or Description not given or price not correct")
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add New Event :)</h2>
                <div>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                </div>

                <div>
                <label>
                    Price:
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} />
                </label>
                </div>
                
                <div>
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                </div>

                <div>
                <label>
                    Quantity:
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.valueAsNumber)} disabled/>
                </label>
                </div>

                <div className='error-message'>
                    {formError}
                </div>
                <div className="modal-actions">
                    <button className='modal-save' onClick={handleSave}>Save</button>
                    <button className='modal-cancel' onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddTileModal;
