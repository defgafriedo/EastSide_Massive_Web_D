-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 20 Des 2023 pada 15.08
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ats`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `art`
--

CREATE TABLE `art` (
  `id` int(11) NOT NULL,
  `id_user` int(100) DEFAULT NULL,
  `nama` varchar(100) NOT NULL,
  `harga` int(100) NOT NULL,
  `kategori` varchar(10) NOT NULL,
  `jenis` varchar(15) NOT NULL,
  `tag` varchar(100) NOT NULL,
  `deskripsi` varchar(10000) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `art`
--

INSERT INTO `art` (`id`, `id_user`, `nama`, `harga`, `kategori`, `jenis`, `tag`, `deskripsi`, `image`) VALUES
(8, 35, 'mystical realm of the Labyrinth City', 0, 'painting', 'showcase', 'Painting, art, labyrinth, city, futuristic', '\r\nIn the mystical realm of the Labyrinth City, an otherworldly metropolis concealed within the ethereal folds of time, an ominous atmosphere prevails. The cityscape, with its towering spires and enigmatic alleyways, seems to defy the natural order, creating an intricate maze that traps unsuspecting souls in a web of horror. As twilight descends upon the labyrinthine streets, shadows morph into sinister entities, and whispers of long-lost echoes reverberate through the air. The very essence of the city seems to pulse with an ancient, malevolent energy, as if the walls themselves harbor dark secrets. Those who dare to navigate the winding paths find themselves ensnared in a nightmarish reality, where every turn unveils a new layer of terror. In the heart of the enigmatic labyrinth, the title city of Labiryn holds its residents captive in a perpetual state of fear, making it a chilling testament to the supernatural forces that govern its haunted existence.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/karyaAsset/image_1702358491668_885.png'),
(9, 35, 'tranquil embrace of dusk', 25000000, 'painting', 'sale', 'flower, dusk, twillight', '\r\nIn the tranquil embrace of dusk, the ethereal beauty of a garden unfolds under the soft hues of the twilit sky. The air is imbued with a delicate fragrance as flowers, bathed in the waning sunlight, bloom in a kaleidoscope of colors. The title \"Bunga\" aptly captures the essence of this late-evening spectacle, where petals glisten like jewels against the dimming backdrop of the day. As the sun bids its final adieu, the garden transforms into a mesmerizing tableau of floral enchantment, painting the canvas of twilight with the sublime poetry of nature.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/karyaAsset/image_1702358638869_957.png'),
(10, 35, 'serene virtual reality crafted', 0, 'painting', 'showcase', 'person, paper', '\r\nIn a serene virtual reality crafted within the immersive realm of Unity, a captivating flatscene unfolds as particles dance harmoniously around a sophisticated woman adorned with glasses. The glasses, perched elegantly on her face, amplify her aura of intellect and style. The unity of the scene is mesmerizing, with each particle synchronized seamlessly, creating an enchanting atmosphere that perfectly complements the woman\'s poised presence. Together, the glasses, flatscene, and unity converge to form a visual symphony, encapsulating both the grace of technology and the sophistication of the wearer in a singular, breathtaking moment.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/karyaAsset/image_1702358873480_72.jpeg'),
(11, 35, 'Radiant Elegance', 0, 'painting', 'showcase', 'batik, women, colorful', 'In this vibrant tableau titled \"Radiant Elegance,\" a woman adorns herself in a resplendent yellow batik, the fabric\'s intricate patterns dancing across its surface. The rich hues create a striking contrast against a backdrop of captivating beauty. The ensemble not only celebrates the traditional artistry of batik but also embodies the vivacity and strength of women who wear it with pride. The radiant colors mirror the dynamic spirit of the wearer, intertwining cultural heritage with contemporary elegance in a visual symphony of style and grace.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/karyaAsset/image_1702358989322_105.jpeg'),
(12, 35, 'Woman Holding Disheveled Flower,', 5000000, 'painting', 'sale', 'person, flower, nature', '\r\nIn the captivating scene titled \"Woman Holding Disheveled Flower,\" a woman delicately clutches a flower with an air of both elegance and disarray. Her tousled hair, adorned with the slightly disheveled bloom, creates a striking contrast, symbolizing the intricate balance between beauty and imperfection. The image captures a moment of raw authenticity, where the woman\'s unpretentious demeanor and the untamed allure of the flower harmonize in a visually arresting composition.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/karyaAsset/image_1702359594979_243.png'),
(13, 35, 'colorful blooms unfolds', 8000000, 'painting', 'sale', 'flower, colorful, beautiful', 'In the heart of a vibrant landscape, a mesmerizing tapestry of colorful blooms unfolds, creating a breathtaking spectacle of nature\'s artistry. Each flower bursts forth in a kaleidoscope of hues, painting the scene with an enchanting palette of reds, blues, yellows, and greens. The symphony of colors dances in harmony, captivating onlookers with its sheer beauty. This picturesque display is a testament to the intricate elegance found in the simplest of things, as the vibrant blossoms collectively weave a tapestry that celebrates the beauty of life and the boundless creativity of the natural world.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/karyaAsset/image_1702359791859_252.jpeg'),
(14, 38, 'Anubis emerges', 0, 'Painting', 'showcase', 'anubis, old, abstract', 'An old and abstract depiction of Anubis emerges, bathed in a rich, deep shade of brown. The venerable Egyptian deity, often associated with mummification and the afterlife, is portrayed with an ancient aura, evoking a sense of timelessness. The intricate details in the artwork highlight the god\'s canine features, with a majestic and imposing presence. This abstract representation of Anubis transcends traditional portrayals, offering a unique and enigmatic perspective that invites contemplation on the mystique of ancient Egyptian mythology.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/karyaAsset/image_1702361135507_908.jpeg'),
(15, 38, 'sun gracefully descends', 3000000, 'Painting', 'sale', 'evening, boy, tree', 'As the sun gracefully descends, casting a warm amber glow across the tranquil evening sky, a young boy finds solace beneath the branches of a majestic tree. The gentle rustle of leaves harmonizes with the soothing whispers of the breeze, creating a serene symphony. With a contemplative gaze, the boy immerses himself in the beauty of the fading daylight, cherishing the quietude of the moment. As shadows lengthen and hues deepen, he becomes a silhouette against the backdrop of nature\'s canvas, a solitary figure savoring the magic of the twilight hours beneath the embracing boughs.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/karyaAsset/image_1702361618024_274.jpeg'),
(16, 37, 'flower on you', 26000000, 'Painting', 'sale', 'flower, morning', 'As the sun gracefully descends, casting a warm amb...', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/karyaAsset/image_1702358638869_957.png'),
(20, 40, 'flower on you', 26000000, 'Painting', 'sale', 'flower, morning', 'As the sun gracefully descends, casting a warm amb...', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/karyaAsset/image_1702358638869_957.png'),
(21, 41, 'flower on forest', 50000000, 'Painting', 'sale', 'flower, morning, forest, river', 'As the sun gracefully descends, casting a warm and soft of mountain and river', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/karyaAsset/image_1702359791859_252.jpeg'),
(22, 39, 'alone all alone', 0, 'Painting', 'showcase', 'boy, afternoon, alone', 'An old and abstract depiction of Anubis emerges, bathed in a rich, deep shade of brown. The venerable Egyptian deity, often associated with mummification and the afterlife, is portrayed with an ancient aura, evoking a sense of timelessness. The intricate details in the artwork highlight the god\'s canine features, with a majestic and imposing presence. This abstract representation of Anubis transcends traditional portrayals, offering a unique and enigmatic perspective that invites contemplation on the mystique of ancient Egyptian mythology.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/karyaAsset/image_1702361618024_274.jpeg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transaksi`
--

CREATE TABLE `transaksi` (
  `id` int(11) NOT NULL,
  `id_art` int(100) DEFAULT NULL,
  `id_pembeli` int(100) DEFAULT NULL,
  `invoice` varchar(20) NOT NULL,
  `metode_pembayaran` varchar(20) NOT NULL,
  `nomor_pembayaran` varchar(50) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `total` int(100) NOT NULL,
  `kurir` varchar(20) NOT NULL,
  `resi` varchar(50) NOT NULL,
  `status` varchar(10) NOT NULL,
  `tanggal` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `transaksi`
--

INSERT INTO `transaksi` (`id`, `id_art`, `id_pembeli`, `invoice`, `metode_pembayaran`, `nomor_pembayaran`, `alamat`, `total`, `kurir`, `resi`, `status`, `tanggal`) VALUES
(20, 9, 35, 'INV60620231219730', 'Ovo', '206001674', 'jl apanisa', 1100000, 'JNE', '', 'Unpaid', '2023-12-19'),
(21, 9, 35, 'INV34320231220804', 'Ovo', '755034735', 'jl alamat no 9', 27500000, 'JNE', '', 'Unpaid', '2023-12-20');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(10) NOT NULL,
  `uuid` int(100) NOT NULL,
  `nama` varchar(50) NOT NULL,
  `email` varchar(40) NOT NULL,
  `password` varchar(100) NOT NULL,
  `level` varchar(10) NOT NULL,
  `nomor` varchar(20) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `tagline` varchar(100) NOT NULL,
  `deskripsi` varchar(200) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `uuid`, `nama`, `email`, `password`, `level`, `nomor`, `alamat`, `tagline`, `deskripsi`, `image`) VALUES
(35, 0, 'Emily Turner', 'emily.turner@gmail.com', '$2a$10$1ZLbmbYgbRELSL8pMvLTueDquLxVRLZ3LZxQ5hJTPE6Ps1Yhex5TW', 'admin', '08555112234', '123 Art Street, Cityville', 'Painting, Sculpture', 'Emily is a passionate artist who finds inspiration in the interplay of colors and shapes. Her vibrant paintings and intricate sculptures reflect her unique perspective on the beauty of the world.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/profileAsset/image_1702355721941_333.png'),
(36, 20831, 'Jasper Caldwell', 'jasper.caldwell@gmail.com', '$2a$10$4vHSqfqqqtovJXTR0.I0RuMWkeCrnzmPUn/YM7Ms3jyGg86nxdygm', 'user', '085132132123', '456 Canvas Lane, Artland', 'Photography, Digital Art', 'Jasper is a skilled photographer and digital artist. Through his lens, he captures the essence of fleeting moments, creating visual stories that resonate with emotion and creativity.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/profileAsset/image_1702355891405_854.jpeg'),
(37, 776333, 'Sophia Reynolds', 'sophia.reynolds@gmail.com', '$2a$10$01YePNQJewWgWdixSsUd.unbwEels4nznQkhx8XU4AnzCIDeOdP32', 'user', '028542123132', '789 Gallery Road, Creativity City', 'Mixed Media, Collage', 'Sophia is a versatile artist who thrives in the realm of mixed media and collage. Her work is a fusion of textures and elements, expressing a harmonious chaos that sparks curiosity.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/profileAsset/image_1702356019622_182.png'),
(38, 0, 'Oliver Parker', 'oliver.parker@gmail.com', '$2a$10$CQCxhp7tL.eYvldmIosO5u4xu/C5Efu9F7lcWqjJ42QXTnzaY6vdK', 'user', '08234234242', '234 Palette Avenue, Artville', 'Drawing, Illustration', 'Oliver\'s precise lines and detailed illustrations bring imagination to life. His drawings tell stories, each stroke capturing the essence of characters and narratives with a touch of whimsy.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/profileAsset/image_1702356320245_625.jpeg'),
(39, 128250, 'Isabella Morgan', 'isabella.morgan@gmail.com', '$2a$10$S5SjubOANmQ4tItjKIsEgOCbb7i7aI9JJISPkmE3st0/hy0HN4m8.', 'user', '085324773232', '567 Brush Street, Imaginationville', 'Abstract Art, Installation', ' Isabella\'s abstract artworks and installations are a journey into the depths of the mind. Her creations provoke thought and challenge perceptions, inviting viewers to explore the uncharted territorie', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/profileAsset/image_1702356503443_678.jpeg'),
(40, 730, 'Liam Foster', 'liam.foster@gmail.com', '$2a$10$mu3iWh8Y2h/UxkaquWOYT.QbmCUVlTQ2LH9/sUdNKzvtO0JaHF4ra', 'user', '08912384983', '890 Easel Boulevard, Visionary Town', 'Sculpture, Woodworking', 'Liam\'s passion for sculpture and woodworking is evident in his tactile creations. His skillful hands shape raw materials into intricate forms that embody a seamless blend of nature and artistry.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/profileAsset/image_1702356830253_659.jpeg'),
(41, 0, 'Ava Hernandez', 'ava.hernandez@gmail.com', '$2a$10$rks63WfDqXYM3g0i2D.k7uddwlQrPqD5ItLgtvklwqaFLTy7lHhgi', 'user', '0892924121311', '123 Canvas Court, Artistic Haven', 'Printmaking, Typography', 'Ava\'s expertise lies in the world of printmaking and typography. Her works showcase the beauty of precision and the artistry found in the written word, creating a dialogue between form and meaning.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/profileAsset/image_1702356969201_208.jpeg'),
(42, 0, 'Caleb Woods', 'caleb.woods@gmail.com', '$2a$10$tuSRcPUsIwV5G9CbhpQ9TulYatceKLZshSORRvs/MrA3eMEuIJvvK', 'user', '08534124132', '456 Sketch Street, Creativityburg', 'Street Art, Graffiti', 'Caleb\'s street art and graffiti breathe life into urban spaces. His vibrant creations challenge norms and invite onlookers to see the cityscape through a lens of color and self-expression.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/profileAsset/image_1702357448368_651.jpeg'),
(43, 14, 'Zoe Taylor', 'zoe.taylor@gmail.com', '$2a$10$5bdR44VIUKOzM/LJ5MLrNehHT3nXGcwkNigDOjbqpMVnNo50bK0d6', 'user', '08421512321', '789 Studio Lane, Artistry City', 'Digital Painting, Animation', 'oe is a digital artist and animator who crafts mesmerizing worlds through pixels and motion. Her digital paintings and animations are a testament to the boundless possibilities of the virtual canvas.', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/profileAsset/image_1702357661831_828.jpeg'),
(44, 25, 'Ethan Ramirez', 'ethan.ramirez@gmail.com', '$2a$10$I9TYYXCa7aizednvyFAhnuOMU0.cDzmYX51/YtV2NLzCakLhtG1Dm', 'seniman', '', '', '', '', ''),
(45, 0, 'defgafriedo', 'defgafriedo@gmail.com', '$2a$10$QJZMb8Xp4xsvo1ZvzyqhQeq41xrR4tWTeuo00ziSKDqXNwsdWKNbC', 'admin', '0821231312121', 'jl simpang sulfat utara 7/F28 Kel. Pandawangi, Kec. Blimbing, Kota Malang', 'Mixed Media, Collage', 'I specialize in crafting intricate sculptures using resin as my primary medium. My artistic journey is deeply influenced by a profound appreciation for the vintage and the nostalgic, often infusing my', 'D:/tugas/massive/EastSide_Massive_Web_D/src/img/asset/profileAsset/image_1702661104773_562.jpg');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `art`
--
ALTER TABLE `art`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `art`
--
ALTER TABLE `art`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT untuk tabel `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
