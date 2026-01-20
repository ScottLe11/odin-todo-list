export const ModalController = () => {
  const overlay = document.getElementById('modal-overlay');
  const closeBtn = document.getElementById('close-modal');

  const open = () => {
    overlay.classList.remove('hidden'); // Show the element
    // Small timeout ensures the transition triggers after display:block
    setTimeout(() => overlay.classList.add('active'), 10);
  };

  const close = () => {
    overlay.classList.remove('active');
    // Wait for animation to finish before hiding the element
    setTimeout(() => overlay.classList.add('hidden'), 300);
  };

  // Close when clicking X or clicking the background
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  return { open, close };
};