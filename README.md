![hippo](https://i.imghippo.com/files/vVxWl1724241491.png)

Here’s how you can structure a README file with step-by-step explanations of the code used in your USD to INR converter project.

---

# USD to INR Currency Converter

This project is a responsive currency converter that allows users to convert US Dollars (USD) to Indian Rupees (INR) using HTML, CSS, and JavaScript. The application is simple, intuitive, and perfect for anyone looking to perform quick currency conversions.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Code Explanation](#code-explanation)
- [How to Run the Project](#how-to-run-the-project)
- [How to Deploy](#how-to-deploy)
- [License](#license)

## Features
- **Real-time Conversion:** Converts USD to INR instantly.
- **Responsive Design:** Works seamlessly on all devices.
- **User-Friendly Interface:** Simple and intuitive for easy navigation.

## Technologies Used
- **HTML** for the structure.
- **CSS** for styling.
- **JavaScript** for interactivity.

## Code Explanation

### 1. HTML Structure

The `index.html` file creates the structure of the webpage. Below is the code snippet with an explanation:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>USD to INR Converter</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Currency Converter</h1>
        <div class="converter">
            <input type="number" id="usd" placeholder="USD">
            <button id="convert-btn">Convert</button>
            <input type="text" id="inr" placeholder="INR" readonly>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

- **DOCTYPE Declaration:** `<!DOCTYPE html>` specifies that the document is an HTML5 document.
- **Language Attribute:** `<html lang="en">` sets the language of the document to English.
- **Meta Tags:** `<meta charset="UTF-8">` sets the character encoding. `<meta name="viewport" content="width=device-width, initial-scale=1.0">` ensures the page is responsive on mobile devices.
- **Title Tag:** `<title>USD to INR Converter</title>` sets the title of the page.
- **Link to CSS:** `<link rel="stylesheet" href="styles.css">` links to the external CSS file.
- **Container Div:** `<div class="container">` wraps the content, providing a central structure.
- **Converter Div:** `<div class="converter">` contains the input fields and the button.
  - **Input Fields:** `<input type="number" id="usd" placeholder="USD">` allows the user to input USD, and `<input type="text" id="inr" placeholder="INR" readonly>` displays the converted INR value.
  - **Button:** `<button id="convert-btn">Convert</button>` triggers the conversion.
- **Script Tag:** `<script src="script.js"></script>` links to the JavaScript file that adds functionality.

### 2. CSS Styling

The `styles.css` file adds styling to make the converter visually appealing:

```css
body {
    font-family: 'Arial', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background: #f2f2f2;
}
```

- **Body Styling:** Centers the content both horizontally and vertically, sets the background color, and uses a sans-serif font.
- **Container Styling:** Adds padding, a background color, border-radius, and a shadow to make the container stand out.
- **Input and Button Styling:** Styles the input fields and button to match the overall design and provides hover effects for better user interaction.
- **Responsive Design:** Media queries ensure the converter is responsive on different screen sizes.

### 3. JavaScript Functionality

The `script.js` file handles the conversion logic:

```javascript
document.getElementById('convert-btn').addEventListener('click', function() {
    const usd = document.getElementById('usd').value;
    const conversionRate = 83.2; // Example conversion rate
    const inr = usd * conversionRate;
    document.getElementById('inr').value = inr.toFixed(2);
});
```

- **Event Listener:** The `addEventListener` method is used to trigger the conversion when the "Convert" button is clicked.
- **Conversion Logic:** 
  - **Fetching Input:** `const usd = document.getElementById('usd').value;` gets the value from the USD input field.
  - **Conversion Rate:** `const conversionRate = 83.2;` sets the conversion rate (which can be updated dynamically).
  - **Calculating INR:** `const inr = usd * conversionRate;` calculates the INR equivalent.
  - **Displaying Result:** `document.getElementById('inr').value = inr.toFixed(2);` displays the result in the INR input field, rounded to two decimal places.

## How to Run the Project

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/usd-inr-converter.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd usd-inr-converter
   ```
3. **Open `index.html` in your Browser:**
   - Simply double-click `index.html` or open it via your browser.

## How to Deploy

1. **Push the Code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin master
   ```
2. **Deploy to GitHub Pages:**
   - Go to your GitHub repository.
   - Click on **Settings** > **Pages**.
   - Select `main` branch and save.
   - Your project will be live at `https://your-username.github.io/usd-inr-converter/`.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

