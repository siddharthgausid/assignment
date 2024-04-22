const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function extractWords(text) {
    const wordsSet = new Set();
    const regex = /[a-zA-Z]+/g; // Regular expression to match alphabetic characters

    let match;
    while ((match = regex.exec(text)) !== null) {
        wordsSet.add(match[0].toLowerCase());
    }

    return wordsSet;
}

function countOccurrences(text, words) {
    const wordCount = {};

    words.forEach(word => {
        wordCount[word] = 0;
    });

    const regex = /[a-zA-Z]+/g; // Regular expression to match alphabetic characters

    let match;
    while ((match = regex.exec(text)) !== null) {
        const cleanedWord = match[0].toLowerCase();
        if (words.has(cleanedWord)) {
            wordCount[cleanedWord]++;
        }
    }

    return wordCount;
}

rl.question('Enter text to analyze:', text => {
    try {
        if (!text.trim()) {
            throw new Error('Text input cannot be empty.');
        }

        const wordsSet = extractWords(text);

        rl.question('Enter words to count occurrences of (comma-separated):', wordsInput => {
            try {
                if (!wordsInput.trim()) {
                    throw new Error('Word input cannot be empty.');
                }
                const wordsToCount = wordsInput.split(',').map(word => word.trim().toLowerCase());
                const wordsSetToCount = new Set(wordsToCount);

                const result = countOccurrences(text, wordsSetToCount);

                console.log('Occurrences count:');
                for (const word in result) {
                    console.log(`${word}: ${result[word]}`);
                }
            } catch (error) {
                console.error('An error occurred:', error.message);
            } finally {
                rl.close();
            }
        });
    } catch (error) {
        console.error('An error occurred:', error.message);
        rl.close();
    }
});

rl.on('close', () => {
    console.log('Analysis complete.');
});
