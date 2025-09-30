export const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 70; // account for sticky nav
  window.scrollTo({ top: y, behavior: 'smooth' });
};
