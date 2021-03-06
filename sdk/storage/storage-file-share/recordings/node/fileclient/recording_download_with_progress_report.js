let nock = require('nock');

module.exports.testInfo = {"uniqueName":{"share":"share157592571705709749","dir":"dir157592571719003221","file":"file157592571736706215"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share157592571705709749')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Mon, 09 Dec 2019 21:08:37 GMT',
  'ETag',
  '"0x8D77CEBF558BE5B"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'e8610b85-501a-0061-16d4-ae74a9000000',
  'x-ms-client-request-id',
  '3a6104de-50bb-43af-b19f-ff6b6bdbef6e',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Mon, 09 Dec 2019 21:08:36 GMT' ]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share157592571705709749/dir157592571719003221')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Mon, 09 Dec 2019 21:08:37 GMT',
  'ETag',
  '"0x8D77CEBF56EC1C2"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'fd4fbd5e-b01a-002f-3cd4-aeb14c000000',
  'x-ms-client-request-id',
  'bbd09f8d-260c-425b-9790-96b7279abe7a',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-12-09T21:08:37.3049794Z',
  'x-ms-file-last-write-time',
  '2019-12-09T21:08:37.3049794Z',
  'x-ms-file-creation-time',
  '2019-12-09T21:08:37.3049794Z',
  'x-ms-file-permission-key',
  '15246684120248489204*13496228697838683005',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 09 Dec 2019 21:08:36 GMT' ]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share157592571705709749/dir157592571719003221/file157592571736706215')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Mon, 09 Dec 2019 21:08:37 GMT',
  'ETag',
  '"0x8D77CEBF5881C58"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '8bb848f1-b01a-0049-35d4-ae0316000000',
  'x-ms-client-request-id',
  'fb9724de-0e73-41ce-9755-797e43d50e5a',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-12-09T21:08:37.4711384Z',
  'x-ms-file-last-write-time',
  '2019-12-09T21:08:37.4711384Z',
  'x-ms-file-creation-time',
  '2019-12-09T21:08:37.4711384Z',
  'x-ms-file-permission-key',
  '1435755748577930227*13496228697838683005',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 09 Dec 2019 21:08:37 GMT' ]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share157592571705709749/dir157592571719003221/file157592571736706215', "Hello World")
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'sQqNsWTgdUEFt6mb5y4/5Q==',
  'Last-Modified',
  'Mon, 09 Dec 2019 21:08:37 GMT',
  'ETag',
  '"0x8D77CEBF58FE670"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '8bb848f4-b01a-0049-36d4-ae0316000000',
  'x-ms-client-request-id',
  '61a819ed-f865-4103-a834-0eb397efc127',
  'x-ms-version',
  '2019-02-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 09 Dec 2019 21:08:37 GMT' ]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share157592571705709749/dir157592571719003221/file157592571736706215')
  .reply(200, "Hello World", [ 'Content-Length',
  '11',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Mon, 09 Dec 2019 21:08:37 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D77CEBF58FE670"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '8bb848f5-b01a-0049-37d4-ae0316000000',
  'x-ms-client-request-id',
  '74a44887-7c12-46f2-923d-e8c132b0a4c9',
  'x-ms-version',
  '2019-02-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-file-change-time',
  '2019-12-09T21:08:37.4711384Z',
  'x-ms-file-last-write-time',
  '2019-12-09T21:08:37.4711384Z',
  'x-ms-file-creation-time',
  '2019-12-09T21:08:37.4711384Z',
  'x-ms-file-permission-key',
  '1435755748577930227*13496228697838683005',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-lease-status,x-ms-lease-state,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 09 Dec 2019 21:08:37 GMT' ]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share157592571705709749')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'e8610b88-501a-0061-17d4-ae74a9000000',
  'x-ms-client-request-id',
  '848674e2-462c-40a3-9400-3b7088413ccd',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Mon, 09 Dec 2019 21:08:36 GMT' ]);
