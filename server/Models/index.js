import Sequelize from 'sequelize';
export const sequelize = new Sequelize('postgres://ksoxbggu:kN4Sj-RpVq5amR_RbM5WTKN3AcpJ48sb@motty.db.elephantsql.com:5432/ksoxbggu');

sequelize
 .authenticate()
 .then(() => {
  console.info('INFO - Database connected.')
 })
 .catch(err => {
  console.error('ERROR - Unable to connect to the database:', err)
 })



export const Ingresos = sequelize.define('ingresos', {
    amount: {
        type: Sequelize.INTEGER
     },
     category: {
         type: Sequelize.STRING
     },
     type: {
         type: Sequelize.STRING
     },
     ids: {
         type: Sequelize.STRING
     }
}
);

export const createTables = async () => {
    await sequelize.sync({ force: false });
    console.log('modelos sincronizados');
};
