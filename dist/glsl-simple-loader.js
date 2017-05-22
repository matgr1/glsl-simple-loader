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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xzbC1zaW1wbGUtbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dsc2wtc2ltcGxlLWxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1REFBeUQ7QUFDekQsNkNBQStDO0FBQy9DLDJCQUE4QjtBQUU5QixnQkFBZ0IsTUFBYztJQUU3QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFFakIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRTVCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUMvQixVQUFVLE1BQU07UUFFZixJQUFJLFlBQVksR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hFLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQyxFQUNELFVBQVUsS0FBSztRQUVkLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQzNDLENBQUM7WUFDQSxLQUFLLEdBQUcsb0JBQW9CLENBQUM7UUFDOUIsQ0FBQztRQUVELFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCx1QkFBNkIsTUFBVyxFQUFFLFdBQW1COztZQUV4RCxlQUFlOzs7O3NDQUFHLE1BQU0sQ0FBQyxZQUFZO29CQUV6QyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEtBQUssUUFBUSxDQUFDLENBQzFDLENBQUM7d0JBQ0EsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO29CQUN6QyxDQUFDO29CQUtNLHFCQUFNLGlCQUFpQixDQUFDLGVBQWUsQ0FDN0MsWUFBWSxDQUFDLElBQUksRUFDakIsSUFBSSxFQUNKLGVBQWUsRUFDZixXQUFXLEVBQ1gsSUFBSSxFQUNKLFVBQVUsT0FBTzs0QkFFaEIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDL0IsQ0FBQyxDQUFDLEVBQUE7O2dCQVpILCtGQUErRjtnQkFDL0YsOEVBQThFO2dCQUU5RSxzQkFBTyxTQVNKLEVBQUM7Ozs7Q0FDSjtBQUVELGlCQUFTLE1BQU0sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIEdsc2xTaW1wbGVJbmNsdWRlIGZyb20gXCJnbHNsLXNpbXBsZS1pbmNsdWRlXCI7XG5pbXBvcnQgKiBhcyBSZWFkVGV4dEZpbGUgZnJvbSBcInJlYWQtdGV4dC1maWxlXCI7XG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5mdW5jdGlvbiBsb2FkZXIoc291cmNlOiBzdHJpbmcpXG57XG5cdHRoaXMuY2FjaGVhYmxlKCk7XG5cblx0bGV0IGNhbGxiYWNrID0gdGhpcy5hc3luYygpO1xuXG5cdGxvYWRlclByb21pc2UodGhpcywgc291cmNlKS50aGVuKFxuXHRcdGZ1bmN0aW9uIChyZXN1bHQpXG5cdFx0e1xuXHRcdFx0bGV0IHJlc3VsdE1vZHVsZSA9IFwibW9kdWxlLmV4cG9ydHMgPSBcIiArIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG5cdFx0XHRjYWxsYmFjayhudWxsLCByZXN1bHRNb2R1bGUpO1xuXHRcdH0sXG5cdFx0ZnVuY3Rpb24gKGVycm9yKVxuXHRcdHtcblx0XHRcdGlmICgoZXJyb3IgPSBudWxsKSB8fCAoZXJyb3IgPT0gdW5kZWZpbmVkKSlcblx0XHRcdHtcblx0XHRcdFx0ZXJyb3IgPSBcIkdMU0wgbG9hZGVyIGZhaWxlZFwiO1xuXHRcdFx0fVxuXG5cdFx0XHRjYWxsYmFjayhlcnJvcik7XG5cdFx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRlclByb21pc2UobG9hZGVyOiBhbnksIGVudHJ5U2NyaXB0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz5cbntcblx0bGV0IGVudHJ5U2NyaXB0UGF0aCA9IGxvYWRlci5yZXNvdXJjZVBhdGg7XG5cblx0aWYgKHR5cGVvZiAoZW50cnlTY3JpcHRQYXRoKSAhPT0gXCJzdHJpbmdcIilcblx0e1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmVzb3VyY2VQYXRoXCIpO1xuXHR9XG5cblx0Ly8gVE9ETzogdGhpcyBzaG91bGQgdXNlIGxvYWRlci5yZXNvbHZlIHRvIHJlc29sdmUgZGVwZW5kZW5jeSBwYXRocy4uLiAobG9va3MgbGlrZSB5b3UgZ2l2ZSBpdCBcblx0Ly9cdFx0IFwiY29udGV4dFwiLCB0aGUgcmVsYXRpdmUgcGF0aCwgYW5kIGEgY2FsbGJhY2sgdGFraW5nIChlcnJvciwgcmVzb2x2ZWQpKS4uLlxuXG5cdHJldHVybiBhd2FpdCBHbHNsU2ltcGxlSW5jbHVkZS5wcm9jZXNzSW5jbHVkZXMoXG5cdFx0UmVhZFRleHRGaWxlLnJlYWQsXG5cdFx0cGF0aCxcblx0XHRlbnRyeVNjcmlwdFBhdGgsXG5cdFx0ZW50cnlTY3JpcHQsXG5cdFx0bnVsbCxcblx0XHRmdW5jdGlvbiAobmV3UGF0aClcblx0XHR7XG5cdFx0XHRsb2FkZXIuYWRkRGVwZW5kZW5jeShuZXdQYXRoKTtcblx0XHR9KTtcbn1cblxuZXhwb3J0ID0gbG9hZGVyOyJdfQ==