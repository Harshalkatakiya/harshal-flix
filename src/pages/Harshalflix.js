import flix from '@/styles/Harshalflix/Harshalflix.module.css';
import navi from '@/styles/HarshalFlix/Navigation.module.css';
import card from '@/styles/HarshalFlix/Card.module.css';
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

const Data = [
    {
        "photo": "https://www.dramamilk.com/wp-content/uploads/2021/02/VINCENZO-Kdrama-Poster-1.jpg",
        id: 71,
        "title": "Vincenzo (2021)",
        "category": "K-Drama",
        "size": "13.74 GB",
        "url": "https://drive.google.com/file/d/1Uia0gj6QdRdIvXM4RbnrMwlcDDNNJ8OI/view"
    },
    {
        "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/It%27s_Okay_to_Not_Be_Okay_Poster.jpg/250px-It%27s_Okay_to_Not_Be_Okay_Poster.jpg",
        id: 70,
        "title": "It's Okay to Not Be Okay (2020)",
        "category": "K-Drama",
        "size": "6.92 GB",
        "url": "https://drive.google.com/file/d/1qhe-kXFHJ9llZ35tuJxYBi-W4DlUqrlT/view"
    },
    {
        "photo": "https://upload.wikimedia.org/wikipedia/en/6/6e/DescendantsoftheSun.jpg",
        id: 69,
        "title": "Descendants of the Sun (2016)",
        "category": "K-Drama",
        "size": "6.6 GB",
        "url": "https://drive.google.com/file/d/17h0fiOIfrb87qOqrUNAh5VICi6pf6UBa/view"
    },
    {
        "photo": "https://upload.wikimedia.org/wikipedia/en/6/64/Crash_Landing_on_You_main_poster.jpg",
        id: 3,
        "title": "Crash Landing on You (2019)",
        "category": "K-Drama",
        "size": "500 MB/Episode",
        "url": "https://drive.google.com/file/d/18bgZhq7oGNZ5T7520yzJ2rgkkRidO9aR/view"
    },
    {
        "photo": "https://wallpapercave.com/wp/wp6057817.jpg",
        id: 4,
        "title": "School 2017",
        "category": "K-Drama",
        "size": "500 MB/Episode",
        "url": "https://drive.google.com/file/d/1ts69rCWvoENxgsdVx4Wit6QPAGMWRNBg/view"
    },
    {
        "photo": "https://fsb.zobj.net/crop.php?r=9vI1ZROQsODYXIMZjpuSVeVl2TN_XiOEWB6yqXDOoZpf66J-BspW933PAzuFsYR6dS2q0XQiAz7dPXK9DI6iSjxBUFeuBYQVO8DtZCGhvTpwH4M2k4GJJVi3A4Niz-oBPtzid2KJvCiM64LKR-6HDztToAiT4rc37UbppnZRJas4Jx5moRA939wMGFke2mHCfGp1UWdPxX6WObO_",
        id: 5,
        "title": "All of Us Are Dead (2022)",
        "category": "K-Drama",
        "size": "500 MB/Episode",
        "url": "https://drive.google.com/drive/folders/1KJdyCwXSN_PX2IKOocSaKam9hRp9LsOX"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BNDMwZjQ2YzUtZDQyMC00MjcwLTlmN2MtZGY4OGEyMzMzNTk4XkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_FMjpg_UX1000_.jpg",
        id: 68,
        "title": "Chor Nikal Ke Bhaga (2023)",
        "category": "Thriller",
        "size": "933.3 MB",
        "url": "https://drive.google.com/file/d/131VHMkcOrA4eEoF0Rci_qlb-q1Vg_IjW/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BNzAxY2VmMjctYjMyMi00Y2UxLWExYWEtMTBlOGUzZjgwOTQ4XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
        id: 72,
        "title": "Peninsula (2020) (Train To Busan 2)",
        "category": "Horror",
        "size": "1.2 GB",
        "url": "https://drive.google.com/file/d/1pF0Rz0mW558ZFVN4opbyaSCJcb-YjtBP/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_.jpg",
        id: 73,
        "title": "Train to Busan (2016)",
        "category": "Horror",
        "size": "1.04 GB",
        "url": "https://drive.google.com/file/d/1UcZo8S6SKk7CrXU12HCUahNoS7-JC8mJ/view"
    },

    {
        "photo": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/aum-mangalam-singlem-et00343399-1667194163.jpg",
        id: 66,
        "title": "Aum Mangalam Singlem (2022) (with Ads)",
        "category": "Gujarati",
        "size": "1.33 GB",
        "url": "https://link.storjshare.io/jw5bh5s32idnld5lt2xodg7ifbaa/movie%2FAum%20Mangalam%20Singlem%20(2022).mkv"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BM2QzM2JiNTMtYjU4Ny00MDZkLTk3MmUtYTRjMzVkZGJlNmYyXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_QL75_UY562_CR15,0,380,562_.jpg",
        id: 67,
        "title": "Pathaan (2023)",
        "category": "Action",
        "size": "1.25 GB",
        "url": "https://drive.google.com/file/d/13KAAFMb3_2L4ydOpL1hn0rqmY76UWriv/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BN2FjMTMwMDktZTJkOC00ZjkzLTgxOGEtYzA2ZTc1MGFkMzhhXkEyXkFqcGdeQXVyNjkwOTg4MTA@._V1_.jpg",
        id: 43,
        "title": "Vinaya Vidheya Rama (2019)",
        "category": "Action",
        "size": "1.28 GB",
        "url": "https://drive.google.com/file/d/1K0zqqhHM7tHEZspgBz0K1vnFSsG0lBtN/view"
    },
    {
        "photo": "https://pbs.twimg.com/media/FgxsUUpUYAAmAH4.jpg",
        id: 60,
        "title": "Varisu (2023)",
        "category": "Action",
        "size": "1.39 GB",
        "url": "https://drive.google.com/file/d/1RQAaUn6yFkrF6WP82vnPCN7v8QGi0TcJ/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BNThlNGZjZDQtYzJjMi00MzM4LWFkNjctNDMwZmFjNWJkM2I4XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
        id: 63,
        "title": "Farzi (2023)",
        "category": "Thriller",
        "size": "3.83 GB",
        "url": "https://drive.google.com/file/d/1r2I44-cuxjfRqVD68cAYkGLVw5Myh4hw/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BNTAyOWZmMzMtYzUxYy00NGExLWJmODYtYzU1NzViNDcxNGM4XkEyXkFqcGdeQXVyODY2MTUxMDA@._V1_.jpg",
        id: 58,
        "title": "Kutch Express (2023) (Theatre Quality)",
        "category": "Gujarati",
        "size": "2.33 GB",
        "url": "https://drive.google.com/file/d/14oef0L0izsPXPLBoP7_DuoOdWpWB2238/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMGYxYmVmYTctZGMwNS00MmVkLWI2MzUtZTEzY2UxOTJiZTVlXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        id: 64,
        "title": "Bigil (2019)",
        "category": "Action",
        "size": "1.55 GB",
        "url": "https://drive.google.com/file/d/1D9SELIKPBzPUkrfD1y89wzrDzpUbYwVm/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BN2EwMGY0NTYtOTAxNi00ZmUzLTk1MTItMDM5ZjliNDNjNGQyXkEyXkFqcGdeQXVyMTYyMDA2OTU2._V1_FMjpg_UX1000_.jpg",
        id: 62,
        "title": "Hun Iqbaal (2023)",
        "category": "Gujarati",
        "size": "1.11 GB",
        "url": "https://drive.google.com/file/d/1oAFuM-j0e4-Cd0n3_bMAgYgBtnjLUQIr/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMDk4MTdhYzEtODk3OS00ZDBjLWFhNTQtMDI2ODdjNzQzZTA3XkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_FMjpg_UX1000_.jpg",
        id: 61,
        "title": "M3GAN (2023)",
        "category": "Horror",
        "size": "905.3 MB",
        "url": "https://drive.google.com/file/d/1mWFq03HX62NECHowU3R2mWp9i4ogC9Qy/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMjY5MTQ4MDgtZDc4ZC00ODA3LWJlYjAtMTc3MzJhNDIxMDBlXkEyXkFqcGdeQXVyNDAyMjYyMzQ@._V1_FMjpg_UX1000_.jpg",
        id: 59,
        "title": "Sharato Lagu (2018)",
        "category": "Gujarati",
        "size": "708 MB",
        "url": "https://drive.google.com/file/d/1jaQzA9vOEecvmSihEZ1_vjalNz98KleO/view"
    },
    {
        "photo": "http://timesofindia.indiatimes.com/photo/61683475.cms",
        id: 54,
        "title": "Love Ni Bhavai (2017)",
        "category": "Gujarati",
        "size": "782 MB",
        "url": "https://drive.google.com/file/d/1yICrqUlNyv_Mk5-gUNhmVoxMmilA8iSV/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMTU3ZjhkMGEtZjI1OC00NjU3LWJkMGItNDgzZWYyZTBkNTM5XkEyXkFqcGdeQXVyMTI2MDk3Mjk@._V1_FMjpg_UX1000_.jpg",
        id: 57,
        "title": "Lakiro (2023)",
        "category": "Gujarati",
        "size": "1.19 GB",
        "url": "https://drive.google.com/file/d/1J8vuguXyxiK2BZ9eBJDBbZU2ZNcOx-Jq/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BY2MxODQyNzktNjEyYi00NDRmLWFkNjUtNGE0NDc3ZDRhZGYzXkEyXkFqcGdeQXVyOTc5MjY0NDI@._V1_.jpg",
        id: 56,
        "title": "Golkeri (2020)",
        "category": "Gujarati",
        "size": "1.04 GB",
        "url": "https://drive.google.com/file/d/1T5W33yc1cstkcgxAl5nBLP8DmIjeQyHI/view"
    },
    {
        "photo": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/chabutro-et00341918-1666088900.jpg",
        id: 55,
        "title": "Chabutro (2022)",
        "category": "Gujarati",
        "size": "964.9 MB",
        "url": "https://drive.google.com/file/d/1gHvc_CKibKiDAwfHrK8cVbm6rOollO_x/view"
    },
    {
        "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Shu_Thayu_%28film%29_Poster.jpg/220px-Shu_Thayu_%28film%29_Poster.jpg",
        id: 28,
        "title": "Shu Thayu? (2018)",
        "category": "Gujarati",
        "size": "989 MB",
        "url": "https://drive.google.com/file/d/1Dt5ej8pdDe2r99LNue3pEMrutGJCocIx/view"
    },
    {
        "photo": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/veer-isha-nu-seemant-et00337908-1663311182.jpg",
        id: 35,
        "title": "Veer-Isha Nu Seemant (2022)",
        "category": "Gujarati",
        "size": "961.6 MB",
        "url": "https://drive.google.com/file/d/1MHkSmvhPPvCEN4yI0k9JxE9LznEJIZjG/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BODcwNjY5ZTUtMjc1ZC00ZGJhLWE0N2YtMmU3OTM3ZWY1NDBhXkEyXkFqcGdeQXVyMTM5MDA4NDEz._V1_.jpg",
        id: 36,
        "title": "Vickida No Varghodo (2022)",
        "category": "Gujarati",
        "size": "1.17",
        "url": "https://drive.google.com/file/d/1l_LVJ_oyWirLsU9joaxaefISUkxrM0pC/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMjYwMWI1ODktMDA1ZS00YTI0LWE4OTUtNGExMDQ2NjYwOWRlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        id: 33,
        "title": "Fakt Mahilao Maate (2022)",
        "category": "Gujarati",
        "size": "1.23 GB",
        "url": "https://drive.google.com/file/d/1XNz5kbAvoNnptid94LLeSqq4wM6ilU05/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BOTIwNTZhYjMtM2EyNS00YmFkLTllYWUtNzRhYzhjOWI3ODQ2XkEyXkFqcGdeQXVyMTUyOTU3MjUy._V1_FMjpg_UX1000_.jpg",
        id: 34,
        "title": "Naadi Dosh (2022)",
        "category": "Gujarati",
        "size": "1.05 GB",
        "url": "https://drive.google.com/file/d/1j-GELM9DaSG7RLEWwhxXRjT8zHcUJeEy/view"
    },
    {
        "photo": "https://jiocinemaweb.cdn.jio.com/jioimages.cdn.jio.com/content/entry/dynamiccontent/thumbs/384/-/0/92/91/074d2e00aae611eabf7239f48ce93f84_1592193757691_p_medium.jpg",
        id: 29,
        "title": "Chello Divas (2015)",
        "category": "Gujarati",
        "size": "968.3 MB",
        "url": "https://drive.google.com/file/d/1Y4FLhshIMTn7uW4HGiYuB5mywlXtnj3R/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BZDFjNGU0ODMtZmI5Ni00NzMzLTkxYjgtOGU1NmM4MDlkOTQ0XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
        id: 30,
        "title": "Dear Father (2022)",
        "category": "Gujarati",
        "size": "900 MB",
        "url": "https://drive.google.com/file/d/14CNDOcfa9EahvRWjlCWYX9F0TfLMK0QF/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMzZiNWI3ZjAtNTNkYS00NDQzLTgxMWUtZTJlYWU0ODk0MTA1XkEyXkFqcGdeQXVyODY2MTUxMDA@._V1_.jpg",
        id: 31,
        "title": "Gajab Thai Gayo (2022)",
        "category": "Gujarati",
        "size": "1.09 GB",
        "url": "https://drive.google.com/file/d/1629A9aRvBi9F8InH_kWJBxPfYXNc__XK/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BYmE4YjdmZjctYmE3OC00NzYzLTliYzMtMzZiNzAzNTUxMDM1XkEyXkFqcGdeQXVyMjMwODI3NDE@._V1_FMjpg_UX1000_.jpg",
        id: 32,
        "title": "Sonu Tane Mara Par Bharoso Nai Ke (2022)",
        "category": "Gujarati",
        "size": "973.5 MB",
        "url": "https://drive.google.com/file/d/1PodZLtCuxgF2WVi4yE5J7Lc2SDag6CCK/view"
    },
    {
        "photo": "https://upload.wikimedia.org/wikipedia/en/e/e5/Chhello_Show_%28Last_Film_Show%29_poster.jpeg",
        id: 37,
        "title": "The Last Film Show (2021) (Chhello Show)",
        "category": "Gujarati",
        "size": "1.04 GB",
        "url": "https://drive.google.com/file/d/16w2oiCG_shFSqxjQx5rBq7Wv9AGM7GLT/view"
    },
    {
        "photo": "https://upload.wikimedia.org/wikipedia/en/6/69/Vitthal_Teedi.jpeg",
        id: 38,
        "title": "Vitthal Teedi (2021)",
        "category": "Gujarati",
        "size": "250 MB/Episode",
        "url": "https://drive.google.com/drive/folders/1HB3Ey31C82JljE9AKhIRC3Hp9zPNCjF9"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BM2JlNzM1NDEtOWFmYS00NWJmLThkNmMtNjYzN2YwYmFiN2E3XkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
        id: 2,
        "title": "Enemy (2021)",
        "category": "Action",
        "size": "1.37 GB",
        "url": "https://drive.google.com/file/d/1zb3vzPJZx12dZmaU3_rKBb0nYJiL2bOG/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMzU1NDJlNmItOTE2ZC00MDZmLTliZTQtZjBhNDNkZWU2OTRkXkEyXkFqcGdeQXVyMjQwMDkwNTQ@._V1_.jpg",
        id: 52,
        "title": "Mahaan (2022)",
        "category": "Action",
        "size": "1.36 GB",
        "url": "https://drive.google.com/file/d/1affnF6niopEUgDdzWY-djlkpUExTsgKn/view"
    },
    {
        "photo": "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thunivu-et00340798-1666182985.jpg",
        id: 1,
        "title": "Thunivu (2023)",
        "category": "Action",
        "size": "1.19 GB",
        "url": "https://drive.google.com/file/d/15dYn0Qpo5aWOFDjwPlQPM8H74i9xpn81/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMTQzYWYwYjctY2JhZS00NTYzLTllM2UtZWY5ZTk0NmYwYzIyXkEyXkFqcGdeQXVyMzgxODM4NjM@._V1_.jpg",
        id: 51,
        "title": "Alita: Battle Angel (2019)",
        "category": "Action",
        "size": "1.21 GB",
        "url": "https://drive.google.com/file/d/1elGVdsCbx-mB1mOSCK5tj25DZ-rLvMcJ/view"
    },
    {
        "photo": "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackpantherwakandaforever_lob_crd_06.jpg",
        id: 6,
        "title": "Black Panther: Wakanda Forever (2022)",
        "category": "Action",
        "size": "1.5 GB",
        "url": "https://drive.google.com/file/d/12hZhcjuEOJYR-uDaoepeswiM-bzR5Zre/view"
    },
    {
        "photo": "https://lumiere-a.akamaihd.net/v1/images/p_blackpanther_19754_4ac13f07.jpeg?region=0%2C0%2C540%2C810",
        id: 7,
        "title": "Black Panther (2018)",
        "category": "Action",
        "size": "1.32 GB",
        "url": "https://drive.google.com/file/d/1jp0yrbmKTFT_x-OyGtWQut6Allv5ERgR/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMDJiOTdmMGItMmM5MC00ZTRiLWIzNjctNDE4ZTZkMWMzZTg0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
        id: 8,
        "title": "An Action Hero (2022)",
        "category": "Action",
        "size": "1.08 GB",
        "url": "https://drive.google.com/file/d/1XtO9M3lHMaBK5G7pl3YPA6QefkBeOQo7/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMTZjNmVkYjQtMDg2NS00OTA1LTk0MzQtMTJkOWFhMzM0NDI4XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
        id: 9,
        "title": "Mission Majnu (2023)",
        "category": "Action",
        "size": "1.07 GB",
        "url": "https://drive.google.com/file/d/1z0ashU7NXAcUT7UGaH2kTKH7pat0_-8x/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/I/81bNnZfAv9L._SL1363_.jpg",
        id: 53,
        "title": "Thor: Love and Thunder (2022)",
        "category": "Action",
        "size": "1.16 GB",
        "url": "https://drive.google.com/file/d/10xc7bv7J6RQ-lOZJgzuUHmbWD4BVH9MX/view"
    },
    {
        "photo": "https://upload.wikimedia.org/wikipedia/en/7/78/Stranger_Things_season_4.jpg",
        "title": "Stranger Things (All Seasons)",
        id: 10,
        "category": "Horror",
        "size": "500 MB/Episode",
        "url": "https://drive.google.com/drive/folders/1PvNFyHVc6Abe_04a89KEPNRMfDcht2r7"
    },
    {
        "photo": "https://upload.wikimedia.org/wikipedia/en/2/23/Bhool_Bhulaiyaa_2_film_poster.jpg",
        id: 15,
        "title": "Bhool Bhulaiyaa 2 (2022)",
        "category": "Horror",
        "size": "1.25 GB",
        "url": "https://drive.google.com/file/d/1PVTwUWSjRm--1bpllBhGE-WHPpWwKLuz/view"
    },
    {
        "photo": "https://images.justwatch.com/poster/92967086/s718/college-romance.%7Bformat%7D",
        id: 27,
        "title": "College Romance",
        "category": "Romance",
        "size": "700 MB/Episode",
        "url": "https://drive.google.com/drive/folders/12RpxMQHEJdduFQRlHd7jzcu7NQ8VyCmn"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BZjU4YWFkMDMtYzFjMy00M2FlLTgzOGMtOTM0OThjN2I4Nzg0XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg",
        id: 39,
        "title": "A Quiet Place (2018)",
        "category": "Horror",
        "size": "916.9 MB",
        "url": "https://drive.google.com/file/d/1dT78Rfwx0buQiKDACbebbD7mkdEkIjeH/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BNTZkZjMyODEtOWIwOC00MmNmLWIyNjEtNTU0Y2EwMmQ4ZWYxXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        id: 40,
        "title": "A Quiet Place Part II (2020)",
        "category": "Horror",
        "size": "939.5 MB",
        "url": "https://drive.google.com/file/d/1sci-TU-Gen43TLhrpWQWz19O8IG1-6cU/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
        id: 41,
        "title": "Wednesday (2022)",
        "category": "Horror",
        "size": "400 MB/Episode",
        "url": "https://drive.google.com/drive/folders/1v9bDSSxzYIt2VWYWHedtk92ISxmv6EsR"
    },
    {
        "photo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Drishyam_2_2022_film_poster.jpg/220px-Drishyam_2_2022_film_poster.jpg",
        id: 42,
        "title": "Drishyam 2 (2022)",
        "category": "Thriller",
        "size": "1.17 GB",
        "url": "https://drive.google.com/file/d/1nxehj9FVxyIYG1BBY6RuyUWkmY3uS9kD/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BYzY0MGMyMjYtODA2Ny00MDEwLTlkZTEtY2VmYzcwNDRiNzczXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        id: 44,
        "title": "Jaadugar (2022)",
        "category": "Sports",
        "size": "894.1 MB",
        "url": "https://drive.google.com/file/d/1zfZs8M9ykDHYFPaCvXkcEGrVFJmn_xmx/view"
    },
    {
        "photo": "https://upload.wikimedia.org/wikipedia/en/a/a6/Ek_Villain_Returns.jpg",
        id: 45,
        "title": "Ek Villain Returns (2022)",
        "category": "Action",
        "size": "1.05 GB",
        "url": "https://drive.google.com/file/d/1YNCp3ZNCiHcMsjrGkTB1XUUSUskDqDn4/view"
    },
    {
        "photo": "https://upload.wikimedia.org/wikipedia/en/b/bf/Kung_Fu_Panda_The_Paws_of_Destiny.jpg",
        id: 11,
        "title": "Kung Fu Panda: The Paws of Destiny",
        "category": "Action",
        "size": "160 MB/Episode",
        "url": "https://drive.google.com/drive/folders/1trdsDZAL3z3EKexD0sCYdmsMxnrDCm6X"
    },
    {
        "photo": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6e821140857a5aa6276b3086792178021a510619472ecb06b5cf48374a6e5bc6._RI_V_TTW_.jpg",
        id: 12,
        "title": "Kung Fu Panda 3 (2016)",
        "category": "Action",
        "size": "1.04 GB",
        "url": "https://drive.google.com/file/d/1JhBDgZp_0_ovyiLj9MuZxsZgmb6cspq5/view"
    },
    {
        "photo": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4254/4254200_sa.jpg",
        id: 13,
        "title": "Kung Fu Panda 2 (2011)",
        "category": "Action",
        "size": "829.4 MB",
        "url": "https://drive.google.com/file/d/1t2LKzeTcc43kmCMgBKEGh01bcZp80HCa/view"
    },
    {
        "photo": "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/4254/4254400_so.jpg",
        id: 14,
        "title": "Kung Fu Panda (2008)",
        "category": "Action",
        "size": "975.6 MB",
        "url": "https://drive.google.com/file/d/1tsfeHN_cYE-I5qtjTps5E3qzy8ndqzMX/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_.jpg",
        id: 16,
        "title": "How to Train Your Dragon: The Hidden World (2019)",
        "category": "Adventure",
        "size": "1.03 GB",
        "url": "https://drive.google.com/file/d/1vADZePfb5yuiozzO2knE0JIgXrXBYpTo/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMzMwMTAwODczN15BMl5BanBnXkFtZTgwMDk2NDA4MTE@._V1_.jpg",
        id: 17,
        "title": "How to Train Your Dragon 2 (2014)",
        "category": "Adventure",
        "size": "1.15 GB",
        "url": "https://drive.google.com/file/d/10RuS8IFdGosK5K1xRb-n0gOuMRMCPLGx/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_.jpg",
        id: 18,
        "title": "How to Train Your Dragon (2010)",
        "category": "Adventure",
        "size": "1.76 GB",
        "url": "https://drive.google.com/file/d/172A3pI5NXYeDlHxwYxSlqwpCQy56eHi9/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMjdkZjNjNDItYzc4MC00NTkxLTk1MWEtY2UyZjY5MjUwNDNkXkEyXkFqcGdeQXVyMTA1OTcyNDQ4._V1_.jpg",
        id: 19,
        "title": "The Mitchells vs. the Machines (2021)",
        "category": "Adventure",
        "size": "1 GB",
        "url": "https://drive.google.com/file/d/1YDWQ0uM8efULIOvQ3m3lMGSiUKvdDd4u/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMTU0MjAwMDkxNV5BMl5BanBnXkFtZTgwMTA4ODIxNjM@._V1_.jpg",
        id: 20,
        "title": "Next Gen (2018)",
        "category": "Action",
        "size": "897.9 MB",
        "url": "https://drive.google.com/file/d/1tqm7T3APFddD9aECNqIbiCK3i5PzWgQo/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMDNkODA5ZGQtODczOS00OTQxLThhMTItMjk0ZmNhMDM0YjNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
        "title": "Dolittle (2020)",
        id: 21,
        "category": "Adventure",
        "size": "1.19 GB",
        "url": "https://drive.google.com/file/d/1poozemuL6g9WVMKCUVHMb6FwUq56vhe7/view"
    },
    {
        "photo": "https://static.metacritic.com/images/products/movies/1/4d63b0e799889e19cad9e2d9a600a72c.jpg",
        id: 22,
        "title": "Raya and the Last Dragon (2021)",
        "category": "Adventure",
        "size": "968.6 MB",
        "url": "https://drive.google.com/file/d/1oW9VOX-FXTMDstXyLfDqranw3rnbEKnu/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BNWMyMDc3ODYtODMwZS00MGVjLWJhY2QtYWI1NDM0Y2RjOTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
        id: 23,
        "title": "Space Jam: A New Legacy (2021)",
        "category": "Sports",
        "size": "1.25 GB",
        "url": "https://drive.google.com/file/d/1tgFamUK6XF376F71Iop0RUbb227YZt9i/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BZWVkMmM4YzMtNWZkZS00ZTRlLTgxMjgtZjY0YzNlM2E3MDhlXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        id: 24,
        "title": "Peter Rabbit 2: The Runaway (2021)",
        "category": "Comedy",
        "size": "980.2 GB",
        "url": "https://drive.google.com/file/d/1B3i-PwWMBO2GOUjIHdTboUBd45eRDb-A/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BOWE4YzE3Y2MtYzIyZS00NjA4LTliMDgtY2U0NGM2NzI4MjZlXkEyXkFqcGdeQXVyNTU5Mzk0NjE@._V1_FMjpg_UX1000_.jpg",
        id: 25,
        "title": "Peter Rabbit (2018)",
        "category": "Comedy",
        "size": "938.6 MB",
        "url": "https://drive.google.com/file/d/1QCZ04kYylzZIomNsRtMsijCfNGtUwQx6/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMTM2NDkxMjQxMV5BMl5BanBnXkFtZTYwNTMxMDM4._V1_.jpg",
        id: 26,
        "title": "The Golden Compass (2007)",
        "category": "Action",
        "size": "1 GB",
        "url": "https://drive.google.com/file/d/17k00eQN9g138pan4XRFFVAES_5zxeXxi/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BYzQxMjVkZjEtMDQxYy00MGIwLWE1NjYtYzZkZmU1NTFlZGFlXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
        id: 48,
        "title": "(3) The Conjuring - The Devil Made Me Do It (2021)",
        "category": "Horror",
        "size": "1.02 GB",
        "url": "https://drive.google.com/file/d/1V1dHi8TNP_0JmznaTL2mdh2FW5GWqy4-/view"
    },
    {
        "photo": "https://irs.www.warnerbros.com/keyart-jpeg/conjuring2_WHV_keyart.jpg",
        id: 47,
        "title": "(2) The Conjuring 2 (2016)",
        "category": "Horror",
        "size": "1.01 GB",
        "url": "https://drive.google.com/file/d/1r7I-RdtBpsn0xl7BDzFKWQi-f1w3-M3x/view"
    },
    {
        "photo": "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwMDQzNDMzOQ@@._V1_FMjpg_UX1000_.jpg",
        id: 46,
        "title": "(1) The Conjuring (2013)",
        "category": "Horror",
        "size": "1 GB",
        "url": "https://drive.google.com/file/d/1Lw_eSy9zuMvyVAmMuwcdvSm2dzm9Hsgx/view"
    },
    {
        "photo": "https://1.bp.blogspot.com/-XkpvMVulZ8I/VzczwxZMrrI/AAAAAAAALJI/qBolssfD-04ob1odaBjFuVZCnajzreLSgCLcB/s1600/ip%2Bman%2B3.jpg",
        id: 52,
        "title": "Ip Man 3 (2015)",
        "category": "Action",
        "size": "904.4 MB",
        "url": "https://drive.google.com/file/d/1oHMBQYLo8ycbVvx_Ijx2A9u77uxANvbd/view"
    },
    {
        "photo": "https://i.pinimg.com/736x/e6/43/c5/e643c51ad9839b6d0ab4b0c4b46062a4--ip-man-man-.jpg",
        id: 51,
        "title": "Ip Man 2 (2010)",
        "category": "Action",
        "size": "1.06 MB",
        "url": "https://drive.google.com/file/d/1BA-72Ez35LxQy8qQr2VMxSx9WRpaQifh/view"
    },
    {
        "photo": "http://1.bp.blogspot.com/_-QEDXB4U8gk/TFnlyq5XK4I/AAAAAAAAAEI/UD89vatFcsk/s1600/images.jpg",
        id: 49,
        "title": "Ip Man (2008)",
        "category": "Action",
        "size": "882.4 MB",
        "url": "https://drive.google.com/file/d/1UFJoZGTJRqPDT1d4vGR1VdQGs8JWakif/view"
    },
    {
        "photo": "https://i0.wp.com/www.thisishorror.co.uk/wp-content/uploads/2015/10/howl_cover.jpg?fit=1063%2C1500&ssl=1",
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
            <div className={navi.bg}>
                <center><Image className={navi.logo} src="/HarshalFlix.png" width={180} height={50} alt="HarshalFlix" /></center>
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
                                <img src={photo} className={card.imagephoto} height={280} width={170} alt="HarshalFlix" />
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
