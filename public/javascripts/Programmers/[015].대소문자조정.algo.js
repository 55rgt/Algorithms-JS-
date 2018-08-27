function solution(s) {

    let words = s.split(" ");
    let reformed = '';

    for(let i = 0 ; i < words.length ; i++){
        const word = words[i];
        for(let j = 0 ; j < word.length ; j++){
            const letter = word[j];
            j % 2 === 1 ? reformed += letter.toLowerCase() : reformed += letter.toUpperCase();
        }
        if(i + 1 !== words.length) reformed += " ";
    }

    return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

    // return s.split(' ').map(i => i.split('').map((j, key) => key % 2 === 0 ? j.toUpperCase() : j).join('')).join(' ')
}

console.log(solution("try hello world"));