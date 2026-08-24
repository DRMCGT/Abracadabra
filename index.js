

const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function randomCharacter(characters) {
    const randomValues = new Uint32Array(1);
    crypto.getRandomValues(randomValues);
    return characters[randomValues[0] % characters.length];
}

function generatePassword(length, includeNumbers, includeSymbols) {
    const selectedGroups = [lowercase, uppercase];
    if (includeNumbers) selectedGroups.push(numbers);
    if (includeSymbols) selectedGroups.push(symbols);

    const characters = selectedGroups.join("");
    const passwordCharacters = selectedGroups.map(randomCharacter);
    while (passwordCharacters.length < length) passwordCharacters.push(randomCharacter(characters));

    return passwordCharacters
        .map((character) => ({ character, sort: randomCharacter(characters) }))
        .sort((first, second) => first.sort.localeCompare(second.sort))
        .map(({ character }) => character)
        .join("");
}

const lengthSelect = document.getElementById("lengthSelect");
const lengthValue = document.getElementById("lengthValue");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const statusMessage = document.getElementById("statusMessage");

function createPasswords() {
    const options = [Number(lengthSelect.value), includeNumbers.checked, includeSymbols.checked];
    document.getElementById("passwordDisplay").value = generatePassword(...options);
    document.getElementById("passwordDisplay2").value = generatePassword(...options);
    statusMessage.textContent = "New passwords ready";
}

lengthSelect.addEventListener("input", () => { lengthValue.value = lengthSelect.value; });
document.getElementById("generateBtn").addEventListener("click", createPasswords);

document.querySelectorAll("[data-copy-target]").forEach((button) => {
    button.addEventListener("click", async () => {
        const password = document.getElementById(button.dataset.copyTarget).value;
        if (!password || password.startsWith("Click generate")) return;
        await navigator.clipboard.writeText(password);
        statusMessage.textContent = "Password copied";
    });
});



