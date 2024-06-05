import app from './app';
import config from "./config/Config";

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
