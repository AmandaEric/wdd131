const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
      return "Snortleblat took damage!";
    } else {
      this.health = 0;
      return "Character Died";
    }
  },

  levelUp() {
    this.level += 1;
    this.health += 20;
    return "Level up! Gained 20 health.";
  }
};

function updateCard() {
  document.querySelector('.image').src = character.image;
  document.querySelector('.image').alt = character.name;
  document.querySelector('.name').textContent = character.name;
  document.getElementById('class').textContent = character.class;
  document.getElementById('level').textContent = character.level;
  document.getElementById('health').textContent = character.health;
}

function logMessage(message) {
  document.getElementById('log').textContent = message;
}

// Event listeners
document.getElementById('attacked').addEventListener('click', () => {
  const result = character.attacked();
  updateCard();
  logMessage(result);
});

document.getElementById('levelup').addEventListener('click', () => {
  const result = character.levelUp();
  updateCard();
  logMessage(result);
});

// Initial load
updateCard();
