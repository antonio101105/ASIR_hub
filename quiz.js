// Sistema de Exámenes Autocorregibles para ASIR_hub
// Estado global del quiz
window.quizState = { subject: null, index: null, answers: [] };

// La función openTopicModal se encuentra en script.js

window.startQuiz = function (subject, index) {
    const topic = topicsData[subject][index];
    quizState = { subject, index, answers: new Array(topic.quiz.length).fill(null) };

    let html = '<div class="quiz-wrap">';
    topic.quiz.forEach((q, i) => {
        html += `<div class="quiz-q" id="q${i}"><h4>${i + 1}. ${q.q.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h4><div class="quiz-opts">`;
        q.opts.forEach((opt, j) => {
            html += `<label class="quiz-opt"><input type="radio" name="q${i}" value="${j}" onchange="quizState.answers[${i}]=${j}">
                <span>${String.fromCharCode(65 + j)}. ${opt.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</span></label>`;
        });
        html += `</div><div class="quiz-fb" id="fb${i}"></div></div>`;
    });
    html += `</div><div class="quiz-btns">
        <button class="quiz-btn quiz-submit" onclick="submitQuiz()"><i class="fa-solid fa-paper-plane"></i> Enviar</button>
        <button class="quiz-btn quiz-close" onclick="closeQuiz()"><i class="fa-solid fa-times"></i> Cerrar</button>
    </div>`;

    document.getElementById('topicModalTitle').textContent = `Test: ${topic.title}`;
    document.getElementById('topicModalContent').innerHTML = html;
};

window.submitQuiz = function () {
    const topic = topicsData[quizState.subject][quizState.index];
    let correct = 0;

    topic.quiz.forEach((q, i) => {
        const ans = quizState.answers[i];
        const fb = document.getElementById(`fb${i}`);
        const qel = document.getElementById(`q${i}`);

        if (ans === null) {
            fb.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> No respondida';
            fb.className = 'quiz-fb quiz-unans';
        } else if (ans === q.correct) {
            correct++;
            fb.innerHTML = '<i class="fa-solid fa-circle-check"></i> ¡Correcto!';
            fb.className = 'quiz-fb quiz-ok';
            qel.classList.add('correct');
        } else {
            fb.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Incorrecto. Correcta: <strong>${String.fromCharCode(65 + q.correct)}. ${q.opts[q.correct]}</strong>`;
            fb.className = 'quiz-fb quiz-wrong';
            qel.classList.add('incorrect');
        }

        qel.querySelectorAll('input').forEach(inp => inp.disabled = true);
    });

    const pct = ((correct / topic.quiz.length) * 100).toFixed(1);
    let grade = pct >= 90 ? 'Sobresaliente' : pct >= 70 ? 'Notable' : pct >= 50 ? 'Aprobado' : 'Suspenso';
    let icon = pct >= 90 ? 'trophy' : pct >= 70 ? 'medal' : pct >= 50 ? 'thumbs-up' : 'thumbs-down';

    const result = `<div class="quiz-result ${pct >= 50 ? 'pass' : 'fail'}">
        <h3><i class="fa-solid fa-${icon}"></i> Resultado</h3>
        <p class="quiz-score">Acertaste <strong>${correct}</strong> de <strong>${topic.quiz.length}</strong></p>
        <p class="quiz-pct">${pct}%</p>
        <p class="quiz-grade">${grade}</p>
    </div>`;

    document.getElementById('topicModalContent').insertAdjacentHTML('afterbegin', result);
    document.querySelector('.quiz-submit').disabled = true;
    document.querySelector('.quiz-submit').innerHTML = '<i class="fa-solid fa-check"></i> Completado';
};

window.closeQuiz = function () {
    openTopicModal(quizState.subject, quizState.index);
};
