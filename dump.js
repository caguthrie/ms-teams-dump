const members = {};
const elem = document.querySelector("#page-content-wrapper > div.flex-fill > div > messages-header > div.ts-tab-content.flex-fill > div > td-members-tab > div > div.access-container.flex-fill.section-view.sticky-header-container > div")
const csvFileName = 'team-membership-roster-export.csv'
const parseMembers = () => {
    let csvContent = '' // Initialize CSV content
    const rosterLength = $('.td-member-display-name').length // Number of visible members
    // ************************
    // Iterate over each member
    // ************************
    for (let index = 0; index < rosterLength; index++) {
        const upn = $('.td-member-photo img').eq(index).attr('upn')
        // Append to the CSV content
        const csvRow = upn.toString().toLowerCase() + '\r\n'
        members[csvRow] = true;
        csvContent += csvRow
    }
}
const downloadMembers = () => {
    const csvContent = Object.keys(members).join('');
    // Debug the export to console
    console.info(csvContent)
    // **********************************************************
    // Dynamically generates a CSV file and triggers its download
    // **********************************************************
    // Create a dynamic "a" tag
    var element = document.createElement('a')
    // Set href link with content
    element.setAttribute(
        'href',
        'data:application/json;charset=utf-8,' + encodeURIComponent(csvContent)
    )
    // Set downloaded file name
    element.setAttribute('download', csvFileName)
    // Hide the elemement and add it to the page
    element.style.display = 'none'
    document.body.appendChild(element)
    // Launch download
    element.click()
    // Remove element
    document.body.removeChild(element)
}
const scrollTo = (num) => {
    elem.scroll({top:num});
}
let scrollPosition = 0;
scrollTo(0);
const intervalId = setInterval(() => {
    if (scrollPosition > elem.scrollHeight) {
        clearInterval(intervalId);
        downloadMembers();
    }
    parseMembers();
    scrollPosition += 1000;
    scrollTo(scrollPosition);
}, 10000);