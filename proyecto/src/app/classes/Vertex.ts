import { Route } from './Route';

export class Vertex {
    name: string;
    nodes: Route[];
    weight: number;

    constructor(theName: string, theNodes: Route[], theWeight: number) {
        this.name = theName;
        this.nodes = theNodes;
        this.weight = theWeight;
    }
}