/**
 * Description : This is a test suite that tests an LRS endpoint based on the testing requirements document
 * found at https://github.com/adlnet/xAPI_LRS_Test/blob/master/TestingRequirements.md
 *
 * https://github.com/adlnet/xAPI_LRS_Test/blob/master/TestingRequirements.md
 *
 * Created by vijay.budhram on 7/9/14.
 * Riptide Software
 */
(function (process, request, should, helper) {
    "use strict";

    describe.skip('Statement Requirements', function () {
        it('All Objects are well-created JSON Objects (Nature of binding) **Implicit**', function (done) {
            // JSON parser validates this
            done();
        });

        it('All Strings are encoded and interpreted as UTF-8 (6.1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Statement uses the "id" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement uses the "actor" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement uses the "verb" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement uses the "object" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement uses the "result" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement uses the "context" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement uses the "timestamp" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement uses the "stored" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement uses the "authority" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement uses the "version" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement uses the "attachments" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Group uses the "name" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Group uses the "member" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An "actor" property uses the "objectType" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Agent uses the "mbox_sha1sum" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Agent uses the "openid" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Agent uses the "account" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Agent uses the "name" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Agent uses the "mbox" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Anonymous Group uses the "member" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Identified Group uses the "mbox" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Identified Group uses the "mbox_sha1sum" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Identified Group uses the "open_id" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Identified Group uses the "account" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Identified Group uses the "openid" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Account Object uses the "homePage" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Account Object property uses the "name" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A "verb" property uses the "id" property at most one time (Multiplicity, 4.1.3.table1.row1.aultiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Voiding Statement\'s Target is defined as the Statement corresponding to the "object" property\'s "id" property\'s IRI (4.3.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Voiding Statement cannot Target another Voiding Statement (4.3)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A "verb" property uses the "display" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An "object" property uses the "objectType" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An "object" property uses the "id" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An "object" property uses the "definition" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity is defined by the "objectType" of an "object" with value "Activity" (4.1.4.1.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An Activity uses the "definition" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity Definition uses the "name" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity Definition uses the "description" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity Definition uses the "type" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity Definition uses the "moreInfo" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity Definition uses the "interactionType" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity Definition uses the "correctResponsesPattern" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity Definition uses the "choices" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity Definition uses the "scale" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity Definition uses the "source" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity Definition uses the "target" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity Definition uses the "steps" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Interaction Component uses the "id" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Interaction Component uses the "description" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Activity Definition uses the "extensions" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement Reference uses the "id" property at most one time (Multiplicity, 4.1.a)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A "score" Object uses a "scaled" property at most one time (Multiplicity, 4.1.5.1.table1.row1.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A "score" Object uses a "raw" property at most one time (Multiplicity, 4.1.5.1.table1.row3.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A "score" Object uses a "min" property at most one time (Multiplicity, 4.1.5.1.table1.row3.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A "score" Object uses a "max" property at most one time (Multiplicity, 4.1.5.1.table1.row4.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "result" property uses a "success" property at most one time (Multiplicity, 4.1.5.table1.row2.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "result" property uses a "completion" property at most one time (Multiplicity, 4.1.5.table1.row3.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "result" property uses a "response" property at most one time (Multiplicity, 4.1.5.table1.row3.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "result" property uses a "duration" property at most one time (Multiplicity, 4.1.5.table1.row3.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "result" property uses an "extensions" property at most one time (Multiplicity, 4.1.5.table1.row3.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "context" property uses a "registration" property at most one time (Multiplicity, 4.1.6.table1.row1.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "context" property uses an "instructor" property at most one time (Multiplicity, 4.1.6.table1.row2.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "context" property uses an "team" property at most one time (Multiplicity, 4.1.6.table1.row3.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "context" property uses a "contextActivities" property at most one time (Multiplicity, 4.1.6.table1.row4.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "context" property uses an "revision" property at most one time (Multiplicity, 4.1.6.table1.row5.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "context" property uses an "platform" property at most one time (Multiplicity, 4.1.6.table1.row6.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "context" property uses a "language" property at most one time (Multiplicity, 4.1.6.table1.row7.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "context" property uses a "statement" property at most one time (Multiplicity, 4.1.6.table1.row8.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('A Statement\'s "context" property uses an "extensions" property at most one time (Multiplicity, 4.1.6.table1.row9.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Attachment uses a "usageType" property exactly one time (Multiplicity, 4.1.11.table1.row1.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Attachment uses a "display" property exactly one time (Multiplicity, 4.1.11.table1.row2.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Attachment uses a "description" property at most one time (Multiplicity, 4.1.11.table1.row3.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Attachment uses a "contentType" property exactly one time (Multiplicity, 4.1.11.table1.row4.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Attachment uses a "length" property exactly one time (Multiplicity, 4.1.11.table1.row5.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Attachment uses a "sha2" property exactly one time (Multiplicity, 4.1.11.table1.row6.c)', function (done) {
            // JSON parser validates this
            done();
        });

        it('An Attachment uses a "fileUrl" property at most one time (Multiplicity, 4.1.11.table1.row7.c)', function (done) {
            // JSON parser validates this
            done();
        });
    });

    describe('Miscellaneous Requirements', function () {
        it('An LRS returns a ContextActivity in an array, even if only a single ContextActivity is returned (4.1.6.2.c, 4.1.6.2.d)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a Request whose "authority" is a Group of more than two Agents  (Format, 4.1.9.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a Request whose "authority" is a Group and consists of non-O-Auth Agents  (4.1.9.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 403 Forbidden a Request whose "authority" is a Agent or Group that is not authorized  (4.1.9.b, 6.4.2)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS populates the "authority" property if it is not provided in the Statement, based on header information with the Agent corresponding to the user (contained within the header) (**Implicit**, 4.1.9.b, 4.1.9.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a Request which uses "version" and has the value set to anything but "1.0" or "1.0.x", where x is the semantic versioning number (Format, 4.1.10.b, 6.2.c, 6.2.f)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a Request which uses Attachments and does not have a "Content-Type" header with value "application/json" or "multipart/mixed" (Format, 4.1.11.a, 4.1.11.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a GET Request which uses Attachments, has a "Content-Type" header with value "application/json", and has the "attachments" filter attribute set to "true" (4.1.11.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a "Content-Type" header with value "application/json", and has a discrepancy in the number of Attachments vs. the number of fileURL members (4.1.11.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a "Content Type" header with value "multipart/mixed", and does not have a body header named "Content-Type" with value "multipart/mixed" (RFC 1341)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a "Content Type" header with value "multipart/mixed", and does not have a body header named "boundary" (4.1.11.b, RFC 1341)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Boundary is defined as the value of the body header named "boundary" (Definition, 4.1.11.b, RFC 1341)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a "Content Type" header with value "multipart/mixed", and does not have a body header named "MIME-Version" with a value of "1.0" or greater (4.1.11.b, RFC 1341)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a "Content Type" header with value "multipart/mixed", and does not have a Boundary before each "Content-Type" header (4.1.11.b, RFC 1341)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a "Content Type" header with value "multipart/mixed", and does not the first document part with a "Content-Type" header with a value of "application/json" (RFC 1341, 4.1.11.b.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a "Content Type" header with value "multipart/mixed", and does not have all of the Statements in the first document part (RFC 1341, 4.1.11.b.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a "Content Type" header with value "multipart/mixed", and for any part except the first does not have a Header named "Content-Transfer-Encoding" with a value of "binary" (4.1.11.b.c, 4.1.11.b.e)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a PUT or POST Request which uses Attachments, has a "Content Type" header with value "multipart/mixed", and for any part except the first does not have a Header named "X-Experience-API-Hash" with a value of one of those found in a "sha2" property of a Statement in the first part of this document (4.1.11.b.c, 4.1.11.b.d)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API will reject a GET request having the "attachment" parameter set to "true" if it does not follow the rest of the attachment rules (7.2.3.d)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API will reject a GET request having the "attachment" parameter set to "false" if it includes attachment raw data (7.2.3.e)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API will reject a GET request having the "attachment" parameter set to "false" and the Content-Type field in the header set to anything but "application/json" (7.2.3.d) (7.2.3.e)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a Request which does not use a "X-Experience-API-Version" header name to any API except the About API (Format, 6.2.a, 6.2.f, 7.7.f)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request, a Request which the "X-Experience-API-Version" header\'s value is anything but "1.0" or "1.0.x", where x is the semantic versioning number to any API except the About API (Format, 6.2.d, 6.2.e, 6.2.f, 7.7.f)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS modifies the value of the header of any Statement not rejected by the previous three requirements to "1.0.1" (4.1.10.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS will not modify Statements based on a "version" before "1.0.1" (6.2.l)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS sends a header response with "X-Experience-API-Version" as the name and "1.0.1" as the value (Format, 6.2.a, 6.2.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS implements all of the Statement, State, Agent, and Activity Profile sub-APIs **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request any request to an API which uses a parameter not recognized by the LRS (7.0.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 400 Bad Request any request to an API which uses a parameter with differing case (7.0.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects with error code 405 Method Not Allowed to any request to an API which uses a method not in this specification **Implicit ONLY in that HTML normally does this behavior**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS does not process any batch of Statements in which one or more Statements is rejected and if necessary, restores the LRS to the state in which it was before the batch began processing (7.0.c, **Implicit**)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS can only reject Statements using the error codes in this specification **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS returns the correct corresponding error code when an error condition is met (7.0.e)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects a Statement of bad authorization (either authentication needed or failed credentials) with error code 401 Unauthorized (7.1)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects a Statement of insufficient permissions (credentials are valid, but not adequate) with error code 403 Forbidden (7.1)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects a Statement due to size if the Statement exceeds the size limit the LRS is configured to with error code 413 Request Entity Too Large (7.1)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS must be configurable to accept a Statement of any size (within reason of modern day storage capacity)  (7.1.b, **Implicit**)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects a Statement due to network/server issues with an error code of 500 Internal Server Error (7.1)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS has a Statement API with endpoint "base IRI"+"/statements" (7.2)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API accepts PUT requests (7.2.1)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API rejects with Error Code 400 Bad Request any DELETE request (7.2)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API accepts PUT requests only if it contains a "statementId" parameter (Multiplicity, 7.2.1.table1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API accepts PUT requests only if the "statementId" parameter is a String (Type, 7.2.1.table1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS cannot modify a Statement, state, or Object in the event it receives a Statement with statementID equal to a Statement in the LRS already. (7.2.1.a, 7.2.2.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API upon processing a successful PUT request returns code 204 No Content (7.2.1)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API rejects with error code 409 Conflict any Statement with the "statementID" parameter equal to a Statement in the LRS already **Implicit** (7.2.1.b, 7.2.2.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A POST request is defined as a "pure" POST, as opposed to a GET taking on the form of a POST (7.2.2.e)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API accepts POST requests (7.2.2)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API upon processing a successful POST request returns code 204 No Content and all Statement UUIDs within the POST **Implicit** (7.2.2)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A GET request is defined as either a GET request or a POST request containing a GET request (7.2.3, 7.2.2.e)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API accepts GET requests (7.2.3)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "statementId" as a parameter (7.2.3)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "voidedStatementId" as a parameter  (7.2.3)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "agent" as a parameter  **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "verb" as a parameter  **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "activity" as a parameter  **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "registration" as a parameter  **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "related_activities" as a parameter  **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "related_agents" as a parameter  **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "since" as a parameter  **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "until" as a parameter  **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "limit" as a parameter  **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "format" as a parameter  **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "attachments" as a parameter  **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API can process a GET request with "ascending" as a parameter  **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API rejects a GET request with both "statementId" and anything other than "attachments" or "format" as parameters (7.2.3.a, 7.2.3.b) with error code 400 Bad Request.', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API rejects a GET request with both "voidedStatementId" and anything other than "attachments" or "format" as parameters (7.2.3.a, 7.2.3.b) with error code 400 Bad Request.', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API upon processing a successful GET request with a "statementId" parameter, returns code 200 OK and a single Statement with the corresponding "id".  (7.2.3)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API upon processing a successful GET request with a "voidedStatementId" parameter, returns code 200 OK and a single Statement with the corresponding "id".  (7.2.3)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API upon processing a successful GET request with neither a "statementId" nor a "voidedStatementId" parameter, returns code 200 OK and a StatementResult Object.  (7.2.3)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API upon processing a GET request, returns a header with name "X-Experience-API-Consistent-Through" regardless of the code returned. (7.2.3.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API, upon receiving a GET request, has a field in the header with name "Content-Type" **Assumed?****', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s "X-Experience-API-Consistent-Through" header is an ISO 8601 combined date and time (Type, 7.2.3.c).', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s "X-Experience-API-Consistent-Through" header\'s value is not before (temporal) any of the "stored" values of any of the returned Statements (7.2.3.c).', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API, upon processing a successful GET request, will return a single "statements" property (Multiplicity, Format, 4.2.table1.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A "statements" property is an Array of Statements (Type, 4.2.table1.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('The Statements within the "statements" property will correspond to the filtering criterion sent in with the GET request **Implicit** (7.2.4.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('The LRS will NOT reject a GET request which returns an empty "statements" property (**Implicit**, 4.2.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A "statements" property which is too large for a single page will create a container for each additional page (4.2.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API, upon processing a successful GET request, will return a single "more" property (Multiplicity, Format, 4.2.table1.row2.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A "more" property is an IRL (Format, 4.2.table1.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('The "more" property an empty string if the entire results of the original GET request have been returned (4.2.table1.row2.b) (Do we need to be specific about the "type" of empty string?)', function (done) {
            done(new Error('Implement Test'));
        });

        it('If not empty, the "more" property\'s IRL refers to a specific container object corresponding to the next page of results from the orignal GET request (4.2.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A "more" property IRL is accessible for at least 24 hours after being returned (4.2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A "more" property\'s referenced container object follows the same rules as the original GET request, originating with a single "statements" property and a single "more" property (4.2.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Voided Statement is defined as a Statement that is not a Voiding Statement and is the Target of a Voiding Statement within the LRS (4.2.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API, upon processing a successful GET request, can only return a Voided Statement if that Statement is specified in the voidedStatementId parameter of that request (7.2.4.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Statement API, upon processing a successful GET request wishing to return a Voided Statement still returns Statements which target it (7.2.4.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS has a State API with endpoint "base IRI"+"/activities/state" (7.3.table1.row1.a ,7.3.table1.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS has an Activities API with endpoint "base IRI" + /activities" (7.5) **Implicit** (in that it is not named this by the spec)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS has an Activity Profile API with endpoint "base IRI"+"/activities/profile" (7.3.table1.row2.a, 7.3.table1.row2.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS has an Agents API with endpoint "base IRI" + /agents" (7.6) **Implicit** (in that it is not named this by the spec)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS has an Agent Profile API with endpoint "base IRI"+"/agents/profile" (7.3.table1.row3.a, 7.3.table1.row3.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS has an About API with endpoint "base IRI"+"/about" (7.7.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS will accept a POST request to the State API (7.3.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS will accept a POST request to the Activity Profile API (7.3.table1.row2.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS will accept a POST request to the Agent Profile API (7.3.table1.row3.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS cannot reject a POST request to the State API based on the contents of the name/value pairs of the document (7.3.b) **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS cannot reject a POST request to the Activity Profile API based on the contents of the name/value pairs of the document (7.3.b) **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS cannot reject a POST request to the Agent Profile API based on the contents of the name/value pairs of the document (7.3.b) **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API, upon receiving a POST request for a document not currently in the LRS, treats it as a PUT request and store a new document (7.3.f)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API, rejects a POST request if the document is found and either document\'s type is not "application/json" with error code 400 Bad Request (7.3.e)', function (done) {
            done(new Error('Implement Test'));
        });

        // TODO
        // A Document Merge is defined by the merging of an existing document at an endpoint with a document received in a POST request. (7.3)

        // TODO
        // A Document Merge de-serializes all Objects represented by each document before making other changes. (7.3.d)

        // TODO
        // A Document Merge overwrites any duplicate Objects from the previous document with the new document. (7.3.d)

        // TODO
        // A Document Merge only performs overwrites at one level deep, although the entire object is replaced. (7.3.d)

        // TODO
        // A Document Merge re-serializes all Objects to finalize a single document (7.3.d)

        it('An LRS\'s State API performs a Document Merge if a document is found and both it and the document in the POST request have type "application/json" (7.3.d)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API, upon receiving a POST request for a document not currently in the LRS, treats it as a PUT request and store a new document (7.3.f)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API, rejects a POST request if the document is found and either document\'s type is not "application/json" with error code 400 Bad Request (7.3.e)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API performs a Document Merge if a document is found and both it and the document in the POST request have type "application/json" (7.3.d)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API, upon receiving a POST request for a document not currently in the LRS, treats it as a PUT request and store a new document (7.3.f)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API, rejects a POST request if the document is found and either document\'s type is not "application/json" with error code 400 Bad Request (7.3.e)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API performs a Document Merge if a document is found and both it and the document in the POST request have type "application/json" (7.3.d)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API accepts PUT requests (7.4)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a PUT request without "activityId" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a PUT request  with "activityId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.4.table1.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        //+* In 1.0.3, the IRI requires a scheme, but does not in 1.0.2, thus we only test type String in this version**
        it('An LRS\'s State API rejects a PUT request without "agent" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row2.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a PUT request with "agent" as a parameter if it is not in JSON format with error code 400 Bad Request (format, 7.4.table1.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API can process a PUT request with "registration" as a parameter  (multiplicity, 7.4.table1.row3.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a PUT request with "registration" as a parameter if it is not a UUID with error code 400 Bad Request(format, 7.4.table1.row3.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a PUT request without "stateId" as a parameter with error code 400 Bad Request(multiplicity, 7.4.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a PUT request  with "stateId" as a parameter if it is not type "String" with error code 400 Bad Request(format, 7.4.table1.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API upon processing a successful PUT request returns code 204 No Content (7.4.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API accepts POST requests (7.4)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a POST request without "activityId" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a POST request  with "activityId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.4.table1.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a POST request without "agent" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row2.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a POST request with "agent" as a parameter if it is not in JSON format with error code 400 Bad Request (format, 7.4.table1.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API can process a POST request with "registration" as a parameter (multiplicity, 7.4.table1.row3.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a POST request with "registration" as a parameter if it is not a UUID with error code 400 Bad Request (format, 7.4.table1.row3.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a POST request without "stateId" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a POST request  with "stateId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.4.table1.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API upon processing a successful POST request returns code 204 No Content (7.4.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API accepts GET requests (7.4)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a GET request without "activityId" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a GET request  with "activityId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.4.table1.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a GET request without "agent" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row2.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a GET request with "agent" as a parameter if it is not in JSON format with error code 400 Bad Request (format, 7.4.table1.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API can process a GET request with "registration" as a parameter (multiplicity, 7.4.table1.row3.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a GET request with "registration" as a parameter if it is not a UUID with error code 400 Bad Request (format, 7.4.table1.row3.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API can process a GET request with "stateId" as a parameter (multiplicity, 7.4.table1.row3.b, 7.4.table2.row3.b) (multiplicity, 7.4.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a GET request  with "stateId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.4.table1.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API can process a GET request with "since" as a parameter (multiplicity, 7.4.table2.row4.b, 7.4.table2.row3.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a GET request with "since" as a parameter if it is not a "TimeStamp", with error code 400 Bad Request (format, 7.4.table2.row4.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API upon processing a successful GET request with a valid "stateId" as a parameter returns the document satisfying the requirements of the GET and code 200 OK (7.4.b)', function (done) {
            done(new Error('Implement Test'));
        });

        //+* NOTE:  **There is no requirement here that the LRS reacts to the "since" parameter in the case of a GET request with valid "stateId" - this is intentional**
        it('An LRS\'s State API upon processing a successful GET request without "stateId" as a parameter returns an array of ids of state data documents satisfying the requirements of the GET and code 200 OK (7.4.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s returned array of ids from a successful GET request all refer to documents stored after the TimeStamp in the "since" parameter of the GET request (7.4.table2.row4)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API accepts DELETE requests (7.4)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a DELETE request without "activityId" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a DELETE request  with "activityId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.4.table1.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a DELETE request without "agent" as a parameter with error code 400 Bad Request (multiplicity, 7.4.table1.row2.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a DELETE request with "agent" as a parameter if it is not in JSON format with error code 400 Bad Request (format, 7.4.table1.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API can process a DELETE request with "registration" as a parameter (multiplicity, 7.4.table1.row3.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a DELETE request with "registration" as a parameter if it is not a UUID with error code 400 Bad Request (format, 7.4.table1.row3.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API can process a DELETE request with "stateId" as a parameter (multiplicity, 7.4.table1.row3.b, 7.4.table2.row3.b) (multiplicity, 7.4.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a DELETE request  with "stateId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.4.table1.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API can process a DELETE request with "since" as a parameter (multiplicity, 7.4.table2.row4.b, 7.4.table2.row3.b)  **Is this valid??**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API rejects a DELETE request with "since" as a parameter if it is not a "TimeStamp", with error code 400 Bad Request (format, 7.4.table2.row4.a)  **And this would follow...**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s State API upon processing a successful DELETE request with a valid "stateId" as a parameter deletes the document satisfying the requirements of the DELETE and returns code 204 No Content (7.4.b)', function (done) {
            done(new Error('Implement Test'));
        });

        //+* NOTE:  **There is no requirement here that the LRS reacts to the "since" parameter in the case of a GET request with valid "stateId" - this is intentional**
        it('An LRS\'s State API upon processing a successful DELETE request without "stateId" as a parameter deletes documents satisfying the requirements of the DELETE and code 200 OK (7.4.d)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activities API accepts GET requests (7.5)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activities API rejects a GET request without "activityId" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activities API rejects a GET request  with "activityId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.5.table1.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activities API upon processing a successful GET request returns the complete Activity Object (7.5)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API accepts PUT requests (7.5)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a PUT request without "activityId" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API API rejects a PUT request  with "activityId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.5.table2.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a PUT request without "profileId" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a PUT request  with "profileId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.5.table2.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API upon processing a successful PUT request returns code 204 No Content (7.5.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API accepts POST requests (7.5)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a POST request without "activityId" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a POST request  with "activityId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.5.table2.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a POST request without "profileId" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API API rejects a POST request  with "profileId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.5.table2.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API upon processing a successful POST request returns code 204 No Content (7.5.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API accepts DELETE requests (7.5)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a DELETE request without "activityId" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a DELETE request  with "activityId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.5.table2.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a DELETE request without "profileId" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a DELETE request  with "profileId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.5.table2.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API upon processing a successful DELETE request deletes the associated profile and returns code 204 No Content (7.5.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API accepts GET requests (7.5)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a GET request without "activityId" as a parameter with error code 400 Bad Request (multiplicity, 7.5.table2.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a GET request  with "activityId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.5.table2.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a GET request with "agent" as a parameter if it is not in JSON format with error code 400 Bad Request (format, 7.4.table2.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API can process a GET request with "since" as a parameter (multiplicity, 7.5.table3.row2.c, 7.5.table3.row2.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API rejects a GET request with "since" as a parameter if it is not a "TimeStamp", with error code 400 Bad Request (format, 7.5.table3.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API upon processing a successful GET request with a valid "profileId" as a parameter returns the document satisfying the requirements of the GET and code 200 OK (7.5.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API upon processing a successful GET request without "profileId" as a parameter returns an array of ids of activity profile documents satisfying the requirements of the GET and code 200 OK (7.5.d)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s returned array of ids from a successful GET request all refer to documents stored after the TimeStamp in the "since" parameter of the GET request if such a parameter was present (7.5.table3.row2)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agents API accepts GET requests (7.6)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agents API rejects a GET request without "agent" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table2.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agents API rejects a GET request  with "agent" as a parameter if it is a valid (in structure) Agent with error code 400 Bad Request (format, 7.6.table2.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agents API upon processing a successful GET request returns a Person Object if the "agent" parameter  can be found in the LRS and code 200 OK (7.6.c, 7.6.d)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agents API upon processing a successful GET request returns a Person Object based on matched data from the "agent" parameter and code 200 OK (7.6.d)', function (done) {
            done(new Error('Implement Test'));
        });


        it('An LRS\'s Agent Profile API accepts PUT requests (7.6)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a PUT request without "agent" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a PUT request  with "agent" as a parameter if it is not an Agent Object with error code 400 Bad Request (format, 7.6.table3.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a PUT request without "profileId" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row2.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a PUT request  with "profileId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.6.table3.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API upon processing a successful PUT request returns code 204 No Content (7.6.e)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API accepts POST requests (7.6)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a POST request without "agent" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a POST request  with "agent" as a parameter if it is not an Agent Object with error code 400 Bad Request (format, 7.6.table3.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a POST request without "profileId" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row2.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a POST request  with "profileId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.6.table3.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API upon processing a successful POST request returns code 204 No Content (7.6.e)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API accepts DELETE requests (7.6)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a DELETE request without "agent" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a DELETE request  with "agent" as a parameter if it is not an Agent Object with error code 400 Bad Request (format, 7.6.table3.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a DELETE request without "profileId" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row2.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a DELETE request  with "profileId" as a parameter if it is not type "String" with error code 400 Bad Request (format, 7.6.table3.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API upon processing a successful DELETE request deletes the associated profile and returns code 204 No Content (7.6.e)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API accepts GET requests (7.6)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a GET request without "agent" as a parameter with error code 400 Bad Request (multiplicity, 7.6.table3.row1.c, 7.6.table4.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a GET request with "agent" as a parameter if it is not an Actor Object with error code 400 Bad Request (format, 7.6.table3.row1.c, 7.6.table4.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API can process a GET request with "since" as a parameter (Multiplicity, 7.6.table4.row2.a, 7.5.table4.row2.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API rejects a GET request with "since" as a parameter if it is not a "TimeStamp", with error code 400 Bad Request (format, 7.6.table4.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API upon processing a successful GET request with a valid "profileId" as a parameter returns the document satisfying the requirements of the GET and code 200 OK (7.6, 7.6.f)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Agent Profile API upon processing a successful GET request without "profileId" as a parameter returns an array of ids of agent profile documents satisfying the requirements of the GET and code 200 OK (7.6, 7.6.g)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s returned array of ids from a successful GET request all refer to documents stored after the TimeStamp in the "since" parameter of the GET request if such a parameter was present (7.6.table4.row2, 7.6.g)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s About API accepts GET requests (7.7.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s Activity Profile API upon processing a successful GET request returns a version property and code 200 OK (multiplicity, 7.7.table1.row1.c, 7.7.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s About API\'s version property is an array of strings (format, 7.7.table1.row1.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s About API\'s version property contains at least one string of "1.0.1" (7.7.d)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s About API\'s version property can only have values of ".9", ".95", "1.0", "1.0.0", or ""1.0." + X" with (7.7.d.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS\'s About API upon processing a successful GET request can return an Extension with code 200 OK (multiplicity, 7.7.table1.row2.c, 7.7.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('Any LRS API that accepts a POST request can accept a POST request with a single query string parameter named "method" on that request (7.8.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Cross Origin Request is defined as this POST request as described in the previous requirement (definition)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS must parse the body of a Cross Origin Request and construct a new Request from it with the type of Request being the same as the value of the "method" parameter (7.8.a, 7.8.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS will map form parameters from the body of the Cross Origin Request to the similarly named HTTP Headers in the new Request (7.8.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS rejects a new Request in the same way for violating rules of this document as it would a normal Request **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS will reject any request sending content which does not have a form parameter with the name of "content" (7.8.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS will treat the content of the form parameter named "content" as a UTF-8 String (7.8.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS will reject a new Request with a form parameter named "content" if "content" is found to be binary data  with error code 400 Bad Request (7.8.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS will reject a new Request which attempts to send attachment data with error code 400 Bad Request (7.8.d)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS will reject a Cross Origin Request or new Request which contains any extra information with error code 400 Bad Request **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS accepts HEAD requests (7.10.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS responds to a HEAD request in the same way as a GET request, but without the message-body (7.10.a, 7.10.a.a) **This means run ALL GET tests with HEAD**', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS accepts HEAD requests without Content-Length headers (7.10.a.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('An LRS accepts GET requests without Content-Length headers **Implicit**', function (done) {
            done(new Error('Implement Test'));
        });

    });

    describe('Document API Requirements', function () {

        it('A Person Object is an Object (7.6)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object uses an "objectType" property exactly one time (Multiplicity, 7.6.table1.row1.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object\'s "objectType" property is a String and is "Person" (Format, Vocabulary, 7.6.table1.row1.a, 7.6.table1.row1.b)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object uses a "name" property at most one time (Multiplicity, 7.6.table1.row2.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object\'s "name" property is an Array of Strings (Multiplicity, 7.6.table1.row2.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object uses a "mbox" property at most one time (Multiplicity, 7.6.table1.row3.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object\'s "mbox" property is an Array of IRIs (Multiplicity, 7.6.table1.row3.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object\'s "mbox" entries have the form "mailto:emailaddress" (Format, 7.6.table1.row3.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object uses a "mbox_sha1sum" property at most one time (Multiplicity, 7.6.table1.row4.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object\'s "mbox_sha1sum" property is an Array of Strings (Multiplicity, 7.6.table1.row4.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object uses an "openid" property at most one time (Multiplicity, 7.6.table1.row5.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object\'s "openid" property is an Array of Strings (Multiplicity, 7.6.table1.row5.a)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object uses an "account" property at most one time (Multiplicity, 7.6.table1.row6.c)', function (done) {
            done(new Error('Implement Test'));
        });

        it('A Person Object\'s "account" property is an Array of Account Objects (Multiplicity, 7.6.table1.row6.a)', function (done) {
            done(new Error('Implement Test'));
        });

        describe('State Document API Test', function () {
            it('should GET and include ETag (7.4) (7.4.b) (multiplicity, 7.4.table1.row3.b, 7.4.table2.row3.b) (multiplicity, 7.4.table1.row1.b)', function (done) {
                var parameters = {
                    activityId: "http://www.example.com/activityId/hashset",
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };
                var document = {
                    "y": "car",
                    "z": "van"
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/state',
                        qs: parameters,
                        method: 'GET',
                        headers: {
                            'X-Experience-API-Version': '1.0.1'
                        }
                    }, function (err, res, body) {
                        var etag = res.headers['etag'];
                        etag.should.be.ok;
                        etag.should.eql(getSHA1Sum(document));

                        var responseBody = JSON.parse(body);
                        responseBody.y.should.equal(document.y);
                        responseBody.z.should.equal(document.z);
                        done();
                    });
                });
            });

            it('should fail GET when missing activityId (multiplicity, 7.4.table1.row1.b)', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail GET when activityId is not type of string (format, 7.4.table1.row1.a)', function (done) {
                var parameters = {
                    activityId: {
                        "objectType": "object"
                    },
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail GET when missing agent (multiplicity, 7.4.table1.row2.b)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail GET when agent is not type of JSON (format, 7.4.table1.row2.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: "fail",
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail GET when stateId is not type of String (format, 7.4.table1.row1.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: {
                        "fail": "test"
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail GET when registration is not type of UUID (format, 7.4.table1.row3.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277b57b4c158d91d292c5b2b8f7----",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail GET all when since is not type of Timestamp (format, 7.4.table2.row4.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    since: "should fail"
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when missing stateId', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7"
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when missing activityId (multiplicity, 7.4.table1.row1.b)', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when activityId is not type of string (format, 7.4.table1.row1.a)', function (done) {
                var parameters = {
                    activityId: {
                        "objectType": "object"
                    },
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when missing agent (multiplicity, 7.4.table1.row2.b)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when agent is not type of JSON (format, 7.4.table1.row2.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: "fail",
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when stateId is not type of String (format, 7.4.table1.row1.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: {
                        "fail": "test"
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when registration is not type of UUID (format, 7.4.table1.row3.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277b57b4c158d91d292c5b2b8f7----",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when missing stateId', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7"
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when missing activityId (multiplicity, 7.4.table1.row1.b)', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when activityId is not type of string (format, 7.4.table1.row1.a)', function (done) {
                var parameters = {
                    activityId: {
                        "objectType": "object"
                    },
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when missing agent (multiplicity, 7.4.table1.row2.b)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when agent is not type of JSON (format, 7.4.table1.row2.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: "fail",
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when stateId is not type of String (format, 7.4.table1.row1.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: {
                        "fail": "test"
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when registration is not type of UUID (format, 7.4.table1.row3.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277b57b4c158d91d292c5b2b8f7----",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when missing activityId (multiplicity, 7.4.table1.row1.b)', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
                getStatement("basic", [actor[group], verb[languages], object[substa]])
            });

            it('should fail DELETE when activityId is not type of string (format, 7.4.table1.row1.a)', function (done) {
                var parameters = {
                    activityId: {
                        "objectType": "object"
                    },
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when missing agent (multiplicity, 7.4.table1.row2.b)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when agent is not type of JSON (format, 7.4.table1.row2.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: "fail",
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when stateId is not type of String (format, 7.4.table1.row1.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    stateId: {
                        "fail": "test"
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when registration is not type of UUID (format, 7.4.table1.row3.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    registration: "ec531277b57b4c158d91d292c5b2b8f7----",
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should store a new document and return status code 204 (7.3.f, 7.4, 7.4.a)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'fd41c918-b88b-4b20-a0a5-a4c32391aaa1',
                    stateId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);
                    done();
                });
            });

            it('should retrieve by registration (multiplicity, 7.4.table1.row3.b)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f7',
                    stateId: helper.generateUUID()
                };
                var parameters2 = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f8',
                    stateId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/state',
                        qs: parameters2,
                        method: 'PUT',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString()
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        request({
                            url: LRS_ENDPOINT + '/activities/state',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            responseBody.y.should.equal(document.y);
                            responseBody.z.should.equal(document.z);
                            done();
                        });
                    });
                });
            });

            it('should retrieve on GET stateId (multiplicity, 7.4.table1.row3.b, 7.4.table2.row3.b) (multiplicity, 7.4.table1.row1.b)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f7',
                    stateId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/state',
                        qs: parameters,
                        method: 'GET',
                        headers: {
                            'X-Experience-API-Version': '1.0.1'
                        }
                    }, function (err, res, body) {
                        var responseBody = JSON.parse(body);
                        responseBody.y.should.equal(document.y);
                        responseBody.z.should.equal(document.z);
                        done();
                    });
                });
            });

            it('should merge document when type is JSON (7.3, 7.3.d)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f7',
                    stateId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/state',
                        qs: parameters,
                        method: 'POST',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString()
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        request({
                            url: LRS_ENDPOINT + '/activities/state',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            responseBody.x.should.equal(document2.x);
                            responseBody.y.should.equal(document2.y);
                            responseBody.z.should.equal(document.z);
                            done();
                        });
                    });
                });
            });

            it('should replace a document on PUT for non-JSON (7.3.d)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f7',
                    stateId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/state',
                        qs: parameters,
                        method: 'PUT',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString()
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        request({
                            url: LRS_ENDPOINT + '/activities/state',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            responseBody.x.should.equal(document2.x);
                            responseBody.y.should.equal(document2.y);
                            done();
                        });
                    });
                });
            });

            it('should fail on POST when non-JSON (7.3.e)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f7',
                    stateId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = "not JSON";

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/state',
                        qs: parameters,
                        method: 'POST',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString(),
                            'content-type': 'text/plain'
                        },
                        body: new Buffer(document2, 'utf-8')
                    }, function (err, res, body) {
                        res.statusCode.should.equal(400);
                        done();
                    });
                });
            });

            it('should GET all (Array) when missing stateId (7.4.b)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    registration: "ec531277-b57b-4c15-8d91-d292c5b2b8f7",
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    body.should.be.type('string');
                    var array = JSON.parse(body);
                    array.should.be.an.instanceOf(Array);
                    done();
                });
            });

            it('should GET all (Array) using since (7.4.c) (7.4.table2.row4) (multiplicity, 7.4.table2.row4.b, 7.4.table2.row3.b)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Ricky James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f7',
                    stateId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                var parameters2 = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Ricky James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f7',
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/state',
                        qs: parameters2,
                        method: 'POST',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date(2000, 0, 1)).toISOString()
                        },
                        json: document
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        var search = {
                            activityId: 'http://www.example.com/activityId/hashset',
                            agent: {
                                objectType: 'Agent',
                                account: {
                                    homePage: 'http://www.example.com/agentId/1',
                                    name: 'Rick James'
                                }
                            },
                            since: (new Date(2010, 0, 1)).toISOString()
                        };
                        request({
                            url: LRS_ENDPOINT + '/activities/state',
                            qs: search,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            body.should.be.type('string');
                            var array = JSON.parse(body);
                            array.should.be.an.instanceOf(Array);

                            var found = false;
                            for (var i = 0; i < array.length; i++) {
                                array[i].should.not.eql(parameters2.stateId);
                                if (array[i] === parameters.stateId) {
                                    found = true;
                                }
                            }
                            found.should.be.true;
                            done();
                        });
                    });
                });
            });

            it('should GET all (Array) restricted to registration using since', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f7',
                    stateId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                var parameters2 = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f8',
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/state',
                        qs: parameters2,
                        method: 'POST',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString()
                        },
                        json: document
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);


                        var search = {
                            activityId: 'http://www.example.com/activityId/hashset',
                            agent: {
                                objectType: 'Agent',
                                account: {
                                    homePage: 'http://www.example.com/agentId/1',
                                    name: 'Rick James'
                                }
                            },
                            registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f7',
                            since: (new Date(2010, 0, 1)).toISOString()
                        };
                        request({
                            url: LRS_ENDPOINT + '/activities/state',
                            qs: search,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            body.should.be.type('string');
                            var array = JSON.parse(body);
                            array.should.be.an.instanceOf(Array);

                            var found = false;
                            for (var i = 0; i < array.length; i++) {
                                array[i].should.not.eql(parameters2.stateId);
                                if (array[i] === parameters.stateId) {
                                    found = true;
                                }
                            }
                            found.should.be.true;
                            done();
                        });
                    });
                });
            });

            it('should DELETE (7.4.b)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f7',
                    stateId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/state',
                        qs: parameters,
                        method: 'DELETE',
                        headers: {
                            'X-Experience-API-Version': '1.0.1'
                        }
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        request({
                            url: LRS_ENDPOINT + '/activities/state',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            res.statusCode.should.equal(200);
                            body.should.be.empty;
                            done();
                        });
                    });
                });
            });

            it('should DELETE all (Array) (7.4.d)', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f7',
                    stateId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                var parameters2 = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f8',
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/state',
                        qs: parameters2,
                        method: 'POST',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString()
                        },
                        json: document
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        var toDelete = {
                            activityId: 'http://www.example.com/activityId/hashset',
                            agent: {
                                objectType: 'Agent',
                                account: {
                                    homePage: 'http://www.example.com/agentId/1',
                                    name: 'Rick James'
                                }
                            }
                        };
                        request({
                            url: LRS_ENDPOINT + '/activities/state',
                            qs: toDelete,
                            method: 'DELETE',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            res.statusCode.should.equal(204);

                            var search = {
                                activityId: 'http://www.example.com/activityId/hashset',
                                agent: {
                                    objectType: 'Agent',
                                    account: {
                                        homePage: 'http://www.example.com/agentId/1',
                                        name: 'Rick James'
                                    }
                                }
                            };
                            request({
                                url: LRS_ENDPOINT + '/activities/state',
                                qs: search,
                                method: 'GET',
                                headers: {
                                    'X-Experience-API-Version': '1.0.1'
                                }
                            }, function (err, res, body) {
                                body.should.be.type('string');
                                var array = JSON.parse(body);
                                array.should.be.an.instanceOf(Array);

                                for (var i = 0; i < array.length; i++) {
                                    array[i].should.not.eql(parameters.stateId);
                                    array[i].should.not.eql(parameters2.stateId);
                                }
                                done();
                            });
                        });
                    });
                });
            });

            it('should DELETE all (Array) restricted to registration', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f7',
                    stateId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                var parameters2 = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    agent: {
                        objectType: 'Agent',
                        account: {
                            homePage: 'http://www.example.com/agentId/1',
                            name: 'Rick James'
                        }
                    },
                    registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f8',
                    stateId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/state',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/state',
                        qs: parameters2,
                        method: 'POST',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString()
                        },
                        json: document
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        var toDelete = {
                            activityId: 'http://www.example.com/activityId/hashset',
                            agent: {
                                objectType: 'Agent',
                                account: {
                                    homePage: 'http://www.example.com/agentId/1',
                                    name: 'Rick James'
                                }
                            },
                            registration: 'ec531277-b57b-4c15-8d91-d292c5b2b8f8'
                        };
                        request({
                            url: LRS_ENDPOINT + '/activities/state',
                            qs: toDelete,
                            method: 'DELETE',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            res.statusCode.should.equal(204);

                            var search = {
                                activityId: 'http://www.example.com/activityId/hashset',
                                agent: {
                                    objectType: 'Agent',
                                    account: {
                                        homePage: 'http://www.example.com/agentId/1',
                                        name: 'Rick James'
                                    }
                                }
                            };
                            request({
                                url: LRS_ENDPOINT + '/activities/state',
                                qs: search,
                                method: 'GET',
                                headers: {
                                    'X-Experience-API-Version': '1.0.1'
                                }
                            }, function (err, res, body) {
                                body.should.be.type('string');
                                var array = JSON.parse(body);
                                array.should.be.an.instanceOf(Array);

                                var found = false;
                                for (var i = 0; i < array.length; i++) {
                                    array[i].should.not.eql(parameters2.stateId);
                                    if (array[i] === parameters.stateId) {
                                        found = true;
                                    }
                                }
                                found.should.be.true;
                                done();
                            });
                        });
                    });
                });
            });
        });

        describe('Activity Document API Test', function () {
            it('should GET', function (done) {
                var parameters = {
                    activityId: "http://www.example.com/activityId/hashset",
                    profileId: helper.generateUUID()
                };
                var document = {
                    "y": "car",
                    "z": "van"
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/profile',
                        qs: parameters,
                        method: 'GET',
                        headers: {
                            'X-Experience-API-Version': '1.0.1'
                        }
                    }, function (err, res, body) {
                        var etag = res.headers['etag'];
                        etag.should.be.ok;
                        etag.should.eql(getSHA1Sum(document));

                        var responseBody = JSON.parse(body);
                        responseBody.y.should.equal(document.y);
                        responseBody.z.should.equal(document.z);
                        done();
                    });
                });
            });

            it('should fail GET when missing activityId', function (done) {
                var parameters = {
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail GET when activityId is not type of string', function (done) {
                var parameters = {
                    activityId: {
                        "objectType": "object"
                    },
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail GET when profileId is not type of String', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: {
                        "fail": "test"
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail GET all when since is not type of Timestamp', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    since: "should fail"
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when missing profileId', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when missing activityId', function (done) {
                var parameters = {
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when activityId is not type of string', function (done) {
                var parameters = {
                    activityId: {
                        "objectType": "object"
                    },
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when profileId is not type of String', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: {
                        "fail": "test"
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when missing profileId', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when missing activityId', function (done) {
                var parameters = {
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when activityId is not type of string', function (done) {
                var parameters = {
                    activityId: {
                        "objectType": "object"
                    },
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when profileId is not type of String', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: {
                        "fail": "test"
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when missing profileId', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when missing activityId', function (done) {
                var parameters = {
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when activityId is not type of string', function (done) {
                var parameters = {
                    activityId: {
                        "objectType": "object"
                    },
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when profileId is not type of String', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: {
                        "fail": "test"
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should store a new document and return status code 204', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);
                    done();
                });
            });

            it('should retrieve on GET profileId', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/profile',
                        qs: parameters,
                        method: 'GET',
                        headers: {
                            'X-Experience-API-Version': '1.0.1'
                        }
                    }, function (err, res, body) {
                        var responseBody = JSON.parse(body);
                        responseBody.y.should.equal(document.y);
                        responseBody.z.should.equal(document.z);
                        done();
                    });
                });
            });

            it('should merge document when type is JSON', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/profile',
                        qs: parameters,
                        method: 'POST',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString()
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        request({
                            url: LRS_ENDPOINT + '/activities/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            responseBody.x.should.equal(document2.x);
                            responseBody.y.should.equal(document2.y);
                            responseBody.z.should.equal(document.z);
                            done();
                        });
                    });
                });
            });

            it('should GET all (Array) when missing profileId', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    body.should.be.type('string');
                    var array = JSON.parse(body);
                    array.should.be.an.instanceOf(Array);
                    done();
                });
            });

            it('should GET all (Array) using since', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                var parameters2 = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/profile',
                        qs: parameters2,
                        method: 'POST',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date(2000, 0, 1)).toISOString()
                        },
                        json: document
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        var search = {
                            activityId: 'http://www.example.com/activityId/hashset',
                            since: (new Date(2010, 0, 1)).toISOString()
                        };
                        request({
                            url: LRS_ENDPOINT + '/activities/profile',
                            qs: search,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            body.should.be.type('string');
                            var array = JSON.parse(body);
                            array.should.be.an.instanceOf(Array);

                            var found = false;
                            for (var i = 0; i < array.length; i++) {
                                array[i].should.not.eql(parameters2.profileId);
                                if (array[i] === parameters.profileId) {
                                    found = true;
                                }
                            }
                            found.should.be.true;
                            done();
                        });
                    });
                });
            });

            it('should fail PUT on existing document when if-match / if-none-match missing', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/profile',
                        qs: parameters,
                        method: 'PUT',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString()
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(409);

                        request({
                            url: LRS_ENDPOINT + '/activities/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            (responseBody.x === undefined).should.be.true;
                            responseBody.y.should.equal(document.y);
                            responseBody.z.should.equal(document.z);
                            done();
                        });
                    });
                });
            });

            it('should fail PUT on existing document when if-match does not match', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/profile',
                        qs: parameters,
                        method: 'PUT',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString(),
                            'if-match': getSHA1Sum(document) + "invalid"
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(412);

                        request({
                            url: LRS_ENDPOINT + '/activities/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            (responseBody.x === undefined).should.be.true;
                            responseBody.y.should.equal(document.y);
                            responseBody.z.should.equal(document.z);
                            done();
                        });
                    });
                });
            });

            it('should fail PUT on existing document when if-none-match matches', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/profile',
                        qs: parameters,
                        method: 'PUT',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString(),
                            'if-none-match': getSHA1Sum(document)
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(412);

                        request({
                            url: LRS_ENDPOINT + '/activities/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            (responseBody.x === undefined).should.be.true;
                            responseBody.y.should.equal(document.y);
                            responseBody.z.should.equal(document.z);
                            done();
                        });
                    });
                });
            });

            it('should PUT on existing document when if-match matches', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/profile',
                        qs: parameters,
                        method: 'PUT',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString(),
                            'if-match': getSHA1Sum(document)
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        request({
                            url: LRS_ENDPOINT + '/activities/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            (responseBody.z === undefined).should.be.true;
                            responseBody.x.should.equal(document2.x);
                            responseBody.y.should.equal(document2.y);
                            done();
                        });
                    });
                });
            });

            it('should PUT on existing document when if-none-match does not match', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/profile',
                        qs: parameters,
                        method: 'PUT',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString(),
                            'if-none-match': getSHA1Sum(document) + "pass"
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        request({
                            url: LRS_ENDPOINT + '/activities/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            (responseBody.z === undefined).should.be.true;
                            responseBody.x.should.equal(document2.x);
                            responseBody.y.should.equal(document2.y);
                            done();
                        });
                    });
                });
            });

            it('should DELETE', function (done) {
                var parameters = {
                    activityId: 'http://www.example.com/activityId/hashset',
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                request({
                    url: LRS_ENDPOINT + '/activities/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/activities/profile',
                        qs: parameters,
                        method: 'DELETE',
                        headers: {
                            'X-Experience-API-Version': '1.0.1'
                        }
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        request({
                            url: LRS_ENDPOINT + '/activities/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            res.statusCode.should.equal(200);
                            body.should.be.empty;
                            done();
                        });
                    });
                });
            });
        });

        describe('Agent Document API Test', function () {
            it('should GET', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: helper.generateUUID()
                };
                var document = {
                    "y": "car",
                    "z": "van"
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/agents/profile',
                        qs: parameters,
                        method: 'GET',
                        headers: {
                            'X-Experience-API-Version': '1.0.1'
                        }
                    }, function (err, res, body) {
                        var etag = res.headers['etag'];
                        etag.should.be.ok;
                        etag.should.eql(getSHA1Sum(document));

                        var responseBody = JSON.parse(body);
                        responseBody.y.should.equal(document.y);
                        responseBody.z.should.equal(document.z);
                        done();
                    });
                });
            });

            it('should fail GET when missing agent', function (done) {
                var parameters = {
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail GET when agent is not type of actor', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "object"
                    },
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail GET when profileId is not type of String', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: {
                        "fail": "test"
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail GET all when since is not type of Timestamp', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    since: "should fail"
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when missing profileId', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when missing agent', function (done) {
                var parameters = {
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when agent is not type of string', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "object"
                    },
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail PUT when profileId is not type of String', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: {
                        "fail": "test"
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'PUT',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when missing profileId', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when missing agent', function (done) {
                var parameters = {
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when agent is not type of string', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "object"
                    },
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail POST when profileId is not type of String', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: {
                        "fail": "test"
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when missing profileId', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when missing agent', function (done) {
                var parameters = {
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when agent is not type of string', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "object"
                    },
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should fail DELETE when profileId is not type of String', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: {
                        "fail": "test"
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'DELETE',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    res.statusCode.should.equal(400);
                    done();
                });
            });

            it('should store a new document and return status code 204', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);
                    done();
                });
            });

            it('should retrieve on GET profileId', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/agents/profile',
                        qs: parameters,
                        method: 'GET',
                        headers: {
                            'X-Experience-API-Version': '1.0.1'
                        }
                    }, function (err, res, body) {
                        var responseBody = JSON.parse(body);
                        responseBody.y.should.equal(document.y);
                        responseBody.z.should.equal(document.z);
                        done();
                    });
                });
            });

            it('should merge document when type is JSON', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/agents/profile',
                        qs: parameters,
                        method: 'POST',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString()
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        request({
                            url: LRS_ENDPOINT + '/agents/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            responseBody.x.should.equal(document2.x);
                            responseBody.y.should.equal(document2.y);
                            responseBody.z.should.equal(document.z);
                            done();
                        });
                    });
                });
            });

            it('should GET all (Array) when missing profileId', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    }
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'GET',
                    headers: {
                        'X-Experience-API-Version': '1.0.1'
                    }
                }, function (err, res, body) {
                    body.should.be.type('string');
                    var array = JSON.parse(body);
                    array.should.be.an.instanceOf(Array);
                    done();
                });
            });

            it('should GET all (Array) using since', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                var parameters2 = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: helper.generateUUID()
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/agents/profile',
                        qs: parameters2,
                        method: 'POST',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date(2000, 0, 1)).toISOString()
                        },
                        json: document
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        var search = {
                            agent: {
                                "objectType": "Agent",
                                "account": {
                                    "homePage": "http://www.example.com/agentId/1",
                                    "name": "Rick James"
                                }
                            },
                            since: (new Date(2010, 0, 1)).toISOString()
                        };
                        request({
                            url: LRS_ENDPOINT + '/agents/profile',
                            qs: search,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            body.should.be.type('string');
                            var array = JSON.parse(body);
                            array.should.be.an.instanceOf(Array);

                            var found = false;
                            for (var i = 0; i < array.length; i++) {
                                array[i].should.not.eql(parameters2.profileId);
                                if (array[i] === parameters.profileId) {
                                    found = true;
                                }
                            }
                            found.should.be.true;
                            done();
                        });
                    });
                });
            });

            it('should fail PUT on existing document when if-match / if-none-match missing', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/agents/profile',
                        qs: parameters,
                        method: 'PUT',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString()
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(409);

                        request({
                            url: LRS_ENDPOINT + '/agents/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            (responseBody.x === undefined).should.be.true;
                            responseBody.y.should.equal(document.y);
                            responseBody.z.should.equal(document.z);
                            done();
                        });
                    });
                });
            });

            it('should fail PUT on existing document when if-match does not match', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/agents/profile',
                        qs: parameters,
                        method: 'PUT',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString(),
                            'if-match': getSHA1Sum(document) + "invalid"
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(412);

                        request({
                            url: LRS_ENDPOINT + '/agents/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            (responseBody.x === undefined).should.be.true;
                            responseBody.y.should.equal(document.y);
                            responseBody.z.should.equal(document.z);
                            done();
                        });
                    });
                });
            });

            it('should fail PUT on existing document when if-none-match matches', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/agents/profile',
                        qs: parameters,
                        method: 'PUT',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString(),
                            'if-none-match': getSHA1Sum(document)
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(412);

                        request({
                            url: LRS_ENDPOINT + '/agents/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            (responseBody.x === undefined).should.be.true;
                            responseBody.y.should.equal(document.y);
                            responseBody.z.should.equal(document.z);
                            done();
                        });
                    });
                });
            });

            it('should PUT on existing document when if-match matches', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/agents/profile',
                        qs: parameters,
                        method: 'PUT',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString(),
                            'if-match': getSHA1Sum(document)
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        request({
                            url: LRS_ENDPOINT + '/agents/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            (responseBody.z === undefined).should.be.true;
                            responseBody.x.should.equal(document2.x);
                            responseBody.y.should.equal(document2.y);
                            done();
                        });
                    });
                });
            });

            it('should PUT on existing document when if-none-match does not match', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };
                var document2 = {
                    x: 'foo',
                    y: 'bar'
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/agents/profile',
                        qs: parameters,
                        method: 'PUT',
                        headers: {
                            'X-Experience-API-Version': '1.0.1',
                            'updated': (new Date()).toISOString(),
                            'if-none-match': getSHA1Sum(document) + "pass"
                        },
                        json: document2
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        request({
                            url: LRS_ENDPOINT + '/agents/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            var responseBody = JSON.parse(body);
                            (responseBody.z === undefined).should.be.true;
                            responseBody.x.should.equal(document2.x);
                            responseBody.y.should.equal(document2.y);
                            done();
                        });
                    });
                });
            });

            it('should DELETE', function (done) {
                var parameters = {
                    agent: {
                        "objectType": "Agent",
                        "account": {
                            "homePage": "http://www.example.com/agentId/1",
                            "name": "Rick James"
                        }
                    },
                    profileId: helper.generateUUID()
                };
                var document = {
                    y: 'car',
                    z: 'van'
                };

                request({
                    url: LRS_ENDPOINT + '/agents/profile',
                    qs: parameters,
                    method: 'POST',
                    headers: {
                        'X-Experience-API-Version': '1.0.1',
                        'updated': (new Date()).toISOString()
                    },
                    json: document
                }, function (err, res, body) {
                    res.statusCode.should.equal(204);

                    request({
                        url: LRS_ENDPOINT + '/agents/profile',
                        qs: parameters,
                        method: 'DELETE',
                        headers: {
                            'X-Experience-API-Version': '1.0.1'
                        }
                    }, function (err, res, body) {
                        res.statusCode.should.equal(204);

                        request({
                            url: LRS_ENDPOINT + '/agents/profile',
                            qs: parameters,
                            method: 'GET',
                            headers: {
                                'X-Experience-API-Version': '1.0.1'
                            }
                        }, function (err, res, body) {
                            res.statusCode.should.equal(200);
                            body.should.be.empty;
                            done();
                        });
                    });
                });
            });
        });
    });
}(process, require('super-request'), require('should'), require('./../helper')));
