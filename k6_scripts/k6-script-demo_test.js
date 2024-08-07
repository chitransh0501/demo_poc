// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/urijs.js";
import "./libs/shim/expect.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  environment: {
    url: "https://restful-booker.herokuapp.com",
    access_token: "",
    base_url: "https://dummyjson.com",
    id: "",
    url_product: "https://api.escuelajs.co"
  }
});

export default function() {
  postman[Request]({
    name: "get all products",
    id: "8cba1fc8-9974-46da-8800-dfd85826b873",
    method: "GET",
    address: "{{url_product}}/api/v1/products",
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
      });
    }
  });

  postman[Request]({
    name: "get products filter by price",
    id: "cf1c0f25-06ac-49fc-b283-09e53a8ca050",
    method: "GET",
    address: "{{url_product}}/api/v1/products/?price=100",
    post(response) {
      pm.test("Response time is less than 300ms", function() {
        pm.expect(pm.response.responseTime).to.be.below(1000);
      });

      pm.test("Successful GET request", function() {
        pm.expect(pm.response.code).to.be.oneOf([200]);
      });
    }
  });
}
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function handleSummary(data) {
  return {
    "reports/result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}