function printObj (obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            console.log(i, obj[i]);
        }
    }
}

printObj('KEY')