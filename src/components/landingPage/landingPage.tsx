import React, { useState } from 'react';
import Page from '../page/page';
import SideItem from 'models/sideItem';
import NewInitiativeModal from '../modals/newInitiative/newInitiativeModal';
import ReportIssueModal from '..//modals/issue/reportIssueModal';

interface LandingPageProps { }

const items: SideItem[] = [
    { text: "Ohio Homeowners", forwardToPageOptions: { route: "/initiatives/ohio-ho" } },
    { text: "Doc1 Conversion", forwardToPageOptions: { route: "/initiatives/conversion" } },
    { text: "Somthing Else", forwardToPageOptions: { route: "/initiatives/xv" } },
    { text: "Monarch", forwardToPageOptions: { route: "/initiatives/monarch " } }
]

const LandingPage: React.FC<LandingPageProps> = () => {

    const [modalToShow, setModalToShow] = useState<"ISSUE" | "NEW_INITITATIVES" | "JOIN_INITITATIVES" | null>(null);

    const showModal = (modal: "ISSUE" | "NEW_INITITATIVES" | "JOIN_INITITATIVES") => setModalToShow(() => modal)

    return (
        <Page sidebartitle='My Initiatives' sidebarItems={items}>
            <div className='landing-page-feed'>
                <div className='card double-length' onClick={() => showModal('ISSUE')}>
                    <h3>Report an Issue</h3>
                    <p>Click to report a new issue</p>
                </div>
                <div className='card normal-length' onClick={() => showModal('NEW_INITITATIVES')}>
                    <h3>New initiative</h3>
                    <p>Click to setup a new initiative</p>
                </div>
                <div className='card normal-length' onClick={() => showModal('JOIN_INITITATIVES')}>
                    <h3>Join Initiative</h3>
                    <p>Click to join from list of all initiatives</p>
                </div>
            </div>
            {modalToShow === "ISSUE" && (
                <ReportIssueModal setModalToShow={setModalToShow} />

            )}
            {modalToShow === "NEW_INITITATIVES" && (
                <NewInitiativeModal setModalToShow={setModalToShow} />
            )}
            {modalToShow === "JOIN_INITITATIVES" && (
                <></>
            )}
        </Page>
    );
};

export default LandingPage;
