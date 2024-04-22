const readline = require('readline');
const axios = require('axios');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to fetch data using callbacks
function fetchDataWithCallbacks(callback) {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => callback(null, response.data))
    .catch(error => callback(error, null));
}

// Function to fetch data using promises
function fetchDataWithPromises() {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.data)
    .catch(error => { throw error });
}

// Function to fetch data using async/await
async function fetchDataWithAsyncAwait() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    throw error;
  }
}

// Function to process and display data
function processDataAndDisplay(data) {
  console.log('Processed Data:');
  console.log(data);
  // You can further process the data and display it in a user-friendly format here
}

// Function to handle errors
function handleError(error) {
  console.error('Error:', error.message);
}

// Function to let the user choose method and display data
function chooseMethodAndDisplay() {
  rl.question('Choose method (callbacks, promises, async-await): ', async method => {
    switch (method.trim().toLowerCase()) {
      case 'callbacks':
        fetchDataWithCallbacks((error, data) => {
          if (error) {
            handleError(error);
          } else {
            processDataAndDisplay(data);
          }
          rl.close();
        });
        break;
      case 'promises':
        try {
          const data = await fetchDataWithPromises();
          processDataAndDisplay(data);
        } catch (error) {
          handleError(error);
        } finally {
          rl.close();
        }
        break;
      case 'async-await':
        try {
          const data = await fetchDataWithAsyncAwait();
          processDataAndDisplay(data);
        } catch (error) {
          handleError(error);
        } finally {
          rl.close();
        }
        break;
      default:
        console.error('Invalid method selected');
        rl.close();
    }
  });
}

// Example usage
chooseMethodAndDisplay();
