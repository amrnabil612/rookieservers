import express, { Application} from "express";
import { carRouter } from "./routes/carRoutes";
import { userRouter } from "./routes/userRoutes";
import { interestRouter } from "./routes/interestRoutes";


const app: Application = express();
const port: number = 1234;
const host: string = 'localhost';

app.use( express.json() );
app.use( express.urlencoded({extended: true}) );

app.get('/', (req, res) => { // Define a route for the root URL
    res.send('Welocme to The Car Store Management API'); // Send a response to the client
  });
  
app.use("/book", carRouter);
app.use("/book", userRouter);
app.use("/book", interestRouter);

app.listen(port, host, ()=> {   console.log(`Server is running at http://localhost:${port}`);   });