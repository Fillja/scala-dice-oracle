/* ============================================================
   quiz.js — tiny, dependency-free retrieval-practice widget.
   Reused across lessons. No build step, no libraries.

   Markup contract:
     <div class="quiz">
       <div class="q" data-answer="1" data-explain="Why it's right.">
         <p class="q-text">Question?</p>
         <button class="opt">Option 0</button>
         <button class="opt">Option 1</button>   <!-- data-answer picks this -->
         <button class="opt">Option 2</button>
         <p class="q-fb" hidden></p>
       </div>
     </div>

   Behaviour: click an option. Wrong answers lock that button and
   invite another try (retrieval, not recognition). The correct
   answer reveals the explanation. Feedback is immediate.
   ============================================================ */
(function () {
  function wire(q) {
    var answer  = Number(q.dataset.answer);
    var explain = q.dataset.explain || "";
    var opts    = Array.prototype.slice.call(q.querySelectorAll(".opt"));
    var fb      = q.querySelector(".q-fb");

    // Self-heal: if a lesson forgot the feedback element, create it rather
    // than break silently (see the markup contract above). Belt and braces.
    if (!fb) {
      fb = document.createElement("p");
      fb.className = "q-fb";
      fb.hidden = true;
      q.appendChild(fb);
    }

    opts.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        if (q.classList.contains("solved")) return;
        if (i === answer) {
          btn.classList.add("correct");
          q.classList.add("solved");
          opts.forEach(function (b) { b.disabled = true; });
          fb.hidden = false;
          fb.className = "q-fb ok";
          fb.textContent = "✓ " + explain;
        } else {
          btn.classList.add("wrong");
          btn.disabled = true;
          fb.hidden = false;
          fb.className = "q-fb no";
          fb.textContent = "Not quite — try another.";
        }
      });
    });
  }

  function init() {
    document.querySelectorAll(".quiz .q").forEach(wire);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
