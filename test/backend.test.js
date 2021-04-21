const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const server = require("../server");

chai.use(chaiHttp);

describe("My simple backdrop testcase", () => {
  it("Shortens a given url", async () => {
    let res = await chai
      .request("http://localhost:4000")
      .post("/shortenURL")
      .send({
        query:
          'mutation shortenURL {shortenURL(input: { full_url: "https://facebook.com/old_mustang" }) {id full_url hashed_url}}',
      });

    expect(res.statusCode).to.equal(200);
    expect(res.status).to.equal(200);
  });

  it("Returns the equivalent of a hashed url", async () => {
    let res = await chai
      .request("http://localhost:4000")
      .post("/findUrl")
      .send({
        query:
          'mutation findUrl {findUrl(input: { hashed_url: "https://example.com/4RHudQ" }) { full_url}}',
      });

    expect(res.statusCode).to.equal(200);
    expect(res.status).to.equal(200);
  });
});
