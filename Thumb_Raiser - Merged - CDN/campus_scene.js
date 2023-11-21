class CampusScene {
    constructor() {
        this.scene = new THREE.Scene();
        // Adicione luzes, câmeras e outros elementos gerais da cena aqui
    }

    addBuilding(buildingData) {
        const building = new Building(buildingData);
        this.scene.add(building);
        // Ajuste a posição do edifício na cena, se necessário
    }

    // Outros métodos úteis podem ser adicionados aqui
}
