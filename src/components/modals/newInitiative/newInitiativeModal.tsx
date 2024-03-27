import React from 'react';

interface NewInitiativeModalProps {
    setModalToShow: React.Dispatch<React.SetStateAction<"ISSUE" | "NEW_INITITATIVES" | "JOIN_INITITATIVES" | null>>;
}

const NewInitiativeModal: React.FC<NewInitiativeModalProps> = ({ setModalToShow }) => {

    const handleClose = () => {
        setModalToShow(null);
    };

    return (
        <div className={`new-initiative-modal-overlay`}>
            <div className={`new-initiative-modal open`}>
                <h2>New Initiative</h2>
                <div className='sub-title'>Create a new initiative so that all defects can be tracked</div>
                <div className='input-group'>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" autoComplete="off" />
                </div>

                <div className='input-group'>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" autoComplete="off" />

                </div><div className='input-group'>
                    <label htmlFor="dueDate">Due Date:</label>
                    <input type="date" id="dueDate" />
                </div>
                <div className="buttons">
                    <button onClick={handleClose}>Save</button>
                    <button onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default NewInitiativeModal;
