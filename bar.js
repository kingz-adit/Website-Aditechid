const spans = document.querySelectorAll('.ProgBar span');

spans.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
})