document.addEventListener('DOMContentLoaded', function () {
    const content = document.getElementById('content');
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const navLinks = document.querySelectorAll('.navbar a[data-page]');

    // Content templates
    const pages = {
        home: `
            <header class="hero">
                <div class="container">
                    <h1>Bienvenue à PTTZone</h1>
                    <p>Ressources et documents pour les étudiants de l'ENSTICP</p>
                </div>
            </header>
            <main class="container">
                <section id="IGE01" style="margin-top: 2rem;" class="section">
                    <h2 title="IGE01"><a href="#" data-page="ige01">IGE01</a></h2>
                    <ul>
                        <li><a href="#" data-page="ige01#sem1">Semestre 1</a></li>
                        <li><a href="#" data-page="ige01#sem2">Semestre 2</a></li>
                    </ul>
                </section>
                <section id="IGE02" class="section">
                    <h2 title="IGE02"><a href="#" data-page="ige02">IGE02</a></h2>
                    <ul>
                        <li><a href="#" data-page="ige02#sem3">Semestre 3</a></li>
                        <li><a href="#" data-page="ige02#sem4">Semestre 4</a></li>
                        <li><a href="#" data-page="ige02#Concour">Concour</a></li>
                    </ul>
                </section>
                <section id="IGE03" class="section">
                    <h2 title="IGE03"><a href="#" data-page="ige03">IGE03</a></h2>
                    <ul>
                        <li><a href="#" data-page="ige03#sem5">Semestre 5</a></li>
                        <li><a href="#" data-page="ige03#sem6">Semestre 6</a></li>
                    </ul>
                </section>
                <section id="IGE04" class="section">
                    <h2 title="IGE04"><a href="#" data-page="ige04">IGE04</a></h2>
                    <ul>
                        <li><a href="#" data-page="ige04#sem7">Semestre 7</a></li>
                        <li><a href="#" data-page="ige04#sem8">Semestre 8</a></li>
                    </ul>
                </section>
                <section id="IGE05" class="section">
                    <h2 title="IGE05"><a href="#" data-page="ige05">IGE05</a></h2>
                    <ul>
                        <li><a href="#" data-page="ige05#sem9">Semestre 9</a></li>
                        <li><a href="#" data-page="ige05#pfe">- Projet Fin d'Etude -</a></li>
                    </ul>
                </section>
            </main>
        `,
        ige01: `
            <section id="IGE01" class="section">
                <div class="container">
                    <div class="header">
                        <h1><a href="https://drive.google.com/drive/folders/1j71n2i6rMrpUvMIm5-Ra0cWTdMaQUktf?usp=drive_link" target="_blank">IGE01</a></h1>
                    </div>
                    <div class="grid">
                        <div id="sem1" class="card">
                            <h2><a href="https://drive.google.com/drive/folders/1ahbzWhzMW3QmBa877oqsL2VUlYQQ1tst?usp=drive_link" target="_blank">SEMESTRE 1</a></h2>
                            <ul>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1YWbJZkjt2yIhjHizyS-qeGT9AWO6yeqd?usp=drive_link">Analyse I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1w-p5qKDdH2B32OADOOIsOknTgOOu3JoS?usp=drive_link">Algèbre I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1Dw_-ilU_5_YWEXcd-Vw2qWT7u3W0ZS_q?usp=drive_link">Electricité et magnétisme</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1-gLc3MbaKLhZklGblkuFQArhZxV70MYS?usp=drive_link">Structures et propriétés des matériaux</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1GRqH0wTEUPMb0_hXRmn95qN4_Q6gsMHi?usp=drive_link">ASDS</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1CMMa6zqLv-tZLqSFJi_n_o-kiQxgk3AN?usp=drive_link">Mécanique et cinématique du point</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1gIUcATelnyk2nMTXdorrDlA4GpvOhT0g?usp=drive_link">Techniques de mesure</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/18Jn-_J1mBlaB4fcpCw-eJB8_gQm7Sdmc?usp=drive_link">Techniques de communications I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1yRs_SkDqVZm2G6ud9N9zpD6oeXr7gfVh?usp=drive_link">Anglais I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1iTUjq6dXWMyZKqdLEX7n5Hhf6Ca4o-ML?usp=drive_link">Examens</a></li>
                            </ul>
                        </div>
                        <div id="sem2" class="card">
                            <h2><a href="https://drive.google.com/drive/folders/1EdNueI0Pdwk0gVO8YOe0JvMzcRus1cIJ?usp=drive_link" target="_blank">SEMESTRE 2</a></h2>
                            <ul>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1t1mGIR03FXVjTL8cfKLHi8fhsc00zSxp?usp=drive_link">Analyse II</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1qlyEMbdeOoPuWcZdV_09DZ6ZfzWbvI7C?usp=drive_link">Algèbre II</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/14kHm1PqyqiSyK1ExM-sUmh5HjHx6i3uG?usp=drive_link">Electricité générale</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1aSbzUppabxL1i_1ecGnlO3muLEbztBBY?usp=drive_link">Electronique numérique</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1HibHN9LGTkGHbXAr3QxBDsSLJCclinB_?usp=drive_link">ASDD</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1MaWL-29uO34Xx-NnXwbfnG4U3fUo9yvr?usp=drive_link">Optique et semi-conducteurs</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1OR2O2ndXfqcJ3FssF-ytKgYOOqqzV5TB?usp=drive_link">L’entreprise et son environnement</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1nN47wnmWV_sjqmmksECHleHaSj3vfr3W?usp=drive_link">Stage I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1klSv7P7R93pRmXgc_2UPLCUhgp-TZpZq?usp=drive_link">Anglais I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1-PDjvsVP_dRigb4RNTNGc5cDx8Z2XT5D?usp=drive_link">Examens</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `,
        ige02: `
            <section id="IGE02" class="section">
                <div class="container">
                    <div class="header">
                        <h1><a href="https://drive.google.com/drive/folders/1WJq92-M5XL8rXyJ2mmxMUgvRFNVOP10v?usp=drive_link" target="_blank">IGE02</a></h1>
                    </div>
                    <div class="grid">
                        <div id="sem3" class="card">
                            <h2><a href="https://drive.google.com/drive/folders/1kzXPuHaBz7YlmXu31-VdrVQJXJihJ5e0?usp=drive_link" target="_blank">SEMESTRE 3</a></h2>
                            <ul>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1YcB0LuqDZDXbTEj2NkRqz85ukYGhHSw_?usp=drive_link">Analyse III</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/13A6OOdk3IkdPrfqHejKknmpu2Wy_CHFb?usp=drive_link">Probabilités et Statiques I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1AolZIhy7Jv_wKRIj_8CtCq9mhEghocP7?usp=drive_link">Electronique générale</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1REqvfB1LH12e5l0gUPmIBqJO_5qSdL5U?usp=drive_link">Traitement du signal</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1LkD-k_FzZEXd2awlYC1qNLOBzvgn5TKy?usp=drive_link">Système d’information I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1i5PfzZkkr0CVDrWwE9BaIPYa1YcAJL-M?usp=drive_link">Systèmes numériques I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/17N59hgJE0IYMLExb6GebY7RuWrp5s_IH?usp=drive_link">Programmation orientée objet</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1eZ_lcMcg_RMTJIDzJ45sTTvxcG70aNzQ?usp=drive_link">Développement Web</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1ip1wGb2Aw2XZk1hfsiznyF4-AhMJKqds?usp=drive_link">TIC et Normalisation</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1IRfVPO6eItk0ObIHIsVOLWmF3_sRYUhP?usp=drive_link">Anglais III</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1L1_J_aRu2zHQga1aXAzMOS9dWtI0n8vs?usp=drive_link">Examens</a></li>
                            </ul>
                        </div>
                        <div id="sem4" class="card">
                            <h2><a href="https://drive.google.com/drive/folders/115rHWCilNX_MtocGkTho05S_N2lIQJMX?usp=drive_link" target="_blank">SEMESTRE 4</a></h2>
                            <ul>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/19bcTGLCVIR_MFxntEVY1OhUeqZQGSe0-?usp=drive_link">Analyse numérique</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1PTnn9_ASmlzq-FRiRuPQbDvEZEYCJN5Y?usp=drive_link">Probabilités et Statiques II</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1zOuRzungl8JaSVMTesZGndHUqhPMbgU9?usp=drive_link">Systèmes linéaires continus</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1XxRpROpBZRTxU2gnk3_Ys5obKIyn_hMz?usp=drive_link">Fonctions de l’Electronique</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/142aPNEBfJXCuzSrZHSNtVwhTx0wcXPYX?usp=drive_link">Systèmes d’exploitation I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1yvn70esEloSXrlCbDgdOC42mW8O4upcG?usp=drive_link">Bases de données I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1Za65Jhg4e40Ig436H03FvmIhPGdT8Aw4?usp=drive_link">Réseaux informatiques I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1skQdXJRM9bLDw0yVlUZ3nFhslggPos7M?usp=drive_link">Ondes et propagation</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/10d21rogW1rlm_2VlOR238C5pqUmvO_Nm?usp=drive_link">Techniques de communication II</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1Ewd76DxFIGipci588HG7Ov8cIh04t4e4?usp=drive_link">Stage II</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1oG0pItMAfS6C0nydkvwjh6xZCDUMsP40?usp=drive_link">Anglais IV</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1ReExAz06OsYNFmdw59ZVtXpq-pt4zvO5?usp=drive_link">Examens</a></li>
                            </ul>
                        </div>
                        <div id="Concour" class="card">
                            <h2><a href="" target="_blank">Concour</a></h2>
                            <ul>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Electricité</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Mécanique</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Analyse numérique</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Analyse mathématique</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `,
        ige03: `
            <section id="IGE03" class="section">
                <div class="container">
                    <div class="header">
                        <h1><a href="https://drive.google.com/drive/folders/136m5SuU3g36ROdaFHrk2aty-qJfwyDQF?usp=drive_link" target="_blank">IGE03</a></h1>
                    </div>
                    <div class="grid">
                        <div id="sem5" class="card">
                            <h2><a href="https://drive.google.com/drive/folders/1KSaB6HPQmcIa_UjC6qKIsf6akrCZw6lK?usp=drive_link" target="_blank">SEMESTRE 5</a></h2>
                            <ul>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1742ogsTWP6-cT0klCfFsPYSII8tWEm_9?usp=drive_link">Antennes et rayonnement</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1m28CAYegRS3xP1JOw_ndCVedCQGHF5Cl?usp=drive_link">Propagation guidée</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1hP45SHtAE3ulDB8SK1hi38yZkksBq25f?usp=drive_link">Systèmes discrets</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1u-nLiV2s7b-XhYu8Eti60X7CHL853KJ6?usp=drive_link">Théorie de l’information I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/17PTZA9wHysqe-1aqWJ-557KkQLSnjt0u?usp=drive_link">Réseaux informatiques II</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/17JwPjLoSh6Ub1OmaKsGnGo0cIKcHK58j?usp=drive_link">Système d’exploitation II</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/183qi63awl8MABCSCYNgiiEkKGZXmbYRq?usp=drive_link">Recherche opérationnelle</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1e30aB1rYBRYCK6yh0IkumxI1MizkFlls?usp=drive_link">Droit des TIC et du numérique</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1HVy6OS1rg3zQlh-OlmL0TwvaaCiQA-vP?usp=drive_link">Anglais Technique I</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1LQqTTorm0hgF992ZGPEPcmF5jc7rulop?usp=drive_link">Examens</a></li>
                            </ul>
                        </div>
                        <div id="sem6" class="card">
                            <h2><a href="https://drive.google.com/drive/folders/1qQiHfERGLfweiijf6wIWzfYacUJjXCt8?usp=drive_link" target="_blank">SEMESTRE 6</a></h2>
                            <ul>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1ssR5tKxJYdBJ5tblBktDQCXv9JxJYGw2?usp=drive_link">Propagations radioélectriques</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1cidMeLcDytIEgCXwXj940dh7oNlRIgnt?usp=drive_link">Dispositifs RF et micro-ondes</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1UtfWYl1CmMTvlfxT21b8c_C6VlYm89LY?usp=drive_link">Théorie de l’information II</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1Jc72-XQloERYxr9uric-pG3OSmihXlDj?usp=drive_link">Transmissions numériques</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/18vWF7w9YdvRxnMHKsVYlVXJBmGmtIUyu?usp=drive_link">Services réseaux</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1DxcXj-DH86PqK_5VhUYYfSe9II8QYlC4?usp=drive_link">Bases de données II</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1Xavc1OMBSR85NwqeWUnzB6XVLEGyIbIN?usp=drive_link">Développement mobile</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1WJbfIO0oFvblqgdnGKEUajRzSw1u98kg?usp=drive_link">Propriété intellectuelle et industrielle</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1_2KzrxqYmKiX53jwvvfQik168U4Ky8sN?usp=drive_link">Anglais Technique II</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1h_hsDCD_JvWO1-iQeoq17jrbBg4mIEDS?usp=drive_link">Examens</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `,
        ige04: `
            <section id="IGE04" class="section">
                <div class="container">
                    <div class="header">
                        <h1><a href="https://drive.google.com/drive/folders/1AqubyyF-vzg91oJFlEWjabSmIDTOu5tB?usp=drive_link" target="_blank">IGE04</a></h1>
                    </div>
                    <div class="grid">
                        <div id="sem7" class="card">
                            <h2><a href="https://drive.google.com/drive/folders/1UV_FWyjXwDK1KjZMfRSq4-SQ8GlKoHnt?usp=drive_link" target="_blank">SEMESTRE 7</a></h2>
                            <ul>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1WaGvwYkVKmMlank4x8cpM6_dkPU4qegU?usp=drive_link">Communications numériques avancées</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1PcPVHJElU7L4KDf_XX5c65PnGjq1CWR1?usp=drive_link">Systèmes numériques II</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1kaWoOu9gDcMR-p8TB61b2LY3ToPWyZHl?usp=drive_link">Réseaux de télécommunications</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/122wJLrNqctyYUCIr7N9hTTTa1xho4YKr?usp=drive_link">Réseaux multiservices</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1FFYiL-TuPZZgD5irQ9hEQEUEi7yISLwW?usp=drive_link">Virtualisation et Cloud Computing</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1tL1R_U3lBbyEloG8zk6n9Cmt1RpJyMmB?usp=drive_link">Intelligence artificielle</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1DHFcmAmCoaGP8ZMKhdYBrex1ehPFZ3b-?usp=drive_link">Modélisation numérique</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1QsnD2FAtSYaAsL0qfT083jvEiobcYsKU?usp=drive_link">Analyse de données</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1PsrH6Z5h7iVPjLAVBvJdZ5_bi2Yz8wR4?usp=drive_link">Management de projet</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1_kqd8ba-LDknDxeu-RXnoLIz71vXDibI?usp=drive_link">Stage III</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1i0g11cwskVgWFBGznHIw5aRJXjfuBwO3?usp=drive_link">Anglais Technique III</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="https://drive.google.com/drive/folders/1RDC7uj8o_oj2zIyQP2lP9s_PvcPo8x0v?usp=drive_link">Examens</a></li>
                            </ul>
                        </div>
                        <div id="sem8" class="card">
                            <h2><a href="" target="_blank">SEMESTRE 8</a></h2>
                            <ul>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Son, image et vidéo numérique</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Optoélectronique et systèmes optiques</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Réseaux mobiles</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Réseaux sans fils</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Virtualisation réseaux et services</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Sécurité des réseaux</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Business intelligent et Big data</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Systèmes embarqués</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Management de la qualité</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Anglais Technique IV</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Examens</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `,
        ige05: `
            <section id="IGE05" class="section">
                <div class="container">
                    <div class="header">
                        <h1><a href="" target="_blank">IGE05</a></h1>
                    </div>
                    <div class="grid">
                        <div id="sem9" class="card">
                            <h2><a href="" target="_blank">SEMESTRE 9</a></h2>
                            <ul>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Réseaux optiques</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Systèmes et réseaux satellitaires</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Multimédia et réseaux</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Objets connectés - IOT</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Administration réseaux et systèmes</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Gestion du spectre</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Management du changement et de l’innovation</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Gestion des ressources humaines</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Stage IV</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Anglais Technique V</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Examens</a></li>
                            </ul>
                        </div>
                        <div id="pfe" class="card">
                            <h2><a href="" target="_blank">- PFE -</a></h2>
                            <ul>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Tous les PFE</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">les Thèmes</a></li>
                                <li><img src="folder.png" alt="icon"><a target="_blank" href="">Guide et canvas PFE</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `,
        cal: `
            <div class="Tablee">
                <h1>Relevé de Notes</h1>
                <div class="grade-selector">
                    <select id="yearSelect">
                        <option value="IGE01">IGE01</option>
                        <option value="IGE02">IGE02</option>
                        <option value="IGE03">IGE03</option>
                        <option value="IGE04">IGE04</option>
                        <option value="IGE05">IGE05</option>
                    </select>
                    <select id="semesterSelect">
                        <option value="S1">Semestre 1</option>
                        <option value="S2">Semestre 2</option>
                        <option value="G">General</option>
                    </select>
                </div>  
                <table class="grades-table">
                    <thead>
                        <tr>
                            <th>Matière</th>
                            <th>Coef</th>
                            <th>- CC -</th>
                            <th>- TP -</th>
                            <th>- EMD -</th>
                            <th>Moyenne</th>
                        </tr>
                    </thead>
                    <tbody id="gradesTableBody">
                    </tbody>
                    <tfoot>
                        <tr>
                            <td class="footer" colspan="5">Moyenne Générale:</td>
                            <td class="footer-value" id="overall-average-value">0.00</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        `
    };

    // Navigation handler
    function loadPage(page) {
        const [pageName, hash] = page.split('#');
        content.innerHTML = pages[pageName] || pages.home;
        if (hash) {
            setTimeout(() => {
                const section = document.getElementById(hash);
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }, 0);
        }
        if (pageName === 'cal') initGradeCalculator();

        // Re-attach event listeners for dynamically loaded links
        const innerLinks = content.querySelectorAll('a[data-page]');
        innerLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const innerPage = link.getAttribute('data-page');
                loadPage(innerPage);
            });
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
            menu.classList.remove('active');
        });
    });

    // Menu toggle for mobile
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
            menu.classList.remove('active');
        }
    });

    const dropdownLinks = document.querySelectorAll('.menu > li > a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (window.innerWidth <= 768 && this.nextElementSibling && this.nextElementSibling.classList.contains('dropdown')) {
                e.preventDefault();
                this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menu.classList.remove('active');
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                dropdown.style.display = '';
            });
        }
    });

    // Load initial page
    loadPage('home');

    // Grade Calculator Logic
    function initGradeCalculator() {
        const subjects = {
            'IGE01': {
                'S1': [
                    { name: 'Analyse I', shortName: 'Analyse1', coef: 4, hasTP: false },
                    { name: 'Algèbre I', shortName: 'Algèbre1', coef: 2, hasTP: false },
                    { name: 'Electricité et magnétisme', shortName: 'ElecMag', coef: 4, hasTP: false },
                    { name: 'Structures et propriétés des matériaux', shortName: 'Matériaux', coef: 2, hasTP: false },
                    { name: 'Algorithmiques et structures de données statiques', shortName: 'AlgoStat', coef: 3, hasTP: true },
                    { name: 'Mécanique et cinématique du point', shortName: 'MécaPoint', coef: 4, hasTP: true },
                    { name: 'Techniques de mesure', shortName: 'Mesure', coef: 2, hasTP: true },
                    { name: 'Techniques de communications I', shortName: 'ComTech1', coef: 1, hasTP: false },
                    { name: 'Anglais I', shortName: 'Anglais1', coef: 1, hasTP: false }
                ],
                'S2': [
                    { name: 'Analyse II', shortName: 'Analyse2', coef: 4, hasTP: false },
                    { name: 'Algèbre II', shortName: 'Algèbre2', coef: 2, hasTP: false },
                    { name: 'Electricité générale', shortName: 'ElecGen', coef: 4, hasTP: true },
                    { name: 'Electronique numérique', shortName: 'ElectroNum', coef: 4, hasTP: true },
                    { name: 'Algorithmiques et structures de données dynamiques', shortName: 'AlgoDyn', coef: 3, hasTP: true },
                    { name: 'Optique et semi-conducteurs', shortName: 'Optique', coef: 3, hasTP: true },
                    { name: 'Stage I', shortName: 'Stage1', coef: 1, hasTP: false },
                    { name: 'L’entreprise et son environnement', shortName: 'Entreprise', coef: 2, hasTP: false },
                    { name: 'Anglais II', shortName: 'Anglais2', coef: 1, hasTP: false }
                ],
                'G': [
                    { name: 'Analyse I', shortName: 'Analyse1', coef: 4, hasTP: false },
                    { name: 'Algèbre I', shortName: 'Algèbre1', coef: 2, hasTP: false },
                    { name: 'Electricité et magnétisme', shortName: 'ElecMag', coef: 4, hasTP: false },
                    { name: 'Structures et propriétés des matériaux', shortName: 'Matériaux', coef: 2, hasTP: false },
                    { name: 'Algorithmiques et structures de données statiques', shortName: 'AlgoStat', coef: 3, hasTP: true },
                    { name: 'Mécanique et cinématique du point', shortName: 'MécaPoint', coef: 4, hasTP: true },
                    { name: 'Techniques de mesure', shortName: 'Mesure', coef: 2, hasTP: true },
                    { name: 'Techniques de communications I', shortName: 'ComTech1', coef: 1, hasTP: false },
                    { name: 'Anglais I', shortName: 'Anglais1', coef: 1, hasTP: false },
                    { name: 'Analyse II', shortName: 'Analyse2', coef: 4, hasTP: false },
                    { name: 'Algèbre II', shortName: 'Algèbre2', coef: 2, hasTP: false },
                    { name: 'Electricité générale', shortName: 'ElecGen', coef: 4, hasTP: true },
                    { name: 'Electronique numérique', shortName: 'ElectroNum', coef: 4, hasTP: true },
                    { name: 'Algorithmiques et structures de données dynamiques', shortName: 'AlgoDyn', coef: 3, hasTP: true },
                    { name: 'Optique et semi-conducteurs', shortName: 'Optique', coef: 3, hasTP: true },
                    { name: 'Stage I', shortName: 'Stage1', coef: 1, hasTP: false },
                    { name: 'L’entreprise et son environnement', shortName: 'Entreprise', coef: 2, hasTP: false },
                    { name: 'Anglais II', shortName: 'Anglais2', coef: 1, hasTP: false }
                ]
            },
            'IGE02': {
                'S1': [
                    { name: 'Analyse III', shortName: 'Analyse3', coef: 3, hasTP: false },
                    { name: 'Probabilités et Statistiques I', shortName: 'ProbaStat1', coef: 2, hasTP: false },
                    { name: 'Electronique générale', shortName: 'ElectroGen', coef: 3, hasTP: true },
                    { name: 'Traitement du signal', shortName: 'TraitSignal', coef: 3, hasTP: true },
                    { name: 'Système d’information I', shortName: 'SysInfo1', coef: 3, hasTP: true },
                    { name: 'Systèmes numériques I', shortName: 'SysNum1', coef: 2, hasTP: true },
                    { name: 'Programmation orientée objet', shortName: 'POO', coef: 2, hasTP: true },
                    { name: 'Développement Web', shortName: 'DevWeb', coef: 2, hasTP: true },
                    { name: 'TIC et Normalisation', shortName: 'TIC', coef: 2, hasTP: true },
                    { name: 'Anglais III', shortName: 'Anglais3', coef: 1, hasTP: false }
                ],
                'S2': [
                    { name: 'Analyse numérique', shortName: 'AnalyseNum', coef: 3, hasTP: true },
                    { name: 'Probabilités et Statistiques II', shortName: 'ProbaStat2', coef: 2, hasTP: false },
                    { name: 'Systèmes linéaires continus', shortName: 'SysLin', coef: 3, hasTP: true },
                    { name: 'Fonctions de l’Electronique', shortName: 'FonctElec', coef: 3, hasTP: true },
                    { name: 'Systèmes d’exploitation I', shortName: 'SysExploit1', coef: 3, hasTP: true },
                    { name: 'Bases de données I', shortName: 'BD1', coef: 3, hasTP: true },
                    { name: 'Réseaux informatiques I', shortName: 'Reseau1', coef: 3, hasTP: true },
                    { name: 'Ondes et propagation', shortName: 'Ondes', coef: 3, hasTP: true },
                    { name: 'Stage II', shortName: 'Stage2', coef: 2, hasTP: false },
                    { name: 'Techniques de communication II', shortName: 'ComTech2', coef: 1, hasTP: false },
                    { name: 'Anglais IV', shortName: 'Anglais4', coef: 1, hasTP: false }
                ],
                'G': [
                    { name: 'Analyse III', shortName: 'Analyse3', coef: 3, hasTP: false },
                    { name: 'Probabilités et Statistiques I', shortName: 'ProbaStat1', coef: 2, hasTP: false },
                    { name: 'Electronique générale', shortName: 'ElectroGen', coef: 3, hasTP: true },
                    { name: 'Traitement du signal', shortName: 'TraitSignal', coef: 3, hasTP: true },
                    { name: 'Système d’information I', shortName: 'SysInfo1', coef: 3, hasTP: true },
                    { name: 'Systèmes numériques I', shortName: 'SysNum1', coef: 2, hasTP: true },
                    { name: 'Programmation orientée objet', shortName: 'POO', coef: 2, hasTP: true },
                    { name: 'Développement Web', shortName: 'DevWeb', coef: 2, hasTP: true },
                    { name: 'TIC et Normalisation', shortName: 'TIC', coef: 2, hasTP: true },
                    { name: 'Anglais III', shortName: 'Anglais3', coef: 1, hasTP: false },
                    { name: 'Analyse numérique', shortName: 'AnalyseNum', coef: 3, hasTP: true },
                    { name: 'Probabilités et Statistiques II', shortName: 'ProbaStat2', coef: 2, hasTP: false },
                    { name: 'Systèmes linéaires continus', shortName: 'SysLin', coef: 3, hasTP: true },
                    { name: 'Fonctions de l’Electronique', shortName: 'FonctElec', coef: 3, hasTP: true },
                    { name: 'Systèmes d’exploitation I', shortName: 'SysExploit1', coef: 3, hasTP: true },
                    { name: 'Bases de données I', shortName: 'BD1', coef: 3, hasTP: true },
                    { name: 'Réseaux informatiques I', shortName: 'Reseau1', coef: 3, hasTP: true },
                    { name: 'Ondes et propagation', shortName: 'Ondes', coef: 3, hasTP: true },
                    { name: 'Stage II', shortName: 'Stage2', coef: 2, hasTP: false },
                    { name: 'Techniques de communication II', shortName: 'ComTech2', coef: 1, hasTP: false },
                    { name: 'Anglais IV', shortName: 'Anglais4', coef: 1, hasTP: false }
                ]
            },
            'IGE03': {
                'S1': [
                    { name: 'Antennes et rayonnement', shortName: 'Antennes', coef: 3, hasTP: true },
                    { name: 'Propagation guidée', shortName: 'PropGuide', coef: 3, hasTP: true },
                    { name: 'Systèmes discrets', shortName: 'SysDiscrets', coef: 3, hasTP: true },
                    { name: 'Théorie de l’information I', shortName: 'TheorieInfo1', coef: 3, hasTP: true },
                    { name: 'Réseaux informatiques II', shortName: 'Reseau2', coef: 3, hasTP: true },
                    { name: 'Système d’exploitation II', shortName: 'SysExploit2', coef: 3, hasTP: true },
                    { name: 'Recherche opérationnelle', shortName: 'RechercheOp', coef: 2, hasTP: false },
                    { name: 'Droit des TIC et du numérique', shortName: 'DroitTIC', coef: 2, hasTP: false },
                    { name: 'Anglais Technique I', shortName: 'AnglaisTech1', coef: 1, hasTP: false }
                ],
                'S2': [
                    { name: 'Propagations radioélectriques', shortName: 'PropRadio', coef: 3, hasTP: true },
                    { name: 'Dispositifs RF et micro-ondes', shortName: 'RFMicro', coef: 3, hasTP: true },
                    { name: 'Théorie de l’information II', shortName: 'TheorieInfo2', coef: 3, hasTP: true },
                    { name: 'Transmissions numériques', shortName: 'TransNum', coef: 3, hasTP: true },
                    { name: 'Services réseaux', shortName: 'ServicesReseau', coef: 3, hasTP: true },
                    { name: 'Bases de données II', shortName: 'BD2', coef: 3, hasTP: true },
                    { name: 'Développement mobile', shortName: 'DevMobile', coef: 2, hasTP: true },
                    { name: 'Propriété intellectuelle et industrielle', shortName: 'Propriete', coef: 1, hasTP: false },
                    { name: 'Anglais Technique II', shortName: 'AnglaisTech2', coef: 1, hasTP: false }
                ],
                'G': [
                    { name: 'Antennes et rayonnement', shortName: 'Antennes', coef: 3, hasTP: true },
                    { name: 'Propagation guidée', shortName: 'PropGuide', coef: 3, hasTP: true },
                    { name: 'Systèmes discrets', shortName: 'SysDiscrets', coef: 3, hasTP: true },
                    { name: 'Théorie de l’information I', shortName: 'TheorieInfo1', coef: 3, hasTP: true },
                    { name: 'Réseaux informatiques II', shortName: 'Reseau2', coef: 3, hasTP: true },
                    { name: 'Système d’exploitation II', shortName: 'SysExploit2', coef: 3, hasTP: true },
                    { name: 'Recherche opérationnelle', shortName: 'RechercheOp', coef: 2, hasTP: false },
                    { name: 'Droit des TIC et du numérique', shortName: 'DroitTIC', coef: 2, hasTP: false },
                    { name: 'Anglais Technique I', shortName: 'AnglaisTech1', coef: 1, hasTP: false },
                    { name: 'Propagations radioélectriques', shortName: 'PropRadio', coef: 3, hasTP: true },
                    { name: 'Dispositifs RF et micro-ondes', shortName: 'RFMicro', coef: 3, hasTP: true },
                    { name: 'Théorie de l’information II', shortName: 'TheorieInfo2', coef: 3, hasTP: true },
                    { name: 'Transmissions numériques', shortName: 'TransNum', coef: 3, hasTP: true },
                    { name: 'Services réseaux', shortName: 'ServicesReseau', coef: 3, hasTP: true },
                    { name: 'Bases de données II', shortName: 'BD2', coef: 3, hasTP: true },
                    { name: 'Développement mobile', shortName: 'DevMobile', coef: 2, hasTP: true },
                    { name: 'Propriété intellectuelle et industrielle', shortName: 'Propriete', coef: 1, hasTP: false },
                    { name: 'Anglais Technique II', shortName: 'AnglaisTech2', coef: 1, hasTP: false }
                ]
            },
            'IGE04': {
                'S1': [
                    { name: 'Communications numériques avancées', shortName: 'ComNumAv', coef: 3, hasTP: true },
                    { name: 'Systèmes numériques II', shortName: 'SysNum2', coef: 2, hasTP: true },
                    { name: 'Réseaux de télécommunications', shortName: 'ReseauTelecom', coef: 2, hasTP: true },
                    { name: 'Réseaux multiservices', shortName: 'ReseauMulti', coef: 3, hasTP: true },
                    { name: 'Virtualisation et Cloud Computing', shortName: 'Cloud', coef: 3, hasTP: true },
                    { name: 'Intelligence artificielle', shortName: 'IA', coef: 3, hasTP: true },
                    { name: 'Modélisation numérique', shortName: 'ModelNum', coef: 2, hasTP: true },
                    { name: 'Analyse de données', shortName: 'AnalyseData', coef: 2, hasTP: true },
                    { name: 'Stage III', shortName: 'Stage3', coef: 2, hasTP: false },
                    { name: 'Management de projet', shortName: 'Management', coef: 2, hasTP: false },
                    { name: 'Anglais Technique III', shortName: 'AnglaisTech3', coef: 1, hasTP: false }
                ],
                'S2': [
                    { name: 'Son, image et vidéo numérique', shortName: 'SonImage', coef: 3, hasTP: true },
                    { name: 'Optoélectronique et systèmes optiques', shortName: 'Opto', coef: 2, hasTP: true },
                    { name: 'Réseaux mobiles', shortName: 'ReseauMobile', coef: 3, hasTP: true },
                    { name: 'Réseaux sans fils', shortName: 'ReseauSansFil', coef: 2, hasTP: true },
                    { name: 'Virtualisation réseaux et services', shortName: 'VirtualReseau', coef: 3, hasTP: true },
                    { name: 'Sécurité des réseaux', shortName: 'SecuriteReseau', coef: 3, hasTP: true },
                    { name: 'Business intelligent et Big data', shortName: 'BigData', coef: 3, hasTP: true },
                    { name: 'Systèmes embarqués', shortName: 'SystemesEmb', coef: 2, hasTP: true },
                    { name: 'Management de la qualité', shortName: 'Qualite', coef: 1, hasTP: false },
                    { name: 'Anglais Technique IV', shortName: 'AnglaisTech4', coef: 1, hasTP: false }
                ],
                'G': [
                    { name: 'Communications numériques avancées', shortName: 'ComNumAv', coef: 3, hasTP: true },
                    { name: 'Systèmes numériques II', shortName: 'SysNum2', coef: 2, hasTP: true },
                    { name: 'Réseaux de télécommunications', shortName: 'ReseauTelecom', coef: 2, hasTP: true },
                    { name: 'Réseaux multiservices', shortName: 'ReseauMulti', coef: 3, hasTP: true },
                    { name: 'Virtualisation et Cloud Computing', shortName: 'Cloud', coef: 3, hasTP: true },
                    { name: 'Intelligence artificielle', shortName: 'IA', coef: 3, hasTP: true },
                    { name: 'Modélisation numérique', shortName: 'ModelNum', coef: 2, hasTP: true },
                    { name: 'Analyse de données', shortName: 'AnalyseData', coef: 2, hasTP: true },
                    { name: 'Stage III', shortName: 'Stage3', coef: 2, hasTP: false },
                    { name: 'Management de projet', shortName: 'Management', coef: 2, hasTP: false },
                    { name: 'Anglais Technique III', shortName: 'AnglaisTech3', coef: 1, hasTP: false },
                    { name: 'Son, image et vidéo numérique', shortName: 'SonImage', coef: 3, hasTP: true },
                    { name: 'Optoélectronique et systèmes optiques', shortName: 'Opto', coef: 2, hasTP: true },
                    { name: 'Réseaux mobiles', shortName: 'ReseauMobile', coef: 3, hasTP: true },
                    { name: 'Réseaux sans fils', shortName: 'ReseauSansFil', coef: 2, hasTP: true },
                    { name: 'Virtualisation réseaux et services', shortName: 'VirtualReseau', coef: 3, hasTP: true },
                    { name: 'Sécurité des réseaux', shortName: 'SecuriteReseau', coef: 3, hasTP: true },
                    { name: 'Business intelligent et Big data', shortName: 'BigData', coef: 3, hasTP: true },
                    { name: 'Systèmes embarqués', shortName: 'SystemesEmb', coef: 2, hasTP: true },
                    { name: 'Management de la qualité', shortName: 'Qualite', coef: 1, hasTP: false },
                    { name: 'Anglais Technique IV', shortName: 'AnglaisTech4', coef: 1, hasTP: false }
                ]
            },
            'IGE05': {
                'S1': [
                    { name: 'Réseaux optiques', shortName: 'ReseauOptique', coef: 3, hasTP: true },
                    { name: 'Systèmes et réseaux satellitaires', shortName: 'Satellite', coef: 3, hasTP: true },
                    { name: 'Multimédia et réseaux', shortName: 'Multimedia', coef: 3, hasTP: true },
                    { name: 'Objets connectés - IOT', shortName: 'IOT', coef: 3, hasTP: true },
                    { name: 'Administration réseaux et systèmes', shortName: 'AdminReseau', coef: 3, hasTP: true },
                    { name: 'Gestion du spectre', shortName: 'Spectre', coef: 2, hasTP: true },
                    { name: 'Management du changement et de l’innovation', shortName: 'Innovation', coef: 1, hasTP: false },
                    { name: 'Gestion des ressources humaines', shortName: 'GRH', coef: 1, hasTP: false },
                    { name: 'Stage IV', shortName: 'Stage4', coef: 2, hasTP: false },
                    { name: 'Anglais Technique V', shortName: 'AnglaisTech5', coef: 1, hasTP: false }
                ],
                'S2': [],
                'G': [
                    { name: 'Réseaux optiques', shortName: 'ReseauOptique', coef: 3, hasTP: true },
                    { name: 'Systèmes et réseaux satellitaires', shortName: 'Satellite', coef: 3, hasTP: true },
                    { name: 'Multimédia et réseaux', shortName: 'Multimedia', coef: 3, hasTP: true },
                    { name: 'Objets connectés - IOT', shortName: 'IOT', coef: 3, hasTP: true },
                    { name: 'Administration réseaux et systèmes', shortName: 'AdminReseau', coef: 3, hasTP: true },
                    { name: 'Gestion du spectre', shortName: 'Spectre', coef: 2, hasTP: true },
                    { name: 'Management du changement et de l’innovation', shortName: 'Innovation', coef: 1, hasTP: false },
                    { name: 'Gestion des ressources humaines', shortName: 'GRH', coef: 1, hasTP: false },
                    { name: 'Stage IV', shortName: 'Stage4', coef: 2, hasTP: false },
                    { name: 'Anglais Technique V', shortName: 'AnglaisTech5', coef: 1, hasTP: false }
                ]
            }
        };

        let grades = {};

        function updateSubjectNames() {
            const isMobile = window.innerWidth <= 768;
            const year = document.getElementById('yearSelect').value;
            const semester = document.getElementById('semesterSelect').value;
            if (!subjects[year][semester]) return;

            const rows = document.querySelectorAll('#gradesTableBody tr');
            rows.forEach((row, index) => {
                const subject = subjects[year][semester][index];
                if (!subject) return;

                const nameCell = row.querySelector('td:first-child');
                nameCell.textContent = isMobile ? subject.shortName : subject.name;
            });
        }

        function calculateAverage(subject) {
            const year = document.getElementById('yearSelect').value;
            const subjectGrades = grades[subject.name] || { cc: '', tp: '', emd: '' };
            const cc = parseFloat(subjectGrades.cc) || 0;
            const tp = parseFloat(subjectGrades.tp) || 0;
            const emd = parseFloat(subjectGrades.emd) || 0;


            if (subject.hasTP) {
                return (((cc + tp) / 2 + emd * 2) / 3).toFixed(2);
            } else if (!subject.hasTP && !subjectGrades.cc) {
                return emd.toFixed(2);
            } else {
                return ((cc + emd * 2) / 3).toFixed(2);
            }
            
            

        }

        function calculateOverallAverage() {
            const year = document.getElementById('yearSelect').value;
            const semester = document.getElementById('semesterSelect').value;
            if (!subjects[year][semester]) return '0.00';
            let totalWeightedGrade = 0;
            let totalCoef = 0;

            subjects[year][semester].forEach(subject => {
                const average = parseFloat(calculateAverage(subject)) || 0;
                totalWeightedGrade += average * subject.coef;
                totalCoef += subject.coef;
            });

            return totalCoef > 0 ? (totalWeightedGrade / totalCoef).toFixed(2) : '0.00';
        }

        function updateGradesTable() {
            const gradesTableBody = document.getElementById('gradesTableBody');
            gradesTableBody.innerHTML = '';
            const year = document.getElementById('yearSelect').value;
            const semester = document.getElementById('semesterSelect').value;
            if (!subjects[year][semester]) return;

            subjects[year][semester].forEach(subject => {
                const row = document.createElement('tr');
                const excludecc = [
                    "Stage I",
                    "Stage II",
                    "Stage III",
                    "Stage IV"
                ].includes(subject.name);
                if (subject.hasTP) {
                    row.innerHTML = `
                        <td>${subject.name}</td>
                        <td>${subject.coef}</td>
                        <td>${excludecc ? '____' : '<input type="number" min="0" max="20" value="0" step="0.01" data-subject="' + subject.name + '" data-type="cc">'}</td>
                        <td><input type="number" min="0" max="20" value="0" step="0.01" data-subject="${subject.name}" data-type="tp"></td>
                        <td><input type="number" min="0" max="20" value="0" step="0.01" data-subject="${subject.name}" data-type="emd"></td>
                        <td class="average"></td>
                    `;
                } else {
                    row.innerHTML = `
                        <td>${subject.name}</td>
                        <td>${subject.coef}</td>
                        <td>${excludecc ? '____' : '<input type="number" min="0" max="20" value="0" step="0.01" data-subject="' + subject.name + '" data-type="cc">'}</td>
                        <td>____</td>
                        <td><input type="number" min="0" max="20" value="0" step="0.01" data-subject="${subject.name}" data-type="emd"></td>
                        <td class="average"></td>
                    `;
                }
                gradesTableBody.appendChild(row);
            });
            updateSubjectNames();
            updateGrades();
        }

        function updateGrades() {
            const year = document.getElementById('yearSelect').value;
            const semester = document.getElementById('semesterSelect').value;
            const rows = document.querySelectorAll('#gradesTableBody tr');

            rows.forEach((row, index) => {
                const subject = subjects[year][semester][index];
                if (!subject) return;

                const ccInput = row.querySelector(`input[data-subject="${subject.name}"][data-type="cc"]`);
                const tpInput = row.querySelector(`input[data-subject="${subject.name}"][data-type="tp"]`);
                const emdInput = row.querySelector(`input[data-subject="${subject.name}"][data-type="emd"]`);
                const averageCell = row.querySelector('.average');

                grades[subject.name] = {
                    cc: ccInput ? ccInput.value : '',
                    tp: tpInput ? tpInput.value : '',
                    emd: emdInput ? emdInput.value : ''
                };

                averageCell.textContent = calculateAverage(subject) || '-';
            });

            document.getElementById('overall-average-value').textContent = calculateOverallAverage();
        }

        document.getElementById('yearSelect').addEventListener('change', function () {
            const year = this.value;
            const semesterSelect = document.getElementById('semesterSelect');
            semesterSelect.innerHTML = '';

            if (year === 'IGE05') {
                semesterSelect.innerHTML = `
                    <option value="S1">Semestre 1</option>
                    <option value="G">General</option>
                `;
            } else {
                semesterSelect.innerHTML = `
                    <option value="S1">Semestre 1</option>
                    <option value="S2">Semestre 2</option>
                    <option value="G">General</option>
                `;
            }
            updateGradesTable();
        });

        document.getElementById('semesterSelect').addEventListener('change', updateGradesTable);

        document.addEventListener('input', function (e) {
            if (e.target.type === 'number') {
                const subject = e.target.dataset.subject;
                const type = e.target.dataset.type;
                let value = e.target.value;

                if (value === '' || (!isNaN(value) && parseFloat(value) >= 0 && parseFloat(value) <= 20)) {
                    if (value === '') {
                        value = '0';
                        e.target.value = value;
                    }
                    if (!grades[subject]) grades[subject] = {};
                    grades[subject][type] = value;
                    updateGrades();
                } else {
                    e.target.value = grades[subject]?.[type] || '';
                }
            }
        });

        document.addEventListener('blur', function (e) {
            if (e.target.type === 'number' && e.target.value.trim() === '') {
                e.target.value = '';
                grades[e.target.dataset.subject][e.target.dataset.type] = '0';
                updateGrades();
            }
        }, true);

        document.addEventListener('keydown', function (e) {
            if (e.target.type === 'number' && (e.key === ',')) {
                e.preventDefault();
            }
        });

        window.addEventListener('resize', updateSubjectNames);
        updateGradesTable();
    }
});