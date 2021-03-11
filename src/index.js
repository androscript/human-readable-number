module.exports = function toReadable (number) {
    let listOne = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let listTwo = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    if (number === 0) return 'zero';

    if (number < 10) return listOne[number - 1];
    if (number < 20) return listTwo[number - 10];

    let finish = false;
    let result = [];
    
    let str = String(number);
    
    for (let i = 0; i < str.length; i++) {
        if (finish) break;      
        
        if (i === str.length - 2) {
            switch (str[i]) {
                case '0':
                    break;
                case '1':
                    result.push(listTwo[str[parseInt(str[i]) + 1]]);
                    finish = true;
                    break;
                case '2':
                    result.push('twenty');
                    break;
                case '3':
                    result.push('thirty');
                    break;
                case '4':
                    result.push('forty');
                    break;
                case '5':
                    result.push('fifty');
                    break;
                case '6':
                    result.push('sixty');
                    break;
                case '7':
                    result.push('seventy');
                    break;
                case '8':
                    result.push('eighty');
                    break;    
                case '9':
                    result.push('ninety');
                    break;
            }
        }
         
        if (i === str.length - 3 || i === str.length - 1) {

            switch (str[i]) {
                case '0':
                    break;
                case '1':
                    result.push('one');
                    break;
                case '2':
                    result.push('two');
                    break;
                case '3':
                    result.push('three');
                    break;
                case '4':
                    result.push('four');
                    break;
                case '5':
                    result.push('five');
                    break;
                case '6':
                    result.push('six');
                    break;
                case '7':
                    result.push('seven');
                    break;
                case '8':
                    result.push('eight');
                    break;
                case '9':
                    result.push('nine');
                    break;
            }

            if (i === str.length - 3) {
                result.push('hundred');
            }
        }
    }
    return result.join(' ');
}
