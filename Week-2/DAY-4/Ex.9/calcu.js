
        function calculate(operator) {
            let num1 = parseFloat(document.getElementById('num1').value);
            let num2 = parseFloat(document.getElementById('num2').value);
            let result;
            let message = "";
            
            let isFaulty = Math.random() < 0.4; 
            
            switch(operator) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/': result = num2 !== 0 ? num1 / num2 : 'Error'; break;
                default: result = 'Invalid';
            }
            
            if (isFaulty) {
                let quirks = ["Oops! Brain lag!", "Are you sure?", "Numbers lied!", "Reality is overrated!", "Glitch alert!", "Math is hard!", "Don't trust me!", "Oopsie-daisy!"];
                result += Math.floor(Math.random() * 10) - 5; 
                message = quirks[Math.floor(Math.random() * quirks.length)];
            }
            
            document.getElementById('result').textContent = result;
            document.getElementById('message').textContent = message;
        }
        
        function calculateRandom() {
            let operators = ['+', '-', '*', '/'];
            let randomOperator = operators[Math.floor(Math.random() * operators.length)];
            calculate(randomOperator);
        }

        function clearFields() {
            document.getElementById('num1').value = "";
            document.getElementById('num2').value = "";
            document.getElementById('result').textContent = "0";
            document.getElementById('message').textContent = "";
        }