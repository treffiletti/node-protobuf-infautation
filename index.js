const fs = require("fs");
const ProtoBuf = require("protobufjs");
const base64url = require("base64url");
var lzmaNative = require("lzma-native");
const curl = require("curlrequest");
const url = require("url");
const Promise = require("bluebird");
const prettyjson = require("prettyjson");

const protoFile = ProtoBuf.loadProtoFile("data/list.proto");
const msgList = protoFile.build("infatuation.list.List");
const origURL = process.argv[2];
const errorMsg = (e) => {
  console.log("  💀   Error", e);
};
const progressInd = () => process.stdout.write(".");

const apiBaseUrl = (version = "v3") =>
  `https://api.theinfatuation.com/services/v${version}`;

async function curlRequest(url) {
  progressInd();
  return await new Promise((resolve, reject) => {
    curl.request({ url: url }, (err, stdout, meta) => resolve(stdout));
  });
}

async function fetchItems(msgItemId, type) {
  progressInd();
  let urlStr = `${apiBaseUrl()}/${type}/${msgItemId}`;
  return await curlRequest(urlStr);
}

async function processURL(urlStr) {
  progressInd();
  let contentParam = url.parse(urlStr, true).query.content;
  let buf = base64url.toBuffer(contentParam);
  let decompressed = await lzmaNative.decompress(buf);
  return msgList.decode(decompressed);
}

async function buildJSON(item, urlStr, itr, scope) {
  progressInd();
  let iterator;
  if (typeof scope === "undefined") {
    iterator = item[itr];
  } else {
    iterator = [].concat.apply(
      [],
      item[scope].map((i) => i[itr])
    );
  }
  return Promise.map(iterator, (o) => fetchItems(o, urlStr)).then((results) => {
    json = results.map((result) => JSON.parse(result));
    item[urlStr] = [];
    item[urlStr] = json;
    return item;
  });
}

async function infatuate() {
  process.stdout.write("Processing URL");
  let processedMsg = await processURL(origURL);
  let response = processedMsg;
  await Promise.map(processedMsg.items, (item) => {
    item.ids = [item.infatuation];
    return buildJSON(item, "venues", "ids");
  })
    .each((item) => buildJSON(item, "reviews", "ids"))
    .each((item) => buildJSON(item, "cities", "cities", "reviews"))
    .each((item) => buildJSON(item, "cuisines", "cuisines", "reviews"))
    .each((item) => buildJSON(item, "perfect-fors", "perfect_for", "reviews"))
    .then((item) => {
      let resultStr = prettyjson.render(response).replace(/-/g, "");
      console.log("\n");
      console.log(resultStr);
      console.log("\n\n\n\n\n\nProcess Complete...\n\n\n ");
    })
    .catch(errorMsg);
}

infatuate();
