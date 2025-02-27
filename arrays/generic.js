// Without using .flat(), create a function to flatten an array
export const flatten = (arr) => {
    return arr.reduce((acc, cur) => {
        if (typeof cur == 'object') {
            acc = acc.concat(flatten(cur))
        } else {
            acc.push(cur);
        }
        return acc;
    }, [])
}
console.log(flatten([1, 2, 3, [4, 5, [6, 7]]]));

// Create a function to reverse a string
export const reverse = (string) => {
    return string.split('').reverse().join('');
}
console.log(reverse('hello'))

// Create a function to move an element. The function arguments are distance, duration, and the element to move.
export const moveElement = (duration, distance, element) => {
    const start = performance.now();

    function move(currentTime) {
        const elapsedTime = currentTime - start;
        const progress = elapsedTime / duration;
        const amountToMove = progress * distance;
        element.style.transform = `translateX(${amountToMove}px)`;
        //If the animation isn't complete (progress < 1), it requests another animation frame to continue the animation
        if (progress < 1) {
            requestAnimationFrame(move);
        }
    }

    move(performance.now());
}

// Create a function that takes a string and returns a new string with duplicates removed
export const removeDuplicates = (string) => {
    const arrStr = string.split(' ');
    return [...new Set(arrStr)].join(' ');
}
console.log(removeDuplicates('This is is a test test string')); // 'This is a test string'

// Implement Function.prototype.bind()
//returns a new function, allowing you to pass in an array and any number of arguments
var employee1 = {firstName: 'John', lastName: 'Baily'};
var employee2 = {firstName: 'Jimmy', lastName: 'Rodson'};

function invite(greeting1, greeting2) {
    console.log(greeting1 + ' ' + this.firstName + ' ' + this.lastName + ' ' + greeting2);
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1('Hello', 'How are you?'); // Hello John Rodson, How are you?
inviteEmployee2('Hello', 'How are you?'); // Hello Jimmy Baily, How are you?

// Implement Function.prototype.apply()
// accepts arguments as an array & is preferred when you know the number of arguments you'll be passing
function greetApply(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const personApply = {name: 'John'};

greetApply.apply(personApply, ['Hello', '!']);

// Implement Function.prototype.call()
// accepts arguments individually (comma-separated) & is useful when the arguments are already in an array or you don't know how many arguments there will be
function greetCall(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const personCall = {name: 'John'};

greetCall.call(personCall, 'Hello', '!'); // Outputs: "Hello, John!"