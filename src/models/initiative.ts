import Issue from "./issue";

export default interface Initiative {
    id: string;
    name: string;
    description: string;
    dueDate: string;

    issues?: Issue[];
    comments?: string[];
}