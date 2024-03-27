import Initiative from 'models/initiative';
import Issue from 'models/issue';
import { v4 as uuidv4 } from 'uuid';

const initiativeTestData = (): Initiative => {
    const issues: Issue[] = [];
    for (let i = 1; i <= 5; i++) {
        issues.push({
            id: uuidv4(),
            title: "Unable to Submit",
            description: `Issue ${i} description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`,
            expectedResults: `Issue ${i} expected results Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.`,
            status: 'REVIEWING',
            comments: ["TESET COMMENT", "TESET COMMENT 2"],
            dueDate: '2024-12-31',
            reportedBy: "Karen F"
        });
    }

    return {
        id: uuidv4(),
        name: 'Ohio Homeowners',
        description: 'Description of Ohio Homeowners initiative Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.',
        dueDate: '2024-12-31',
        issues: issues,
        comments: ['Comment 1', 'Comment 2'],
    };
};

export default initiativeTestData;