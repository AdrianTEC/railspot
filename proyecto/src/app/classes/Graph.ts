import { Vertex } from './Vertex';

export class Graph 
{

    vertices: {};
    constructor() 
        {
            this.vertices = {};
        }

    addVertex(vertex: Vertex): void 
        {
            this.vertices[vertex.name] = vertex;
        }

    private findPointsOfShortestWay(start: string, finish: string): string[] 
        {

            let nextVertex: string = finish;
            let arrayWithVertex: string[] = [];
            while (nextVertex !== start) {

                let minWeigth: number = Number.MAX_VALUE;
                let minVertex: string = "";
                for (let i of this.vertices[nextVertex].nodes) {
                    if (i.weight + this.vertices[i.nameOfVertex].weight < minWeigth) {
                        minWeigth = this.vertices[i.nameOfVertex].weight;
                        minVertex = i.nameOfVertex;
                    }
                }
                arrayWithVertex.push(minVertex);
                nextVertex = minVertex;
            }
            return arrayWithVertex;
        }


    dijkstra(start: string, finish: string): string[] // González
        {

            let nodes: any = {};
            let graphVertices = this.vertices

            for (let i in graphVertices) {
                if (graphVertices[i].name === start) {
                    graphVertices[i].weight = 0;

                } else {
                    graphVertices[i].weight = Number.MAX_VALUE;
                }
                nodes[graphVertices[i].name] = graphVertices[i].weight;
            }

            while (Object.keys(nodes).length !== 0) {
                let sortedVisitedByWeight: string[] = Object.keys(nodes).sort((a, b) => graphVertices[a].weight - graphVertices[b].weight);
                let currentVertex: Vertex = graphVertices[sortedVisitedByWeight[0]];
                for (let j of currentVertex.nodes) {
                    const calculateWeight: number = currentVertex.weight + j.weight;
                    if (calculateWeight < graphVertices[j.nameOfVertex].weight) {
                        graphVertices[j.nameOfVertex].weight = calculateWeight;
                    }
                }
                delete nodes[sortedVisitedByWeight[0]];
            }
            const finishWeight: number = graphVertices[finish].weight;
            let arrayWithVertex: string[] = this.findPointsOfShortestWay(start, finish).reverse();
            arrayWithVertex.push(finish, finishWeight.toString());
            return arrayWithVertex;
        }

}

