import React from 'react';
import { useParams } from 'react-router-dom';

import Page from '../page/page';
import Initiative from 'models/initiative';
import SideItem from 'models/sideItem';
import initiativeTestData from '../../data/test-data';
import IssueCard from './card/issueCard';

interface InitiativesPageProps { }


const InitiativesPage: React.FC<InitiativesPageProps> = () => {
    let { id } = useParams();

    const testData: Initiative = initiativeTestData();


    const items: SideItem[] = [
        { text: "Back to Home", forwardToPageOptions: { route: "/" } }
    ]

    return (
        <Page sidebarItems={items} sidebartitle={id}>
            <div className='issue-wrapper'>
                {testData.issues?.map((issue, index) => (
                    <IssueCard key={index} issue={issue} />
                ))}
            </div>
        </Page>
    );

};

export default InitiativesPage;