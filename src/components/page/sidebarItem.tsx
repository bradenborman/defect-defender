import ForwardToPageOptions from '../../models/forwardToPageOptions'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const forwardToPage = (path: string): void => {
    const navigate = useNavigate();
    navigate(path);
}

interface SideBarItemProps {
    fowardToPage?: ForwardToPageOptions;
    children: any;
}

const SideBarItem: React.FC<SideBarItemProps> = ({ fowardToPage, children }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        if (fowardToPage)
            navigate(fowardToPage.route);
    };

    return (
        <div className="item" onClick={handleClick}>
            {children}
        </div>
    );
};

export default SideBarItem;
