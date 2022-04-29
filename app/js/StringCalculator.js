class StringCalculator {
    ESCAPE_REGEX_SPECIAL_CHAR_REGEX = /[.*+?^${}()|[\]\\]/g
    DEFAULT_DELIMITERS_REGEX = /[,\n]/
    HAS_DELIMITER_REGEX = /^\/\/.*\n/
    HAS_MULTIPLE_DELIMITER_REGEX = /^\/\/\[.*\n/
    MATCH_STRINGS_IN_BRACKET = /\[(.*?)\]/g

    add(numbers){
        let sum = 0
        let delimitersRegex = this.DEFAULT_DELIMITERS_REGEX

        if(typeof numbers !== 'string' || numbers === "" )
            return sum

        let delimiterExtracted = numbers.match(this.HAS_DELIMITER_REGEX)

        if(delimiterExtracted){
            delimiterExtracted = delimiterExtracted[0]

            let multipleDelimiterExtracted = numbers.match(this.HAS_MULTIPLE_DELIMITER_REGEX)
            numbers = numbers.replace(delimiterExtracted, "")

            if(multipleDelimiterExtracted){
                let delimitersExtracted = [...delimiterExtracted.matchAll(this.MATCH_STRINGS_IN_BRACKET)].map( match => {
                    return match[1].replace(this.ESCAPE_REGEX_SPECIAL_CHAR_REGEX, '\\$&')
                })
                delimitersRegex = new RegExp(    delimitersExtracted.join("|"))
            }else
                delimitersRegex = new RegExp(`[${delimiterExtracted.replace("//", "").replace("\n", "")}]`)
        }
        numbers.split(delimitersRegex).forEach(number => {
            number = isNaN(number) ? 0 : Number.parseInt(number)
            if(number< 0)
                throw Error(`Negatives not allowed. [${number}]`)
            sum += number > 1000 ? 0 : number 
        });
        return sum
    }
}

export { StringCalculator }
