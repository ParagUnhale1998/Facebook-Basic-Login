# Here I Create a Basic Facebook Login

```
Welcome to My Github Profile.
 I create a simple Facebook Login from scratch using HTML, CSS, and JavaScript.
```
The provided code is an HTML and JavaScript snippet for a login form resembling a Facebook login page.

1) The HTML structure defines a container with various elements, including input fields for email and password, a login button, links for forgotten password and creating a new account, and an error message placeholder.

2) JavaScript code is included to handle form validation and submission.

3) The emailInput, emailError, and emailPattern variables are declared to capture the respective elements and a regular expression pattern for validating email addresses.

4) The validateEmail() function is defined to validate the email input against the provided regular expression pattern. If the email is valid, the error message is cleared, and the function returns true. Otherwise, an error message is displayed, and the function returns false.

5) The handleSubmit() function is defined to handle the form submission. It prevents the default form submission behavior, and if the email is valid (checked using validateEmail()), further actions like submitting the form or additional processing can be performed.

6) The myForm variable captures the form element using its ID, and an event listener is added to it to listen for the submit event. When the form is submitted, the handleSubmit() function is called.

Overall, this code sets up a login form with email validation and form submission handling. When the form is submitted, it checks if the email is valid and can perform additional actions based on the result.


![image](https://github.com/ParagUnhale1998/Facebook-Basic-Login/blob/main/Preview.png)
