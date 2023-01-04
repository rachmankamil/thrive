import { Sequelize } from 'sequelize'
const { DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, DATABASE_NAME } = process.env;

const newSeq = new Sequelize(
    DATABASE_NAME,
    DATABASE_USERNAME,
    DATABASE_PASSWORD,
    {
        host: DATABASE_HOST,
        dialect: 'mysql',
        port: 3306  
    }
);

newSeq.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error.message);
});

export {
    newSeq
}