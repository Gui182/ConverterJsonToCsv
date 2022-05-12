const { csv, file } = require('./ConvertDataJsonToCsv')

describe('Test script', () => {
    const arquivoCSV = csv

    test('Test Convert JSON to CSV', async () => {
        expect(arquivoCSV).toMatch((/(\"[^\"]+\")|[^,]+/g))
    })

    test('Test Creating File', async () => {
        expect(file).toMatch((/\.csv$/))
    })
})


