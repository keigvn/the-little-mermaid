document.addEventListener('DOMContentLoaded', function() {
    const introductionBtn = document.getElementById('introduction-btn');
    const introductionParagraph = document.getElementById('introduction-paragraph');
    const nvg = document.querySelector('.nvg'); 
    let clickCount = 0;

    
    introductionBtn.addEventListener('click', function() {
        clickCount++;

        // if else statement for the 
        if (clickCount % 2 === 1) {
            // Move the button 
            introductionBtn.style.position = 'static';
            introductionBtn.style.top = nvg.getBoundingClientRect().bottom + 'px';
            introductionBtn.style.left = '20px';
         

            // removes the hidden state of paragraph 
            introductionParagraph.classList.remove('hidden');
        } else {
            // For essentially reverting the button to it's original positon
            introductionBtn.style.position = 'static';
            introductionBtn.style.marginTop = '20px';
            document.body.style.backgroundImage = 'url("ship1.png")';

            // An event which will revert the paragraph back to hidden state 
            introductionParagraph.classList.add('hidden');
        }
    });
});
