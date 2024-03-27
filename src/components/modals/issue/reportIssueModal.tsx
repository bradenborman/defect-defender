import React from 'react';

interface ReportIssueModalProps {
    setModalToShow: React.Dispatch<React.SetStateAction<"ISSUE" | "NEW_INITITATIVES" | "JOIN_INITITATIVES" | null>>;
}

const ReportIssueModal: React.FC<ReportIssueModalProps> = ({ setModalToShow }) => {

    const handleClose = () => {
        setModalToShow(null);
    };

    return (
        <div className={`new-issue-modal-overlay`}>
            <div className={`new-initiative-modal open`}>
                <h2>Report an Issue</h2>
                <div className='sub-title'>Document a new issue to be investigated</div>
                <div className='input-group'>
                    <label htmlFor="name">Reporter:</label>
                    <input type="text" id="name" autoComplete="off" defaultValue={"USER A"} />
                </div>

                <div className='input-group'>
                    <label htmlFor="description">Issue Title:</label>
                    <input type="text" id="description" autoComplete="off" />
                </div>
                <div className='input-group'>
                    <label htmlFor="description">Parent Initiative:</label>
                    <select>
                        <option>Ohio Homeowners</option>
                        <option>Doc1 Conversion</option>
                        <option>Monarch</option>
                    </select>
                </div>
                <div className='input-group'>
                    <label htmlFor="summary">Detailed Summary</label>
                    <textarea name="summary" rows={4} autoComplete="off"></textarea>
                </div>
                <div className='input-group'>
                    <label htmlFor="expected">What was expected</label>
                    <textarea name="expected" rows={4} autoComplete="off"></textarea>
                </div>
                <div className="buttons">
                    <button onClick={handleClose}>Save</button>
                    <button onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default ReportIssueModal;
