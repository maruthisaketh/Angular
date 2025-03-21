const xlsx = require("xlsx");
const path = require("path");

exports.getUsersFromExcel = (filePath) => {
    const absolutePath = path.resolve(filePath);  
    const workbook = xlsx.readFile(absolutePath);
    const sheetName = workbook.SheetNames[0];
    const users = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

    return users;
};
