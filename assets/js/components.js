document.addEventListener('DOMContentLoaded', function () {
  const groupUrl = 'https://www.facebook.com/groups/294459951247423';
  // Use local path when previewing with a local server (localhost) so the image loads
  // without depending on the GitHub Pages deployment.
  const imgSrc = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
    ? 'assets/elements/Join-Group.png'
    : 'https://joffewilliam.github.io/sewingforjesus/assets/elements/Join-Group.png';

  document.querySelectorAll('[data-join-group]').forEach(function (placeholder) {
    const a = document.createElement('a');
    a.href = groupUrl;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'join-group-link';

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = 'Join our Facebook Group';
    img.className = 'join-group-img';

    a.appendChild(img);
    placeholder.replaceWith(a);
  });
});
