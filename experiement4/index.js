// Person class
class Person {
    constructor(name, email, mobile) {
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }

    printDetails() {
        return `Name: ${this.name}, Email: ${this.email}, Mobile: ${this.mobile}`;
    }
}

// Student class inheriting from Person
class Student extends Person {
    constructor(name, email, mobile, rollNo) {
        super(name, email, mobile);
        if (rollNo === 0) {
            throw new Error('Roll number cannot be zero.');
        }
        this.rollNo = rollNo;
    }

    printDetails() {
        return `${super.printDetails()}, Roll No: ${this.rollNo}`;
    }
}

// Validate and process the form
function processOrder() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let message = document.getElementById("message").value;
    let size = document.getElementById("size").value;

    // Validation checks
    if (name === "" || email === "" || mobile === "" || size === "") {
        alert("All fields are required!");
        return;
    }

    if (mobile.length !== 9 || isNaN(mobile)) {
        alert("Mobile number must be exactly 9 digits.");
        return;
    }

    if (message.length > 100) {
        alert("Message cannot exceed 100 characters.");
        return;
    }

    // Create a Person object
    let person = new Person(name, email, mobile);
    console.log(person.printDetails());

    // Generate Receipt
    let receiptDiv = document.getElementById("receipt");
    let receiptDetails = document.getElementById("receiptDetails");
    let currentDate = new Date().toLocaleDateString();

    receiptDetails.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>T-Shirt Size:</strong> ${size}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Order Date:</strong> ${currentDate}</p>
    `;
    receiptDiv.classList.remove("hidden");

    // Clear form fields after submission
    document.getElementById("orderForm").reset();
}

// Arrow function example (non-member function)
let displayMessage = (message) => console.log(message);

// Exception handling for Student class instantiation
try {
    let student = new Student("John Doe", "john@example.com", "123456789", 0);
    console.log(student.printDetails());
} catch (error) {
    displayMessage(error.message);
}
