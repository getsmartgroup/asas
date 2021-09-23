"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asas = void 0;
var rest_client_1 = __importDefault(require("@feathersjs/rest-client"));
var authentication_client_1 = __importDefault(require("@feathersjs/authentication-client"));
var feathers_1 = __importDefault(require("@feathersjs/feathers"));
var axios_1 = __importDefault(require("axios"));
var asas = function (url) {
    var client = (0, feathers_1.default)();
    var restClient = (0, rest_client_1.default)(url.origin);
    client
        .configure(restClient.axios(axios_1.default.create({
        withCredentials: true
    })))
        .configure((0, authentication_client_1.default)());
    var oAuthLoginURL = function (provider) {
        return url.toString() + 'oauth/' + provider;
    };
    return { client: client, oAuthLoginURL: oAuthLoginURL };
};
exports.asas = asas;
exports.default = exports.asas;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx3RUFBMEM7QUFDMUMsNEZBRTBDO0FBQzFDLGtFQUEyQztBQUMzQyxnREFBeUI7QUFFbEIsSUFBTSxJQUFJLEdBQUcsVUFDbkIsR0FBUTtJQUtSLElBQU0sTUFBTSxHQUFHLElBQUEsa0JBQVEsR0FBSyxDQUFBO0lBRTVCLElBQU0sVUFBVSxHQUFHLElBQUEscUJBQUksRUFBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDbkMsTUFBTTtTQUNKLFNBQVMsQ0FDVCxVQUFVLENBQUMsS0FBSyxDQUNmLGVBQUssQ0FBQyxNQUFNLENBQUM7UUFDWixlQUFlLEVBQUUsSUFBSTtLQUNyQixDQUFDLENBQ0YsQ0FDRDtTQUNBLFNBQVMsQ0FBQyxJQUFBLCtCQUFJLEdBQUUsQ0FBQyxDQUFBO0lBQ25CLElBQU0sYUFBYSxHQUFHLFVBQUMsUUFBZ0I7UUFDdEMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQTtJQUM1QyxDQUFDLENBQUE7SUFDRCxPQUFPLEVBQUUsTUFBTSxRQUFBLEVBQUUsYUFBYSxlQUFBLEVBQUUsQ0FBQTtBQUNqQyxDQUFDLENBQUE7QUF0QlksUUFBQSxJQUFJLFFBc0JoQjtBQUVELGtCQUFlLFlBQUksQ0FBQSJ9