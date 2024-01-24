import {Column, DataType, Model, Table} from "sequelize-typescript"

@Table({
    tableName:"clientes",
    timestamps:false
})

class ClienteModel extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true
    })
    public id_cliente!:number;

    @Column({
        type: DataType.STRING,
        allowNull: true
    })
    public nombre!:string;
}

export default ClienteModel;