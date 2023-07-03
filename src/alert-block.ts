/**
 * The alert dialog will block the UI thread, preventing
 * the paragraph for being added to the DOM.
 */
window.onload = function () {
    document.getElementById('button')
        ?.addEventListener('click', () => {
            alert('You clicked the button')

            const paragraph = document.createElement('p')

            paragraph.textContent = 'This text should be added immediately'
            document.body.appendChild(paragraph)
        })
}