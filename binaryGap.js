// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // Implement your solution here
    const binaryString = N.toString(2);

    
    let currentGap = 0;
    let maxGap = 0;


    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '0') {
            
            currentGap++;
        } else {
            
            if (currentGap > 0) {
                maxGap = Math.max(maxGap, currentGap);
                currentGap = 0;
            }
        }
    }

    return maxGap;

}
console.log(solution(1041));