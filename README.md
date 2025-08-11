# Roman Numeral Converter API

A microservice that converts a normal number to it's Roman numeral representation.

## How to use

To convert a number to Roman numerals, make a `GET` request to the `/{num}` endpoint replacing `{num}` with the number you wish to convert. Example: `/64` will output "LXIV". To convert Roman numerals to a number, make a `GET` request to the `/roman/{romanNumeral}` endpoint replacing the `{romanNumeral}` with the Roman numeral you wish to convert. Example `/roman/XIX` will output `19`.

## Endpoints
|Method|Endpoint|Description|
|:----:|:------:|:---------:|
| `GET` | `/{num}` | Converts number to Roman numeral |
| `GET` | `/roman/{romanNumeral}` | Converts Roman numeral to number |
