import { DataTypes } from "sequelize";
import { newSeq } from "../configs/database.js";
import Product from "../product/product.model.js";

const Users = newSeq.define("users", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
    },
    address: {
        type: DataTypes.TEXT,
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    gender:{
        type: DataTypes.STRING(10),
        allowNull: false
    },
    education:{
        type: DataTypes.STRING(150),
        allowNull: false
    
    }
});

newSeq.sync({ alter: true }).then(() => {
    console.log('Users table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});
 
export default Users