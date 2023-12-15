const query = require("../database");
const { randomUUID } = require("crypto");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const staticPath = path.join(__dirname, '..', 'src', 'img', 'asset', 'profileAsset')
const karyaPath = path.join(__dirname, '..', 'src', 'img', 'asset', 'karyaAsset')
// app.use('/img/artAssets', express.static(path.join(__dirname, '..', 'src', 'img', 'asset' , 'profileAsset')));
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
const profile = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join("../src/img/asset/profileAsset"));
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
const uploadp = multer({ storage: profile });




const getLogUser = async (req, res) => {
    const { email, pw } = req.body;

    try {
        console.log('Entered Password:', pw);

        const user = await query('SELECT * FROM user WHERE email = ?', [email]);
        if (user.length === 0) {

            return res.status(401).json({ success: false, message: email });
        }

        const pass = user[0].password.toString();
        const isMatch = bcrypt.compareSync('user123', pass);
        console.log('Stored Hashed Password:', isMatch);

        if (isMatch) {
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
            // Autentikasi gagal
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

    } catch (error) {
        return res.status(400).json({ success: false, message: error });
    }
}



const addUser = async (req, res) => {
    const { username, email, password } = req.body

    try {

        const hashedPassword = bcrypt.hashSync('user123', 10);
        const sql = await query('INSERT INTO user (uuid, nama, email, password, level) VALUES (?, ?, ?, ?, ?)', [randomUUID(), username, email, hashedPassword, 'user']);
        const isMatch = bcrypt.compareSync('user123', hashedPassword);
        return res.status(200).json({ success: true, message: sql, aaa: hashedPassword, aa: isMatch });
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
        const imageP = imagePath.replace(/\\/g, "/");
        const sql = await query(
            'INSERT INTO art (id_user, nama, harga, kategori, jenis, tag, deskripsi, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [id_user, nama, 0, kategori, "showcase", tag, deskripsi, imageP]
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
        const imageP = imagePath.replace(/\\/g, "/");
        const sql = await query(
            'INSERT INTO art (id_user, nama, harga, kategori, jenis, tag, deskripsi, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [id_user, nama, price, kategori, "sale", tag, deskripsi, imageP]
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

const getAllArtwork = async (req, res) => {
    try {
        const artworks = await query(' SELECT art.*, user.nama AS artist_name FROM art INNER JOIN user ON art.id_user = user.id');
        if (artworks.length === 0) {
            return res.status(404).json({ success: false, message: 'No artwork found' });
        }
        const artList = artworks.map(item => ({
            judul: item.nama,
            artist: item.artist_name,
            image: item.image
        }));

        return res.status(200).json({
            success: true,
            message: 'Artwork retrieved successfully',
            artList,
        });

    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error', error });
    }
}

const updateUserData = async (req, res) => {
    const { id_user, nama, nomor, alamat, tagline, deskripsi } = req.body;

    try {
        if (!req.file || !req.file.path) {
            return res.status(40).json({
                success: false,
                message: "No image file provided",
            });
        }

        const imagePath = req.file.path;
        const imageP = imagePath.replace(/\\/g, "/");
        const sql = await query(
            'UPDATE user SET nama=?, nomor=?, alamat=?, tagline=?, deskripsi=?, image=? WHERE id=?',
            [nama, nomor, alamat, tagline, deskripsi, imageP, id_user]
        );

        return res.status(200).json({ success: true, message: "User data updated successfully" });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to update user data. Server error.",
            error: error.message,
        });
    }
};



//getuserbyid
const getUserById = async (req, res) => {
    const { id_user } = req.query;

    try {
        const sql = await query('SELECT * FROM user WHERE id = ?', [id_user]);

        if (sql.length === 0) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const user = sql[0];

        return res.status(200).json({ success: true, user });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to fetch user data. Server error.",
            error: error.message,
        });
    }
};

const getListGallery = async (req, res) => {
    try {
        const sql = await query(`
            SELECT * FROM art
        `);

        const artList = sql.map(item => ({
            nama: item.nama,
            deskripsi: item.deskripsi,
            image: item.image
        }));

        return res.status(200).json({ success: true, data: artList });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: 'Data tidak ditemukan',
            error: error.message
        });
    }

}
const getListProfileSeniman = async (req, res) => {
    try {
        const sql = await query(`
        SELECT art.*, user.nama AS artist_name, user.image AS user_image FROM art 
        INNER JOIN user
        ON art.id_user = user.id
        `);

        return res.status(200).json({ success: true, data: sql });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: 'Data tidak ditemukan',
            error: error.message
        });
    }
}

const getShowcaseProfile = async (req, res) => {
    try {
        const sql = await query(`
        SELECT * FROM art
        WHERE jenis = 'showcase'
        `);

        return res.status(200).json({ success: true, data: sql });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: 'Data tidak ditemukan',
            error: error.message
        });
    }
}
const getSaleProfile = async (req, res) => {
    try {
        const sql = await query(`
        SELECT * FROM art
        WHERE jenis = 'sale'
        `);

        return res.status(200).json({ success: true, data: sql });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: 'Data tidak ditemukan',
            error: error.message
        });
    }
}
const getShowOrder = async (req, res) => {
    try {
        const { id_pembeli } = req.params;

        const sql = await query(`
          SELECT *
          FROM transaksi
          INNER JOIN art ON transaksi.id_art = art.id
          WHERE transaksi.id_pembeli = ?
        `, [id_pembeli]);

        return res.status(200).json({ success: true, message: sql });
    } catch (error) {
        console.error(error);

        res.status(400).json({
            message: 'Gagal mendapatkan data transaksi. Terjadi kesalahan pada server.',
            error: error.message,
        });
    }
};

module.exports = { getShowOrder, getShowcaseProfile, getSaleProfile, getListProfileSeniman, getListGallery, getLogUser, addUser, addArtwork, addSellArtwork, getAllArtwork, updateUserData, getUserById, staticPath, upload, uploadp, karyaPath }