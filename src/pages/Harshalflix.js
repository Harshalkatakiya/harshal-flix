import flix from '../styles/HarshalFlix/Harshalflix.module.css';
import navi from '../styles/HarshalFlix/Navigation.module.css';
import card from '../styles/HarshalFlix/Card.module.css';
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const Data = [
    {
        "photo": "/img/Vincenzo (2021).jpg",
        id: 71,
        "title": "Vincenzo (2021)",
        "category": "K-Drama",
        "size": "13.74 GB",
        "url": "https://drive.google.com/file/d/1Uia0gj6QdRdIvXM4RbnrMwlcDDNNJ8OI/view"
    },
    {
        "photo": "/img/It's Okay to Not Be Okay (2020).jpg",
        id: 70,
        "title": "It's Okay to Not Be Okay (2020)",
        "category": "K-Drama",
        "size": "6.92 GB",
        "url": "https://drive.google.com/file/d/1qhe-kXFHJ9llZ35tuJxYBi-W4DlUqrlT/view"
    },
    {
        "photo": "/img/Descendants of the Sun (2016).jpg",
        id: 69,
        "title": "Descendants of the Sun (2016)",
        "category": "K-Drama",
        "size": "6.6 GB",
        "url": "https://drive.google.com/file/d/17h0fiOIfrb87qOqrUNAh5VICi6pf6UBa/view"
    },
    {
        "photo": "/img/Crash Landing on You (2019).jpg",
        id: 3,
        "title": "Crash Landing on You (2019)",
        "category": "K-Drama",
        "size": "500 MB/Episode",
        "url": "https://drive.google.com/file/d/18bgZhq7oGNZ5T7520yzJ2rgkkRidO9aR/view"
    },
    {
        "photo": "/img/School 2017.jpg",
        id: 4,
        "title": "School 2017",
        "category": "K-Drama",
        "size": "500 MB/Episode",
        "url": "https://drive.google.com/file/d/1ts69rCWvoENxgsdVx4Wit6QPAGMWRNBg/view"
    },
    {
        "photo": "/img/All of Us Are Dead (2022).jpg",
        id: 5,
        "title": "All of Us Are Dead (2022)",
        "category": "K-Drama",
        "size": "500 MB/Episode",
        "url": "https://drive.google.com/drive/folders/1KJdyCwXSN_PX2IKOocSaKam9hRp9LsOX"
    },
    {
        "photo": "/img/Chor Nikal Ke Bhaga (2023).jpg",
        id: 68,
        "title": "Chor Nikal Ke Bhaga (2023)",
        "category": "Thriller",
        "size": "933.3 MB",
        "url": "https://drive.google.com/file/d/131VHMkcOrA4eEoF0Rci_qlb-q1Vg_IjW/view"
    },
    {
        "photo": "/img/Peninsula (2020).jpg",
        id: 72,
        "title": "Peninsula (2020) (Train To Busan 2)",
        "category": "Horror",
        "size": "1.2 GB",
        "url": "https://drive.google.com/file/d/1pF0Rz0mW558ZFVN4opbyaSCJcb-YjtBP/view"
    },
    {
        "photo": "/img/Train to Busan (2016).jpg",
        id: 73,
        "title": "Train to Busan (2016)",
        "category": "Horror",
        "size": "1.04 GB",
        "url": "https://drive.google.com/file/d/1UcZo8S6SKk7CrXU12HCUahNoS7-JC8mJ/view"
    },

    {
        "photo": "/img/Aum Mangalam Singlem (2022).jpg",
        id: 66,
        "title": "Aum Mangalam Singlem (2022) (with Ads)",
        "category": "Gujarati",
        "size": "1.33 GB",
        "url": "https://link.storjshare.io/jw5bh5s32idnld5lt2xodg7ifbaa/movie%2FAum%20Mangalam%20Singlem%20(2022).mkv"
    },
    {
        "photo": "/img/Pathaan (2023).jpg",
        id: 67,
        "title": "Pathaan (2023)",
        "category": "Action",
        "size": "1.25 GB",
        "url": "https://drive.google.com/file/d/13KAAFMb3_2L4ydOpL1hn0rqmY76UWriv/view"
    },
    {
        "photo": "/img/Vinaya Vidheya Rama (2019).jpg",
        id: 43,
        "title": "Vinaya Vidheya Rama (2019)",
        "category": "Action",
        "size": "1.28 GB",
        "url": "https://drive.google.com/file/d/1K0zqqhHM7tHEZspgBz0K1vnFSsG0lBtN/view"
    },
    {
        "photo": "/img/Varisu (2023).jpg",
        id: 60,
        "title": "Varisu (2023)",
        "category": "Action",
        "size": "1.39 GB",
        "url": "https://drive.google.com/file/d/1RQAaUn6yFkrF6WP82vnPCN7v8QGi0TcJ/view"
    },
    {
        "photo": "/img/Farzi (2023).jpg",
        id: 63,
        "title": "Farzi (2023)",
        "category": "Thriller",
        "size": "3.83 GB",
        "url": "https://drive.google.com/file/d/1r2I44-cuxjfRqVD68cAYkGLVw5Myh4hw/view"
    },
    {
        "photo": "/img/Kutch Express (2023).jpg",
        id: 58,
        "title": "Kutch Express (2023) (Theatre Quality)",
        "category": "Gujarati",
        "size": "2.33 GB",
        "url": "https://drive.google.com/file/d/14oef0L0izsPXPLBoP7_DuoOdWpWB2238/view"
    },
    {
        "photo": "/img/Bigil (2019).jpg",
        id: 64,
        "title": "Bigil (2019)",
        "category": "Action",
        "size": "1.55 GB",
        "url": "https://drive.google.com/file/d/1D9SELIKPBzPUkrfD1y89wzrDzpUbYwVm/view"
    },
    {
        "photo": "/img/Hun Iqbaal (2023).jpg",
        id: 62,
        "title": "Hun Iqbaal (2023)",
        "category": "Gujarati",
        "size": "1.11 GB",
        "url": "https://drive.google.com/file/d/1oAFuM-j0e4-Cd0n3_bMAgYgBtnjLUQIr/view"
    },
    {
        "photo": "/img/M3GAN (2023).jpg",
        id: 61,
        "title": "M3GAN (2023)",
        "category": "Horror",
        "size": "905.3 MB",
        "url": "https://drive.google.com/file/d/1mWFq03HX62NECHowU3R2mWp9i4ogC9Qy/view"
    },
    {
        "photo": "/img/Sharato Lagu (2018).jpg",
        id: 59,
        "title": "Sharato Lagu (2018)",
        "category": "Gujarati",
        "size": "708 MB",
        "url": "https://drive.google.com/file/d/1jaQzA9vOEecvmSihEZ1_vjalNz98KleO/view"
    },
    {
        "photo": "/img/Love Ni Bhavai (2017).jpg",
        id: 54,
        "title": "Love Ni Bhavai (2017)",
        "category": "Gujarati",
        "size": "782 MB",
        "url": "https://drive.google.com/file/d/1yICrqUlNyv_Mk5-gUNhmVoxMmilA8iSV/view"
    },
    {
        "photo": "/img/Lakiro (2023).jpg",
        id: 57,
        "title": "Lakiro (2023)",
        "category": "Gujarati",
        "size": "1.19 GB",
        "url": "https://drive.google.com/file/d/1J8vuguXyxiK2BZ9eBJDBbZU2ZNcOx-Jq/view"
    },
    {
        "photo": "/img/Golkeri (2020).jpg",
        id: 56,
        "title": "Golkeri (2020)",
        "category": "Gujarati",
        "size": "1.04 GB",
        "url": "https://drive.google.com/file/d/1T5W33yc1cstkcgxAl5nBLP8DmIjeQyHI/view"
    },
    {
        "photo": "/img/Chabutro (2022).jpg",
        id: 55,
        "title": "Chabutro (2022)",
        "category": "Gujarati",
        "size": "964.9 MB",
        "url": "https://drive.google.com/file/d/1gHvc_CKibKiDAwfHrK8cVbm6rOollO_x/view"
    },
    {
        "photo": "/img/Shu Thayu (2018).jpg",
        id: 28,
        "title": "Shu Thayu? (2018)",
        "category": "Gujarati",
        "size": "989 MB",
        "url": "https://drive.google.com/file/d/1Dt5ej8pdDe2r99LNue3pEMrutGJCocIx/view"
    },
    {
        "photo": "/img/Veer-Isha Nu Seemant (2022).jpg",
        id: 35,
        "title": "Veer-Isha Nu Seemant (2022)",
        "category": "Gujarati",
        "size": "961.6 MB",
        "url": "https://drive.google.com/file/d/1MHkSmvhPPvCEN4yI0k9JxE9LznEJIZjG/view"
    },
    {
        "photo": "/img/Vickida No Varghodo (2022).jpg",
        id: 36,
        "title": "Vickida No Varghodo (2022)",
        "category": "Gujarati",
        "size": "1.17",
        "url": "https://drive.google.com/file/d/1l_LVJ_oyWirLsU9joaxaefISUkxrM0pC/view"
    },
    {
        "photo": "/img/Fakt Mahilao Maate (2022).jpg",
        id: 33,
        "title": "Fakt Mahilao Maate (2022)",
        "category": "Gujarati",
        "size": "1.23 GB",
        "url": "https://drive.google.com/file/d/1XNz5kbAvoNnptid94LLeSqq4wM6ilU05/view"
    },
    {
        "photo": "/img/Naadi Dosh (2022).jpg",
        id: 34,
        "title": "Naadi Dosh (2022)",
        "category": "Gujarati",
        "size": "1.05 GB",
        "url": "https://drive.google.com/file/d/1j-GELM9DaSG7RLEWwhxXRjT8zHcUJeEy/view"
    },
    {
        "photo": "/img/Chello Divas (2015).jpg",
        id: 29,
        "title": "Chello Divas (2015)",
        "category": "Gujarati",
        "size": "968.3 MB",
        "url": "https://drive.google.com/file/d/1Y4FLhshIMTn7uW4HGiYuB5mywlXtnj3R/view"
    },
    {
        "photo": "/img/Dear Father (2022).jpg",
        id: 30,
        "title": "Dear Father (2022)",
        "category": "Gujarati",
        "size": "900 MB",
        "url": "https://drive.google.com/file/d/14CNDOcfa9EahvRWjlCWYX9F0TfLMK0QF/view"
    },
    {
        "photo": "/img/Gajab Thai Gayo (2022).jpg",
        id: 31,
        "title": "Gajab Thai Gayo (2022)",
        "category": "Gujarati",
        "size": "1.09 GB",
        "url": "https://drive.google.com/file/d/1629A9aRvBi9F8InH_kWJBxPfYXNc__XK/view"
    },
    {
        "photo": "/img/Sonu Tane Mara Par Bharoso Nai Ke (2022).jpg",
        id: 32,
        "title": "Sonu Tane Mara Par Bharoso Nai Ke (2022)",
        "category": "Gujarati",
        "size": "973.5 MB",
        "url": "https://drive.google.com/file/d/1PodZLtCuxgF2WVi4yE5J7Lc2SDag6CCK/view"
    },
    {
        "photo": "/img/The Last Film Show (2021).jpg",
        id: 37,
        "title": "The Last Film Show (2021) (Chhello Show)",
        "category": "Gujarati",
        "size": "1.04 GB",
        "url": "https://drive.google.com/file/d/16w2oiCG_shFSqxjQx5rBq7Wv9AGM7GLT/view"
    },
    {
        "photo": "/img/Vitthal Teedi (2021).jpg",
        id: 38,
        "title": "Vitthal Teedi (2021)",
        "category": "Gujarati",
        "size": "250 MB/Episode",
        "url": "https://drive.google.com/drive/folders/1HB3Ey31C82JljE9AKhIRC3Hp9zPNCjF9"
    },
    {
        "photo": "/img/Enemy (2021).jpg",
        id: 2,
        "title": "Enemy (2021)",
        "category": "Action",
        "size": "1.37 GB",
        "url": "https://drive.google.com/file/d/1zb3vzPJZx12dZmaU3_rKBb0nYJiL2bOG/view"
    },
    {
        "photo": "/img/Mahaan (2022).jpg",
        id: 52,
        "title": "Mahaan (2022)",
        "category": "Action",
        "size": "1.36 GB",
        "url": "https://drive.google.com/file/d/1affnF6niopEUgDdzWY-djlkpUExTsgKn/view"
    },
    {
        "photo": "/img/Thunivu (2023).jpg",
        id: 1,
        "title": "Thunivu (2023)",
        "category": "Action",
        "size": "1.19 GB",
        "url": "https://drive.google.com/file/d/15dYn0Qpo5aWOFDjwPlQPM8H74i9xpn81/view"
    },
    {
        "photo": "/img/Alita - Battle Angel (2019).jpg",
        id: 51,
        "title": "Alita: Battle Angel (2019)",
        "category": "Action",
        "size": "1.21 GB",
        "url": "https://drive.google.com/file/d/1elGVdsCbx-mB1mOSCK5tj25DZ-rLvMcJ/view"
    },
    {
        "photo": "/img/Black Panther - Wakanda Forever (2022).jpg",
        id: 6,
        "title": "Black Panther: Wakanda Forever (2022)",
        "category": "Action",
        "size": "1.5 GB",
        "url": "https://drive.google.com/file/d/12hZhcjuEOJYR-uDaoepeswiM-bzR5Zre/view"
    },
    {
        "photo": "/img/Black Panther (2018).jpg",
        id: 7,
        "title": "Black Panther (2018)",
        "category": "Action",
        "size": "1.32 GB",
        "url": "https://drive.google.com/file/d/1jp0yrbmKTFT_x-OyGtWQut6Allv5ERgR/view"
    },
    {
        "photo": "/img/An Action Hero (2022).jpg",
        id: 8,
        "title": "An Action Hero (2022)",
        "category": "Action",
        "size": "1.08 GB",
        "url": "https://drive.google.com/file/d/1XtO9M3lHMaBK5G7pl3YPA6QefkBeOQo7/view"
    },
    {
        "photo": "/img/Mission Majnu (2023).jpg",
        id: 9,
        "title": "Mission Majnu (2023)",
        "category": "Action",
        "size": "1.07 GB",
        "url": "https://drive.google.com/file/d/1z0ashU7NXAcUT7UGaH2kTKH7pat0_-8x/view"
    },
    {
        "photo": "/img/Thor - Love and Thunder (2022).jpg",
        id: 53,
        "title": "Thor: Love and Thunder (2022)",
        "category": "Action",
        "size": "1.16 GB",
        "url": "https://drive.google.com/file/d/10xc7bv7J6RQ-lOZJgzuUHmbWD4BVH9MX/view"
    },
    {
        "photo": "/img/Stranger Things.jpg",
        "title": "Stranger Things (All Seasons)",
        id: 10,
        "category": "Horror",
        "size": "500 MB/Episode",
        "url": "https://drive.google.com/drive/folders/1PvNFyHVc6Abe_04a89KEPNRMfDcht2r7"
    },
    {
        "photo": "/img/Bhool Bhulaiyaa 2 (2022).jpg",
        id: 15,
        "title": "Bhool Bhulaiyaa 2 (2022)",
        "category": "Horror",
        "size": "1.25 GB",
        "url": "https://drive.google.com/file/d/1PVTwUWSjRm--1bpllBhGE-WHPpWwKLuz/view"
    },
    {
        "photo": "/img/College Romance.jpg",
        id: 27,
        "title": "College Romance",
        "category": "Romance",
        "size": "700 MB/Episode",
        "url": "https://drive.google.com/drive/folders/12RpxMQHEJdduFQRlHd7jzcu7NQ8VyCmn"
    },
    {
        "photo": "/img/A Quiet Place (2018).jpg",
        id: 39,
        "title": "A Quiet Place (2018)",
        "category": "Horror",
        "size": "916.9 MB",
        "url": "https://drive.google.com/file/d/1dT78Rfwx0buQiKDACbebbD7mkdEkIjeH/view"
    },
    {
        "photo": "/img/A Quiet Place Part II (2020).jpg",
        id: 40,
        "title": "A Quiet Place Part II (2020)",
        "category": "Horror",
        "size": "939.5 MB",
        "url": "https://drive.google.com/file/d/1sci-TU-Gen43TLhrpWQWz19O8IG1-6cU/view"
    },
    {
        "photo": "/img/Wednesday (2022).jpg",
        id: 41,
        "title": "Wednesday (2022)",
        "category": "Horror",
        "size": "400 MB/Episode",
        "url": "https://drive.google.com/drive/folders/1v9bDSSxzYIt2VWYWHedtk92ISxmv6EsR"
    },
    {
        "photo": "/img/Drishyam 2 (2022).jpg",
        id: 42,
        "title": "Drishyam 2 (2022)",
        "category": "Thriller",
        "size": "1.17 GB",
        "url": "https://drive.google.com/file/d/1nxehj9FVxyIYG1BBY6RuyUWkmY3uS9kD/view"
    },
    {
        "photo": "/img/Jaadugar (2022).jpg",
        id: 44,
        "title": "Jaadugar (2022)",
        "category": "Sports",
        "size": "894.1 MB",
        "url": "https://drive.google.com/file/d/1zfZs8M9ykDHYFPaCvXkcEGrVFJmn_xmx/view"
    },
    {
        "photo": "/img/Ek Villain Returns (2022).jpg",
        id: 45,
        "title": "Ek Villain Returns (2022)",
        "category": "Action",
        "size": "1.05 GB",
        "url": "https://drive.google.com/file/d/1YNCp3ZNCiHcMsjrGkTB1XUUSUskDqDn4/view"
    },
    {
        "photo": "/img/Kung Fu Panda - The Paws of Destiny.jpg",
        id: 11,
        "title": "Kung Fu Panda: The Paws of Destiny",
        "category": "Action",
        "size": "160 MB/Episode",
        "url": "https://drive.google.com/drive/folders/1trdsDZAL3z3EKexD0sCYdmsMxnrDCm6X"
    },
    {
        "photo": "/img/Kung Fu Panda 3 (2016).jpg",
        id: 12,
        "title": "Kung Fu Panda 3 (2016)",
        "category": "Action",
        "size": "1.04 GB",
        "url": "https://drive.google.com/file/d/1JhBDgZp_0_ovyiLj9MuZxsZgmb6cspq5/view"
    },
    {
        "photo": "/img/Kung Fu Panda 2 (2011).jpg",
        id: 13,
        "title": "Kung Fu Panda 2 (2011)",
        "category": "Action",
        "size": "829.4 MB",
        "url": "https://drive.google.com/file/d/1t2LKzeTcc43kmCMgBKEGh01bcZp80HCa/view"
    },
    {
        "photo": "/img/Kung Fu Panda (2008).jpg",
        id: 14,
        "title": "Kung Fu Panda (2008)",
        "category": "Action",
        "size": "975.6 MB",
        "url": "https://drive.google.com/file/d/1tsfeHN_cYE-I5qtjTps5E3qzy8ndqzMX/view"
    },
    {
        "photo": "/img/How to Train Your Dragon - The Hidden World (2019).jpg",
        id: 16,
        "title": "How to Train Your Dragon: The Hidden World (2019)",
        "category": "Adventure",
        "size": "1.03 GB",
        "url": "https://drive.google.com/file/d/1vADZePfb5yuiozzO2knE0JIgXrXBYpTo/view"
    },
    {
        "photo": "/img/How to Train Your Dragon 2 (2014).jpg",
        id: 17,
        "title": "How to Train Your Dragon 2 (2014)",
        "category": "Adventure",
        "size": "1.15 GB",
        "url": "https://drive.google.com/file/d/10RuS8IFdGosK5K1xRb-n0gOuMRMCPLGx/view"
    },
    {
        "photo": "/img/How to Train Your Dragon (2010).jpg",
        id: 18,
        "title": "How to Train Your Dragon (2010)",
        "category": "Adventure",
        "size": "1.76 GB",
        "url": "https://drive.google.com/file/d/172A3pI5NXYeDlHxwYxSlqwpCQy56eHi9/view"
    },
    {
        "photo": "/img/The Mitchells vs the Machines (2021).jpg",
        id: 19,
        "title": "The Mitchells vs the Machines (2021)",
        "category": "Adventure",
        "size": "1 GB",
        "url": "https://drive.google.com/file/d/1YDWQ0uM8efULIOvQ3m3lMGSiUKvdDd4u/view"
    },
    {
        "photo": "/img/Next Gen (2018).jpg",
        id: 20,
        "title": "Next Gen (2018)",
        "category": "Action",
        "size": "897.9 MB",
        "url": "https://drive.google.com/file/d/1tqm7T3APFddD9aECNqIbiCK3i5PzWgQo/view"
    },
    {
        "photo": "/img/Dolittle (2020).jpg",
        "title": "Dolittle (2020)",
        id: 21,
        "category": "Adventure",
        "size": "1.19 GB",
        "url": "https://drive.google.com/file/d/1poozemuL6g9WVMKCUVHMb6FwUq56vhe7/view"
    },
    {
        "photo": "/img/Raya and the Last Dragon (2021).jpg",
        id: 22,
        "title": "Raya and the Last Dragon (2021)",
        "category": "Adventure",
        "size": "968.6 MB",
        "url": "https://drive.google.com/file/d/1oW9VOX-FXTMDstXyLfDqranw3rnbEKnu/view"
    },
    {
        "photo": "/img/Space Jam - A New Legacy (2021).jpg",
        id: 23,
        "title": "Space Jam: A New Legacy (2021)",
        "category": "Sports",
        "size": "1.25 GB",
        "url": "https://drive.google.com/file/d/1tgFamUK6XF376F71Iop0RUbb227YZt9i/view"
    },
    {
        "photo": "/img/Peter Rabbit 2 - The Runaway (2021).jpg",
        id: 24,
        "title": "Peter Rabbit 2: The Runaway (2021)",
        "category": "Comedy",
        "size": "980.2 GB",
        "url": "https://drive.google.com/file/d/1B3i-PwWMBO2GOUjIHdTboUBd45eRDb-A/view"
    },
    {
        "photo": "/img/Peter Rabbit (2018).jpg",
        id: 25,
        "title": "Peter Rabbit (2018)",
        "category": "Comedy",
        "size": "938.6 MB",
        "url": "https://drive.google.com/file/d/1QCZ04kYylzZIomNsRtMsijCfNGtUwQx6/view"
    },
    {
        "photo": "/img/The Golden Compass (2007).jpg",
        id: 26,
        "title": "The Golden Compass (2007)",
        "category": "Action",
        "size": "1 GB",
        "url": "https://drive.google.com/file/d/17k00eQN9g138pan4XRFFVAES_5zxeXxi/view"
    },
    {
        "photo": "/img/The Conjuring - The Devil Made Me Do It (2021).jpg",
        id: 48,
        "title": "(3) The Conjuring - The Devil Made Me Do It (2021)",
        "category": "Horror",
        "size": "1.02 GB",
        "url": "https://drive.google.com/file/d/1V1dHi8TNP_0JmznaTL2mdh2FW5GWqy4-/view"
    },
    {
        "photo": "/img/The Conjuring 2 (2016).jpg",
        id: 47,
        "title": "(2) The Conjuring 2 (2016)",
        "category": "Horror",
        "size": "1.01 GB",
        "url": "https://drive.google.com/file/d/1r7I-RdtBpsn0xl7BDzFKWQi-f1w3-M3x/view"
    },
    {
        "photo": "/img/The Conjuring (2013).jpg",
        id: 46,
        "title": "(1) The Conjuring (2013)",
        "category": "Horror",
        "size": "1 GB",
        "url": "https://drive.google.com/file/d/1Lw_eSy9zuMvyVAmMuwcdvSm2dzm9Hsgx/view"
    },
    {
        "photo": "/img/Ip Man 3 (2015).jpg",
        id: 52,
        "title": "Ip Man 3 (2015)",
        "category": "Action",
        "size": "904.4 MB",
        "url": "https://drive.google.com/file/d/1oHMBQYLo8ycbVvx_Ijx2A9u77uxANvbd/view"
    },
    {
        "photo": "/img/Ip Man 2 (2010).jpg",
        id: 51,
        "title": "Ip Man 2 (2010)",
        "category": "Action",
        "size": "1.06 MB",
        "url": "https://drive.google.com/file/d/1BA-72Ez35LxQy8qQr2VMxSx9WRpaQifh/view"
    },
    {
        "photo": "/img/Ip Man (2008).jpg",
        id: 49,
        "title": "Ip Man (2008)",
        "category": "Action",
        "size": "882.4 MB",
        "url": "https://drive.google.com/file/d/1UFJoZGTJRqPDT1d4vGR1VdQGs8JWakif/view"
    },
    {
        "photo": "/img/Howl (2015).jpg",
        id: 50,
        "title": "Howl (2015)",
        "category": "Horror",
        "size": "792.5 MB",
        "url": "https://drive.google.com/file/d/1BjciasBeMHTWdz8JSGs3zPWGm71S9X6b/view"
    }
];

const uniqueList = [
    ...new Set(
        Data.map((curr) => {
            return curr.category;
        })
    ),
    "All",
];
const Harshalflix = () => {
    const [movie, setMovie] = useState(Data);
    const filterItem = (category) => {
        if (category === "All") {
            setMovie(Data);
            return;
        }
        const updatedList = Data.filter((curr) => {
            return curr.category === category;
        });
        setMovie(updatedList);
    };
    return (
        <>
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keyword" content="harshal.social, harshal, harshalflix, harshal social, HarshalFlix" />
                <meta name="publisher" content="HarshalFlix" />
                <meta name="description" content="harshal.social is The Best Movie & WebSeries Download Website." />
                <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
                <meta name="page-topic" content="Media" />
                <meta name="audience" content="Everyone" />
                <title>HarshalFlix</title>
            </Head>
            <div className={navi.bg}>
                <center><Link href={/}><Image className={navi.logo} src="/HarshalFlix.png" width={180} height={50} alt="HarshalFlix" /></Link></center>
            </div>
            <hr className={`border-danger border-2 opacity-50 ${navi.hr}`} />
            <nav className="navbar bg-body-tertiary">
                <ul className="nav nav-tabs justify-content-center m-auto">
                    {uniqueList.map((curelem) => {
                        return (
                            <li className="nav-item" key={curelem} >
                                <button className={`nav-link ${navi.bgdanger} ${navi.btnlink}`} aria-current="page"
                                    onClick={() => { filterItem(curelem) }}>{curelem}</button>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <div className={`row ${flix.rowflix}`}>
                {movie.map((curr) => {
                    const { id, photo, title, size, url } = curr;
                    return (
                        <>
                            <div className={`${card.cards} text-center`} key={id}>
                                <Image src={photo} className={card.imagephoto} height={280} width={170} alt="HarshalFlix" />
                                <div className="card-body">
                                    <h6 className="card-title">{title}</h6>
                                    <small className="card-text">Size : {size}</small>
                                </div>
                                <Link className={card.a} href={url} rel="noreferrer" target="_blank">
                                    <div className={`${card.download} text-c`}>Download</div>
                                </Link>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Harshalflix;
