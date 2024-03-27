export default interface Issue {
    id: string;
    title: string;
    description: string;
    expectedResults: string;
    status?: "REVIEWING" | "PRODUCTION"
    comments?: string[];
    dueDate?: string;
    reportedBy: string;
}