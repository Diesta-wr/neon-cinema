// 20 фильмов с реальными постерами
const movies = [
  { id: 1, title: "Интерстеллар", year: 2014, rating: "8.6", duration: "169 мин", genre: "Фантастика, драма", poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", description: "Эпическая история о путешествии сквозь червоточину в поисках нового дома для человечества.", comments: [] },
  { id: 2, title: "Начало", year: 2010, rating: "8.8", duration: "148 мин", genre: "Боевик, триллер", poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg", description: "Талантливый вор крадёт секреты из подсознания во время сна.", comments: [] },
  { id: 3, title: "Матрица", year: 1999, rating: "8.7", duration: "136 мин", genre: "Боевик, фантастика", poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", description: "Программист узнаёт шокирующую правду о реальности.", comments: [] },
  { id: 4, title: "Тёмный рыцарь", year: 2008, rating: "9.0", duration: "152 мин", genre: "Боевик, триллер", poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg", description: "Бэтмен против анархиста Джокера в Готэме.", comments: [] },
  { id: 5, title: "Побег из Шоушенка", year: 1994, rating: "9.3", duration: "142 мин", genre: "Драма", poster: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg", description: "История надежды и дружбы в тюрьме Шоушенк.", comments: [] },
  { id: 6, title: "Форрест Гамп", year: 1994, rating: "8.8", duration: "142 мин", genre: "Драма, комедия", poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", description: "Жизнь простодушного человека, повлиявшего на историю США.", comments: [] },
  { id: 7, title: "Властелин колец", year: 2001, rating: "8.8", duration: "178 мин", genre: "Фэнтези, приключения", poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg", description: "Хоббит отправляется уничтожить Кольцо Всевластья.", comments: [] },
  { id: 8, title: "Список Шиндлера", year: 1993, rating: "8.9", duration: "195 мин", genre: "Драма, биография", poster: "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", description: "Оскар Шиндлер спасает евреев от Холокоста.", comments: [] },
  { id: 9, title: "Бойцовский клуб", year: 1999, rating: "8.8", duration: "139 мин", genre: "Драма, триллер", poster: "https://avatars.mds.yandex.net/i?id=f44f69eae4bc43116e46fb9b0e2d1f0ce1f24d59-12753022-images-thumbs&n=13", description: "Офисный работник создаёт подпольную организацию.", comments: [] },
  { id: 10, title: "Крёстный отец", year: 1972, rating: "9.2", duration: "175 мин", genre: "Драма, криминал", poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", description: "История мафиозной семьи Корлеоне.", comments: [] },
  { id: 11, title: "Хороший, плохой, злой", year: 1966, rating: "8.5", duration: "178 мин", genre: "Вестерн", poster: "https://avatars.mds.yandex.net/i?id=984e244ea76b592c2c2fe82af8e4af71907fa2b7-8498375-images-thumbs&n=13", description: "Три стрелка ищут клад в разгар Гражданской войны.", comments: [] },
  { id: 12, title: "Зелёная миля", year: 1999, rating: "8.6", duration: "189 мин", genre: "Драма, фэнтези", poster: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_.jpg", description: "Надзиратель тюремного блока смертников встречает необычного заключённого.", comments: [] },
  { id: 13, title: "Паразиты", year: 2019, rating: "8.6", duration: "132 мин", genre: "Драма, комедия", poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg", description: "Бедная семья проникает в жизнь богатых.", comments: [] },
  { id: 14, title: "Леон", year: 1994, rating: "8.5", duration: "110 мин", genre: "Боевик, драма", poster: "https://avatars.mds.yandex.net/i?id=ae117154ac5f3051a198fd6e800fc45ff2d1ec08-9783932-images-thumbs&n=13", description: "Профессиональный убийца берёт под опеку девочку.", comments: [] },
  { id: 15, title: "Гладиатор", year: 2000, rating: "8.5", duration: "155 мин", genre: "Боевик, драма", poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg", description: "Римский генерал становится гладиатором для мести.", comments: [] },
  { id: 16, title: "Касабланка", year: 1942, rating: "8.5", duration: "102 мин", genre: "Драма, мелодрама", poster: "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg", description: "Владелец бара помогает беженцам во время Второй мировой.", comments: [] },
  { id: 17, title: "Семь", year: 1995, rating: "8.6", duration: "127 мин", genre: "Детектив, триллер", poster: "https://avatars.mds.yandex.net/i?id=093016e03ecdee99f35b579b8cc48c0436aca68d-13934628-images-thumbs&n=13", description: "Два детектива расследуют серию убийств по семи смертным грехам.", comments: [] },
  { id: 18, title: "Престиж", year: 2006, rating: "8.5", duration: "130 мин", genre: "Драма, мистика", poster: "https://avatars.mds.yandex.net/i?id=5b6de627c7f1f28651637e25aed36d8ec17e392c-3765206-images-thumbs&n=13", description: "Соперничество двух фокусников в Викторианской Англии.", comments: [] },
  { id: 19, title: "Джокер", year: 2019, rating: "8.4", duration: "122 мин", genre: "Драма, криминал", poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg", description: "История происхождения одного из величайших злодеев.", comments: [] },
  { id: 20, title: "1+1", year: 2011, rating: "8.5", duration: "112 мин", genre: "Драма, комедия", poster: "https://avatars.mds.yandex.net/i?id=8c36fd8ec37560239e798b5b9a8b82d3-4255367-images-thumbs&n=13", description: "Богач-инвалид нанимает иммигранта в качестве помощника.", comments: [] }
];

// Загрузка данных
movies.forEach(movie => {
  const savedComments = localStorage.getItem(`comments-${movie.id}`);
  if (savedComments) movie.comments = JSON.parse(savedComments);
});

let favorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]'));

// DOM
const splash = document.getElementById('splash');
const main = document.getElementById('main');
const searchInput = document.getElementById('search');
const exportBtn = document.getElementById('export-btn');
const moviesGrid = document.getElementById('movies-grid');
const favoritesGrid = document.getElementById('favorites-grid');
const favoritesSection = document.getElementById('favorites-section');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalMeta = document.getElementById('modal-meta');
const modalDescription = document.getElementById('modal-description');
const modalPoster = document.getElementById('modal-poster');
const videoPlaceholder = document.getElementById('video-placeholder');
const videoEmbed = document.getElementById('video-embed');
const commentsList = document.getElementById('comments-list');
const commentForm = document.getElementById('comment-form');
const btnMovie = document.getElementById('btn-movie');
const btnTrailer = document.getElementById('btn-trailer');

let currentMovie = null;

// Рендер сетки
function renderGrid(container, list) {
  container.innerHTML = '';
  if (list.length === 0) {
    container.innerHTML = '<p style="padding:1rem;color:#e0d6ff;">Нет фильмов</p>';
    return;
  }
  list.forEach(movie => {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
      <div class="movie-title">${movie.title}</div>
      <div class="movie-meta">${movie.year} • ⭐ ${movie.rating}</div>
    `;
    card.addEventListener('click', () => openModal(movie));
    container.appendChild(card);
  });
}

// Обновление UI
function updateUI() {
  const allMovies = [...movies];
  const favoriteMovies = movies.filter(m => favorites.has(m.id));

  renderGrid(moviesGrid, allMovies);
  renderGrid(favoritesGrid, favoriteMovies);

  if (favoriteMovies.length > 0) {
    favoritesSection.classList.remove('hidden');
  } else {
    favoritesSection.classList.add('hidden');
  }
}

// Открытие модалки
function openModal(movie) {
  currentMovie = movie;
  modalTitle.textContent = movie.title;
  modalMeta.textContent = `${movie.genre} • ${movie.duration} • ⭐ ${movie.rating}`;
  modalDescription.textContent = movie.description;
  modalPoster.innerHTML = `<img src="${movie.poster}" alt="${movie.title}">`;

  // Кнопка избранного
  let favBtn = document.getElementById('btn-favorite');
  if (!favBtn) {
    favBtn = document.createElement('button');
    favBtn.id = 'btn-favorite';
    favBtn.style.marginTop = '1rem';
    favBtn.style.padding = '0.6rem 1.2rem';
    favBtn.style.border = 'none';
    favBtn.style.borderRadius = '8px';
    favBtn.style.fontWeight = '700';
    favBtn.style.cursor = 'pointer';
    const videoPlaceholderEl = document.getElementById('video-placeholder');
    videoPlaceholderEl.parentNode.insertBefore(favBtn, videoPlaceholderEl);
  }

  favBtn.style.background = favorites.has(movie.id) ? '#ff4d94' : '#00f0ff';
  favBtn.style.color = '#000';
  favBtn.textContent = favorites.has(movie.id) ? '❤️ В избранном' : '🤍 В избранное';

  favBtn.onclick = () => {
    if (favorites.has(movie.id)) {
      favorites.delete(movie.id);
    } else {
      favorites.add(movie.id);
    }
    localStorage.setItem('favorites', JSON.stringify([...favorites]));
    updateUI();
  };

  // Сброс видео
  videoPlaceholder.style.display = 'block';
  videoEmbed.style.display = 'none';

  renderComments();
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Комментарии
function renderComments() {
  commentsList.innerHTML = '';
  currentMovie.comments.forEach(c => {
    const el = document.createElement('div');
    el.className = 'comment';
    el.innerHTML = `<strong>${c.author}:</strong> ${c.text}`;
    commentsList.appendChild(el);
  });
}

// Загрузка видео (заглушка)
function loadVideo(url) {
  videoPlaceholder.style.display = 'none';
  videoEmbed.style.display = 'block';
  // Ничего не грузим — только показываем заглушку
}

// Экспорт данных
function exportData() {
  const data = {
    favorites: [...favorites],
    comments: {}
  };
  movies.forEach(movie => {
    if (movie.comments.length > 0) {
      data.comments[movie.id] = movie.comments;
    }
  });

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'neon-cinema-data.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Обработчики
btnMovie.addEventListener('click', () => currentMovie && loadVideo());
btnTrailer.addEventListener('click', () => currentMovie && loadVideo());

commentForm.addEventListener('submit', e => {
  e.preventDefault();
  const author = document.getElementById('comment-author').value.trim();
  const text = document.getElementById('comment-text').value.trim();
  if (author && text) {
    currentMovie.comments.push({ author, text });
    localStorage.setItem(`comments-${currentMovie.id}`, JSON.stringify(currentMovie.comments));
    renderComments();
    commentForm.reset();
  }
});

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(q));
  renderGrid(moviesGrid, filtered);
});

exportBtn.addEventListener('click', exportData);

function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelector('.modal-close').addEventListener('click', closeModal);
document.querySelector('.modal-overlay').addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
  updateUI();

  setTimeout(() => {
    splash.classList.add('fade-out');
    setTimeout(() => {
      splash.style.display = 'none';
      main.classList.add('visible');
    }, 600);
  }, 5000);
});