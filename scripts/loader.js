function preload() {
    imgBackground = loadImage("assets/images/background/forest3.webp");
    imgHero = loadImage(heroSprite.imagePath);
    imgEnemy = loadImage(enemySprite.imagePath);
    imgEnemyTroll = loadImage(enemyTrollSprite.imagePath);
    imgEnemyFlying = loadImage(enemyFlyingSprite.imagePath);
    gameOverImage = loadImage("assets/images/assets/game-over.png");
    startupImage = loadImage("assets/images/background/forest3.webp");
    heartImage = loadImage("assets/images/assets/heart.png");
    startupFont = loadFont("assets/images/assets/fontStart.otf");
    bgMusic = loadSound("assets/audio/bg_music.mp3");

    // Levels
    level = loadJSON("levels/01.json");
}