# The Infatuation List View 


#### This is a simple package which parses base64 encoded LZMA compressed protocol buffer strings in urls.

In order to run the example you must have node and NPM installed and then run the following commands from within the directory:

```
$ npm install
```
Then you should be able to execute the script with the following commands:

```
$ node --harmony index.js "https://api.theinfatuation.com/services/v3/lists/F2B1C31F-CE16-491F-A42C-DDE3FC3D0C9B?content=_Td6WFoAAAD_EtlBA8CBAa8BIQEWAAAAZ0em4uAArgB5XQAFCdEHBvX6LgQ59FSvjTK2reW84kMYsVL4QURbD32vhrBongF76J_DKzCViFwDEvaMkCX1ZspopJwiZ4wWN2gHeBNzTP70ncPCHQ71EknmiC_5FDVnceDaBUm6KlbdK2gDHgC5P9vdn_o6el6hq5pYSbiYc8ypxHAAAAAAAAABkQGvAQAA71vFPKgACvwCAAAAAABZWg"
```

For the first example and the following for the second...

```
$ node --harmony index.js "https://api.theinfatuation.com/services/v3/lists/8FB28969-3423-43E1-BAD9-29A5E2107142?content=_Td6WFoAAAD_EtlBA8CcAsQCIQEWAAAAitcSteABQwEUXQAFCdLTCmujCzt4qyIxvrk8TzxZg0iBGWMpA7uWK2DiM_QiSbotSXShQjG_t8d-QnzLeiB14i-cs-n4ulRe4gp_pVevDYtbrzgLGs50PuF0SnJMhal11nBKBn4GdELnvRTQC0J-gBk5BtbGUGcNhBFG1GQb0HLTP9YOLQ2csLTWOuL1rnFGzwDewChIwP440iAzki4cjqbihE_2sKRdodbvcXUN77B8PnWRAQOegxG0KXIA363n-gu3raNMmXpv9vsMxgcafX7gphS_eyQCLaueFkqI2r4C-QRCrJx6aNRStnjMg8NyJUYB3N4V9l50BKuSVjVr835OWtc1saHDmdiw0RgARMBSfPO-2dyuIsgbApqU8f8AAAGsAsQCAAAX--AtqAAK_AIAAAAAAFla"

```

You should see a pretty output of JSON in your terminal.

# Future Enhancements

- Testing
- Better looking output with something like json2html
- Parsing of multiple urls at once
- Web UI