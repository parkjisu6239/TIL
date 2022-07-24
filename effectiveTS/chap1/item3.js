/**
@author kate
@subject Item3. 코드 생성과 타입이 관계 없음을 이해하기
**/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
// ---------------------------------- 💙 타입오류가 있어도 컴파일 가능 💙 ----------------------------------- //
var hello = "hello";
hello = 10; // 오류지만 JS로 컴파일된다.
// ❌ 타입은 런타임에서 제거된다.
function calculateArea(shape) {
    if (shape instanceof Rectangle) { // instanceof는 런타임에 일어나지만 Rectangle은 런타임에 없음
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
// 🟢 런타임에도 제거되지 않는 속성을 사용
function calculateArea1(shape) {
    if ("height" in shape) {
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
function calculateArea2(shape) {
    if (shape.kind === "rectangle") {
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
var Square3 = /** @class */ (function () {
    function Square3(width) {
        this.width = width;
    }
    return Square3;
}());
var Rectangle3 = /** @class */ (function (_super) {
    __extends(Rectangle3, _super);
    function Rectangle3(width, height) {
        var _this = _super.call(this, width) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    return Rectangle3;
}(Square3));
function calculateArea3(shape) {
    if (shape instanceof Rectangle3) { // 여기서는 class로 사용됨
        return shape.width * shape.height;
    }
    else {
        return shape.width * shape.width;
    }
}
// ---------------------------------- 💙 타입연산은 런타임에 영향을 주지 않는다. 💙 ----------------------------------- //
// ❌ 타입 연산은 런타임에서 제거된다.
function asNumber(val) {
    return val; // js로 변환하면 사라진다. string을 넣으면 string이 나온다.
}
// 🟢 런타임의 타입을 체크하고 JS 연산으로 변환해야한다.
function asNumber2(val) {
    return typeof val === "string" ? Number(val) : val;
}
// ---------------------------------- 💙 런타임 타입은 선언된 타입과 다를 수 있다. 💙 ----------------------------------- //
/*
일반적으로 API 명세에 따라 타입을 선언하겠지만, API 명세가 변경되어
런타임에 다른 값이 들어올 가능성이 충분히 있다.
*/
function setLightSwitch(value) {
    switch (value) {
        case true:
            // on
            break;
        case false:
            // off
            break;
        default:
            console.log("실행될까요?");
    }
}
function setLight() {
    return __awaiter(this, void 0, void 0, function () {
        var res, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("/light")];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    result = _a.sent();
                    setLightSwitch(result.value); // 근데 만약 API의 res가 런타임에서 다른 값으로 들어온다면? default에 걸릴 수 있다.
                    return [2 /*return*/];
            }
        });
    });
}
// ---------------------------------- 💙 타입스크립트 타입으로는 함수를 오버로드할 수 없다. 💙 ----------------------------------- //
/*
C ++ 이나 다른 언어에서는 매개변수만 다른 같은 이름의 함수를 허용하는 "함수 오버로딩"이 가능하다.
하지만 TS는 함수의 파라미터에 대한 타입 오버로딩만 지원하고 함수의 구현체는 유일하다.
*/
// ❌ 함수 오버로딩 불가
function add2(a, b) { return a + b; }
function add2(a, b) { return a + b; }
function add3(a, b) { return a + b; }
