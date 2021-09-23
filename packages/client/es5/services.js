"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapService = void 0;
var common_1 = require("./common");
var wrapService = function (service, _id) {
    if (_id === void 0) { _id = 'id'; }
    var index = {};
    var include = function (data) {
        (0, common_1.feathersResultToArray)(data).forEach(function (obj) {
            index[obj[_id]] = obj;
        });
        return data;
    };
    var exclude = function (data) {
        (0, common_1.feathersResultToArray)(data).forEach(function (obj) {
            if (index[obj[_id]]) {
                delete index[obj[_id]];
            }
        });
        return data;
    };
    service.get = (0, common_1.replaceAsync)(service.get.bind(service), include, undefined, undefined, undefined, function (id) {
        var cached = index[id];
        if (cached) {
            return cached;
        }
        return undefined;
    });
    service.find = (0, common_1.safeReplaceAsync)(service.find.bind(service), include);
    service.create = (0, common_1.safeReplaceAsync)(service.create.bind(service), include);
    service.update = (0, common_1.safeReplaceAsync)(service.update.bind(service), include);
    service.patch = (0, common_1.safeReplaceAsync)(service.patch.bind(service), include);
    service.remove = (0, common_1.safeReplaceAsync)(service.remove.bind(service), exclude);
    service.cache = index;
    service.getFromCache = function (id) { return index[id]; };
    return service;
};
exports.wrapService = wrapService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBUUEsbUNBQWdGO0FBb0J6RSxJQUFNLFdBQVcsR0FBRyxVQUsxQixPQUFtQixFQUNuQixHQUFrQjtJQUFsQixvQkFBQSxFQUFBLE1BQVMsSUFBUztJQUVsQixJQUFJLEtBQUssR0FBc0IsRUFBRSxDQUFBO0lBRWpDLElBQU0sT0FBTyxHQUFHLFVBQW1DLElBQU87UUFDekQsSUFBQSw4QkFBcUIsRUFBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1lBQ3RDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUE7UUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLElBQUksQ0FBQTtJQUNaLENBQUMsQ0FBQTtJQUNELElBQU0sT0FBTyxHQUFHLFVBQW1DLElBQU87UUFDekQsSUFBQSw4QkFBcUIsRUFBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1lBQ3RDLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNwQixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTthQUN0QjtRQUNGLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUE7SUFDWixDQUFDLENBQUE7SUFFRCxPQUFPLENBQUMsR0FBRyxHQUFHLElBQUEscUJBQVksRUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQ3pCLE9BQU8sRUFDUCxTQUFTLEVBQ1QsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFBLEVBQUU7UUFDRCxJQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDeEIsSUFBSSxNQUFNLEVBQUU7WUFDWCxPQUFPLE1BQU0sQ0FBQTtTQUNiO1FBQ0QsT0FBTyxTQUFTLENBQUE7SUFDakIsQ0FBQyxDQUNELENBQUE7SUFDRCxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUEseUJBQWdCLEVBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDcEUsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFBLHlCQUFnQixFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3hFLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBQSx5QkFBZ0IsRUFBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQTtJQUN4RSxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUEseUJBQWdCLEVBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDdEUsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFBLHlCQUFnQixFQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBRXhFLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3JCLE9BQU8sQ0FBQyxZQUFZLEdBQUcsVUFBQyxFQUFNLElBQUssT0FBQSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQVQsQ0FBUyxDQUFBO0lBRTVDLE9BQU8sT0FBWSxDQUFBO0FBQ3BCLENBQUMsQ0FBQTtBQWpEWSxRQUFBLFdBQVcsZUFpRHZCIn0=