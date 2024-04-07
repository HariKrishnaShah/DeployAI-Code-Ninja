Backend Part is completed by Hari Krishna Shah

#Instructions to integrate api into Frontend.

APIs Created:

File Upload: http://localhost:4000/fileupload
It uploads the report file to the server.

Executive Summary: http://localhost:4000/query/executive
It fetches the executive summary from the report file.
E.g: {
  "severity": {
    "highSeverity": "12",
    "mediumSeverity": "0",
    "lowSeverity": "5"
  },
  "keyFindinds": [
    "High severity: 6 issues",
    "Medium severity: 0 issues",
    "Low severity: 2 issues",
    "Information severity: 15 issues"
  ],
  "recommendation": "Based on the information provided in the file, it appears to be a Burp Scanner Sample Report detailing the results of a security scanning process. The report categorizes identified issues by severity and confidence level, providing a comprehensive overview of potential vulnerabilities within the scanned application. The report aims to help organizations understand and address security risks effectively.",
  "conclusion": "Based on the information provided in the file, it appears to be a Burp Scanner Sample Report detailing the results of a security scanning process. The report categorizes identified issues by severity and confidence level, providing a comprehensive overview of potential vulnerabilities within the scanned application. The report aims to help organizations understand and address security risks effectively."
}

Download Report: http://localhost:4000/download
It downloads the report as ppt from the uploaded pdf file.

#How to use:-
Run file upload api to upload the file first.
Once, the file is uploaded you can run Executive Summary or Download Report API to get executive summary or download summary ppt respectively.
@


