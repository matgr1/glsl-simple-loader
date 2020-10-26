"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var GlslSimpleInclude = require("glsl-simple-include");
var ReadTextFile = require("read-text-file");
var path = require("path");
function loader(source) {
    this.cacheable();
    var callback = this.async();
    loaderPromise(this, source).then(function (result) {
        var resultModule = "module.exports = " + JSON.stringify(result);
        callback(null, resultModule);
    }, function (error) {
        if ((error = null) || (error == undefined)) {
            error = "GLSL loader failed";
        }
        callback(error);
    });
}
function loaderPromise(loader, entryScript) {
    return __awaiter(this, void 0, void 0, function () {
        var entryScriptPath;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    entryScriptPath = loader.resourcePath;
                    if (typeof (entryScriptPath) !== "string") {
                        throw new Error("Invalid resourcePath");
                    }
                    return [4 /*yield*/, GlslSimpleInclude.processIncludes(ReadTextFile.read, path, entryScriptPath, entryScript, null, function (newPath) {
                            loader.addDependency(newPath);
                        })];
                case 1: 
                // TODO: this should use loader.resolve to resolve dependency paths... (looks like you give it 
                //		 "context", the relative path, and a callback taking (error, resolved))...
                return [2 /*return*/, _a.sent()];
            }
        });
    });
}
module.exports = loader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xzbC1zaW1wbGUtbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dsc2wtc2ltcGxlLWxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBeUQ7QUFDekQsNkNBQStDO0FBSS9DLElBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUU3QixnQkFBZ0IsTUFBYztJQUU3QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFakIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTVCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMvQixVQUFVLE1BQU07UUFFZixJQUFJLFlBQVksR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxFQUNELFVBQVUsS0FBSztRQUVkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLEVBQzFDO1lBQ0MsS0FBSyxHQUFHLG9CQUFvQixDQUFDO1NBQzdCO1FBRUQsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELHVCQUE2QixNQUFXLEVBQUUsV0FBbUI7Ozs7OztvQkFFeEQsZUFBZSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7b0JBRTFDLElBQUksT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLFFBQVEsRUFDekM7d0JBQ0MsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO3FCQUN4QztvQkFLTSxxQkFBTSxpQkFBaUIsQ0FBQyxlQUFlLENBQzdDLFlBQVksQ0FBQyxJQUFJLEVBQ2pCLElBQUksRUFDSixlQUFlLEVBQ2YsV0FBVyxFQUNYLElBQUksRUFDSixVQUFVLE9BQU87NEJBRWhCLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQy9CLENBQUMsQ0FBQyxFQUFBOztnQkFaSCwrRkFBK0Y7Z0JBQy9GLDhFQUE4RTtnQkFFOUUsc0JBQU8sU0FTSixFQUFDOzs7O0NBQ0o7QUFFRCxpQkFBUyxNQUFNLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBHbHNsU2ltcGxlSW5jbHVkZSBmcm9tIFwiZ2xzbC1zaW1wbGUtaW5jbHVkZVwiO1xyXG5pbXBvcnQgKiBhcyBSZWFkVGV4dEZpbGUgZnJvbSBcInJlYWQtdGV4dC1maWxlXCI7XHJcblxyXG4vLyBUT0RPOiBnZXQgdGhlIHR5cGVzIHdvcmtpbmcgYWdhaW4uLi5cclxuZGVjbGFyZSBsZXQgcmVxdWlyZTogYW55O1xyXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcblxyXG5mdW5jdGlvbiBsb2FkZXIoc291cmNlOiBzdHJpbmcpXHJcbntcclxuXHR0aGlzLmNhY2hlYWJsZSgpO1xyXG5cclxuXHRsZXQgY2FsbGJhY2sgPSB0aGlzLmFzeW5jKCk7XHJcblxyXG5cdGxvYWRlclByb21pc2UodGhpcywgc291cmNlKS50aGVuKFxyXG5cdFx0ZnVuY3Rpb24gKHJlc3VsdClcclxuXHRcdHtcclxuXHRcdFx0bGV0IHJlc3VsdE1vZHVsZSA9IFwibW9kdWxlLmV4cG9ydHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XHJcblx0XHRcdGNhbGxiYWNrKG51bGwsIHJlc3VsdE1vZHVsZSk7XHJcblx0XHR9LFxyXG5cdFx0ZnVuY3Rpb24gKGVycm9yKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoKGVycm9yID0gbnVsbCkgfHwgKGVycm9yID09IHVuZGVmaW5lZCkpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRlcnJvciA9IFwiR0xTTCBsb2FkZXIgZmFpbGVkXCI7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGNhbGxiYWNrKGVycm9yKTtcclxuXHRcdH0pO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkZXJQcm9taXNlKGxvYWRlcjogYW55LCBlbnRyeVNjcmlwdDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+XHJcbntcclxuXHRsZXQgZW50cnlTY3JpcHRQYXRoID0gbG9hZGVyLnJlc291cmNlUGF0aDtcclxuXHJcblx0aWYgKHR5cGVvZiAoZW50cnlTY3JpcHRQYXRoKSAhPT0gXCJzdHJpbmdcIilcclxuXHR7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHJlc291cmNlUGF0aFwiKTtcclxuXHR9XHJcblxyXG5cdC8vIFRPRE86IHRoaXMgc2hvdWxkIHVzZSBsb2FkZXIucmVzb2x2ZSB0byByZXNvbHZlIGRlcGVuZGVuY3kgcGF0aHMuLi4gKGxvb2tzIGxpa2UgeW91IGdpdmUgaXQgXHJcblx0Ly9cdFx0IFwiY29udGV4dFwiLCB0aGUgcmVsYXRpdmUgcGF0aCwgYW5kIGEgY2FsbGJhY2sgdGFraW5nIChlcnJvciwgcmVzb2x2ZWQpKS4uLlxyXG5cclxuXHRyZXR1cm4gYXdhaXQgR2xzbFNpbXBsZUluY2x1ZGUucHJvY2Vzc0luY2x1ZGVzKFxyXG5cdFx0UmVhZFRleHRGaWxlLnJlYWQsXHJcblx0XHRwYXRoLFxyXG5cdFx0ZW50cnlTY3JpcHRQYXRoLFxyXG5cdFx0ZW50cnlTY3JpcHQsXHJcblx0XHRudWxsLFxyXG5cdFx0ZnVuY3Rpb24gKG5ld1BhdGgpXHJcblx0XHR7XHJcblx0XHRcdGxvYWRlci5hZGREZXBlbmRlbmN5KG5ld1BhdGgpO1xyXG5cdFx0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCA9IGxvYWRlcjsiXX0=