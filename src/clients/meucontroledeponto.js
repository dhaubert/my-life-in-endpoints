const axios = require("axios");
const fetch = require("node-fetch");

class MeuControleDePontoClient {
  constructor() {
    this.client = axios.create({
      baseURL: process.env.PONTO_URL + "day_records/add_now",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
    });

    this.client.interceptors.request.use((request) => {
      console.log("Starting Request", request);
      return request;
    });

    this.client.interceptors.response.use((response) => {
      console.log("Response:", response);
      return response;
    });
  }

  addNow() {
    fetch(`${process.env.PONTO_URL}/add_now`, {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language":
          "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7,es-AR;q=0.6,es;q=0.5,hu-HU;q=0.4,hu;q=0.3,ro-RO;q=0.2,ro;q=0.1,fr-FR;q=0.1,fr;q=0.1,sr-RS;q=0.1,sr;q=0.1",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "same-origin",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1",
        cookie: process.env.PONTO_COOKIE,
      },
      referrer: process.env.PONTO_URL,
      referrerPolicy: "strict-origin-when-cross-origin",
      body: `_method=post&authenticity_token=${process.env.PONTO_TOKEN}`,
      method: "POST",
      mode: "cors",
    }).catch((error) => {
      console.log("Error:", error);
    });
  }
}

module.exports = new MeuControleDePontoClient();
