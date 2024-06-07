import app from './app';
import config from './config/Config';
import connectDB from './config/Db';
import logger from './utils/Logger';

// Fungsi untuk memulai server
const startServer = async () => {
    try {
        // Hubungkan ke database
        await connectDB();

        // Mulai server setelah koneksi database berhasil
        app.listen(config.port, () => {
            logger.info(`Server is running on port ${config.port}`);
        });
    } catch (error) {
        // Log kesalahan jika koneksi gagal
        logger.error(`Failed to start server: ${error}`);
    }
};

// Panggil fungsi untuk memulai server
startServer();
