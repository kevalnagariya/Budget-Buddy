// This function checks if the given email looks like a valid email address
export const validateEmail = (email) => {
    // Regular expression (pattern) to match a basic valid email format
    // Explanation:
    // - ^ : start of the string
    // - [^\s@]+ : one or more characters that are NOT spaces or '@'
    // - @ : the '@' symbol
    // - [^\s@]+ : one or more characters that are NOT spaces or '@'
    // - \. : a dot '.'
    // - [^\s@]+ : one or more characters that are NOT spaces or '@'
    // - $ : end of the string
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regex pattern and return true if it matches, false otherwise
    return regex.test(email);
}
