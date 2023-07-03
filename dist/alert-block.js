"use strict";
window.onload = function () {
    var _a;
    (_a = document.getElementById('button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        alert('You clicked the button');
        const paragraph = document.createElement('p');
        paragraph.textContent = 'This text should be added immediately';
        document.body.appendChild(paragraph);
    });
};
