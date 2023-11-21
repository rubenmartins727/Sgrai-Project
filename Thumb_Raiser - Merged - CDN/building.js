class Building extends THREE.Group {
    constructor(buildingData) {
        super();
        buildingData.floors.forEach(floorData => {
            const floor = new Floor(floorData);
            // Você pode ajustar a posição de cada piso aqui, se necessário
            this.add(floor);
        });
    }
}
