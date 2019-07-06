const path = require("path");
const babel = require("@babel/core");

const file = path.join(__dirname, "./propertyfxn.js");
babel.transformFile(
  file,
  {
    plugins: ["istanbul"]
  },
  (err, result) => {
    if (err) throw err;
    console.log("Transformed Code: ", result.code);
  }
);
