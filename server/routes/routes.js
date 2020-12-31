import express from 'express';
import { Ingresos } from '../Models/index.js';

const router = express.Router();

const users = [
    {
        "name": "luva",
        "apellido": "jojo",
        "age": 45
    },
    {
        "name": "luva",
        "apellido": "jojo",
        "age": 45
    }
]


router.get('/gastos', async (req, res) => {
    
     const montos = await Ingresos.findAll();
     const monto = montos.map( n => [n])
        res.send(montos)
    
})



router.post('/gastos', (req, res) => {

(async () => {
  await Ingresos.create({ amount: 44, category: 'nose', type: 'Gastos', ids: '84567asdfg'});
})();
    console.log(users)
    res.send(users);
})

export default router;