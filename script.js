body {
    font-family: Arial, sans-serif;
    text-align: center;
    background: url('https://www.scobserver.in/wp-content/uploads/2020/06/Supreme-Court-2.jpg') no-repeat center center fixed;
    background-size: cover;
    margin: 0;
    padding: 0;
    color: white;
}

header {
    background: rgba(44, 62, 80, 0.8); /* Transparent Background */
    color: white;
    padding: 20px;
}

h1 {
    margin: 0;
}

.form-section {
    margin-top: 50px;
    background: rgba(0, 0, 0, 0.6);
    padding: 20px;
    display: inline-block;
    border-radius: 10px;
    width: 80%;
    max-width: 500px;
}

input, textarea {
    display: block;
    width: 90%;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
}

textarea {
    height: 120px; /* Bada box dikhne ke liye */
    resize: vertical;
}

button {
    background: #27AE60;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 18px;
}

button:hover {
    background: #219150;
}

/* ✅ Green Popup Message */
.popup {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #28a745; /* Green Background */
    color: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.popup button {
    background: white;
    color: black;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 10px;
}

.popup button:hover {
    background: #ddd;
}




