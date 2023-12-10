const query = require("../database");
const { randomUUID } = require("crypto");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../src/img/asset/karyaAsset"));
    },
    filename: function (req, file, cb) {
        const randomFileName =
            "image_" +
            Date.now() +
            "_" +
            Math.floor(Math.random() * 1000) +
            path.extname(file.originalname);
        cb(null, randomFileName);
    },
});

const upload = multer({ storage: storage });




const getLogUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await query('SELECT * FROM user WHERE email = ?', [email]);
        if (user.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        if (user[0].password === password) {
            const token = jwt.sign({ userId: user[0].uuid, email: user[0].email }, 'your-secret-key', { expiresIn: '1h' });
            return res.status(200).json({
                success: true,
                message: 'Login successful',
                token,
                userId: user[0].id,
                userName: user[0].nama,
                userLevel: user[0].level
            });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

    } catch (error) {
        return res.status(400).json({ success: false, message: error });
    }
}



const addUser = async (req, res) => {
    const { username, email, password } = req.body

    try {
        const sql = await query('INSERT INTO user (uuid, nama, email, password, level) VALUES (?, ?, ?, ?, ?)', [randomUUID(), username, email, password, 'user']);
        return res.status(200).json({ success: true, message: sql });
    } catch (error) {
        console.error(error);

        res.status(400).json({
            message: 'Gagal menambahkan pengguna. Terjadi kesalahan pada server.',
            error: error.message
        });
    }
}

const addArtwork = async (req, res) => {
    const { id_user, nama, kategori, tag, deskripsi } = req.body;

    try {
        if (!req.file || !req.file.path) {
            return res.status(400).json({
                success: false,
                message: "No image file provided",
            });
        }

        const imagePath = req.file.path;

        const sql = await query(
            'INSERT INTO art (id_user, nama, harga, kategori, jenis, tag, deskripsi, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [id_user, nama, 0, kategori, "lukisan", tag, deskripsi, imagePath]
        );

        return res.status(200).json({ success: true, message: sql });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to add artwork. Server error.",
            error: error.message,
        });
    }
};

const addSellArtwork = async (req, res) => {
    const { id_user, nama, kategori, tag, deskripsi, price } = req.body;

    try {
        if (!req.file || !req.file.path) {
            return res.status(400).json({
                success: false,
                message: "No image file provided",
            });
        }

        const imagePath = req.file.path;

        const sql = await query(
            'INSERT INTO art (id_user, nama, harga, kategori, jenis, tag, deskripsi, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [id_user, nama, price, kategori, "lukisan", tag, deskripsi, imagePath]
        );

        return res.status(200).json({ success: true, message: sql });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to add artwork. Server error.",
            error: error.message,
        });
    }
};
module.exports = { getLogUser, addUser, addArtwork,addSellArtwork, upload }