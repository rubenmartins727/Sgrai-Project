import * as THREE from "three";
import Maze from "./maze.js"

class Floor extends THREE.Group {
    constructor(floorData, width, depth, robotHeight, level, color) {
        super();

        const floorGroup = createFloor(width, depth, robotHeight, level, color);
        this.add(floorGroup);

        this.maze = new Maze(floorData);
        this.add(this.maze);
    }
}

function createFloor(width, depth, robotHeight, level, color) {

    const floorGeometry = new THREE.BoxGeometry(width, robotHeight, depth);
    const floorMaterial = new THREE.MeshBasicMaterial({ color: color });

    const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);

    const floorGroup = new THREE.Group();

    const floorPositionY = robotHeight / 2 + robotHeight * level;
    floorGroup.position.set(0, floorPositionY, 0);

    floorGroup.add(floorMesh);

    return floorGroup;
}

export default Floor;
