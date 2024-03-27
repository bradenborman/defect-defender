import React, { useState } from 'react';
import Issue from 'models/issue';
import classNames from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface IssueCardProps {
    issue: Issue;
}

const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [isResolved, setIsResolved] = useState(false);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const resolveIssue = () => {
        setIsCollapsed(true);
        setIsResolved(true)
    };

    return (
        <div className={classNames("card", { resolved: isResolved })}>
            {isResolved && (
                <FontAwesomeIcon icon={faCheckCircle} className="resolved-icon" />
            )}
            <div className='heading' onClick={toggleCollapse}>
                <button className="collapse-button">
                    <FontAwesomeIcon icon={isCollapsed ? faChevronDown : faChevronUp} />
                </button>
                <div className="title">{issue.title}</div><span className='reported-by'>{issue.reportedBy}</span>
            </div>
            {!isCollapsed && (
                <>
                    <div className="due-date"><span>Due Date:</span> {issue.dueDate || "Not set"}</div>
                    <div className="description"><b>Description: </b>{issue.description}</div>
                    <div className="expected-results"><b>Expected Results: </b>{issue.expectedResults}</div>
                    <div className='action-buttons'>
                        <div><button>Create new comment</button></div><div><button onClick={e => resolveIssue()}>Resolve Issue</button></div>
                    </div>
                    <div className="comments">
                        <b>Comments:</b>
                        {issue.comments?.map((comment, commentIndex) => (
                            <div key={commentIndex}>{comment}</div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default IssueCard;
