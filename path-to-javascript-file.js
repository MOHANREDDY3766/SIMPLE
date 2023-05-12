$scope.submit = function() {
    // Get the values of the input fields
    var name = $scope.name;
    var username = $scope.username;
    var password = $scope.password;
    
    // Validate the input fields
    if(name == '' || username == '' || password == '') {
       alert('Please fill all the fields.');
       return;
    }
    
    // Check the credentials
    // In this example, we are checking if the username is 'admin' and password is 'password'
    if(username == 'admin' && password == 'password') {
       alert('Login successful!');
    } else {
       alert('Invalid username or password!');
    }
 };
 