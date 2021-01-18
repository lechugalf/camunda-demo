export interface HandlingRequest {
    agentName: string;
    agentClient: string;
    agentClientRfc: string;
    containers: Container[];
    serviceDate: Date;
    billOfLanding: string;
}

export type Container = {
    num: string;
    type: string;
}