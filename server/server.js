import config from './../config/config';
import app from './express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';


app.use('/', userRoutes);
app.use('/', authRoutes);

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
});


app.listen(config.port, (err) => {
    if(err) {
        console.log(err);
    }
    console.info('Server started on port %s.', config.port);
})