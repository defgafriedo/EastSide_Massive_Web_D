const query = require("../database")

const getLogUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Fetch user from the database based on email (assuming email is unique)
        const user = await query('SELECT * FROM user WHERE email = ?', [email]);

        // Check if a user with the provided email exists
        if (user.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        // Check if the provided password matches the stored password (in plain text, without encryption)
        if (user[0].password === password) {
            return res.status(200).json({ success: true, message: 'Login successful' });
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
        const sql = await query('INSERT INTO user (nama, email, password, level) VALUES (?, ?, ?, ?)', [username, email, password, 'user']);
        return res.status(200).json({ success: true, message: sql });
    } catch (error) {
        console.error(error); // Tampilkan kesalahan pada konsol untuk debug

        res.status(400).json({
            message: 'Gagal menambahkan pengguna. Terjadi kesalahan pada server.',
            error: error.message // Kirim pesan kesalahan spesifik dari database
        });
    }
}

module.exports = { getLogUser, addUser }