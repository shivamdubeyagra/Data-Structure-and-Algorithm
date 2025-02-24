class Codec {
    encode(strs) {
        // Encodes a list of strings to a single string.
        let encodedStr = "";
        for (let str of strs) {
            encodedStr += str.length + "#" + str;
        }
        return encodedStr;
    }

    decode(s) {
        // Decodes a single string back to a list of strings.
        let decoded = [];
        let i = 0;

        while (i < s.length) {
            let j = i;
            while (s[j] !== "#") {
                j++; // Find the separator #
            }
            let length = parseInt(s.substring(i, j)); // Extract the length
            let str = s.substring(j + 1, j + 1 + length); // Extract the string
            decoded.push(str);
            i = j + 1 + length; // Move index to the next encoded segment
        }

        return decoded;
    }
}

const codec = new Codec();
const inputStrings = ["lint", "code", "love", "you"];
const encoded = codec.encode(inputStrings);
console.log("Encoded:", encoded); // Example Output: "4#lint4#code4#love3#you"

const decoded = codec.decode(encoded);
console.log("Decoded:", decoded); // Output: ["lint", "code", "love", "you"]
