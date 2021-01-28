// const soapRequest = require('easy-soap-request');
// const fs = require('fs');

// // example data
// const url = 'https://extendsclass.com/mock/rest/1076613cebef9755da810282adf0bc44/myBelia';
// const sampleHeaders = {
//   'user-agent': 'sampleTest',
//   'Content-Type': 'text/xml;charset=UTF-8',
//   'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
// };
// const xml = fs.readFileSync('test.xml', 'utf-8');

// // usage of module
// (async () => {
//   await soapRequest({ url: url, headers: sampleHeaders, xml: xml }).then((res) => {
//     console.log(res)
//     })
//     .catch((err) => {
//       console.log(err)
//     }); // Optional timeout parameter(milliseconds)
//   // const { headers, body, statusCode } = response;
//   // console.log(headers);
//   // console.log(body);
//   // console.log(statusCode);
// })();


const soapRequest = require('easy-soap-request');
const fs = require('fs');
const xml2js = require('xml2js');

// example data
const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const sampleHeaders = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};
const xml = fs.readFileSync('zip-code-envelope.xml', 'utf-8');



// usage of module
(async () => {
  const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml}); // Optional timeout parameter(milliseconds)
  const { headers, body, statusCode } = response;

  // console.log(body);
  var xmlResponse = response;
  console.log("Cleaning starts");
  // console.log(xmlResponse)
  const xml2 = fs.readFileSync('test.xml', 'utf-8');
  console.log(xml2)

  var parseString = require('xml2js').parseString;
  var xml3 = fs.readFileSync('test.xml', 'utf-8');

  parseString(xml3, function (err, result) {
    console.dir(result);
    var a = result['soapenv:Envelope']['soapenv:Body'];
    

    var jsonText= JSON.stringify(a);
    b = JSON.parse(jsonText);
  
});
 
})();


