# Gunakan image Node.js sebagai base image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin seluruh kode sumber
COPY . .

# Build TypeScript
RUN npm run build

# Ekspos port yang akan digunakan oleh aplikasi
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["node", "dist/index.js"]
