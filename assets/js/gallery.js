// Simple lightbox for the photos gallery
document.addEventListener('DOMContentLoaded', function(){
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbClose = document.getElementById('lb-close');

  if(!gallery || !lightbox) return;

  gallery.addEventListener('click', function(e){
    const t = e.target;
    if(t && t.tagName === 'IMG'){
      lbImg.src = t.src;
      lbImg.alt = t.alt || '';
      lightbox.setAttribute('aria-hidden','false');
    }
  });

  function closeLB(){
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
  }

  lbClose.addEventListener('click', closeLB);
  lightbox.addEventListener('click', function(e){
    if(e.target === lightbox) closeLB();
  });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeLB(); });
});
