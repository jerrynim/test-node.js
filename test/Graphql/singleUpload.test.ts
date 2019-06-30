// import fs from "fs";
// import path from "path";
// import { expect } from "chai";
// import EasyGraphQLTester from "easygraphql-tester";
// import resolvers from "../../src/Api/File/singleUpload/singleUpload";
// const schemaCode = fs.readFileSync(
//   path.join(__dirname, "../../src/Api/File/singleUpload/singleUpload.graphql"),
//   "utf8"
// );

// describe("Test resolvers", () => {
//   let tester = new EasyGraphQLTester(schemaCode, resolvers);

//   before = () => {
//     // tester = new EasyGraphQLTester(schemaCode, resolvers);
//   };

//   it("fs", () => {
//     return fs.readFileSync("static/rui.jpeg");
//   });

//   it("should return expected values", async () => {
//     const query = `
//     mutation singleUpload($file: Upload!) {
//       singleUpload(file: $file) {
//         filename
//       }
//     }
//     `;

//     const result = await tester.graphql(query, {}, {});
//   });
// });
