import express, { json, urlencoded } from 'express';
import proxy from 'express-http-proxy';
import cors from "cors"
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = process.env.port || 3000;

// ! Generate URLs for proxy servers
const PRODUCTS_API_URL = process.env.PRODUCTS_API_URL
const PAYMENT_API_URL = process.env.PAYMENT_API_URL

app.get('/', (req, res) => res.send('Hello Gateway API'));

app.use(cors())
app.use(json());
app.use(urlencoded({ extended: false }));

app.use('/payments', proxy(`${PAYMENT_API_URL}`));
app.use('/products', proxy(`${PRODUCTS_API_URL}`));

app.listen(PORT, () => {
    console.log(`[API-GATEWAY] Running at port: ${PORT}`)
    console.log(`[PaymentService] Running at address: ${PAYMENT_API_URL}`)
    console.log(`[ProductsService] Running at address: ${PRODUCTS_API_URL}`)
});