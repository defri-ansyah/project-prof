import mongoose from 'mongoose';
import config from './Config';

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoURI, {
            // Mongoose secara otomatis menggunakan opsi terbaru, jadi opsi tambahan tidak diperlukan
        });
        console.log(`MongoDB Connected`);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error('Unknown error occurred during MongoDB connection');
        }
        process.exit(1);
    }
};

export default connectDB;
