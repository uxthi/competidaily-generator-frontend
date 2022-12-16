var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// app/styles/index.css
var require_styles = __commonJS({
  "app/styles/index.css"(exports, module2) {
    module2.exports = "/build/_assets/index-P4OX6PNN.css";
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
        context: remixContext,
        url: request.url
      }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", {
            charSet: "utf-8"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 7,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", {
            children: "Gere uma competidaily aleat\xF3ria pra sua equipe!"
          }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 8,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 9,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 12,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 13,
            columnNumber: 9
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 11,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/competidaily.tsx
var competidaily_exports = {};
__export(competidaily_exports, {
  default: () => CompetidailyRoute
});
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function CompetidailyRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", {
        children: "Gerador de Competidaily v2.0"
      }, void 0, !1, {
        fileName: "app/routes/competidaily.tsx",
        lineNumber: 6,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
          fileName: "app/routes/competidaily.tsx",
          lineNumber: 8,
          columnNumber: 9
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/competidaily.tsx",
        lineNumber: 7,
        columnNumber: 7
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/competidaily.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/competidaily/new/index.tsx
var new_exports = {};
__export(new_exports, {
  action: () => action,
  default: () => NewCompetidailyRoute
});
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), PocketBase = require("pocketbase/cjs");
async function action({ request }) {
  let body = await request.formData(), pb = new PocketBase(process.env.POCKET_BASE_URL);
  await pb.admins.authWithPassword(process.env.POCKET_BASE_USER, process.env.POCKET_BASE_PASS);
  let records = await pb.collection(process.env.POCKET_BASE_COLLECTION).create({
    theme: body.get("content"),
    enabled: !1
  });
  return null;
}
function NewCompetidailyRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", {
        children: "Sugira um novo tema!"
      }, void 0, !1, {
        fileName: "app/routes/competidaily/new/index.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Form, {
        method: "post",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", {
              children: [
                "Seu nome: ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", {
                  type: "text",
                  name: "name"
                }, void 0, !1, {
                  fileName: "app/routes/competidaily/new/index.tsx",
                  lineNumber: 25,
                  columnNumber: 25
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/competidaily/new/index.tsx",
              lineNumber: 24,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/competidaily/new/index.tsx",
            lineNumber: 23,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", {
              children: [
                "Um tema bem legal*: ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("textarea", {
                  name: "content"
                }, void 0, !1, {
                  fileName: "app/routes/competidaily/new/index.tsx",
                  lineNumber: 30,
                  columnNumber: 35
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/competidaily/new/index.tsx",
              lineNumber: 29,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/competidaily/new/index.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", {
              type: "submit",
              className: "button",
              children: "Enviar"
            }, void 0, !1, {
              fileName: "app/routes/competidaily/new/index.tsx",
              lineNumber: 34,
              columnNumber: 13
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/competidaily/new/index.tsx",
            lineNumber: 33,
            columnNumber: 11
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/competidaily/new/index.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/competidaily/new/index.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this);
}

// app/routes/competidaily/index.tsx
var competidaily_exports2 = {};
__export(competidaily_exports2, {
  default: () => CompetidailyIndexRoute,
  loader: () => loader
});
var import_react5 = require("@remix-run/react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), PocketBase2 = require("pocketbase/cjs"), loader = async () => {
  let pb = new PocketBase2(process.env.POCKET_BASE_URL);
  return await pb.admins.authWithPassword(process.env.POCKET_BASE_USER, process.env.POCKET_BASE_PASS), { records: await pb.collection(process.env.POCKET_BASE_COLLECTION).getFullList(200, {
    sort: "-created"
  }) };
};
function CompetidailyIndexRoute() {
  let data = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", {
    children: [
      "Seu tema \xE9: ",
      (() => {
        let allThemes = data.records, filteredThemes = [];
        return allThemes.map((item) => item.enabled ? filteredThemes.push(item) : null), console.log("PERMITIDOS >>>", filteredThemes), console.log("TODOS OS TEMAS >>>", allThemes), filteredThemes;
      })().map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", {
        children: item.theme
      }, item.theme, !1, {
        fileName: "app/routes/competidaily/index.tsx",
        lineNumber: 39,
        columnNumber: 60
      }, this))
    ]
  }, void 0, !0, {
    fileName: "app/routes/competidaily/index.tsx",
    lineNumber: 38,
    columnNumber: 7
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => IndexRoute,
  links: () => links
});
var import_styles = __toESM(require_styles()), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), links = () => [{ rel: "stylesheet", href: import_styles.default }];
function IndexRoute() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", {
    children: "Essa \xE9 a rota index"
  }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "9c53a7bc", entry: { module: "/build/entry.client-N54WHGEN.js", imports: ["/build/_shared/chunk-LMFGQVYC.js", "/build/_shared/chunk-FOXTB3PS.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-B3BX5WX4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/competidaily": { id: "routes/competidaily", parentId: "root", path: "competidaily", index: void 0, caseSensitive: void 0, module: "/build/routes/competidaily-73OZGA3Q.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/competidaily/index": { id: "routes/competidaily/index", parentId: "routes/competidaily", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/competidaily/index-FZPIMCZW.js", imports: ["/build/_shared/chunk-I6LSXOVY.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/competidaily/new/index": { id: "routes/competidaily/new/index", parentId: "routes/competidaily", path: "new", index: !0, caseSensitive: void 0, module: "/build/routes/competidaily/new/index-4LTV3BEP.js", imports: ["/build/_shared/chunk-I6LSXOVY.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-RBNKUTNV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-9C53A7BC.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/competidaily": {
    id: "routes/competidaily",
    parentId: "root",
    path: "competidaily",
    index: void 0,
    caseSensitive: void 0,
    module: competidaily_exports
  },
  "routes/competidaily/new/index": {
    id: "routes/competidaily/new/index",
    parentId: "routes/competidaily",
    path: "new",
    index: !0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/competidaily/index": {
    id: "routes/competidaily/index",
    parentId: "routes/competidaily",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: competidaily_exports2
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
