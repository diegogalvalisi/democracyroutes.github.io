/* ============================================================
   interactions — civic-tech edition
   ============================================================ */
(function () {
  "use strict";

  // unfoldable software cards
  document.querySelectorAll("[data-tool]").forEach(function (tool) {
    tool.addEventListener("click", function () {
      tool.classList.toggle("open");
    });
  });

  // team: placeholder members — swap in your own
  var team = [
    { initials: "AR", name: "Alex Rivero", role: "systems · deliberation",
      bio: "writes the slow code. believes every bug is a political decision." },
    { initials: "MN", name: "Mina Nasser", role: "design · interfaces",
      bio: "draws the maps of agreement. allergic to gradients." },
    { initials: "KO", name: "Karl Osei", role: "civic partnerships",
      bio: "has talked more cities into pilot weekends than anyone should." },
    { initials: "LT", name: "Lina Toth", role: "security · tally integrity",
      bio: "keeps the arithmetic boring, which is the whole job." }
  ];

  function buildTeam() {
    var grid = document.getElementById("team-grid");
    if (!grid) return;
    grid.innerHTML = team.map(function (m) {
      return '<div class="member">'
        + '<div class="member-avatar">' + m.initials + '</div>'
        + '<div class="member-name">' + m.name + '</div>'
        + '<div class="member-role">' + m.role + '</div>'
        + '<p class="member-bio">' + m.bio + '</p>'
        + '</div>';
    }).join("");
  }
  buildTeam();

  // sponsors: generated logo cards, duplicated for a seamless loop
  var sponsors = [
    { name: "Civic Tech Foundation", tier: "platinum",
      svg: '<circle cx="36" cy="36" r="26" fill="none" stroke="#2b62d9" stroke-width="2"/><circle cx="36" cy="36" r="10" fill="#cfe0ff" stroke="#2b62d9" stroke-width="2"/>' },
    { name: "Open Knowledge Lab", tier: "gold",
      svg: '<rect x="14" y="14" width="44" height="44" fill="none" stroke="#1e1d1a" stroke-width="2" transform="rotate(45 36 36)"/><rect x="24" y="24" width="24" height="24" fill="#cfe0ff" stroke="#2b62d9" stroke-width="2" transform="rotate(45 36 36)"/>' },
    { name: "The Commons Fund", tier: "platinum",
      svg: '<path d="M12 44 L36 16 L60 44 Z" fill="none" stroke="#2b62d9" stroke-width="2"/><path d="M22 44 L36 26 L50 44 Z" fill="#cfe0ff"/>' },
    { name: "Public Stack Initiative", tier: "silver",
      svg: '<path d="M14 28 h44 M14 36 h44 M14 44 h44" stroke="#1e1d1a" stroke-width="2"/><circle cx="36" cy="24" r="7" fill="#cfe0ff" stroke="#2b62d9" stroke-width="2"/>' },
    { name: "Deliberation Trust", tier: "gold",
      svg: '<g stroke="#2b62d9" stroke-width="2" fill="none"><path d="M36 10 v52"/><path d="M12 24 l48 24"/><path d="M12 48 l48 -24"/></g><circle cx="36" cy="36" r="6" fill="#cfe0ff" stroke="#2b62d9" stroke-width="2"/>' },
    { name: "Municipal Software Coop", tier: "silver",
      svg: '<rect x="12" y="12" width="20" height="20" fill="#cfe0ff" stroke="#2b62d9" stroke-width="2"/><rect x="40" y="12" width="20" height="20" fill="none" stroke="#1e1d1a" stroke-width="2"/><rect x="12" y="40" width="20" height="20" fill="none" stroke="#1e1d1a" stroke-width="2"/><rect x="40" y="40" width="20" height="20" fill="#cfe0ff" stroke="#2b62d9" stroke-width="2"/>' },
    { name: "Open Gov Fellowship", tier: "gold",
      svg: '<path d="M12 36 a24 24 0 0 1 48 0" fill="none" stroke="#2b62d9" stroke-width="2"/><path d="M20 36 a16 16 0 0 1 32 0" fill="#cfe0ff" stroke="#2b62d9" stroke-width="2"/><circle cx="36" cy="36" r="4" fill="#1e1d1a"/>' },
    { name: "Participatory Press", tier: "silver",
      svg: '<path d="M14 20 h44 M14 32 h30 M14 44 h38 M14 56 h22" stroke="#1e1d1a" stroke-width="2"/><circle cx="56" cy="16" r="6" fill="#cfe0ff" stroke="#2b62d9" stroke-width="2"/>' }
  ];

  function buildSponsors() {
    var track = document.getElementById("sponsors-track");
    if (!track) return;
    var html = sponsors.map(function (sp) {
      return '<div class="sponsor-card">'
        + '<svg class="sponsor-logo" viewBox="0 0 72 72" aria-hidden="true">' + sp.svg + '</svg>'
        + '<span class="sponsor-name">' + sp.name + '</span>'
        + '<span class="sponsor-tier">' + sp.tier + '</span>'
        + '</div>';
    }).join("");
    track.innerHTML = html + html;   // duplicate for the seamless loop
  }
  buildSponsors();

  // gentle entrance motion
  var sections = document.querySelectorAll(".section, .hero");
  sections.forEach(function (s) { s.classList.add("reveal"); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach(function (s) { observer.observe(s); });

})();
