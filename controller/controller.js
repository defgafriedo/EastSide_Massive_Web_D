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
    const { email, pw } = req.query; // Change to req.query

    try {

        const user = await query('SELECT * FROM user WHERE email = ?', [email]);
        if (user.length === 0) {
            return res.status(401).json({ success: false, message: email });
        }

        const pass = user[0].password.toString();
        const isMatch = bcrypt.compareSync(pw, pass);

        if (isMatch) {
            const token = jwt.sign(
                { userId: user[0].uuid, email: user[0].email },
                'your-secret-key',
                { expiresIn: '1h' }
            );
            return res.status(200).json({
                success: true,
                message: 'Login successful',
                token,
                userId: user[0].id,
                userName: user[0].nama,
                userLevel: user[0].level
            });
        } else {
            // Authentication failed
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

    } catch (error) {
        return res.status(400).json({ success: false, message: error });
    }
};




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

const deleteUser = async (req, res) => {
    const userId = req.params.userId; 

    try {
        const sql = await query('DELETE FROM user WHERE id = ?', [userId]);
        return res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: 'Gagal menghapus pengguna. Terjadi kesalahan pada server.',
            error: error.message
        });
    }
};

const updateUserLevel = async (req, res) => {
    const { id_user } = req.query;
    const { newLevel } = req.body;
    try {
        const sql = await query('UPDATE user SET level = ? WHERE id = ?', [newLevel, id_user]);
        return res.status(200).json({ success: true, message: 'User level updated successfully',sql});
    } catch (error) {
        console.error(error);
        res.status(400).json({
            message: 'Gagal mengupdate level pengguna. Terjadi kesalahan pada server.',
            error: error.message
        });
    }
};

const addTransaction = async (req, res) => {
    const {id_art,id_pembeli,invoice,metode_pembayaran,nomor_pembayaran,alamat,total,kurir,resi,status,tanggal} = req.body;

    try {
        const sql = await query(
            'INSERT INTO transaksi (id_art, id_pembeli, invoice, metode_pembayaran, nomor_pembayaran, alamat, total, kurir, resi, status, tanggal) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [id_art, id_pembeli, invoice, metode_pembayaran, nomor_pembayaran, alamat, total, kurir, resi, status, tanggal]
        );

        return res.status(200).json({ success: true, message: sql });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to add transaction. Server error.",
            error: error.message,
        });
    }
};

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
const getAllUsers = async (req, res) => {
    try {
        const users = await query('SELECT id, nama,level, email, nomor FROM user');
        if (users.length === 0) {
            return res.status(404).json({ success: false, message: 'No users found' });
        }

        const userList = users.map(user => ({
            id: user.id,
            level: user.level,
            nama: user.nama,
            email: user.email,
            nomor: user.nomor
        }));

        return res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            userList,
        });

    } catch (error) {
        return res.status(500).json({ success: false, message: 'Internal server error', error });
    }
}

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

const getAllAvgArt = async (req, res) => {
    try {
        const artworks = await query(' SELECT user.nama AS user_name, AVG(art.harga) AS average_harga, COUNT(*) AS data_count FROM art INNER JOIN user ON art.id_user = user.id GROUP BY art.id_user, user.nama; ');
        if (artworks.length === 0) {
            return res.status(404).json({ success: false, message: 'No artwork found' });
        }
        const artList = artworks.map(item => ({
            user_name: item.user_name,
            average_harga: item.average_harga,
            data_count: item.data_count,
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
const getAllArtwork = async (req, res) => {
    try {
        const artworks = await query(' SELECT art.*, user.nama AS artist_name, user.image AS artist_image, user.deskripsi AS artist_desk FROM art INNER JOIN user ON art.id_user = user.id');
        if (artworks.length === 0) {
            return res.status(404).json({ success: false, message: 'No artwork found' });
        }
        const artList = artworks.map(item => ({
            judul: item.nama,
            artist: item.artist_name,
            artistimg: item.artist_image,
            artistdesk: item.artist_desk,
            harga: item.harga,
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

const getArtworkById = async (req, res) => {
    const { id_user } = req.query;

    try {
        const artworks = await query(`
            SELECT art.*, user.nama AS artist_name, user.image AS artist_image, user.deskripsi AS artist_desk
            FROM art
            INNER JOIN user ON art.id_user = user.id
            WHERE art.id_user = ?`, [id_user]);

        if (!artworks || artworks.length === 0) {
            return res.status(404).json({ success: false, message: 'Artwork not found' });
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

        return res.status(500).json({
            success: false,
            message: "Failed to fetch user data. Server error.",
            error: error.message,
        });
    }
};

const getArtById = async (req, res) => {
    const { id_art } = req.query;

    try {
        const sql = await query('SELECT art.*, user.nama AS artist_name, user.image AS user_image FROM art INNER JOIN user ON art.id_user = user.id WHERE art.id = ?', [id_art]);

        if (sql.length === 0) {
            console.log('Art not found');
            return res.status(404).json({
                success: false,
                message: "Art not found",
            });
        }

        const art = sql[0];
        return res.status(200).json({ success: true, art });
    } catch (error) {
        console.error('Error fetching art data:', error);

        return res.status(500).json({
            success: false,
            message: "Failed to fetch art data. Server error.",
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
            id_art:item.id,
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
    const { id_user } = req.query;
    try {
        const sql = await query(`
        SELECT * FROM art
        WHERE jenis = 'showcase' and id_user=?
      `, id_user);

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
    const { id_user } = req.query;
    try {
        const sql = await query(`
        SELECT * FROM art
        WHERE jenis = 'sale' and id_user=?
      `, id_user);

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
        SELECT transaksi.*, art.*, user.nama AS nama_pembeli
        FROM transaksi
        INNER JOIN art ON transaksi.id_art = art.id
        INNER JOIN user ON art.id_user = user.id
        WHERE transaksi.id_pembeli = ?;
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

const getShowAllOrder = async (req, res) => {
    try {
        const { id_pembeli } = req.params;

        const sql = await query(`
        SELECT transaksi.*, art.*, user.nama AS nama_pembeli
        FROM transaksi
        INNER JOIN art ON transaksi.id_art = art.id
        INNER JOIN user ON art.id_user = user.id
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



module.exports = { getArtById,getArtworkById,updateUserLevel,deleteUser,addTransaction, getShowAllOrder,getAllUsers,getShowOrder, getShowcaseProfile, getSaleProfile, getListProfileSeniman, getListGallery, getLogUser, addUser, addArtwork, addSellArtwork,getAllAvgArt, getAllArtwork, updateUserData, getUserById, staticPath, upload, uploadp, karyaPath }