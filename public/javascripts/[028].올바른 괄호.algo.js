function solution(s) {

    while(s.length !== 0){
        s = s.replace(/(\(\))/gi, "");
        // s = s.split('()').join("");
        if((s.match(/\(/g) || []).length !== (s.match(/\)/g) || []).length || s === ")(") return false;
    }
    return true;
}


