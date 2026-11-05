(() => {
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.project-card');
  for (const button of filters) {
    button.addEventListener('click', () => {
      const selection = button.dataset.filter;
      filters.forEach(filter => {
        const active = filter === button;
        filter.classList.toggle('active', active);
        filter.setAttribute('aria-pressed', String(active));
      });
      cards.forEach(card => {
        const tags = (card.dataset.categories || '').split(' ');
        card.hidden = selection !== 'all' && !tags.includes(selection);
      });
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
