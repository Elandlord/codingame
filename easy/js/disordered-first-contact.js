const [timesTransformed, message] = [parseInt(readline()), readline()];

function getChunkSize(str) {
    let size = str.length;
    return Math.floor(Math.sqrt(size*2));
}

function encode(originalMessage, times) {
    let encodedString = '';

    for(i = 1; i <= Math.abs(times); i++) {
        let counter = 1;

        while(originalMessage.length > 0) {
            if (counter % 2 === 0) {
                encodedString = originalMessage.substr(0, counter) + encodedString;
            } else {
                encodedString += originalMessage.substr(0, counter);
            }

            originalMessage = originalMessage.substr(counter);
            counter++;
        }

        console.error(encodedString, originalMessage.length);
    }

    return encodedString;
}

function decode(originalMessage, times) {
    let decodedString = '';

    let counter = getChunkSize(originalMessage);

    for(i = counter; i > 0; i--) {
        if (i % 2 === 0) {
            decodedString += originalMessage.substr(-1, i);
        } else {
            decodedString = originalMessage.substr(-1, i) + decodedString;
        }

        originalMessage = originalMessage.substr(-1, i);
    }

    return decodedString;
}

let transformedString = message;

if (timesTransformed > 0) {
    transformedString = decode(message, timesTransformed);
}

if (timesTransformed < 0) {
    transformedString = encode(message, timesTransformed);
}

console.log(transformedString);
