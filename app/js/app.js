import 'tapjs'; // import from node_modules

let link = document.querySelector('a:last-child');

link.addEventListener('tap', function(event) {
  event.preventDefault();

  link.classList.add('none');
  link.textContent = '❤️';
});
