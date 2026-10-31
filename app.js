
(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  // Organization search
  const orgSearch = document.getElementById('orgSearch');
  const orgCards = [...document.querySelectorAll('.org-card')];
  const orgCount = document.getElementById('orgCount');

  function updateOrgCount() {
    const shown = orgCards.filter(card => card.style.display !== 'none').length;
    orgCount.textContent = `${shown} organization${shown === 1 ? '' : 's'} shown`;
  }

  if (orgSearch) {
    updateOrgCount();
    orgSearch.addEventListener('input', () => {
      const q = orgSearch.value.trim().toLowerCase();
      orgCards.forEach(card => {
        card.style.display = card.dataset.name.includes(q) ? '' : 'none';
      });
      updateOrgCount();
    });
  }

  // Career matcher
  const pathways = {
    community: ['Community Health Worker', 'QMHP', 'Social Worker'],
    recovery: ['Mental Health Peer Specialist', 'Recovery Support Peer Specialist', 'Substance Use Counselor — LCDC'],
    clinical: ['Substance Use Counselor — LCDC', 'Licensed Professional Counselor / Therapist', 'Psychologist'],
    direct: ['Behavioral Health Technician', 'Psychiatric Technician'],
    coordination: ['QMHP', 'Community Health Worker', 'Social Worker'],
    teamwork: ['Behavioral Health Technician', 'Psychiatric Technician', 'QMHP'],
    advanced: ['Licensed Professional Counselor / Therapist', 'Social Worker', 'Psychologist', 'Psychiatric-Mental Health Nurse Practitioner', 'Psychiatrist']
  };

  const matcherForm = document.getElementById('matcherForm');
  const matchResults = document.getElementById('matchResults');

  if (matcherForm && matchResults) {
    matcherForm.addEventListener('submit', e => {
      e.preventDefault();
      const selected = [...matcherForm.querySelectorAll('input:checked')].map(i => i.value);
      if (!selected.length) {
        matchResults.innerHTML = '<h3>Your pathway matches</h3><p>Select at least one interest first.</p>';
        return;
      }
      const scores = {};
      selected.forEach(key => (pathways[key] || []).forEach((name, index) => {
        scores[name] = (scores[name] || 0) + Math.max(1, 3 - index);
      }));
      const ranked = Object.entries(scores).sort((a,b) => b[1] - a[1]).slice(0,5);
      matchResults.innerHTML = `
        <h3>Your strongest exploration matches</h3>
        <p>These are starting points based on themes you selected. They do not determine eligibility, certification, or job fit.</p>
        <div class="match-chips">${ranked.map(([name]) => `<span class="match-chip">${name}</span>`).join('')}</div>
      `;
    });

    matcherForm.addEventListener('reset', () => {
      setTimeout(() => {
        matchResults.innerHTML = '<h3>Your pathway matches</h3><p>Select a few interests and choose <strong>Show my matches</strong>.</p>';
      }, 0);
    });
  }

  // Local-only career plan
  const fields = {
    planPathway: document.getElementById('planPathway'),
    planVerify: document.getElementById('planVerify'),
    planAction: document.getElementById('planAction')
  };
  const saveStatus = document.getElementById('saveStatus');

  try {
    Object.entries(fields).forEach(([key, el]) => {
      if (!el) return;
      el.value = localStorage.getItem(`wredi_${key}`) || '';
      el.addEventListener('input', () => {
        localStorage.setItem(`wredi_${key}`, el.value);
        if (saveStatus) saveStatus.textContent = 'Saved in this browser';
      });
    });
  } catch (_) {
    if (saveStatus) saveStatus.textContent = 'Browser storage is unavailable; you can still print your plan.';
  }

  const printPlan = document.getElementById('printPlan');
  if (printPlan) printPlan.addEventListener('click', () => window.print());

  const clearPlan = document.getElementById('clearPlan');
  if (clearPlan) clearPlan.addEventListener('click', () => {
    Object.entries(fields).forEach(([key, el]) => {
      if (el) el.value = '';
      try { localStorage.removeItem(`wredi_${key}`); } catch (_) {}
    });
    if (saveStatus) saveStatus.textContent = 'Saved plan cleared';
  });

  // Training and certification filters
  const trainingButtons = [...document.querySelectorAll('[data-training-filter]')];
  const trainingCards = [...document.querySelectorAll('.training-card')];

  if (trainingButtons.length && trainingCards.length) {
    trainingButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.trainingFilter;
        trainingButtons.forEach(b => b.classList.toggle('active', b === button));
        trainingCards.forEach(card => {
          const categories = (card.dataset.trainingCategory || '').split(/\s+/);
          card.hidden = filter !== 'all' && !categories.includes(filter);
        });
      });
    });
  }

})();
