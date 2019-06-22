"use strict";

const get = __importDefault(require("./controller/get"));
const post = __importDefault(require("./controller/post"));
const getTest = __importDefault(require("./controller/getTest"));

exports.default = function (route, tempPath) {
    route.get('/', (req, res) => {
        return get.default(req, res);
    });
    route.post('/', (req, res) => {
        return post.default(req, res, tempPath);
    });
    route.get('/test', (req, res) => {
        return getTest.default(req, res);
    });
}