const contactAddress = String.fromCharCode(
  97, 115, 115, 111, 102, 114, 97, 110, 107, 108, 105, 110, 64,
  103, 109, 97, 105, 108, 46, 99, 111, 109
);

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const contactLink = target.closest("[data-contact-link]");
  if (!contactLink) return;

  event.preventDefault();
  window.location.href = `mailto:${contactAddress}`;
});
