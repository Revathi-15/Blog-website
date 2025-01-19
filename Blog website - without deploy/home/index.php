<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zap Blog</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <nav>
        <div class="main-nav container flex">
            <a href="#" onclick="reload()" class="company-logo">
                <img src="logo16-1.png" alt="Logo">
            </a>

            <div class="nav-links" id="nav-links">
                <ul class="flex">
                    <li><a href="../Weather-Forecast/main.html">Weather</a></li>
                    <li><a href="../Add Note/index2.html">Add Note</a></li>
                    <li class="hover-link nav-item" id="highlights" onclick="onNavItemClick('Highlights')">Highlights
                    </li>
                    <li><a href="../bot/index.html">Bot</a></li>
                </ul>
            </div>

            <div class="assign flex">
                <div class="search-bar flex">
                    <input id="search-text" type="text" class="news-input" placeholder="Enter.."
                        onkeypress="handleKeyPress(event)">
                    <button class="search-button" id="search-button">
                        <img src="srch.png" alt="Search">
                    </button>
                </div>

                <div class="assign flex">
                    <div class="toggle-button dark-mode-button" onclick="toggleDarkMode()">

                        <div class="icons">
                            <i class="fas fa-moon"></i>
                        </div>

                    </div>
                    <div id="user-info" class="user-info" style="margin-top:2px; margin-left:8px; font-size:30px">
                        <a href="../login and signup/logout.php" class="logout-btn ">
                            <div class="icons">
                                <i class="fas fa-sign-out-alt" style="color: cadetblue;"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <main>
        <div class="scrollable-container">
            <div class="cards-container container flex" id="cards-container">
                <!-- News cards will be inserted here -->
            </div>
        </div>
    </main>

    <template id="template_card">
        <div class="card">
            <div class="card-header">
                <img src="400x200  dummy img.png" alt="News Image" id="news-img">
            </div>
            <div class="card-content">
                <h3 id="news-title">This is the Title</h3>
                <h6 class="news-source">End Gadget 22/6/24</h6>
                <p class="news-des">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus necessitatibus
                    expedita debitis exercitationem aliquam iste in, nihil iusto consectetur? Quis laudantium impedit
                    dolores mollitia alias.</p>
            </div>
        </div>
    </template>

    <script src="script.js"></script>
</body>

</html>