//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way
        
        // Get form inputs
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        
        // Validate inputs
        if (name === '' || age === '') {
            alert('All fields are required!');
            return;
        }
        
        // Create a promise to check age
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age > 18) {
                    resolve(`Welcome, ${name}. You can vote.`);
                } else {
                    reject(`Oh sorry ${name}. You aren't old enough.`);
                }
            }, 4000);
        })
        .then(message => {
            alert(message);
        })
        .catch(errorMessage => {
            alert(errorMessage);
        });
    });