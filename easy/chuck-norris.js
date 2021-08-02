const message = readline();

let result = "";
let previous = -1;

// loop over message string
for (let i = 0; i < message.length; i++) {

    // does a new block need to be created?
    for (let j = 6; j >= 0; j--) {
        // charCodeAt represents UTF-16 code unit (0-65535)
        let bit = message.charCodeAt(i) >> j & 1; // shift bit right

        if (bit !== previous) {

            if (-1 !== previous) {
                result += " "; // new block
            }

            result += 1 == bit ? "0 " : "00 ";
            previous = bit;
        }

        result += "0";
    }
}

print(result);