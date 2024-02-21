const inputText = document.getElementById('inputText');
const checkBtn = document.getElementById('checkBtn');

checkBtn.addEventListener("click", checkVowels)

function checkVowels() {
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const text = inputText.value.toLowerCase();
    for (a in text) {
        for (b in vowels) {
            if (text[a] === vowels[b]) {
                vowelCount++;
            }
        }
    }
    alert(`There were ${vowelCount} vowels entered`);
}