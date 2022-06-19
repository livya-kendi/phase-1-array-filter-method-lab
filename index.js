// Code your solution here
function findMatching(driverNames, matchingName) {
    function isMatchingName(driverName) {
        return driverName.toLowerCase() === matchingName.toLowerCase();
    }

    return driverNames.filter(isMatchingName);
}

function fuzzyMatch(driverNames, matchingName) {
    function isMatchingLetters(driverName) {
        return driverName.startsWith(matchingName)
    }

    return driverNames.filter(isMatchingLetters)
}

function matchName(driver, string) {
    function isMatchingName(driverName){
        return driverName.name.toLowerCase() === string.toLowerCase(); 
    }

    return driver.filter(isMatchingName);
}
