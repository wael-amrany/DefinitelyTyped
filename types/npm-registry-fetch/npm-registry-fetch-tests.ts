import fetch = require("npm-registry-fetch");
import { Agent } from "http";
import { Integrity } from "ssri";
import npmlog = require("npmlog");

const auth: fetch.AuthOptions = {
    "always-auth": true,
    email: "nobody@mail.com",
    otp: 123456,
    password: "password",
    username: "nobody",
    token: "token",
};

const retry: fetch.FetchRetryOptions = {
    fetchRetries: 42,
    fetchRetryFactor: 10,
    fetchRetryMaxtimeout: 10000,
    fetchRetryMintimeout: 60000,
};

const opts: fetch.Options = {
    alwaysAuth: false,
    fetchRetries: 42,
    fetchRetryFactor: 10,
    fetchRetryMaxtimeout: 10000,
    fetchRetryMintimeout: 60000,
    forceAuth: auth,
    ignoreBody: true,
    isFromCI: false,
    localAddress: "address.local",
    mapJSON: obj => obj.toString(),
    maxSockets: 42,
    npmSession: "session",
    preferOffline: false,
    preferOnline: true,
    projectScope: "scope",
    strictSSL: true,
    userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3891.0 Safari/537.36 Edg/78.0.268.3",
    agent: new Agent(),
    body: "sometext",
    ca: new Buffer(1000),
    cache: "./my/cache/dir",
    cert: "XXXX",
    email: "nobody@mail.com",
    gzip: true,
    headers: {
        "Content-Type": "text/plain",
    },
    integrity: new Integrity(),
    key: "XXXX",
    log: npmlog,
    method: "GET",
    noproxy: false,
    offline: false,
    otp: 123456,
    password: "password",
    proxy: "https://my.proxy",
    query: { foo: "bar" },
    registry: "https://registry.npmjs.org",
    ...retry,
    scope: "scope",
    spec: "@scope/package",
    timeout: 60000,
    token: "token",
    username: "nobody",
    "@myscope:registry": "https://scope-specific.registry/",
    "//registry.npmjs.org/:password": "password",
    "//registry.npmjs.org/:token": "token",
    "//registry.npmjs.org/:username": "nobody",
};

const retryObject: fetch.FetchRetryObjectOptions = {
    retries: 42,
    factor: 10,
    maxTimeout: 10000,
    minTimeout: 60000,
};

const optsWithRetry: fetch.Options = {
    retry: retryObject,
};

fetch("/"); // $ExpectType Promise<Response>
fetch("/", opts); // $ExpectType Promise<Response>
fetch("/", optsWithRetry); // $ExpectType Promise<Response>
fetch.json("/"); // $ExpectType Promise<Record<string, unknown>>
fetch.json("/", opts); // $ExpectType Promise<Record<string, unknown>>
fetch.json.stream("/-/user/zkat/package", "$*"); // $ExpectType ReadWriteStream
fetch.json.stream("/-/user/zkat/package", "$*", opts); // $ExpectType ReadWriteStream
fetch.pickRegistry("npm-registry-fetch@latest"); // $ExpectType string
fetch.pickRegistry("npm-registry-fetch@latest", opts); // $ExpectType string
