import { expect } from "chai";
import httpMocks from "node-mocks-http";
import { action, server } from "../src/RestServer";
describe("restServer Test", () => {
  let req = undefined;
  let res = undefined;

  before(() => {
    req = httpMocks.createRequest();
    res = httpMocks.createResponse();
    // 데이터 베이스를 연동한다면
    // sandbox = sinon.sandbox.create();
    // sandbox.stub(db.list, "findById", () => {
    //   return await prsima.user({id})
    // });
    // runs before all tests in this block
  });

  beforeEach(() => {
    //유닛테스트를 하기 전에
  });

  it("server status check", () => {
    expect(res._getStatusCode()).to.equal(200);
  });

  it("action test", () => {
    action(req, res);
    const data = JSON.parse(res._getData());
    expect(data).to.equal("Hi");
  });

  afterEach(() => {
    // excuted after every test
  });
  after(() => {
    // excuted after test suite
    // sandbox.restore();
    req = undefined;
    res = undefined;
    server.close(() => console.log("server closed"));
  });
});
