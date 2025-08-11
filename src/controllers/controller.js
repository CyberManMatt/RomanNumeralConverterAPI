/*
Converts a number to its Roman numeral representation.
This function handles the conversion logic and validates the input number.
It returns a JSON response with the Roman numeral or an error message.
*/
export const romanNumeralConverter = (req, res) => {

    // Turns the incoming parameter into an integer
    let num = parseInt(req.params.num, 10);


    // Validate the number
    if (isNaN(num) || num <= 0) {
        return res.status(400).json({ error: 'Invalid number' });
    }


    // Check if the number is too large for Roman numeral conversion
    if (num > 3999) {
        return res.status(400).json({ error: 'Number too large for Roman numeral conversion' });
    }

    // Logic to convert number to Roman numeral
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            num -= romanNumerals[i].value;
        }
    }

    res.json(result);
}

export const romanNumeralToNumber = (req, res) => {
    const roman = req.params.roman.toUpperCase();
    const romanToNumberMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanToNumberMap[roman[i]];

        if (!currentValue) {
            return res.status(400).json({ error: 'Invalid Roman numeral' });
        }

        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
    }

    res.json(total);
}