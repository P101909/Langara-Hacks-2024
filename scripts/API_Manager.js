// async function getScore(input) {
//     try {
//         const requestData = {
//             message: input
//         };

//         const response = await fetch('http://localhost:3000/chat', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(requestData)
//         });

//         if (!response.ok) {
//             throw new Error('Server responded with an error: ' + response.statusText);
//         }

//         const responseData = await response.json();
//         const gptResponse = responseData.response;

//         return gptResponse;
//     } catch (error) {
//         console.error('Error fetching GPT-4 response:', error);
//         return 'Error: Could not get score from GPT-4';
//     }
// }

// // Use CommonJS-style exports
// module.exports = {
//     getScore
// };