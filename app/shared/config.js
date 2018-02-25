"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Config = /** @class */ (function () {
    function Config() {
    }
    Config_1 = Config;
    Config.prototype.setLDC = function (data) {
        if (data && data.success && data.tiassResults)
            this.LCD = data.tiassResults;
    };
    Object.defineProperty(Config.prototype, "LCD", {
        get: function () {
            return Config_1._LCD;
        },
        set: function (data) {
            Config_1._LCD = data;
        },
        enumerable: true,
        configurable: true
    });
    Config.apiUrl = "http://10.0.3.2:8080/TiassControllers/tiasss/";
    Config._LCD = undefined;
    Config = Config_1 = __decorate([
        core_1.Injectable()
    ], Config);
    return Config;
    var Config_1;
}());
exports.Config = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDO0lBQUE7SUFnQkEsQ0FBQztlQWhCWSxNQUFNO0lBSVYsdUJBQU0sR0FBYixVQUFjLElBQVM7UUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQztZQUM1QyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDakMsQ0FBQztJQUNELHNCQUFXLHVCQUFHO2FBSWQ7WUFFRSxNQUFNLENBQUMsUUFBTSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBUEQsVUFBZSxJQUFxQjtZQUVsQyxRQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNwQixDQUFDOzs7T0FBQTtJQVZNLGFBQU0sR0FBRywrQ0FBK0MsQ0FBQztJQUNqRCxXQUFJLEdBQW9CLFNBQVMsQ0FBQztJQUZ0QyxNQUFNO1FBRGxCLGlCQUFVLEVBQUU7T0FDQSxNQUFNLENBZ0JsQjtJQUFELGFBQUM7O0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExvZ2luRGF0YUNsaWVudCB9IGZyb20gXCIuL2F1dGgvYXV0aFwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZyB7XG4gIHN0YXRpYyBhcGlVcmwgPSBcImh0dHA6Ly8xMC4wLjMuMjo4MDgwL1RpYXNzQ29udHJvbGxlcnMvdGlhc3NzL1wiO1xuICBwcml2YXRlIHN0YXRpYyBfTENEOiBMb2dpbkRhdGFDbGllbnQgPSB1bmRlZmluZWQ7XG5cbiAgcHVibGljIHNldExEQyhkYXRhOiBhbnkpIHtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLnN1Y2Nlc3MgJiYgZGF0YS50aWFzc1Jlc3VsdHMpXG4gICAgICB0aGlzLkxDRCA9IGRhdGEudGlhc3NSZXN1bHRzO1xuICB9XG4gIHB1YmxpYyBzZXQgTENEKGRhdGE6IExvZ2luRGF0YUNsaWVudCkge1xuXG4gICAgQ29uZmlnLl9MQ0QgPSBkYXRhXG4gIH1cbiAgcHVibGljIGdldCBMQ0QoKTogTG9naW5EYXRhQ2xpZW50IHtcblxuICAgIHJldHVybiBDb25maWcuX0xDRDtcbiAgfVxufSAiXX0=