"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
__export(require("../config"));
__export(require("./auth"));
var AuthService = /** @class */ (function () {
    function AuthService(http, config) {
        this.http = http;
        this.config = config;
    }
    AuthService.prototype.mukin = function (auth, catchError) {
        var _this = this;
        return this.http.post(config_1.Config.apiUrl + "auth/mukin", JSON.stringify(auth), { headers: this.getCommonHeaders() })
            .map(function (response) { return response.json(); })
            .do(function (data) { return _this.config.setLDC(data); })
            .catch(function (err, an) { return catchError(err); });
    };
    AuthService.prototype.login = function (auth, catchError) {
        var _this = this;
        return this.http.post(config_1.Config.apiUrl + "auth/login", JSON.stringify(auth), { headers: this.getCommonHeaders() })
            .map(function (response) { return response.json(); })
            .do(function (data) { return _this.config.setLDC(data); })
            .catch(function (err, an) { return catchError(err); });
    };
    AuthService.prototype.register = function (auth, catchError) {
        var _this = this;
        return this.http.post(config_1.Config.apiUrl + "auth/signin", JSON.stringify(auth), { headers: this.getCommonHeaders() })
            .map(function (response) { return response.json(); })
            .do(function (data) { return _this.config.setLDC(data); })
            .catch(function (err, an) { return catchError(err); });
        // .catch(this.handleErrors);
    };
    AuthService.prototype.handleErrors = function (error) {
        console.log('error : catch');
        return 'server-error '; // Observable.throw(error);
    };
    AuthService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        return headers;
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, config_1.Config])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCxtQ0FBaUM7QUFDakMsZ0NBQThCO0FBQzlCLGlDQUErQjtBQUcvQixvQ0FBbUM7QUFDbkMsK0JBQTBCO0FBQzFCLDRCQUF1QjtBQUd2QjtJQUNFLHFCQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFDM0QsMkJBQUssR0FBTCxVQUFNLElBQWdCLEVBQUUsVUFBb0I7UUFBNUMsaUJBU0M7UUFSQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLGVBQU0sQ0FBQyxNQUFNLEdBQUcsWUFBWSxFQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUNwQixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUNyQzthQUNFLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7YUFDaEMsRUFBRSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQXhCLENBQXdCLENBQUM7YUFDcEMsS0FBSyxDQUFDLFVBQUMsR0FBRyxFQUFFLEVBQUUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBZixDQUFlLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0QsMkJBQUssR0FBTCxVQUFNLElBQWUsRUFBRSxVQUFvQjtRQUEzQyxpQkFTQztRQVJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsZUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLEVBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ3BCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQ3JDO2FBQ0UsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxFQUFFLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQzthQUNwQyxLQUFLLENBQUMsVUFBQyxHQUFHLEVBQUUsRUFBRSxJQUFLLE9BQUEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRCw4QkFBUSxHQUFSLFVBQVMsSUFBZ0IsRUFBRSxVQUFvQjtRQUEvQyxpQkFVQztRQVRDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsZUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQzdCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQ3BCLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQ3JDO2FBQ0UsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxFQUFFLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQzthQUNwQyxLQUFLLENBQUMsVUFBQyxHQUFHLEVBQUUsRUFBRSxJQUFLLE9BQUEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUFDO1FBQ3ZDLDZCQUE2QjtJQUMvQixDQUFDO0lBR0Qsa0NBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsZUFBZSxDQUFDLENBQUEsMkJBQTJCO0lBQ3BELENBQUM7SUFHRCxzQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBN0NVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FFZSxXQUFJLEVBQWtCLGVBQU07T0FEM0MsV0FBVyxDQThDdkI7SUFBRCxrQkFBQztDQUFBLEFBOUNELElBOENDO0FBOUNZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2RvXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgTG9naW5EYXRhLCBTaWduaW5EYXRhLCBNb2JpbGVEYXRhIH0gZnJvbSBcIi4vYXV0aFwiO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuZXhwb3J0ICogZnJvbSBcIi4uL2NvbmZpZ1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vYXV0aFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgY29uZmlnOiBDb25maWcpIHsgfVxuICBtdWtpbihhdXRoOiBNb2JpbGVEYXRhLCBjYXRjaEVycm9yOiBGdW5jdGlvbikge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcImF1dGgvbXVraW5cIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KGF1dGgpLFxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgKVxuICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuZG8oZGF0YSA9PiB0aGlzLmNvbmZpZy5zZXRMREMoZGF0YSkpIFxuICAgICAgLmNhdGNoKChlcnIsIGFuKSA9PiBjYXRjaEVycm9yKGVycikpO1xuICB9XG4gIGxvZ2luKGF1dGg6IExvZ2luRGF0YSwgY2F0Y2hFcnJvcjogRnVuY3Rpb24pIHsgXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgQ29uZmlnLmFwaVVybCArIFwiYXV0aC9sb2dpblwiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoYXV0aCksXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICApXG4gICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5kbyhkYXRhID0+IHRoaXMuY29uZmlnLnNldExEQyhkYXRhKSlcbiAgICAgIC5jYXRjaCgoZXJyLCBhbikgPT4gY2F0Y2hFcnJvcihlcnIpKTtcbiAgfVxuICByZWdpc3RlcihhdXRoOiBTaWduaW5EYXRhLCBjYXRjaEVycm9yOiBGdW5jdGlvbikge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIENvbmZpZy5hcGlVcmwgKyBcImF1dGgvc2lnbmluXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeShhdXRoKSxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgIClcbiAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmRvKGRhdGEgPT4gdGhpcy5jb25maWcuc2V0TERDKGRhdGEpKVxuICAgICAgLmNhdGNoKChlcnIsIGFuKSA9PiBjYXRjaEVycm9yKGVycikpO1xuICAgIC8vIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3IgOiBjYXRjaCcpO1xuICAgIHJldHVybiAnc2VydmVyLWVycm9yICc7Ly8gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cblxuXG4gIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxufVxuIl19