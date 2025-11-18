document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('contact-status');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    // Use JS submit to provide inline feedback; allow noscript fallback
    e.preventDefault();
    status.style.display = 'none';
    const data = new FormData(form);

    // basic client-side validation (extra)
    if (!data.get('name') || !data.get('email') || !data.get('message')) {
      status.textContent = 'Please fill out all required fields.';
      status.style.display = '';
      return;
    }

    status.textContent = 'Sending...';
    status.style.display = '';

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    }).then(async res => {
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success !== false) {
        status.textContent = 'Message sent — thank you!';
        form.reset();
      } else {
        status.textContent = json.message || 'Failed to send — please try again later.';
      }
    }).catch(err => {
      console.error('Contact submit error', err);
      status.textContent = 'Network error — please try again later.';
    });
  });
});
