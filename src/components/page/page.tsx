import React, { ReactNode } from 'react';
import SideItem from '../../models/sideItem';
import SideBarItem from '../page/sidebarItem';

interface PageProps {
    sidebartitle?: string;
    sidebarItems?: SideItem[];
    children: ReactNode;
}

const Page: React.FC<PageProps> = ({ sidebartitle, sidebarItems, children }) => {

    const buildItemType = (item: SideItem, index: number): JSX.Element | null => {
        return (<SideBarItem key={index} fowardToPage={item.forwardToPageOptions} >{item.text}</SideBarItem>)
    }

    return (
        <div className="page">
            <aside className="sidebar-container">
                {sidebartitle && <div className='title'>{sidebartitle}</div>}
                {sidebarItems && <div className='sidebar'>
                    {sidebarItems.map((item: SideItem, index) => buildItemType(item, index))}
                </div>
                }
            </aside>
            <main className="main">{children}</main>
        </div>
    );
};

export default Page;
