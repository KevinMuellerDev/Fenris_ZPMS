export interface ToolJob {
    name: string;
    dateOfReceipt: number;
    desiredDeadline: number;
    client: string;
    otherTests: boolean;
    box: number;
    comment: string;
    typeOfTest: string[];
    climateState: string;
    id: string;
}
