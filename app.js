function processText() {
    const inputText = document.getElementById('text').value;
    const operation = document.getElementById('operation').value;
    let resultText = '';

    const textWithoutAccents = inputText.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    if (operation === 'encrypt') {
        resultText = encryptText(textWithoutAccents);
    } else if (operation === 'decrypt') {
        resultText = decryptText(textWithoutAccents);
    }

    document.getElementById('result').value = resultText;
}

function encryptText(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decryptText(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function copyToClipboard() {
    const resultTextarea = document.getElementById('result')
    resultTextarea.select();
    document.execCommand('copy');
    alert('Texto copiado!');
}