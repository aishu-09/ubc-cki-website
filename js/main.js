// Mobile nav toggle
(function () {
    var btn = document.querySelector('.nav-toggle');
    var nav = document.getElementById('site-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  })();

  // Show the next 3 events from events.html on the home page
(function () {
    var target = document.getElementById('home-events');
    if (!target || !window.fetch) return;
  
    fetch('events.html')
      .then(function (res) {
        if (!res.ok) throw new Error(res.status);
        return res.text();
      })
      .then(function (html) {
        var doc = new DOMParser().parseFromString(html, 'text/html');
        var events = doc.querySelectorAll('#upcoming-events .event');
        if (!events.length) return;
  
        target.innerHTML = '';
        Array.prototype.slice.call(events, 0, 3).forEach(function (ev) {
          target.appendChild(document.importNode(ev, true));
        });
      })
      .catch(function () { /* keep the fallback text */ });
  })();