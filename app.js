import {
  KEYS, types, questions, QUESTION_COUNT, ESTIMATED_MINUTES, STORAGE_KEY,
  emptyState, restoreState, scoreAnswers, optionOrder, PRESENTER, PARTNERS, SOCIALS, KEYWORDS, INTERACTION, FOCUS_TAGS
} from './core.mjs?v=6';

const main = document.getElementById('main');
const dialog = document.getElementById('dialog');
const arrow = '<span aria-hidden="true">→</span>';
const bookingAttrs = 'target="_blank" rel="noopener"';
let storageOK = true;
let state = emptyState();

try {
  state = restoreState(JSON.parse(localStorage.getItem(STORAGE_KEY)));
} catch (error) {
  storageOK = error instanceof SyntaxError;
}

const esc = value => String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
const rich = text => esc(text).replace(new RegExp(`(${KEYWORDS.join('|')})`, 'gi'), '<mark class="hl">$1</mark>');
const answered = () => state.answers.filter(Boolean).length;
const complete = () => answered() === QUESTION_COUNT;
const tone = key => `--type:${types[key].color};--tint:${types[key].color}1f`;
const firstUnanswered = () => Math.max(0, state.answers.indexOf(null));
const share = (scores, key) => scores[key] / QUESTION_COUNT * 100;
const pct = value => `${value.toLocaleString('vi-VN', { maximumFractionDigits: 1 })}%`;
const skeleton = '<div class="skeleton" aria-hidden="true"><span></span><span></span><span></span></div>';

function announce(message) {
  document.getElementById('announcement').textContent = message;
}

function renderFooter() {
  const footer = document.getElementById('site-footer');
  const links = [...(PRESENTER.portfolio ? [{ label: 'Portfolio', url: PRESENTER.portfolio }] : []), ...SOCIALS];
  const socials = links.length ? `<ul class="social-row" aria-label="Liên kết">${links.map(s => `<li><a href="${esc(s.url)}" ${bookingAttrs}>${esc(s.label)}</a></li>`).join('')}</ul>` : '';
  const partners = PARTNERS.length ? `<ul class="partner-row" aria-label="Đơn vị đồng hành">${PARTNERS.map(p => `<li>${p.url ? `<a href="${esc(p.url)}" ${bookingAttrs}>` : ''}<img src="${esc(p.logo)}" alt="${esc(p.name)}" loading="lazy">${p.url ? '</a>' : ''}</li>`).join('')}</ul>` : '';
  footer.innerHTML = `
    <span class="footer-label">Biên soạn & phát triển bởi</span>
    <strong>${esc(PRESENTER.name)}</strong>
    <span class="footer-titles">${PRESENTER.titles.map(esc).join(' · ')}</span>
    ${PRESENTER.titleNote ? `<span class="footer-note">${esc(PRESENTER.titleNote)}</span>` : ''}
    ${socials}
    ${partners}`;
}

function showStorageWarning() {
  if (document.querySelector('.storage-warning')) return;
  const note = document.createElement('p');
  note.className = 'notice storage-warning';
  note.setAttribute('role', 'status');
  note.textContent = 'Trình duyệt chưa cho phép lưu tiến độ. Bạn vẫn có thể khám phá trong phiên này.';
  document.querySelector('.site-header').after(note);
}

function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    storageOK = false;
    showStorageWarning();
  }
}

function go(view, { index = state.index, focus = 'h1' } = {}) {
  Object.assign(state, { view, index });
  persist();
  render(focus);
}

function render(focus) {
  if (state.view === 'result' && !complete()) state.view = 'quiz';
  const views = { intro, quiz, result };
  const titles = {
    intro: 'Thấu hiểu cách bạn làm việc',
    quiz: `Câu ${state.index + 1}/${QUESTION_COUNT}`,
    result: 'Hồ sơ DISC của bạn'
  };
  const view = views[state.view] ? state.view : 'intro';
  main.innerHTML = views[view]();
  document.title = `${titles[view]} · DISC Insight`;
  if (!storageOK) showStorageWarning();
  if (focus) {
    const target = main.querySelector(focus);
    if (focus === 'h1') {
      window.scrollTo(0, 0);
      target.tabIndex = -1;
    }
    target?.focus({ preventScroll: focus === 'h1' });
  }
}

function intro() {
  const n = answered();
  return `
    <section class="intro" aria-labelledby="intro-title">
      <div class="intro-heading">
        <p class="eyebrow">Khám phá hành vi làm việc</p>
        <h1 id="intro-title">Thấu hiểu cách<br>bạn làm việc</h1>
        <p class="lede">Khám phá cách bạn ra quyết định, giao tiếp và phối hợp qua bốn xu hướng hành vi DISC.</p>
      </div>
      <p class="intro-meta"><span><strong>${QUESTION_COUNT}</strong> tình huống</span><span><strong>${ESTIMATED_MINUTES}</strong> phút dự kiến</span></p>
      ${state.expandedFrom && !complete() ? `<p class="notice">Bộ khám phá đã được mở rộng từ ${state.expandedFrom} lên ${QUESTION_COUNT} tình huống. Các lựa chọn đã lưu được giữ lại. Hãy trả lời các câu còn thiếu để cập nhật hồ sơ.</p>` : ''}
      ${n ? `
        <div class="start-area">
          <p>${complete() ? 'Hồ sơ DISC của bạn đã sẵn sàng.' : `Bạn đã khám phá <strong>${n}/${QUESTION_COUNT}</strong> tình huống.`}</p>
          <button class="button start-button" data-action="resume">${complete() ? 'Xem hồ sơ DISC' : 'Tiếp tục khám phá'} ${arrow}</button>
          <button class="button text" data-action="reset">Bắt đầu lại</button>
        </div>` : `
        <form id="start-form" class="start-area">
          <label for="name">Tên hiển thị <span class="muted">(không bắt buộc)</span></label>
          <input id="name" name="name" type="text" maxlength="60" placeholder="Nhập tên của bạn" autocomplete="name" value="${esc(state.name)}">
          <button class="button start-button" type="submit">Bắt đầu khám phá ${arrow}</button>
        </form>`}
      <p class="local-note">Tiến độ lưu trên trình duyệt này.</p>
      <ul class="type-strip" aria-label="Bốn xu hướng DISC">
        ${KEYS.map(key => `<li style="${tone(key)}"><span class="type-symbol">${key}</span><span><strong>${types[key].name}</strong><small>${types[key].en}</small></span></li>`).join('')}
      </ul>
    </section>`;
}

function quiz() {
  const q = questions[state.index];
  const selected = state.answers[state.index];
  const n = answered();
  const last = state.index === QUESTION_COUNT - 1;
  return `<div class="wrap quiz-wrap">
    <section class="question-card card" aria-labelledby="question-title">
      <div class="progress-head"><strong>Câu ${state.index + 1} / ${QUESTION_COUNT}</strong><span id="progress-count">${n} câu đã chọn</span></div>
      <progress id="progress" aria-label="Số câu đã chọn" value="${n}" max="${QUESTION_COUNT}"></progress>
      <p class="eyebrow">${q.topic}</p>
      <h1 id="question-title">${rich(q.q)}</h1>
      <p class="question-help" id="question-help">Chọn mô tả gần nhất với cách bạn thường phản xạ. Đừng nghĩ quá lâu, hãy chọn theo bản năng đầu tiên.</p>
      <fieldset class="options" aria-labelledby="question-title" aria-describedby="question-help">
        ${optionOrder(state.index).map((key, index) => `<label class="option">
          <input type="radio" name="answer" value="${key}" ${selected === key ? 'checked' : ''}>
          <span class="option-letter" aria-hidden="true">${String.fromCharCode(65 + index)}</span>
          <span class="option-text">${q.o[key]}</span>
        </label>`).join('')}
      </fieldset>
      <div class="question-actions">
        <button class="button" data-action="next" ${selected ? '' : 'disabled'}>${last ? 'Xem kết quả' : 'Tiếp theo'} ${arrow}</button>
      </div>
    </section>
  </div>`;
}

function result() {
  const { leaders, scores } = scoreAnswers(state.answers);
  const single = leaders.length === 1;
  const primary = leaders[0];
  const others = KEYS.filter(key => !leaders.includes(key)).sort((x, y) => scores[y] - scores[x]);
  const heading = leaders.map(key => types[key].name).join(' & ');
  const sub = leaders.map(key => types[key].en).join(' & ');
  const summary = single ? types[primary].desc : 'Phản xạ của bạn đa hướng. Tùy tình huống, bạn có thể đổi sang nhiều cách làm khác nhau.';

  const bar = [...leaders, ...others]
    .map(key => `<span style="width:${share(scores, key)}%;background:${types[key].color}"></span>`).join('');
  const legend = [
    ...leaders.map(key => `<li><span class="rp-dot" style="background:${types[key].color}"></span><span class="rp-name">${key} · ${esc(types[key].name)}</span><span class="rp-tag">Nổi trội</span></li>`),
    ...others.map(key => `<li><span class="rp-dot" style="background:${types[key].color}"></span><span class="rp-name">${key} · ${esc(types[key].name)}</span><span class="rp-val">${pct(share(scores, key))}</span></li>`)
  ].join('');

  const leaderRows = leaders.map(key => `<div class="rp-leader">
      <span class="rp-dot" style="background:${types[key].color}"></span>
      <div><h3>${esc(types[key].name)}</h3><span class="rp-focus">${FOCUS_TAGS[key].join(' · ')}</span><p>${rich(types[key].strength)}</p></div>
    </div>`).join('');

  const second = others[0];
  const close = single && share(scores, second) >= share(scores, primary) * 0.6;
  const reading = !single
    ? 'Khi nhiều nhóm cùng nổi trội, bạn ít bị khuôn vào một kiểu phản xạ và thường đổi cách làm theo tình huống.'
    : `Nhóm ${types[primary].name} chi phối phản xạ đầu tiên của bạn. ${close
        ? `Nhóm ${types[second].name} (${pct(share(scores, second))}) khá gần, nên bạn có thể chuyển sang kiểu này khi tình huống cần. Đây là một lợi thế.`
        : `Nhóm ${types[second].name} (${pct(share(scores, second))}) thấp hơn rõ, nên phản xạ của bạn tập trung vào một hướng. Khi gặp người khác biệt, hãy chủ động đổi cách tiếp cận.`}`;

  const advice = others.map(other => {
    const tip = INTERACTION[primary]?.[other];
    if (!tip) return '';
    return `<li style="--type:${types[other].color}">
      <h3>${other} · ${esc(types[other].name)}</h3>
      <p><span class="rp-label">Nên</span>${esc(tip.do)}</p>
      <p><span class="rp-label rp-avoid">Tránh</span>${esc(tip.avoid)}</p>
    </li>`;
  }).join('');

  return `<div class="wrap rp">
    <p class="rp-eyebrow">Bản xem trước · Hồ sơ DISC${state.name ? ` · ${esc(state.name)}` : ''}</p>
    <h1 class="rp-title" id="result-title">${esc(heading)}</h1>
    <p class="rp-sub">${esc(sub)}</p>
    <p class="rp-summary">${rich(summary)}</p>

    <section class="rp-section" aria-labelledby="mix-title">
      <h2 id="mix-title">Tỉ lệ phản xạ</h2>
      <div class="rp-bar" aria-hidden="true">${bar}</div>
      <ul class="rp-legend">${legend}</ul>
    </section>

    <section class="rp-section" aria-labelledby="strength-title">
      <h2 id="strength-title">Nhóm nổi trội</h2>
      ${leaderRows}
    </section>

    <section class="rp-section" aria-labelledby="meaning-title">
      <h2 id="meaning-title">Ý nghĩa</h2>
      <p class="rp-body">${rich(reading)}</p>
    </section>

    <section class="rp-section" aria-labelledby="advice-title">
      <h2 id="advice-title">Khi giao tiếp với các nhóm khác</h2>
      <ul class="rp-advice">${advice}</ul>
    </section>

    <section class="rp-next" aria-labelledby="next-title">
      <h2 id="next-title">Kế hoạch hành động</h2>
      <p>Gợi ý áp dụng cụ thể vào công việc và đội nhóm được trao đổi trực tiếp trong buổi khám phá riêng cùng Cường.</p>
      <a class="button" href="${esc(PRESENTER.booking)}" ${bookingAttrs}>Cùng khám phá sâu hơn ${arrow}</a>
    </section>

    <div class="rp-bottom">
      <button class="button text compact" data-action="reset">Khám phá lại</button>
    </div>
  </div>`;
}

function about() {
  dialog.innerHTML = `<h2 id="dialog-title">Về trải nghiệm DISC</h2>
    <p>Chọn một trong bốn phương án ở mỗi tình huống, theo phản xạ đầu tiên. Mỗi lựa chọn cộng một điểm vào D, I, S hoặc C. Hồ sơ hiển thị nhóm nổi trội và tỉ lệ các nhóm còn lại.</p>
    <p>Bộ câu hỏi phục vụ tự phản tư và trao đổi trong công việc. Kết quả chưa được kiểm định tâm trắc và không dùng làm căn cứ tuyển dụng hay đánh giá năng lực.</p>
    <p>Tên, câu trả lời và ghi chú lưu trên trình duyệt của bạn. Trên thiết bị dùng chung, bạn có thể chọn “Khám phá lại” để xóa dữ liệu hiện tại.</p>
    <div class="button-row"><button class="button" data-action="close-dialog">Đã hiểu</button></div>`;
  dialog.showModal();
}

function askReset() {
  dialog.innerHTML = `<h2 id="dialog-title">Bắt đầu lại từ đầu?</h2>
    <p>Tên, câu trả lời và ghi chú hiện tại sẽ được xóa khỏi trình duyệt này.</p>
    <div class="button-row">
      <button class="button secondary" data-action="close-dialog" autofocus>Giữ lại</button>
      <button class="button" data-action="confirm-reset">Xóa và bắt đầu lại</button>
    </div>`;
  dialog.showModal();
}

function reset() {
  dialog.close();
  state = emptyState();
  try {
    localStorage.removeItem(STORAGE_KEY);
    announce('Đã xóa dữ liệu khám phá hiện tại.');
  } catch {
    storageOK = false;
    announce('Trình duyệt chưa cho phép xóa dữ liệu đã lưu.');
  }
  render('h1');
}

main.addEventListener('submit', event => {
  if (event.target.id !== 'start-form') return;
  event.preventDefault();
  state.name = document.getElementById('name').value.trim().normalize().slice(0, 60);
  go('quiz', { index: 0 });
});

main.addEventListener('change', event => {
  if (event.target.name !== 'answer') return;
  state.answers[state.index] = event.target.value;
  persist();
  const n = answered();
  main.querySelector('[data-action="next"]').disabled = false;
  document.getElementById('progress').value = n;
  document.getElementById('progress-count').textContent = `${n} câu đã chọn`;
});

main.addEventListener('input', event => {
  if (event.target.id !== 'reflection') return;
  state.reflection = event.target.value.slice(0, 700);
  persist();
  document.getElementById('reflection-count').textContent = `${state.reflection.length}/700`;
  document.getElementById('reflection-status').textContent = storageOK ? 'Đã lưu trên trình duyệt này.' : 'Hãy ghi lại ý này ra giấy để giữ.';
  main.querySelector('.print-reflection').textContent = state.reflection || 'Chưa có ghi chú.';
});

document.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button || button.disabled) return;
  switch (button.dataset.action) {
    case 'home': go('intro'); break;
    case 'about': about(); break;
    case 'close-dialog': dialog.close(); break;
    case 'reset': askReset(); break;
    case 'confirm-reset': reset(); break;
    case 'resume': go(complete() ? 'result' : 'quiz', { index: firstUnanswered() }); break;
    case 'next':
      if (!state.answers[state.index]) break;
      if (state.index === QUESTION_COUNT - 1) go('result');
      else go('quiz', { index: state.index + 1 });
      break;
  }
});

document.addEventListener('keydown', event => {
  if (dialog.open) return;
  if (state.view === 'quiz' && event.key === 'Enter' && event.target.matches('input[name="answer"]')) {
    event.preventDefault();
    main.querySelector('[data-action="next"]').click();
  }
});

renderFooter();
render();
