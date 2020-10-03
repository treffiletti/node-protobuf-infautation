# The Infatuation List View 




### What are protocol buffers?
Similar to JSON and XML, protocol buffers are a method of serializing data that can be transmitted over the wire or be stored in files. Though unlike it's couterparts, the Protobuf data format is optimized to be faster than JSON and XML and is optimized for transmitting data amongst multiple microservices in a platform-neutral way.

[Learn more about Protocol Buffers on Google Developers](https://developers.google.com/protocol-buffers/)


## Node application which parses base64 encoded LZMA compressed protocol buffer strings in urls.
This example app demonstrates the ability to transmit JSON data fetched from a RESTful API, serialized into the ultra-light and fast protocol buffer format, transmitted and deserialized into a human-readable format.

In order to run the example you must have node and NPM installed and then run the following commands from within the directory:


```
$ npm install
```
Then you should be able to execute the script with the following commands:

```shell
$ npm run demo --url https://api.theinfatuation.com/services/v3/lists/F2B1C31F-CE16-491F-A42C-DDE3FC3D0C9B?content=_Td6WFoAAAD_EtlBA8CBAa8BIQEWAAAAZ0em4uAArgB5XQAFCdEHBvX6LgQ59FSvjTK2reW84kMYsVL4QURbD32vhrBongF76J_DKzCViFwDEvaMkCX1ZspopJwiZ4wWN2gHeBNzTP70ncPCHQ71EknmiC_5FDVnceDaBUm6KlbdK2gDHgC5P9vdn_o6el6hq5pYSbiYc8ypxHAAAAAAAAABkQGvAQAA71vFPKgACvwCAAAAAABZWg

// OR 

$ node --harmony index.js "https://api.theinfatuation.com/services/v3/lists/F2B1C31F-CE16-491F-A42C-DDE3FC3D0C9B?content=_Td6WFoAAAD_EtlBA8CBAa8BIQEWAAAAZ0em4uAArgB5XQAFCdEHBvX6LgQ59FSvjTK2reW84kMYsVL4QURbD32vhrBongF76J_DKzCViFwDEvaMkCX1ZspopJwiZ4wWN2gHeBNzTP70ncPCHQ71EknmiC_5FDVnceDaBUm6KlbdK2gDHgC5P9vdn_o6el6hq5pYSbiYc8ypxHAAAAAAAAABkQGvAQAA71vFPKgACvwCAAAAAABZWg"
```

For the first example and the following for the second...

```shell
$ npm run demo --url https://api.theinfatuation.com/services/v3/lists/8FB28969-3423-43E1-BAD9-29A5E2107142?content=_Td6WFoAAAD_EtlBA8CcAsQCIQEWAAAAitcSteABQwEUXQAFCdLTCmujCzt4qyIxvrk8TzxZg0iBGWMpA7uWK2DiM_QiSbotSXShQjG_t8d-QnzLeiB14i-cs-n4ulRe4gp_pVevDYtbrzgLGs50PuF0SnJMhal11nBKBn4GdELnvRTQC0J-gBk5BtbGUGcNhBFG1GQb0HLTP9YOLQ2csLTWOuL1rnFGzwDewChIwP440iAzki4cjqbihE_2sKRdodbvcXUN77B8PnWRAQOegxG0KXIA363n-gu3raNMmXpv9vsMxgcafX7gphS_eyQCLaueFkqI2r4C-QRCrJx6aNRStnjMg8NyJUYB3N4V9l50BKuSVjVr835OWtc1saHDmdiw0RgARMBSfPO-2dyuIsgbApqU8f8AAAGsAsQCAAAX--AtqAAK_AIAAAAAAFla

// OR

$ node --harmony index.js "https://api.theinfatuation.com/services/v3/lists/8FB28969-3423-43E1-BAD9-29A5E2107142?content=_Td6WFoAAAD_EtlBA8CcAsQCIQEWAAAAitcSteABQwEUXQAFCdLTCmujCzt4qyIxvrk8TzxZg0iBGWMpA7uWK2DiM_QiSbotSXShQjG_t8d-QnzLeiB14i-cs-n4ulRe4gp_pVevDYtbrzgLGs50PuF0SnJMhal11nBKBn4GdELnvRTQC0J-gBk5BtbGUGcNhBFG1GQb0HLTP9YOLQ2csLTWOuL1rnFGzwDewChIwP440iAzki4cjqbihE_2sKRdodbvcXUN77B8PnWRAQOegxG0KXIA363n-gu3raNMmXpv9vsMxgcafX7gphS_eyQCLaueFkqI2r4C-QRCrJx6aNRStnjMg8NyJUYB3N4V9l50BKuSVjVr835OWtc1saHDmdiw0RgARMBSfPO-2dyuIsgbApqU8f8AAAGsAsQCAAAX--AtqAAK_AIAAAAAAFla"

```

You should see a pretty output of JSON in your terminal.

# Future Enhancements

- Testing
- Better looking output with something like json2html
- Parsing of multiple urls at once
- Web UI