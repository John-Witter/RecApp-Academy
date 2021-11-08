const arr = [1, 2, 3, "Banana", 5, 6, 7, 8];
arr[100] = ["banana", 3];

const fetchBanana = (idx) => { // O(1)
    return arr[idx];
};

const hash = { 'banana': 3 };

console.log("fetchBanana(100)[1]:", fetchBanana(100)[1]);

const toHash = str => {
    let idx = 0;
    for (let char of str) {
        const charCode = char.charCodeAt();
        console.log('charCode:', charCode);
        idx += charCode % 5;
    }
    console.log('idx:', idx);
    return idx;
};

const banana = toHash('banana');

arr[banana] = 3;

console.log("fetchBanana((banana)):", fetchBanana(banana));