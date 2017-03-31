(function () {
    function findPalindrome(num) {
        while (!isPalindrome(num)) {
            var rev = reverse(num);
            console.log(rev);
            console.log(num + " + " + rev);
            num = num + rev;
        }

        console.log("Palindrome is " + num);
    }

    function reverse(num) {
        var result = "";
        var len = num.toString().length - 1;

        for (var i = len; i >= 0; i--) {
            var unitsPlace = num % 10;
            num = parseInt(num / 10);
            result += unitsPlace;
        }
        return parseInt(result);
    };

    function isPalindrome(num) {
        return num === reverse(num);
    }

    findPalindrome(68275);
    //reverse(526);
})();
