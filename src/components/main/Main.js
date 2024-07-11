import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Main = () => {
    const { selectedItem } = useContext(AppContext);

    return (
        <>
            {selectedItem && (
                <div>
                    <img src={selectedItem.picture} alt={selectedItem.name} />
                    <div>
                        <h3>{selectedItem.name}</h3>
                        <p>Chapter: {selectedItem.chapter}</p>
                        <p><i className="bi bi-alarm"></i> {selectedItem.time} minutes ago</p>
                    </div>
                </div>
            )}
            <h1>Hello</h1>
        </>
    );
};

export default Main;
