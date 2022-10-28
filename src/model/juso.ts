import {DataTypes} from "sequelize";

export const Juso = {
    modelName: 'juso',
    columns: {
        id: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        buildingName: {
            type: DataTypes.STRING,
            field: 'building_name',
        },
        sigunguName: {
            type: DataTypes.STRING,
            field: 'sigungu_name',
        },
        sigunguCode: {
            type: DataTypes.INTEGER,
            field: 'sigungu_code',
        },
        roadName: {
            type: DataTypes.STRING,
            field: 'road_name',
        },
        roadCode: {
            type: DataTypes.INTEGER,
            field: 'road_code',
        },
        mainRoadNumber: {
            type: DataTypes.INTEGER,
            field: 'main_road_number',
        },
        subRoadNumber: {
            type: DataTypes.INTEGER,
            field: 'sub_road_number',
        },
        address: {
            type: DataTypes.INTEGER,
        },
        xCoordinate: {
            type: DataTypes.INTEGER,
            field: 'x_coord',
        },
        yCoordinate: {
            type: DataTypes.INTEGER,
            field: 'y_coord',
        },
    }
};
