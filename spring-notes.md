# Spring-Boot Learning Notes 

## Curl Commands 

### Basic Syntax 
  * curl [options] URL [optional data (sending)]

### Sending Data (@RequestBody)
  * curl -X POST URL -H "Content-Type: application/json" -d '{"name":"Yuji"}'
  * -X set method to ... (in this case POST)
  * -H this is setting header information for the HTTP request 

### Getting Data 
  * curl [options] URL 
  * curl -i URL 
    * -i includes the header information 

### 
