import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize ({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'onebitflix_db',
    username: 'postgres',
    password: '123123',
    define: {
        underscored: true
    }
})