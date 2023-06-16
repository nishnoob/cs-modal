var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ReactDOM$1 = require('react-dom/client');
var ReactDOM = require('react-dom');
var detectEthereumProvider = require('@metamask/detect-provider');
var Web3 = require('web3');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default$1 = /*#__PURE__*/_interopDefaultLegacy(ReactDOM$1);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);
var detectEthereumProvider__default = /*#__PURE__*/_interopDefaultLegacy(detectEthereumProvider);
var Web3__default = /*#__PURE__*/_interopDefaultLegacy(Web3);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
}

var ModalTrigger = function (props) {
    var mContext = React.useContext(ModalContext);
    return (jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("button", __assign({ className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", onClick: function () { return mContext.setVisible(function (state) { return !state; }); } }, { children: props.text || "OPEN" })), mContext.visible && props.modal] }));
};

var Modal = function (props) {
    var _a = React.useState('translate-y-full'), visible = _a[0], setVisible = _a[1];
    var modalRef = React.useRef(null);
    var mContext = React.useContext(ModalContext);
    React.useEffect(function () {
        // To set moving up animation by removing translate-y-full
        setVisible('');
    }, []);
    var onClickBackdrop = function () {
        setVisible('translate-y-full');
        setTimeout(function () {
            mContext.setVisible(false);
        }, 150);
    };
    var handlePropagation = function (e) {
        // To stop any clicks inside the div from propagating to backdrop and causing it to close
        if (e) {
            e.stopPropagation();
        }
    };
    return ReactDOM__default["default"].createPortal(jsxRuntime.jsx("div", __assign({ className: "fixed left-0 right-0 bottom-0 top-0 bg-black/20 z-10 backdrop-blur-sm flex justify-center items-center transition-opacity duration-150 ".concat(visible && 'opacity-0'), onClick: onClickBackdrop }, { children: jsxRuntime.jsx("div", __assign({ ref: modalRef, className: "absolute md:w-1/2 w-10/12 md:max-h-3/4 max-h-3/5 rounded-3xl bg-white drop-shadow-xl ease-in-out ".concat(visible, " transition-transform duration-200 overflow-x-hidden"), onClick: handlePropagation }, { children: jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [jsxRuntime.jsx("div", __assign({ className: 'absolute right-4 top-4 cursor-pointer', onClick: onClickBackdrop }, { children: jsxRuntime.jsx("svg", __assign({ className: "h-6 w-6", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", "aria-hidden": "true" }, { children: jsxRuntime.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }) })) })), jsxRuntime.jsx("h1", __assign({ className: "pl-5 md:pl-8 pt-4 text-2xl md:text-4xl font-bold ".concat(props.title ? 'mb-4' : 'opacity-0') }, { children: props.title || "placeholder" })), jsxRuntime.jsx("div", __assign({ className: 'pt-0 px-5 md:px-8' }, { children: props.children }))] }) })) })), document.getElementById("root"));
};

var Loader = function () { return (jsxRuntime.jsxs("div", __assign({ role: "status" }, { children: [jsxRuntime.jsxs("svg", __assign({ "aria-hidden": "true", className: "w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600", viewBox: "0 0 100 101", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntime.jsx("path", { d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z", fill: "currentColor" }), jsxRuntime.jsx("path", { d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z", fill: "currentFill" })] })), jsxRuntime.jsx("span", __assign({ className: "sr-only" }, { children: "Loading..." }))] }))); };

var CoinSwapperPage = function () {
    var _a = React.useState(false), showConnect = _a[0], setShowConnect = _a[1];
    var _b = React.useState(true), loader = _b[0], setLoader = _b[1];
    var _c = React.useState({ accounts: [] }), connectedWallet = _c[0], setConnectedWallet = _c[1];
    var _d = React.useState(0.0), balance = _d[0], setBalance = _d[1];
    var checkForMetamask = function () { return __awaiter(void 0, void 0, void 0, function () {
        var provider, accounts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, detectEthereumProvider__default["default"]({ silent: true })];
                case 1:
                    provider = _a.sent();
                    setShowConnect(Boolean(provider));
                    if (!provider) return [3 /*break*/, 3];
                    return [4 /*yield*/, window.ethereum.request({
                            method: "eth_accounts"
                        })];
                case 2:
                    accounts = _a.sent();
                    refreshAccounts(accounts);
                    window.ethereum.on('accountsChanged', refreshAccounts);
                    _a.label = 3;
                case 3:
                    setLoader(false);
                    return [2 /*return*/];
            }
        });
    }); };
    var refreshAccounts = function (accounts) {
        if (accounts.length > 0) {
            setConnectedWallet({ accounts: accounts });
        }
        else {
            setConnectedWallet({ accounts: [] });
        }
    };
    React.useEffect(function () {
        checkForMetamask();
        return function () {
            var _a;
            (_a = window.ethereum) === null || _a === void 0 ? void 0 : _a.removeListener('accountsChanged', refreshAccounts);
        };
    }, []);
    React.useEffect(function () {
        if (connectedWallet.accounts.length > 0) {
            var web3_1 = new Web3__default["default"]("https://polygon-mainnet.g.alchemy.com/v2/BfA_PSKGjFraxkjNmKDXYwZTBAEf1Iqq");
            web3_1.eth.getBalance(connectedWallet.accounts[0]).then(function (bal) {
                try {
                    var balanc = parseFloat(web3_1.utils.fromWei(bal, 'ether'));
                    if (balanc > 0) {
                        setBalance(balanc);
                    }
                }
                catch (e) { }
            });
        }
    }, [connectedWallet.accounts]);
    var handleConnect = function () { return __awaiter(void 0, void 0, void 0, function () {
        var accounts, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, window.ethereum.request({
                            method: "eth_requestAccounts",
                        })];
                case 1:
                    accounts = _a.sent();
                    setConnectedWallet({ accounts: accounts });
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    console.log("FACED ISSUE WHILE CONNECTING", e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    return (jsxRuntime.jsx("div", __assign({ className: "flex flex-col justify-content md:my-8 my-6" }, { children: loader ? jsxRuntime.jsx(Loader, {}) :
            jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [!showConnect && (jsxRuntime.jsx("div", { children: " INSTALL METAMASK EXTENSION " })), showConnect && connectedWallet.accounts.length < 1 && (jsxRuntime.jsx("div", { children: jsxRuntime.jsx("button", __assign({ className: "bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", onClick: handleConnect }, { children: "CONNECT WALLET" })) })), connectedWallet.accounts.length > 0 &&
                        jsxRuntime.jsxs("div", __assign({ className: "mb-6 md:mb-8" }, { children: [jsxRuntime.jsxs("p", __assign({ className: " overflow-hidden" }, { children: [jsxRuntime.jsx("span", __assign({ className: "whitespace-nowrap font-bold" }, { children: "Wallet Addr: " })), jsxRuntime.jsx("span", __assign({ className: "break-words" }, { children: connectedWallet.accounts[0] }))] })), jsxRuntime.jsxs("p", __assign({ className: " overflow-hidden" }, { children: [jsxRuntime.jsx("span", __assign({ className: "whitespace-nowrap font-bold" }, { children: "MATIC Balance: " })), jsxRuntime.jsx("span", __assign({ className: "break-words" }, { children: balance }))] }))] })), jsxRuntime.jsx(CoinSwappingComponent, { balance: balance })] }) })));
};
var CoinSwappingComponent = function (props) {
    var _a = React.useState('0.0'), fromValue = _a[0], setFromValue = _a[1];
    var _b = React.useState('ETH'), fromCurrency = _b[0], setFromCurrency = _b[1];
    var _c = React.useState('0.0'), toValue = _c[0], setToValue = _c[1];
    var _d = React.useState('DAI'), toCurrency = _d[0], setToCurrency = _d[1];
    var _e = React.useState(false), spin = _e[0], setSpin = _e[1];
    var handleSwap = function () {
        setSpin(true);
        setTimeout(function () { return setSpin(false); }, 100);
        var tempValue = fromValue;
        var tempCurrency = fromCurrency;
        setFromValue(toValue);
        setFromCurrency(toCurrency);
        setToValue(tempValue);
        setToCurrency(tempCurrency);
    };
    return (jsxRuntime.jsxs("div", __assign({ className: "md:w-1/2 self-center" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "relative" }, { children: [jsxRuntime.jsxs("div", __assign({ className: "relative bg-gray-200 px-4 rounded-md p-4 overflow-hidden mb-4" }, { children: [jsxRuntime.jsx("div", __assign({ className: "text-slate-300 mb-4 absolute -right-7 top-5 text-4xl font-bold z-1 -rotate-90" }, { children: "From" })), jsxRuntime.jsxs("div", __assign({ className: "relative bg-transparent w-full p-2 border-2 border-gray-500 rounded-md flex align-items z-10" }, { children: [jsxRuntime.jsx("input", { type: "number", className: "bg-gray-200 border-0 focus:outline-none w-full text-xl", value: fromValue, onChange: function (e) { return setFromValue(e.target.value); } }), jsxRuntime.jsxs("select", __assign({ className: "bg-slate-400 rounded-full outline-none flex-1 px-2 border-r-8 border-slate-400 cursor-pointer", value: fromCurrency, onChange: function (e) { return setFromCurrency(e.target.value); } }, { children: [jsxRuntime.jsx("option", __assign({ value: "option1" }, { children: "ETH" })), jsxRuntime.jsx("option", __assign({ value: "option2" }, { children: "DAI" })), jsxRuntime.jsx("option", __assign({ value: "option3" }, { children: "HEX" })), jsxRuntime.jsx("option", __assign({ value: "option3" }, { children: "SHIB" }))] }))] }))] })), jsxRuntime.jsxs("div", __assign({ className: "relative bg-gray-200 px-4 rounded-md p-4 overflow-hidden" }, { children: [jsxRuntime.jsx("div", __assign({ className: "text-slate-300 mb-4 absolute -right-4 top-3 text-6xl font-bold z-1 -rotate-90" }, { children: "To" })), jsxRuntime.jsxs("div", __assign({ className: "relative bg-transparent w-full p-2 border-2 border-gray-500 rounded-md flex align-items z-10" }, { children: [jsxRuntime.jsx("input", { type: "number", className: "bg-gray-200 border-0 focus:outline-none w-full text-xl", value: toValue, onChange: function (e) { return setToValue(e.target.value); } }), jsxRuntime.jsxs("select", __assign({ className: "bg-slate-400 rounded-full outline-none flex-1 px-2 border-r-8 border-slate-400 cursor-pointer", value: toCurrency, onChange: function (e) { return setToCurrency(e.target.value); } }, { children: [jsxRuntime.jsx("option", __assign({ value: "option1" }, { children: "ETH" })), jsxRuntime.jsx("option", __assign({ value: "option2" }, { children: "DAI" })), jsxRuntime.jsx("option", __assign({ value: "option3" }, { children: "HEX" })), jsxRuntime.jsx("option", __assign({ value: "option3" }, { children: "SHIB" }))] }))] }))] })), jsxRuntime.jsx("div", __assign({ onClick: handleSwap, className: "w-8 rotate-90 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-black rounded-full p-1 cursor-pointer ".concat(spin ? 'scale-110' : '') }, { children: jsxRuntime.jsx("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "#FFF" }, { children: jsxRuntime.jsx("g", __assign({ id: "Layer_2", "data-name": "Layer 2" }, { children: jsxRuntime.jsx("g", __assign({ id: "swap" }, { children: jsxRuntime.jsxs("g", __assign({ id: "swap-2", "data-name": "swap" }, { children: [jsxRuntime.jsx("rect", { style: { fill: "#FFF", opacity: 0 }, className: "cls-1", width: "24", height: "24", transform: "translate(0 24) rotate(-90)" }), jsxRuntime.jsx("path", { className: "cls-2", style: { fill: "#231f20" }, d: "M4,9H17l-1.6,1.2a1,1,0,0,0-.2,1.4,1,1,0,0,0,.8.4,1,1,0,0,0,.6-.2l4-3a1,1,0,0,0,0-1.59l-3.86-3a1,1,0,0,0-1.23,1.58L17.08,7H4A1,1,0,0,0,4,9Z" }), jsxRuntime.jsx("path", { style: { fill: "#231f20" }, className: "cls-2", d: "M20,16H7l1.6-1.2a1,1,0,0,0-1.2-1.6l-4,3a1,1,0,0,0,0,1.59l3.86,3a1,1,0,0,0,.61.21,1,1,0,0,0,.79-.39,1,1,0,0,0-.17-1.4L6.92,18H20a1,1,0,0,0,0-2Z" })] })) })) })) })) }))] })), jsxRuntime.jsx("button", __assign({ disabled: props.balance == 0, className: "bg-blue-500 text-white font-bold py-2 px-4 rounded w-full mt-4 md:mt-8 ".concat(props.balance == 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700') }, { children: "SWAP" }))] })));
};

var ModalContext = React.createContext({
    visible: false,
    setVisible: function () { }
});
function App() {
    var _a = React.useState(false), isModalVisible = _a[0], setIsModalVisible = _a[1];
    return (jsxRuntime.jsx(ModalContext.Provider, __assign({ value: { visible: isModalVisible, setVisible: setIsModalVisible } }, { children: jsxRuntime.jsxs("div", __assign({ className: "App" }, { children: [jsxRuntime.jsxs("header", __assign({ className: "App-header" }, { children: [jsxRuntime.jsxs("p", { children: ["Edit ", jsxRuntime.jsx("code", { children: "src/App.tsx" }), " and save to reload."] }), jsxRuntime.jsx("a", __assign({ className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, { children: "Learn React" }))] })), jsxRuntime.jsx(ModalTrigger, { modal: jsxRuntime.jsx(Modal, { title: 'Coin Swapper', children: jsxRuntime.jsx(CoinSwapperPage, {}) }) })] })) })));
}

var reportWebVitals = function (onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('web-vitals')); }).then(function (_a) {
            var getCLS = _a.getCLS, getFID = _a.getFID, getFCP = _a.getFCP, getLCP = _a.getLCP, getTTFB = _a.getTTFB;
            getCLS(onPerfEntry);
            getFID(onPerfEntry);
            getFCP(onPerfEntry);
            getLCP(onPerfEntry);
            getTTFB(onPerfEntry);
        });
    }
};

var root = ReactDOM__default$1["default"].createRoot(document.getElementById('root'));
root.render(jsxRuntime.jsx(React__default["default"].StrictMode, { children: jsxRuntime.jsx(App, {}) }));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//# sourceMappingURL=index.js.map
