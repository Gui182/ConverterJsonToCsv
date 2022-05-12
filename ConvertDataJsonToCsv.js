const fs = require('fs');
const data = require('./data.json');

let file = 'CsvConverted' + new Date().toISOString() + '.csv';

const replacer = (key, value) => value === null ? '' : value

function convertJsonToCsv(jsonData, replacer) {
    let csv = [[]]

    for (const data of jsonData) {
        let row = []

        for (const column in data) {
            let columnIndex = csv[0].indexOf(column)

            if (columnIndex === -1) {
                columnIndex = csv[0].length
                csv[0].push(column)
            }

            row[columnIndex] = JSON.stringify(replacer(column, data[column]))
        }
        csv.push(row.join(","))
    }

    csv[0] = csv[0].join(",")

    return csv.join("\r\n")
}

const csv = convertJsonToCsv(data, replacer)

fs.writeFile(file, csv, 'utf8', function (err) {
    if (err) {
        return
    }
});

module.exports = { csv, file }