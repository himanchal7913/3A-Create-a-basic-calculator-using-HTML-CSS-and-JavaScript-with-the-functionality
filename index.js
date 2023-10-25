let display = document.getElementById('display');
buttons = document.querySelectorAll('button');
let screenValue = ' ';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        console.log('Button text is', buttontext);
        if (buttontext == 'x') {
            buttontext = '*';
            screenValue += buttontext
            display.value = screenValue;
        }
        else if (buttontext == '÷') {
            buttontext = '/';
            screenValue += buttontext;
            display.value = screenValue;
        }
        else if (buttontext == 'AC') {
            screenValue = ' ';
            display.value = screenValue;
        }
        else if (buttontext == '=') {

            try {

                const result = eval(screenValue);
                if (isNaN(result)) {
                    throw new Error('Invalid expression');
                }
                display.value = result;
            }
            catch (error) {

                display.value = 'Error';
                console.error('Error:', error);
            }
        }

        else {

            screenValue += buttontext
            display.value = screenValue;
        }
    })
}
