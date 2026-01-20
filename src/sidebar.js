export const Sidebar = () => {
  const menu = document.getElementById('side-menu');
  const overlay = document.getElementById('menu-overlay');
  const toggleBtn = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('close-menu');

  const toggle = () => {
    menu.classList.toggle('active');
    overlay.classList.toggle('hidden');
  };

  const close = () => {
    menu.classList.remove('active');
    overlay.classList.add('hidden');
  };

  // Event Listeners
  toggleBtn.addEventListener('click', toggle);
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);

  return { toggle, close };
};

// Initialize the menu
//xconst mySidebar = Sidebar();