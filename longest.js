 exports.long = function lengthOfLongestSubstring(s) {
    s = s.split('')
    let longest = ''
    let current = []
    while(s.length > 0){
      for(let i = 0; i < s.length; i++){
          const sameLetter = (currentValue) => currentValue != s[i];
          if(current.every(sameLetter) == true){
              current.push(s[i])
          }else{
              break
          }
        }
    if(current.length > longest.length){
        longest = current
    }
    current = []
    s.shift()
    }
    return longest.length
};