import { expect } from "chai";
import httpMocks from "node-mocks-http";
import { action } from "../src/server";

describe("server", () => {
  const before = async () => {
    // 데이터 베이스를 연동한다면
    // sandbox = sinon.sandbox.create();
    // sandbox.stub(db.list, "findById", () => {
    //   return await prsima.user({id})
    // });
  };

  const after = () => {
    // excuted after test suite
    // sandbox.restore();
  };

  const beforeEach = () => {
    const req = httpMocks.createRequest();
    const res = httpMocks.createResponse();
    const data = JSON.parse(res._getData());
    return data;
  };

  afterEach(function() {
    // excuted after every test
  });

  const req = httpMocks.createRequest();
  const res = httpMocks.createResponse();

  it("server status check", () => {
    expect(res._getStatusCode()).to.equal(200);
  });

  it("express test", () => {
    action(req, res);
    const data = JSON.parse(res._getData());
    console.log(data);
  });

  it("unit test", () => {
    expect("10").to.equal("10");
  });
});
