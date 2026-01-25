
var vLS4d59d9b6cc24740ef3ab = "936b5281afecd3f6f1fac5317b520397";

// ================تم منح هذا الاضافة بخاصيات الخطوط وتغير الأسم والسكن من قبل DARK XO=================
//DONT COPY MY CODE
(() => {
  var _0x507ff3 = {
    "./node_modules/@socket.io/component-emitter/lib/esm/index.js": (_0x1bb1f0, _0x3aa1e0, _0x1ac768) => {
      'use strict';

      _0x1ac768.r(_0x3aa1e0);
      _0x1ac768.d(_0x3aa1e0, {
        Emitter: () => _0x46128b
      });
      function _0x46128b(_0x5f29b7) {
        if (_0x5f29b7) {
          return _0x2b6757(_0x5f29b7);
        }
      }
      function _0x2b6757(_0x4245f3) {
        for (var _0x5768f7 in _0x46128b.prototype) {
          _0x4245f3[_0x5768f7] = _0x46128b.prototype[_0x5768f7];
        }
        return _0x4245f3;
      }
      _0x46128b.prototype.on = _0x46128b.prototype.addEventListener = function (_0x30bd83, _0x3d0dec) {
        this._callbacks = this._callbacks || {};
        (this._callbacks["$" + _0x30bd83] = this._callbacks["$" + _0x30bd83] || []).push(_0x3d0dec);
        return this;
      };
      _0x46128b.prototype.once = function (_0x42faf6, _0x2d7ffd) {
        function _0x2cee08() {
          this.off(_0x42faf6, _0x2cee08);
          _0x2d7ffd.apply(this, arguments);
        }
        _0x2cee08.fn = _0x2d7ffd;
        this.on(_0x42faf6, _0x2cee08);
        return this;
      };
      _0x46128b.prototype.off = _0x46128b.prototype.removeListener = _0x46128b.prototype.removeAllListeners = _0x46128b.prototype.removeEventListener = function (_0x1c9d5e, _0x5da2c8) {
        this._callbacks = this._callbacks || {};
        if (arguments.length == 0) {
          this._callbacks = {};
          return this;
        }
        var _0x5cadb9 = this._callbacks["$" + _0x1c9d5e];
        if (!_0x5cadb9) {
          return this;
        }
        if (arguments.length == 1) {
          delete this._callbacks["$" + _0x1c9d5e];
          return this;
        }
        var _0x52f4ce;
        for (var _0x568d4d = 0; _0x568d4d < _0x5cadb9.length; _0x568d4d++) {
          _0x52f4ce = _0x5cadb9[_0x568d4d];
          if (_0x52f4ce === _0x5da2c8 || _0x52f4ce.fn === _0x5da2c8) {
            _0x5cadb9.splice(_0x568d4d, 1);
            break;
          }
        }
        if (_0x5cadb9.length === 0) {
          delete this._callbacks["$" + _0x1c9d5e];
        }
        return this;
      };
      _0x46128b.prototype.emit = function (_0x578a17) {
        this._callbacks = this._callbacks || {};
        var _0x2841aa = new Array(arguments.length - 1);
        var _0x2deca0 = this._callbacks["$" + _0x578a17];
        for (var _0x431fd6 = 1; _0x431fd6 < arguments.length; _0x431fd6++) {
          _0x2841aa[_0x431fd6 - 1] = arguments[_0x431fd6];
        }
        if (_0x2deca0) {
          _0x2deca0 = _0x2deca0.slice(0);
          for (var _0x431fd6 = 0, _0xb402f4 = _0x2deca0.length; _0x431fd6 < _0xb402f4; ++_0x431fd6) {
            _0x2deca0[_0x431fd6].apply(this, _0x2841aa);
          }
        }
        return this;
      };
      _0x46128b.prototype.emitReserved = _0x46128b.prototype.emit;
      _0x46128b.prototype.listeners = function (_0x2def19) {
        this._callbacks = this._callbacks || {};
        return this._callbacks["$" + _0x2def19] || [];
      };
      _0x46128b.prototype.hasListeners = function (_0x5ba92f) {
        return !!this.listeners(_0x5ba92f).length;
      };
    },
    "./node_modules/engine.io-client/build/esm/contrib/has-cors.js": (_0x3abe5c, _0x7b32a6, _0x332e09) => {
      'use strict';

      _0x332e09.r(_0x7b32a6);
      _0x332e09.d(_0x7b32a6, {
        hasCORS: () => _0x3ea210
      });
      let _0x3f7220 = false;
      try {
        _0x3f7220 = typeof XMLHttpRequest !== "undefined" && "withCredentials" in new XMLHttpRequest();
      } catch (_0x4f84bd) {}
      const _0x3ea210 = _0x3f7220;
    },
    "./node_modules/engine.io-client/build/esm/contrib/parseqs.js": (_0x4de36f, _0x12e0b4, _0x10d2f2) => {
      'use strict';

      _0x10d2f2.r(_0x12e0b4);
      _0x10d2f2.d(_0x12e0b4, {
        decode: () => _0x2ed721,
        encode: () => _0x2899ee
      });
      function _0x2899ee(_0x4bc50c) {
        let _0x8f76b6 = "";
        for (let _0x417ddd in _0x4bc50c) {
          if (_0x4bc50c.hasOwnProperty(_0x417ddd)) {
            if (_0x8f76b6.length) {
              _0x8f76b6 += "&";
            }
            _0x8f76b6 += encodeURIComponent(_0x417ddd) + "=" + encodeURIComponent(_0x4bc50c[_0x417ddd]);
          }
        }
        return _0x8f76b6;
      }
      function _0x2ed721(_0x20e706) {
        let _0x2327d4 = {};
        let _0xb638eb = _0x20e706.split("&");
        for (let _0x149b19 = 0, _0x2b5c3e = _0xb638eb.length; _0x149b19 < _0x2b5c3e; _0x149b19++) {
          let _0x55451b = _0xb638eb[_0x149b19].split("=");
          _0x2327d4[decodeURIComponent(_0x55451b[0])] = decodeURIComponent(_0x55451b[1]);
        }
        return _0x2327d4;
      }
    },
    "./node_modules/engine.io-client/build/esm/contrib/parseuri.js": (_0x19ed83, _0x14bb2f, _0x44de12) => {
      'use strict';

      _0x44de12.r(_0x14bb2f);
      _0x44de12.d(_0x14bb2f, {
        parse: () => _0x199f2c
      });
      const _0xa4db1f = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
      const _0x49fede = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
      function _0x199f2c(_0x2b851f) {
        if (_0x2b851f.length > 8000) {
          throw "URI too long";
        }
        const _0x34bf06 = _0x2b851f;
        const _0x11b32e = _0x2b851f.indexOf("[");
        const _0x25a0b3 = _0x2b851f.indexOf("]");
        if (_0x11b32e != -1 && _0x25a0b3 != -1) {
          _0x2b851f = _0x2b851f.substring(0, _0x11b32e) + _0x2b851f.substring(_0x11b32e, _0x25a0b3).replace(/:/g, ";") + _0x2b851f.substring(_0x25a0b3, _0x2b851f.length);
        }
        let _0x27fdf3 = _0xa4db1f.exec(_0x2b851f || "");
        let _0x868755 = {};
        let _0x474015 = 14;
        while (_0x474015--) {
          _0x868755[_0x49fede[_0x474015]] = _0x27fdf3[_0x474015] || "";
        }
        if (_0x11b32e != -1 && _0x25a0b3 != -1) {
          _0x868755.source = _0x34bf06;
          _0x868755.host = _0x868755.host.substring(1, _0x868755.host.length - 1).replace(/;/g, ":");
          _0x868755.authority = _0x868755.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
          _0x868755.ipv6uri = true;
        }
        _0x868755.pathNames = _0xdf1719(_0x868755, _0x868755.path);
        _0x868755.queryKey = _0x18a268(_0x868755, _0x868755.query);
        return _0x868755;
      }
      function _0xdf1719(_0x2666c7, _0x56e854) {
        const _0x18d361 = /\/{2,9}/g;
        const _0x409b96 = _0x56e854.replace(_0x18d361, "/").split("/");
        if (_0x56e854.slice(0, 1) == "/" || _0x56e854.length === 0) {
          _0x409b96.splice(0, 1);
        }
        if (_0x56e854.slice(-1) == "/") {
          _0x409b96.splice(_0x409b96.length - 1, 1);
        }
        return _0x409b96;
      }
      function _0x18a268(_0x5a1c0e, _0x44d11a) {
        const _0x21f4cc = {};
        _0x44d11a.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (_0x10e1a0, _0x573509, _0x2c89c1) {
          if (_0x573509) {
            _0x21f4cc[_0x573509] = _0x2c89c1;
          }
        });
        return _0x21f4cc;
      }
    },
    "./node_modules/engine.io-client/build/esm/globals.js": (_0x2405ea, _0x1310e6, _0x456a25) => {
      'use strict';

      _0x456a25.r(_0x1310e6);
      _0x456a25.d(_0x1310e6, {
        createCookieJar: () => _0x526be8,
        defaultBinaryType: () => _0x490aac,
        globalThisShim: () => _0x896b45,
        nextTick: () => _0x32e4a2
      });
      const _0x32e4a2 = (() => {
        const _0x37c283 = typeof Promise === "function" && typeof Promise.resolve === "function";
        if (_0x37c283) {
          return _0x4f7e91 => Promise.resolve().then(_0x4f7e91);
        } else {
          return (_0x15438e, _0x48db4e) => _0x48db4e(_0x15438e, 0);
        }
      })();
      const _0x896b45 = (() => {
        if (typeof self !== "undefined") {
          return self;
        } else if (typeof window !== "undefined") {
          return window;
        } else {
          return Function("return this")();
        }
      })();
      const _0x490aac = "arraybuffer";
      function _0x526be8() {}
    },
    "./node_modules/engine.io-client/build/esm/index.js": (_0x14c247, _0x1b9977, _0xb886cb) => {
      'use strict';

      _0xb886cb.r(_0x1b9977);
      _0xb886cb.d(_0x1b9977, {
        Fetch: () => _0x5003ce.Fetch,
        NodeWebSocket: () => _0x3ff6a7.WS,
        NodeXHR: () => _0x468476.XHR,
        Socket: () => _0xa9d8dc.Socket,
        SocketWithUpgrade: () => _0xa9d8dc.SocketWithUpgrade,
        SocketWithoutUpgrade: () => _0xa9d8dc.SocketWithoutUpgrade,
        Transport: () => _0x502410.Transport,
        TransportError: () => _0x502410.TransportError,
        WebSocket: () => _0x3ff6a7.WS,
        WebTransport: () => _0x1d52c9.WT,
        XHR: () => _0x468476.XHR,
        installTimerFunctions: () => _0xe57c8c.installTimerFunctions,
        nextTick: () => _0x526fb4.nextTick,
        parse: () => _0x44300e.parse,
        protocol: () => _0x533f7b,
        transports: () => _0x3fdd32.transports
      });
      var _0xa9d8dc = _0xb886cb("./node_modules/engine.io-client/build/esm/socket.js");
      var _0x502410 = _0xb886cb("./node_modules/engine.io-client/build/esm/transport.js");
      var _0x3fdd32 = _0xb886cb("./node_modules/engine.io-client/build/esm/transports/index.js");
      var _0xe57c8c = _0xb886cb("./node_modules/engine.io-client/build/esm/util.js");
      var _0x44300e = _0xb886cb("./node_modules/engine.io-client/build/esm/contrib/parseuri.js");
      var _0x526fb4 = _0xb886cb("./node_modules/engine.io-client/build/esm/globals.js");
      var _0x5003ce = _0xb886cb("./node_modules/engine.io-client/build/esm/transports/polling-fetch.js");
      var _0x468476 = _0xb886cb("./node_modules/engine.io-client/build/esm/transports/polling-xhr.js");
      var _0x3ff6a7 = _0xb886cb("./node_modules/engine.io-client/build/esm/transports/websocket.js");
      var _0x1d52c9 = _0xb886cb("./node_modules/engine.io-client/build/esm/transports/webtransport.js");
      const _0x533f7b = _0xa9d8dc.Socket.protocol;
    },
    "./node_modules/engine.io-client/build/esm/socket.js": (_0x146848, _0x423743, _0x4aa865) => {
      'use strict';

      _0x4aa865.r(_0x423743);
      _0x4aa865.d(_0x423743, {
        Socket: () => _0x5efa81,
        SocketWithUpgrade: () => _0x17383e,
        SocketWithoutUpgrade: () => _0x475d2a
      });
      var _0x5aa9fd = _0x4aa865("./node_modules/engine.io-client/build/esm/transports/index.js");
      var _0x5118ca = _0x4aa865("./node_modules/engine.io-client/build/esm/util.js");
      var _0x283972 = _0x4aa865("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");
      var _0x102ff3 = _0x4aa865("./node_modules/engine.io-client/build/esm/contrib/parseuri.js");
      var _0x5795a5 = _0x4aa865("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
      var _0x120f04 = _0x4aa865("./node_modules/engine.io-parser/build/esm/index.js");
      var _0x37be5a = _0x4aa865("./node_modules/engine.io-client/build/esm/globals.js");
      const _0x2ad3fe = typeof addEventListener === "function" && typeof removeEventListener === "function";
      const _0x4db130 = [];
      if (_0x2ad3fe) {
        addEventListener("offline", () => {
          _0x4db130.forEach(_0x3a384c => _0x3a384c());
        }, false);
      }
      class _0x475d2a extends _0x5795a5.Emitter {
        constructor(_0x373e74, _0x28e712) {
          super();
          this.binaryType = _0x37be5a.defaultBinaryType;
          this.writeBuffer = [];
          this._prevBufferLen = 0;
          this._pingInterval = -1;
          this._pingTimeout = -1;
          this._maxPayload = -1;
          this._pingTimeoutTime = Infinity;
          if (_0x373e74 && typeof _0x373e74 === "object") {
            _0x28e712 = _0x373e74;
            _0x373e74 = null;
          }
          if (_0x373e74) {
            const _0x2cf96e = (0, _0x102ff3.parse)(_0x373e74);
            _0x28e712.hostname = _0x2cf96e.host;
            _0x28e712.secure = _0x2cf96e.protocol === "https" || _0x2cf96e.protocol === "wss";
            _0x28e712.port = _0x2cf96e.port;
            if (_0x2cf96e.query) {
              _0x28e712.query = _0x2cf96e.query;
            }
          } else if (_0x28e712.host) {
            _0x28e712.hostname = (0, _0x102ff3.parse)(_0x28e712.host).host;
          }
          (0, _0x5118ca.installTimerFunctions)(this, _0x28e712);
          this.secure = _0x28e712.secure ?? (typeof location !== "undefined" && location.protocol === "https:");
          if (_0x28e712.hostname && !_0x28e712.port) {
            _0x28e712.port = this.secure ? "443" : "80";
          }
          this.hostname = _0x28e712.hostname || (typeof location !== "undefined" ? location.hostname : "localhost");
          this.port = _0x28e712.port || (typeof location !== "undefined" && location.port ? location.port : this.secure ? "443" : "80");
          this.transports = [];
          this._transportsByName = {};
          _0x28e712.transports.forEach(_0x384874 => {
            const _0x2c5405 = _0x384874.prototype.name;
            this.transports.push(_0x2c5405);
            this._transportsByName[_0x2c5405] = _0x384874;
          });
          this.opts = Object.assign({
            path: "/engine.io",
            agent: false,
            withCredentials: false,
            upgrade: true,
            timestampParam: "t",
            rememberUpgrade: false,
            addTrailingSlash: true,
            rejectUnauthorized: true,
            perMessageDeflate: {
              threshold: 1024
            },
            transportOptions: {},
            closeOnBeforeunload: false
          }, _0x28e712);
          this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : "");
          if (typeof this.opts.query === "string") {
            this.opts.query = (0, _0x283972.decode)(this.opts.query);
          }
          if (_0x2ad3fe) {
            if (this.opts.closeOnBeforeunload) {
              this._beforeunloadEventListener = () => {
                if (this.transport) {
                  this.transport.removeAllListeners();
                  this.transport.close();
                }
              };
              addEventListener("beforeunload", this._beforeunloadEventListener, false);
            }
            if (this.hostname !== "localhost") {
              this._offlineEventListener = () => {
                this._onClose("transport close", {
                  description: "network connection lost"
                });
              };
              _0x4db130.push(this._offlineEventListener);
            }
          }
          if (this.opts.withCredentials) {
            this._cookieJar = (0, _0x37be5a.createCookieJar)();
          }
          this._open();
        }
        createTransport(_0x10b540) {
          const _0x392451 = Object.assign({}, this.opts.query);
          _0x392451.EIO = _0x120f04.protocol;
          _0x392451.transport = _0x10b540;
          if (this.id) {
            _0x392451.sid = this.id;
          }
          const _0x1bae21 = Object.assign({}, this.opts, {
            query: _0x392451,
            socket: this,
            hostname: this.hostname,
            secure: this.secure,
            port: this.port
          }, this.opts.transportOptions[_0x10b540]);
          return new this._transportsByName[_0x10b540](_0x1bae21);
        }
        _open() {
          if (this.transports.length === 0) {
            this.setTimeoutFn(() => {
              this.emitReserved("error", "No transports available");
            }, 0);
            return;
          }
          const _0x2b3510 = this.opts.rememberUpgrade && _0x475d2a.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
          this.readyState = "opening";
          const _0x3be496 = this.createTransport(_0x2b3510);
          _0x3be496.open();
          this.setTransport(_0x3be496);
        }
        setTransport(_0x2ff25c) {
          if (this.transport) {
            this.transport.removeAllListeners();
          }
          this.transport = _0x2ff25c;
          _0x2ff25c.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", _0x38e403 => this._onClose("transport close", _0x38e403));
        }
        onOpen() {
          this.readyState = "open";
          _0x475d2a.priorWebsocketSuccess = this.transport.name === "websocket";
          this.emitReserved("open");
          this.flush();
        }
        _onPacket(_0x1ca7f6) {
          if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            this.emitReserved("packet", _0x1ca7f6);
            this.emitReserved("heartbeat");
            switch (_0x1ca7f6.type) {
              case "open":
                this.onHandshake(JSON.parse(_0x1ca7f6.data));
                break;
              case "ping":
                this._sendPacket("pong");
                this.emitReserved("ping");
                this.emitReserved("pong");
                this._resetPingTimeout();
                break;
              case "error":
                const _0x2690ec = new Error("server error");
                _0x2690ec.code = _0x1ca7f6.data;
                this._onError(_0x2690ec);
                break;
              case "message":
                this.emitReserved("data", _0x1ca7f6.data);
                this.emitReserved("message", _0x1ca7f6.data);
                break;
            }
          } else {}
        }
        onHandshake(_0x12042c) {
          this.emitReserved("handshake", _0x12042c);
          this.id = _0x12042c.sid;
          this.transport.query.sid = _0x12042c.sid;
          this._pingInterval = _0x12042c.pingInterval;
          this._pingTimeout = _0x12042c.pingTimeout;
          this._maxPayload = _0x12042c.maxPayload;
          this.onOpen();
          if (this.readyState === "closed") {
            return;
          }
          this._resetPingTimeout();
        }
        _resetPingTimeout() {
          this.clearTimeoutFn(this._pingTimeoutTimer);
          const _0x750327 = this._pingInterval + this._pingTimeout;
          this._pingTimeoutTime = Date.now() + _0x750327;
          this._pingTimeoutTimer = this.setTimeoutFn(() => {
            this._onClose("ping timeout");
          }, _0x750327);
          if (this.opts.autoUnref) {
            this._pingTimeoutTimer.unref();
          }
        }
        _onDrain() {
          this.writeBuffer.splice(0, this._prevBufferLen);
          this._prevBufferLen = 0;
          if (this.writeBuffer.length === 0) {
            this.emitReserved("drain");
          } else {
            this.flush();
          }
        }
        flush() {
          if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
            const _0xaecf9c = this._getWritablePackets();
            this.transport.send(_0xaecf9c);
            this._prevBufferLen = _0xaecf9c.length;
            this.emitReserved("flush");
          }
        }
        _getWritablePackets() {
          const _0x32ae19 = this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1;
          if (!_0x32ae19) {
            return this.writeBuffer;
          }
          let _0xf09460 = 1;
          for (let _0x4ae37c = 0; _0x4ae37c < this.writeBuffer.length; _0x4ae37c++) {
            const _0x42cf67 = this.writeBuffer[_0x4ae37c].data;
            if (_0x42cf67) {
              _0xf09460 += (0, _0x5118ca.byteLength)(_0x42cf67);
            }
            if (_0x4ae37c > 0 && _0xf09460 > this._maxPayload) {
              return this.writeBuffer.slice(0, _0x4ae37c);
            }
            _0xf09460 += 2;
          }
          return this.writeBuffer;
        }
        _hasPingExpired() {
          if (!this._pingTimeoutTime) {
            return true;
          }
          const _0x7668d4 = Date.now() > this._pingTimeoutTime;
          if (_0x7668d4) {
            this._pingTimeoutTime = 0;
            (0, _0x37be5a.nextTick)(() => {
              this._onClose("ping timeout");
            }, this.setTimeoutFn);
          }
          return _0x7668d4;
        }
        write(_0x8ec5af, _0x41d993, _0x100cd6) {
          this._sendPacket("message", _0x8ec5af, _0x41d993, _0x100cd6);
          return this;
        }
        send(_0x287d9a, _0x2398ce, _0x2ea60f) {
          this._sendPacket("message", _0x287d9a, _0x2398ce, _0x2ea60f);
          return this;
        }
        _sendPacket(_0x2ac586, _0x5c674f, _0xa82f71, _0x1e5ef7) {
          if (typeof _0x5c674f === "function") {
            _0x1e5ef7 = _0x5c674f;
            _0x5c674f = undefined;
          }
          if (typeof _0xa82f71 === "function") {
            _0x1e5ef7 = _0xa82f71;
            _0xa82f71 = null;
          }
          if (this.readyState === "closing" || this.readyState === "closed") {
            return;
          }
          _0xa82f71 = _0xa82f71 || {};
          _0xa82f71.compress = _0xa82f71.compress !== false;
          const _0x38c144 = {
            type: _0x2ac586,
            data: _0x5c674f,
            options: _0xa82f71
          };
          this.emitReserved("packetCreate", _0x38c144);
          this.writeBuffer.push(_0x38c144);
          if (_0x1e5ef7) {
            this.once("flush", _0x1e5ef7);
          }
          this.flush();
        }
        close() {
          const _0x3c0817 = () => {
            this._onClose("forced close");
            this.transport.close();
          };
          const _0x23594b = () => {
            this.off("upgrade", _0x23594b);
            this.off("upgradeError", _0x23594b);
            _0x3c0817();
          };
          const _0x2f3a86 = () => {
            this.once("upgrade", _0x23594b);
            this.once("upgradeError", _0x23594b);
          };
          if (this.readyState === "opening" || this.readyState === "open") {
            this.readyState = "closing";
            if (this.writeBuffer.length) {
              this.once("drain", () => {
                if (this.upgrading) {
                  _0x2f3a86();
                } else {
                  _0x3c0817();
                }
              });
            } else if (this.upgrading) {
              _0x2f3a86();
            } else {
              _0x3c0817();
            }
          }
          return this;
        }
        _onError(_0x1f9c2c) {
          _0x475d2a.priorWebsocketSuccess = false;
          if (this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening") {
            this.transports.shift();
            return this._open();
          }
          this.emitReserved("error", _0x1f9c2c);
          this._onClose("transport error", _0x1f9c2c);
        }
        _onClose(_0x3d61b2, _0xea0c16) {
          if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
            this.clearTimeoutFn(this._pingTimeoutTimer);
            this.transport.removeAllListeners("close");
            this.transport.close();
            this.transport.removeAllListeners();
            if (_0x2ad3fe) {
              if (this._beforeunloadEventListener) {
                removeEventListener("beforeunload", this._beforeunloadEventListener, false);
              }
              if (this._offlineEventListener) {
                const _0x19647a = _0x4db130.indexOf(this._offlineEventListener);
                if (_0x19647a !== -1) {
                  _0x4db130.splice(_0x19647a, 1);
                }
              }
            }
            this.readyState = "closed";
            this.id = null;
            this.emitReserved("close", _0x3d61b2, _0xea0c16);
            this.writeBuffer = [];
            this._prevBufferLen = 0;
          }
        }
      }
      _0x475d2a.protocol = _0x120f04.protocol;
      class _0x17383e extends _0x475d2a {
        constructor() {
          super(...arguments);
          this._upgrades = [];
        }
        onOpen() {
          super.onOpen();
          if (this.readyState === "open" && this.opts.upgrade) {
            for (let _0x3fccdb = 0; _0x3fccdb < this._upgrades.length; _0x3fccdb++) {
              this._probe(this._upgrades[_0x3fccdb]);
            }
          }
        }
        _probe(_0x308758) {
          let _0x11c763 = this.createTransport(_0x308758);
          let _0x1600b7 = false;
          _0x475d2a.priorWebsocketSuccess = false;
          const _0x1699f9 = () => {
            if (_0x1600b7) {
              return;
            }
            _0x11c763.send([{
              type: "ping",
              data: "probe"
            }]);
            _0x11c763.once("packet", _0x3afecb => {
              if (_0x1600b7) {
                return;
              }
              if (_0x3afecb.type === "pong" && _0x3afecb.data === "probe") {
                this.upgrading = true;
                this.emitReserved("upgrading", _0x11c763);
                if (!_0x11c763) {
                  return;
                }
                _0x475d2a.priorWebsocketSuccess = _0x11c763.name === "websocket";
                this.transport.pause(() => {
                  if (_0x1600b7) {
                    return;
                  }
                  if (this.readyState === "closed") {
                    return;
                  }
                  _0x304907();
                  this.setTransport(_0x11c763);
                  _0x11c763.send([{
                    type: "upgrade"
                  }]);
                  this.emitReserved("upgrade", _0x11c763);
                  _0x11c763 = null;
                  this.upgrading = false;
                  this.flush();
                });
              } else {
                const _0x2fca79 = new Error("probe error");
                _0x2fca79.transport = _0x11c763.name;
                this.emitReserved("upgradeError", _0x2fca79);
              }
            });
          };
          function _0x5ad30f() {
            if (_0x1600b7) {
              return;
            }
            _0x1600b7 = true;
            _0x304907();
            _0x11c763.close();
            _0x11c763 = null;
          }
          const _0x396be5 = _0x3d44b3 => {
            const _0x1cabf8 = new Error("probe error: " + _0x3d44b3);
            _0x1cabf8.transport = _0x11c763.name;
            _0x5ad30f();
            this.emitReserved("upgradeError", _0x1cabf8);
          };
          function _0x1909cb() {
            _0x396be5("transport closed");
          }
          function _0x10a063() {
            _0x396be5("socket closed");
          }
          function _0x478328(_0x364c23) {
            if (_0x11c763 && _0x364c23.name !== _0x11c763.name) {
              _0x5ad30f();
            }
          }
          const _0x304907 = () => {
            _0x11c763.removeListener("open", _0x1699f9);
            _0x11c763.removeListener("error", _0x396be5);
            _0x11c763.removeListener("close", _0x1909cb);
            this.off("close", _0x10a063);
            this.off("upgrading", _0x478328);
          };
          _0x11c763.once("open", _0x1699f9);
          _0x11c763.once("error", _0x396be5);
          _0x11c763.once("close", _0x1909cb);
          this.once("close", _0x10a063);
          this.once("upgrading", _0x478328);
          if (this._upgrades.indexOf("webtransport") !== -1 && _0x308758 !== "webtransport") {
            this.setTimeoutFn(() => {
              if (!_0x1600b7) {
                _0x11c763.open();
              }
            }, 200);
          } else {
            _0x11c763.open();
          }
        }
        onHandshake(_0x3f959c) {
          this._upgrades = this._filterUpgrades(_0x3f959c.upgrades);
          super.onHandshake(_0x3f959c);
        }
        _filterUpgrades(_0xf94487) {
          const _0x369274 = [];
          for (let _0x1171cd = 0; _0x1171cd < _0xf94487.length; _0x1171cd++) {
            if (~this.transports.indexOf(_0xf94487[_0x1171cd])) {
              _0x369274.push(_0xf94487[_0x1171cd]);
            }
          }
          return _0x369274;
        }
      }
      class _0x5efa81 extends _0x17383e {
        constructor(_0xba9b6d, _0xf70d95 = {}) {
          const _0x5e5a84 = typeof _0xba9b6d === "object" ? _0xba9b6d : _0xf70d95;
          if (!_0x5e5a84.transports || _0x5e5a84.transports && typeof _0x5e5a84.transports[0] === "string") {
            _0x5e5a84.transports = (_0x5e5a84.transports || ["polling", "websocket", "webtransport"]).map(_0x32e4b => _0x5aa9fd.transports[_0x32e4b]).filter(_0x1796d7 => !!_0x1796d7);
          }
          super(_0xba9b6d, _0x5e5a84);
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transport.js": (_0x3005de, _0x7dd63b, _0x283d3a) => {
      'use strict';

      _0x283d3a.r(_0x7dd63b);
      _0x283d3a.d(_0x7dd63b, {
        Transport: () => _0x1dce7f,
        TransportError: () => _0x1c382f
      });
      var _0x23c681 = _0x283d3a("./node_modules/engine.io-parser/build/esm/index.js");
      var _0xda3176 = _0x283d3a("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
      var _0x3cb390 = _0x283d3a("./node_modules/engine.io-client/build/esm/util.js");
      var _0x5baf91 = _0x283d3a("./node_modules/engine.io-client/build/esm/contrib/parseqs.js");
      class _0x1c382f extends Error {
        constructor(_0x4f3d71, _0x82e468, _0xfdc1a) {
          super(_0x4f3d71);
          this.description = _0x82e468;
          this.context = _0xfdc1a;
          this.type = "TransportError";
        }
      }
      class _0x1dce7f extends _0xda3176.Emitter {
        constructor(_0x49f7a6) {
          super();
          this.writable = false;
          (0, _0x3cb390.installTimerFunctions)(this, _0x49f7a6);
          this.opts = _0x49f7a6;
          this.query = _0x49f7a6.query;
          this.socket = _0x49f7a6.socket;
          this.supportsBinary = !_0x49f7a6.forceBase64;
        }
        onError(_0x8fc860, _0x28010b, _0x323a64) {
          super.emitReserved("error", new _0x1c382f(_0x8fc860, _0x28010b, _0x323a64));
          return this;
        }
        open() {
          this.readyState = "opening";
          this.doOpen();
          return this;
        }
        close() {
          if (this.readyState === "opening" || this.readyState === "open") {
            this.doClose();
            this.onClose();
          }
          return this;
        }
        send(_0x4cd9c2) {
          if (this.readyState === "open") {
            this.write(_0x4cd9c2);
          } else {}
        }
        onOpen() {
          this.readyState = "open";
          this.writable = true;
          super.emitReserved("open");
        }
        onData(_0x530622) {
          const _0x5a59c1 = (0, _0x23c681.decodePacket)(_0x530622, this.socket.binaryType);
          this.onPacket(_0x5a59c1);
        }
        onPacket(_0xe419db) {
          super.emitReserved("packet", _0xe419db);
        }
        onClose(_0x51e3f7) {
          this.readyState = "closed";
          super.emitReserved("close", _0x51e3f7);
        }
        pause(_0x35d7d9) {}
        createUri(_0x181215, _0x4e976b = {}) {
          return _0x181215 + "://" + this._hostname() + this._port() + this.opts.path + this._query(_0x4e976b);
        }
        _hostname() {
          const _0x1f4169 = this.opts.hostname;
          if (_0x1f4169.indexOf(":") === -1) {
            return _0x1f4169;
          } else {
            return "[" + _0x1f4169 + "]";
          }
        }
        _port() {
          if (this.opts.port && (this.opts.secure && Number(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80)) {
            return ":" + this.opts.port;
          } else {
            return "";
          }
        }
        _query(_0x3a9278) {
          const _0x2f9b73 = (0, _0x5baf91.encode)(_0x3a9278);
          if (_0x2f9b73.length) {
            return "?" + _0x2f9b73;
          } else {
            return "";
          }
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/index.js": (_0x210ef2, _0x1ff8aa, _0x58717e) => {
      'use strict';

      _0x58717e.r(_0x1ff8aa);
      _0x58717e.d(_0x1ff8aa, {
        transports: () => _0x413c88
      });
      var _0x1926e0 = _0x58717e("./node_modules/engine.io-client/build/esm/transports/polling-xhr.js");
      var _0x2a807d = _0x58717e("./node_modules/engine.io-client/build/esm/transports/websocket.js");
      var _0x3732fc = _0x58717e("./node_modules/engine.io-client/build/esm/transports/webtransport.js");
      const _0x413c88 = {
        websocket: _0x2a807d.WS,
        webtransport: _0x3732fc.WT,
        polling: _0x1926e0.XHR
      };
    },
    "./node_modules/engine.io-client/build/esm/transports/polling-fetch.js": (_0x20cd22, _0x1eb831, _0x5a1007) => {
      'use strict';

      _0x5a1007.r(_0x1eb831);
      _0x5a1007.d(_0x1eb831, {
        Fetch: () => _0x314363
      });
      var _0x395be7 = _0x5a1007("./node_modules/engine.io-client/build/esm/transports/polling.js");
      class _0x314363 extends _0x395be7.Polling {
        doPoll() {
          this._fetch().then(_0xbb9aa9 => {
            if (!_0xbb9aa9.ok) {
              return this.onError("fetch read error", _0xbb9aa9.status, _0xbb9aa9);
            }
            _0xbb9aa9.text().then(_0x3a3d89 => this.onData(_0x3a3d89));
          }).catch(_0x29f4ea => {
            this.onError("fetch read error", _0x29f4ea);
          });
        }
        doWrite(_0x5b9459, _0x2abfce) {
          this._fetch(_0x5b9459).then(_0x3d2d06 => {
            if (!_0x3d2d06.ok) {
              return this.onError("fetch write error", _0x3d2d06.status, _0x3d2d06);
            }
            _0x2abfce();
          }).catch(_0x38e882 => {
            this.onError("fetch write error", _0x38e882);
          });
        }
        _fetch(_0x17e50e) {
          var _0xa3fe7e;
          const _0x8b3826 = _0x17e50e !== undefined;
          const _0xb9efd0 = new Headers(this.opts.extraHeaders);
          if (_0x8b3826) {
            _0xb9efd0.set("content-type", "text/plain;charset=UTF-8");
          }
          if ((_0xa3fe7e = this.socket._cookieJar) === null || _0xa3fe7e === undefined) {
            undefined;
          } else {
            _0xa3fe7e.appendCookies(_0xb9efd0);
          }
          return fetch(this.uri(), {
            method: _0x8b3826 ? "POST" : "GET",
            body: _0x8b3826 ? _0x17e50e : null,
            headers: _0xb9efd0,
            credentials: this.opts.withCredentials ? "include" : "omit"
          }).then(_0x423d84 => {
            var _0x41dff2;
            if ((_0x41dff2 = this.socket._cookieJar) === null || _0x41dff2 === undefined) {
              undefined;
            } else {
              _0x41dff2.parseCookies(_0x423d84.headers.getSetCookie());
            }
            return _0x423d84;
          });
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/polling-xhr.js": (_0x3cf417, _0x5be20a, _0xbce639) => {
      'use strict';

      _0xbce639.r(_0x5be20a);
      _0xbce639.d(_0x5be20a, {
        BaseXHR: () => _0x2bc560,
        Request: () => _0x472a80,
        XHR: () => _0x33bd51
      });
      var _0x4df35d = _0xbce639("./node_modules/engine.io-client/build/esm/transports/polling.js");
      var _0x2ca119 = _0xbce639("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
      var _0x502b18 = _0xbce639("./node_modules/engine.io-client/build/esm/util.js");
      var _0x12066d = _0xbce639("./node_modules/engine.io-client/build/esm/globals.js");
      var _0x2f1f32 = _0xbce639("./node_modules/engine.io-client/build/esm/contrib/has-cors.js");
      function _0x867cca() {}
      class _0x2bc560 extends _0x4df35d.Polling {
        constructor(_0x1b0692) {
          super(_0x1b0692);
          if (typeof location !== "undefined") {
            const _0x43e42f = location.protocol === "https:";
            let _0x504e2e = location.port;
            if (!_0x504e2e) {
              _0x504e2e = _0x43e42f ? "443" : "80";
            }
            this.xd = typeof location !== "undefined" && _0x1b0692.hostname !== location.hostname || _0x504e2e !== _0x1b0692.port;
          }
        }
        doWrite(_0xa16f27, _0x211cf0) {
          const _0x219522 = this.request({
            method: "POST",
            data: _0xa16f27
          });
          _0x219522.on("success", _0x211cf0);
          _0x219522.on("error", (_0x984522, _0x59d036) => {
            this.onError("xhr post error", _0x984522, _0x59d036);
          });
        }
        doPoll() {
          const _0x49950b = this.request();
          _0x49950b.on("data", this.onData.bind(this));
          _0x49950b.on("error", (_0x2444d5, _0x294843) => {
            this.onError("xhr poll error", _0x2444d5, _0x294843);
          });
          this.pollXhr = _0x49950b;
        }
      }
      class _0x472a80 extends _0x2ca119.Emitter {
        constructor(_0x281b3e, _0x383a7e, _0x59c6f) {
          super();
          this.createRequest = _0x281b3e;
          (0, _0x502b18.installTimerFunctions)(this, _0x59c6f);
          this._opts = _0x59c6f;
          this._method = _0x59c6f.method || "GET";
          this._uri = _0x383a7e;
          this._data = _0x59c6f.data !== undefined ? _0x59c6f.data : null;
          this._create();
        }
        _create() {
          var _0x24701b;
          const _0x250316 = (0, _0x502b18.pick)(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
          _0x250316.xdomain = !!this._opts.xd;
          const _0x4875a9 = this._xhr = this.createRequest(_0x250316);
          try {
            _0x4875a9.open(this._method, this._uri, true);
            try {
              if (this._opts.extraHeaders) {
                if (_0x4875a9.setDisableHeaderCheck) {
                  _0x4875a9.setDisableHeaderCheck(true);
                }
                for (let _0x411a8e in this._opts.extraHeaders) {
                  if (this._opts.extraHeaders.hasOwnProperty(_0x411a8e)) {
                    _0x4875a9.setRequestHeader(_0x411a8e, this._opts.extraHeaders[_0x411a8e]);
                  }
                }
              }
            } catch (_0x5c5b39) {}
            if (this._method === "POST") {
              try {
                _0x4875a9.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (_0x4fff02) {}
            }
            try {
              _0x4875a9.setRequestHeader("Accept", "*/*");
            } catch (_0x7e781a) {}
            if ((_0x24701b = this._opts.cookieJar) === null || _0x24701b === undefined) {
              undefined;
            } else {
              _0x24701b.addCookies(_0x4875a9);
            }
            if ("withCredentials" in _0x4875a9) {
              _0x4875a9.withCredentials = this._opts.withCredentials;
            }
            if (this._opts.requestTimeout) {
              _0x4875a9.timeout = this._opts.requestTimeout;
            }
            _0x4875a9.onreadystatechange = () => {
              var _0x2bbaac;
              if (_0x4875a9.readyState === 3) {
                if ((_0x2bbaac = this._opts.cookieJar) === null || _0x2bbaac === undefined) {
                  undefined;
                } else {
                  _0x2bbaac.parseCookies(_0x4875a9.getResponseHeader("set-cookie"));
                }
              }
              if (_0x4875a9.readyState !== 4) {
                return;
              }
              if (_0x4875a9.status === 200 || _0x4875a9.status === 1223) {
                this._onLoad();
              } else {
                this.setTimeoutFn(() => {
                  this._onError(typeof _0x4875a9.status === "number" ? _0x4875a9.status : 0);
                }, 0);
              }
            };
            _0x4875a9.send(this._data);
          } catch (_0xf69eae) {
            this.setTimeoutFn(() => {
              this._onError(_0xf69eae);
            }, 0);
            return;
          }
          if (typeof document !== "undefined") {
            this._index = _0x472a80.requestsCount++;
            _0x472a80.requests[this._index] = this;
          }
        }
        _onError(_0xd8ae40) {
          this.emitReserved("error", _0xd8ae40, this._xhr);
          this._cleanup(true);
        }
        _cleanup(_0xd7651c) {
          if (typeof this._xhr === "undefined" || this._xhr === null) {
            return;
          }
          this._xhr.onreadystatechange = _0x867cca;
          if (_0xd7651c) {
            try {
              this._xhr.abort();
            } catch (_0x1eaebf) {}
          }
          if (typeof document !== "undefined") {
            delete _0x472a80.requests[this._index];
          }
          this._xhr = null;
        }
        _onLoad() {
          const _0x31a0a0 = this._xhr.responseText;
          if (_0x31a0a0 !== null) {
            this.emitReserved("data", _0x31a0a0);
            this.emitReserved("success");
            this._cleanup();
          }
        }
        abort() {
          this._cleanup();
        }
      }
      _0x472a80.requestsCount = 0;
      _0x472a80.requests = {};
      if (typeof document !== "undefined") {
        if (typeof attachEvent === "function") {
          attachEvent("onunload", _0x1ffae0);
        } else if (typeof addEventListener === "function") {
          const _0x45a39b = "onpagehide" in _0x12066d.globalThisShim ? "pagehide" : "unload";
          addEventListener(_0x45a39b, _0x1ffae0, false);
        }
      }
      function _0x1ffae0() {
        for (let _0x5bb06c in _0x472a80.requests) {
          if (_0x472a80.requests.hasOwnProperty(_0x5bb06c)) {
            _0x472a80.requests[_0x5bb06c].abort();
          }
        }
      }
      const _0x2580aa = function () {
        const _0x14e3a3 = _0x432c57({
          xdomain: false
        });
        return _0x14e3a3 && _0x14e3a3.responseType !== null;
      }();
      class _0x33bd51 extends _0x2bc560 {
        constructor(_0x4dddf8) {
          super(_0x4dddf8);
          const _0x2ac672 = _0x4dddf8 && _0x4dddf8.forceBase64;
          this.supportsBinary = _0x2580aa && !_0x2ac672;
        }
        request(_0x51f943 = {}) {
          Object.assign(_0x51f943, {
            xd: this.xd
          }, this.opts);
          return new _0x472a80(_0x432c57, this.uri(), _0x51f943);
        }
      }
      function _0x432c57(_0x4a477f) {
        const _0x486ad3 = _0x4a477f.xdomain;
        try {
          if (typeof XMLHttpRequest !== "undefined" && (!_0x486ad3 || _0x2f1f32.hasCORS)) {
            return new XMLHttpRequest();
          }
        } catch (_0x5791f8) {}
        if (!_0x486ad3) {
          try {
            return new _0x12066d.globalThisShim[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
          } catch (_0x4b9c55) {}
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/polling.js": (_0x252272, _0xcf3f0c, _0x147ff0) => {
      'use strict';

      _0x147ff0.r(_0xcf3f0c);
      _0x147ff0.d(_0xcf3f0c, {
        Polling: () => _0x1b8513
      });
      var _0xa9bb7d = _0x147ff0("./node_modules/engine.io-client/build/esm/transport.js");
      var _0x34e39c = _0x147ff0("./node_modules/engine.io-client/build/esm/util.js");
      var _0x271ee7 = _0x147ff0("./node_modules/engine.io-parser/build/esm/index.js");
      class _0x1b8513 extends _0xa9bb7d.Transport {
        constructor() {
          super(...arguments);
          this._polling = false;
        }
        get name() {
          return "polling";
        }
        doOpen() {
          this._poll();
        }
        pause(_0x14ce5e) {
          this.readyState = "pausing";
          const _0x4fed92 = () => {
            this.readyState = "paused";
            _0x14ce5e();
          };
          if (this._polling || !this.writable) {
            let _0x1b7cdd = 0;
            if (this._polling) {
              _0x1b7cdd++;
              this.once("pollComplete", function () {
                if (! --_0x1b7cdd) {
                  _0x4fed92();
                }
              });
            }
            if (!this.writable) {
              _0x1b7cdd++;
              this.once("drain", function () {
                if (! --_0x1b7cdd) {
                  _0x4fed92();
                }
              });
            }
          } else {
            _0x4fed92();
          }
        }
        _poll() {
          this._polling = true;
          this.doPoll();
          this.emitReserved("poll");
        }
        onData(_0x35f1b0) {
          const _0x1b87b9 = _0x397b8a => {
            if (this.readyState === "opening" && _0x397b8a.type === "open") {
              this.onOpen();
            }
            if (_0x397b8a.type === "close") {
              this.onClose({
                description: "transport closed by the server"
              });
              return false;
            }
            this.onPacket(_0x397b8a);
          };
          (0, _0x271ee7.decodePayload)(_0x35f1b0, this.socket.binaryType).forEach(_0x1b87b9);
          if (this.readyState !== "closed") {
            this._polling = false;
            this.emitReserved("pollComplete");
            if (this.readyState === "open") {
              this._poll();
            } else {}
          }
        }
        doClose() {
          const _0x468a45 = () => {
            this.write([{
              type: "close"
            }]);
          };
          if (this.readyState === "open") {
            _0x468a45();
          } else {
            this.once("open", _0x468a45);
          }
        }
        write(_0x5e166c) {
          this.writable = false;
          (0, _0x271ee7.encodePayload)(_0x5e166c, _0x598629 => {
            this.doWrite(_0x598629, () => {
              this.writable = true;
              this.emitReserved("drain");
            });
          });
        }
        uri() {
          const _0x517f68 = this.opts.secure ? "https" : "http";
          const _0x1a71e1 = this.query || {};
          if (this.opts.timestampRequests !== false) {
            _0x1a71e1[this.opts.timestampParam] = (0, _0x34e39c.randomString)();
          }
          if (!this.supportsBinary && !_0x1a71e1.sid) {
            _0x1a71e1.b64 = 1;
          }
          return this.createUri(_0x517f68, _0x1a71e1);
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/websocket.js": (_0x45cb05, _0xbbfc8b, _0x3f2d0e) => {
      'use strict';

      _0x3f2d0e.r(_0xbbfc8b);
      _0x3f2d0e.d(_0xbbfc8b, {
        BaseWS: () => _0x1a8160,
        WS: () => _0x2eab41
      });
      var _0x22a195 = _0x3f2d0e("./node_modules/engine.io-client/build/esm/transport.js");
      var _0x3451d9 = _0x3f2d0e("./node_modules/engine.io-client/build/esm/util.js");
      var _0x351faf = _0x3f2d0e("./node_modules/engine.io-parser/build/esm/index.js");
      var _0x2195f8 = _0x3f2d0e("./node_modules/engine.io-client/build/esm/globals.js");
      const _0x2819e9 = typeof navigator !== "undefined" && typeof navigator.product === "string" && navigator.product.toLowerCase() === "reactnative";
      class _0x1a8160 extends _0x22a195.Transport {
        get name() {
          return "websocket";
        }
        doOpen() {
          const _0xd7db5b = this.uri();
          const _0x585102 = this.opts.protocols;
          const _0x3fb1ac = _0x2819e9 ? {} : (0, _0x3451d9.pick)(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
          if (this.opts.extraHeaders) {
            _0x3fb1ac.headers = this.opts.extraHeaders;
          }
          try {
            this.ws = this.createSocket(_0xd7db5b, _0x585102, _0x3fb1ac);
          } catch (_0x4b6028) {
            return this.emitReserved("error", _0x4b6028);
          }
          this.ws.binaryType = this.socket.binaryType;
          this.addEventListeners();
        }
        addEventListeners() {
          this.ws.onopen = () => {
            if (this.opts.autoUnref) {
              this.ws._socket.unref();
            }
            this.onOpen();
          };
          this.ws.onclose = _0x5d0fb1 => this.onClose({
            description: "websocket connection closed",
            context: _0x5d0fb1
          });
          this.ws.onmessage = _0x152124 => this.onData(_0x152124.data);
          this.ws.onerror = _0x62305e => this.onError("websocket error", _0x62305e);
        }
        write(_0x1be73a) {
          this.writable = false;
          for (let _0x5e9b92 = 0; _0x5e9b92 < _0x1be73a.length; _0x5e9b92++) {
            const _0x1ba620 = _0x1be73a[_0x5e9b92];
            const _0x43dcd7 = _0x5e9b92 === _0x1be73a.length - 1;
            (0, _0x351faf.encodePacket)(_0x1ba620, this.supportsBinary, _0x2025aa => {
              try {
                this.doWrite(_0x1ba620, _0x2025aa);
              } catch (_0xea5895) {}
              if (_0x43dcd7) {
                (0, _0x2195f8.nextTick)(() => {
                  this.writable = true;
                  this.emitReserved("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }
        doClose() {
          if (typeof this.ws !== "undefined") {
            this.ws.onerror = () => {};
            this.ws.close();
            this.ws = null;
          }
        }
        uri() {
          const _0x47d239 = this.opts.secure ? "wss" : "ws";
          const _0x49c4a4 = this.query || {};
          if (this.opts.timestampRequests) {
            _0x49c4a4[this.opts.timestampParam] = (0, _0x3451d9.randomString)();
          }
          if (!this.supportsBinary) {
            _0x49c4a4.b64 = 1;
          }
          return this.createUri(_0x47d239, _0x49c4a4);
        }
      }
      const _0x3e926e = _0x2195f8.globalThisShim.WebSocket || _0x2195f8.globalThisShim.MozWebSocket;
      class _0x2eab41 extends _0x1a8160 {
        createSocket(_0x2146f0, _0x205190, _0x3f3278) {
          if (!_0x2819e9) {
            if (_0x205190) {
              return new _0x3e926e(_0x2146f0, _0x205190);
            } else {
              return new _0x3e926e(_0x2146f0);
            }
          } else {
            return new _0x3e926e(_0x2146f0, _0x205190, _0x3f3278);
          }
        }
        doWrite(_0x5ed5a9, _0x16def2) {
          this.ws.send(_0x16def2);
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/transports/webtransport.js": (_0x2ef960, _0x36dc77, _0x447f55) => {
      'use strict';

      _0x447f55.r(_0x36dc77);
      _0x447f55.d(_0x36dc77, {
        WT: () => _0x4954b8
      });
      var _0x24e5f6 = _0x447f55("./node_modules/engine.io-client/build/esm/transport.js");
      var _0x3f8a5b = _0x447f55("./node_modules/engine.io-client/build/esm/globals.js");
      var _0x1f09b0 = _0x447f55("./node_modules/engine.io-parser/build/esm/index.js");
      class _0x4954b8 extends _0x24e5f6.Transport {
        get name() {
          return "webtransport";
        }
        doOpen() {
          try {
            this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
          } catch (_0x108d84) {
            return this.emitReserved("error", _0x108d84);
          }
          this._transport.closed.then(() => {
            this.onClose();
          }).catch(_0x43c0e9 => {
            this.onError("webtransport error", _0x43c0e9);
          });
          this._transport.ready.then(() => {
            this._transport.createBidirectionalStream().then(_0x42f748 => {
              const _0x4b1be2 = (0, _0x1f09b0.createPacketDecoderStream)(Number.MAX_SAFE_INTEGER, this.socket.binaryType);
              const _0x1ff523 = _0x42f748.readable.pipeThrough(_0x4b1be2).getReader();
              const _0x2dfbbf = (0, _0x1f09b0.createPacketEncoderStream)();
              _0x2dfbbf.readable.pipeTo(_0x42f748.writable);
              this._writer = _0x2dfbbf.writable.getWriter();
              const _0x2d6c03 = () => {
                _0x1ff523.read().then(({
                  done: _0x31df6f,
                  value: _0x2f8b36
                }) => {
                  if (_0x31df6f) {
                    return;
                  }
                  this.onPacket(_0x2f8b36);
                  _0x2d6c03();
                }).catch(_0x55323b => {});
              };
              _0x2d6c03();
              const _0xaf343e = {
                type: "open"
              };
              if (this.query.sid) {
                _0xaf343e.data = "{\"sid\":\"" + this.query.sid + "\"}";
              }
              this._writer.write(_0xaf343e).then(() => this.onOpen());
            });
          });
        }
        write(_0x3b1cdf) {
          this.writable = false;
          for (let _0x35e939 = 0; _0x35e939 < _0x3b1cdf.length; _0x35e939++) {
            const _0x3cd6bb = _0x3b1cdf[_0x35e939];
            const _0x263b59 = _0x35e939 === _0x3b1cdf.length - 1;
            this._writer.write(_0x3cd6bb).then(() => {
              if (_0x263b59) {
                (0, _0x3f8a5b.nextTick)(() => {
                  this.writable = true;
                  this.emitReserved("drain");
                }, this.setTimeoutFn);
              }
            });
          }
        }
        doClose() {
          var _0xac15d4;
          if ((_0xac15d4 = this._transport) === null || _0xac15d4 === undefined) {
            undefined;
          } else {
            _0xac15d4.close();
          }
        }
      }
    },
    "./node_modules/engine.io-client/build/esm/util.js": (_0x58932f, _0x4a645c, _0x53b868) => {
      'use strict';

      _0x53b868.r(_0x4a645c);
      _0x53b868.d(_0x4a645c, {
        byteLength: () => _0x3a7ab3,
        installTimerFunctions: () => _0x30f23c,
        pick: () => _0x21599f,
        randomString: () => _0x446b4
      });
      var _0x3c97c1 = _0x53b868("./node_modules/engine.io-client/build/esm/globals.js");
      function _0x21599f(_0x1ad940, ..._0xb6c77e) {
        return _0xb6c77e.reduce((_0x37f9ec, _0x1e23d4) => {
          if (_0x1ad940.hasOwnProperty(_0x1e23d4)) {
            _0x37f9ec[_0x1e23d4] = _0x1ad940[_0x1e23d4];
          }
          return _0x37f9ec;
        }, {});
      }
      const _0x1ba055 = _0x3c97c1.globalThisShim.setTimeout;
      const _0x359fda = _0x3c97c1.globalThisShim.clearTimeout;
      function _0x30f23c(_0x336834, _0x555a70) {
        if (_0x555a70.useNativeTimers) {
          _0x336834.setTimeoutFn = _0x1ba055.bind(_0x3c97c1.globalThisShim);
          _0x336834.clearTimeoutFn = _0x359fda.bind(_0x3c97c1.globalThisShim);
        } else {
          _0x336834.setTimeoutFn = _0x3c97c1.globalThisShim.setTimeout.bind(_0x3c97c1.globalThisShim);
          _0x336834.clearTimeoutFn = _0x3c97c1.globalThisShim.clearTimeout.bind(_0x3c97c1.globalThisShim);
        }
      }
      const _0x4e6f01 = 1.33;
      function _0x3a7ab3(_0x57cb9b) {
        if (typeof _0x57cb9b === "string") {
          return _0x5162d2(_0x57cb9b);
        }
        return Math.ceil((_0x57cb9b.byteLength || _0x57cb9b.size) * _0x4e6f01);
      }
      function _0x5162d2(_0x32fab6) {
        let _0x31147a = 0;
        let _0x3a84e7 = 0;
        for (let _0x7dd1b8 = 0, _0x1fefad = _0x32fab6.length; _0x7dd1b8 < _0x1fefad; _0x7dd1b8++) {
          _0x31147a = _0x32fab6.charCodeAt(_0x7dd1b8);
          if (_0x31147a < 128) {
            _0x3a84e7 += 1;
          } else if (_0x31147a < 2048) {
            _0x3a84e7 += 2;
          } else if (_0x31147a < 55296 || _0x31147a >= 57344) {
            _0x3a84e7 += 3;
          } else {
            _0x7dd1b8++;
            _0x3a84e7 += 4;
          }
        }
        return _0x3a84e7;
      }
      function _0x446b4() {
        return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
      }
    },
    "./node_modules/engine.io-parser/build/esm/commons.js": (_0x552a0d, _0x371985, _0x2b5f35) => {
      'use strict';

      _0x2b5f35.r(_0x371985);
      _0x2b5f35.d(_0x371985, {
        ERROR_PACKET: () => _0x4758bc,
        PACKET_TYPES: () => _0x243d20,
        PACKET_TYPES_REVERSE: () => _0x30c679
      });
      const _0x243d20 = Object.create(null);
      _0x243d20.open = "0";
      _0x243d20.close = "1";
      _0x243d20.ping = "2";
      _0x243d20.pong = "3";
      _0x243d20.message = "4";
      _0x243d20.upgrade = "5";
      _0x243d20.noop = "6";
      const _0x30c679 = Object.create(null);
      Object.keys(_0x243d20).forEach(_0x503882 => {
        _0x30c679[_0x243d20[_0x503882]] = _0x503882;
      });
      const _0x4758bc = {
        type: "error",
        data: "parser error"
      };
    },
    "./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js": (_0xfb1249, _0x13bee0, _0x727f87) => {
      'use strict';

      _0x727f87.r(_0x13bee0);
      _0x727f87.d(_0x13bee0, {
        decode: () => _0x2ac1b6,
        encode: () => _0x1ef4f6
      });
      const _0x4b922a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
      const _0x4968c4 = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);
      for (let _0x199578 = 0; _0x199578 < _0x4b922a.length; _0x199578++) {
        _0x4968c4[_0x4b922a.charCodeAt(_0x199578)] = _0x199578;
      }
      const _0x1ef4f6 = _0x35b053 => {
        let _0x500c3c = new Uint8Array(_0x35b053);
        let _0x23ecd8;
        let _0x1f38f0 = _0x500c3c.length;
        let _0x78d78a = "";
        for (_0x23ecd8 = 0; _0x23ecd8 < _0x1f38f0; _0x23ecd8 += 3) {
          _0x78d78a += _0x4b922a[_0x500c3c[_0x23ecd8] >> 2];
          _0x78d78a += _0x4b922a[(_0x500c3c[_0x23ecd8] & 3) << 4 | _0x500c3c[_0x23ecd8 + 1] >> 4];
          _0x78d78a += _0x4b922a[(_0x500c3c[_0x23ecd8 + 1] & 15) << 2 | _0x500c3c[_0x23ecd8 + 2] >> 6];
          _0x78d78a += _0x4b922a[_0x500c3c[_0x23ecd8 + 2] & 63];
        }
        if (_0x1f38f0 % 3 === 2) {
          _0x78d78a = _0x78d78a.substring(0, _0x78d78a.length - 1) + "=";
        } else if (_0x1f38f0 % 3 === 1) {
          _0x78d78a = _0x78d78a.substring(0, _0x78d78a.length - 2) + "==";
        }
        return _0x78d78a;
      };
      const _0x2ac1b6 = _0x44403c => {
        let _0x8a0c2b = _0x44403c.length * 0.75;
        let _0x365405 = _0x44403c.length;
        let _0x12c0a7;
        let _0x28adcb = 0;
        let _0x30a05b;
        let _0x57f6f4;
        let _0x51f6e8;
        let _0x3eeabe;
        if (_0x44403c[_0x44403c.length - 1] === "=") {
          _0x8a0c2b--;
          if (_0x44403c[_0x44403c.length - 2] === "=") {
            _0x8a0c2b--;
          }
        }
        const _0x2edbb6 = new ArrayBuffer(_0x8a0c2b);
        const _0x250c5c = new Uint8Array(_0x2edbb6);
        for (_0x12c0a7 = 0; _0x12c0a7 < _0x365405; _0x12c0a7 += 4) {
          _0x30a05b = _0x4968c4[_0x44403c.charCodeAt(_0x12c0a7)];
          _0x57f6f4 = _0x4968c4[_0x44403c.charCodeAt(_0x12c0a7 + 1)];
          _0x51f6e8 = _0x4968c4[_0x44403c.charCodeAt(_0x12c0a7 + 2)];
          _0x3eeabe = _0x4968c4[_0x44403c.charCodeAt(_0x12c0a7 + 3)];
          _0x250c5c[_0x28adcb++] = _0x30a05b << 2 | _0x57f6f4 >> 4;
          _0x250c5c[_0x28adcb++] = (_0x57f6f4 & 15) << 4 | _0x51f6e8 >> 2;
          _0x250c5c[_0x28adcb++] = (_0x51f6e8 & 3) << 6 | _0x3eeabe & 63;
        }
        return _0x2edbb6;
      };
    },
    "./node_modules/engine.io-parser/build/esm/decodePacket.browser.js": (_0x15080a, _0xb93ce0, _0x16c8dc) => {
      'use strict';

      _0x16c8dc.r(_0xb93ce0);
      _0x16c8dc.d(_0xb93ce0, {
        decodePacket: () => _0x3ce0ed
      });
      var _0x28d561 = _0x16c8dc("./node_modules/engine.io-parser/build/esm/commons.js");
      var _0x582788 = _0x16c8dc("./node_modules/engine.io-parser/build/esm/contrib/base64-arraybuffer.js");
      const _0x3e29b7 = typeof ArrayBuffer === "function";
      const _0x3ce0ed = (_0x585cf5, _0x3e1cd3) => {
        if (typeof _0x585cf5 !== "string") {
          return {
            type: "message",
            data: _0x164fcf(_0x585cf5, _0x3e1cd3)
          };
        }
        const _0x21c039 = _0x585cf5.charAt(0);
        if (_0x21c039 === "b") {
          return {
            type: "message",
            data: _0x25ac09(_0x585cf5.substring(1), _0x3e1cd3)
          };
        }
        const _0x2004b9 = _0x28d561.PACKET_TYPES_REVERSE[_0x21c039];
        if (!_0x2004b9) {
          return _0x28d561.ERROR_PACKET;
        }
        if (_0x585cf5.length > 1) {
          return {
            type: _0x28d561.PACKET_TYPES_REVERSE[_0x21c039],
            data: _0x585cf5.substring(1)
          };
        } else {
          return {
            type: _0x28d561.PACKET_TYPES_REVERSE[_0x21c039]
          };
        }
      };
      const _0x25ac09 = (_0x3e957b, _0x21ed9c) => {
        if (_0x3e29b7) {
          const _0x2b15c8 = (0, _0x582788.decode)(_0x3e957b);
          return _0x164fcf(_0x2b15c8, _0x21ed9c);
        } else {
          return {
            base64: true,
            data: _0x3e957b
          };
        }
      };
      const _0x164fcf = (_0x229255, _0xdc3e94) => {
        switch (_0xdc3e94) {
          case "blob":
            if (_0x229255 instanceof Blob) {
              return _0x229255;
            } else {
              return new Blob([_0x229255]);
            }
          case "arraybuffer":
          default:
            if (_0x229255 instanceof ArrayBuffer) {
              return _0x229255;
            } else {
              return _0x229255.buffer;
            }
        }
      };
    },
    "./node_modules/engine.io-parser/build/esm/encodePacket.browser.js": (_0xaf945, _0x5dc7ee, _0x21856f) => {
      'use strict';

      _0x21856f.r(_0x5dc7ee);
      _0x21856f.d(_0x5dc7ee, {
        encodePacket: () => _0xdb196e,
        encodePacketToBinary: () => _0xcd9c08
      });
      var _0x113d1a = _0x21856f("./node_modules/engine.io-parser/build/esm/commons.js");
      const _0x245040 = typeof Blob === "function" || typeof Blob !== "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]";
      const _0x400683 = typeof ArrayBuffer === "function";
      const _0x1eb219 = _0x17fa78 => {
        if (typeof ArrayBuffer.isView === "function") {
          return ArrayBuffer.isView(_0x17fa78);
        } else {
          return _0x17fa78 && _0x17fa78.buffer instanceof ArrayBuffer;
        }
      };
      const _0xdb196e = ({
        type: _0x3cd2b0,
        data: _0x3a1c32
      }, _0x1c93ca, _0x2f3aec) => {
        if (_0x245040 && _0x3a1c32 instanceof Blob) {
          if (_0x1c93ca) {
            return _0x2f3aec(_0x3a1c32);
          } else {
            return _0x278b8a(_0x3a1c32, _0x2f3aec);
          }
        } else if (_0x400683 && (_0x3a1c32 instanceof ArrayBuffer || _0x1eb219(_0x3a1c32))) {
          if (_0x1c93ca) {
            return _0x2f3aec(_0x3a1c32);
          } else {
            return _0x278b8a(new Blob([_0x3a1c32]), _0x2f3aec);
          }
        }
        return _0x2f3aec(_0x113d1a.PACKET_TYPES[_0x3cd2b0] + (_0x3a1c32 || ""));
      };
      const _0x278b8a = (_0x58d2c5, _0x211a64) => {
        const _0x5dd430 = new FileReader();
        _0x5dd430.onload = function () {
          const _0x439f21 = _0x5dd430.result.split(",")[1];
          _0x211a64("b" + (_0x439f21 || ""));
        };
        return _0x5dd430.readAsDataURL(_0x58d2c5);
      };
      function _0x54112b(_0x289341) {
        if (_0x289341 instanceof Uint8Array) {
          return _0x289341;
        } else if (_0x289341 instanceof ArrayBuffer) {
          return new Uint8Array(_0x289341);
        } else {
          return new Uint8Array(_0x289341.buffer, _0x289341.byteOffset, _0x289341.byteLength);
        }
      }
      let _0x3af420;
      function _0xcd9c08(_0x3a7d58, _0x2406e8) {
        if (_0x245040 && _0x3a7d58.data instanceof Blob) {
          return _0x3a7d58.data.arrayBuffer().then(_0x54112b).then(_0x2406e8);
        } else if (_0x400683 && (_0x3a7d58.data instanceof ArrayBuffer || _0x1eb219(_0x3a7d58.data))) {
          return _0x2406e8(_0x54112b(_0x3a7d58.data));
        }
        _0xdb196e(_0x3a7d58, false, _0x57c9d1 => {
          if (!_0x3af420) {
            _0x3af420 = new TextEncoder();
          }
          _0x2406e8(_0x3af420.encode(_0x57c9d1));
        });
      }
    },
    "./node_modules/engine.io-parser/build/esm/index.js": (_0xa97888, _0x588c24, _0x9c9998) => {
      'use strict';

      _0x9c9998.r(_0x588c24);
      _0x9c9998.d(_0x588c24, {
        createPacketDecoderStream: () => _0x42ea05,
        createPacketEncoderStream: () => _0x2ebd19,
        decodePacket: () => _0x26f933.decodePacket,
        decodePayload: () => _0x2d69d3,
        encodePacket: () => _0x39c771.encodePacket,
        encodePayload: () => _0x550845,
        protocol: () => _0x465beb
      });
      var _0x39c771 = _0x9c9998("./node_modules/engine.io-parser/build/esm/encodePacket.browser.js");
      var _0x26f933 = _0x9c9998("./node_modules/engine.io-parser/build/esm/decodePacket.browser.js");
      var _0x1ee532 = _0x9c9998("./node_modules/engine.io-parser/build/esm/commons.js");
      const _0x5ed47a = String.fromCharCode(30);
      const _0x550845 = (_0x4c870e, _0x149076) => {
        const _0x52702a = _0x4c870e.length;
        const _0x219982 = new Array(_0x52702a);
        let _0x290f5c = 0;
        _0x4c870e.forEach((_0x29d66e, _0x4f69fe) => {
          (0, _0x39c771.encodePacket)(_0x29d66e, false, _0x50af24 => {
            _0x219982[_0x4f69fe] = _0x50af24;
            if (++_0x290f5c === _0x52702a) {
              _0x149076(_0x219982.join(_0x5ed47a));
            }
          });
        });
      };
      const _0x2d69d3 = (_0x5c481b, _0x2eff66) => {
        const _0x1e2a58 = _0x5c481b.split(_0x5ed47a);
        const _0x2eb2d3 = [];
        for (let _0x4715de = 0; _0x4715de < _0x1e2a58.length; _0x4715de++) {
          const _0x33b26f = (0, _0x26f933.decodePacket)(_0x1e2a58[_0x4715de], _0x2eff66);
          _0x2eb2d3.push(_0x33b26f);
          if (_0x33b26f.type === "error") {
            break;
          }
        }
        return _0x2eb2d3;
      };
      function _0x2ebd19() {
        return new TransformStream({
          transform(_0x38da8c, _0x38aad8) {
            (0, _0x39c771.encodePacketToBinary)(_0x38da8c, _0x5ebb6f => {
              const _0x255e10 = _0x5ebb6f.length;
              let _0x3d7652;
              if (_0x255e10 < 126) {
                _0x3d7652 = new Uint8Array(1);
                new DataView(_0x3d7652.buffer).setUint8(0, _0x255e10);
              } else if (_0x255e10 < 65536) {
                _0x3d7652 = new Uint8Array(3);
                const _0x409f36 = new DataView(_0x3d7652.buffer);
                _0x409f36.setUint8(0, 126);
                _0x409f36.setUint16(1, _0x255e10);
              } else {
                _0x3d7652 = new Uint8Array(9);
                const _0x186539 = new DataView(_0x3d7652.buffer);
                _0x186539.setUint8(0, 127);
                _0x186539.setBigUint64(1, BigInt(_0x255e10));
              }
              if (_0x38da8c.data && typeof _0x38da8c.data !== "string") {
                _0x3d7652[0] |= 128;
              }
              _0x38aad8.enqueue(_0x3d7652);
              _0x38aad8.enqueue(_0x5ebb6f);
            });
          }
        });
      }
      let _0x58620d;
      function _0xdead26(_0x2aec17) {
        return _0x2aec17.reduce((_0x3784ac, _0x2a1834) => _0x3784ac + _0x2a1834.length, 0);
      }
      function _0x54428a(_0x42a7a1, _0x30592a) {
        if (_0x42a7a1[0].length === _0x30592a) {
          return _0x42a7a1.shift();
        }
        const _0x386588 = new Uint8Array(_0x30592a);
        let _0x524003 = 0;
        for (let _0x3afe09 = 0; _0x3afe09 < _0x30592a; _0x3afe09++) {
          _0x386588[_0x3afe09] = _0x42a7a1[0][_0x524003++];
          if (_0x524003 === _0x42a7a1[0].length) {
            _0x42a7a1.shift();
            _0x524003 = 0;
          }
        }
        if (_0x42a7a1.length && _0x524003 < _0x42a7a1[0].length) {
          _0x42a7a1[0] = _0x42a7a1[0].slice(_0x524003);
        }
        return _0x386588;
      }
      function _0x42ea05(_0x22a581, _0xa2d126) {
        if (!_0x58620d) {
          _0x58620d = new TextDecoder();
        }
        const _0x4348b3 = [];
        let _0x5ac701 = 0;
        let _0x531923 = -1;
        let _0x1892b1 = false;
        return new TransformStream({
          transform(_0x21c293, _0x1f5ae6) {
            _0x4348b3.push(_0x21c293);
            while (true) {
              if (_0x5ac701 === 0) {
                if (_0xdead26(_0x4348b3) < 1) {
                  break;
                }
                const _0x25f8b3 = _0x54428a(_0x4348b3, 1);
                _0x1892b1 = (_0x25f8b3[0] & 128) === 128;
                _0x531923 = _0x25f8b3[0] & 127;
                if (_0x531923 < 126) {
                  _0x5ac701 = 3;
                } else if (_0x531923 === 126) {
                  _0x5ac701 = 1;
                } else {
                  _0x5ac701 = 2;
                }
              } else if (_0x5ac701 === 1) {
                if (_0xdead26(_0x4348b3) < 2) {
                  break;
                }
                const _0x3a5a2b = _0x54428a(_0x4348b3, 2);
                _0x531923 = new DataView(_0x3a5a2b.buffer, _0x3a5a2b.byteOffset, _0x3a5a2b.length).getUint16(0);
                _0x5ac701 = 3;
              } else if (_0x5ac701 === 2) {
                if (_0xdead26(_0x4348b3) < 8) {
                  break;
                }
                const _0xa8d06f = _0x54428a(_0x4348b3, 8);
                const _0x27e973 = new DataView(_0xa8d06f.buffer, _0xa8d06f.byteOffset, _0xa8d06f.length);
                const _0x5eb47b = _0x27e973.getUint32(0);
                if (_0x5eb47b > Math.pow(2, 21) - 1) {
                  _0x1f5ae6.enqueue(_0x1ee532.ERROR_PACKET);
                  break;
                }
                _0x531923 = _0x5eb47b * Math.pow(2, 32) + _0x27e973.getUint32(4);
                _0x5ac701 = 3;
              } else {
                if (_0xdead26(_0x4348b3) < _0x531923) {
                  break;
                }
                const _0x3b9335 = _0x54428a(_0x4348b3, _0x531923);
                _0x1f5ae6.enqueue((0, _0x26f933.decodePacket)(_0x1892b1 ? _0x3b9335 : _0x58620d.decode(_0x3b9335), _0xa2d126));
                _0x5ac701 = 0;
              }
              if (_0x531923 === 0 || _0x531923 > _0x22a581) {
                _0x1f5ae6.enqueue(_0x1ee532.ERROR_PACKET);
                break;
              }
            }
          }
        });
      }
      const _0x465beb = 4;
    },
    "./node_modules/howler/dist/howler.js": (_0x4bb999, _0x41a285, _0xa8660f) => {
      var _0x5e14b9;
      var _0x51c325;
      (function () {
        'use strict';

        function _0x52f8bb() {
          this.init();
        }
        _0x52f8bb.prototype = {
          init: function () {
            var _0x25d3de = this || _0x17f8e5;
            _0x25d3de._counter = 1000;
            _0x25d3de._html5AudioPool = [];
            _0x25d3de.html5PoolSize = 10;
            _0x25d3de._codecs = {};
            _0x25d3de._howls = [];
            _0x25d3de._muted = false;
            _0x25d3de._volume = 1;
            _0x25d3de._canPlayEvent = "canplaythrough";
            _0x25d3de._navigator = typeof window !== "undefined" && window.navigator ? window.navigator : null;
            _0x25d3de.masterGain = null;
            _0x25d3de.noAudio = false;
            _0x25d3de.usingWebAudio = true;
            _0x25d3de.autoSuspend = true;
            _0x25d3de.ctx = null;
            _0x25d3de.autoUnlock = true;
            _0x25d3de._setup();
            return _0x25d3de;
          },
          volume: function (_0x3c930f) {
            var _0x23bac0 = this || _0x17f8e5;
            _0x3c930f = parseFloat(_0x3c930f);
            if (!_0x23bac0.ctx) {
              _0x51faf6();
            }
            if (typeof _0x3c930f !== "undefined" && _0x3c930f >= 0 && _0x3c930f <= 1) {
              _0x23bac0._volume = _0x3c930f;
              if (_0x23bac0._muted) {
                return _0x23bac0;
              }
              if (_0x23bac0.usingWebAudio) {
                _0x23bac0.masterGain.gain.setValueAtTime(_0x3c930f, _0x17f8e5.ctx.currentTime);
              }
              for (var _0xa88c16 = 0; _0xa88c16 < _0x23bac0._howls.length; _0xa88c16++) {
                if (!_0x23bac0._howls[_0xa88c16]._webAudio) {
                  var _0x380713 = _0x23bac0._howls[_0xa88c16]._getSoundIds();
                  for (var _0x5a3d2f = 0; _0x5a3d2f < _0x380713.length; _0x5a3d2f++) {
                    var _0x4e9dac = _0x23bac0._howls[_0xa88c16]._soundById(_0x380713[_0x5a3d2f]);
                    if (_0x4e9dac && _0x4e9dac._node) {
                      _0x4e9dac._node.volume = _0x4e9dac._volume * _0x3c930f;
                    }
                  }
                }
              }
              return _0x23bac0;
            }
            return _0x23bac0._volume;
          },
          mute: function (_0xd7f20) {
            var _0x138f17 = this || _0x17f8e5;
            if (!_0x138f17.ctx) {
              _0x51faf6();
            }
            _0x138f17._muted = _0xd7f20;
            if (_0x138f17.usingWebAudio) {
              _0x138f17.masterGain.gain.setValueAtTime(_0xd7f20 ? 0 : _0x138f17._volume, _0x17f8e5.ctx.currentTime);
            }
            for (var _0x4e90fb = 0; _0x4e90fb < _0x138f17._howls.length; _0x4e90fb++) {
              if (!_0x138f17._howls[_0x4e90fb]._webAudio) {
                var _0x49d581 = _0x138f17._howls[_0x4e90fb]._getSoundIds();
                for (var _0x4dd6b1 = 0; _0x4dd6b1 < _0x49d581.length; _0x4dd6b1++) {
                  var _0x67cf99 = _0x138f17._howls[_0x4e90fb]._soundById(_0x49d581[_0x4dd6b1]);
                  if (_0x67cf99 && _0x67cf99._node) {
                    _0x67cf99._node.muted = _0xd7f20 ? true : _0x67cf99._muted;
                  }
                }
              }
            }
            return _0x138f17;
          },
          stop: function () {
            var _0x5d61c3 = this || _0x17f8e5;
            for (var _0x24d901 = 0; _0x24d901 < _0x5d61c3._howls.length; _0x24d901++) {
              _0x5d61c3._howls[_0x24d901].stop();
            }
            return _0x5d61c3;
          },
          unload: function () {
            var _0x5a1829 = this || _0x17f8e5;
            for (var _0x42f0cb = _0x5a1829._howls.length - 1; _0x42f0cb >= 0; _0x42f0cb--) {
              _0x5a1829._howls[_0x42f0cb].unload();
            }
            if (_0x5a1829.usingWebAudio && _0x5a1829.ctx && typeof _0x5a1829.ctx.close !== "undefined") {
              _0x5a1829.ctx.close();
              _0x5a1829.ctx = null;
              _0x51faf6();
            }
            return _0x5a1829;
          },
          codecs: function (_0x57391d) {
            return (this || _0x17f8e5)._codecs[_0x57391d.replace(/^x-/, "")];
          },
          _setup: function () {
            var _0x107c9b = this || _0x17f8e5;
            _0x107c9b.state = _0x107c9b.ctx ? _0x107c9b.ctx.state || "suspended" : "suspended";
            _0x107c9b._autoSuspend();
            if (!_0x107c9b.usingWebAudio) {
              if (typeof Audio !== "undefined") {
                try {
                  var _0x2b15a2 = new Audio();
                  if (typeof _0x2b15a2.oncanplaythrough === "undefined") {
                    _0x107c9b._canPlayEvent = "canplay";
                  }
                } catch (_0x5a40ce) {
                  _0x107c9b.noAudio = true;
                }
              } else {
                _0x107c9b.noAudio = true;
              }
            }
            try {
              var _0x2b15a2 = new Audio();
              if (_0x2b15a2.muted) {
                _0x107c9b.noAudio = true;
              }
            } catch (_0x3bac94) {}
            if (!_0x107c9b.noAudio) {
              _0x107c9b._setupCodecs();
            }
            return _0x107c9b;
          },
          _setupCodecs: function () {
            var _0x211c32 = this || _0x17f8e5;
            var _0x160277 = null;
            try {
              _0x160277 = typeof Audio !== "undefined" ? new Audio() : null;
            } catch (_0x571e52) {
              return _0x211c32;
            }
            if (!_0x160277 || typeof _0x160277.canPlayType !== "function") {
              return _0x211c32;
            }
            var _0x25dfee = _0x160277.canPlayType("audio/mpeg;").replace(/^no$/, "");
            var _0x1554fa = _0x211c32._navigator ? _0x211c32._navigator.userAgent : "";
            var _0x4e4065 = _0x1554fa.match(/OPR\/(\d+)/g);
            var _0xb5468d = _0x4e4065 && parseInt(_0x4e4065[0].split("/")[1], 10) < 33;
            var _0x44d4f0 = _0x1554fa.indexOf("Safari") !== -1 && _0x1554fa.indexOf("Chrome") === -1;
            var _0x41ad28 = _0x1554fa.match(/Version\/(.*?) /);
            var _0x46c9ac = _0x44d4f0 && _0x41ad28 && parseInt(_0x41ad28[1], 10) < 15;
            _0x211c32._codecs = {
              mp3: !_0xb5468d && (!!_0x25dfee || !!_0x160277.canPlayType("audio/mp3;").replace(/^no$/, "")),
              mpeg: !!_0x25dfee,
              opus: !!_0x160277.canPlayType("audio/ogg; codecs=\"opus\"").replace(/^no$/, ""),
              ogg: !!_0x160277.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
              oga: !!_0x160277.canPlayType("audio/ogg; codecs=\"vorbis\"").replace(/^no$/, ""),
              wav: !!(_0x160277.canPlayType("audio/wav; codecs=\"1\"") || _0x160277.canPlayType("audio/wav")).replace(/^no$/, ""),
              aac: !!_0x160277.canPlayType("audio/aac;").replace(/^no$/, ""),
              caf: !!_0x160277.canPlayType("audio/x-caf;").replace(/^no$/, ""),
              m4a: !!(_0x160277.canPlayType("audio/x-m4a;") || _0x160277.canPlayType("audio/m4a;") || _0x160277.canPlayType("audio/aac;")).replace(/^no$/, ""),
              m4b: !!(_0x160277.canPlayType("audio/x-m4b;") || _0x160277.canPlayType("audio/m4b;") || _0x160277.canPlayType("audio/aac;")).replace(/^no$/, ""),
              mp4: !!(_0x160277.canPlayType("audio/x-mp4;") || _0x160277.canPlayType("audio/mp4;") || _0x160277.canPlayType("audio/aac;")).replace(/^no$/, ""),
              weba: !_0x46c9ac && !!_0x160277.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
              webm: !_0x46c9ac && !!_0x160277.canPlayType("audio/webm; codecs=\"vorbis\"").replace(/^no$/, ""),
              dolby: !!_0x160277.canPlayType("audio/mp4; codecs=\"ec-3\"").replace(/^no$/, ""),
              flac: !!(_0x160277.canPlayType("audio/x-flac;") || _0x160277.canPlayType("audio/flac;")).replace(/^no$/, "")
            };
            return _0x211c32;
          },
          _unlockAudio: function () {
            var _0x12e0f2 = this || _0x17f8e5;
            if (_0x12e0f2._audioUnlocked || !_0x12e0f2.ctx) {
              return;
            }
            _0x12e0f2._audioUnlocked = false;
            _0x12e0f2.autoUnlock = false;
            if (!_0x12e0f2._mobileUnloaded && _0x12e0f2.ctx.sampleRate !== 44100) {
              _0x12e0f2._mobileUnloaded = true;
              _0x12e0f2.unload();
            }
            _0x12e0f2._scratchBuffer = _0x12e0f2.ctx.createBuffer(1, 1, 22050);
            function _0x3b0a34(_0x5c1730) {
              while (_0x12e0f2._html5AudioPool.length < _0x12e0f2.html5PoolSize) {
                try {
                  var _0x9dcccc = new Audio();
                  _0x9dcccc._unlocked = true;
                  _0x12e0f2._releaseHtml5Audio(_0x9dcccc);
                } catch (_0x33cd51) {
                  _0x12e0f2.noAudio = true;
                  break;
                }
              }
              for (var _0xd94fa6 = 0; _0xd94fa6 < _0x12e0f2._howls.length; _0xd94fa6++) {
                if (!_0x12e0f2._howls[_0xd94fa6]._webAudio) {
                  var _0x46a529 = _0x12e0f2._howls[_0xd94fa6]._getSoundIds();
                  for (var _0x2cd904 = 0; _0x2cd904 < _0x46a529.length; _0x2cd904++) {
                    var _0x2fdfcc = _0x12e0f2._howls[_0xd94fa6]._soundById(_0x46a529[_0x2cd904]);
                    if (_0x2fdfcc && _0x2fdfcc._node && !_0x2fdfcc._node._unlocked) {
                      _0x2fdfcc._node._unlocked = true;
                      _0x2fdfcc._node.load();
                    }
                  }
                }
              }
              _0x12e0f2._autoResume();
              var _0x2269ac = _0x12e0f2.ctx.createBufferSource();
              _0x2269ac.buffer = _0x12e0f2._scratchBuffer;
              _0x2269ac.connect(_0x12e0f2.ctx.destination);
              if (typeof _0x2269ac.start === "undefined") {
                _0x2269ac.noteOn(0);
              } else {
                _0x2269ac.start(0);
              }
              if (typeof _0x12e0f2.ctx.resume === "function") {
                _0x12e0f2.ctx.resume();
              }
              _0x2269ac.onended = function () {
                _0x2269ac.disconnect(0);
                _0x12e0f2._audioUnlocked = true;
                document.removeEventListener("touchstart", _0x3b0a34, true);
                document.removeEventListener("touchend", _0x3b0a34, true);
                document.removeEventListener("click", _0x3b0a34, true);
                document.removeEventListener("keydown", _0x3b0a34, true);
                for (var _0x29c83d = 0; _0x29c83d < _0x12e0f2._howls.length; _0x29c83d++) {
                  _0x12e0f2._howls[_0x29c83d]._emit("unlock");
                }
              };
            }
            document.addEventListener("touchstart", _0x3b0a34, true);
            document.addEventListener("touchend", _0x3b0a34, true);
            document.addEventListener("click", _0x3b0a34, true);
            document.addEventListener("keydown", _0x3b0a34, true);
            return _0x12e0f2;
          },
          _obtainHtml5Audio: function () {
            var _0x53526a = this || _0x17f8e5;
            if (_0x53526a._html5AudioPool.length) {
              return _0x53526a._html5AudioPool.pop();
            }
            var _0x555d6f = new Audio().play();
            if (_0x555d6f && typeof Promise !== "undefined" && (_0x555d6f instanceof Promise || typeof _0x555d6f.then === "function")) {
              _0x555d6f.catch(function () {
                console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
              });
            }
            return new Audio();
          },
          _releaseHtml5Audio: function (_0x4c1f83) {
            var _0xddfe9f = this || _0x17f8e5;
            if (_0x4c1f83._unlocked) {
              _0xddfe9f._html5AudioPool.push(_0x4c1f83);
            }
            return _0xddfe9f;
          },
          _autoSuspend: function () {
            var _0x2edeac = this;
            if (!_0x2edeac.autoSuspend || !_0x2edeac.ctx || typeof _0x2edeac.ctx.suspend === "undefined" || !_0x17f8e5.usingWebAudio) {
              return;
            }
            for (var _0x4762c4 = 0; _0x4762c4 < _0x2edeac._howls.length; _0x4762c4++) {
              if (_0x2edeac._howls[_0x4762c4]._webAudio) {
                for (var _0x2d52de = 0; _0x2d52de < _0x2edeac._howls[_0x4762c4]._sounds.length; _0x2d52de++) {
                  if (!_0x2edeac._howls[_0x4762c4]._sounds[_0x2d52de]._paused) {
                    return _0x2edeac;
                  }
                }
              }
            }
            if (_0x2edeac._suspendTimer) {
              clearTimeout(_0x2edeac._suspendTimer);
            }
            _0x2edeac._suspendTimer = setTimeout(function () {
              if (!_0x2edeac.autoSuspend) {
                return;
              }
              _0x2edeac._suspendTimer = null;
              _0x2edeac.state = "suspending";
              function _0x33726a() {
                _0x2edeac.state = "suspended";
                if (_0x2edeac._resumeAfterSuspend) {
                  delete _0x2edeac._resumeAfterSuspend;
                  _0x2edeac._autoResume();
                }
              }
              _0x2edeac.ctx.suspend().then(_0x33726a, _0x33726a);
            }, 30000);
            return _0x2edeac;
          },
          _autoResume: function () {
            var _0x350da8 = this;
            if (!_0x350da8.ctx || typeof _0x350da8.ctx.resume === "undefined" || !_0x17f8e5.usingWebAudio) {
              return;
            }
            if (_0x350da8.state === "running" && _0x350da8.ctx.state !== "interrupted" && _0x350da8._suspendTimer) {
              clearTimeout(_0x350da8._suspendTimer);
              _0x350da8._suspendTimer = null;
            } else if (_0x350da8.state === "suspended" || _0x350da8.state === "running" && _0x350da8.ctx.state === "interrupted") {
              _0x350da8.ctx.resume().then(function () {
                _0x350da8.state = "running";
                for (var _0x30fa70 = 0; _0x30fa70 < _0x350da8._howls.length; _0x30fa70++) {
                  _0x350da8._howls[_0x30fa70]._emit("resume");
                }
              });
              if (_0x350da8._suspendTimer) {
                clearTimeout(_0x350da8._suspendTimer);
                _0x350da8._suspendTimer = null;
              }
            } else if (_0x350da8.state === "suspending") {
              _0x350da8._resumeAfterSuspend = true;
            }
            return _0x350da8;
          }
        };
        var _0x17f8e5 = new _0x52f8bb();
        function _0x17026d(_0x1a9b40) {
          var _0x19083a = this;
          if (!_0x1a9b40.src || _0x1a9b40.src.length === 0) {
            console.error("An array of source files must be passed with any new Howl.");
            return;
          }
          _0x19083a.init(_0x1a9b40);
        }
        _0x17026d.prototype = {
          init: function (_0x16b1c5) {
            var _0x23bad1 = this;
            if (!_0x17f8e5.ctx) {
              _0x51faf6();
            }
            _0x23bad1._autoplay = _0x16b1c5.autoplay || false;
            _0x23bad1._format = typeof _0x16b1c5.format !== "string" ? _0x16b1c5.format : [_0x16b1c5.format];
            _0x23bad1._html5 = _0x16b1c5.html5 || false;
            _0x23bad1._muted = _0x16b1c5.mute || false;
            _0x23bad1._loop = _0x16b1c5.loop || false;
            _0x23bad1._pool = _0x16b1c5.pool || 5;
            _0x23bad1._preload = typeof _0x16b1c5.preload === "boolean" || _0x16b1c5.preload === "metadata" ? _0x16b1c5.preload : true;
            _0x23bad1._rate = _0x16b1c5.rate || 1;
            _0x23bad1._sprite = _0x16b1c5.sprite || {};
            _0x23bad1._src = typeof _0x16b1c5.src !== "string" ? _0x16b1c5.src : [_0x16b1c5.src];
            _0x23bad1._volume = _0x16b1c5.volume !== undefined ? _0x16b1c5.volume : 1;
            _0x23bad1._xhr = {
              method: _0x16b1c5.xhr && _0x16b1c5.xhr.method ? _0x16b1c5.xhr.method : "GET",
              headers: _0x16b1c5.xhr && _0x16b1c5.xhr.headers ? _0x16b1c5.xhr.headers : null,
              withCredentials: _0x16b1c5.xhr && _0x16b1c5.xhr.withCredentials ? _0x16b1c5.xhr.withCredentials : false
            };
            _0x23bad1._duration = 0;
            _0x23bad1._state = "unloaded";
            _0x23bad1._sounds = [];
            _0x23bad1._endTimers = {};
            _0x23bad1._queue = [];
            _0x23bad1._playLock = false;
            _0x23bad1._onend = _0x16b1c5.onend ? [{
              fn: _0x16b1c5.onend
            }] : [];
            _0x23bad1._onfade = _0x16b1c5.onfade ? [{
              fn: _0x16b1c5.onfade
            }] : [];
            _0x23bad1._onload = _0x16b1c5.onload ? [{
              fn: _0x16b1c5.onload
            }] : [];
            _0x23bad1._onloaderror = _0x16b1c5.onloaderror ? [{
              fn: _0x16b1c5.onloaderror
            }] : [];
            _0x23bad1._onplayerror = _0x16b1c5.onplayerror ? [{
              fn: _0x16b1c5.onplayerror
            }] : [];
            _0x23bad1._onpause = _0x16b1c5.onpause ? [{
              fn: _0x16b1c5.onpause
            }] : [];
            _0x23bad1._onplay = _0x16b1c5.onplay ? [{
              fn: _0x16b1c5.onplay
            }] : [];
            _0x23bad1._onstop = _0x16b1c5.onstop ? [{
              fn: _0x16b1c5.onstop
            }] : [];
            _0x23bad1._onmute = _0x16b1c5.onmute ? [{
              fn: _0x16b1c5.onmute
            }] : [];
            _0x23bad1._onvolume = _0x16b1c5.onvolume ? [{
              fn: _0x16b1c5.onvolume
            }] : [];
            _0x23bad1._onrate = _0x16b1c5.onrate ? [{
              fn: _0x16b1c5.onrate
            }] : [];
            _0x23bad1._onseek = _0x16b1c5.onseek ? [{
              fn: _0x16b1c5.onseek
            }] : [];
            _0x23bad1._onunlock = _0x16b1c5.onunlock ? [{
              fn: _0x16b1c5.onunlock
            }] : [];
            _0x23bad1._onresume = [];
            _0x23bad1._webAudio = _0x17f8e5.usingWebAudio && !_0x23bad1._html5;
            if (typeof _0x17f8e5.ctx !== "undefined" && _0x17f8e5.ctx && _0x17f8e5.autoUnlock) {
              _0x17f8e5._unlockAudio();
            }
            _0x17f8e5._howls.push(_0x23bad1);
            if (_0x23bad1._autoplay) {
              _0x23bad1._queue.push({
                event: "play",
                action: function () {
                  _0x23bad1.play();
                }
              });
            }
            if (_0x23bad1._preload && _0x23bad1._preload !== "none") {
              _0x23bad1.load();
            }
            return _0x23bad1;
          },
          load: function () {
            var _0x5765b7 = this;
            var _0x57c318 = null;
            if (_0x17f8e5.noAudio) {
              _0x5765b7._emit("loaderror", null, "No audio support.");
              return;
            }
            if (typeof _0x5765b7._src === "string") {
              _0x5765b7._src = [_0x5765b7._src];
            }
            for (var _0x2851f0 = 0; _0x2851f0 < _0x5765b7._src.length; _0x2851f0++) {
              var _0x213241;
              var _0x294be2;
              if (_0x5765b7._format && _0x5765b7._format[_0x2851f0]) {
                _0x213241 = _0x5765b7._format[_0x2851f0];
              } else {
                _0x294be2 = _0x5765b7._src[_0x2851f0];
                if (typeof _0x294be2 !== "string") {
                  _0x5765b7._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
                  continue;
                }
                _0x213241 = /^data:audio\/([^;,]+);/i.exec(_0x294be2);
                if (!_0x213241) {
                  _0x213241 = /\.([^.]+)$/.exec(_0x294be2.split("?", 1)[0]);
                }
                _0x213241 &&= _0x213241[1].toLowerCase();
              }
              if (!_0x213241) {
                console.warn("No file extension was found. Consider using the \"format\" property or specify an extension.");
              }
              if (_0x213241 && _0x17f8e5.codecs(_0x213241)) {
                _0x57c318 = _0x5765b7._src[_0x2851f0];
                break;
              }
            }
            if (!_0x57c318) {
              _0x5765b7._emit("loaderror", null, "No codec support for selected audio sources.");
              return;
            }
            _0x5765b7._src = _0x57c318;
            _0x5765b7._state = "loading";
            if (window.location.protocol === "https:" && _0x57c318.slice(0, 5) === "http:") {
              _0x5765b7._html5 = true;
              _0x5765b7._webAudio = false;
            }
            new _0x298043(_0x5765b7);
            if (_0x5765b7._webAudio) {
              _0xecdf6b(_0x5765b7);
            }
            return _0x5765b7;
          },
          play: function (_0x3caf3e, _0x4a956e) {
            var _0x1f667e = this;
            var _0x2cddbb = null;
            if (typeof _0x3caf3e === "number") {
              _0x2cddbb = _0x3caf3e;
              _0x3caf3e = null;
            } else if (typeof _0x3caf3e === "string" && _0x1f667e._state === "loaded" && !_0x1f667e._sprite[_0x3caf3e]) {
              return null;
            } else if (typeof _0x3caf3e === "undefined") {
              _0x3caf3e = "__default";
              if (!_0x1f667e._playLock) {
                var _0x432e5a = 0;
                for (var _0x3c8927 = 0; _0x3c8927 < _0x1f667e._sounds.length; _0x3c8927++) {
                  if (_0x1f667e._sounds[_0x3c8927]._paused && !_0x1f667e._sounds[_0x3c8927]._ended) {
                    _0x432e5a++;
                    _0x2cddbb = _0x1f667e._sounds[_0x3c8927]._id;
                  }
                }
                if (_0x432e5a === 1) {
                  _0x3caf3e = null;
                } else {
                  _0x2cddbb = null;
                }
              }
            }
            var _0x282338 = _0x2cddbb ? _0x1f667e._soundById(_0x2cddbb) : _0x1f667e._inactiveSound();
            if (!_0x282338) {
              return null;
            }
            if (_0x2cddbb && !_0x3caf3e) {
              _0x3caf3e = _0x282338._sprite || "__default";
            }
            if (_0x1f667e._state !== "loaded") {
              _0x282338._sprite = _0x3caf3e;
              _0x282338._ended = false;
              var _0x5d50d9 = _0x282338._id;
              _0x1f667e._queue.push({
                event: "play",
                action: function () {
                  _0x1f667e.play(_0x5d50d9);
                }
              });
              return _0x5d50d9;
            }
            if (_0x2cddbb && !_0x282338._paused) {
              if (!_0x4a956e) {
                _0x1f667e._loadQueue("play");
              }
              return _0x282338._id;
            }
            if (_0x1f667e._webAudio) {
              _0x17f8e5._autoResume();
            }
            var _0x113cb2 = Math.max(0, _0x282338._seek > 0 ? _0x282338._seek : _0x1f667e._sprite[_0x3caf3e][0] / 1000);
            var _0x1d68d7 = Math.max(0, (_0x1f667e._sprite[_0x3caf3e][0] + _0x1f667e._sprite[_0x3caf3e][1]) / 1000 - _0x113cb2);
            var _0x1bd988 = _0x1d68d7 * 1000 / Math.abs(_0x282338._rate);
            var _0x168db3 = _0x1f667e._sprite[_0x3caf3e][0] / 1000;
            var _0x2c08ee = (_0x1f667e._sprite[_0x3caf3e][0] + _0x1f667e._sprite[_0x3caf3e][1]) / 1000;
            _0x282338._sprite = _0x3caf3e;
            _0x282338._ended = false;
            function _0x59c960() {
              _0x282338._paused = false;
              _0x282338._seek = _0x113cb2;
              _0x282338._start = _0x168db3;
              _0x282338._stop = _0x2c08ee;
              _0x282338._loop = !!_0x282338._loop || !!_0x1f667e._sprite[_0x3caf3e][2];
            }
            if (_0x113cb2 >= _0x2c08ee) {
              _0x1f667e._ended(_0x282338);
              return;
            }
            var _0x5d180e = _0x282338._node;
            if (_0x1f667e._webAudio) {
              function _0x222c47() {
                _0x1f667e._playLock = false;
                _0x59c960();
                _0x1f667e._refreshBuffer(_0x282338);
                var _0x9d3101 = _0x282338._muted || _0x1f667e._muted ? 0 : _0x282338._volume;
                _0x5d180e.gain.setValueAtTime(_0x9d3101, _0x17f8e5.ctx.currentTime);
                _0x282338._playStart = _0x17f8e5.ctx.currentTime;
                if (typeof _0x5d180e.bufferSource.start === "undefined") {
                  if (_0x282338._loop) {
                    _0x5d180e.bufferSource.noteGrainOn(0, _0x113cb2, 86400);
                  } else {
                    _0x5d180e.bufferSource.noteGrainOn(0, _0x113cb2, _0x1d68d7);
                  }
                } else if (_0x282338._loop) {
                  _0x5d180e.bufferSource.start(0, _0x113cb2, 86400);
                } else {
                  _0x5d180e.bufferSource.start(0, _0x113cb2, _0x1d68d7);
                }
                if (_0x1bd988 !== Infinity) {
                  _0x1f667e._endTimers[_0x282338._id] = setTimeout(_0x1f667e._ended.bind(_0x1f667e, _0x282338), _0x1bd988);
                }
                if (!_0x4a956e) {
                  setTimeout(function () {
                    _0x1f667e._emit("play", _0x282338._id);
                    _0x1f667e._loadQueue();
                  }, 0);
                }
              }
              if (_0x17f8e5.state === "running" && _0x17f8e5.ctx.state !== "interrupted") {
                _0x222c47();
              } else {
                _0x1f667e._playLock = true;
                _0x1f667e.once("resume", _0x222c47);
                _0x1f667e._clearTimer(_0x282338._id);
              }
            } else {
              function _0x5d6e71() {
                _0x5d180e.currentTime = _0x113cb2;
                _0x5d180e.muted = _0x282338._muted || _0x1f667e._muted || _0x17f8e5._muted || _0x5d180e.muted;
                _0x5d180e.volume = _0x282338._volume * _0x17f8e5.volume();
                _0x5d180e.playbackRate = _0x282338._rate;
                try {
                  var _0x149cd1 = _0x5d180e.play();
                  if (_0x149cd1 && typeof Promise !== "undefined" && (_0x149cd1 instanceof Promise || typeof _0x149cd1.then === "function")) {
                    _0x1f667e._playLock = true;
                    _0x59c960();
                    _0x149cd1.then(function () {
                      _0x1f667e._playLock = false;
                      _0x5d180e._unlocked = true;
                      if (!_0x4a956e) {
                        _0x1f667e._emit("play", _0x282338._id);
                      } else {
                        _0x1f667e._loadQueue();
                      }
                    }).catch(function () {
                      _0x1f667e._playLock = false;
                      _0x1f667e._emit("playerror", _0x282338._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                      _0x282338._ended = true;
                      _0x282338._paused = true;
                    });
                  } else if (!_0x4a956e) {
                    _0x1f667e._playLock = false;
                    _0x59c960();
                    _0x1f667e._emit("play", _0x282338._id);
                  }
                  _0x5d180e.playbackRate = _0x282338._rate;
                  if (_0x5d180e.paused) {
                    _0x1f667e._emit("playerror", _0x282338._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
                    return;
                  }
                  if (_0x3caf3e !== "__default" || _0x282338._loop) {
                    _0x1f667e._endTimers[_0x282338._id] = setTimeout(_0x1f667e._ended.bind(_0x1f667e, _0x282338), _0x1bd988);
                  } else {
                    _0x1f667e._endTimers[_0x282338._id] = function () {
                      _0x1f667e._ended(_0x282338);
                      _0x5d180e.removeEventListener("ended", _0x1f667e._endTimers[_0x282338._id], false);
                    };
                    _0x5d180e.addEventListener("ended", _0x1f667e._endTimers[_0x282338._id], false);
                  }
                } catch (_0x17e856) {
                  _0x1f667e._emit("playerror", _0x282338._id, _0x17e856);
                }
              }
              if (_0x5d180e.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA") {
                _0x5d180e.src = _0x1f667e._src;
                _0x5d180e.load();
              }
              var _0x4c936d = window && window.ejecta || !_0x5d180e.readyState && _0x17f8e5._navigator.isCocoonJS;
              if (_0x5d180e.readyState >= 3 || _0x4c936d) {
                _0x5d6e71();
              } else {
                _0x1f667e._playLock = true;
                _0x1f667e._state = "loading";
                function _0x40bdb8() {
                  _0x1f667e._state = "loaded";
                  _0x5d6e71();
                  _0x5d180e.removeEventListener(_0x17f8e5._canPlayEvent, _0x40bdb8, false);
                }
                _0x5d180e.addEventListener(_0x17f8e5._canPlayEvent, _0x40bdb8, false);
                _0x1f667e._clearTimer(_0x282338._id);
              }
            }
            return _0x282338._id;
          },
          pause: function (_0x598d3a) {
            var _0x42ec6a = this;
            if (_0x42ec6a._state !== "loaded" || _0x42ec6a._playLock) {
              _0x42ec6a._queue.push({
                event: "pause",
                action: function () {
                  _0x42ec6a.pause(_0x598d3a);
                }
              });
              return _0x42ec6a;
            }
            var _0x371941 = _0x42ec6a._getSoundIds(_0x598d3a);
            for (var _0x43e657 = 0; _0x43e657 < _0x371941.length; _0x43e657++) {
              _0x42ec6a._clearTimer(_0x371941[_0x43e657]);
              var _0x1855fb = _0x42ec6a._soundById(_0x371941[_0x43e657]);
              if (_0x1855fb && !_0x1855fb._paused) {
                _0x1855fb._seek = _0x42ec6a.seek(_0x371941[_0x43e657]);
                _0x1855fb._rateSeek = 0;
                _0x1855fb._paused = true;
                _0x42ec6a._stopFade(_0x371941[_0x43e657]);
                if (_0x1855fb._node) {
                  if (_0x42ec6a._webAudio) {
                    if (!_0x1855fb._node.bufferSource) {
                      continue;
                    }
                    if (typeof _0x1855fb._node.bufferSource.stop === "undefined") {
                      _0x1855fb._node.bufferSource.noteOff(0);
                    } else {
                      _0x1855fb._node.bufferSource.stop(0);
                    }
                    _0x42ec6a._cleanBuffer(_0x1855fb._node);
                  } else if (!isNaN(_0x1855fb._node.duration) || _0x1855fb._node.duration === Infinity) {
                    _0x1855fb._node.pause();
                  }
                }
              }
              if (!arguments[1]) {
                _0x42ec6a._emit("pause", _0x1855fb ? _0x1855fb._id : null);
              }
            }
            return _0x42ec6a;
          },
          stop: function (_0x371335, _0x228963) {
            var _0x2c6203 = this;
            if (_0x2c6203._state !== "loaded" || _0x2c6203._playLock) {
              _0x2c6203._queue.push({
                event: "stop",
                action: function () {
                  _0x2c6203.stop(_0x371335);
                }
              });
              return _0x2c6203;
            }
            var _0x3e7486 = _0x2c6203._getSoundIds(_0x371335);
            for (var _0x790196 = 0; _0x790196 < _0x3e7486.length; _0x790196++) {
              _0x2c6203._clearTimer(_0x3e7486[_0x790196]);
              var _0x5e8911 = _0x2c6203._soundById(_0x3e7486[_0x790196]);
              if (_0x5e8911) {
                _0x5e8911._seek = _0x5e8911._start || 0;
                _0x5e8911._rateSeek = 0;
                _0x5e8911._paused = true;
                _0x5e8911._ended = true;
                _0x2c6203._stopFade(_0x3e7486[_0x790196]);
                if (_0x5e8911._node) {
                  if (_0x2c6203._webAudio) {
                    if (_0x5e8911._node.bufferSource) {
                      if (typeof _0x5e8911._node.bufferSource.stop === "undefined") {
                        _0x5e8911._node.bufferSource.noteOff(0);
                      } else {
                        _0x5e8911._node.bufferSource.stop(0);
                      }
                      _0x2c6203._cleanBuffer(_0x5e8911._node);
                    }
                  } else if (!isNaN(_0x5e8911._node.duration) || _0x5e8911._node.duration === Infinity) {
                    _0x5e8911._node.currentTime = _0x5e8911._start || 0;
                    _0x5e8911._node.pause();
                    if (_0x5e8911._node.duration === Infinity) {
                      _0x2c6203._clearSound(_0x5e8911._node);
                    }
                  }
                }
                if (!_0x228963) {
                  _0x2c6203._emit("stop", _0x5e8911._id);
                }
              }
            }
            return _0x2c6203;
          },
          mute: function (_0x45210b, _0x49de6b) {
            var _0x24864b = this;
            if (_0x24864b._state !== "loaded" || _0x24864b._playLock) {
              _0x24864b._queue.push({
                event: "mute",
                action: function () {
                  _0x24864b.mute(_0x45210b, _0x49de6b);
                }
              });
              return _0x24864b;
            }
            if (typeof _0x49de6b === "undefined") {
              if (typeof _0x45210b === "boolean") {
                _0x24864b._muted = _0x45210b;
              } else {
                return _0x24864b._muted;
              }
            }
            var _0xaaee2a = _0x24864b._getSoundIds(_0x49de6b);
            for (var _0x4c084a = 0; _0x4c084a < _0xaaee2a.length; _0x4c084a++) {
              var _0x565368 = _0x24864b._soundById(_0xaaee2a[_0x4c084a]);
              if (_0x565368) {
                _0x565368._muted = _0x45210b;
                if (_0x565368._interval) {
                  _0x24864b._stopFade(_0x565368._id);
                }
                if (_0x24864b._webAudio && _0x565368._node) {
                  _0x565368._node.gain.setValueAtTime(_0x45210b ? 0 : _0x565368._volume, _0x17f8e5.ctx.currentTime);
                } else if (_0x565368._node) {
                  _0x565368._node.muted = _0x17f8e5._muted ? true : _0x45210b;
                }
                _0x24864b._emit("mute", _0x565368._id);
              }
            }
            return _0x24864b;
          },
          volume: function () {
            var _0x287961 = this;
            var _0x4a79e4 = arguments;
            var _0x331212;
            var _0x2e8e92;
            if (_0x4a79e4.length === 0) {
              return _0x287961._volume;
            } else if (_0x4a79e4.length === 1 || _0x4a79e4.length === 2 && typeof _0x4a79e4[1] === "undefined") {
              var _0x351218 = _0x287961._getSoundIds();
              var _0x4a8de9 = _0x351218.indexOf(_0x4a79e4[0]);
              if (_0x4a8de9 >= 0) {
                _0x2e8e92 = parseInt(_0x4a79e4[0], 10);
              } else {
                _0x331212 = parseFloat(_0x4a79e4[0]);
              }
            } else if (_0x4a79e4.length >= 2) {
              _0x331212 = parseFloat(_0x4a79e4[0]);
              _0x2e8e92 = parseInt(_0x4a79e4[1], 10);
            }
            var _0x26d406;
            if (typeof _0x331212 !== "undefined" && _0x331212 >= 0 && _0x331212 <= 1) {
              if (_0x287961._state !== "loaded" || _0x287961._playLock) {
                _0x287961._queue.push({
                  event: "volume",
                  action: function () {
                    _0x287961.volume.apply(_0x287961, _0x4a79e4);
                  }
                });
                return _0x287961;
              }
              if (typeof _0x2e8e92 === "undefined") {
                _0x287961._volume = _0x331212;
              }
              _0x2e8e92 = _0x287961._getSoundIds(_0x2e8e92);
              for (var _0x188ac8 = 0; _0x188ac8 < _0x2e8e92.length; _0x188ac8++) {
                _0x26d406 = _0x287961._soundById(_0x2e8e92[_0x188ac8]);
                if (_0x26d406) {
                  _0x26d406._volume = _0x331212;
                  if (!_0x4a79e4[2]) {
                    _0x287961._stopFade(_0x2e8e92[_0x188ac8]);
                  }
                  if (_0x287961._webAudio && _0x26d406._node && !_0x26d406._muted) {
                    _0x26d406._node.gain.setValueAtTime(_0x331212, _0x17f8e5.ctx.currentTime);
                  } else if (_0x26d406._node && !_0x26d406._muted) {
                    _0x26d406._node.volume = _0x331212 * _0x17f8e5.volume();
                  }
                  _0x287961._emit("volume", _0x26d406._id);
                }
              }
            } else {
              _0x26d406 = _0x2e8e92 ? _0x287961._soundById(_0x2e8e92) : _0x287961._sounds[0];
              if (_0x26d406) {
                return _0x26d406._volume;
              } else {
                return 0;
              }
            }
            return _0x287961;
          },
          fade: function (_0x9f9ce4, _0x5c4074, _0x158bc1, _0x1fff4c) {
            var _0x359430 = this;
            if (_0x359430._state !== "loaded" || _0x359430._playLock) {
              _0x359430._queue.push({
                event: "fade",
                action: function () {
                  _0x359430.fade(_0x9f9ce4, _0x5c4074, _0x158bc1, _0x1fff4c);
                }
              });
              return _0x359430;
            }
            _0x9f9ce4 = Math.min(Math.max(0, parseFloat(_0x9f9ce4)), 1);
            _0x5c4074 = Math.min(Math.max(0, parseFloat(_0x5c4074)), 1);
            _0x158bc1 = parseFloat(_0x158bc1);
            _0x359430.volume(_0x9f9ce4, _0x1fff4c);
            var _0x11cdf2 = _0x359430._getSoundIds(_0x1fff4c);
            for (var _0xc20d12 = 0; _0xc20d12 < _0x11cdf2.length; _0xc20d12++) {
              var _0x4c716c = _0x359430._soundById(_0x11cdf2[_0xc20d12]);
              if (_0x4c716c) {
                if (!_0x1fff4c) {
                  _0x359430._stopFade(_0x11cdf2[_0xc20d12]);
                }
                if (_0x359430._webAudio && !_0x4c716c._muted) {
                  var _0x26f932 = _0x17f8e5.ctx.currentTime;
                  var _0x498b1e = _0x26f932 + _0x158bc1 / 1000;
                  _0x4c716c._volume = _0x9f9ce4;
                  _0x4c716c._node.gain.setValueAtTime(_0x9f9ce4, _0x26f932);
                  _0x4c716c._node.gain.linearRampToValueAtTime(_0x5c4074, _0x498b1e);
                }
                _0x359430._startFadeInterval(_0x4c716c, _0x9f9ce4, _0x5c4074, _0x158bc1, _0x11cdf2[_0xc20d12], typeof _0x1fff4c === "undefined");
              }
            }
            return _0x359430;
          },
          _startFadeInterval: function (_0x5806c3, _0x22860f, _0x12f209, _0x1e8475, _0x3506f0, _0x484bc5) {
            var _0xdc8acc = this;
            var _0x474be9 = _0x22860f;
            var _0xf18173 = _0x12f209 - _0x22860f;
            var _0x5e7210 = Math.abs(_0xf18173 / 0.01);
            var _0x3c2c63 = Math.max(4, _0x5e7210 > 0 ? _0x1e8475 / _0x5e7210 : _0x1e8475);
            var _0x29b3d5 = Date.now();
            _0x5806c3._fadeTo = _0x12f209;
            _0x5806c3._interval = setInterval(function () {
              var _0x4a0522 = (Date.now() - _0x29b3d5) / _0x1e8475;
              _0x29b3d5 = Date.now();
              _0x474be9 += _0xf18173 * _0x4a0522;
              _0x474be9 = Math.round(_0x474be9 * 100) / 100;
              if (_0xf18173 < 0) {
                _0x474be9 = Math.max(_0x12f209, _0x474be9);
              } else {
                _0x474be9 = Math.min(_0x12f209, _0x474be9);
              }
              if (_0xdc8acc._webAudio) {
                _0x5806c3._volume = _0x474be9;
              } else {
                _0xdc8acc.volume(_0x474be9, _0x5806c3._id, true);
              }
              if (_0x484bc5) {
                _0xdc8acc._volume = _0x474be9;
              }
              if (_0x12f209 < _0x22860f && _0x474be9 <= _0x12f209 || _0x12f209 > _0x22860f && _0x474be9 >= _0x12f209) {
                clearInterval(_0x5806c3._interval);
                _0x5806c3._interval = null;
                _0x5806c3._fadeTo = null;
                _0xdc8acc.volume(_0x12f209, _0x5806c3._id);
                _0xdc8acc._emit("fade", _0x5806c3._id);
              }
            }, _0x3c2c63);
          },
          _stopFade: function (_0x479d5e) {
            var _0x4e0a5e = this;
            var _0x4d3d21 = _0x4e0a5e._soundById(_0x479d5e);
            if (_0x4d3d21 && _0x4d3d21._interval) {
              if (_0x4e0a5e._webAudio) {
                _0x4d3d21._node.gain.cancelScheduledValues(_0x17f8e5.ctx.currentTime);
              }
              clearInterval(_0x4d3d21._interval);
              _0x4d3d21._interval = null;
              _0x4e0a5e.volume(_0x4d3d21._fadeTo, _0x479d5e);
              _0x4d3d21._fadeTo = null;
              _0x4e0a5e._emit("fade", _0x479d5e);
            }
            return _0x4e0a5e;
          },
          loop: function () {
            var _0x17aff9 = this;
            var _0x3ff9b9 = arguments;
            var _0x5b30e8;
            var _0x341fc1;
            var _0xf7b5b;
            if (_0x3ff9b9.length === 0) {
              return _0x17aff9._loop;
            } else if (_0x3ff9b9.length === 1) {
              if (typeof _0x3ff9b9[0] === "boolean") {
                _0x5b30e8 = _0x3ff9b9[0];
                _0x17aff9._loop = _0x5b30e8;
              } else {
                _0xf7b5b = _0x17aff9._soundById(parseInt(_0x3ff9b9[0], 10));
                if (_0xf7b5b) {
                  return _0xf7b5b._loop;
                } else {
                  return false;
                }
              }
            } else if (_0x3ff9b9.length === 2) {
              _0x5b30e8 = _0x3ff9b9[0];
              _0x341fc1 = parseInt(_0x3ff9b9[1], 10);
            }
            var _0x5825c6 = _0x17aff9._getSoundIds(_0x341fc1);
            for (var _0x5a89bd = 0; _0x5a89bd < _0x5825c6.length; _0x5a89bd++) {
              _0xf7b5b = _0x17aff9._soundById(_0x5825c6[_0x5a89bd]);
              if (_0xf7b5b) {
                _0xf7b5b._loop = _0x5b30e8;
                if (_0x17aff9._webAudio && _0xf7b5b._node && _0xf7b5b._node.bufferSource) {
                  _0xf7b5b._node.bufferSource.loop = _0x5b30e8;
                  if (_0x5b30e8) {
                    _0xf7b5b._node.bufferSource.loopStart = _0xf7b5b._start || 0;
                    _0xf7b5b._node.bufferSource.loopEnd = _0xf7b5b._stop;
                    if (_0x17aff9.playing(_0x5825c6[_0x5a89bd])) {
                      _0x17aff9.pause(_0x5825c6[_0x5a89bd], true);
                      _0x17aff9.play(_0x5825c6[_0x5a89bd], true);
                    }
                  }
                }
              }
            }
            return _0x17aff9;
          },
          rate: function () {
            var _0x9f55f8 = this;
            var _0x4edc69 = arguments;
            var _0x4d3ac8;
            var _0x338c39;
            if (_0x4edc69.length === 0) {
              _0x338c39 = _0x9f55f8._sounds[0]._id;
            } else if (_0x4edc69.length === 1) {
              var _0x49d536 = _0x9f55f8._getSoundIds();
              var _0x4099e4 = _0x49d536.indexOf(_0x4edc69[0]);
              if (_0x4099e4 >= 0) {
                _0x338c39 = parseInt(_0x4edc69[0], 10);
              } else {
                _0x4d3ac8 = parseFloat(_0x4edc69[0]);
              }
            } else if (_0x4edc69.length === 2) {
              _0x4d3ac8 = parseFloat(_0x4edc69[0]);
              _0x338c39 = parseInt(_0x4edc69[1], 10);
            }
            var _0x50738a;
            if (typeof _0x4d3ac8 === "number") {
              if (_0x9f55f8._state !== "loaded" || _0x9f55f8._playLock) {
                _0x9f55f8._queue.push({
                  event: "rate",
                  action: function () {
                    _0x9f55f8.rate.apply(_0x9f55f8, _0x4edc69);
                  }
                });
                return _0x9f55f8;
              }
              if (typeof _0x338c39 === "undefined") {
                _0x9f55f8._rate = _0x4d3ac8;
              }
              _0x338c39 = _0x9f55f8._getSoundIds(_0x338c39);
              for (var _0x31c267 = 0; _0x31c267 < _0x338c39.length; _0x31c267++) {
                _0x50738a = _0x9f55f8._soundById(_0x338c39[_0x31c267]);
                if (_0x50738a) {
                  if (_0x9f55f8.playing(_0x338c39[_0x31c267])) {
                    _0x50738a._rateSeek = _0x9f55f8.seek(_0x338c39[_0x31c267]);
                    _0x50738a._playStart = _0x9f55f8._webAudio ? _0x17f8e5.ctx.currentTime : _0x50738a._playStart;
                  }
                  _0x50738a._rate = _0x4d3ac8;
                  if (_0x9f55f8._webAudio && _0x50738a._node && _0x50738a._node.bufferSource) {
                    _0x50738a._node.bufferSource.playbackRate.setValueAtTime(_0x4d3ac8, _0x17f8e5.ctx.currentTime);
                  } else if (_0x50738a._node) {
                    _0x50738a._node.playbackRate = _0x4d3ac8;
                  }
                  var _0xd89907 = _0x9f55f8.seek(_0x338c39[_0x31c267]);
                  var _0x5c8652 = (_0x9f55f8._sprite[_0x50738a._sprite][0] + _0x9f55f8._sprite[_0x50738a._sprite][1]) / 1000 - _0xd89907;
                  var _0x44235e = _0x5c8652 * 1000 / Math.abs(_0x50738a._rate);
                  if (_0x9f55f8._endTimers[_0x338c39[_0x31c267]] || !_0x50738a._paused) {
                    _0x9f55f8._clearTimer(_0x338c39[_0x31c267]);
                    _0x9f55f8._endTimers[_0x338c39[_0x31c267]] = setTimeout(_0x9f55f8._ended.bind(_0x9f55f8, _0x50738a), _0x44235e);
                  }
                  _0x9f55f8._emit("rate", _0x50738a._id);
                }
              }
            } else {
              _0x50738a = _0x9f55f8._soundById(_0x338c39);
              if (_0x50738a) {
                return _0x50738a._rate;
              } else {
                return _0x9f55f8._rate;
              }
            }
            return _0x9f55f8;
          },
          seek: function () {
            var _0x211891 = this;
            var _0x188f54 = arguments;
            var _0x482a96;
            var _0x2a1e50;
            if (_0x188f54.length === 0) {
              if (_0x211891._sounds.length) {
                _0x2a1e50 = _0x211891._sounds[0]._id;
              }
            } else if (_0x188f54.length === 1) {
              var _0x4e98bb = _0x211891._getSoundIds();
              var _0x4aa01c = _0x4e98bb.indexOf(_0x188f54[0]);
              if (_0x4aa01c >= 0) {
                _0x2a1e50 = parseInt(_0x188f54[0], 10);
              } else if (_0x211891._sounds.length) {
                _0x2a1e50 = _0x211891._sounds[0]._id;
                _0x482a96 = parseFloat(_0x188f54[0]);
              }
            } else if (_0x188f54.length === 2) {
              _0x482a96 = parseFloat(_0x188f54[0]);
              _0x2a1e50 = parseInt(_0x188f54[1], 10);
            }
            if (typeof _0x2a1e50 === "undefined") {
              return 0;
            }
            if (typeof _0x482a96 === "number" && (_0x211891._state !== "loaded" || _0x211891._playLock)) {
              _0x211891._queue.push({
                event: "seek",
                action: function () {
                  _0x211891.seek.apply(_0x211891, _0x188f54);
                }
              });
              return _0x211891;
            }
            var _0x5576cb = _0x211891._soundById(_0x2a1e50);
            if (_0x5576cb) {
              if (typeof _0x482a96 === "number" && _0x482a96 >= 0) {
                var _0x434bde = _0x211891.playing(_0x2a1e50);
                if (_0x434bde) {
                  _0x211891.pause(_0x2a1e50, true);
                }
                _0x5576cb._seek = _0x482a96;
                _0x5576cb._ended = false;
                _0x211891._clearTimer(_0x2a1e50);
                if (!_0x211891._webAudio && _0x5576cb._node && !isNaN(_0x5576cb._node.duration)) {
                  _0x5576cb._node.currentTime = _0x482a96;
                }
                function _0x1b28f2() {
                  if (_0x434bde) {
                    _0x211891.play(_0x2a1e50, true);
                  }
                  _0x211891._emit("seek", _0x2a1e50);
                }
                if (_0x434bde && !_0x211891._webAudio) {
                  function _0x3fd95f() {
                    if (!_0x211891._playLock) {
                      _0x1b28f2();
                    } else {
                      setTimeout(_0x3fd95f, 0);
                    }
                  }
                  setTimeout(_0x3fd95f, 0);
                } else {
                  _0x1b28f2();
                }
              } else if (_0x211891._webAudio) {
                var _0x369b71 = _0x211891.playing(_0x2a1e50) ? _0x17f8e5.ctx.currentTime - _0x5576cb._playStart : 0;
                var _0x2275d7 = _0x5576cb._rateSeek ? _0x5576cb._rateSeek - _0x5576cb._seek : 0;
                return _0x5576cb._seek + (_0x2275d7 + _0x369b71 * Math.abs(_0x5576cb._rate));
              } else {
                return _0x5576cb._node.currentTime;
              }
            }
            return _0x211891;
          },
          playing: function (_0x3c5fb8) {
            var _0x3dd125 = this;
            if (typeof _0x3c5fb8 === "number") {
              var _0x5888be = _0x3dd125._soundById(_0x3c5fb8);
              if (_0x5888be) {
                return !_0x5888be._paused;
              } else {
                return false;
              }
            }
            for (var _0x16940a = 0; _0x16940a < _0x3dd125._sounds.length; _0x16940a++) {
              if (!_0x3dd125._sounds[_0x16940a]._paused) {
                return true;
              }
            }
            return false;
          },
          duration: function (_0x4959b7) {
            var _0x49c1cc = this;
            var _0x2cbcb8 = _0x49c1cc._duration;
            var _0x34ce68 = _0x49c1cc._soundById(_0x4959b7);
            if (_0x34ce68) {
              _0x2cbcb8 = _0x49c1cc._sprite[_0x34ce68._sprite][1] / 1000;
            }
            return _0x2cbcb8;
          },
          state: function () {
            return this._state;
          },
          unload: function () {
            var _0x5275f3 = this;
            var _0xe818b6 = _0x5275f3._sounds;
            for (var _0x4c71b2 = 0; _0x4c71b2 < _0xe818b6.length; _0x4c71b2++) {
              if (!_0xe818b6[_0x4c71b2]._paused) {
                _0x5275f3.stop(_0xe818b6[_0x4c71b2]._id);
              }
              if (!_0x5275f3._webAudio) {
                _0x5275f3._clearSound(_0xe818b6[_0x4c71b2]._node);
                _0xe818b6[_0x4c71b2]._node.removeEventListener("error", _0xe818b6[_0x4c71b2]._errorFn, false);
                _0xe818b6[_0x4c71b2]._node.removeEventListener(_0x17f8e5._canPlayEvent, _0xe818b6[_0x4c71b2]._loadFn, false);
                _0xe818b6[_0x4c71b2]._node.removeEventListener("ended", _0xe818b6[_0x4c71b2]._endFn, false);
                _0x17f8e5._releaseHtml5Audio(_0xe818b6[_0x4c71b2]._node);
              }
              delete _0xe818b6[_0x4c71b2]._node;
              _0x5275f3._clearTimer(_0xe818b6[_0x4c71b2]._id);
            }
            var _0x30a648 = _0x17f8e5._howls.indexOf(_0x5275f3);
            if (_0x30a648 >= 0) {
              _0x17f8e5._howls.splice(_0x30a648, 1);
            }
            var _0x23674e = true;
            for (_0x4c71b2 = 0; _0x4c71b2 < _0x17f8e5._howls.length; _0x4c71b2++) {
              if (_0x17f8e5._howls[_0x4c71b2]._src === _0x5275f3._src || _0x5275f3._src.indexOf(_0x17f8e5._howls[_0x4c71b2]._src) >= 0) {
                _0x23674e = false;
                break;
              }
            }
            if (_0x7a427c && _0x23674e) {
              delete _0x7a427c[_0x5275f3._src];
            }
            _0x17f8e5.noAudio = false;
            _0x5275f3._state = "unloaded";
            _0x5275f3._sounds = [];
            _0x5275f3 = null;
            return null;
          },
          on: function (_0x2409d6, _0x139dbd, _0x306795, _0xead7be) {
            var _0x1493d8 = this;
            var _0x2aafef = _0x1493d8["_on" + _0x2409d6];
            if (typeof _0x139dbd === "function") {
              _0x2aafef.push(_0xead7be ? {
                id: _0x306795,
                fn: _0x139dbd,
                once: _0xead7be
              } : {
                id: _0x306795,
                fn: _0x139dbd
              });
            }
            return _0x1493d8;
          },
          off: function (_0x4a3322, _0x1a7b84, _0x403496) {
            var _0x4ecf55 = this;
            var _0x4adfdf = _0x4ecf55["_on" + _0x4a3322];
            var _0xc6faa5 = 0;
            if (typeof _0x1a7b84 === "number") {
              _0x403496 = _0x1a7b84;
              _0x1a7b84 = null;
            }
            if (_0x1a7b84 || _0x403496) {
              for (_0xc6faa5 = 0; _0xc6faa5 < _0x4adfdf.length; _0xc6faa5++) {
                var _0x4789c4 = _0x403496 === _0x4adfdf[_0xc6faa5].id;
                if (_0x1a7b84 === _0x4adfdf[_0xc6faa5].fn && _0x4789c4 || !_0x1a7b84 && _0x4789c4) {
                  _0x4adfdf.splice(_0xc6faa5, 1);
                  break;
                }
              }
            } else if (_0x4a3322) {
              _0x4ecf55["_on" + _0x4a3322] = [];
            } else {
              var _0x1e7a69 = Object.keys(_0x4ecf55);
              for (_0xc6faa5 = 0; _0xc6faa5 < _0x1e7a69.length; _0xc6faa5++) {
                if (_0x1e7a69[_0xc6faa5].indexOf("_on") === 0 && Array.isArray(_0x4ecf55[_0x1e7a69[_0xc6faa5]])) {
                  _0x4ecf55[_0x1e7a69[_0xc6faa5]] = [];
                }
              }
            }
            return _0x4ecf55;
          },
          once: function (_0x3bc0df, _0x3e45a4, _0x3cfe60) {
            var _0x32820a = this;
            _0x32820a.on(_0x3bc0df, _0x3e45a4, _0x3cfe60, 1);
            return _0x32820a;
          },
          _emit: function (_0x104361, _0x4fce9f, _0x4d4b38) {
            var _0x4546fb = this;
            var _0xcba35f = _0x4546fb["_on" + _0x104361];
            for (var _0x3438cd = _0xcba35f.length - 1; _0x3438cd >= 0; _0x3438cd--) {
              if (!_0xcba35f[_0x3438cd].id || _0xcba35f[_0x3438cd].id === _0x4fce9f || _0x104361 === "load") {
                setTimeout(function (_0xec54a6) {
                  _0xec54a6.call(this, _0x4fce9f, _0x4d4b38);
                }.bind(_0x4546fb, _0xcba35f[_0x3438cd].fn), 0);
                if (_0xcba35f[_0x3438cd].once) {
                  _0x4546fb.off(_0x104361, _0xcba35f[_0x3438cd].fn, _0xcba35f[_0x3438cd].id);
                }
              }
            }
            _0x4546fb._loadQueue(_0x104361);
            return _0x4546fb;
          },
          _loadQueue: function (_0x2396ea) {
            var _0x132849 = this;
            if (_0x132849._queue.length > 0) {
              var _0x3bcb5b = _0x132849._queue[0];
              if (_0x3bcb5b.event === _0x2396ea) {
                _0x132849._queue.shift();
                _0x132849._loadQueue();
              }
              if (!_0x2396ea) {
                _0x3bcb5b.action();
              }
            }
            return _0x132849;
          },
          _ended: function (_0x56b89e) {
            var _0x5ac3e8 = this;
            var _0x4111b5 = _0x56b89e._sprite;
            if (!_0x5ac3e8._webAudio && _0x56b89e._node && !_0x56b89e._node.paused && !_0x56b89e._node.ended && _0x56b89e._node.currentTime < _0x56b89e._stop) {
              setTimeout(_0x5ac3e8._ended.bind(_0x5ac3e8, _0x56b89e), 100);
              return _0x5ac3e8;
            }
            var _0x5e7b21 = !!_0x56b89e._loop || !!_0x5ac3e8._sprite[_0x4111b5][2];
            _0x5ac3e8._emit("end", _0x56b89e._id);
            if (!_0x5ac3e8._webAudio && _0x5e7b21) {
              _0x5ac3e8.stop(_0x56b89e._id, true).play(_0x56b89e._id);
            }
            if (_0x5ac3e8._webAudio && _0x5e7b21) {
              _0x5ac3e8._emit("play", _0x56b89e._id);
              _0x56b89e._seek = _0x56b89e._start || 0;
              _0x56b89e._rateSeek = 0;
              _0x56b89e._playStart = _0x17f8e5.ctx.currentTime;
              var _0x39257d = (_0x56b89e._stop - _0x56b89e._start) * 1000 / Math.abs(_0x56b89e._rate);
              _0x5ac3e8._endTimers[_0x56b89e._id] = setTimeout(_0x5ac3e8._ended.bind(_0x5ac3e8, _0x56b89e), _0x39257d);
            }
            if (_0x5ac3e8._webAudio && !_0x5e7b21) {
              _0x56b89e._paused = true;
              _0x56b89e._ended = true;
              _0x56b89e._seek = _0x56b89e._start || 0;
              _0x56b89e._rateSeek = 0;
              _0x5ac3e8._clearTimer(_0x56b89e._id);
              _0x5ac3e8._cleanBuffer(_0x56b89e._node);
              _0x17f8e5._autoSuspend();
            }
            if (!_0x5ac3e8._webAudio && !_0x5e7b21) {
              _0x5ac3e8.stop(_0x56b89e._id, true);
            }
            return _0x5ac3e8;
          },
          _clearTimer: function (_0x35ee68) {
            var _0xaf2a76 = this;
            if (_0xaf2a76._endTimers[_0x35ee68]) {
              if (typeof _0xaf2a76._endTimers[_0x35ee68] !== "function") {
                clearTimeout(_0xaf2a76._endTimers[_0x35ee68]);
              } else {
                var _0x2e17f2 = _0xaf2a76._soundById(_0x35ee68);
                if (_0x2e17f2 && _0x2e17f2._node) {
                  _0x2e17f2._node.removeEventListener("ended", _0xaf2a76._endTimers[_0x35ee68], false);
                }
              }
              delete _0xaf2a76._endTimers[_0x35ee68];
            }
            return _0xaf2a76;
          },
          _soundById: function (_0x22ebba) {
            var _0x127448 = this;
            for (var _0x27de15 = 0; _0x27de15 < _0x127448._sounds.length; _0x27de15++) {
              if (_0x22ebba === _0x127448._sounds[_0x27de15]._id) {
                return _0x127448._sounds[_0x27de15];
              }
            }
            return null;
          },
          _inactiveSound: function () {
            var _0x5af66f = this;
            _0x5af66f._drain();
            for (var _0x12d1b2 = 0; _0x12d1b2 < _0x5af66f._sounds.length; _0x12d1b2++) {
              if (_0x5af66f._sounds[_0x12d1b2]._ended) {
                return _0x5af66f._sounds[_0x12d1b2].reset();
              }
            }
            return new _0x298043(_0x5af66f);
          },
          _drain: function () {
            var _0x86418 = this;
            var _0x518635 = _0x86418._pool;
            var _0x1ce27d = 0;
            var _0x374369 = 0;
            if (_0x86418._sounds.length < _0x518635) {
              return;
            }
            for (_0x374369 = 0; _0x374369 < _0x86418._sounds.length; _0x374369++) {
              if (_0x86418._sounds[_0x374369]._ended) {
                _0x1ce27d++;
              }
            }
            for (_0x374369 = _0x86418._sounds.length - 1; _0x374369 >= 0; _0x374369--) {
              if (_0x1ce27d <= _0x518635) {
                return;
              }
              if (_0x86418._sounds[_0x374369]._ended) {
                if (_0x86418._webAudio && _0x86418._sounds[_0x374369]._node) {
                  _0x86418._sounds[_0x374369]._node.disconnect(0);
                }
                _0x86418._sounds.splice(_0x374369, 1);
                _0x1ce27d--;
              }
            }
          },
          _getSoundIds: function (_0x404f29) {
            var _0x53dcdf = this;
            if (typeof _0x404f29 === "undefined") {
              var _0x14d49f = [];
              for (var _0x487f4d = 0; _0x487f4d < _0x53dcdf._sounds.length; _0x487f4d++) {
                _0x14d49f.push(_0x53dcdf._sounds[_0x487f4d]._id);
              }
              return _0x14d49f;
            } else {
              return [_0x404f29];
            }
          },
          _refreshBuffer: function (_0x1e5470) {
            var _0x4731c2 = this;
            _0x1e5470._node.bufferSource = _0x17f8e5.ctx.createBufferSource();
            _0x1e5470._node.bufferSource.buffer = _0x7a427c[_0x4731c2._src];
            if (_0x1e5470._panner) {
              _0x1e5470._node.bufferSource.connect(_0x1e5470._panner);
            } else {
              _0x1e5470._node.bufferSource.connect(_0x1e5470._node);
            }
            _0x1e5470._node.bufferSource.loop = _0x1e5470._loop;
            if (_0x1e5470._loop) {
              _0x1e5470._node.bufferSource.loopStart = _0x1e5470._start || 0;
              _0x1e5470._node.bufferSource.loopEnd = _0x1e5470._stop || 0;
            }
            _0x1e5470._node.bufferSource.playbackRate.setValueAtTime(_0x1e5470._rate, _0x17f8e5.ctx.currentTime);
            return _0x4731c2;
          },
          _cleanBuffer: function (_0x323d48) {
            var _0x1aebbd = this;
            var _0x507047 = _0x17f8e5._navigator && _0x17f8e5._navigator.vendor.indexOf("Apple") >= 0;
            if (!_0x323d48.bufferSource) {
              return _0x1aebbd;
            }
            if (_0x17f8e5._scratchBuffer && _0x323d48.bufferSource) {
              _0x323d48.bufferSource.onended = null;
              _0x323d48.bufferSource.disconnect(0);
              if (_0x507047) {
                try {
                  _0x323d48.bufferSource.buffer = _0x17f8e5._scratchBuffer;
                } catch (_0x181224) {}
              }
            }
            _0x323d48.bufferSource = null;
            return _0x1aebbd;
          },
          _clearSound: function (_0x443179) {
            var _0x117211 = /MSIE |Trident\//.test(_0x17f8e5._navigator && _0x17f8e5._navigator.userAgent);
            if (!_0x117211) {
              _0x443179.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
            }
          }
        };
        function _0x298043(_0x52d8f4) {
          this._parent = _0x52d8f4;
          this.init();
        }
        _0x298043.prototype = {
          init: function () {
            var _0x5e781c = this;
            var _0x5eae16 = _0x5e781c._parent;
            _0x5e781c._muted = _0x5eae16._muted;
            _0x5e781c._loop = _0x5eae16._loop;
            _0x5e781c._volume = _0x5eae16._volume;
            _0x5e781c._rate = _0x5eae16._rate;
            _0x5e781c._seek = 0;
            _0x5e781c._paused = true;
            _0x5e781c._ended = true;
            _0x5e781c._sprite = "__default";
            _0x5e781c._id = ++_0x17f8e5._counter;
            _0x5eae16._sounds.push(_0x5e781c);
            _0x5e781c.create();
            return _0x5e781c;
          },
          create: function () {
            var _0x2ba3db = this;
            var _0x4c728d = _0x2ba3db._parent;
            var _0x125f21 = _0x17f8e5._muted || _0x2ba3db._muted || _0x2ba3db._parent._muted ? 0 : _0x2ba3db._volume;
            if (_0x4c728d._webAudio) {
              _0x2ba3db._node = typeof _0x17f8e5.ctx.createGain === "undefined" ? _0x17f8e5.ctx.createGainNode() : _0x17f8e5.ctx.createGain();
              _0x2ba3db._node.gain.setValueAtTime(_0x125f21, _0x17f8e5.ctx.currentTime);
              _0x2ba3db._node.paused = true;
              _0x2ba3db._node.connect(_0x17f8e5.masterGain);
            } else if (!_0x17f8e5.noAudio) {
              _0x2ba3db._node = _0x17f8e5._obtainHtml5Audio();
              _0x2ba3db._errorFn = _0x2ba3db._errorListener.bind(_0x2ba3db);
              _0x2ba3db._node.addEventListener("error", _0x2ba3db._errorFn, false);
              _0x2ba3db._loadFn = _0x2ba3db._loadListener.bind(_0x2ba3db);
              _0x2ba3db._node.addEventListener(_0x17f8e5._canPlayEvent, _0x2ba3db._loadFn, false);
              _0x2ba3db._endFn = _0x2ba3db._endListener.bind(_0x2ba3db);
              _0x2ba3db._node.addEventListener("ended", _0x2ba3db._endFn, false);
              _0x2ba3db._node.src = _0x4c728d._src;
              _0x2ba3db._node.preload = _0x4c728d._preload === true ? "auto" : _0x4c728d._preload;
              _0x2ba3db._node.volume = _0x125f21 * _0x17f8e5.volume();
              _0x2ba3db._node.load();
            }
            return _0x2ba3db;
          },
          reset: function () {
            var _0x19e9fc = this;
            var _0xe9d6c9 = _0x19e9fc._parent;
            _0x19e9fc._muted = _0xe9d6c9._muted;
            _0x19e9fc._loop = _0xe9d6c9._loop;
            _0x19e9fc._volume = _0xe9d6c9._volume;
            _0x19e9fc._rate = _0xe9d6c9._rate;
            _0x19e9fc._seek = 0;
            _0x19e9fc._rateSeek = 0;
            _0x19e9fc._paused = true;
            _0x19e9fc._ended = true;
            _0x19e9fc._sprite = "__default";
            _0x19e9fc._id = ++_0x17f8e5._counter;
            return _0x19e9fc;
          },
          _errorListener: function () {
            var _0xe2f9de = this;
            _0xe2f9de._parent._emit("loaderror", _0xe2f9de._id, _0xe2f9de._node.error ? _0xe2f9de._node.error.code : 0);
            _0xe2f9de._node.removeEventListener("error", _0xe2f9de._errorFn, false);
          },
          _loadListener: function () {
            var _0x362e8a = this;
            var _0x23fbec = _0x362e8a._parent;
            _0x23fbec._duration = Math.ceil(_0x362e8a._node.duration * 10) / 10;
            if (Object.keys(_0x23fbec._sprite).length === 0) {
              _0x23fbec._sprite = {
                __default: [0, _0x23fbec._duration * 1000]
              };
            }
            if (_0x23fbec._state !== "loaded") {
              _0x23fbec._state = "loaded";
              _0x23fbec._emit("load");
              _0x23fbec._loadQueue();
            }
            _0x362e8a._node.removeEventListener(_0x17f8e5._canPlayEvent, _0x362e8a._loadFn, false);
          },
          _endListener: function () {
            var _0x63c90d = this;
            var _0x3dff38 = _0x63c90d._parent;
            if (_0x3dff38._duration === Infinity) {
              _0x3dff38._duration = Math.ceil(_0x63c90d._node.duration * 10) / 10;
              if (_0x3dff38._sprite.__default[1] === Infinity) {
                _0x3dff38._sprite.__default[1] = _0x3dff38._duration * 1000;
              }
              _0x3dff38._ended(_0x63c90d);
            }
            _0x63c90d._node.removeEventListener("ended", _0x63c90d._endFn, false);
          }
        };
        var _0x7a427c = {};
        function _0xecdf6b(_0x2ad9ef) {
          var _0x16d2d7 = _0x2ad9ef._src;
          if (_0x7a427c[_0x16d2d7]) {
            _0x2ad9ef._duration = _0x7a427c[_0x16d2d7].duration;
            _0x54f605(_0x2ad9ef);
            return;
          }
          if (/^data:[^;]+;base64,/.test(_0x16d2d7)) {
            var _0x3ce494 = atob(_0x16d2d7.split(",")[1]);
            var _0xf4016c = new Uint8Array(_0x3ce494.length);
            for (var _0x384a06 = 0; _0x384a06 < _0x3ce494.length; ++_0x384a06) {
              _0xf4016c[_0x384a06] = _0x3ce494.charCodeAt(_0x384a06);
            }
            _0x56a346(_0xf4016c.buffer, _0x2ad9ef);
          } else {
            var _0x4c3271 = new XMLHttpRequest();
            _0x4c3271.open(_0x2ad9ef._xhr.method, _0x16d2d7, true);
            _0x4c3271.withCredentials = _0x2ad9ef._xhr.withCredentials;
            _0x4c3271.responseType = "arraybuffer";
            if (_0x2ad9ef._xhr.headers) {
              Object.keys(_0x2ad9ef._xhr.headers).forEach(function (_0x230bd8) {
                _0x4c3271.setRequestHeader(_0x230bd8, _0x2ad9ef._xhr.headers[_0x230bd8]);
              });
            }
            _0x4c3271.onload = function () {
              var _0x59c2d9 = (_0x4c3271.status + "")[0];
              if (_0x59c2d9 !== "0" && _0x59c2d9 !== "2" && _0x59c2d9 !== "3") {
                _0x2ad9ef._emit("loaderror", null, "Failed loading audio file with status: " + _0x4c3271.status + ".");
                return;
              }
              _0x56a346(_0x4c3271.response, _0x2ad9ef);
            };
            _0x4c3271.onerror = function () {
              if (_0x2ad9ef._webAudio) {
                _0x2ad9ef._html5 = true;
                _0x2ad9ef._webAudio = false;
                _0x2ad9ef._sounds = [];
                delete _0x7a427c[_0x16d2d7];
                _0x2ad9ef.load();
              }
            };
            _0x1c0080(_0x4c3271);
          }
        }
        function _0x1c0080(_0x9bab43) {
          try {
            _0x9bab43.send();
          } catch (_0x499d05) {
            _0x9bab43.onerror();
          }
        }
        function _0x56a346(_0x4a8b02, _0x1acc7c) {
          function _0x27361f() {
            _0x1acc7c._emit("loaderror", null, "Decoding audio data failed.");
          }
          function _0x235400(_0x2735d0) {
            if (_0x2735d0 && _0x1acc7c._sounds.length > 0) {
              _0x7a427c[_0x1acc7c._src] = _0x2735d0;
              _0x54f605(_0x1acc7c, _0x2735d0);
            } else {
              _0x27361f();
            }
          }
          if (typeof Promise !== "undefined" && _0x17f8e5.ctx.decodeAudioData.length === 1) {
            _0x17f8e5.ctx.decodeAudioData(_0x4a8b02).then(_0x235400).catch(_0x27361f);
          } else {
            _0x17f8e5.ctx.decodeAudioData(_0x4a8b02, _0x235400, _0x27361f);
          }
        }
        function _0x54f605(_0x343892, _0x3809eb) {
          if (_0x3809eb && !_0x343892._duration) {
            _0x343892._duration = _0x3809eb.duration;
          }
          if (Object.keys(_0x343892._sprite).length === 0) {
            _0x343892._sprite = {
              __default: [0, _0x343892._duration * 1000]
            };
          }
          if (_0x343892._state !== "loaded") {
            _0x343892._state = "loaded";
            _0x343892._emit("load");
            _0x343892._loadQueue();
          }
        }
        function _0x51faf6() {
          if (!_0x17f8e5.usingWebAudio) {
            return;
          }
          try {
            if (typeof AudioContext !== "undefined") {
              _0x17f8e5.ctx = new AudioContext();
            } else if (typeof webkitAudioContext !== "undefined") {
              _0x17f8e5.ctx = new webkitAudioContext();
            } else {
              _0x17f8e5.usingWebAudio = false;
            }
          } catch (_0x54fc65) {
            _0x17f8e5.usingWebAudio = false;
          }
          if (!_0x17f8e5.ctx) {
            _0x17f8e5.usingWebAudio = false;
          }
          var _0x236ee5 = /iP(hone|od|ad)/.test(_0x17f8e5._navigator && _0x17f8e5._navigator.platform);
          var _0x38a412 = _0x17f8e5._navigator && _0x17f8e5._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          var _0xfb361 = _0x38a412 ? parseInt(_0x38a412[1], 10) : null;
          if (_0x236ee5 && _0xfb361 && _0xfb361 < 9) {
            var _0x4307e2 = /safari/.test(_0x17f8e5._navigator && _0x17f8e5._navigator.userAgent.toLowerCase());
            if (_0x17f8e5._navigator && !_0x4307e2) {
              _0x17f8e5.usingWebAudio = false;
            }
          }
          if (_0x17f8e5.usingWebAudio) {
            _0x17f8e5.masterGain = typeof _0x17f8e5.ctx.createGain === "undefined" ? _0x17f8e5.ctx.createGainNode() : _0x17f8e5.ctx.createGain();
            _0x17f8e5.masterGain.gain.setValueAtTime(_0x17f8e5._muted ? 0 : _0x17f8e5._volume, _0x17f8e5.ctx.currentTime);
            _0x17f8e5.masterGain.connect(_0x17f8e5.ctx.destination);
          }
          _0x17f8e5._setup();
        }
        if (true) {
          _0x5e14b9 = [];
          _0x51c325 = function () {
            return {
              Howler: _0x17f8e5,
              Howl: _0x17026d
            };
          }.apply(_0x41a285, _0x5e14b9);
          if (_0x51c325 !== undefined) {
            _0x4bb999.exports = _0x51c325;
          }
        }
        if (true) {
          _0x41a285.Howler = _0x17f8e5;
          _0x41a285.Howl = _0x17026d;
        }
        if (typeof _0xa8660f.g !== "undefined") {
          _0xa8660f.g.HowlerGlobal = _0x52f8bb;
          _0xa8660f.g.Howler = _0x17f8e5;
          _0xa8660f.g.Howl = _0x17026d;
          _0xa8660f.g.Sound = _0x298043;
        } else if (typeof window !== "undefined") {
          window.HowlerGlobal = _0x52f8bb;
          window.Howler = _0x17f8e5;
          window.Howl = _0x17026d;
          window.Sound = _0x298043;
        }
      })();
      (function () {
        'use strict';

        HowlerGlobal.prototype._pos = [0, 0, 0];
        HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
        HowlerGlobal.prototype.stereo = function (_0x148f48) {
          var _0x3a9419 = this;
          if (!_0x3a9419.ctx || !_0x3a9419.ctx.listener) {
            return _0x3a9419;
          }
          for (var _0x314d72 = _0x3a9419._howls.length - 1; _0x314d72 >= 0; _0x314d72--) {
            _0x3a9419._howls[_0x314d72].stereo(_0x148f48);
          }
          return _0x3a9419;
        };
        HowlerGlobal.prototype.pos = function (_0x20ca58, _0xc720b3, _0x5cbac1) {
          var _0x1c6886 = this;
          if (!_0x1c6886.ctx || !_0x1c6886.ctx.listener) {
            return _0x1c6886;
          }
          _0xc720b3 = typeof _0xc720b3 !== "number" ? _0x1c6886._pos[1] : _0xc720b3;
          _0x5cbac1 = typeof _0x5cbac1 !== "number" ? _0x1c6886._pos[2] : _0x5cbac1;
          if (typeof _0x20ca58 === "number") {
            _0x1c6886._pos = [_0x20ca58, _0xc720b3, _0x5cbac1];
            if (typeof _0x1c6886.ctx.listener.positionX !== "undefined") {
              _0x1c6886.ctx.listener.positionX.setTargetAtTime(_0x1c6886._pos[0], Howler.ctx.currentTime, 0.1);
              _0x1c6886.ctx.listener.positionY.setTargetAtTime(_0x1c6886._pos[1], Howler.ctx.currentTime, 0.1);
              _0x1c6886.ctx.listener.positionZ.setTargetAtTime(_0x1c6886._pos[2], Howler.ctx.currentTime, 0.1);
            } else {
              _0x1c6886.ctx.listener.setPosition(_0x1c6886._pos[0], _0x1c6886._pos[1], _0x1c6886._pos[2]);
            }
          } else {
            return _0x1c6886._pos;
          }
          return _0x1c6886;
        };
        HowlerGlobal.prototype.orientation = function (_0x15a8c7, _0xed2992, _0x19e56b, _0x40c783, _0xbb3cb4, _0x4de889) {
          var _0x12cbee = this;
          if (!_0x12cbee.ctx || !_0x12cbee.ctx.listener) {
            return _0x12cbee;
          }
          var _0x344cdf = _0x12cbee._orientation;
          _0xed2992 = typeof _0xed2992 !== "number" ? _0x344cdf[1] : _0xed2992;
          _0x19e56b = typeof _0x19e56b !== "number" ? _0x344cdf[2] : _0x19e56b;
          _0x40c783 = typeof _0x40c783 !== "number" ? _0x344cdf[3] : _0x40c783;
          _0xbb3cb4 = typeof _0xbb3cb4 !== "number" ? _0x344cdf[4] : _0xbb3cb4;
          _0x4de889 = typeof _0x4de889 !== "number" ? _0x344cdf[5] : _0x4de889;
          if (typeof _0x15a8c7 === "number") {
            _0x12cbee._orientation = [_0x15a8c7, _0xed2992, _0x19e56b, _0x40c783, _0xbb3cb4, _0x4de889];
            if (typeof _0x12cbee.ctx.listener.forwardX !== "undefined") {
              _0x12cbee.ctx.listener.forwardX.setTargetAtTime(_0x15a8c7, Howler.ctx.currentTime, 0.1);
              _0x12cbee.ctx.listener.forwardY.setTargetAtTime(_0xed2992, Howler.ctx.currentTime, 0.1);
              _0x12cbee.ctx.listener.forwardZ.setTargetAtTime(_0x19e56b, Howler.ctx.currentTime, 0.1);
              _0x12cbee.ctx.listener.upX.setTargetAtTime(_0x40c783, Howler.ctx.currentTime, 0.1);
              _0x12cbee.ctx.listener.upY.setTargetAtTime(_0xbb3cb4, Howler.ctx.currentTime, 0.1);
              _0x12cbee.ctx.listener.upZ.setTargetAtTime(_0x4de889, Howler.ctx.currentTime, 0.1);
            } else {
              _0x12cbee.ctx.listener.setOrientation(_0x15a8c7, _0xed2992, _0x19e56b, _0x40c783, _0xbb3cb4, _0x4de889);
            }
          } else {
            return _0x344cdf;
          }
          return _0x12cbee;
        };
        Howl.prototype.init = function (_0x7d252d) {
          return function (_0x35740c) {
            var _0x478fc7 = this;
            _0x478fc7._orientation = _0x35740c.orientation || [1, 0, 0];
            _0x478fc7._stereo = _0x35740c.stereo || null;
            _0x478fc7._pos = _0x35740c.pos || null;
            _0x478fc7._pannerAttr = {
              coneInnerAngle: typeof _0x35740c.coneInnerAngle !== "undefined" ? _0x35740c.coneInnerAngle : 360,
              coneOuterAngle: typeof _0x35740c.coneOuterAngle !== "undefined" ? _0x35740c.coneOuterAngle : 360,
              coneOuterGain: typeof _0x35740c.coneOuterGain !== "undefined" ? _0x35740c.coneOuterGain : 0,
              distanceModel: typeof _0x35740c.distanceModel !== "undefined" ? _0x35740c.distanceModel : "inverse",
              maxDistance: typeof _0x35740c.maxDistance !== "undefined" ? _0x35740c.maxDistance : 10000,
              panningModel: typeof _0x35740c.panningModel !== "undefined" ? _0x35740c.panningModel : "HRTF",
              refDistance: typeof _0x35740c.refDistance !== "undefined" ? _0x35740c.refDistance : 1,
              rolloffFactor: typeof _0x35740c.rolloffFactor !== "undefined" ? _0x35740c.rolloffFactor : 1
            };
            _0x478fc7._onstereo = _0x35740c.onstereo ? [{
              fn: _0x35740c.onstereo
            }] : [];
            _0x478fc7._onpos = _0x35740c.onpos ? [{
              fn: _0x35740c.onpos
            }] : [];
            _0x478fc7._onorientation = _0x35740c.onorientation ? [{
              fn: _0x35740c.onorientation
            }] : [];
            return _0x7d252d.call(this, _0x35740c);
          };
        }(Howl.prototype.init);
        Howl.prototype.stereo = function (_0x34b012, _0x5cfbe8) {
          var _0x255b90 = this;
          if (!_0x255b90._webAudio) {
            return _0x255b90;
          }
          if (_0x255b90._state !== "loaded") {
            _0x255b90._queue.push({
              event: "stereo",
              action: function () {
                _0x255b90.stereo(_0x34b012, _0x5cfbe8);
              }
            });
            return _0x255b90;
          }
          var _0x5dc750 = typeof Howler.ctx.createStereoPanner === "undefined" ? "spatial" : "stereo";
          if (typeof _0x5cfbe8 === "undefined") {
            if (typeof _0x34b012 === "number") {
              _0x255b90._stereo = _0x34b012;
              _0x255b90._pos = [_0x34b012, 0, 0];
            } else {
              return _0x255b90._stereo;
            }
          }
          var _0x477bfd = _0x255b90._getSoundIds(_0x5cfbe8);
          for (var _0x1042c3 = 0; _0x1042c3 < _0x477bfd.length; _0x1042c3++) {
            var _0x542372 = _0x255b90._soundById(_0x477bfd[_0x1042c3]);
            if (_0x542372) {
              if (typeof _0x34b012 === "number") {
                _0x542372._stereo = _0x34b012;
                _0x542372._pos = [_0x34b012, 0, 0];
                if (_0x542372._node) {
                  _0x542372._pannerAttr.panningModel = "equalpower";
                  if (!_0x542372._panner || !_0x542372._panner.pan) {
                    _0x193d24(_0x542372, _0x5dc750);
                  }
                  if (_0x5dc750 === "spatial") {
                    if (typeof _0x542372._panner.positionX !== "undefined") {
                      _0x542372._panner.positionX.setValueAtTime(_0x34b012, Howler.ctx.currentTime);
                      _0x542372._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                      _0x542372._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
                    } else {
                      _0x542372._panner.setPosition(_0x34b012, 0, 0);
                    }
                  } else {
                    _0x542372._panner.pan.setValueAtTime(_0x34b012, Howler.ctx.currentTime);
                  }
                }
                _0x255b90._emit("stereo", _0x542372._id);
              } else {
                return _0x542372._stereo;
              }
            }
          }
          return _0x255b90;
        };
        Howl.prototype.pos = function (_0x5ade8f, _0x4ccbda, _0x46af56, _0x33ab71) {
          var _0x4577e1 = this;
          if (!_0x4577e1._webAudio) {
            return _0x4577e1;
          }
          if (_0x4577e1._state !== "loaded") {
            _0x4577e1._queue.push({
              event: "pos",
              action: function () {
                _0x4577e1.pos(_0x5ade8f, _0x4ccbda, _0x46af56, _0x33ab71);
              }
            });
            return _0x4577e1;
          }
          _0x4ccbda = typeof _0x4ccbda !== "number" ? 0 : _0x4ccbda;
          _0x46af56 = typeof _0x46af56 !== "number" ? -0.5 : _0x46af56;
          if (typeof _0x33ab71 === "undefined") {
            if (typeof _0x5ade8f === "number") {
              _0x4577e1._pos = [_0x5ade8f, _0x4ccbda, _0x46af56];
            } else {
              return _0x4577e1._pos;
            }
          }
          var _0x50eec2 = _0x4577e1._getSoundIds(_0x33ab71);
          for (var _0x52ca20 = 0; _0x52ca20 < _0x50eec2.length; _0x52ca20++) {
            var _0x409113 = _0x4577e1._soundById(_0x50eec2[_0x52ca20]);
            if (_0x409113) {
              if (typeof _0x5ade8f === "number") {
                _0x409113._pos = [_0x5ade8f, _0x4ccbda, _0x46af56];
                if (_0x409113._node) {
                  if (!_0x409113._panner || _0x409113._panner.pan) {
                    _0x193d24(_0x409113, "spatial");
                  }
                  if (typeof _0x409113._panner.positionX !== "undefined") {
                    _0x409113._panner.positionX.setValueAtTime(_0x5ade8f, Howler.ctx.currentTime);
                    _0x409113._panner.positionY.setValueAtTime(_0x4ccbda, Howler.ctx.currentTime);
                    _0x409113._panner.positionZ.setValueAtTime(_0x46af56, Howler.ctx.currentTime);
                  } else {
                    _0x409113._panner.setPosition(_0x5ade8f, _0x4ccbda, _0x46af56);
                  }
                }
                _0x4577e1._emit("pos", _0x409113._id);
              } else {
                return _0x409113._pos;
              }
            }
          }
          return _0x4577e1;
        };
        Howl.prototype.orientation = function (_0x394589, _0xe930ea, _0x47ea76, _0x5d1a7c) {
          var _0x1c1b44 = this;
          if (!_0x1c1b44._webAudio) {
            return _0x1c1b44;
          }
          if (_0x1c1b44._state !== "loaded") {
            _0x1c1b44._queue.push({
              event: "orientation",
              action: function () {
                _0x1c1b44.orientation(_0x394589, _0xe930ea, _0x47ea76, _0x5d1a7c);
              }
            });
            return _0x1c1b44;
          }
          _0xe930ea = typeof _0xe930ea !== "number" ? _0x1c1b44._orientation[1] : _0xe930ea;
          _0x47ea76 = typeof _0x47ea76 !== "number" ? _0x1c1b44._orientation[2] : _0x47ea76;
          if (typeof _0x5d1a7c === "undefined") {
            if (typeof _0x394589 === "number") {
              _0x1c1b44._orientation = [_0x394589, _0xe930ea, _0x47ea76];
            } else {
              return _0x1c1b44._orientation;
            }
          }
          var _0x19c907 = _0x1c1b44._getSoundIds(_0x5d1a7c);
          for (var _0x5d3130 = 0; _0x5d3130 < _0x19c907.length; _0x5d3130++) {
            var _0x3abaf5 = _0x1c1b44._soundById(_0x19c907[_0x5d3130]);
            if (_0x3abaf5) {
              if (typeof _0x394589 === "number") {
                _0x3abaf5._orientation = [_0x394589, _0xe930ea, _0x47ea76];
                if (_0x3abaf5._node) {
                  if (!_0x3abaf5._panner) {
                    if (!_0x3abaf5._pos) {
                      _0x3abaf5._pos = _0x1c1b44._pos || [0, 0, -0.5];
                    }
                    _0x193d24(_0x3abaf5, "spatial");
                  }
                  if (typeof _0x3abaf5._panner.orientationX !== "undefined") {
                    _0x3abaf5._panner.orientationX.setValueAtTime(_0x394589, Howler.ctx.currentTime);
                    _0x3abaf5._panner.orientationY.setValueAtTime(_0xe930ea, Howler.ctx.currentTime);
                    _0x3abaf5._panner.orientationZ.setValueAtTime(_0x47ea76, Howler.ctx.currentTime);
                  } else {
                    _0x3abaf5._panner.setOrientation(_0x394589, _0xe930ea, _0x47ea76);
                  }
                }
                _0x1c1b44._emit("orientation", _0x3abaf5._id);
              } else {
                return _0x3abaf5._orientation;
              }
            }
          }
          return _0x1c1b44;
        };
        Howl.prototype.pannerAttr = function () {
          var _0x2a2b7d = this;
          var _0x4e3400 = arguments;
          var _0x2c4c7f;
          var _0x1d29de;
          var _0x59a89d;
          if (!_0x2a2b7d._webAudio) {
            return _0x2a2b7d;
          }
          if (_0x4e3400.length === 0) {
            return _0x2a2b7d._pannerAttr;
          } else if (_0x4e3400.length === 1) {
            if (typeof _0x4e3400[0] === "object") {
              _0x2c4c7f = _0x4e3400[0];
              if (typeof _0x1d29de === "undefined") {
                if (!_0x2c4c7f.pannerAttr) {
                  _0x2c4c7f.pannerAttr = {
                    coneInnerAngle: _0x2c4c7f.coneInnerAngle,
                    coneOuterAngle: _0x2c4c7f.coneOuterAngle,
                    coneOuterGain: _0x2c4c7f.coneOuterGain,
                    distanceModel: _0x2c4c7f.distanceModel,
                    maxDistance: _0x2c4c7f.maxDistance,
                    refDistance: _0x2c4c7f.refDistance,
                    rolloffFactor: _0x2c4c7f.rolloffFactor,
                    panningModel: _0x2c4c7f.panningModel
                  };
                }
                _0x2a2b7d._pannerAttr = {
                  coneInnerAngle: typeof _0x2c4c7f.pannerAttr.coneInnerAngle !== "undefined" ? _0x2c4c7f.pannerAttr.coneInnerAngle : _0x2a2b7d._coneInnerAngle,
                  coneOuterAngle: typeof _0x2c4c7f.pannerAttr.coneOuterAngle !== "undefined" ? _0x2c4c7f.pannerAttr.coneOuterAngle : _0x2a2b7d._coneOuterAngle,
                  coneOuterGain: typeof _0x2c4c7f.pannerAttr.coneOuterGain !== "undefined" ? _0x2c4c7f.pannerAttr.coneOuterGain : _0x2a2b7d._coneOuterGain,
                  distanceModel: typeof _0x2c4c7f.pannerAttr.distanceModel !== "undefined" ? _0x2c4c7f.pannerAttr.distanceModel : _0x2a2b7d._distanceModel,
                  maxDistance: typeof _0x2c4c7f.pannerAttr.maxDistance !== "undefined" ? _0x2c4c7f.pannerAttr.maxDistance : _0x2a2b7d._maxDistance,
                  refDistance: typeof _0x2c4c7f.pannerAttr.refDistance !== "undefined" ? _0x2c4c7f.pannerAttr.refDistance : _0x2a2b7d._refDistance,
                  rolloffFactor: typeof _0x2c4c7f.pannerAttr.rolloffFactor !== "undefined" ? _0x2c4c7f.pannerAttr.rolloffFactor : _0x2a2b7d._rolloffFactor,
                  panningModel: typeof _0x2c4c7f.pannerAttr.panningModel !== "undefined" ? _0x2c4c7f.pannerAttr.panningModel : _0x2a2b7d._panningModel
                };
              }
            } else {
              _0x59a89d = _0x2a2b7d._soundById(parseInt(_0x4e3400[0], 10));
              if (_0x59a89d) {
                return _0x59a89d._pannerAttr;
              } else {
                return _0x2a2b7d._pannerAttr;
              }
            }
          } else if (_0x4e3400.length === 2) {
            _0x2c4c7f = _0x4e3400[0];
            _0x1d29de = parseInt(_0x4e3400[1], 10);
          }
          var _0x3a6c2a = _0x2a2b7d._getSoundIds(_0x1d29de);
          for (var _0x427004 = 0; _0x427004 < _0x3a6c2a.length; _0x427004++) {
            _0x59a89d = _0x2a2b7d._soundById(_0x3a6c2a[_0x427004]);
            if (_0x59a89d) {
              var _0x35a189 = _0x59a89d._pannerAttr;
              _0x35a189 = {
                coneInnerAngle: typeof _0x2c4c7f.coneInnerAngle !== "undefined" ? _0x2c4c7f.coneInnerAngle : _0x35a189.coneInnerAngle,
                coneOuterAngle: typeof _0x2c4c7f.coneOuterAngle !== "undefined" ? _0x2c4c7f.coneOuterAngle : _0x35a189.coneOuterAngle,
                coneOuterGain: typeof _0x2c4c7f.coneOuterGain !== "undefined" ? _0x2c4c7f.coneOuterGain : _0x35a189.coneOuterGain,
                distanceModel: typeof _0x2c4c7f.distanceModel !== "undefined" ? _0x2c4c7f.distanceModel : _0x35a189.distanceModel,
                maxDistance: typeof _0x2c4c7f.maxDistance !== "undefined" ? _0x2c4c7f.maxDistance : _0x35a189.maxDistance,
                refDistance: typeof _0x2c4c7f.refDistance !== "undefined" ? _0x2c4c7f.refDistance : _0x35a189.refDistance,
                rolloffFactor: typeof _0x2c4c7f.rolloffFactor !== "undefined" ? _0x2c4c7f.rolloffFactor : _0x35a189.rolloffFactor,
                panningModel: typeof _0x2c4c7f.panningModel !== "undefined" ? _0x2c4c7f.panningModel : _0x35a189.panningModel
              };
              var _0x49fae3 = _0x59a89d._panner;
              if (!_0x49fae3) {
                if (!_0x59a89d._pos) {
                  _0x59a89d._pos = _0x2a2b7d._pos || [0, 0, -0.5];
                }
                _0x193d24(_0x59a89d, "spatial");
                _0x49fae3 = _0x59a89d._panner;
              }
              _0x49fae3.coneInnerAngle = _0x35a189.coneInnerAngle;
              _0x49fae3.coneOuterAngle = _0x35a189.coneOuterAngle;
              _0x49fae3.coneOuterGain = _0x35a189.coneOuterGain;
              _0x49fae3.distanceModel = _0x35a189.distanceModel;
              _0x49fae3.maxDistance = _0x35a189.maxDistance;
              _0x49fae3.refDistance = _0x35a189.refDistance;
              _0x49fae3.rolloffFactor = _0x35a189.rolloffFactor;
              _0x49fae3.panningModel = _0x35a189.panningModel;
            }
          }
          return _0x2a2b7d;
        };
        Sound.prototype.init = function (_0x426be8) {
          return function () {
            var _0x20c376 = this;
            var _0x376f13 = _0x20c376._parent;
            _0x20c376._orientation = _0x376f13._orientation;
            _0x20c376._stereo = _0x376f13._stereo;
            _0x20c376._pos = _0x376f13._pos;
            _0x20c376._pannerAttr = _0x376f13._pannerAttr;
            _0x426be8.call(this);
            if (_0x20c376._stereo) {
              _0x376f13.stereo(_0x20c376._stereo);
            } else if (_0x20c376._pos) {
              _0x376f13.pos(_0x20c376._pos[0], _0x20c376._pos[1], _0x20c376._pos[2], _0x20c376._id);
            }
          };
        }(Sound.prototype.init);
        Sound.prototype.reset = function (_0x244577) {
          return function () {
            var _0x2ebbe2 = this;
            var _0x1db279 = _0x2ebbe2._parent;
            _0x2ebbe2._orientation = _0x1db279._orientation;
            _0x2ebbe2._stereo = _0x1db279._stereo;
            _0x2ebbe2._pos = _0x1db279._pos;
            _0x2ebbe2._pannerAttr = _0x1db279._pannerAttr;
            if (_0x2ebbe2._stereo) {
              _0x1db279.stereo(_0x2ebbe2._stereo);
            } else if (_0x2ebbe2._pos) {
              _0x1db279.pos(_0x2ebbe2._pos[0], _0x2ebbe2._pos[1], _0x2ebbe2._pos[2], _0x2ebbe2._id);
            } else if (_0x2ebbe2._panner) {
              _0x2ebbe2._panner.disconnect(0);
              _0x2ebbe2._panner = undefined;
              _0x1db279._refreshBuffer(_0x2ebbe2);
            }
            return _0x244577.call(this);
          };
        }(Sound.prototype.reset);
        function _0x193d24(_0x1235db, _0x3c2b28) {
          _0x3c2b28 = _0x3c2b28 || "spatial";
          if (_0x3c2b28 === "spatial") {
            _0x1235db._panner = Howler.ctx.createPanner();
            _0x1235db._panner.coneInnerAngle = _0x1235db._pannerAttr.coneInnerAngle;
            _0x1235db._panner.coneOuterAngle = _0x1235db._pannerAttr.coneOuterAngle;
            _0x1235db._panner.coneOuterGain = _0x1235db._pannerAttr.coneOuterGain;
            _0x1235db._panner.distanceModel = _0x1235db._pannerAttr.distanceModel;
            _0x1235db._panner.maxDistance = _0x1235db._pannerAttr.maxDistance;
            _0x1235db._panner.refDistance = _0x1235db._pannerAttr.refDistance;
            _0x1235db._panner.rolloffFactor = _0x1235db._pannerAttr.rolloffFactor;
            _0x1235db._panner.panningModel = _0x1235db._pannerAttr.panningModel;
            if (typeof _0x1235db._panner.positionX !== "undefined") {
              _0x1235db._panner.positionX.setValueAtTime(_0x1235db._pos[0], Howler.ctx.currentTime);
              _0x1235db._panner.positionY.setValueAtTime(_0x1235db._pos[1], Howler.ctx.currentTime);
              _0x1235db._panner.positionZ.setValueAtTime(_0x1235db._pos[2], Howler.ctx.currentTime);
            } else {
              _0x1235db._panner.setPosition(_0x1235db._pos[0], _0x1235db._pos[1], _0x1235db._pos[2]);
            }
            if (typeof _0x1235db._panner.orientationX !== "undefined") {
              _0x1235db._panner.orientationX.setValueAtTime(_0x1235db._orientation[0], Howler.ctx.currentTime);
              _0x1235db._panner.orientationY.setValueAtTime(_0x1235db._orientation[1], Howler.ctx.currentTime);
              _0x1235db._panner.orientationZ.setValueAtTime(_0x1235db._orientation[2], Howler.ctx.currentTime);
            } else {
              _0x1235db._panner.setOrientation(_0x1235db._orientation[0], _0x1235db._orientation[1], _0x1235db._orientation[2]);
            }
          } else {
            _0x1235db._panner = Howler.ctx.createStereoPanner();
            _0x1235db._panner.pan.setValueAtTime(_0x1235db._stereo, Howler.ctx.currentTime);
          }
          _0x1235db._panner.connect(_0x1235db._node);
          if (!_0x1235db._paused) {
            _0x1235db._parent.pause(_0x1235db._id, true).play(_0x1235db._id, true);
          }
        }
      })();
    },
    "./node_modules/socket.io-client/build/esm/contrib/backo2.js": (_0x22d0fa, _0x3c4414, _0x3a1463) => {
      'use strict';

      _0x3a1463.r(_0x3c4414);
      _0x3a1463.d(_0x3c4414, {
        Backoff: () => _0x5e4c2d
      });
      function _0x5e4c2d(_0x41a2ee) {
        _0x41a2ee = _0x41a2ee || {};
        this.ms = _0x41a2ee.min || 100;
        this.max = _0x41a2ee.max || 10000;
        this.factor = _0x41a2ee.factor || 2;
        this.jitter = _0x41a2ee.jitter > 0 && _0x41a2ee.jitter <= 1 ? _0x41a2ee.jitter : 0;
        this.attempts = 0;
      }
      _0x5e4c2d.prototype.duration = function () {
        var _0x4d6856 = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var _0x5181a3 = Math.random();
          var _0x3cb133 = Math.floor(_0x5181a3 * this.jitter * _0x4d6856);
          _0x4d6856 = (Math.floor(_0x5181a3 * 10) & 1) == 0 ? _0x4d6856 - _0x3cb133 : _0x4d6856 + _0x3cb133;
        }
        return Math.min(_0x4d6856, this.max) | 0;
      };
      _0x5e4c2d.prototype.reset = function () {
        this.attempts = 0;
      };
      _0x5e4c2d.prototype.setMin = function (_0x280d4f) {
        this.ms = _0x280d4f;
      };
      _0x5e4c2d.prototype.setMax = function (_0x47a5e1) {
        this.max = _0x47a5e1;
      };
      _0x5e4c2d.prototype.setJitter = function (_0x2b5734) {
        this.jitter = _0x2b5734;
      };
    },
    "./node_modules/socket.io-client/build/esm/index.js": (_0x3d4e3d, _0x37fe1c, _0x1c60b1) => {
      'use strict';

      _0x1c60b1.r(_0x37fe1c);
      _0x1c60b1.d(_0x37fe1c, {
        Fetch: () => _0x55a367.Fetch,
        Manager: () => _0x53868f.Manager,
        NodeWebSocket: () => _0x55a367.NodeWebSocket,
        NodeXHR: () => _0x55a367.NodeXHR,
        Socket: () => _0x309fec.Socket,
        WebSocket: () => _0x55a367.WebSocket,
        WebTransport: () => _0x55a367.WebTransport,
        XHR: () => _0x55a367.XHR,
        connect: () => _0x5ce3be,
        default: () => _0x5ce3be,
        io: () => _0x5ce3be,
        protocol: () => _0x497037.protocol
      });
      var _0x1c1239 = _0x1c60b1("./node_modules/socket.io-client/build/esm/url.js");
      var _0x53868f = _0x1c60b1("./node_modules/socket.io-client/build/esm/manager.js");
      var _0x309fec = _0x1c60b1("./node_modules/socket.io-client/build/esm/socket.js");
      var _0x497037 = _0x1c60b1("./node_modules/socket.io-parser/build/esm/index.js");
      var _0x55a367 = _0x1c60b1("./node_modules/engine.io-client/build/esm/index.js");
      const _0x4d2beb = {};
      function _0x5ce3be(_0x53a2f8, _0x4daf27) {
        if (typeof _0x53a2f8 === "object") {
          _0x4daf27 = _0x53a2f8;
          _0x53a2f8 = undefined;
        }
        _0x4daf27 = _0x4daf27 || {};
        const _0x4134ee = (0, _0x1c1239.url)(_0x53a2f8, _0x4daf27.path || "/socket.io");
        const _0x49a9f8 = _0x4134ee.source;
        const _0x3e6171 = _0x4134ee.id;
        const _0x17c888 = _0x4134ee.path;
        const _0x450cf7 = _0x4d2beb[_0x3e6171] && _0x17c888 in _0x4d2beb[_0x3e6171].nsps;
        const _0x5a45aa = _0x4daf27.forceNew || _0x4daf27["force new connection"] || _0x4daf27.multiplex === false || _0x450cf7;
        let _0x2dac8d;
        if (_0x5a45aa) {
          _0x2dac8d = new _0x53868f.Manager(_0x49a9f8, _0x4daf27);
        } else {
          if (!_0x4d2beb[_0x3e6171]) {
            _0x4d2beb[_0x3e6171] = new _0x53868f.Manager(_0x49a9f8, _0x4daf27);
          }
          _0x2dac8d = _0x4d2beb[_0x3e6171];
        }
        if (_0x4134ee.query && !_0x4daf27.query) {
          _0x4daf27.query = _0x4134ee.queryKey;
        }
        return _0x2dac8d.socket(_0x4134ee.path, _0x4daf27);
      }
      Object.assign(_0x5ce3be, {
        Manager: _0x53868f.Manager,
        Socket: _0x309fec.Socket,
        io: _0x5ce3be,
        connect: _0x5ce3be
      });
    },
    "./node_modules/socket.io-client/build/esm/manager.js": (_0x328e92, _0x454a12, _0x4e09b3) => {
      'use strict';

      _0x4e09b3.r(_0x454a12);
      _0x4e09b3.d(_0x454a12, {
        Manager: () => _0x6e391b
      });
      var _0x50b396 = _0x4e09b3("./node_modules/engine.io-client/build/esm/index.js");
      var _0x258e49 = _0x4e09b3("./node_modules/socket.io-client/build/esm/socket.js");
      var _0x3e4685 = _0x4e09b3("./node_modules/socket.io-parser/build/esm/index.js");
      var _0x22172b = _0x4e09b3("./node_modules/socket.io-client/build/esm/on.js");
      var _0x266dad = _0x4e09b3("./node_modules/socket.io-client/build/esm/contrib/backo2.js");
      var _0x4de0bf = _0x4e09b3("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
      class _0x6e391b extends _0x4de0bf.Emitter {
        constructor(_0x2cab66, _0x12f156) {
          super();
          this.nsps = {};
          this.subs = [];
          if (_0x2cab66 && typeof _0x2cab66 === "object") {
            _0x12f156 = _0x2cab66;
            _0x2cab66 = undefined;
          }
          _0x12f156 = _0x12f156 || {};
          _0x12f156.path = _0x12f156.path || "/socket.io";
          this.opts = _0x12f156;
          (0, _0x50b396.installTimerFunctions)(this, _0x12f156);
          this.reconnection(_0x12f156.reconnection !== false);
          this.reconnectionAttempts(_0x12f156.reconnectionAttempts || Infinity);
          this.reconnectionDelay(_0x12f156.reconnectionDelay || 1000);
          this.reconnectionDelayMax(_0x12f156.reconnectionDelayMax || 5000);
          this.randomizationFactor(_0x12f156.randomizationFactor ?? 0.5);
          this.backoff = new _0x266dad.Backoff({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
          });
          this.timeout(_0x12f156.timeout == null ? 20000 : _0x12f156.timeout);
          this._readyState = "closed";
          this.uri = _0x2cab66;
          const _0x27f49d = _0x12f156.parser || _0x3e4685;
          this.encoder = new _0x27f49d.Encoder();
          this.decoder = new _0x27f49d.Decoder();
          this._autoConnect = _0x12f156.autoConnect !== false;
          if (this._autoConnect) {
            this.open();
          }
        }
        reconnection(_0x2f38d0) {
          if (!arguments.length) {
            return this._reconnection;
          }
          this._reconnection = !!_0x2f38d0;
          if (!_0x2f38d0) {
            this.skipReconnect = true;
          }
          return this;
        }
        reconnectionAttempts(_0x341be6) {
          if (_0x341be6 === undefined) {
            return this._reconnectionAttempts;
          }
          this._reconnectionAttempts = _0x341be6;
          return this;
        }
        reconnectionDelay(_0x43832b) {
          var _0x29b4bf;
          if (_0x43832b === undefined) {
            return this._reconnectionDelay;
          }
          this._reconnectionDelay = _0x43832b;
          if ((_0x29b4bf = this.backoff) === null || _0x29b4bf === undefined) {
            undefined;
          } else {
            _0x29b4bf.setMin(_0x43832b);
          }
          return this;
        }
        randomizationFactor(_0x1a4f6a) {
          var _0x75cd70;
          if (_0x1a4f6a === undefined) {
            return this._randomizationFactor;
          }
          this._randomizationFactor = _0x1a4f6a;
          if ((_0x75cd70 = this.backoff) === null || _0x75cd70 === undefined) {
            undefined;
          } else {
            _0x75cd70.setJitter(_0x1a4f6a);
          }
          return this;
        }
        reconnectionDelayMax(_0x1a2ad8) {
          var _0x124231;
          if (_0x1a2ad8 === undefined) {
            return this._reconnectionDelayMax;
          }
          this._reconnectionDelayMax = _0x1a2ad8;
          if ((_0x124231 = this.backoff) === null || _0x124231 === undefined) {
            undefined;
          } else {
            _0x124231.setMax(_0x1a2ad8);
          }
          return this;
        }
        timeout(_0x1df4ee) {
          if (!arguments.length) {
            return this._timeout;
          }
          this._timeout = _0x1df4ee;
          return this;
        }
        maybeReconnectOnOpen() {
          if (!this._reconnecting && this._reconnection && this.backoff.attempts === 0) {
            this.reconnect();
          }
        }
        open(_0x171ffd) {
          if (~this._readyState.indexOf("open")) {
            return this;
          }
          this.engine = new _0x50b396.Socket(this.uri, this.opts);
          const _0x38681c = this.engine;
          const _0x1ce884 = this;
          this._readyState = "opening";
          this.skipReconnect = false;
          const _0x383b98 = (0, _0x22172b.on)(_0x38681c, "open", function () {
            _0x1ce884.onopen();
            if (_0x171ffd) {
              _0x171ffd();
            }
          });
          const _0xc6259f = _0x449fea => {
            this.cleanup();
            this._readyState = "closed";
            this.emitReserved("error", _0x449fea);
            if (_0x171ffd) {
              _0x171ffd(_0x449fea);
            } else {
              this.maybeReconnectOnOpen();
            }
          };
          const _0x11b645 = (0, _0x22172b.on)(_0x38681c, "error", _0xc6259f);
          if (this._timeout !== false) {
            const _0x3cbef4 = this._timeout;
            const _0x499f28 = this.setTimeoutFn(() => {
              _0x383b98();
              _0xc6259f(new Error("timeout"));
              _0x38681c.close();
            }, _0x3cbef4);
            if (this.opts.autoUnref) {
              _0x499f28.unref();
            }
            this.subs.push(() => {
              this.clearTimeoutFn(_0x499f28);
            });
          }
          this.subs.push(_0x383b98);
          this.subs.push(_0x11b645);
          return this;
        }
        connect(_0x13dea1) {
          return this.open(_0x13dea1);
        }
        onopen() {
          this.cleanup();
          this._readyState = "open";
          this.emitReserved("open");
          const _0x5dcc34 = this.engine;
          this.subs.push((0, _0x22172b.on)(_0x5dcc34, "ping", this.onping.bind(this)), (0, _0x22172b.on)(_0x5dcc34, "data", this.ondata.bind(this)), (0, _0x22172b.on)(_0x5dcc34, "error", this.onerror.bind(this)), (0, _0x22172b.on)(_0x5dcc34, "close", this.onclose.bind(this)), (0, _0x22172b.on)(this.decoder, "decoded", this.ondecoded.bind(this)));
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(_0x559f54) {
          try {
            this.decoder.add(_0x559f54);
          } catch (_0x3bbe11) {
            this.onclose("parse error", _0x3bbe11);
          }
        }
        ondecoded(_0x1d790a) {
          (0, _0x50b396.nextTick)(() => {
            this.emitReserved("packet", _0x1d790a);
          }, this.setTimeoutFn);
        }
        onerror(_0x1ed17a) {
          this.emitReserved("error", _0x1ed17a);
        }
        socket(_0x5e9fd1, _0x38cb05) {
          let _0x4b8931 = this.nsps[_0x5e9fd1];
          if (!_0x4b8931) {
            _0x4b8931 = new _0x258e49.Socket(this, _0x5e9fd1, _0x38cb05);
            this.nsps[_0x5e9fd1] = _0x4b8931;
          } else if (this._autoConnect && !_0x4b8931.active) {
            _0x4b8931.connect();
          }
          return _0x4b8931;
        }
        _destroy(_0x2f1dd2) {
          const _0x4a0ce0 = Object.keys(this.nsps);
          for (const _0x3e0c0b of _0x4a0ce0) {
            const _0x1588e6 = this.nsps[_0x3e0c0b];
            if (_0x1588e6.active) {
              return;
            }
          }
          this._close();
        }
        _packet(_0x31e059) {
          const _0x2bbf48 = this.encoder.encode(_0x31e059);
          for (let _0x2b3cc0 = 0; _0x2b3cc0 < _0x2bbf48.length; _0x2b3cc0++) {
            this.engine.write(_0x2bbf48[_0x2b3cc0], _0x31e059.options);
          }
        }
        cleanup() {
          this.subs.forEach(_0x1da35b => _0x1da35b());
          this.subs.length = 0;
          this.decoder.destroy();
        }
        _close() {
          this.skipReconnect = true;
          this._reconnecting = false;
          this.onclose("forced close");
        }
        disconnect() {
          return this._close();
        }
        onclose(_0x19b01c, _0x251bd3) {
          var _0x2acbc2;
          this.cleanup();
          if ((_0x2acbc2 = this.engine) === null || _0x2acbc2 === undefined) {
            undefined;
          } else {
            _0x2acbc2.close();
          }
          this.backoff.reset();
          this._readyState = "closed";
          this.emitReserved("close", _0x19b01c, _0x251bd3);
          if (this._reconnection && !this.skipReconnect) {
            this.reconnect();
          }
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) {
            return this;
          }
          const _0xc872e1 = this;
          if (this.backoff.attempts >= this._reconnectionAttempts) {
            this.backoff.reset();
            this.emitReserved("reconnect_failed");
            this._reconnecting = false;
          } else {
            const _0x4be6f2 = this.backoff.duration();
            this._reconnecting = true;
            const _0x3554a8 = this.setTimeoutFn(() => {
              if (_0xc872e1.skipReconnect) {
                return;
              }
              this.emitReserved("reconnect_attempt", _0xc872e1.backoff.attempts);
              if (_0xc872e1.skipReconnect) {
                return;
              }
              _0xc872e1.open(_0x1ce730 => {
                if (_0x1ce730) {
                  _0xc872e1._reconnecting = false;
                  _0xc872e1.reconnect();
                  this.emitReserved("reconnect_error", _0x1ce730);
                } else {
                  _0xc872e1.onreconnect();
                }
              });
            }, _0x4be6f2);
            if (this.opts.autoUnref) {
              _0x3554a8.unref();
            }
            this.subs.push(() => {
              this.clearTimeoutFn(_0x3554a8);
            });
          }
        }
        onreconnect() {
          const _0x435f65 = this.backoff.attempts;
          this._reconnecting = false;
          this.backoff.reset();
          this.emitReserved("reconnect", _0x435f65);
        }
      }
    },
    "./node_modules/socket.io-client/build/esm/on.js": (_0x5a1df4, _0x51a44e, _0x3311a1) => {
      'use strict';

      _0x3311a1.r(_0x51a44e);
      _0x3311a1.d(_0x51a44e, {
        on: () => _0x5172bd
      });
      function _0x5172bd(_0x1bba7e, _0x9dd179, _0x664313) {
        _0x1bba7e.on(_0x9dd179, _0x664313);
        return function _0x162fbb() {
          _0x1bba7e.off(_0x9dd179, _0x664313);
        };
      }
    },
    "./node_modules/socket.io-client/build/esm/socket.js": (_0x5a721d, _0x39b82a, _0x1c84c1) => {
      'use strict';

      _0x1c84c1.r(_0x39b82a);
      _0x1c84c1.d(_0x39b82a, {
        Socket: () => _0x2ea06f
      });
      var _0x4ddd8e = _0x1c84c1("./node_modules/socket.io-parser/build/esm/index.js");
      var _0x19f20f = _0x1c84c1("./node_modules/socket.io-client/build/esm/on.js");
      var _0x2c4460 = _0x1c84c1("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
      const _0x6b0ade = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1
      });
      class _0x2ea06f extends _0x2c4460.Emitter {
        constructor(_0x30e9cd, _0x3b86cb, _0x43f1a1) {
          super();
          this.connected = false;
          this.recovered = false;
          this.receiveBuffer = [];
          this.sendBuffer = [];
          this._queue = [];
          this._queueSeq = 0;
          this.ids = 0;
          this.acks = {};
          this.flags = {};
          this.io = _0x30e9cd;
          this.nsp = _0x3b86cb;
          if (_0x43f1a1 && _0x43f1a1.auth) {
            this.auth = _0x43f1a1.auth;
          }
          this._opts = Object.assign({}, _0x43f1a1);
          if (this.io._autoConnect) {
            this.open();
          }
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) {
            return;
          }
          const _0x456cf4 = this.io;
          this.subs = [(0, _0x19f20f.on)(_0x456cf4, "open", this.onopen.bind(this)), (0, _0x19f20f.on)(_0x456cf4, "packet", this.onpacket.bind(this)), (0, _0x19f20f.on)(_0x456cf4, "error", this.onerror.bind(this)), (0, _0x19f20f.on)(_0x456cf4, "close", this.onclose.bind(this))];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          if (this.connected) {
            return this;
          }
          this.subEvents();
          if (!this.io._reconnecting) {
            this.io.open();
          }
          if (this.io._readyState === "open") {
            this.onopen();
          }
          return this;
        }
        open() {
          return this.connect();
        }
        send(..._0x5903c4) {
          _0x5903c4.unshift("message");
          this.emit.apply(this, _0x5903c4);
          return this;
        }
        emit(_0x2090e4, ..._0x43fe3b) {
          var _0x149a6b;
          if (_0x6b0ade.hasOwnProperty(_0x2090e4)) {
            throw new Error("\"" + _0x2090e4.toString() + "\" is a reserved event name");
          }
          _0x43fe3b.unshift(_0x2090e4);
          if (this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) {
            this._addToQueue(_0x43fe3b);
            return this;
          }
          const _0x4d6d6a = {
            type: _0x4ddd8e.PacketType.EVENT,
            data: _0x43fe3b
          };
          _0x4d6d6a.options = {};
          _0x4d6d6a.options.compress = this.flags.compress !== false;
          if (typeof _0x43fe3b[_0x43fe3b.length - 1] === "function") {
            const _0x100da1 = this.ids++;
            const _0x49eeb6 = _0x43fe3b.pop();
            this._registerAckCallback(_0x100da1, _0x49eeb6);
            _0x4d6d6a.id = _0x100da1;
          }
          const _0xcf559d = this.io.engine?.transport?.writable;
          const _0x11ab16 = this.connected && !((_0x149a6b = this.io.engine) === null || _0x149a6b === undefined ? undefined : _0x149a6b._hasPingExpired());
          const _0x2a3dda = this.flags.volatile && !_0xcf559d;
          if (_0x2a3dda) {} else if (_0x11ab16) {
            this.notifyOutgoingListeners(_0x4d6d6a);
            this.packet(_0x4d6d6a);
          } else {
            this.sendBuffer.push(_0x4d6d6a);
          }
          this.flags = {};
          return this;
        }
        _registerAckCallback(_0x2e4fc4, _0x223c24) {
          const _0x3206c6 = this.flags.timeout ?? this._opts.ackTimeout;
          if (_0x3206c6 === undefined) {
            this.acks[_0x2e4fc4] = _0x223c24;
            return;
          }
          const _0x56ee17 = this.io.setTimeoutFn(() => {
            delete this.acks[_0x2e4fc4];
            for (let _0x27bbc1 = 0; _0x27bbc1 < this.sendBuffer.length; _0x27bbc1++) {
              if (this.sendBuffer[_0x27bbc1].id === _0x2e4fc4) {
                this.sendBuffer.splice(_0x27bbc1, 1);
              }
            }
            _0x223c24.call(this, new Error("operation has timed out"));
          }, _0x3206c6);
          const _0x5784f3 = (..._0x4415f2) => {
            this.io.clearTimeoutFn(_0x56ee17);
            _0x223c24.apply(this, _0x4415f2);
          };
          _0x5784f3.withError = true;
          this.acks[_0x2e4fc4] = _0x5784f3;
        }
        emitWithAck(_0x350a44, ..._0x2ad00b) {
          return new Promise((_0x3765b3, _0x12201c) => {
            const _0x498908 = (_0x435827, _0x1b5494) => {
              if (_0x435827) {
                return _0x12201c(_0x435827);
              } else {
                return _0x3765b3(_0x1b5494);
              }
            };
            _0x498908.withError = true;
            _0x2ad00b.push(_0x498908);
            this.emit(_0x350a44, ..._0x2ad00b);
          });
        }
        _addToQueue(_0x448e31) {
          let _0x4f1f03;
          if (typeof _0x448e31[_0x448e31.length - 1] === "function") {
            _0x4f1f03 = _0x448e31.pop();
          }
          const _0x1476ef = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: false,
            args: _0x448e31,
            flags: Object.assign({
              fromQueue: true
            }, this.flags)
          };
          _0x448e31.push((_0x2637b2, ..._0x32c640) => {
            if (_0x1476ef !== this._queue[0]) {
              return;
            }
            const _0x1e10f9 = _0x2637b2 !== null;
            if (_0x1e10f9) {
              if (_0x1476ef.tryCount > this._opts.retries) {
                this._queue.shift();
                if (_0x4f1f03) {
                  _0x4f1f03(_0x2637b2);
                }
              }
            } else {
              this._queue.shift();
              if (_0x4f1f03) {
                _0x4f1f03(null, ..._0x32c640);
              }
            }
            _0x1476ef.pending = false;
            return this._drainQueue();
          });
          this._queue.push(_0x1476ef);
          this._drainQueue();
        }
        _drainQueue(_0x18a492 = false) {
          if (!this.connected || this._queue.length === 0) {
            return;
          }
          const _0x318494 = this._queue[0];
          if (_0x318494.pending && !_0x18a492) {
            return;
          }
          _0x318494.pending = true;
          _0x318494.tryCount++;
          this.flags = _0x318494.flags;
          this.emit.apply(this, _0x318494.args);
        }
        packet(_0x16fe5d) {
          _0x16fe5d.nsp = this.nsp;
          this.io._packet(_0x16fe5d);
        }
        onopen() {
          if (typeof this.auth == "function") {
            this.auth(_0x12ecab => {
              this._sendConnectPacket(_0x12ecab);
            });
          } else {
            this._sendConnectPacket(this.auth);
          }
        }
        _sendConnectPacket(_0x2d01e5) {
          this.packet({
            type: _0x4ddd8e.PacketType.CONNECT,
            data: this._pid ? Object.assign({
              pid: this._pid,
              offset: this._lastOffset
            }, _0x2d01e5) : _0x2d01e5
          });
        }
        onerror(_0x250671) {
          if (!this.connected) {
            this.emitReserved("connect_error", _0x250671);
          }
        }
        onclose(_0x4bd9c7, _0x383c4a) {
          this.connected = false;
          delete this.id;
          this.emitReserved("disconnect", _0x4bd9c7, _0x383c4a);
          this._clearAcks();
        }
        _clearAcks() {
          Object.keys(this.acks).forEach(_0x1894d4 => {
            const _0x2ab329 = this.sendBuffer.some(_0x5858bc => String(_0x5858bc.id) === _0x1894d4);
            if (!_0x2ab329) {
              const _0x57fe69 = this.acks[_0x1894d4];
              delete this.acks[_0x1894d4];
              if (_0x57fe69.withError) {
                _0x57fe69.call(this, new Error("socket has been disconnected"));
              }
            }
          });
        }
        onpacket(_0x180113) {
          const _0x73fc24 = _0x180113.nsp === this.nsp;
          if (!_0x73fc24) {
            return;
          }
          switch (_0x180113.type) {
            case _0x4ddd8e.PacketType.CONNECT:
              if (_0x180113.data && _0x180113.data.sid) {
                this.onconnect(_0x180113.data.sid, _0x180113.data.pid);
              } else {
                this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
              }
              break;
            case _0x4ddd8e.PacketType.EVENT:
            case _0x4ddd8e.PacketType.BINARY_EVENT:
              this.onevent(_0x180113);
              break;
            case _0x4ddd8e.PacketType.ACK:
            case _0x4ddd8e.PacketType.BINARY_ACK:
              this.onack(_0x180113);
              break;
            case _0x4ddd8e.PacketType.DISCONNECT:
              this.ondisconnect();
              break;
            case _0x4ddd8e.PacketType.CONNECT_ERROR:
              this.destroy();
              const _0x5ab674 = new Error(_0x180113.data.message);
              _0x5ab674.data = _0x180113.data.data;
              this.emitReserved("connect_error", _0x5ab674);
              break;
          }
        }
        onevent(_0x4abf8d) {
          const _0x4208d3 = _0x4abf8d.data || [];
          if (_0x4abf8d.id != null) {
            _0x4208d3.push(this.ack(_0x4abf8d.id));
          }
          if (this.connected) {
            this.emitEvent(_0x4208d3);
          } else {
            this.receiveBuffer.push(Object.freeze(_0x4208d3));
          }
        }
        emitEvent(_0x4af53c) {
          if (this._anyListeners && this._anyListeners.length) {
            const _0x2ff547 = this._anyListeners.slice();
            for (const _0x507663 of _0x2ff547) {
              _0x507663.apply(this, _0x4af53c);
            }
          }
          super.emit.apply(this, _0x4af53c);
          if (this._pid && _0x4af53c.length && typeof _0x4af53c[_0x4af53c.length - 1] === "string") {
            this._lastOffset = _0x4af53c[_0x4af53c.length - 1];
          }
        }
        ack(_0x43bed7) {
          const _0x37589d = this;
          let _0x2f99f5 = false;
          return function (..._0x21e305) {
            if (_0x2f99f5) {
              return;
            }
            _0x2f99f5 = true;
            _0x37589d.packet({
              type: _0x4ddd8e.PacketType.ACK,
              id: _0x43bed7,
              data: _0x21e305
            });
          };
        }
        onack(_0x81c91d) {
          const _0x245182 = this.acks[_0x81c91d.id];
          if (typeof _0x245182 !== "function") {
            return;
          }
          delete this.acks[_0x81c91d.id];
          if (_0x245182.withError) {
            _0x81c91d.data.unshift(null);
          }
          _0x245182.apply(this, _0x81c91d.data);
        }
        onconnect(_0x4a941c, _0x69a779) {
          this.id = _0x4a941c;
          this.recovered = _0x69a779 && this._pid === _0x69a779;
          this._pid = _0x69a779;
          this.connected = true;
          this.emitBuffered();
          this.emitReserved("connect");
          this._drainQueue(true);
        }
        emitBuffered() {
          this.receiveBuffer.forEach(_0xa3feb6 => this.emitEvent(_0xa3feb6));
          this.receiveBuffer = [];
          this.sendBuffer.forEach(_0x3d92e6 => {
            this.notifyOutgoingListeners(_0x3d92e6);
            this.packet(_0x3d92e6);
          });
          this.sendBuffer = [];
        }
        ondisconnect() {
          this.destroy();
          this.onclose("io server disconnect");
        }
        destroy() {
          if (this.subs) {
            this.subs.forEach(_0x2d33a9 => _0x2d33a9());
            this.subs = undefined;
          }
          this.io._destroy(this);
        }
        disconnect() {
          if (this.connected) {
            this.packet({
              type: _0x4ddd8e.PacketType.DISCONNECT
            });
          }
          this.destroy();
          if (this.connected) {
            this.onclose("io client disconnect");
          }
          return this;
        }
        close() {
          return this.disconnect();
        }
        compress(_0x580a27) {
          this.flags.compress = _0x580a27;
          return this;
        }
        get volatile() {
          this.flags.volatile = true;
          return this;
        }
        timeout(_0x28341b) {
          this.flags.timeout = _0x28341b;
          return this;
        }
        onAny(_0xbf19bc) {
          this._anyListeners = this._anyListeners || [];
          this._anyListeners.push(_0xbf19bc);
          return this;
        }
        prependAny(_0x2dd157) {
          this._anyListeners = this._anyListeners || [];
          this._anyListeners.unshift(_0x2dd157);
          return this;
        }
        offAny(_0x247832) {
          if (!this._anyListeners) {
            return this;
          }
          if (_0x247832) {
            const _0x4a2917 = this._anyListeners;
            for (let _0x1d960a = 0; _0x1d960a < _0x4a2917.length; _0x1d960a++) {
              if (_0x247832 === _0x4a2917[_0x1d960a]) {
                _0x4a2917.splice(_0x1d960a, 1);
                return this;
              }
            }
          } else {
            this._anyListeners = [];
          }
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(_0x3aebdb) {
          this._anyOutgoingListeners = this._anyOutgoingListeners || [];
          this._anyOutgoingListeners.push(_0x3aebdb);
          return this;
        }
        prependAnyOutgoing(_0x47703c) {
          this._anyOutgoingListeners = this._anyOutgoingListeners || [];
          this._anyOutgoingListeners.unshift(_0x47703c);
          return this;
        }
        offAnyOutgoing(_0x221ddf) {
          if (!this._anyOutgoingListeners) {
            return this;
          }
          if (_0x221ddf) {
            const _0x48f142 = this._anyOutgoingListeners;
            for (let _0x4bb9b0 = 0; _0x4bb9b0 < _0x48f142.length; _0x4bb9b0++) {
              if (_0x221ddf === _0x48f142[_0x4bb9b0]) {
                _0x48f142.splice(_0x4bb9b0, 1);
                return this;
              }
            }
          } else {
            this._anyOutgoingListeners = [];
          }
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(_0x33e10d) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const _0x515184 = this._anyOutgoingListeners.slice();
            for (const _0x5ee93a of _0x515184) {
              _0x5ee93a.apply(this, _0x33e10d.data);
            }
          }
        }
      }
    },
    "./node_modules/socket.io-client/build/esm/url.js": (_0x367f59, _0x22ec23, _0x71e2dc) => {
      'use strict';

      _0x71e2dc.r(_0x22ec23);
      _0x71e2dc.d(_0x22ec23, {
        url: () => _0x10c2a3
      });
      var _0x35ad71 = _0x71e2dc("./node_modules/engine.io-client/build/esm/index.js");
      function _0x10c2a3(_0xd61cac, _0x155b9b = "", _0x902e3e) {
        let _0x44d550 = _0xd61cac;
        _0x902e3e = _0x902e3e || typeof location !== "undefined" && location;
        if (_0xd61cac == null) {
          _0xd61cac = _0x902e3e.protocol + "//" + _0x902e3e.host;
        }
        if (typeof _0xd61cac === "string") {
          if (_0xd61cac.charAt(0) === "/") {
            if (_0xd61cac.charAt(1) === "/") {
              _0xd61cac = _0x902e3e.protocol + _0xd61cac;
            } else {
              _0xd61cac = _0x902e3e.host + _0xd61cac;
            }
          }
          if (!/^(https?|wss?):\/\//.test(_0xd61cac)) {
            if (typeof _0x902e3e !== "undefined") {
              _0xd61cac = _0x902e3e.protocol + "//" + _0xd61cac;
            } else {
              _0xd61cac = "https://" + _0xd61cac;
            }
          }
          _0x44d550 = (0, _0x35ad71.parse)(_0xd61cac);
        }
        if (!_0x44d550.port) {
          if (/^(http|ws)$/.test(_0x44d550.protocol)) {
            _0x44d550.port = "80";
          } else if (/^(http|ws)s$/.test(_0x44d550.protocol)) {
            _0x44d550.port = "443";
          }
        }
        _0x44d550.path = _0x44d550.path || "/";
        const _0x5c6e98 = _0x44d550.host.indexOf(":") !== -1;
        const _0x2aa578 = _0x5c6e98 ? "[" + _0x44d550.host + "]" : _0x44d550.host;
        _0x44d550.id = _0x44d550.protocol + "://" + _0x2aa578 + ":" + _0x44d550.port + _0x155b9b;
        _0x44d550.href = _0x44d550.protocol + "://" + _0x2aa578 + (_0x902e3e && _0x902e3e.port === _0x44d550.port ? "" : ":" + _0x44d550.port);
        return _0x44d550;
      }
    },
    "./node_modules/socket.io-parser/build/esm/binary.js": (_0x1955cc, _0xfe4b28, _0x435a62) => {
      'use strict';

      _0x435a62.r(_0xfe4b28);
      _0x435a62.d(_0xfe4b28, {
        deconstructPacket: () => _0xb981c9,
        reconstructPacket: () => _0x1b3fc7
      });
      var _0x2e07c2 = _0x435a62("./node_modules/socket.io-parser/build/esm/is-binary.js");
      function _0xb981c9(_0x45049e) {
        const _0x57e6a3 = [];
        const _0x4ed5ef = _0x45049e.data;
        const _0x56fa84 = _0x45049e;
        _0x56fa84.data = _0x148a34(_0x4ed5ef, _0x57e6a3);
        _0x56fa84.attachments = _0x57e6a3.length;
        return {
          packet: _0x56fa84,
          buffers: _0x57e6a3
        };
      }
      function _0x148a34(_0x44a15f, _0x4b2239) {
        if (!_0x44a15f) {
          return _0x44a15f;
        }
        if ((0, _0x2e07c2.isBinary)(_0x44a15f)) {
          const _0x2fdc11 = {
            _placeholder: true,
            num: _0x4b2239.length
          };
          _0x4b2239.push(_0x44a15f);
          return _0x2fdc11;
        } else if (Array.isArray(_0x44a15f)) {
          const _0x40113c = new Array(_0x44a15f.length);
          for (let _0x4c1a98 = 0; _0x4c1a98 < _0x44a15f.length; _0x4c1a98++) {
            _0x40113c[_0x4c1a98] = _0x148a34(_0x44a15f[_0x4c1a98], _0x4b2239);
          }
          return _0x40113c;
        } else if (typeof _0x44a15f === "object" && !(_0x44a15f instanceof Date)) {
          const _0x367e67 = {};
          for (const _0x3c2953 in _0x44a15f) {
            if (Object.prototype.hasOwnProperty.call(_0x44a15f, _0x3c2953)) {
              _0x367e67[_0x3c2953] = _0x148a34(_0x44a15f[_0x3c2953], _0x4b2239);
            }
          }
          return _0x367e67;
        }
        return _0x44a15f;
      }
      function _0x1b3fc7(_0xeec24d, _0x5b282d) {
        _0xeec24d.data = _0x1b391b(_0xeec24d.data, _0x5b282d);
        delete _0xeec24d.attachments;
        return _0xeec24d;
      }
      function _0x1b391b(_0x32535e, _0x409055) {
        if (!_0x32535e) {
          return _0x32535e;
        }
        if (_0x32535e && _0x32535e._placeholder === true) {
          const _0x1e4661 = typeof _0x32535e.num === "number" && _0x32535e.num >= 0 && _0x32535e.num < _0x409055.length;
          if (_0x1e4661) {
            return _0x409055[_0x32535e.num];
          } else {
            throw new Error("illegal attachments");
          }
        } else if (Array.isArray(_0x32535e)) {
          for (let _0x217fd3 = 0; _0x217fd3 < _0x32535e.length; _0x217fd3++) {
            _0x32535e[_0x217fd3] = _0x1b391b(_0x32535e[_0x217fd3], _0x409055);
          }
        } else if (typeof _0x32535e === "object") {
          for (const _0x5783da in _0x32535e) {
            if (Object.prototype.hasOwnProperty.call(_0x32535e, _0x5783da)) {
              _0x32535e[_0x5783da] = _0x1b391b(_0x32535e[_0x5783da], _0x409055);
            }
          }
        }
        return _0x32535e;
      }
    },
    "./node_modules/socket.io-parser/build/esm/index.js": (_0x9a7f52, _0x308e2b, _0x4c66f1) => {
      'use strict';

      _0x4c66f1.r(_0x308e2b);
      _0x4c66f1.d(_0x308e2b, {
        Decoder: () => _0x4ffa7a,
        Encoder: () => _0x4620f3,
        PacketType: () => _0x434d88,
        protocol: () => _0x5312c7
      });
      var _0xba164c = _0x4c66f1("./node_modules/@socket.io/component-emitter/lib/esm/index.js");
      var _0x39242d = _0x4c66f1("./node_modules/socket.io-parser/build/esm/binary.js");
      var _0xcad969 = _0x4c66f1("./node_modules/socket.io-parser/build/esm/is-binary.js");
      const _0x4b074c = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
      const _0x5312c7 = 5;
      var _0x434d88;
      (function (_0x538a16) {
        _0x538a16[_0x538a16.CONNECT = 0] = "CONNECT";
        _0x538a16[_0x538a16.DISCONNECT = 1] = "DISCONNECT";
        _0x538a16[_0x538a16.EVENT = 2] = "EVENT";
        _0x538a16[_0x538a16.ACK = 3] = "ACK";
        _0x538a16[_0x538a16.CONNECT_ERROR = 4] = "CONNECT_ERROR";
        _0x538a16[_0x538a16.BINARY_EVENT = 5] = "BINARY_EVENT";
        _0x538a16[_0x538a16.BINARY_ACK = 6] = "BINARY_ACK";
      })(_0x434d88 ||= {});
      class _0x4620f3 {
        constructor(_0x322aa5) {
          this.replacer = _0x322aa5;
        }
        encode(_0xa0ac17) {
          if (_0xa0ac17.type === _0x434d88.EVENT || _0xa0ac17.type === _0x434d88.ACK) {
            if ((0, _0xcad969.hasBinary)(_0xa0ac17)) {
              return this.encodeAsBinary({
                type: _0xa0ac17.type === _0x434d88.EVENT ? _0x434d88.BINARY_EVENT : _0x434d88.BINARY_ACK,
                nsp: _0xa0ac17.nsp,
                data: _0xa0ac17.data,
                id: _0xa0ac17.id
              });
            }
          }
          return [this.encodeAsString(_0xa0ac17)];
        }
        encodeAsString(_0x349772) {
          let _0x18c3ab = "" + _0x349772.type;
          if (_0x349772.type === _0x434d88.BINARY_EVENT || _0x349772.type === _0x434d88.BINARY_ACK) {
            _0x18c3ab += _0x349772.attachments + "-";
          }
          if (_0x349772.nsp && _0x349772.nsp !== "/") {
            _0x18c3ab += _0x349772.nsp + ",";
          }
          if (_0x349772.id != null) {
            _0x18c3ab += _0x349772.id;
          }
          if (_0x349772.data != null) {
            _0x18c3ab += JSON.stringify(_0x349772.data, this.replacer);
          }
          return _0x18c3ab;
        }
        encodeAsBinary(_0x55fa73) {
          const _0x5cdead = (0, _0x39242d.deconstructPacket)(_0x55fa73);
          const _0x3e8bd9 = this.encodeAsString(_0x5cdead.packet);
          const _0x1b1d74 = _0x5cdead.buffers;
          _0x1b1d74.unshift(_0x3e8bd9);
          return _0x1b1d74;
        }
      }
      function _0x5d72ad(_0x3f17fe) {
        return Object.prototype.toString.call(_0x3f17fe) === "[object Object]";
      }
      class _0x4ffa7a extends _0xba164c.Emitter {
        constructor(_0x3096f2) {
          super();
          this.reviver = _0x3096f2;
        }
        add(_0x353cb5) {
          let _0x41ec40;
          if (typeof _0x353cb5 === "string") {
            if (this.reconstructor) {
              throw new Error("got plaintext data when reconstructing a packet");
            }
            _0x41ec40 = this.decodeString(_0x353cb5);
            const _0x25939d = _0x41ec40.type === _0x434d88.BINARY_EVENT;
            if (_0x25939d || _0x41ec40.type === _0x434d88.BINARY_ACK) {
              _0x41ec40.type = _0x25939d ? _0x434d88.EVENT : _0x434d88.ACK;
              this.reconstructor = new _0x2ad230(_0x41ec40);
              if (_0x41ec40.attachments === 0) {
                super.emitReserved("decoded", _0x41ec40);
              }
            } else {
              super.emitReserved("decoded", _0x41ec40);
            }
          } else if ((0, _0xcad969.isBinary)(_0x353cb5) || _0x353cb5.base64) {
            if (!this.reconstructor) {
              throw new Error("got binary data when not reconstructing a packet");
            } else {
              _0x41ec40 = this.reconstructor.takeBinaryData(_0x353cb5);
              if (_0x41ec40) {
                this.reconstructor = null;
                super.emitReserved("decoded", _0x41ec40);
              }
            }
          } else {
            throw new Error("Unknown type: " + _0x353cb5);
          }
        }
        decodeString(_0x1a8a91) {
          let _0x54bdf8 = 0;
          const _0x4b0a7d = {
            type: Number(_0x1a8a91.charAt(0))
          };
          if (_0x434d88[_0x4b0a7d.type] === undefined) {
            throw new Error("unknown packet type " + _0x4b0a7d.type);
          }
          if (_0x4b0a7d.type === _0x434d88.BINARY_EVENT || _0x4b0a7d.type === _0x434d88.BINARY_ACK) {
            const _0x29d81d = _0x54bdf8 + 1;
            while (_0x1a8a91.charAt(++_0x54bdf8) !== "-" && _0x54bdf8 != _0x1a8a91.length) {}
            const _0x32f78c = _0x1a8a91.substring(_0x29d81d, _0x54bdf8);
            if (_0x32f78c != Number(_0x32f78c) || _0x1a8a91.charAt(_0x54bdf8) !== "-") {
              throw new Error("Illegal attachments");
            }
            _0x4b0a7d.attachments = Number(_0x32f78c);
          }
          if (_0x1a8a91.charAt(_0x54bdf8 + 1) === "/") {
            const _0x248562 = _0x54bdf8 + 1;
            while (++_0x54bdf8) {
              const _0x4bcd0b = _0x1a8a91.charAt(_0x54bdf8);
              if (_0x4bcd0b === ",") {
                break;
              }
              if (_0x54bdf8 === _0x1a8a91.length) {
                break;
              }
            }
            _0x4b0a7d.nsp = _0x1a8a91.substring(_0x248562, _0x54bdf8);
          } else {
            _0x4b0a7d.nsp = "/";
          }
          const _0x1eec70 = _0x1a8a91.charAt(_0x54bdf8 + 1);
          if (_0x1eec70 !== "" && Number(_0x1eec70) == _0x1eec70) {
            const _0x49fc55 = _0x54bdf8 + 1;
            while (++_0x54bdf8) {
              const _0x21b500 = _0x1a8a91.charAt(_0x54bdf8);
              if (_0x21b500 == null || Number(_0x21b500) != _0x21b500) {
                --_0x54bdf8;
                break;
              }
              if (_0x54bdf8 === _0x1a8a91.length) {
                break;
              }
            }
            _0x4b0a7d.id = Number(_0x1a8a91.substring(_0x49fc55, _0x54bdf8 + 1));
          }
          if (_0x1a8a91.charAt(++_0x54bdf8)) {
            const _0x5ef91f = this.tryParse(_0x1a8a91.substr(_0x54bdf8));
            if (_0x4ffa7a.isPayloadValid(_0x4b0a7d.type, _0x5ef91f)) {
              _0x4b0a7d.data = _0x5ef91f;
            } else {
              throw new Error("invalid payload");
            }
          }
          return _0x4b0a7d;
        }
        tryParse(_0x2adc34) {
          try {
            return JSON.parse(_0x2adc34, this.reviver);
          } catch (_0x310e1c) {
            return false;
          }
        }
        static isPayloadValid(_0x1ecadd, _0x115e53) {
          switch (_0x1ecadd) {
            case _0x434d88.CONNECT:
              return _0x5d72ad(_0x115e53);
            case _0x434d88.DISCONNECT:
              return _0x115e53 === undefined;
            case _0x434d88.CONNECT_ERROR:
              return typeof _0x115e53 === "string" || _0x5d72ad(_0x115e53);
            case _0x434d88.EVENT:
            case _0x434d88.BINARY_EVENT:
              return Array.isArray(_0x115e53) && (typeof _0x115e53[0] === "number" || typeof _0x115e53[0] === "string" && _0x4b074c.indexOf(_0x115e53[0]) === -1);
            case _0x434d88.ACK:
            case _0x434d88.BINARY_ACK:
              return Array.isArray(_0x115e53);
          }
        }
        destroy() {
          if (this.reconstructor) {
            this.reconstructor.finishedReconstruction();
            this.reconstructor = null;
          }
        }
      }
      class _0x2ad230 {
        constructor(_0x3a9f1e) {
          this.packet = _0x3a9f1e;
          this.buffers = [];
          this.reconPack = _0x3a9f1e;
        }
        takeBinaryData(_0x597fc8) {
          this.buffers.push(_0x597fc8);
          if (this.buffers.length === this.reconPack.attachments) {
            const _0x564d9b = (0, _0x39242d.reconstructPacket)(this.reconPack, this.buffers);
            this.finishedReconstruction();
            return _0x564d9b;
          }
          return null;
        }
        finishedReconstruction() {
          this.reconPack = null;
          this.buffers = [];
        }
      }
    },
    "./node_modules/socket.io-parser/build/esm/is-binary.js": (_0x3673e0, _0x5b6a90, _0x4cc3e6) => {
      'use strict';

      _0x4cc3e6.r(_0x5b6a90);
      _0x4cc3e6.d(_0x5b6a90, {
        hasBinary: () => _0x2de497,
        isBinary: () => _0x437bd5
      });
      const _0x55afbc = typeof ArrayBuffer === "function";
      const _0x8fcfe4 = _0x32d2d8 => {
        if (typeof ArrayBuffer.isView === "function") {
          return ArrayBuffer.isView(_0x32d2d8);
        } else {
          return _0x32d2d8.buffer instanceof ArrayBuffer;
        }
      };
      const _0x1d00bd = Object.prototype.toString;
      const _0x15c08e = typeof Blob === "function" || typeof Blob !== "undefined" && _0x1d00bd.call(Blob) === "[object BlobConstructor]";
      const _0x5ddad4 = typeof File === "function" || typeof File !== "undefined" && _0x1d00bd.call(File) === "[object FileConstructor]";
      function _0x437bd5(_0x100df9) {
        return _0x55afbc && (_0x100df9 instanceof ArrayBuffer || _0x8fcfe4(_0x100df9)) || _0x15c08e && _0x100df9 instanceof Blob || _0x5ddad4 && _0x100df9 instanceof File;
      }
      function _0x2de497(_0x4c90aa, _0x949b42) {
        if (!_0x4c90aa || typeof _0x4c90aa !== "object") {
          return false;
        }
        if (Array.isArray(_0x4c90aa)) {
          for (let _0x180de7 = 0, _0x17711d = _0x4c90aa.length; _0x180de7 < _0x17711d; _0x180de7++) {
            if (_0x2de497(_0x4c90aa[_0x180de7])) {
              return true;
            }
          }
          return false;
        }
        if (_0x437bd5(_0x4c90aa)) {
          return true;
        }
        if (_0x4c90aa.toJSON && typeof _0x4c90aa.toJSON === "function" && arguments.length === 1) {
          return _0x2de497(_0x4c90aa.toJSON(), true);
        }
        for (const _0x4187da in _0x4c90aa) {
          if (Object.prototype.hasOwnProperty.call(_0x4c90aa, _0x4187da) && _0x2de497(_0x4c90aa[_0x4187da])) {
            return true;
          }
        }
        return false;
      }
    },
    "./src/temp.js": (_0x11bfa2, _0x789551, _0x49ea60) => {
      'use strict';

      _0x49ea60.r(_0x789551);
      var _0x5213e9 = _0x49ea60("./node_modules/howler/dist/howler.js");
      var _0x569d3b = _0x49ea60.n(_0x5213e9);
      var _0x32df20 = _0x49ea60("./node_modules/socket.io-client/build/esm/index.js");
      _0x11bfa2 = _0x49ea60.hmd(_0x11bfa2);
      function _0x3391a3(_0x34a911, _0x413726) {
        if (!(_0x34a911 instanceof _0x413726)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _0x56128a(_0x4f5737, _0x97e917) {
        for (var _0x7ed16a = 0; _0x7ed16a < _0x97e917.length; _0x7ed16a++) {
          var _0x543ff5 = _0x97e917[_0x7ed16a];
          _0x543ff5.enumerable = _0x543ff5.enumerable || false;
          _0x543ff5.configurable = true;
          if ("value" in _0x543ff5) {
            _0x543ff5.writable = true;
          }
          Object.defineProperty(_0x4f5737, _0x41f1d3(_0x543ff5.key), _0x543ff5);
        }
      }
      function _0x3ef9b1(_0x25b4c7, _0x57f354, _0x52b1bf) {
        if (_0x57f354) {
          _0x56128a(_0x25b4c7.prototype, _0x57f354);
        }
        if (_0x52b1bf) {
          _0x56128a(_0x25b4c7, _0x52b1bf);
        }
        Object.defineProperty(_0x25b4c7, "prototype", {
          writable: false
        });
        return _0x25b4c7;
      }
      function _0x449262(_0x5d7dfc) {
        return _0x3b7e45(_0x5d7dfc) || _0x33e018(_0x5d7dfc) || _0xfd2cdc(_0x5d7dfc) || _0x38316c();
      }
      function _0x38316c() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _0x33e018(_0x55f547) {
        if (typeof Symbol != "undefined" && _0x55f547[Symbol.iterator] != null || _0x55f547["@@iterator"] != null) {
          return Array.from(_0x55f547);
        }
      }
      function _0x3b7e45(_0x3b769b) {
        if (Array.isArray(_0x3b769b)) {
          return _0x4f6d45(_0x3b769b);
        }
      }
      function _0x4a2e4b(_0x4a54d9, _0x432762) {
        var _0x4c511b = typeof Symbol != "undefined" && _0x4a54d9[Symbol.iterator] || _0x4a54d9["@@iterator"];
        if (!_0x4c511b) {
          if (Array.isArray(_0x4a54d9) || (_0x4c511b = _0xfd2cdc(_0x4a54d9)) || _0x432762 && _0x4a54d9 && typeof _0x4a54d9.length == "number") {
            if (_0x4c511b) {
              _0x4a54d9 = _0x4c511b;
            }
            var _0x32ffcb = 0;
            var _0x410208 = function _0x97d140() {};
            return {
              s: _0x410208,
              n: function (_0x172d2c) {
                function _0x5cebf7() {
                  return _0x172d2c.apply(this, arguments);
                }
                _0x5cebf7.toString = function () {
                  return _0x172d2c.toString();
                };
                return _0x5cebf7;
              }(function () {
                if (_0x32ffcb >= _0x4a54d9.length) {
                  return {
                    done: true
                  };
                } else {
                  return {
                    done: false,
                    value: _0x4a54d9[_0x32ffcb++]
                  };
                }
              }),
              e: function _0x37979e(_0x45cfbd) {
                throw _0x45cfbd;
              },
              f: _0x410208
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var _0x59629c;
        var _0x303d9f = true;
        var _0x372077 = false;
        return {
          s: function _0x2d0231() {
            _0x4c511b = _0x4c511b.call(_0x4a54d9);
          },
          n: function _0x45608f() {
            var _0x41369f = _0x4c511b.next();
            _0x303d9f = _0x41369f.done;
            return _0x41369f;
          },
          e: function _0x70015e(_0x16066f) {
            _0x372077 = true;
            _0x59629c = _0x16066f;
          },
          f: function _0x5d324e() {
            try {
              if (!_0x303d9f && _0x4c511b.return != null) {
                _0x4c511b.return();
              }
            } finally {
              if (_0x372077) {
                throw _0x59629c;
              }
            }
          }
        };
      }
      function _0xfd2cdc(_0x56b344, _0x445eb5) {
        if (_0x56b344) {
          if (typeof _0x56b344 == "string") {
            return _0x4f6d45(_0x56b344, _0x445eb5);
          }
          var _0x1acbbe = {}.toString.call(_0x56b344).slice(8, -1);
          if (_0x1acbbe === "Object" && _0x56b344.constructor) {
            _0x1acbbe = _0x56b344.constructor.name;
          }
          if (_0x1acbbe === "Map" || _0x1acbbe === "Set") {
            return Array.from(_0x56b344);
          } else if (_0x1acbbe === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x1acbbe)) {
            return _0x4f6d45(_0x56b344, _0x445eb5);
          } else {
            return undefined;
          }
        }
      }
      function _0x4f6d45(_0x24ba37, _0x55a925) {
        if (_0x55a925 == null || _0x55a925 > _0x24ba37.length) {
          _0x55a925 = _0x24ba37.length;
        }
        for (var _0x5d9855 = 0, _0x447a5f = Array(_0x55a925); _0x5d9855 < _0x55a925; _0x5d9855++) {
          _0x447a5f[_0x5d9855] = _0x24ba37[_0x5d9855];
        }
        return _0x447a5f;
      }
      function _0x4a76ac(_0x502224, _0x4be223) {
        var _0x5106c3 = Object.keys(_0x502224);
        if (Object.getOwnPropertySymbols) {
          var _0x208af6 = Object.getOwnPropertySymbols(_0x502224);
          if (_0x4be223) {
            _0x208af6 = _0x208af6.filter(function (_0x2a3ae5) {
              return Object.getOwnPropertyDescriptor(_0x502224, _0x2a3ae5).enumerable;
            });
          }
          _0x5106c3.push.apply(_0x5106c3, _0x208af6);
        }
        return _0x5106c3;
      }
      function _0x4e5fcd(_0x1dfee6) {
        for (var _0x391134 = 1; _0x391134 < arguments.length; _0x391134++) {
          var _0x454cba = arguments[_0x391134] ?? {};
          if (_0x391134 % 2) {
            _0x4a76ac(Object(_0x454cba), true).forEach(function (_0x204a19) {
              _0x4ddaaa(_0x1dfee6, _0x204a19, _0x454cba[_0x204a19]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(_0x1dfee6, Object.getOwnPropertyDescriptors(_0x454cba));
          } else {
            _0x4a76ac(Object(_0x454cba)).forEach(function (_0x761711) {
              Object.defineProperty(_0x1dfee6, _0x761711, Object.getOwnPropertyDescriptor(_0x454cba, _0x761711));
            });
          }
        }
        return _0x1dfee6;
      }
      function _0x4ddaaa(_0x498704, _0x2913da, _0x2588a2) {
        if ((_0x2913da = _0x41f1d3(_0x2913da)) in _0x498704) {
          Object.defineProperty(_0x498704, _0x2913da, {
            value: _0x2588a2,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          _0x498704[_0x2913da] = _0x2588a2;
        }
        return _0x498704;
      }
      function _0x41f1d3(_0x4c4849) {
        var _0x527be8 = _0x3869ae(_0x4c4849, "string");
        if (_0x5eb71e(_0x527be8) == "symbol") {
          return _0x527be8;
        } else {
          return _0x527be8 + "";
        }
      }
      function _0x3869ae(_0x10d36b, _0x208528) {
        if (_0x5eb71e(_0x10d36b) != "object" || !_0x10d36b) {
          return _0x10d36b;
        }
        var _0x5be54d = _0x10d36b[Symbol.toPrimitive];
        if (_0x5be54d !== undefined) {
          var _0x1f23a8 = _0x5be54d.call(_0x10d36b, _0x208528 || "default");
          if (_0x5eb71e(_0x1f23a8) != "object") {
            return _0x1f23a8;
          }
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (_0x208528 === "string" ? String : Number)(_0x10d36b);
      }
      function _0x1e8476() {
        'use strict';

        _0x1e8476 = function _0x42fa31() {
          return _0x500a06;
        };
        var _0x29ee9e;
        var _0x500a06 = {};
        var _0x53731e = Object.prototype;
        var _0x145fa9 = _0x53731e.hasOwnProperty;
        var _0x2cefa0 = Object.defineProperty || function (_0x87b8c0, _0xc73b22, _0xa4cc3b) {
          _0x87b8c0[_0xc73b22] = _0xa4cc3b.value;
        };
        var _0x309b32 = typeof Symbol == "function" ? Symbol : {};
        var _0x445f0f = _0x309b32.iterator || "@@iterator";
        var _0x290512 = _0x309b32.asyncIterator || "@@asyncIterator";
        var _0x8159f8 = _0x309b32.toStringTag || "@@toStringTag";
        function _0x317d41(_0x551381, _0x13c788, _0x326d19) {
          Object.defineProperty(_0x551381, _0x13c788, {
            value: _0x326d19,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return _0x551381[_0x13c788];
        }
        try {
          _0x317d41({}, "");
        } catch (_0x94ace5) {
          _0x317d41 = function _0x5b852e(_0x5a5811, _0x44fae2, _0x4f34a7) {
            return _0x5a5811[_0x44fae2] = _0x4f34a7;
          };
        }
        function _0x12fd4a(_0x1b469f, _0x26d11d, _0x4c22d, _0x29190c) {
          var _0x12da98 = _0x26d11d && _0x26d11d.prototype instanceof _0x27aaed ? _0x26d11d : _0x27aaed;
          var _0x52809f = Object.create(_0x12da98.prototype);
          var _0x4b2aaa = new _0x3642b9(_0x29190c || []);
          _0x2cefa0(_0x52809f, "_invoke", {
            value: _0x325083(_0x1b469f, _0x4c22d, _0x4b2aaa)
          });
          return _0x52809f;
        }
        function _0x35ad76(_0x5f2ef9, _0x289528, _0xe36275) {
          try {
            return {
              type: "normal",
              arg: _0x5f2ef9.call(_0x289528, _0xe36275)
            };
          } catch (_0x378997) {
            return {
              type: "throw",
              arg: _0x378997
            };
          }
        }
        _0x500a06.wrap = _0x12fd4a;
        var _0x4d4655 = "suspendedStart";
        var _0xeeea5 = "suspendedYield";
        var _0x3a427f = "executing";
        var _0x1944d4 = "completed";
        var _0x585643 = {};
        function _0x27aaed() {}
        function _0x2aa393() {}
        function _0x4ad116() {}
        var _0x4d76e9 = {};
        _0x317d41(_0x4d76e9, _0x445f0f, function () {
          return this;
        });
        var _0x5c390b = Object.getPrototypeOf;
        var _0x5d68ec = _0x5c390b && _0x5c390b(_0x5c390b(_0x101c62([])));
        if (_0x5d68ec && _0x5d68ec !== _0x53731e && _0x145fa9.call(_0x5d68ec, _0x445f0f)) {
          _0x4d76e9 = _0x5d68ec;
        }
        var _0x2a2e7f = _0x4ad116.prototype = _0x27aaed.prototype = Object.create(_0x4d76e9);
        function _0x57518e(_0x162439) {
          ["next", "throw", "return"].forEach(function (_0x402a6a) {
            _0x317d41(_0x162439, _0x402a6a, function (_0x4cbdcc) {
              return this._invoke(_0x402a6a, _0x4cbdcc);
            });
          });
        }
        function _0x7d47c0(_0x271d27, _0x4f1eb6) {
          function _0xeadbe(_0x3bf7dc, _0xbfb6c8, _0x33a3f7, _0x1cd76d) {
            var _0x2e3950 = _0x35ad76(_0x271d27[_0x3bf7dc], _0x271d27, _0xbfb6c8);
            if (_0x2e3950.type !== "throw") {
              var _0x1fc55e = _0x2e3950.arg;
              var _0x21e448 = _0x1fc55e.value;
              if (_0x21e448 && _0x5eb71e(_0x21e448) == "object" && _0x145fa9.call(_0x21e448, "__await")) {
                return _0x4f1eb6.resolve(_0x21e448.__await).then(function (_0x52dd78) {
                  _0xeadbe("next", _0x52dd78, _0x33a3f7, _0x1cd76d);
                }, function (_0x16dacb) {
                  _0xeadbe("throw", _0x16dacb, _0x33a3f7, _0x1cd76d);
                });
              } else {
                return _0x4f1eb6.resolve(_0x21e448).then(function (_0x35f01a) {
                  _0x1fc55e.value = _0x35f01a;
                  _0x33a3f7(_0x1fc55e);
                }, function (_0x3a4c17) {
                  return _0xeadbe("throw", _0x3a4c17, _0x33a3f7, _0x1cd76d);
                });
              }
            }
            _0x1cd76d(_0x2e3950.arg);
          }
          var _0x28f841;
          _0x2cefa0(this, "_invoke", {
            value: function _0x2082d7(_0x55b927, _0x853834) {
              function _0x18ceb8() {
                return new _0x4f1eb6(function (_0x4e6a36, _0x341cb7) {
                  _0xeadbe(_0x55b927, _0x853834, _0x4e6a36, _0x341cb7);
                });
              }
              return _0x28f841 = _0x28f841 ? _0x28f841.then(_0x18ceb8, _0x18ceb8) : _0x18ceb8();
            }
          });
        }
        function _0x325083(_0x58d973, _0x1c1f7c, _0x3bdbae) {
          var _0x2670b6 = _0x4d4655;
          return function (_0x78b0c9, _0x4798a7) {
            if (_0x2670b6 === _0x3a427f) {
              throw Error("Generator is already running");
            }
            if (_0x2670b6 === _0x1944d4) {
              if (_0x78b0c9 === "throw") {
                throw _0x4798a7;
              }
              return {
                value: _0x29ee9e,
                done: true
              };
            }
            _0x3bdbae.method = _0x78b0c9;
            _0x3bdbae.arg = _0x4798a7;
            while (true) {
              var _0x96f760 = _0x3bdbae.delegate;
              if (_0x96f760) {
                var _0xf77684 = _0x3e57a6(_0x96f760, _0x3bdbae);
                if (_0xf77684) {
                  if (_0xf77684 === _0x585643) {
                    continue;
                  }
                  return _0xf77684;
                }
              }
              if (_0x3bdbae.method === "next") {
                _0x3bdbae.sent = _0x3bdbae._sent = _0x3bdbae.arg;
              } else if (_0x3bdbae.method === "throw") {
                if (_0x2670b6 === _0x4d4655) {
                  _0x2670b6 = _0x1944d4;
                  throw _0x3bdbae.arg;
                }
                _0x3bdbae.dispatchException(_0x3bdbae.arg);
              } else if (_0x3bdbae.method === "return") {
                _0x3bdbae.abrupt("return", _0x3bdbae.arg);
              }
              _0x2670b6 = _0x3a427f;
              var _0x16bbc2 = _0x35ad76(_0x58d973, _0x1c1f7c, _0x3bdbae);
              if (_0x16bbc2.type === "normal") {
                _0x2670b6 = _0x3bdbae.done ? _0x1944d4 : _0xeeea5;
                if (_0x16bbc2.arg === _0x585643) {
                  continue;
                }
                return {
                  value: _0x16bbc2.arg,
                  done: _0x3bdbae.done
                };
              }
              if (_0x16bbc2.type === "throw") {
                _0x2670b6 = _0x1944d4;
                _0x3bdbae.method = "throw";
                _0x3bdbae.arg = _0x16bbc2.arg;
              }
            }
          };
        }
        function _0x3e57a6(_0xf35b4a, _0x18a558) {
          var _0x15429e = _0x18a558.method;
          var _0x31b2bc = _0xf35b4a.iterator[_0x15429e];
          if (_0x31b2bc === _0x29ee9e) {
            _0x18a558.delegate = null;
            if (_0x15429e !== "throw" || !_0xf35b4a.iterator.return || !(_0x18a558.method = "return", _0x18a558.arg = _0x29ee9e, _0x3e57a6(_0xf35b4a, _0x18a558), _0x18a558.method === "throw")) {
              if (_0x15429e !== "return") {
                _0x18a558.method = "throw";
                _0x18a558.arg = new TypeError("The iterator does not provide a '" + _0x15429e + "' method");
              }
            }
            return _0x585643;
          }
          var _0x282ba0 = _0x35ad76(_0x31b2bc, _0xf35b4a.iterator, _0x18a558.arg);
          if (_0x282ba0.type === "throw") {
            _0x18a558.method = "throw";
            _0x18a558.arg = _0x282ba0.arg;
            _0x18a558.delegate = null;
            return _0x585643;
          }
          var _0x5f00ac = _0x282ba0.arg;
          if (_0x5f00ac) {
            if (_0x5f00ac.done) {
              _0x18a558[_0xf35b4a.resultName] = _0x5f00ac.value;
              _0x18a558.next = _0xf35b4a.nextLoc;
              if (_0x18a558.method !== "return") {
                _0x18a558.method = "next";
                _0x18a558.arg = _0x29ee9e;
              }
              _0x18a558.delegate = null;
              return _0x585643;
            } else {
              return _0x5f00ac;
            }
          } else {
            _0x18a558.method = "throw";
            _0x18a558.arg = new TypeError("iterator result is not an object");
            _0x18a558.delegate = null;
            return _0x585643;
          }
        }
        function _0x539b1e(_0x246224) {
          var _0x31206c = {
            tryLoc: _0x246224[0]
          };
          if (1 in _0x246224) {
            _0x31206c.catchLoc = _0x246224[1];
          }
          if (2 in _0x246224) {
            _0x31206c.finallyLoc = _0x246224[2];
            _0x31206c.afterLoc = _0x246224[3];
          }
          this.tryEntries.push(_0x31206c);
        }
        function _0x5d15dc(_0x4c2701) {
          var _0x370a40 = _0x4c2701.completion || {};
          _0x370a40.type = "normal";
          delete _0x370a40.arg;
          _0x4c2701.completion = _0x370a40;
        }
        function _0x3642b9(_0x52f6ea) {
          this.tryEntries = [{
            tryLoc: "root"
          }];
          _0x52f6ea.forEach(_0x539b1e, this);
          this.reset(true);
        }
        function _0x101c62(_0x36e6af) {
          if (_0x36e6af || _0x36e6af === "") {
            var _0x281b2f = _0x36e6af[_0x445f0f];
            if (_0x281b2f) {
              return _0x281b2f.call(_0x36e6af);
            }
            if (typeof _0x36e6af.next == "function") {
              return _0x36e6af;
            }
            if (!isNaN(_0x36e6af.length)) {
              var _0x2727c6 = -1;
              var _0x122c14 = function _0x49b38f() {
                while (++_0x2727c6 < _0x36e6af.length) {
                  if (_0x145fa9.call(_0x36e6af, _0x2727c6)) {
                    _0x49b38f.value = _0x36e6af[_0x2727c6];
                    _0x49b38f.done = false;
                    return _0x49b38f;
                  }
                }
                _0x49b38f.value = _0x29ee9e;
                _0x49b38f.done = true;
                return _0x49b38f;
              };
              return _0x122c14.next = _0x122c14;
            }
          }
          throw new TypeError(_0x5eb71e(_0x36e6af) + " is not iterable");
        }
        _0x2aa393.prototype = _0x4ad116;
        _0x2cefa0(_0x2a2e7f, "constructor", {
          value: _0x4ad116,
          configurable: true
        });
        _0x2cefa0(_0x4ad116, "constructor", {
          value: _0x2aa393,
          configurable: true
        });
        _0x2aa393.displayName = _0x317d41(_0x4ad116, _0x8159f8, "GeneratorFunction");
        _0x500a06.isGeneratorFunction = function (_0x1cc7d1) {
          var _0x5cef2d = typeof _0x1cc7d1 == "function" && _0x1cc7d1.constructor;
          return !!_0x5cef2d && (_0x5cef2d === _0x2aa393 || (_0x5cef2d.displayName || _0x5cef2d.name) === "GeneratorFunction");
        };
        _0x500a06.mark = function (_0x29ff50) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_0x29ff50, _0x4ad116);
          } else {
            _0x29ff50.__proto__ = _0x4ad116;
            _0x317d41(_0x29ff50, _0x8159f8, "GeneratorFunction");
          }
          _0x29ff50.prototype = Object.create(_0x2a2e7f);
          return _0x29ff50;
        };
        _0x500a06.awrap = function (_0x39c58b) {
          return {
            __await: _0x39c58b
          };
        };
        _0x57518e(_0x7d47c0.prototype);
        _0x317d41(_0x7d47c0.prototype, _0x290512, function () {
          return this;
        });
        _0x500a06.AsyncIterator = _0x7d47c0;
        _0x500a06.async = function (_0x3f14fd, _0x36c455, _0x21ee24, _0x490653, _0x444cbe = Promise) {
          var _0x3c896a = new _0x7d47c0(_0x12fd4a(_0x3f14fd, _0x36c455, _0x21ee24, _0x490653), _0x444cbe);
          if (_0x500a06.isGeneratorFunction(_0x36c455)) {
            return _0x3c896a;
          } else {
            return _0x3c896a.next().then(function (_0x589d5) {
              if (_0x589d5.done) {
                return _0x589d5.value;
              } else {
                return _0x3c896a.next();
              }
            });
          }
        };
        _0x57518e(_0x2a2e7f);
        _0x317d41(_0x2a2e7f, _0x8159f8, "Generator");
        _0x317d41(_0x2a2e7f, _0x445f0f, function () {
          return this;
        });
        _0x317d41(_0x2a2e7f, "toString", function () {
          return "[object Generator]";
        });
        _0x500a06.keys = function (_0xd9a0c8) {
          var _0x166d85 = Object(_0xd9a0c8);
          var _0x5bcc73 = [];
          for (var _0x4d95bf in _0x166d85) {
            _0x5bcc73.push(_0x4d95bf);
          }
          _0x5bcc73.reverse();
          return function _0x519bb7() {
            while (_0x5bcc73.length) {
              var _0x4088ef = _0x5bcc73.pop();
              if (_0x4088ef in _0x166d85) {
                _0x519bb7.value = _0x4088ef;
                _0x519bb7.done = false;
                return _0x519bb7;
              }
            }
            _0x519bb7.done = true;
            return _0x519bb7;
          };
        };
        _0x500a06.values = _0x101c62;
        _0x3642b9.prototype = {
          constructor: _0x3642b9,
          reset: function _0x1529ab(_0x44d7e8) {
            this.prev = 0;
            this.next = 0;
            this.sent = this._sent = _0x29ee9e;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = _0x29ee9e;
            this.tryEntries.forEach(_0x5d15dc);
            if (!_0x44d7e8) {
              for (var _0x1334b8 in this) {
                if (_0x1334b8.charAt(0) === "t" && _0x145fa9.call(this, _0x1334b8) && !isNaN(+_0x1334b8.slice(1))) {
                  this[_0x1334b8] = _0x29ee9e;
                }
              }
            }
          },
          stop: function _0xc09575() {
            this.done = true;
            var _0x214157 = this.tryEntries[0].completion;
            if (_0x214157.type === "throw") {
              throw _0x214157.arg;
            }
            return this.rval;
          },
          dispatchException: function _0x4efa91(_0x25a23d) {
            if (this.done) {
              throw _0x25a23d;
            }
            var _0x363b0b = this;
            function _0x567b91(_0x4fc95d, _0x2e3129) {
              _0x4b2584.type = "throw";
              _0x4b2584.arg = _0x25a23d;
              _0x363b0b.next = _0x4fc95d;
              if (_0x2e3129) {
                _0x363b0b.method = "next";
                _0x363b0b.arg = _0x29ee9e;
              }
              return !!_0x2e3129;
            }
            for (var _0x438db9 = this.tryEntries.length - 1; _0x438db9 >= 0; --_0x438db9) {
              var _0x5a183b = this.tryEntries[_0x438db9];
              var _0x4b2584 = _0x5a183b.completion;
              if (_0x5a183b.tryLoc === "root") {
                return _0x567b91("end");
              }
              if (_0x5a183b.tryLoc <= this.prev) {
                var _0x55e463 = _0x145fa9.call(_0x5a183b, "catchLoc");
                var _0x3189bc = _0x145fa9.call(_0x5a183b, "finallyLoc");
                if (_0x55e463 && _0x3189bc) {
                  if (this.prev < _0x5a183b.catchLoc) {
                    return _0x567b91(_0x5a183b.catchLoc, true);
                  }
                  if (this.prev < _0x5a183b.finallyLoc) {
                    return _0x567b91(_0x5a183b.finallyLoc);
                  }
                } else if (_0x55e463) {
                  if (this.prev < _0x5a183b.catchLoc) {
                    return _0x567b91(_0x5a183b.catchLoc, true);
                  }
                } else {
                  if (!_0x3189bc) {
                    throw Error("try statement without catch or finally");
                  }
                  if (this.prev < _0x5a183b.finallyLoc) {
                    return _0x567b91(_0x5a183b.finallyLoc);
                  }
                }
              }
            }
          },
          abrupt: function _0x4cc065(_0x95a7f3, _0x4f5b9e) {
            for (var _0x18a9e3 = this.tryEntries.length - 1; _0x18a9e3 >= 0; --_0x18a9e3) {
              var _0x406408 = this.tryEntries[_0x18a9e3];
              if (_0x406408.tryLoc <= this.prev && _0x145fa9.call(_0x406408, "finallyLoc") && this.prev < _0x406408.finallyLoc) {
                var _0x514217 = _0x406408;
                break;
              }
            }
            if (_0x514217 && (_0x95a7f3 === "break" || _0x95a7f3 === "continue") && _0x514217.tryLoc <= _0x4f5b9e && _0x4f5b9e <= _0x514217.finallyLoc) {
              _0x514217 = null;
            }
            var _0x1ef228 = _0x514217 ? _0x514217.completion : {};
            _0x1ef228.type = _0x95a7f3;
            _0x1ef228.arg = _0x4f5b9e;
            if (_0x514217) {
              this.method = "next";
              this.next = _0x514217.finallyLoc;
              return _0x585643;
            } else {
              return this.complete(_0x1ef228);
            }
          },
          complete: function _0x613d35(_0x445171, _0x47a9a3) {
            if (_0x445171.type === "throw") {
              throw _0x445171.arg;
            }
            if (_0x445171.type === "break" || _0x445171.type === "continue") {
              this.next = _0x445171.arg;
            } else if (_0x445171.type === "return") {
              this.rval = this.arg = _0x445171.arg;
              this.method = "return";
              this.next = "end";
            } else if (_0x445171.type === "normal" && _0x47a9a3) {
              this.next = _0x47a9a3;
            }
            return _0x585643;
          },
          finish: function _0x5c6bcd(_0x2a05d7) {
            for (var _0x4066d2 = this.tryEntries.length - 1; _0x4066d2 >= 0; --_0x4066d2) {
              var _0x52d313 = this.tryEntries[_0x4066d2];
              if (_0x52d313.finallyLoc === _0x2a05d7) {
                this.complete(_0x52d313.completion, _0x52d313.afterLoc);
                _0x5d15dc(_0x52d313);
                return _0x585643;
              }
            }
          },
          catch: function _0x4b1b37(_0x5b96eb) {
            for (var _0x58d763 = this.tryEntries.length - 1; _0x58d763 >= 0; --_0x58d763) {
              var _0x3c4191 = this.tryEntries[_0x58d763];
              if (_0x3c4191.tryLoc === _0x5b96eb) {
                var _0x25f3c8 = _0x3c4191.completion;
                if (_0x25f3c8.type === "throw") {
                  var _0x30cc2e = _0x25f3c8.arg;
                  _0x5d15dc(_0x3c4191);
                }
                return _0x30cc2e;
              }
            }
            throw Error("illegal catch attempt");
          },
          delegateYield: function _0x55751d(_0x1f926f, _0xb83f78, _0x491391) {
            this.delegate = {
              iterator: _0x101c62(_0x1f926f),
              resultName: _0xb83f78,
              nextLoc: _0x491391
            };
            if (this.method === "next") {
              this.arg = _0x29ee9e;
            }
            return _0x585643;
          }
        };
        return _0x500a06;
      }
      function _0x2c58b1(_0x1e75d1, _0x6989c3, _0x43d56f, _0x18cde0, _0x5c9bc3, _0x35835a, _0x4b707b) {
        try {
          var _0x3bbe04 = _0x1e75d1[_0x35835a](_0x4b707b);
          var _0x5f2f7d = _0x3bbe04.value;
        } catch (_0x302886) {
          _0x43d56f(_0x302886);
          return;
        }
        if (_0x3bbe04.done) {
          _0x6989c3(_0x5f2f7d);
        } else {
          Promise.resolve(_0x5f2f7d).then(_0x18cde0, _0x5c9bc3);
        }
      }
      function _0xbb0189(_0x280306) {
        return function () {
          var _0x2a196d = this;
          var _0x19cdc2 = arguments;
          return new Promise(function (_0x5831b4, _0x1ec4c4) {
            var _0x365db6 = _0x280306.apply(_0x2a196d, _0x19cdc2);
            function _0x10d895(_0x1d09bc) {
              _0x2c58b1(_0x365db6, _0x5831b4, _0x1ec4c4, _0x10d895, _0x42574d, "next", _0x1d09bc);
            }
            function _0x42574d(_0x11e91f) {
              _0x2c58b1(_0x365db6, _0x5831b4, _0x1ec4c4, _0x10d895, _0x42574d, "throw", _0x11e91f);
            }
            _0x10d895(undefined);
          });
        };
      }
      function _0x5eb71e(_0x5ab5ab) {
        '@babel/helpers - typeof';

        _0x5eb71e = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x5a2b84) {
          return typeof _0x5a2b84;
        } : function (_0xf13277) {
          if (_0xf13277 && typeof Symbol == "function" && _0xf13277.constructor === Symbol && _0xf13277 !== Symbol.prototype) {
            return "symbol";
          } else {
            return typeof _0xf13277;
          }
        };
        return _0x5eb71e(_0x5ab5ab);
      }
      var _0xdfcc37 = 0;
      window.URLSERV_WORMWORLD = _0xdfcc37 ? "http://localhost:3102" : "https://wormworld.io/extension";
      window.URL_CDN = _0xdfcc37 ? "http://localhost:3000" : "";
      window.URL_CDN_B = _0xdfcc37 ? "localhost:3000" : "asserts.wormworld.io";
      window.URL_CDN_C = _0xdfcc37;
      window.URL_CDN_IKIT = "https://ik.imagekit.io/jdfnxk119";
      var _0x58e058 = /(.{18})(([AB])([0-9A-Za-z_]{2})([0-9A-Za-z]{3})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2})([0-9A-Z_]{2}))/;
      var _0x387e58 = true;
      var _0x57e7ff = true;
      var _0x3320e7 = false;
      var _0x4ac6e2 = 18;
      window.backgroundArena = [{
        nome: "Default",
        uri: window.URL_CDN + "/backgrounds/bkgnd0.png"
      }, {
        nome: "aRENA",
        uri: window.URL_CDN + "0000#"
      }, {
        nome: "ARENA 2",
        uri: window.URL_CDN + "https://wormup.in/assets/images/bg_sky_10.png"
      }, {
        nome: "ARENA 3",
        uri: window.URL_CDN + "https://wormup.in/assets/images/bg_sky_7.png"
      }, {
        nome: "Blue Light",
        uri: window.URL_CDN + "https://timmapwormate.com/images/store/bg_sky__6.png"
      }, {
                nome: "Blue Light1",
        uri: window.URL_CDN + "https://timmapwormate.com/images/store/bg_sky_9.png"
      }, {
        nome: "Desert",
        uri: window.URL_CDN + "/backgrounds/bkgnd7.png"
      }, {
        nome: "Textil",
        uri: window.URL_CDN + "/backgrounds/bkgnd11.png"
      }, {
        nome: "Sky Blue",
        uri: window.URL_CDN + "/backgrounds/bg_sky_1.png"
      }, {
        nome: "Sky Purp",
        uri: window.URL_CDN + "/backgrounds/bg_sky_2.png"
      }, {
        nome: "Sky Violet",
        uri: window.URL_CDN + "/backgrounds/bg_sky_3.png"
      }, {
        nome: "Sky Orange",
        uri: window.URL_CDN + "/backgrounds/bg_sky_4.png"
      }, {
        nome: "Sky Write",
        uri: window.URL_CDN + "/backgrounds/bg_sky_5.png"
      }, {
        nome: "Arena 1",
        uri: window.URL_CDN + "/backgrounds/arena01.png",
        w: 1100,
        h: 1100
      }, {
        nome: "Arena 2",
        uri: window.URL_CDN + "/backgrounds/arena02.png",
        w: 1100,
        h: 1100
      }, {
        nome: "Arena 3",
        uri: window.URL_CDN + "/backgrounds/arena03.png",
        w: 1100,
        h: 1100
      }, {
        nome: "Arena 4",
        uri: window.URL_CDN + "/backgrounds/arena04.png",
        w: 1100,
        h: 1100
      }];
      (function (_0x3acc80) {
        if ((typeof exports === "undefined" ? "undefined" : _0x5eb71e(exports)) === "object" && "object" !== "undefined") {
          _0x11bfa2.exports = _0x3acc80();
        } else if (typeof define === "function" && _0x49ea60.amdO) {
          define([], _0x3acc80);
        } else {
          var _0xffd7e4;
          if (typeof window !== "undefined") {
            _0xffd7e4 = window;
          } else if (typeof _0x49ea60.g !== "undefined") {
            _0xffd7e4 = _0x49ea60.g;
          } else if (typeof self !== "undefined") {
            _0xffd7e4 = self;
          } else {
            _0xffd7e4 = this;
          }
          _0xffd7e4.nipplejs = _0x3acc80();
        }
      })(function () {
        var _0x461db5;
        var _0x172f5e;
        var _0x26b976;
        "use strict";
        var _0x3bec25 = !!("ontouchstart" in window);
        var _0x4920b3 = window.PointerEvent ? true : false;
        var _0x27605c = window.MSPointerEvent ? true : false;
        var _0x1f0660 = {
          touch: {
            start: "touchstart",
            move: "touchmove",
            end: "touchend, touchcancel"
          },
          mouse: {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup"
          },
          pointer: {
            start: "pointerdown",
            move: "pointermove",
            end: "pointerup, pointercancel"
          },
          MSPointer: {
            start: "MSPointerDown",
            move: "MSPointerMove",
            end: "MSPointerUp"
          }
        };
        var _0x3f4016;
        var _0x212965 = {};
        if (_0x4920b3) {
          _0x3f4016 = _0x1f0660.pointer;
        } else if (_0x27605c) {
          _0x3f4016 = _0x1f0660.MSPointer;
        } else if (_0x3bec25) {
          _0x3f4016 = _0x1f0660.touch;
          _0x212965 = _0x1f0660.mouse;
        } else {
          _0x3f4016 = _0x1f0660.mouse;
        }
        var _0x4e6ec9 = {};
        _0x4e6ec9.distance = function (_0x3cfc82, _0x41f40a) {
          var _0x4769a1 = _0x41f40a.x - _0x3cfc82.x;
          var _0x2185c5 = _0x41f40a.y - _0x3cfc82.y;
          return Math.sqrt(_0x4769a1 * _0x4769a1 + _0x2185c5 * _0x2185c5);
        };
        _0x4e6ec9.angle = function (_0x15ce3e, _0x4745f6) {
          var _0x1a0209 = _0x4745f6.x - _0x15ce3e.x;
          var _0x5ec7d3 = _0x4745f6.y - _0x15ce3e.y;
          return _0x4e6ec9.degrees(Math.atan2(_0x5ec7d3, _0x1a0209));
        };
        _0x4e6ec9.findCoord = function (_0x312cd4, _0x513f53, _0x5888b6) {
          var _0x150f5b = {
            x: 0,
            y: 0
          };
          _0x5888b6 = _0x4e6ec9.radians(_0x5888b6);
          _0x150f5b.x = _0x312cd4.x - _0x513f53 * Math.cos(_0x5888b6);
          _0x150f5b.y = _0x312cd4.y - _0x513f53 * Math.sin(_0x5888b6);
          return _0x150f5b;
        };
        _0x4e6ec9.radians = function (_0x3c6236) {
          return _0x3c6236 * (Math.PI / 180);
        };
        _0x4e6ec9.degrees = function (_0x409f4d) {
          return _0x409f4d * (180 / Math.PI);
        };
        _0x4e6ec9.bindEvt = function (_0x1e4443, _0x3e6f4b, _0x321887) {
          var _0x4e552b = _0x3e6f4b.split(/[ ,]+/g);
          var _0x2efd33;
          for (var _0x8109b5 = 0; _0x8109b5 < _0x4e552b.length; _0x8109b5 += 1) {
            _0x2efd33 = _0x4e552b[_0x8109b5];
            if (_0x1e4443.addEventListener) {
              _0x1e4443.addEventListener(_0x2efd33, _0x321887, false);
            } else if (_0x1e4443.attachEvent) {
              _0x1e4443.attachEvent(_0x2efd33, _0x321887);
            }
          }
        };
        _0x4e6ec9.unbindEvt = function (_0x10d356, _0x10d3a3, _0x46b50d) {
          var _0x42f8d5 = _0x10d3a3.split(/[ ,]+/g);
          var _0x2dee81;
          for (var _0x4394ab = 0; _0x4394ab < _0x42f8d5.length; _0x4394ab += 1) {
            _0x2dee81 = _0x42f8d5[_0x4394ab];
            if (_0x10d356.removeEventListener) {
              _0x10d356.removeEventListener(_0x2dee81, _0x46b50d);
            } else if (_0x10d356.detachEvent) {
              _0x10d356.detachEvent(_0x2dee81, _0x46b50d);
            }
          }
        };
        _0x4e6ec9.trigger = function (_0x5bc4c8, _0x11073f, _0x3b2520) {
          var _0x2be436 = new CustomEvent(_0x11073f, _0x3b2520);
          _0x5bc4c8.dispatchEvent(_0x2be436);
        };
        _0x4e6ec9.prepareEvent = function (_0x13c71f) {
          _0x13c71f.preventDefault();
          if (_0x13c71f.type.match(/^touch/)) {
            return _0x13c71f.changedTouches;
          } else {
            return _0x13c71f;
          }
        };
        _0x4e6ec9.getScroll = function () {
          var _0x47028c = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
          var _0x11918e = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
          return {
            x: _0x47028c,
            y: _0x11918e
          };
        };
        _0x4e6ec9.applyPosition = function (_0x214fbd, _0x3e5687) {
          if (_0x3e5687.top || _0x3e5687.right || _0x3e5687.bottom || _0x3e5687.left) {
            _0x214fbd.style.top = _0x3e5687.top;
            _0x214fbd.style.right = _0x3e5687.right;
            _0x214fbd.style.bottom = _0x3e5687.bottom;
            _0x214fbd.style.left = _0x3e5687.left;
          } else {
            _0x214fbd.style.left = _0x3e5687.x + "px";
            _0x214fbd.style.top = _0x3e5687.y + "px";
          }
        };
        _0x4e6ec9.getTransitionStyle = function (_0x3f20e1, _0x45789e, _0x4b6adc) {
          var _0x366d93 = _0x4e6ec9.configStylePropertyObject(_0x3f20e1);
          for (var _0x4c8d96 in _0x366d93) {
            if (_0x366d93.hasOwnProperty(_0x4c8d96)) {
              if (typeof _0x45789e === "string") {
                _0x366d93[_0x4c8d96] = _0x45789e + " " + _0x4b6adc;
              } else {
                var _0xaa8317 = "";
                for (var _0x35140c = 0, _0x27cc90 = _0x45789e.length; _0x35140c < _0x27cc90; _0x35140c += 1) {
                  _0xaa8317 += _0x45789e[_0x35140c] + " " + _0x4b6adc + ", ";
                }
                _0x366d93[_0x4c8d96] = _0xaa8317.slice(0, -2);
              }
            }
          }
          return _0x366d93;
        };
        _0x4e6ec9.getVendorStyle = function (_0x4a5d41, _0x150f59) {
          var _0x1e1b26 = _0x4e6ec9.configStylePropertyObject(_0x4a5d41);
          for (var _0x19da35 in _0x1e1b26) {
            if (_0x1e1b26.hasOwnProperty(_0x19da35)) {
              _0x1e1b26[_0x19da35] = _0x150f59;
            }
          }
          return _0x1e1b26;
        };
        _0x4e6ec9.configStylePropertyObject = function (_0x1dabde) {
          var _0x55391c = {
            [_0x1dabde]: ""
          };
          var _0x3889c2 = ["webkit", "Moz", "o"];
          _0x3889c2.forEach(function (_0x20620d) {
            _0x55391c[_0x20620d + _0x1dabde.charAt(0).toUpperCase() + _0x1dabde.slice(1)] = "";
          });
          return _0x55391c;
        };
        _0x4e6ec9.extend = function (_0x2ba4b0, _0x305749) {
          for (var _0x5141b0 in _0x305749) {
            if (_0x305749.hasOwnProperty(_0x5141b0)) {
              _0x2ba4b0[_0x5141b0] = _0x305749[_0x5141b0];
            }
          }
          return _0x2ba4b0;
        };
        _0x4e6ec9.safeExtend = function (_0x4203dd, _0xb19935) {
          var _0x1c5014 = {};
          for (var _0x500924 in _0x4203dd) {
            if (_0x4203dd.hasOwnProperty(_0x500924) && _0xb19935.hasOwnProperty(_0x500924)) {
              _0x1c5014[_0x500924] = _0xb19935[_0x500924];
            } else if (_0x4203dd.hasOwnProperty(_0x500924)) {
              _0x1c5014[_0x500924] = _0x4203dd[_0x500924];
            }
          }
          return _0x1c5014;
        };
        _0x4e6ec9.map = function (_0xff886b, _0x4e5403) {
          if (_0xff886b.length) {
            for (var _0x188057 = 0, _0x327774 = _0xff886b.length; _0x188057 < _0x327774; _0x188057 += 1) {
              _0x4e5403(_0xff886b[_0x188057]);
            }
          } else {
            _0x4e5403(_0xff886b);
          }
        };
        function _0x44dcb2() {}
        ;
        _0x44dcb2.prototype.on = function (_0x163e9e, _0x33de1b) {
          var _0x1e451b = this;
          var _0xd11a85 = _0x163e9e.split(/[ ,]+/g);
          var _0x1599f6;
          _0x1e451b._handlers_ = _0x1e451b._handlers_ || {};
          for (var _0xc06efc = 0; _0xc06efc < _0xd11a85.length; _0xc06efc += 1) {
            _0x1599f6 = _0xd11a85[_0xc06efc];
            _0x1e451b._handlers_[_0x1599f6] = _0x1e451b._handlers_[_0x1599f6] || [];
            _0x1e451b._handlers_[_0x1599f6].push(_0x33de1b);
          }
          return _0x1e451b;
        };
        _0x44dcb2.prototype.off = function (_0x21518d, _0x26a016) {
          var _0xaba72b = this;
          _0xaba72b._handlers_ = _0xaba72b._handlers_ || {};
          if (_0x21518d === undefined) {
            _0xaba72b._handlers_ = {};
          } else if (_0x26a016 === undefined) {
            _0xaba72b._handlers_[_0x21518d] = null;
          } else if (_0xaba72b._handlers_[_0x21518d] && _0xaba72b._handlers_[_0x21518d].indexOf(_0x26a016) >= 0) {
            _0xaba72b._handlers_[_0x21518d].splice(_0xaba72b._handlers_[_0x21518d].indexOf(_0x26a016), 1);
          }
          return _0xaba72b;
        };
        _0x44dcb2.prototype.trigger = function (_0x2b0a43, _0x89a861) {
          var _0x36b25f = this;
          var _0x52243d = _0x2b0a43.split(/[ ,]+/g);
          var _0x3e2c2c;
          _0x36b25f._handlers_ = _0x36b25f._handlers_ || {};
          for (var _0x16c1cd = 0; _0x16c1cd < _0x52243d.length; _0x16c1cd += 1) {
            _0x3e2c2c = _0x52243d[_0x16c1cd];
            if (_0x36b25f._handlers_[_0x3e2c2c] && _0x36b25f._handlers_[_0x3e2c2c].length) {
              _0x36b25f._handlers_[_0x3e2c2c].forEach(function (_0x2df65c) {
                _0x2df65c.call(_0x36b25f, {
                  type: _0x3e2c2c,
                  target: _0x36b25f
                }, _0x89a861);
              });
            }
          }
        };
        _0x44dcb2.prototype.config = function (_0x2e35e9) {
          var _0x3ace1 = this;
          _0x3ace1.options = _0x3ace1.defaults || {};
          if (_0x2e35e9) {
            _0x3ace1.options = _0x4e6ec9.safeExtend(_0x3ace1.options, _0x2e35e9);
          }
        };
        _0x44dcb2.prototype.bindEvt = function (_0x4f7001, _0x3998e3) {
          var _0x369c78 = this;
          _0x369c78._domHandlers_ = _0x369c78._domHandlers_ || {};
          _0x369c78._domHandlers_[_0x3998e3] = function () {
            if (typeof _0x369c78["on" + _0x3998e3] === "function") {
              _0x369c78["on" + _0x3998e3].apply(_0x369c78, arguments);
            } else {
              console.warn("[WARNING] : Missing \"on" + _0x3998e3 + "\" handler.");
            }
          };
          _0x4e6ec9.bindEvt(_0x4f7001, _0x3f4016[_0x3998e3], _0x369c78._domHandlers_[_0x3998e3]);
          if (_0x212965[_0x3998e3]) {
            _0x4e6ec9.bindEvt(_0x4f7001, _0x212965[_0x3998e3], _0x369c78._domHandlers_[_0x3998e3]);
          }
          return _0x369c78;
        };
        _0x44dcb2.prototype.unbindEvt = function (_0xb57ec9, _0x5defce) {
          var _0x1a4ea0 = this;
          _0x1a4ea0._domHandlers_ = _0x1a4ea0._domHandlers_ || {};
          _0x4e6ec9.unbindEvt(_0xb57ec9, _0x3f4016[_0x5defce], _0x1a4ea0._domHandlers_[_0x5defce]);
          if (_0x212965[_0x5defce]) {
            _0x4e6ec9.unbindEvt(_0xb57ec9, _0x212965[_0x5defce], _0x1a4ea0._domHandlers_[_0x5defce]);
          }
          delete _0x1a4ea0._domHandlers_[_0x5defce];
          return this;
        };
        function _0x4bbc82(_0x2d0f23, _0x2ac7f8) {
          this.identifier = _0x2ac7f8.identifier;
          this.position = _0x2ac7f8.position;
          this.frontPosition = _0x2ac7f8.frontPosition;
          this.collection = _0x2d0f23;
          this.defaults = {
            size: 100,
            threshold: 0.1,
            color: "white",
            fadeTime: 250,
            dataOnly: false,
            restJoystick: true,
            restOpacity: 0.5,
            mode: "dynamic",
            zone: document.body,
            lockX: false,
            lockY: false,
            dumbBox: null
          };
          this.config(_0x2ac7f8);
          if (this.options.mode === "dynamic") {
            this.options.restOpacity = 0;
          }
          this.id = _0x4bbc82.id;
          _0x4bbc82.id += 1;
          this.buildEl().stylize();
          this.instance = {
            el: this.ui.el,
            on: this.on.bind(this),
            off: this.off.bind(this),
            show: this.show.bind(this),
            hide: this.hide.bind(this),
            add: this.addToDom.bind(this),
            remove: this.removeFromDom.bind(this),
            destroy: this.destroy.bind(this),
            resetDirection: this.resetDirection.bind(this),
            computeDirection: this.computeDirection.bind(this),
            trigger: this.trigger.bind(this),
            position: this.position,
            frontPosition: this.frontPosition,
            ui: this.ui,
            identifier: this.identifier,
            id: this.id,
            options: this.options
          };
          return this.instance;
        }
        ;
        _0x4bbc82.prototype = new _0x44dcb2();
        _0x4bbc82.constructor = _0x4bbc82;
        _0x4bbc82.id = 0;
        _0x4bbc82.prototype.buildEl = function (_0x3a85fd) {
          this.ui = {};
          if (this.options.dataOnly) {
            return this;
          }
          this.ui.el = document.createElement("div");
          this.ui.back = document.createElement("div");
          this.ui.front = document.createElement("div");
          this.ui.el.className = "nipple collection_" + this.collection.id;
          this.ui.back.className = "back";
          this.ui.front.className = "front";
          this.ui.el.setAttribute("id", "nipple_" + this.collection.id + "_" + this.id);
          this.ui.el.appendChild(this.ui.back);
          this.ui.el.appendChild(this.ui.front);
          return this;
        };
        _0x4bbc82.prototype.stylize = function () {
          if (this.options.dataOnly) {
            return this;
          }
          var _0x139b1e = this.options.fadeTime + "ms";
          var _0x5e43ff = _0x4e6ec9.getVendorStyle("borderRadius", "50%");
          var _0x178789 = _0x4e6ec9.getTransitionStyle("transition", "opacity", _0x139b1e);
          var _0xb29425 = {
            el: {
              position: "absolute",
              opacity: this.options.restOpacity,
              display: "unblock",
              zIndex: 999
            },
            back: {
              position: "absolute",
              display: "unblock",
              width: this.options.size + "px",
              height: this.options.size + "px",
              marginLeft: -this.options.size / 2 + "px",
              marginTop: -this.options.size / 2 + "px",
              background: this.options.color,
              opacity: ".5"
            },
            front: {
              width: this.options.size / 2 + "px",
              height: this.options.size / 2 + "px",
              position: "absolute",
              display: "unblock",
              marginLeft: -this.options.size / 4 + "px",
              marginTop: -this.options.size / 4 + "px",
              background: this.options.color,
              opacity: ".5"
            }
          };
          _0x4e6ec9.extend(_0xb29425.el, _0x178789);
          _0x4e6ec9.extend(_0xb29425.back, _0x5e43ff);
          _0x4e6ec9.extend(_0xb29425.front, _0x5e43ff);
          this.applyStyles(_0xb29425);
          return this;
        };
        _0x4bbc82.prototype.applyStyles = function (_0x584812) {
          for (var _0x5de70a in this.ui) {
            if (this.ui.hasOwnProperty(_0x5de70a)) {
              for (var _0x1d23a0 in _0x584812[_0x5de70a]) {
                this.ui[_0x5de70a].style[_0x1d23a0] = _0x584812[_0x5de70a][_0x1d23a0];
              }
            }
          }
          return this;
        };
        _0x4bbc82.prototype.addToDom = function () {
          if (this.options.dataOnly || document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.appendChild(this.ui.el);
          return this;
        };
        _0x4bbc82.prototype.removeFromDom = function () {
          if (this.options.dataOnly || !document.body.contains(this.ui.el)) {
            return this;
          }
          this.options.zone.removeChild(this.ui.el);
          return this;
        };
        _0x4bbc82.prototype.destroy = function () {
          clearTimeout(this.removeTimeout);
          clearTimeout(this.showTimeout);
          clearTimeout(this.restTimeout);
          this.trigger("destroyed", this.instance);
          this.removeFromDom();
          this.off();
        };
        _0x4bbc82.prototype.show = function (_0x4d118a) {
          var _0x3c0bd5 = this;
          if (_0x3c0bd5.options.dataOnly) {
            return _0x3c0bd5;
          }
          clearTimeout(_0x3c0bd5.removeTimeout);
          clearTimeout(_0x3c0bd5.showTimeout);
          clearTimeout(_0x3c0bd5.restTimeout);
          _0x3c0bd5.addToDom();
          _0x3c0bd5.restCallback();
          setTimeout(function () {
            _0x3c0bd5.ui.el.style.opacity = 1;
          }, 0);
          _0x3c0bd5.showTimeout = setTimeout(function () {
            _0x3c0bd5.trigger("shown", _0x3c0bd5.instance);
            if (typeof _0x4d118a === "function") {
              _0x4d118a.call(this);
            }
          }, _0x3c0bd5.options.fadeTime);
          return _0x3c0bd5;
        };
        _0x4bbc82.prototype.hide = function (_0xa09027) {
          var _0x1ed782 = this;
          if (_0x1ed782.options.dataOnly) {
            return _0x1ed782;
          }
          _0x1ed782.ui.el.style.opacity = _0x1ed782.options.restOpacity;
          clearTimeout(_0x1ed782.removeTimeout);
          clearTimeout(_0x1ed782.showTimeout);
          clearTimeout(_0x1ed782.restTimeout);
          _0x1ed782.removeTimeout = setTimeout(function () {
            var _0x1b1b84 = _0x1ed782.options.mode === "dynamic" ? "none" : "unblock";
            _0x1ed782.ui.el.style.display = _0x1b1b84;
            if (typeof _0xa09027 === "function") {
              _0xa09027.call(_0x1ed782);
            }
            _0x1ed782.trigger("hidden", _0x1ed782.instance);
          }, _0x1ed782.options.fadeTime);
          if (_0x1ed782.options.restJoystick) {
            _0x1ed782.restPosition();
          }
          return _0x1ed782;
        };
        _0x4bbc82.prototype.restPosition = function (_0x4c0205) {
          var _0x2c8bc8 = this;
          _0x2c8bc8.frontPosition = {
            x: 0,
            y: 0
          };
          var _0x3b0288 = _0x2c8bc8.options.fadeTime + "ms";
          var _0x240cef = {};
          _0x240cef.front = _0x4e6ec9.getTransitionStyle("transition", ["top", "left"], _0x3b0288);
          var _0x194b45 = {
            front: {}
          };
          _0x194b45.front = {
            left: _0x2c8bc8.frontPosition.x + "px",
            top: _0x2c8bc8.frontPosition.y + "px"
          };
          _0x2c8bc8.applyStyles(_0x240cef);
          _0x2c8bc8.applyStyles(_0x194b45);
          _0x2c8bc8.restTimeout = setTimeout(function () {
            if (typeof _0x4c0205 === "function") {
              _0x4c0205.call(_0x2c8bc8);
            }
            _0x2c8bc8.restCallback();
          }, _0x2c8bc8.options.fadeTime);
        };
        _0x4bbc82.prototype.restCallback = function () {
          var _0x4c1a8f = this;
          var _0x132561 = {};
          _0x132561.front = _0x4e6ec9.getTransitionStyle("transition", "none", "");
          _0x4c1a8f.applyStyles(_0x132561);
          _0x4c1a8f.trigger("rested", _0x4c1a8f.instance);
        };
        _0x4bbc82.prototype.resetDirection = function () {
          this.direction = {
            x: false,
            y: false,
            angle: false
          };
        };
        _0x4bbc82.prototype.computeDirection = function (_0x239f5d) {
          var _0x1d6ed4 = _0x239f5d.angle.radian;
          var _0x14ed65 = Math.PI / 4;
          var _0x20a880 = Math.PI / 2;
          var _0x5f8f4f;
          var _0x4754fa;
          var _0x2db5fe;
          if (_0x1d6ed4 > _0x14ed65 && _0x1d6ed4 < _0x14ed65 * 3 && !_0x239f5d.lockX) {
            _0x5f8f4f = "up";
          } else if (_0x1d6ed4 > -_0x14ed65 && _0x1d6ed4 <= _0x14ed65 && !_0x239f5d.lockY) {
            _0x5f8f4f = "left";
          } else if (_0x1d6ed4 > -_0x14ed65 * 3 && _0x1d6ed4 <= -_0x14ed65 && !_0x239f5d.lockX) {
            _0x5f8f4f = "down";
          } else if (!_0x239f5d.lockY) {
            _0x5f8f4f = "right";
          }
          if (!_0x239f5d.lockY) {
            if (_0x1d6ed4 > -_0x20a880 && _0x1d6ed4 < _0x20a880) {
              _0x4754fa = "left";
            } else {
              _0x4754fa = "right";
            }
          }
          if (!_0x239f5d.lockX) {
            if (_0x1d6ed4 > 0) {
              _0x2db5fe = "up";
            } else {
              _0x2db5fe = "down";
            }
          }
          if (_0x239f5d.force > this.options.threshold) {
            var _0x304d42 = {};
            for (var _0x21fce3 in this.direction) {
              if (this.direction.hasOwnProperty(_0x21fce3)) {
                _0x304d42[_0x21fce3] = this.direction[_0x21fce3];
              }
            }
            var _0x10140f = {};
            this.direction = {
              x: _0x4754fa,
              y: _0x2db5fe,
              angle: _0x5f8f4f
            };
            _0x239f5d.direction = this.direction;
            for (var _0x21fce3 in _0x304d42) {
              if (_0x304d42[_0x21fce3] === this.direction[_0x21fce3]) {
                _0x10140f[_0x21fce3] = true;
              }
            }
            if (_0x10140f.x && _0x10140f.y && _0x10140f.angle) {
              return _0x239f5d;
            }
            if (!_0x10140f.x || !_0x10140f.y) {
              this.trigger("plain", _0x239f5d);
            }
            if (!_0x10140f.x) {
              this.trigger("plain:" + _0x4754fa, _0x239f5d);
            }
            if (!_0x10140f.y) {
              this.trigger("plain:" + _0x2db5fe, _0x239f5d);
            }
            if (!_0x10140f.angle) {
              this.trigger("dir dir:" + _0x5f8f4f, _0x239f5d);
            }
          }
          return _0x239f5d;
        };
        function _0x3e0d42(_0x6ababa, _0x41545c) {
          var _0x59dcf3 = this;
          _0x59dcf3.nipples = [];
          _0x59dcf3.idles = [];
          _0x59dcf3.actives = [];
          _0x59dcf3.ids = [];
          _0x59dcf3.pressureIntervals = {};
          _0x59dcf3.manager = _0x6ababa;
          _0x59dcf3.id = _0x3e0d42.id;
          _0x3e0d42.id += 1;
          _0x59dcf3.defaults = {
            zone: document.body,
            multitouch: false,
            maxNumberOfNipples: 10,
            mode: "dynamic",
            position: {
              top: 0,
              left: 0
            },
            catchDistance: 200,
            size: 100,
            threshold: 0.1,
            color: "white",
            fadeTime: 250,
            dataOnly: false,
            restJoystick: true,
            restOpacity: 0.5,
            lockX: false,
            lockY: false,
            dumbBox: null
          };
          _0x59dcf3.config(_0x41545c);
          if (_0x59dcf3.options.mode === "static" || _0x59dcf3.options.mode === "semi") {
            _0x59dcf3.options.multitouch = false;
          }
          if (!_0x59dcf3.options.multitouch) {
            _0x59dcf3.options.maxNumberOfNipples = 1;
          }
          _0x59dcf3.updateBox();
          _0x59dcf3.prepareNipples();
          _0x59dcf3.bindings();
          _0x59dcf3.begin();
          return _0x59dcf3.nipples;
        }
        _0x3e0d42.prototype = new _0x44dcb2();
        _0x3e0d42.constructor = _0x3e0d42;
        _0x3e0d42.id = 0;
        _0x3e0d42.prototype.prepareNipples = function () {
          var _0x5c8fd2 = this;
          var _0x3e4645 = _0x5c8fd2.nipples;
          _0x3e4645.on = _0x5c8fd2.on.bind(_0x5c8fd2);
          _0x3e4645.off = _0x5c8fd2.off.bind(_0x5c8fd2);
          _0x3e4645.options = _0x5c8fd2.options;
          _0x3e4645.destroy = _0x5c8fd2.destroy.bind(_0x5c8fd2);
          _0x3e4645.ids = _0x5c8fd2.ids;
          _0x3e4645.id = _0x5c8fd2.id;
          _0x3e4645.processOnMove = _0x5c8fd2.processOnMove.bind(_0x5c8fd2);
          _0x3e4645.processOnEnd = _0x5c8fd2.processOnEnd.bind(_0x5c8fd2);
          _0x3e4645.get = function (_0x4dede9) {
            if (_0x4dede9 === undefined) {
              return _0x3e4645[0];
            }
            for (var _0x2a3824 = 0, _0xc397d = _0x3e4645.length; _0x2a3824 < _0xc397d; _0x2a3824 += 1) {
              if (_0x3e4645[_0x2a3824].identifier === _0x4dede9) {
                return _0x3e4645[_0x2a3824];
              }
            }
            return false;
          };
        };
        _0x3e0d42.prototype.bindings = function () {
          var _0x55d301 = this;
          _0x55d301.bindEvt(_0x55d301.options.zone, "start");
          _0x55d301.options.zone.style.touchAction = "none";
          _0x55d301.options.zone.style.msTouchAction = "none";
        };
        _0x3e0d42.prototype.begin = function () {
          var _0x3c9eba = this;
          var _0x1e6678 = _0x3c9eba.options;
          if (_0x1e6678.mode === "static") {
            var _0x59b536 = _0x3c9eba.createNipple(_0x1e6678.position, _0x3c9eba.manager.getIdentifier());
            _0x59b536.add();
            _0x3c9eba.idles.push(_0x59b536);
          }
        };
        _0x3e0d42.prototype.createNipple = function (_0x3b1a30, _0x1025ca) {
          var _0x115c72 = this;
          var _0x32c08b = _0x4e6ec9.getScroll();
          var _0x489547 = {};
          var _0x2d6d56 = _0x115c72.options;
          if (_0x3b1a30.x && _0x3b1a30.y) {
            _0x489547 = {
              x: _0x3b1a30.x - (_0x32c08b.x + _0x115c72.box.left),
              y: _0x3b1a30.y - (_0x32c08b.y + _0x115c72.box.top)
            };
          } else if (_0x3b1a30.top || _0x3b1a30.right || _0x3b1a30.bottom || _0x3b1a30.left) {
            var _0x4b3a30 = document.createElement("DIV");
            _0x4b3a30.style.display = "hidden";
            _0x4b3a30.style.top = _0x3b1a30.top;
            _0x4b3a30.style.right = _0x3b1a30.right;
            _0x4b3a30.style.bottom = _0x3b1a30.bottom;
            _0x4b3a30.style.left = _0x3b1a30.left;
            _0x4b3a30.style.position = "absolute";
            _0x2d6d56.zone.appendChild(_0x4b3a30);
            var _0x3c6dd8 = _0x4b3a30.getBoundingClientRect();
            _0x2d6d56.zone.removeChild(_0x4b3a30);
            _0x489547 = _0x3b1a30;
            _0x3b1a30 = {
              x: (_0x2d6d56.dumbBox ? _0x2d6d56.dumbBox.left : _0x3c6dd8.left) + _0x32c08b.x,
              y: (_0x2d6d56.dumbBox ? _0x2d6d56.dumbBox.top : _0x3c6dd8.top) + _0x32c08b.y
            };
          }
          var _0x23a8fb = new _0x4bbc82(_0x115c72, {
            color: _0x2d6d56.color,
            size: _0x2d6d56.size,
            threshold: _0x2d6d56.threshold,
            fadeTime: _0x2d6d56.fadeTime,
            dataOnly: _0x2d6d56.dataOnly,
            restJoystick: _0x2d6d56.restJoystick,
            restOpacity: _0x2d6d56.restOpacity,
            mode: _0x2d6d56.mode,
            identifier: _0x1025ca,
            position: _0x3b1a30,
            zone: _0x2d6d56.zone,
            frontPosition: {
              x: 0,
              y: 0
            }
          });
          if (!_0x2d6d56.dataOnly) {
            _0x4e6ec9.applyPosition(_0x23a8fb.ui.el, _0x489547);
            _0x4e6ec9.applyPosition(_0x23a8fb.ui.front, _0x23a8fb.frontPosition);
          }
          _0x115c72.nipples.push(_0x23a8fb);
          _0x115c72.trigger("added " + _0x23a8fb.identifier + ":added", _0x23a8fb);
          _0x115c72.manager.trigger("added " + _0x23a8fb.identifier + ":added", _0x23a8fb);
          _0x115c72.bindNipple(_0x23a8fb);
          return _0x23a8fb;
        };
        _0x3e0d42.prototype.updateBox = function () {
          var _0x5f1bfc = this;
          _0x5f1bfc.box = _0x5f1bfc.options.zone.getBoundingClientRect();
        };
        _0x3e0d42.prototype.bindNipple = function (_0x5a9505) {
          var _0x1f38da = this;
          var _0x6b0669;
          var _0x57b990 = function _0x3c121d(_0x17c979, _0x4c5601) {
            _0x6b0669 = _0x17c979.type + " " + _0x4c5601.id + ":" + _0x17c979.type;
            _0x1f38da.trigger(_0x6b0669, _0x4c5601);
          };
          _0x5a9505.on("destroyed", _0x1f38da.onDestroyed.bind(_0x1f38da));
          _0x5a9505.on("shown hidden rested dir plain", _0x57b990);
          _0x5a9505.on("dir:up dir:right dir:down dir:left", _0x57b990);
          _0x5a9505.on("plain:up plain:right plain:down plain:left", _0x57b990);
        };
        _0x3e0d42.prototype.pressureFn = function (_0x299381, _0xfcb8be, _0x39833e) {
          var _0x38c2ca = this;
          var _0x1efa67 = 0;
          clearInterval(_0x38c2ca.pressureIntervals[_0x39833e]);
          _0x38c2ca.pressureIntervals[_0x39833e] = setInterval(function () {
            var _0x9ad6e0 = _0x299381.force || _0x299381.pressure || _0x299381.webkitForce || 0;
            if (_0x9ad6e0 !== _0x1efa67) {
              _0xfcb8be.trigger("pressure", _0x9ad6e0);
              _0x38c2ca.trigger("pressure " + _0xfcb8be.identifier + ":pressure", _0x9ad6e0);
              _0x1efa67 = _0x9ad6e0;
            }
          }.bind(_0x38c2ca), 100);
        };
        _0x3e0d42.prototype.onstart = function (_0x4e08e1) {
          var _0xad1fcc = this;
          var _0xf5fe49 = _0xad1fcc.options;
          _0x4e08e1 = _0x4e6ec9.prepareEvent(_0x4e08e1);
          _0xad1fcc.updateBox();
          var _0x3c4394 = function _0x12a9e2(_0xd8b8d1) {
            if (_0xad1fcc.actives.length < _0xf5fe49.maxNumberOfNipples) {
              _0xad1fcc.processOnStart(_0xd8b8d1);
            }
          };
          _0x4e6ec9.map(_0x4e08e1, _0x3c4394);
          _0xad1fcc.manager.bindDocument();
          return false;
        };
        _0x3e0d42.prototype.processOnStart = function (_0x221f84) {
          var _0x119374 = this;
          var _0x5d7de6 = _0x119374.options;
          var _0x23b0a6;
          var _0x24d18a = _0x119374.manager.getIdentifier(_0x221f84);
          var _0x5e3bf3 = _0x221f84.force || _0x221f84.pressure || _0x221f84.webkitForce || 0;
          var _0x3ccec3 = {
            x: _0x221f84.pageX,
            y: _0x221f84.pageY
          };
          var _0x4a8ccc = _0x119374.getOrCreate(_0x24d18a, _0x3ccec3);
          if (_0x4a8ccc.identifier !== _0x24d18a) {
            _0x119374.manager.removeIdentifier(_0x4a8ccc.identifier);
          }
          _0x4a8ccc.identifier = _0x24d18a;
          var _0x591af8 = function _0x583d59(_0x2839f6) {
            _0x2839f6.trigger("start", _0x2839f6);
            _0x119374.trigger("start " + _0x2839f6.id + ":start", _0x2839f6);
            _0x2839f6.show();
            if (_0x5e3bf3 > 0) {
              _0x119374.pressureFn(_0x221f84, _0x2839f6, _0x2839f6.identifier);
            }
            _0x119374.processOnMove(_0x221f84);
          };
          if ((_0x23b0a6 = _0x119374.idles.indexOf(_0x4a8ccc)) >= 0) {
            _0x119374.idles.splice(_0x23b0a6, 1);
          }
          _0x119374.actives.push(_0x4a8ccc);
          _0x119374.ids.push(_0x4a8ccc.identifier);
          if (_0x5d7de6.mode !== "semi") {
            _0x591af8(_0x4a8ccc);
          } else {
            var _0x537c61 = _0x4e6ec9.distance(_0x3ccec3, _0x4a8ccc.position);
            if (_0x537c61 <= _0x5d7de6.catchDistance) {
              _0x591af8(_0x4a8ccc);
            } else {
              _0x4a8ccc.destroy();
              _0x119374.processOnStart(_0x221f84);
              return;
            }
          }
          return _0x4a8ccc;
        };
        _0x3e0d42.prototype.getOrCreate = function (_0x1ea9a7, _0x346289) {
          var _0x5ddda1 = this;
          var _0x1388c6 = _0x5ddda1.options;
          var _0x16e02b;
          if (/(semi|static)/.test(_0x1388c6.mode)) {
            _0x16e02b = _0x5ddda1.idles[0];
            if (_0x16e02b) {
              _0x5ddda1.idles.splice(0, 1);
              return _0x16e02b;
            }
            if (_0x1388c6.mode === "semi") {
              return _0x5ddda1.createNipple(_0x346289, _0x1ea9a7);
            }
            console.warn("Coudln't find the needed nipple.");
            return false;
          }
          _0x16e02b = _0x5ddda1.createNipple(_0x346289, _0x1ea9a7);
          return _0x16e02b;
        };
        _0x3e0d42.prototype.processOnMove = function (_0x4d591f) {
          var _0x1f338f = this;
          var _0x1fabb2 = _0x1f338f.options;
          var _0x3b6670 = _0x1f338f.manager.getIdentifier(_0x4d591f);
          var _0x14d8b6 = _0x1f338f.nipples.get(_0x3b6670);
          if (!_0x14d8b6) {
            console.error("Found zombie joystick with ID " + _0x3b6670);
            _0x1f338f.manager.removeIdentifier(_0x3b6670);
            return;
          }
          _0x14d8b6.identifier = _0x3b6670;
          var _0x2561bf = _0x14d8b6.options.size / 2;
          var _0x276f09 = {
            x: _0x4d591f.pageX,
            y: _0x4d591f.pageY
          };
          var _0x47e3d7 = _0x4e6ec9.distance(_0x276f09, _0x14d8b6.position);
          var _0x193f32 = _0x4e6ec9.angle(_0x276f09, _0x14d8b6.position);
          var _0x399d03 = _0x4e6ec9.radians(_0x193f32);
          var _0x1f6cab = _0x47e3d7 / _0x2561bf;
          if (_0x47e3d7 > _0x2561bf) {
            _0x47e3d7 = _0x2561bf;
            _0x276f09 = _0x4e6ec9.findCoord(_0x14d8b6.position, _0x47e3d7, _0x193f32);
          }
          var _0x15fbf5 = _0x276f09.x - _0x14d8b6.position.x;
          var _0x1a1bcb = _0x276f09.y - _0x14d8b6.position.y;
          if (_0x1fabb2.lockX) {
            _0x1a1bcb = 0;
          }
          if (_0x1fabb2.lockY) {
            _0x15fbf5 = 0;
          }
          _0x14d8b6.frontPosition = {
            x: _0x15fbf5,
            y: _0x1a1bcb
          };
          if (!_0x1fabb2.dataOnly) {
            _0x4e6ec9.applyPosition(_0x14d8b6.ui.front, _0x14d8b6.frontPosition);
          }
          var _0x2a1013 = {
            identifier: _0x14d8b6.identifier,
            position: _0x276f09,
            force: _0x1f6cab,
            pressure: _0x4d591f.force || _0x4d591f.pressure || _0x4d591f.webkitForce || 0,
            distance: _0x47e3d7,
            angle: {
              radian: _0x399d03,
              degree: _0x193f32
            },
            instance: _0x14d8b6,
            lockX: _0x1fabb2.lockX,
            lockY: _0x1fabb2.lockY
          };
          _0x2a1013 = _0x14d8b6.computeDirection(_0x2a1013);
          _0x2a1013.angle = {
            radian: _0x4e6ec9.radians(180 - _0x193f32),
            degree: 180 - _0x193f32
          };
          _0x14d8b6.trigger("move", _0x2a1013);
          _0x1f338f.trigger("move " + _0x14d8b6.id + ":move", _0x2a1013);
        };
        _0x3e0d42.prototype.processOnEnd = function (_0x282990) {
          var _0x571946 = this;
          var _0x1e5062 = _0x571946.options;
          var _0x46541a = _0x571946.manager.getIdentifier(_0x282990);
          var _0x502cd6 = _0x571946.nipples.get(_0x46541a);
          var _0x53b39e = _0x571946.manager.removeIdentifier(_0x502cd6.identifier);
          if (!_0x502cd6) {
            return;
          }
          if (!_0x1e5062.dataOnly) {
            _0x502cd6.hide(function () {
              if (_0x1e5062.mode === "dynamic") {
                _0x502cd6.trigger("removed", _0x502cd6);
                _0x571946.trigger("removed " + _0x502cd6.id + ":removed", _0x502cd6);
                _0x571946.manager.trigger("removed " + _0x502cd6.id + ":removed", _0x502cd6);
                _0x502cd6.destroy();
              }
            });
          }
          clearInterval(_0x571946.pressureIntervals[_0x502cd6.identifier]);
          _0x502cd6.resetDirection();
          _0x502cd6.trigger("end", _0x502cd6);
          _0x571946.trigger("end " + _0x502cd6.id + ":end", _0x502cd6);
          if (_0x571946.ids.indexOf(_0x502cd6.identifier) >= 0) {
            _0x571946.ids.splice(_0x571946.ids.indexOf(_0x502cd6.identifier), 1);
          }
          if (_0x571946.actives.indexOf(_0x502cd6) >= 0) {
            _0x571946.actives.splice(_0x571946.actives.indexOf(_0x502cd6), 1);
          }
          if (/(semi|static)/.test(_0x1e5062.mode)) {
            _0x571946.idles.push(_0x502cd6);
          } else if (_0x571946.nipples.indexOf(_0x502cd6) >= 0) {
            _0x571946.nipples.splice(_0x571946.nipples.indexOf(_0x502cd6), 1);
          }
          _0x571946.manager.unbindDocument();
          if (/(semi|static)/.test(_0x1e5062.mode)) {
            _0x571946.manager.ids[_0x53b39e.id] = _0x53b39e.identifier;
          }
        };
        _0x3e0d42.prototype.onDestroyed = function (_0xbcf77, _0xdd6e6b) {
          var _0x34a39b = this;
          if (_0x34a39b.nipples.indexOf(_0xdd6e6b) >= 0) {
            _0x34a39b.nipples.splice(_0x34a39b.nipples.indexOf(_0xdd6e6b), 1);
          }
          if (_0x34a39b.actives.indexOf(_0xdd6e6b) >= 0) {
            _0x34a39b.actives.splice(_0x34a39b.actives.indexOf(_0xdd6e6b), 1);
          }
          if (_0x34a39b.idles.indexOf(_0xdd6e6b) >= 0) {
            _0x34a39b.idles.splice(_0x34a39b.idles.indexOf(_0xdd6e6b), 1);
          }
          if (_0x34a39b.ids.indexOf(_0xdd6e6b.identifier) >= 0) {
            _0x34a39b.ids.splice(_0x34a39b.ids.indexOf(_0xdd6e6b.identifier), 1);
          }
          _0x34a39b.manager.removeIdentifier(_0xdd6e6b.identifier);
          _0x34a39b.manager.unbindDocument();
        };
        _0x3e0d42.prototype.destroy = function () {
          var _0xfb3847 = this;
          _0xfb3847.unbindEvt(_0xfb3847.options.zone, "start");
          _0xfb3847.nipples.forEach(function (_0x1f2b36) {
            _0x1f2b36.destroy();
          });
          for (var _0x7122d7 in _0xfb3847.pressureIntervals) {
            if (_0xfb3847.pressureIntervals.hasOwnProperty(_0x7122d7)) {
              clearInterval(_0xfb3847.pressureIntervals[_0x7122d7]);
            }
          }
          _0xfb3847.trigger("destroyed", _0xfb3847.nipples);
          _0xfb3847.manager.unbindDocument();
          _0xfb3847.off();
        };
        function _0x2b6c7f(_0x4250b5) {
          var _0x23c480 = this;
          _0x23c480.ids = {};
          _0x23c480.index = 0;
          _0x23c480.collections = [];
          _0x23c480.config(_0x4250b5);
          _0x23c480.prepareCollections();
          var _0x5c4ff1;
          _0x4e6ec9.bindEvt(window, "resize", function (_0x5d855b) {
            clearTimeout(_0x5c4ff1);
            _0x5c4ff1 = setTimeout(function () {
              var _0xc9ec45;
              var _0x409824 = _0x4e6ec9.getScroll();
              _0x23c480.collections.forEach(function (_0x47d5d4) {
                _0x47d5d4.forEach(function (_0x5e64ce) {
                  _0xc9ec45 = _0x5e64ce.el.getBoundingClientRect();
                  _0x5e64ce.position = {
                    x: _0x409824.x + _0xc9ec45.left,
                    y: _0x409824.y + _0xc9ec45.top
                  };
                });
              });
            }, 100);
          });
          return _0x23c480.collections;
        }
        ;
        _0x2b6c7f.prototype = new _0x44dcb2();
        _0x2b6c7f.constructor = _0x2b6c7f;
        _0x2b6c7f.prototype.prepareCollections = function () {
          var _0xb576a8 = this;
          _0xb576a8.collections.create = _0xb576a8.create.bind(_0xb576a8);
          _0xb576a8.collections.on = _0xb576a8.on.bind(_0xb576a8);
          _0xb576a8.collections.off = _0xb576a8.off.bind(_0xb576a8);
          _0xb576a8.collections.destroy = _0xb576a8.destroy.bind(_0xb576a8);
          _0xb576a8.collections.get = function (_0x270213) {
            var _0x5bf390;
            _0xb576a8.collections.every(function (_0x559f8d) {
              if (_0x5bf390 = _0x559f8d.get(_0x270213)) {
                return false;
              }
              return true;
            });
            return _0x5bf390;
          };
        };
        _0x2b6c7f.prototype.create = function (_0x23a81c) {
          return this.createCollection(_0x23a81c);
        };
        _0x2b6c7f.prototype.createCollection = function (_0x5cc0f5) {
          var _0x2a00fa = this;
          var _0x9dab46 = new _0x3e0d42(_0x2a00fa, _0x5cc0f5);
          _0x2a00fa.bindCollection(_0x9dab46);
          _0x2a00fa.collections.push(_0x9dab46);
          return _0x9dab46;
        };
        _0x2b6c7f.prototype.bindCollection = function (_0x1bdb21) {
          var _0x5ed183 = this;
          var _0x1c10fb;
          var _0x49a817 = function _0x506507(_0x4f062f, _0x276c2b) {
            _0x1c10fb = _0x4f062f.type + " " + _0x276c2b.id + ":" + _0x4f062f.type;
            _0x5ed183.trigger(_0x1c10fb, _0x276c2b);
          };
          _0x1bdb21.on("destroyed", _0x5ed183.onDestroyed.bind(_0x5ed183));
          _0x1bdb21.on("shown hidden rested dir plain", _0x49a817);
          _0x1bdb21.on("dir:up dir:right dir:down dir:left", _0x49a817);
          _0x1bdb21.on("plain:up plain:right plain:down plain:left", _0x49a817);
        };
        _0x2b6c7f.prototype.bindDocument = function () {
          var _0x1676d8 = this;
          if (!_0x1676d8.binded) {
            _0x1676d8.bindEvt(document, "move").bindEvt(document, "end");
            _0x1676d8.binded = true;
          }
        };
        _0x2b6c7f.prototype.unbindDocument = function (_0x584a5b) {
          var _0x5bfdf1 = this;
          if (!Object.keys(_0x5bfdf1.ids).length || _0x584a5b === true) {
            _0x5bfdf1.unbindEvt(document, "move").unbindEvt(document, "end");
            _0x5bfdf1.binded = false;
          }
        };
        _0x2b6c7f.prototype.getIdentifier = function (_0x58411f) {
          var _0x2be313;
          if (!_0x58411f) {
            _0x2be313 = this.index;
          } else {
            _0x2be313 = _0x58411f.identifier === undefined ? _0x58411f.pointerId : _0x58411f.identifier;
            if (_0x2be313 === undefined) {
              _0x2be313 = this.latest || 0;
            }
          }
          if (this.ids[_0x2be313] === undefined) {
            this.ids[_0x2be313] = this.index;
            this.index += 1;
          }
          this.latest = _0x2be313;
          return this.ids[_0x2be313];
        };
        _0x2b6c7f.prototype.removeIdentifier = function (_0x45b98e) {
          var _0x363d0c = {};
          for (var _0x582a77 in this.ids) {
            if (this.ids[_0x582a77] === _0x45b98e) {
              _0x363d0c.id = _0x582a77;
              _0x363d0c.identifier = this.ids[_0x582a77];
              delete this.ids[_0x582a77];
              break;
            }
          }
          return _0x363d0c;
        };
        _0x2b6c7f.prototype.onmove = function (_0xc9b901) {
          var _0x2ec8f8 = this;
          _0x2ec8f8.onAny("move", _0xc9b901);
          return false;
        };
        _0x2b6c7f.prototype.onend = function (_0x1cc05f) {
          var _0x4d8bc8 = this;
          _0x4d8bc8.onAny("end", _0x1cc05f);
          return false;
        };
        _0x2b6c7f.prototype.oncancel = function (_0x281285) {
          var _0x413752 = this;
          _0x413752.onAny("end", _0x281285);
          return false;
        };
        _0x2b6c7f.prototype.onAny = function (_0x129e07, _0x35e2e2) {
          var _0x17ba7d = this;
          var _0x17e661;
          var _0x32109e = "processOn" + _0x129e07.charAt(0).toUpperCase() + _0x129e07.slice(1);
          _0x35e2e2 = _0x4e6ec9.prepareEvent(_0x35e2e2);
          var _0x585661 = function _0x43905b(_0x242704, _0x5aca72, _0xc53f9e) {
            if (_0xc53f9e.ids.indexOf(_0x5aca72) >= 0) {
              _0xc53f9e[_0x32109e](_0x242704);
              _0x242704._found_ = true;
            }
          };
          var _0x4538da = function _0x1e5529(_0x10ace8) {
            _0x17e661 = _0x17ba7d.getIdentifier(_0x10ace8);
            _0x4e6ec9.map(_0x17ba7d.collections, _0x585661.bind(null, _0x10ace8, _0x17e661));
            if (!_0x10ace8._found_) {
              _0x17ba7d.removeIdentifier(_0x17e661);
            }
          };
          _0x4e6ec9.map(_0x35e2e2, _0x4538da);
          return false;
        };
        _0x2b6c7f.prototype.destroy = function () {
          var _0x47fadc = this;
          _0x47fadc.unbindDocument(true);
          _0x47fadc.ids = {};
          _0x47fadc.index = 0;
          _0x47fadc.collections.forEach(function (_0x2bddc6) {
            _0x2bddc6.destroy();
          });
          _0x47fadc.off();
        };
        _0x2b6c7f.prototype.onDestroyed = function (_0x5d8fd3, _0x3d6135) {
          var _0x2d52e1 = this;
          if (_0x2d52e1.collections.indexOf(_0x3d6135) < 0) {
            return false;
          }
          _0x2d52e1.collections.splice(_0x2d52e1.collections.indexOf(_0x3d6135), 1);
        };
        var _0x1ff294 = new _0x2b6c7f();
        return {
          create: function _0x5d0ffa(_0x461943) {
            return _0x1ff294.create(_0x461943);
          },
          factory: _0x1ff294
        };
      });
      var _0x13a06a = false;
      var _0x346984 = true;
      var _0x1296c9 = 2;
      var _0x9205d7 = null;
      var _0x2a0429 = 1;
      var _0xc777cf = null;
      var _0xd50fa5 = {};
      var _0x111717 = 0;
      window.createLine = function (_0x18ed25, _0xd72f0b) {
        var _0x4f3af3 = new PIXI.Graphics();
        var _0x21c966 = "#ff0000";
        if (bbs.laserColor && typeof bbs.laserColor === "string") {
          _0x21c966 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
        }
        _0x4f3af3.lineStyle(bbs.laser || 0.2, _0x21c966, 1);
        _0x4f3af3.moveTo(0, 0);
        _0x4f3af3.lineTo(0, 0);
        _0x4f3af3.zIndex = 10001;
        _0x4f3af3.name = "lineHS";
        _0x4f3af3.alpha = 0;
        _0x4f3af3.filters = [new PIXI.filters.BlurFilter(5)];
        _0x18ed25.addChild(_0x4f3af3);
      };
      window.movimentaLinha = function () {
        try {
          if (!_wwc._anApp.dh.ch.Nm) {
            return;
          }
          var _0x1bf4e8 = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
          var _0x2ecfbd = _wwc._anApp.dh.ch.Nm.oc;
          var _0x3440a3 = _0x2ecfbd.position.x;
          var _0x2dded9 = _0x2ecfbd.position.y;
          var _0x107976 = "#ff0000";
          if (bbs.laserColor && typeof bbs.laserColor === "string") {
            _0x107976 = parseInt(bbs.laserColor.toString().replace("#", "0x"));
          }
          _0x1bf4e8.lineStyle(bbs.laser || 0.2, _0x107976, 1);
          _0x1bf4e8.clear();
          _0x1bf4e8.lineStyle(bbs.laser || 0.1, _0x107976, 1);
          _0x1bf4e8.moveTo(0, 0);
          _0x1bf4e8.lineTo(_0x3440a3, _0x2dded9);
          if (bbs.laserActive && _wwc.ismobile) {
            _0x1bf4e8.alpha = 0.3;
          }
          _0x1bf4e8.filters = [new PIXI.filters.BlurFilter(5)];
        } catch (_0x4c4461) {
          console.error(_0x4c4461);
        }
      };
      window.gerarCodigoUnico = function () {
        var _0x1b3d40 = bbs.userId || "";
        var _0xd3f039 = _0x1b3d40.match(/\d/g);
        var _0x2a0710 = (_0xd3f039 || []).reduce(function (_0x2d6916, _0x20bafe) {
          return _0x2d6916 + parseInt(_0x20bafe, 10);
        }, 0);
        var _0x4f291b = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var _0xe48048 = 5;
        var _0x54edc7 = "";
        var _0x27a616 = "";
        for (var _0x4cd9ce = 0; _0x4cd9ce < _0xe48048; _0x4cd9ce++) {
          var _0x5be807 = Math.floor(Math.random() * _0x4f291b.length);
          _0x54edc7 += _0x4f291b.charAt(_0x5be807);
          var _0x229296 = Math.floor(Math.random() * _0x4f291b.length);
          _0x27a616 += _0x4f291b.charAt(_0x229296);
        }
        return "ROOM" + _0x27a616 + "_" + _0x2a0710 + "_" + _0x54edc7;
      };
      var _0x246168 = {
        sao: "wss://nycsam01.wormworld.io",
        dal: "wss://nycsam01.wormworld.io",
        hil: "wss://nycsam01.wormworld.io",
        vin: "wss://nycsam01.wormworld.io",
        fra: "wss://fraceu01.wormworld.io",
        gra: "wss://fraceu01.wormworld.io",
        dxb: "wss://fraceu01.wormworld.io",
        sin: "wss://fraceu01.wormworld.io",
        tok: "wss://fraceu01.wormworld.io",
        local: "wss://nycsam01.wormworld.io"
      };
      var _0x2c191c = {
        fra: [30055, 31770, 30106, 30339, 30106],
        gra: [32054, 31038],
        sin: [31764, 30165, 30703, 31211, 31026, 32677, 31211, 31203],
        tok: [30171, 31091],
        sao: [30208, 31770, 31533, 30208, 30327, 30786, 32609],
        hil: [30162, 30042, 32403, 30296],
        dal: [31091, 31230, 32584, 31750],
        dxb: [32703, 31975, 32650],
        vin: [32368]
      };
      var _0x41d210 = ["sao", "dal", "hil", "vin", "fra", "gra", "sin", "tok", "dxb"];
      var _0x437d37 = {
        loaded: false,
        sprites: {},
        textures: {},
        resources: {}
      };
      $("#mm-params-nickname").attr("maxlength", _0x4ac6e2);
      var _0x3cd95c = {
        ref: [],
        hs: {},
        fxdo: function _0x3d1d8c(_0xd75577) {
          if (bbs.activeSounds2 && bbs.start) {
            if (!_0x3cd95c[_0xd75577].playing()) {
              _0x3cd95c[_0xd75577].play();
            }
          }
        },
        fxAux: function _0x1a02f4(_0x2da9ed, _0x1a0396) {
          if (_0x1a0396 === 1 && !_0x3cd95c.fxStatus.top1) {
            _0x3cd95c.fxStatus.top1 = true;
            _0x3cd95c.fxdo("top1");
          }
          return _0x2da9ed;
        },
        fxStatus: {
          top1: false
        }
      };

      var _0x296091 = {
        headshot: "https://timmapwormate.com/images/hs_2.mp3",
        shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
        speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
        curve: window.URL_CDN + "/sounds/yes_effect.mp3",
        loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
        top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
      };
      window._wwcio = {
        message: null,
        obj: {},
        player: {},
        join: function _0x4b153d() {},
        update: function _0x41fb3a() {},
        leave: function _0x964955() {},
        leaderboardUpdated: function _0x23ec50(_0x5bd6ea, _0x72391f) {
          _0x279fdc(_0x5bd6ea, _0x72391f);
        },
        sendLocation: function _0x50a689() {},
        findFriend: function _0x2f8cd8() {},
        close: function _0x3c3d79() {},
        set: function _0xe5d76d(_0x2409e6) {
          return _0x2409e6;
        },
        friend: null,
        myLocation: {},
        crown: null
      };
      window._wwc = {
        deadPositionMap: function _0xb6d397() {
          var _0xfbf40d = new PIXI.Text("X", _wwc.fontStyleMap());
          _0xfbf40d.position.x = _wwc.memory.positionOfDead.x;
          _0xfbf40d.position.y = _wwc.memory.positionOfDead.y;
          _wwc._anApp.og.af.ng.Tg.addChild(_0xfbf40d);
          var _0x187bf9 = 0;
          var _0xdaf7c6 = setInterval(function () {
            _0x187bf9 = !_0x187bf9;
            _0xfbf40d.alpha = _0x187bf9;
          }, 500);
          var _0x271668 = setTimeout(function () {
            clearInterval(_0xdaf7c6);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(_0xfbf40d);
            _0xfbf40d.destroy();
          }, 60000);
          _wwc.removeDeadPositionMap = function () {
            clearInterval(_0xdaf7c6);
            clearTimeout(_0x271668);
            if (!_wwc._anApp.og.af.ng.Tg) {
              return;
            }
            _wwc._anApp.og.af.ng.Tg.removeChild(_0xfbf40d);
            if (_0xfbf40d && _0xfbf40d.destroy) {
              _0xfbf40d.destroy();
            }
          };
        },
        fontStyleMap: function _0x394a3f(_0xe698e3) {
          return {
            fontFamily: "Arial",
            fontSize: "12px",
            fill: "red",
            align: "center",
            fontWeight: "bold"
          };
        },
        startGame: function _0x282c4b() {
          if (_wwc.memory.positionOfDead) {
            var _0x4e6be8 = _wwc.deadPositionMap();
          }
        },
        stopGame: function _0x568663() {
          var _0x9281a4;
          var _0x5c2c22;
          _wwcio.close();
          _wwcio.findFriendActived = false;
          if (!_wwcio.myLocation) {
            return;
          }
          _wwc.memory.positionOfDead = {
            x: (_0x9281a4 = _wwcio.myLocation) === null || _0x9281a4 === undefined || (_0x9281a4 = _0x9281a4.position) === null || _0x9281a4 === undefined ? undefined : _0x9281a4.x,
            y: (_0x5c2c22 = _wwcio.myLocation) === null || _0x5c2c22 === undefined || (_0x5c2c22 = _0x5c2c22.position) === null || _0x5c2c22 === undefined ? undefined : _0x5c2c22.y
          };
          if (_wwc.removeDeadPositionMap) {
            _wwc.removeDeadPositionMap();
          }
        },
        memory: {},
        mySkin: null,
        customPaths: {
          map: null
        },
        _ass_type: [],
        testSkinMod: function _0x3542eb(_0x56d0e4) {
          var _0x8ce052 = typeof _0x56d0e4 === "string";
          _0x56d0e4 = parseInt(_0x56d0e4);
          if (_0x8ce052 && isNaN(_0x56d0e4)) {
            return false;
          } else {
            return parseInt(_0x56d0e4) >= 399 && parseInt(_0x56d0e4) < 8999;
          }
        },
        testWear: function _0xec0aa3(_0x17002f) {
          var _0x340364 = typeof _0x17002f === "string";
          _0x17002f = parseInt(_0x17002f);
          if (_0x340364 && isNaN(_0x17002f)) {
            return false;
          } else {
            return parseInt(_0x17002f) >= 399 && parseInt(_0x17002f) < 8999;
          }
        },
        isNumberValid: function _0x1f645e(_0x1d08ce) {
          return _0x1d08ce !== "" && _0x1d08ce !== null && _0x1d08ce !== undefined && !isNaN(_0x1d08ce);
        },
        validInputWear: function _0x58c9ea(_0x6f860d) {
          var _0x4b5691 = _wwc.testWear(_0x6f860d);
          var _0x2863e0 = typeof skinId === "string";
          if (!_0x4b5691 && !_0x2863e0) {
            return _0x6f860d;
          }
          return 0;
        },
        validInput: function _0x2dbbfa(_0x44a322) {
          var _0x59925a = _wwc.testSkinMod(_0x44a322);
          var _0x4093a9 = typeof _0x44a322 === "string";
          if (!_0x59925a && !_0x4093a9) {
            return _0x44a322;
          }
          try {
            var _0x218f5a = $("#inputReplaceSkin").val();
            return encodeURI(_wwc.isNumberValid(_0x218f5a) ? _0x218f5a : bbs.idReplaceSkin || 35);
          } catch (_0x225137) {
            return encodeURI(35);
          }
        },
        fullscreen: null,
        joystick: function _0x56689b(_0x38dc9e) {
          var _0x5d35fc = {
            checked: true,
            color: "red",
            mode: "dynamic",
            positionMode: "L",
            size: 100,
            pxy: 100
          };
          return _0x5d35fc;
        },
        load_con: function _0x78d1a4() {
          $(".selecionar-sala-v2").click(function (_0x404c50) {
            _0x404c50.preventDefault();
            var _0x139618 = $(this).attr("data-con") || bbs.con;
            var _0x28595c = $(this).attr("data-type");
            w2c2020.addRoom($(this).attr("data-room"));
            _0x3c7638.dh.Zp = function (_0x1b5f64, _0x126f02, _0x1eee57) {
              bbs.con = _0x1eee57 ? _0x1b5f64 : _0x139618 || _0x1b5f64;
              _wwc.Zp(bbs.con, _0x126f02);
            };
            _0x3c7638.Pn();
          });
        },
        fnSaveGame: function _0x3a6cf5() {
          var _0x447cef = $("#saveGame");
          _0x447cef.prop("checked", bbs.saveGame);
          _0x447cef.change(function () {
            if (!this.checked) {
              var _0xee5654 = confirm("PORTUGUES:\nAtenÃ§Ã£o: os registros seram apagados; Confirma?\n\nEnglish:\nAttention: the records will be deleted; Confirm?\n\nArabic:\nØªÙ†Ø¨ÙŠÙ‡: Ø³ÙŠØªÙ… Ø­Ø°Ù  Ø§Ù„Ø³Ø¬Ù„Ø§Øª Ø› ØªØ¤ÙƒØ¯ØŸ");
              $(this).prop("checked", !_0xee5654);
              if (!this.checked) {
                _wwc.fnSetCounts("zerar");
              }
            }
            bbs.saveGame = this.checked;
            w2c2020.hsTotal.alpha = this.checked ? 1 : 0;
            w2c2020.killTotal.alpha = this.checked ? 1 : 0;
            localStorage.setItem("wwcSaveGame", this.checked ? JSON.stringify(bbs) : null);
          });
        },
        fnSetCounts: function _0x5e6d90(_0x145509, _0x57fedc) {
          var _0x465c91 = function _0x771072(_0x55bf8b, _0x4d022f, _0x4ac345, _0x525b1f) {
            _wwc.setCountGame(_0x55bf8b, _0x4d022f, _0x4ac345, _0x525b1f);
          };
          if (_0x145509 === "count") {
            bbs.kill = (bbs.kill || 0) + (_0x57fedc ? 0 : 1);
            bbs.headshot = (bbs.headshot || 0) + (_0x57fedc ? 1 : 0);
            bbs.HOL = bbs.headshot > bbs.HOL ? bbs.headshot : bbs.HOL;
            bbs.tkill = bbs.tkill + (_0x57fedc ? 0 : 1);
            bbs.theadshot = bbs.theadshot + (_0x57fedc ? 1 : 0);
          }
          if (_0x145509 === "open") {
            bbs.kill = 0;
            bbs.headshot = 0;
            if (bbs.saveGame) {}
          }
          if (_0x145509 === "close") {
            if (bbs.saveGame) {
              bbs.died = (bbs.died || 0) + 1;
            } else {
              _wwc.fnSetCounts("zerar");
            }
          }
          if (_0x145509 === "zerar") {
            bbs.kill = 0;
            bbs.tkill = 0;
            bbs.headshot = 0;
            bbs.theadshot = 0;
            bbs.died = 0;
          }
          _0x465c91(bbs.kill, bbs.headshot, bbs.tkill, bbs.theadshot);
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        },
        setCountGame: function _0x20177e(_0xf96092, _0x5a18f9, _0x2b94fd, _0x1980db) {
          if (!bbs.saveGame) {
            w2c2020.hsTotal.alpha = 0;
            w2c2020.killTotal.alpha = 0;
          }
          w2c2020.hs.text = _0x5a18f9;
          w2c2020.hsTotal.text = _0x1980db;
          w2c2020.kill.text = _0xf96092;
          w2c2020.killTotal.text = _0x2b94fd;
        },
        ismobile: _0x4d00ba(),
        Zp: undefined
      };
      window.bbs = {
        version: 0,
        headshot: 0,
        kill: 0,
        theadshot: 0,
        tkill: 0,
        died: 0,
        start: 0,
        HOL: 0,
        tk: null,
        country: null,
        finish: 0,
        saveGame: false,
        idReplaceSkin: 34,
        mobile: false,
        joystick: null,
        configJoystick: {
          buttons: {
            respawn: {
              label: "RESPAWN",
              labelAbbreviation: "RP",
              active: false,
              action: "mbf.mbfass6()"
            },
            lobby: {
              label: "LOBBY",
              labelAbbreviation: "L",
              active: true,
              action: "mbf.mbfass5()"
            },
            rotate: {
              label: "ROTATE",
              labelAbbreviation: "A",
              active: true,
              action: "mbf.mbfass4()"
            },
            snail: {
              label: "SNAIL",
              labelAbbreviation: "B",
              active: true,
              action: "mbf.mbfass3()"
            },
            search: {
              label: "SEARCH",
              labelAbbreviation: "SE",
              active: false,
              action: "mbf.mbfass0()"
            },
            swap: {
              label: "SWAP",
              labelAbbreviation: "SW",
              active: false,
              action: "mbf.mbf_cambiar()"
            },
            zoomplus: {
              label: "Z+",
              labelAbbreviation: "+",
              active: true,
              action: "mbf.mbfass1()"
            },
            zoomminus: {
              label: "Z-",
              labelAbbreviation: "-",
              active: true,
              action: "mbf.mbfass2()"
            },
            zoom: {
              label: "x1",
              labelAbbreviation: "x1",
              active: true,
              action: "mbf.mbfass7()"
            }
          },
          typeZoom: ["btn", "range"],
          typeCurrent: "btn",
          typeName: ["all", "abb"],
          typeCurrentName: "abb"
        },
        customJoystick: null,
        display: {
          customClock: null,
          clock: {
            x: 60,
            y: 60
          },
          top: {
            x: 225,
            y: 1
          },
          default: false,
          custom: false,
          m: {
            x: 60,
            y: 60
          },
          r: {
            x: 225,
            y: 1
          },
          ms: false
        },
        PropertyManager: {},
        acs: true,
        lr: false,
        showTophs: true,
        showRechs: true,
        con: null,
        params: "",
        arrow: true,
        activeBadLang: false,
        activeSounds2: true,
        activeZoom: false,
        activeZoomMobile: false,
        top10Show: [],
        background: null,
        backgroundIsCustom: false,
        nickname: null,
        code: null,
        configZoom: {
          limitDown: 0.25,
          step: 0.25,
          closeUp: 0.5,
          closeDown: 1
        },
        laserActive: false,
        laserColor: 16711680,
        laser: 0.1,
        displayFriends: {
          x: -10,
          y: 315,
          rotation: 0
        },
        enemyNameColor: null,
        enemyNameFontSize: null,
        showSkinLines: true,
        novidadewormworld: 0
      };
      var _0x3e0616 = localStorage.getItem("wwc_version");
      var _0x130194 = localStorage.getItem("wwcSaveGame");
      var _0x102812 = localStorage.getItem("wwc_config");
      _0x130194 &&= JSON.parse(_0x130194);
      for (var _0x54be18 in _0x130194) {
        switch (_0x54be18) {
          case "configJoystick":
            if (!_0x130194[_0x54be18]) {
              break;
            }
            bbs[_0x54be18] = _0x130194[_0x54be18];
            for (var _0x574811 in _0x130194[_0x54be18].buttons) {
              bbs[_0x54be18].buttons[_0x574811] = _0x130194[_0x54be18].buttons[_0x574811];
            }
            for (var _0x81e37d in _0x130194[_0x54be18]) {
              bbs[_0x54be18][_0x81e37d] = _0x130194[_0x54be18][_0x81e37d];
            }
            break;
          case "joystick":
            bbs[_0x54be18] = _wwc.joystick();
            for (var _0x456ddc in _0x130194[_0x54be18]) {
              bbs[_0x54be18][_0x456ddc] = _0x130194[_0x54be18][_0x456ddc];
            }
            break;
          case "display":
            for (var _0x4d3d48 in _0x130194[_0x54be18]) {
              bbs[_0x54be18][_0x4d3d48] = _0x130194[_0x54be18][_0x4d3d48];
            }
            break;
          default:
            bbs[_0x54be18] = _0x130194[_0x54be18];
            break;
        }
      }
      if (!bbs.version || bbs.version !== _0x1296c9) {
        bbs.version = _0x1296c9;
        bbs.joystick = _wwc.joystick();
      }
      bbs.loading = true;
      window.respawnFn = function () {
        _0x3c7638.dh.Cn = 0;
        if (_0x3c7638.dh.mq) {
          _0x3c7638.dh.mq.close();
        }
        _0x3c7638.dh.mq = null;
        _0x3c7638.dh.Zp = function (_0x125674, _0x1cb4fa) {
          _wwc.Zp(bbs.con || _0x125674, _0x1cb4fa);
        };
        _0x3c7638.Pn();
      };
      window.lobbyFn = function () {
        _0x3c7638.dh.Cn = 0;
        if (_0x3c7638.dh.mq) {
          _0x3c7638.dh.mq.close();
        }
        _0x3c7638.dh.mq = null;
        _0x3c7638.dh.Np();
        _0x129b06();
      };
      $("<button type=\"button\" id=\"mm-wwc\" style=\"float: right;line-height: 48px;width: 120px;background: #ffffff33;color: #FFF;font-weight: bold;margin-right: 1px; top: 1px;border-radius: 7px; cursor: pointer;\">Settings-xo</button>").insertAfter("#mm-store");
      $(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
      $(".wear-view-cont").append("<div id=\"idWearViewCont\"></div>");
      var _0x4b3be6 = "display:none;position:relative;background:#FFF;padding:15px;max-width:680px;margin:10px auto;";
      if (_wwc.ismobile) {
        _0x4b3be6 = "display:none;position:relative;\n                  background:#FFF;padding:20px;\n                  width:calc(100vw - var(--scrollbar-width));\n                  height:100vh;";
      }
      $("body").append("<div id=\"wwc-set-view\" class=\"base-popup-view\" style=\"" + _0x4b3be6 + "\"></div>");
      var _0x1ff84a = "ass";
      window.mbf = {};
      var _0x33a647 = function _0x42b7a7(_0x1cfb1c) {
        if (bbs.shiftKey) {
          return;
        }
        var _0xb8669d = 30;
        var _0x82bb1c = 0;
        var _0x2cd868 = false;
        function _0x159e09() {
          var _0x191f33 = parseFloat(_0x3c7638.og.af.Bn);
          _0x191f33 = (_0x191f33 - 0.06) % (Math.PI * 2);
          if (_0x191f33 < 0) {
            _0x191f33 += Math.PI * 2;
          }
          _0x3c7638.og.af.Bn = _0x191f33.toFixed(2);
        }
        function _0x22c6cd(_0x3f6cd0) {
          _0x13a06a = setInterval(function () {
            if (_0x3f6cd0 === 1) {
              _0x82bb1c = _0x2cd868 ? _0x82bb1c - 1 : _0x82bb1c + 1;
              if (_0x82bb1c % 80 === 0 && !_0x2cd868) {
                _0xb8669d = _0xb8669d + 18;
                clearInterval(_0x13a06a);
                _0x22c6cd(1);
              }
            }
            _0x159e09();
          }, _0xb8669d);
        }
        if ((_0x1cfb1c == 7 || _0x1cfb1c.key == "7") && _0x13a06a === null) {
          _0x3c7638.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
          _0x22c6cd(1);
          return;
        }
        if ((_0x1cfb1c == 8 || _0x1cfb1c.key == "8") && _0x13a06a === null) {
          _0x3c7638.og.af.ng.Eb.removeEventListener("pointermove", mbf.onmovepoint, true);
          _0x22c6cd(2);
          return;
        }
        if (_0x13a06a !== null) {
          clearInterval(_0x13a06a);
          _0x3c7638.og.af.ng.Eb.addEventListener("pointermove", mbf.onmovepoint, true);
          _0x13a06a = null;
        }
      };
      mbf.mbfass0 = function () {
        _wwcio.findFriend();
      };
      mbf.mbfass1 = function (_0x423dfc = true) {
        var _0x2f1d18 = _0xc777cf ? 100 : 400;
        var _0x327c41 = 0.5;
        if (_0x423dfc) {
          if (_0x2a0429 < _0x2f1d18) {
            _0x2a0429 *= 1.25;
            if (_0x2a0429 > _0x2f1d18) {
              _0x2a0429 = _0x2f1d18;
            }
          }
        } else if (_0x2a0429 > _0x327c41) {
          if (_0x2a0429 > 5) {
            _0x2a0429 /= 1.25;
          } else {
            _0x2a0429 *= 0.75;
          }
          if (_0x2a0429 < _0x327c41) {
            _0x2a0429 = _0x327c41;
          }
        }
        w2c2020.zoom.text = "x" + _0x2a0429.toFixed(2);
      };
      mbf.mbfass2 = function () {
        if (_0x2a0429 > 0.5) {
          if (_0x2a0429 > 5) {
            _0x2a0429 /= 1.25;
          } else {
            _0x2a0429 *= 0.75;
          }
          if (_0x2a0429 < 0.5) {
            _0x2a0429 = 0.5;
          }
        }
        w2c2020.zoom.text = "x" + _0x2a0429.toFixed(2);
      };
      mbf.mbfass3 = function () {
        if (mbf.mbf_rotate) {
          _0x33a647(8);
          $("#mbf_rotate").css("background-color", "#000");
        } else {
          _0x33a647(_0x13a06a ? 0 : 8);
        }
        if (_0x13a06a) {
          mbf.mbf_snail = true;
          $("#mbf_snail").css("background-color", "#156ab3");
        } else {
          mbf.mbf_snail = false;
          $("#mbf_snail").css("background-color", "#000");
        }
      };
      mbf.mbfass4 = function () {
        if (mbf.mbf_snail) {
          $("#mbf_snail").css("background-color", "#000");
          _0x33a647(8);
        } else {
          _0x33a647(_0x13a06a ? 0 : 8);
        }
        if (_0x13a06a) {
          mbf.mbf_rotate = true;
          $("#mbf_rotate").css("background-color", "#156ab3");
        } else {
          mbf.mbf_rotate = false;
          $("#mbf_rotate").css("background-color", "#000");
        }
      };
      mbf.mbfass5 = function () {
        window.location.reload();
      };
      mbf.mbfass6 = function () {
        respawnFn();
      };
      mbf.mbfass7 = function () {
        _0x2a0429 = 1;
        w2c2020.zoom.text = "x1";
      };
      mbf.mbfass9 = function (_0x2125c0) {
        var _0x3df755 = _0xc777cf ? 100 : 2;
        if (_0x2125c0.value <= _0x3df755) {
          _0x2a0429 = _0x2125c0.value;
          w2c2020.zoom.text = "x" + _0x2125c0.value;
        }
      };
      mbf.mbf_cambiar_origin = null;
      mbf.mbf_cambiar_current = 35;
      mbf.mbf_cambiar_seq = 35;
      mbf.mbf_cambiar_add = function (_0x37ab9c, _0x4a5080) {
        if (!bbs.cambiar) {
          bbs.cambiar = {};
        }
        if (bbs.cambiar[_0x37ab9c]) {
          alert("Skin already exists in the list of skins to be");
          return;
        }
        bbs.cambiar[_0x37ab9c] = _0x4a5080 || "Skin " + _0x37ab9c;
        alert("Skin added to the list of skins to be");
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
        console.log(bbs.cambiar);
      };
      mbf.mbf_cambiar = function () {
        if (mbf.mbf_cambiar_origin === null) {
          mbf.mbf_cambiar_origin = _wwc._anApp.dh.ch.Eh.Hh;
        }
        var _0x3bd68b = Object.keys(bbs.cambiar);
        if (mbf.mbf_cambiar_seq >= _0x3bd68b.length) {
          mbf.mbf_cambiar_seq = 0;
        }
        for (var _0x560c60 = 0; _0x560c60 < _0x3bd68b.length; _0x560c60++) {
          mbf.mbf_cambiar_current = _0x3bd68b[_0x560c60];
          if (_0x560c60 === mbf.mbf_cambiar_seq) {
            mbf.mbf_cambiar_current = _0x3bd68b[_0x560c60];
            break;
          }
        }
        mbf.mbf_cambiar_seq = mbf.mbf_cambiar_seq + 1;
        _wwc._anApp.dh.ch.Eh.Hh = mbf.mbf_cambiar_current;
        _wwc._anApp.dh.ch.Sm();
      };
      if (bbs.activeZoom) {
        window.onwheel = function (_0xdbe2ae) {
          if (_0xdbe2ae.deltaY < 0) {
            mbf.mbfass1();
          } else {
            mbf.mbfass2();
          }
        };
      }
      var _0x6236b5 = $("#idReplaceSkin");
      var _0x15aeed = function () {
        var _0x7de56 = _0xbb0189(_0x1e8476().mark(function _0x2cfc67(_0x7247c3, _0x34dae9) {
          return _0x1e8476().wrap(function _0x133721(_0x24fb4f) {
            while (1) {
              switch (_0x24fb4f.prev = _0x24fb4f.next) {
                case 0:
                  if (!_0x34dae9) {
                    _0x24fb4f.next = 2;
                    break;
                  }
                  return _0x24fb4f.abrupt("return");
                case 2:
                  if (!_0x7247c3) {
                    _0x7247c3 = _0x3c7638.u.wi;
                  }
                  console.log(_0x7247c3);
                  bbs.userId = _0x7247c3.userId;
                  _0x24fb4f.next = 7;
                  return fetch(URLSERV_WORMWORLD + "/load-page", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": bbs.tk,
                      "x-uid": vLS4d59d9b6cc24740ef3ab
                    },
                    method: "POST",
                    body: JSON.stringify(_0x7247c3)
                  }).then(function (_0x5d8ca6) {
                    _0x5d8ca6.text().then(function (_0x50fef9) {
                      $(".description-text").html(_0x50fef9);
                      if (_0x7247c3.type === "error") {
                        $(".description-text").html(_0x7247c3.msg);
                      }
                    });
                  }).catch(function () {
                    $(".description-text").html("Problema de conexão.");
                  });
                case 7:
                  _0x24fb4f.next = 9;
                  return fetch(URLSERV_WORMWORLD + "/set-worm-world", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": bbs.tk,
                      "x-uid": vLS4d59d9b6cc24740ef3ab
                    },
                    method: "POST",
                    body: JSON.stringify({
                      userId: bbs.userId
                    })
                  }).then(function (_0x163021) {
                    _0x163021.text().then(function (_0x26651b) {
                      $("#wwc-set-view").html(_0x26651b);
                      $("#mm-wwc").click(function (_0x45bb89) {
                        $("#wwc-set-view").css("display", "block");
                      });
                      _wwc.load_con();
                      _wwc.fnSaveGame();
                      _wwc.fnSetCounts("start");
                      $("#backgroundArena").change(function () {
                        var _0x56ff2a = $(this).val();
                        bbs.background = _0x56ff2a;
                        bbs.backgroundUri = null;
                        _0x3c7638.xe._g = _0xb65a12.bgg(_0x56ff2a);
                        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
                        _wwc._anApp.og.af.ng.Lg.$g(_0x3c7638.xe._g);
                        alert("Background changed!");
                      });
                      var _0x26e598 = _wwc.isNumberValid(bbs.idReplaceSkin);
                      if (_0x26e598) {
                        $("#inputReplaceSkin").val(bbs.idReplaceSkin);
                      } else {
                        var _0x29ba95 = $("#inputReplaceSkin").val();
                        _0x26e598 = _wwc.isNumberValid(_0x29ba95);
                        bbs.idReplaceSkin = _0x26e598 ? _0x29ba95 : 33;
                      }
                      if (!bbs.joystick) {
                        $("#joystick_checked").val(true);
                        $("#joystick_color").val("red");
                        $("#joystick_mode").val("dynamic");
                        $("#joystick_position").val("L");
                        $("#joystick_size").val(100);
                        $("#joystick_pxy").val(100);
                      } else {
                        $("#joystick_checked").prop("checked", bbs.joystick.checked);
                        $("#joystick_color").val(bbs.joystick.color);
                        $("#joystick_mode").val(bbs.joystick.mode);
                        $("#joystick_position").val(bbs.joystick.positionMode);
                        $("#joystick_size").val(bbs.joystick.size);
                        $("#joystick_pxy").val(bbs.joystick.pxy);
                      }
                    });
                  });
                case 9:
                case "end":
                  return _0x24fb4f.stop();
              }
            }
          }, _0x2cfc67);
        }));
        return function _0x94a594(_0x2f4fd, _0x1494dc) {
          return _0x7de56.apply(this, arguments);
        };
      }();
      var _0x5d5bc0 = function _0x12986a(_0x3e4909) {
        if (bbs.PropertyManager) {
          if (bbs.PropertyManager.lj) {
            _0x3e4909.skinId = bbs.PropertyManager.lj;
          }
          if (bbs.PropertyManager.mj) {
            _0x3e4909.eyesId = bbs.PropertyManager.mj;
          }
          if (bbs.PropertyManager.nj) {
            _0x3e4909.mouthId = bbs.PropertyManager.nj;
          }
          if (bbs.PropertyManager.pj) {
            _0x3e4909.glassesId = bbs.PropertyManager.pj;
          }
          if (bbs.PropertyManager.oj) {
            _0x3e4909.hatId = bbs.PropertyManager.oj;
          }
        }
      };
      var _0x43a937 = function () {
        var _0x4a6c56 = _0xbb0189(_0x1e8476().mark(function _0x1f6c68(_0x45bdfe, _0x4d3153) {
          var _0x40abc2;
          var _0x1415d8;
          var _0x549ab4;
          var _0x5264e0;
          var _0x4e5db7;
          return _0x1e8476().wrap(function _0x20a305(_0x28272f) {
            while (1) {
              switch (_0x28272f.prev = _0x28272f.next) {
                case 0:
                  $("#mm-params-nickname").prop("maxlength", _0x4ac6e2);
                  _0x28272f.next = 3;
                  return fetch(URLSERV_WORMWORLD + "volte1234.s0jj/registry.json", {
                    headers: {
                      "Content-Type": "application/json",
                      "x-access-token": bbs.tk,
                      "x-wuid": bbs.wuid,
                      "x-uid": vLS4d59d9b6cc24740ef3ab
                    },
                    method: "POST",
                    body: JSON.stringify(_0x45bdfe)
                  }).then(function () {
                    var _0x524d85 = _0xbb0189(_0x1e8476().mark(function _0x4c5af6(_0x3bbd81) {
                      return _0x1e8476().wrap(function _0x28857a(_0x4ef44a) {
                        while (1) {
                          switch (_0x4ef44a.prev = _0x4ef44a.next) {
                            case 0:
                              _0x4ef44a.next = 2;
                              return _0x3bbd81.json();
                            case 2:
                              return _0x4ef44a.abrupt("return", _0x4ef44a.sent);
                            case 3:
                            case "end":
                              return _0x4ef44a.stop();
                          }
                        }
                      }, _0x4c5af6);
                    }));
                    return function (_0x6f085a) {
                      return _0x524d85.apply(this, arguments);
                    };
                  }()).catch(function () {
                    $(".description-text").html("Problema de conexão.");
                  });
                case 3:
                  _0x40abc2 = _0x28272f.sent;
                  if (!_0x40abc2) {
                    _0x40abc2 = {};
                    _0x40abc2.tk = 1;
                  }
                  bbs.tk = _0x40abc2.tk;
                  _0xc777cf = _0x40abc2.customer;
                  _0x45bdfe.propertyList = _0x40abc2.propertyList;
                  _0x4d3153(_0x45bdfe);
                  _0x15aeed(_0x40abc2);
                  _wwc._anApp = _0x3c7638;
                  _wwc._tx = function (_0x34fdab) {
                    Object.keys(_0x34fdab).forEach(function (_0x595d7a) {
                      if (_0x34fdab[_0x595d7a].Yi) {
                        _0x34fdab[_0x595d7a].fj.nh.Cc.xc.width = _0x34fdab[_0x595d7a].fj.nh.Cc.xc.width + 2;
                        _0x34fdab[_0x595d7a].fj.nh.Cc.xc.height = _0x34fdab[_0x595d7a].fj.nh.Cc.xc.height + 2;
                      }
                    });
                  };
                  _wwc.Zp = _0x3c7638.dh.Zp;
                  _0x3c7638.dh.Dq = function (_0x316157, _0x2af5a0, _0x360d3a = 0) {
                    try {
                      fetch(URLSERV_WORMWORLD + "/game-connect", {
                        headers: {
                          "Content-Type": "application/json",
                          "x-access-token": bbs.tk,
                          "x-uid": vLS4d59d9b6cc24740ef3ab
                        },
                        method: "POST",
                        body: JSON.stringify({
                          userId: _0x3c7638.Ij.Rk.userId,
                          nickname: bbs.nickname,
                          code: bbs.code,
                          teamRoom: _wwcio.player.teamRoom
                        })
                      }).then(function () {
                        var _0x116cfc = _0xbb0189(_0x1e8476().mark(function _0x5e34ac(_0x21f262) {
                          var _0x23989d;
                          var _0x1c9099;
                          return _0x1e8476().wrap(function _0x9f4830(_0x822c34) {
                            while (1) {
                              switch (_0x822c34.prev = _0x822c34.next) {
                                case 0:
                                  _0x822c34.next = 2;
                                  return _0x21f262.json();
                                case 2:
                                  _0x23989d = _0x822c34.sent;
                                  _0x1c9099 = _0x3c7638.dh;
                                  if (!_0x23989d.connected) {
                                    _0x822c34.next = 8;
                                    break;
                                  }
                                  alert("Update Page\n\nWarning:We detected an invalid action. This may have occurred because your access token was updated, but the game was not properly restarted. Please refresh the page to continue playing safely. If the problem persists, make sure you are not using external modifications or unauthorized extensions.");
                                  _0x1c9099.Cq();
                                  return _0x822c34.abrupt("return");
                                case 8:
                                  _0x1c9099.mq = new WebSocket(_0x316157);
                                  _0x1c9099.mq.binaryType = "arraybuffer";
                                  _0x2a0429 = _wwc.ismobile ? 1.25 : 1;
                                  bbs.start = new Date();
                                  bbs.con = _0x316157;
                                  _0xd50fa5 = {};
                                  _0xb65a12.setIntervalRun = setInterval(function () {
                                    _0xb65a12.ps3();
                                  }, 16);
                                  _0x1c9099.mq.onopen = function () {
                                    _0x30d494();
                                    _wwc.fnSetCounts("open");
                                    _0x2af5a0();
                                  };
                                  _0x1c9099.mq.onclose = function () {
                                    _0x129b06();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(_0xb65a12.setIntervalRun);
                                    _0xb65a12.loadBg = false;
                                    bbs.start = 0;
                                  };
                                  _0x1c9099.mq.onerror = function (_0x55993e) {
                                    _0x129b06();
                                    _wwc.fnSetCounts("close");
                                    _wwc.stopGame();
                                    clearInterval(_0xb65a12.setIntervalRun);
                                    _0xb65a12.loadBg = false;
                                    bbs.start = 0;
                                    if (_0x360d3a > 4) {
                                      _0x1c9099.Cq();
                                    } else {
                                      setTimeout(function () {
                                        _0x360d3a++;
                                        console.log("Reconnect server");
                                        _0x3c7638.dh.Dq(bbs.con, _0x2af5a0, _0x360d3a);
                                      }, 2000);
                                    }
                                  };
                                  _0x1c9099.mq.onmessage = function (_0x3b17a5) {
                                    _0x1c9099.Kp.Ph(_0x3b17a5.data);
                                  };
                                case 19:
                                case "end":
                                  return _0x822c34.stop();
                              }
                            }
                          }, _0x5e34ac);
                        }));
                        return function (_0x2770e2) {
                          return _0x116cfc.apply(this, arguments);
                        };
                      }());
                    } catch (_0x1152c5) {
                      console.log(_0x1152c5);
                      i.Cq();
                    }
                  };
                  _0x3c7638.dh.Kp.Yh = function (_0x25ea78, _0x69bae5) {
                    _0x129b06();
                    this.dh.Oi();
                  };
                  _0x3c7638.og.af.ng.Ug.Uf = function (_0x3b66cc) {
                    var _0x370615 = function () {
                      return _0xb65a12.$F.M(_0xb65a12.POGL.Sprite, function () {
                        _0xb65a12.POGL.Sprite.call(this);
                        this.sh = 0;
                      });
                    }();
                    for (var _0x4b65c6 in this.rh) {
                      if (_0x3b66cc[_0x4b65c6] == null || !_0x3b66cc[_0x4b65c6].hd) {
                        _0xb65a12.$F.U(this.rh[_0x4b65c6]);
                        delete this.rh[_0x4b65c6];
                      }
                    }
                    var _0x4d5d48 = 0;
                    var _0x56ba81 = 1;
                    if (bbs.display.custom) {
                      _0x56ba81 = window.innerWidth;
                    }
                    for (var _0x5e47ca in _0x3b66cc) {
                      var _0x22b1e5 = _0x3b66cc[_0x5e47ca];
                      if (_0x22b1e5.hd) {
                        var _0x449e4e = this.rh[_0x5e47ca];
                        if (!_0x449e4e) {
                          var _0x208faa = _0x3c7638.Lc.Ub().pb(_0x22b1e5.nd).ub;
                          _0x449e4e = new _0x370615();
                          _0x449e4e.texture = _0x208faa.Ea();
                          _0x449e4e.width = 40;
                          _0x449e4e.height = 40;
                          this.rh[_0x5e47ca] = _0x449e4e;
                          this.addChild(_0x449e4e);
                        }
                        w2c2020.setPtc(this, _0x5e47ca, _0x22b1e5.od);
                        _0x449e4e.sh = _0x22b1e5.od;
                        _0x449e4e.position.x = _0x4d5d48 + (bbs.display.custom ? bbs.display.clock.x * _0x56ba81 : 0);
                        _0x449e4e.position.y = bbs.display.custom ? bbs.display.clock.y : _0x449e4e.position.y;
                        _0x4d5d48 += 40;
                      }
                    }
                  };
                  if (!bbs.display.customClock) {
                    _0x3c7638.og.af.ng.Tg.addChild(w2c2020.clock);
                  }
                  _0x3c7638.og.af.ng.Tg.addChild(w2c2020.containerCountInfo);
                  _0x3c7638.og.af.ng.Tg.addChild(w2c2020.containerHstop);
                  w2c2020.containerHstop.alpha = bbs.showTophs ? 1 : 0;
                  _0x3c7638.og.af.ng.Tg.addChild(w2c2020.containerHsRec);
                  w2c2020.containerHsRec.alpha = bbs.showRechs ? 1 : 0;
                  _0x3c7638.og.af.ng.Tg.addChild(w2c2020.labelRoom);
                  w2c2020.ptc = {};
                  _0x1415d8 = [30, 30, 30, 80, 30, 20, 30];
                  for (_0x549ab4 = 0; _0x549ab4 < _0x1415d8.length; _0x549ab4++) {
                    _0x5264e0 = "clock_ad" + _0x549ab4;
                    w2c2020.ptc[_0x5264e0] = new PIXI.Text(_0x1415d8[_0x549ab4], w2c2020.fontStyle["tfc" + _0x549ab4]);
                    w2c2020.ptc[_0x5264e0].y = 61;
                  }
                  w2c2020.setPtc = function (_0x148bce, _0x47fcbb, _0x2825d4) {
                    var _0x6ee462 = _0x1415d8[_0x47fcbb] - parseInt((_0x2825d4 == 0.99 ? 1 : _0x2825d4) * _0x1415d8[_0x47fcbb] / 1);
                    var _0x2fd571 = "clock_ad" + _0x47fcbb;
                    _0x148bce.rh[_0x47fcbb].addChild(w2c2020.ptc[_0x2fd571]);
                    if (w2c2020.ptc[_0x2fd571]) {
                      w2c2020.ptc[_0x2fd571].x = _0x6ee462 >= 100 ? 11 : _0x6ee462 >= 10 ? 18 : 26;
                      w2c2020.ptc[_0x2fd571].text = _0x6ee462;
                    }
                  };
                  _0x4e5db7 = _0x3c7638.og.af.ng.Eb;
                  mbf.onmovepoint = function (_0xc5b648) {
                    if (_0xc5b648.pointerType === "touch" && !_0xc5b648.isPrimary) {
                      return;
                    }
                    if (_0xc5b648.clientX !== undefined) {
                      _0x3c7638.og.af.Bn = Math.atan2(_0xc5b648.clientY - _0x4e5db7.offsetHeight * 0.5, _0xc5b648.clientX - _0x4e5db7.offsetWidth * 0.5);
                    } else {
                      _0x3c7638.og.af.Bn = Math.atan2(_0xc5b648.pageY - _0x4e5db7.offsetHeight * 0.5, _0xc5b648.pageX - _0x4e5db7.offsetWidth * 0.5);
                    }
                  };
                  mbf.onRun = function (_0x29308e) {
                    if (_0x29308e && _0x29308e.pointerType === "touch") {
                      return;
                    }
                    _0x3c7638.og.af.An = true;
                  };
                  mbf.onStop = function (_0xdbac3b) {
                    if (_0xdbac3b && _0xdbac3b.pointerType === "touch") {
                      return;
                    }
                    _0x3c7638.og.af.An = false;
                  };
                  _0x4e5db7.addEventListener("pointermove", mbf.onmovepoint, true);
                  _0x4e5db7.addEventListener("pointerdown", mbf.onRun, true);
                  _0x4e5db7.addEventListener("pointerup", mbf.onStop, true);
                  if (_wwc.ismobile) {
                    _0x4e5db7.addEventListener("touchstart", function (_0x1d14d5) {
                      if (_0x1d14d5 = _0x1d14d5 || window.event) {
                        _0x3c7638.og.af.An = _0x1d14d5.touches.length >= 2;
                      }
                      _0x1d14d5.preventDefault();
                    }, true);
                    _0x4e5db7.addEventListener("touchend", function (_0x99e125) {
                      if (_0x99e125 = _0x99e125 || window.event) {
                        _0x3c7638.og.af.An = _0x99e125.touches.length >= 2;
                      }
                    }, true);
                  }
                case 35:
                case "end":
                  return _0x28272f.stop();
              }
            }
          }, _0x1f6c68);
        }));
        return function _0x40beb1(_0x51fb5f, _0x1eab36) {
          return _0x4a6c56.apply(this, arguments);
        };
      }();
      function _0x1b2cbd() {
        var _0x10a13b = document.createElement("div");
        _0x10a13b.style.position = "fixed";
        _0x10a13b.style.top = "0";
        _0x10a13b.style.height = "100%";
        _0x10a13b.style.width = "100%";
        _0x10a13b.style.zIndex = "1000";
        _0x10a13b.id = "zone_joystick";
        document.body.appendChild(_0x10a13b);
      }
      function _0x41832e() {
        var _0x12dc77 = document.getElementById("zone_joystick");
        if (_0x12dc77) {
          _0x12dc77.remove();
        }
      }
      var _0x129b06 = function _0x374806() {
        if (_0x9205d7) {
          $("#wwc-mobile-box").remove();
          $("#wwc-mobile-box-slider").remove();
          _0x9205d7.destroy();
        }
        _0x41832e();
      };
      var _0x30d494 = function _0x46f991() {
        try {
          var _0x46c9e2 = function _0x548302() {
            _0x9205d7.on("start end", function (_0x1c4ca1, _0xcab939) {}).on("move", function (_0x36e23e, _0x4fb79d) {
              var _0x249aff = _0x4fb79d.angle.radian <= Math.PI ? _0x4fb79d.angle.radian * -1 : Math.PI - (_0x4fb79d.angle.radian - Math.PI);
              _0x3c7638.og.af.Bn = _0x249aff;
            });
          };
          var _0x87b5bd = function _0x26d616() {
            if (_0x9205d7) {
              _0x9205d7.destroy();
            }
            var _0x2e12ee = _0x4e5fcd({}, bbs.joystick);
            var _0x59e484 = {};
            if (bbs.customJoystick) {
              _0x1b2cbd();
              var _0x279817 = _0x4a2e4b(bbs.customJoystick.buttons);
              var _0x5030a4;
              try {
                for (_0x279817.s(); !(_0x5030a4 = _0x279817.n()).done;) {
                  var _0x761eec = _0x5030a4.value;
                  var _0x2c7c8e = document.createElement("div");
                  if (_0x761eec.svg) {
                    _0x2c7c8e.innerHTML = _0x761eec.svg;
                  } else {
                    _0x2c7c8e.style.color = _0x761eec.color || "#FFF";
                    _0x2c7c8e.style.backgroundColor = _0x761eec.backgroundColor || "#000";
                    _0x2c7c8e.style.borderRadius = "10px";
                    _0x2c7c8e.style.textAlign = "center";
                    _0x2c7c8e.style.fontWeight = "bold";
                    _0x2c7c8e.style.padding = "5px";
                    _0x2c7c8e.style.border = "1px solid #f00";
                    _0x2c7c8e.style.fontSize = _0x761eec.size || "25px";
                    _0x2c7c8e.innerHTML = _0x761eec.value;
                  }
                  _0x2c7c8e.style.position = "absolute";
                  _0x2c7c8e.style.top = _0x761eec.top;
                  _0x2c7c8e.style.left = _0x761eec.left;
                  _0x2c7c8e.style.display = _0x761eec.display;
                  _0x2c7c8e.style.cursor = "pointer";
                  _0x2c7c8e.id = "cbjt_" + _0x761eec.value;
                  _0x2c7c8e.dataset.size = _0x761eec.size;
                  _0x2c7c8e.dataset.color = _0x761eec.color || "#FFF";
                  _0x2c7c8e.style.opacity = 0.6;
                  document.getElementById("zone_joystick").appendChild(_0x2c7c8e);
                  if (_0x761eec.display !== "none") {
                    if (_0x761eec.value === "ZoomIn") {
                      _0x2c7c8e.addEventListener("click", function (_0xe9afb0) {
                        mbf.mbfass2();
                      });
                    }
                    if (_0x761eec.value === "ZoomOut") {
                      _0x2c7c8e.addEventListener("click", function (_0x2e0920) {
                        mbf.mbfass1();
                      });
                    }
                    if (_0x761eec.value === "Accelerator") {
                      _0x2c7c8e.addEventListener("pointerdown", function (_0x2552ca) {
                        mbf.onRun();
                      });
                      _0x2c7c8e.addEventListener("pointerup", function (_0x12e542) {
                        mbf.onStop();
                      });
                    }
                    if (_0x761eec.value === "Respawn") {
                      _0x2c7c8e.addEventListener("click", function (_0x18d72e) {
                        respawnFn();
                      });
                    }
                    if (_0x761eec.value === "Rotate") {
                      _0x2c7c8e.addEventListener("click", function (_0x5ecfe3) {
                        _0x33a647(_0x13a06a ? 0 : 8);
                      });
                    }
                    if (_0x761eec.value === "Snail") {
                      _0x2c7c8e.addEventListener("click", function (_0x5e6b19) {
                        _0x33a647(_0x13a06a ? 0 : 7);
                      });
                    }
                    if (_0x761eec.value === "Lobby") {
                      _0x2c7c8e.addEventListener("click", function (_0x1c6102) {
                        lobbyFn();
                      });
                    }
                    if (_0x761eec.value === "Search") {
                      _0x2c7c8e.addEventListener("click", function (_0x5bebf5) {
                        mbf.mbfass0();
                      });
                    }
                  }
                  _0x59e484[_0x761eec.value] = _0x2c7c8e;
                }
              } catch (_0x26df27) {
                _0x279817.e(_0x26df27);
              } finally {
                _0x279817.f();
              }
              _0x59e484.Directional;
              var _0x228f6d = _0x59e484.Directional.dataset.size / 2;
              var _0x2d8ad2 = parseInt(_0x59e484.Directional.style.left.replace("px", "")) + _0x228f6d;
              var _0xddf591 = parseInt(_0x59e484.Directional.style.top.replace("px", "")) + _0x228f6d;
              _0x2e12ee = {
                zone: _0x59e484.Directional,
                mode: "static",
                position: {
                  left: "50%",
                  top: "50%"
                },
                dumbBox: {
                  left: _0x2d8ad2,
                  top: _0xddf591
                },
                color: "transparent",
                size: Math.floor(_0x59e484.Directional.dataset.size / 1.6)
              };
            } else {
              _0x2e12ee.zone = document.getElementById("game-view");
              if (_0x2e12ee.mode === "static") {
                delete _0x2e12ee.zone;
              }
            }
            _0x9205d7 = nipplejs.create(_0x2e12ee);
            _0x46c9e2();
            if (bbs.customJoystick) {
              $(".nipple > .front").css("background", _0x59e484.Directional.dataset.color);
            }
          };
          if (_wwc.ismobile) {
            var _0xa70e7c = "";
            var _0x58a7a7 = bbs.configJoystick.typeCurrentName === "all" ? "label" : "labelAbbreviation";
            Object.keys(bbs.configJoystick.buttons).forEach(function (_0x456f05) {
              _0xa70e7c = _0xa70e7c + (bbs.configJoystick.buttons[_0x456f05].active ? "<button onclick=\"" + bbs.configJoystick.buttons[_0x456f05].action + "\" id=\"mbf_" + _0x456f05 + "\">" + bbs.configJoystick.buttons[_0x456f05][_0x58a7a7] + "</button>" : "");
            });
            var _0x658414 = "\n        <style>\n          #wwc-mobile-box {\n            position: fixed;z-index: 1001;width: 100%;top: 10px;\n          }\n          #wwc-mobile-buttons {\n            position: relative;margin: 0 auto;width: 265px;\n            display: flex;flex-wrap: nowrap;justify-content: space-between;align-items: center;\n          }\n          #wwc-mobile-buttons > button {\n            background-color: #000;color: #FFF;border: 1px solid #FFF;border-radius: 50px;\n            min-width: 36px;height: 36px;font-weight: bold;display: flex;justify-content: center;\n            align-items: center;\n          }\n          .game-slider-container-02 {\n            position: fixed;z-index: 1000;bottom: 50px;right: 45px;\n          }\n          .game-slider-container-02 input[type=range][orient=vertical] {\n              writing-mode: vertical-lr;\n              direction: rtl;\n              appearance: slider-vertical;\n              width: 16px;\n              vertical-align: bottom;\n          }\n        </style>\n        <div id=\"wwc-mobile-box\"><div id=\"wwc-mobile-buttons\" style=\"\">" + _0xa70e7c + "</div></div>";
            _0x658414 = _0x658414 + (bbs.configJoystick.typeCurrent === "btn" ? "" : "<div id=\"wwc-mobile-box-slider\" class=\"game-slider-container-02\"><input id=\"sliderZoom\" orient=\"vertical\" onchange=\"mbf.mbfass9(this)\" type=\"range\" min=\"0.25\" max=\"" + (_0xc777cf ? 12 : 2) + "\" step=\"0.25\" value=\"1\" style=\"height: 65vh;\"></div>");
            $("body").append(_0x658414);
          }
          if (_wwc.ismobile && bbs.joystick.checked) {
            if (bbs.customJoystick) {
              console.log("customJoystick");
            }
            _0x87b5bd();
          }
        } catch (_0x2f3c13) {
          console.error(_0x2f3c13);
        }
      };
      var _0xe4cc44 = localStorage.getItem("custom_wormworld_wear");
      var _0x3591ab = localStorage.getItem("custom_wormworld_skin");
      var _0x4160cf = localStorage.getItem("custom_wormworld_badLang");
      var _0x4f82c6 = localStorage.getItem("custom_wormworld_background");
      var _0x33def7 = localStorage.getItem("custom_wormworld_audio");
      var _0x51347c = [" XТ_", "WORMXТ_(d{})", "_xt", "wormxt", "worm_xt", "timmap"];
      if (_0x4160cf) {
        _0x51347c = _0x51347c.concat(JSON.parse(_0x4160cf));
      }
      window.badLanguageRegEx = (_0x51347c || []).join("|");
      var _0x26b207 = function _0x437580(_0x2adeed) {
        _0x2adeed = _0x2adeed.replace(new RegExp(badLanguageRegEx, "gim"), ":");
        _0x2adeed = _0x2adeed.replace(/\uFDFD/g, "");
        _0x2adeed = _0x2adeed.substring(0, _0x4ac6e2);
        return _0x2adeed;
      };
      _wwc.customConfig = function (_0x33251b) {
        var _0x42baaa = function _0x5ce5ee(_0x534afd, _0x5c309e = 0) {
          var _0x4312d8 = _0x534afd.id.toString();
          var _0x2d513a = _0x534afd.type.toString().toLowerCase() + "VariantArray";
          var _0x46f052 = _0x534afd.type.toString().toLowerCase() + "Dict";
          _0x33251b.textureDict[_0x4312d8] = {
            custom: true,
            re1ativePath: _0x534afd.file,
            reference: 1000 + _0x5c309e
          };
          _0x33251b.regionDict[_0x4312d8] = {
            texture: _0x4312d8,
            x: _0x534afd.x,
            y: _0x534afd.y,
            w: _0x534afd.w,
            h: _0x534afd.h,
            px: _0x534afd.px,
            py: _0x534afd.py,
            pw: 128,
            ph: 128
          };
          _0x33251b[_0x46f052][1000 + _0x5c309e] = {
            base: [{
              region: _0x4312d8
            }],
            guest: false,
            nonbuyable: false,
            price: 0,
            priceBefore: 0,
            id: _0x4312d8
          };
          _0x33251b[_0x2d513a].push([1000 + _0x5c309e]);
        };
        if (_0xe4cc44) {
          _0xe4cc44 = JSON.parse(_0xe4cc44);
          if (_0xe4cc44.wear) {
            if (_0xe4cc44.version == "2") {
              _0xe4cc44.data.forEach(function (_0x1d303a, _0x214519) {
                _0x42baaa(_0x1d303a, _0x214519);
              });
            } else {
              for (var _0x152468 in _0xe4cc44.wear.textureDict) {
                _0x33251b.textureDict[_0x152468] = {};
                _0x33251b.textureDict[_0x152468].h1 = true;
                _0x33251b.textureDict[_0x152468].h3 = true;
                _0x33251b.textureDict[_0x152468].re1ativePath = _0xe4cc44.wear.textureDict[_0x152468].file;
              }
              for (var _0x197bb7 in _0xe4cc44.wear.regionDict) {
                _0x33251b.regionDict[_0x197bb7] = _0xe4cc44.wear.regionDict[_0x197bb7];
                var _0x38f293 = _0x33251b.regionDict[_0x197bb7];
                _0x33251b[_0x38f293.list][_0x38f293.obj.id.toString()] = _0x38f293.obj;
                _0x33251b[_0x38f293.listVariant].push([_0x38f293.obj.id.toString()]);
              }
            }
          }
        }
        if (_0x3591ab) {
          _0x3591ab = JSON.parse(_0x3591ab);
          if (_0x3591ab.version_skin == "2") {
            var _0x481769 = function _0x37f1a1(_0x114c91, _0x15db31, _0x526cc3, _0x11023a) {
              return {
                texture: _0x15db31,
                h: _0x526cc3 - 5,
                w: _0x526cc3 - 5,
                x: _0x526cc3 * (_0x11023a ? 0 : _0x114c91 || 0),
                y: 0
              };
            };
            var _0x59d6c3 = "SKIN_" + _0x3591ab.id + "___Z";
            var _0x30e969 = {
              id: _0x59d6c3,
              regionDict: {},
              textureDict: {},
              skinArrayDict: [],
              skinGroupArrayDict: [{
                id: _0x59d6c3,
                name: {
                  en: "Custom V2"
                },
                list: []
              }],
              version_skin: 3
            };
            var _0x3a70cf = {
              id: _0x59d6c3,
              guest: false,
              price: 0,
              priceBefore: 0,
              nonbuyable: false,
              prime: "c_white",
              glow: _0x3591ab.glow,
              base: []
            };
            for (var _0x3c0533 = _0x3591ab.len - 1; _0x3c0533 >= 0; _0x3c0533--) {
              _0x30e969.regionDict[_0x59d6c3 + "_" + _0x3c0533] = _0x481769(_0x3c0533, _0x59d6c3, _0x3591ab.cos, 0);
              _0x3a70cf.base.push(_0x59d6c3 + "_" + _0x3c0533);
            }
            _0x30e969.textureDict[_0x59d6c3] = {
              custom: true,
              re1ativePath: _0x3591ab.file || _0x3591ab.td.file,
              h1: true,
              h4: true
            };
            _0x30e969.skinArrayDict.push(_0x3a70cf);
            _0x30e969.skinGroupArrayDict[0].list.push(_0x59d6c3);
            if (!_0x3591ab.textureDict[_0x59d6c3]) {
              alert("Error! Texture not found:" + p + " - load again.");
              return;
            }
          }
          if (_0x3591ab.version_skin == "3") {
            for (var _0xcd5259 in _0x3591ab) {
              var _0x4a9aea = _0x5eb71e(_0x3591ab[_0xcd5259]);
              if (_0x4a9aea === "object") {
                _0x33251b[_0xcd5259] = Array.isArray(_0x3591ab[_0xcd5259]) ? [].concat(_0x449262(_0x33251b[_0xcd5259]), _0x449262(_0x3591ab[_0xcd5259])) : _0x4e5fcd(_0x4e5fcd({}, _0x33251b[_0xcd5259]), _0x3591ab[_0xcd5259]);
              }
            }
            return;
          }
          var _0x165381 = _0x3591ab.skin.id;
          _0x3591ab.skin.id = _0x165381.toString();
          for (var _0x397249 in _0x3591ab.textureDict) {
            _0x33251b.textureDict[_0x397249] = _0x3591ab.textureDict[_0x397249];
            _0x33251b.textureDict[_0x397249].re1ativePath = _0x3591ab.textureDict[_0x397249].file;
            _0x33251b.textureDict[_0x397249].h1 = true;
            _0x33251b.textureDict[_0x397249].h4 = true;
          }
          for (var _0x49f82f in _0x3591ab.regionDict) {
            _0x33251b.regionDict[_0x49f82f] = _0x3591ab.regionDict[_0x49f82f];
          }
          _0x33251b.skinGroupArrayDict.push({
            id: "custom",
            name: {
              en: "Custom"
            },
            list: [_0x165381]
          });
          _0x33251b.skinArrayDict.push(_0x3591ab.skin);
        }
      };
      function _0x4d00ba() {
        var _0xe5623c = false;
        (function (_0x17e141) {
          if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x17e141) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x17e141.substr(0, 4))) {
            _0xe5623c = true;
          }
        })(navigator.userAgent || navigator.vendor || window.opera);
        return _0xe5623c;
      }
      window.w2c2020 = {
        fontStyle: {
          amarelo: new PIXI.TextStyle({
            align: "center",
            fill: "#ffc800",
            fontSize: 10,
            lineJoin: "round",
            stroke: "red",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }),
          branco: new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 10,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }),
          hsBranco: new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 9,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }),
          hsBrancoRight: new PIXI.TextStyle(_0x4ddaaa({
            align: "center",
            fill: "#fff",
            fontSize: 9,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }, "align", "right")),
          brancoXzoom: new PIXI.TextStyle({
            align: "center",
            fill: "#fff",
            fontSize: 12,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          }),
          verdeXzoom: new PIXI.TextStyle({
            align: "center",
            fill: "#0ff555",
            fontSize: 9,
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true,
            fontWeight: "bold"
          })
        }
      };
      var _0x180d51 = ["#FFD500", "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", "#ff0999"];
      for (var _0x4a13da = 0; _0x4a13da < _0x180d51.length; _0x4a13da++) {
        var _0x40dcd0 = _0x180d51[_0x4a13da];
        w2c2020.fontStyle["tfc" + _0x4a13da] = new PIXI.TextStyle({
          align: "center",
          fill: _0x40dcd0,
          fontSize: 25,
          lineJoin: "round",
          whiteSpace: "normal",
          wordWrap: true,
          fontWeight: "bold"
        });
      }
      w2c2020.zoom = new PIXI.Text("x1", w2c2020.fontStyle.brancoXzoom);
      w2c2020.zoom.x = 82;
      w2c2020.zoom.y = 105;
      w2c2020.conteinerTeam = new PIXI.Container();
      w2c2020.conteinerTeam.id = "team";
      w2c2020.friends = new PIXI.Container();
      w2c2020.friends.background = new PIXI.Graphics();
      w2c2020.friends.background.beginFill(0, 0.4);
      w2c2020.friends.background.drawRect(0, 0, 100, 130);
      w2c2020.friends.background.endFill();
      w2c2020.friends.addChild(w2c2020.friends.background);
      w2c2020.friends.position.x = bbs.displayFriends?.x || -10;
      w2c2020.friends.position.y = bbs.displayFriends?.y || 315;
      w2c2020.friends.position.rotate = bbs.displayFriends?.rotate || 0;
      w2c2020.friends.alpha = 0;
      w2c2020.moveSprite = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/move-icon.png");
      w2c2020.moveSprite.width = 20;
      w2c2020.moveSprite.height = 20;
      w2c2020.moveSprite.x = 75;
      w2c2020.moveSprite.y = 130;
      w2c2020.moveSprite.interactive = true;
      w2c2020.moveSprite.buttonMode = true;
      w2c2020.rotation = PIXI.Sprite.from(URLSERV_WORMWORLD + "/img/rotate-icon.png");
      w2c2020.rotation.width = 25;
      w2c2020.rotation.height = 25;
      w2c2020.rotation.x = 45;
      w2c2020.rotation.y = 130;
      w2c2020.rotation.interactive = true;
      w2c2020.rotation.buttonMode = true;
      w2c2020.friends.addChild(w2c2020.moveSprite);
      w2c2020.friends.addChild(w2c2020.rotation);
      var _0x46d5cc = false;
      var _0x16f92f = {
        x: 0,
        y: 0
      };
      w2c2020.rotation.on("pointerdown", function (_0x2ea43a) {
        w2c2020.friends.rotation += Math.PI / 2;
        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
      });
      w2c2020.moveSprite.on("pointerdown", function (_0x2eaca7) {
        _0x46d5cc = true;
        _0x16f92f.x = _0x2eaca7.data.global.x - w2c2020.friends.x;
        _0x16f92f.y = _0x2eaca7.data.global.y - w2c2020.friends.y;
      });
      w2c2020.moveSprite.on("pointerup", function () {
        _0x46d5cc = false;
      });
      w2c2020.moveSprite.on("pointerupoutside", function () {
        _0x46d5cc = false;
      });
      w2c2020.moveSprite.on("pointermove", function (_0x37fb90) {
        if (_0x46d5cc) {
          var _0xbdb0df = _0x37fb90.data.global;
          w2c2020.friends.x = _0xbdb0df.x - _0x16f92f.x;
          w2c2020.friends.y = _0xbdb0df.y - _0x16f92f.y;
          bbs.displayFriends.x = w2c2020.friends.x;
          bbs.displayFriends.y = w2c2020.friends.y;
          localStorage.setItem("wwcSaveGame", JSON.stringify(bbs || {}));
        }
      });
      w2c2020.moveSprite.visible = false;
      w2c2020.rotation.visible = false;
      window.addEventListener("keydown", function (_0x36aef1) {
        if (_0x36aef1.key === "Escape") {
          w2c2020.moveSprite.visible = !w2c2020.moveSprite.visible;
          w2c2020.rotation.visible = !w2c2020.rotation.visible;
        }
      });
      w2c2020.label_hs = new PIXI.Text("HS", w2c2020.fontStyle.amarelo);
      w2c2020.label_hs.x = 15;
      w2c2020.label_hs.y = 107;
      w2c2020.hs = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
      w2c2020.hs.x = 20;
      w2c2020.hs.y = 119;
      w2c2020.hsTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
      w2c2020.hsTotal.x = 20;
      w2c2020.hsTotal.y = 132;
      w2c2020.label_kill = new PIXI.Text("KILL", w2c2020.fontStyle.amarelo);
      w2c2020.label_kill.x = 50;
      w2c2020.label_kill.y = 107;
      w2c2020.kill = new PIXI.Text("0", w2c2020.fontStyle.amarelo);
      w2c2020.kill.x = 60;
      w2c2020.kill.y = 120;
      w2c2020.killTotal = new PIXI.Text("0", w2c2020.fontStyle.branco);
      w2c2020.killTotal.x = 60;
      w2c2020.killTotal.y = 133;
      w2c2020.clock = PIXI.Sprite.from(URL_CDN + "https://wormup.in/assets/images/clock.png");
      w2c2020.clock.width = 100;
      w2c2020.clock.height = 100;
      w2c2020.clock.x = -50;
      w2c2020.clock.y = -50;
      w2c2020.containerHsRec = new PIXI.Container();
      w2c2020.containerHsRec.x = -55;
      w2c2020.containerHsRec.y = 195;
      w2c2020.containerHstop = new PIXI.Container();
      w2c2020.containerHstop.x = -55;
      w2c2020.containerHstop.y = 95;
      w2c2020.containerHsIndex = new PIXI.Container();
      w2c2020.containerHsNames = new PIXI.Container();
      w2c2020.containerHsValue = new PIXI.Container();
      var _0x4662b3 = function _0x30478b(_0x224100) {};
      w2c2020.top1rec = "🥇";
      w2c2020.top2rec = "🥈";
      w2c2020.top3rec = "🥉";
      w2c2020.titleRec = new PIXI.Text("Records (kb 0)", w2c2020.fontStyle.amarelo);
      w2c2020.titleRec.y = -5;
      for (var _0x3028f2 = 0; _0x3028f2 < 3; _0x3028f2++) {
        var _0x1d8712 = _0x3028f2 + 1;
        var _0x25d9aa = new PIXI.Text(w2c2020["top" + _0x1d8712 + "rec"], w2c2020.fontStyle.hsBrancoRight);
        _0x25d9aa.x = _0x3028f2 >= 9 ? -5 : 0;
        _0x25d9aa.y = _0x1d8712 * 13;
        w2c2020.containerHsRec.addChild(_0x25d9aa);
        var _0x255ef4 = new PIXI.Text("--", w2c2020.fontStyle.hsBranco);
        _0x255ef4.x = 15;
        _0x255ef4.y = _0x1d8712 * 13;
        w2c2020.containerHsRec.addChild(_0x255ef4);
        var _0x2bb1c7 = new PIXI.Text("-", w2c2020.fontStyle.hsBrancoRight);
        _0x2bb1c7.x = 135;
        _0x2bb1c7.y = _0x1d8712 * 13;
        w2c2020.containerHsRec.addChild(_0x2bb1c7);
      }
      w2c2020.containerHsRec.addChild(w2c2020.titleRec);
      var _0x44aad7 = 6;
      var _0x279fdc = function _0x4b091b(_0x58a578, _0x155ab1) {
        if (_0x155ab1 && _0x155ab1.length > 0) {
          for (var _0x558b19 = 0; _0x558b19 < 3; _0x558b19++) {
            if (w2c2020.containerHsRec.children[_0x558b19]) {
              w2c2020.containerHsRec.children[_0x558b19 * 3 + 1].text = _0x155ab1 && _0x155ab1[_0x558b19] ? _0x155ab1[_0x558b19].nickname.substring(0, 17) : "--";
            }
            if (w2c2020.containerHsRec.children[_0x558b19]) {
              w2c2020.containerHsRec.children[_0x558b19 * 3 + 2].text = _0x155ab1 && _0x155ab1[_0x558b19] ? _0x155ab1[_0x558b19].score : "--";
            }
          }
        }
        if (_0x58a578 && _0x58a578.length > 0) {
          for (var _0x4400a3 = 0; _0x4400a3 < _0x44aad7; _0x4400a3++) {
            var _0x363ee0 = "--";
            var _0x487b99 = "--";
            if (_0x58a578 && _0x58a578[_0x4400a3]) {
              _0x363ee0 = _0x58a578[_0x4400a3].nickname ? _0x58a578[_0x4400a3].nickname.substring(0, 14) : "--";
              _0x487b99 = parseInt(_0x58a578[_0x4400a3].score || 0);
            }
            if (w2c2020.containerHsNames.children[_0x4400a3]) {
              w2c2020.containerHsNames.children[_0x4400a3].text = _0x363ee0;
            }
            if (w2c2020.containerHsValue.children[_0x4400a3]) {
              w2c2020.containerHsValue.children[_0x4400a3].text = _0x487b99;
            }
          }
        }
      };
      w2c2020.containerHstop.addChild(new PIXI.Text("TOP HS (kb 9)", w2c2020.fontStyle.amarelo));
      for (var _0xd6f7d9 = 0; _0xd6f7d9 < _0x44aad7; _0xd6f7d9++) {
        var _0x3d4e08 = new PIXI.Text(_0xd6f7d9 + 1, w2c2020.fontStyle.hsBranco);
        _0x3d4e08.x = _0xd6f7d9 >= 9 ? -5 : 0;
        _0x3d4e08.y = (_0xd6f7d9 + 1) * 13;
        w2c2020.containerHsIndex.addChild(_0x3d4e08);
        var _0x20ba36 = new PIXI.Text("..", w2c2020.fontStyle.hsBranco);
        _0x20ba36.x = 10;
        _0x20ba36.y = (_0xd6f7d9 + 1) * 13;
        w2c2020.containerHsNames.addChild(_0x20ba36);
        var _0x1b701c = new PIXI.Text(0, w2c2020.fontStyle.hsBrancoRight);
        _0x1b701c.x = 130;
        _0x1b701c.y = (_0xd6f7d9 + 1) * 13;
        w2c2020.containerHsValue.addChild(_0x1b701c);
      }
      w2c2020.containerHstop.addChild(w2c2020.containerHsIndex);
      w2c2020.containerHstop.addChild(w2c2020.containerHsNames);
      w2c2020.containerHstop.addChild(w2c2020.containerHsValue);
      w2c2020.containerCountInfo = new PIXI.Container();
      w2c2020.containerCountInfo.x = -45;
      w2c2020.containerCountInfo.y = -52;
      w2c2020.containerCountInfo.addChild(w2c2020.zoom);
      w2c2020.containerCountInfo.addChild(w2c2020.friends);
      w2c2020.containerCountInfo.addChild(w2c2020.label_hs);
      w2c2020.containerCountInfo.addChild(w2c2020.hs);
      w2c2020.containerCountInfo.addChild(w2c2020.hsTotal);
      w2c2020.containerCountInfo.addChild(w2c2020.label_kill);
      w2c2020.containerCountInfo.addChild(w2c2020.kill);
      w2c2020.containerCountInfo.addChild(w2c2020.killTotal);
      w2c2020.labelRoom = new PIXI.Text("WXO", w2c2020.fontStyle.amarelo);
      w2c2020.labelRoom.x = -50;
      w2c2020.labelRoom.y = -56;
      w2c2020.addRoom = function (_0x97610d) {
        w2c2020.labelRoom.text = _0x97610d || "wxo";
      };
      window.addEventListener("keydown", function (_0x138804) {
        if (_0x138804.key == "7") {
          _0x33a647(_0x13a06a ? 0 : 7);
        }
        if (_0x138804.key == "8") {
          _0x33a647(_0x13a06a ? 0 : 8);
        }
        if (_0x138804.key === "0" && bbs.showRechs) {
          w2c2020.containerHsRec.alpha = !w2c2020.containerHsRec.alpha;
        }
        if (_0x138804.key === "9" && bbs.showTophs) {
          w2c2020.containerHstop.alpha = !w2c2020.containerHstop.alpha;
        }
        if (_0x138804.key === "6" && _0xb65a12.setIntervalRun) {
          _0x346984 = !_0x346984;
        }
        if (_0x138804.key === "R" || _0x138804.key === "r") {
          respawnFn();
        }

               if (_0x138804.key === "5") {
          respawnFn();
        }

        if (_0x138804.key === "4") {
          var _0x4a030d = _wwc._anApp.og.af.ng.mf.getChildByName("lineHS");
          if (_0x4a030d) {
            _0x4a030d.alpha = _0x4a030d.alpha ? 0 : 0.3;
          }
        }
        if (_0x138804.key === "3") {
          var _0x181d6a = _0x111717;
          if (backgroundArena.length < _0x181d6a) {
            _0x181d6a = bbs.background || 0;
            _0x111717 = 0;
          }
          _wwc._anApp.og.af.ng.Lg.$g(_0xb65a12.bgg(_0x181d6a));
          _0x111717++;
        }
        if (_0x138804.key === "1") {
          mbf.mbf_cambiar();
        }
        if (_0x138804.key === "x1") {
          _wwcio.update(1);
        }
        if (_0x138804.key === "x2") {
          _wwcio.update(2);
        }
        if (_0x138804.key === "<" || _0x138804.key === "," && _0xb65a12.setIntervalRun) {
          mbf.mbfass1();
        }
        if (_0x138804.key === ">" || _0x138804.key === "." && _0xb65a12.setIntervalRun) {
          mbf.mbfass2();
        }
        if (_0x138804.key === "z" || _0x138804.key === "Z" && _0xb65a12.setIntervalRun) {
          _0x2a0429 = bbs.configZoom?.closeDown || 1;
          w2c2020.zoom.text = "x" + _0x2a0429;
        }
        if (_0x138804.key === "c" || _0x138804.key === "C" && _0xb65a12.setIntervalRun) {
          w2c2020.zoom.text = _0x2a0429 === 0.5 ? "x2" : "CLOSE-UP";
          _0x2a0429 = _0x2a0429 === 0.5 ? 2 : bbs.configZoom?.closeUp || 0.25;
        }





        if (_0x138804.key === "m" || _0x138804.key === "M") {
          bbs.showSkinLines = !bbs.showSkinLines;
          // If disabling, hide existing skin lines
          if (!bbs.showSkinLines && _0x3c7638.dh && _0x3c7638.dh.af && _0x3c7638.dh.af.ng && _0x3c7638.dh.af.ng.skinLineGraphics) {
            _0x3c7638.dh.af.ng.skinLineGraphics.visible = false;
          }
        }
      });
      var _0x3c7638 = {
        Lc: {
          Gb: {}
        }
      };
      var _0xb65a12 = {
        pm: {},
        ps: 0,
        ps2: function _0x4e1aaf(_0x341d7e, _0x21fcf7, _0x16d62e) {
          if (true) {
            var _0x22dbf1 = _0x16d62e ? 128 : 0;
            var _0x481bf9 = _0xb65a12.$F.N(_0x21fcf7) / _0xb65a12.$V.F * 128 & 127;
            var _0x5c1a51 = (_0x22dbf1 | _0x481bf9) & 255;
            var _0x5881ea = new ArrayBuffer(1);
            new DataView(_0x5881ea).setInt8(0, _0x5c1a51);
            _0x341d7e.Eq(_0x5881ea);
            _0x341d7e.nq = _0x5c1a51;
          } else {}
        },
        ps3: function _0x4ef089() {
          _0x3c7638.dh.xq(_0x3c7638.og.af.Gn(), _0x3c7638.og.af.Hn());
        },
        setIntervalRun: null,
        loadBg: false,
        LG: function _0x12a70d(_0x5311a1, _0x54a37c, _0x424f4f) {
          _0x5311a1.Ll("gg", _0x424f4f.credential, null);
        },
        Lg: function _0x4edffe(_0x90a289) {
          _0x3c7638.xe._g = _0xb65a12.bgg();
          _wwc.$C = _0x90a289;
          _wwc.$W = _0xb65a12;
          if (bbs.bgGameWidth > 512) {
            return new _0x90a289.WMGBS1();
          } else {
            return new _0x90a289.WMGBS2();
          }
        },
        registry: function () {
          var _0x493130 = _0xbb0189(_0x1e8476().mark(function _0x107915(_0xc59158) {
            var _0x3a2088;
            return _0x1e8476().wrap(function _0x6620ee(_0x20b4f9) {
              while (1) {
                switch (_0x20b4f9.prev = _0x20b4f9.next) {
                  case 0:
                    _0x20b4f9.next = 2;
                    return fetch(URLSERV_WORMWORLD + "/dynamic/assets/registry", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                        "x-uid": vLS4d59d9b6cc24740ef3ab
                      },
                      body: JSON.stringify(_0xc59158)
                    }).then(function (_0x5acb02) {
                      if (!_0x5acb02.ok) {
                        return _0xc59158;
                      }
                      return _0x5acb02.json();
                    });
                  case 2:
                    _0x3a2088 = _0x20b4f9.sent;
                    return _0x20b4f9.abrupt("return", _0x3a2088);
                  case 4:
                  case "end":
                    return _0x20b4f9.stop();
                }
              }
            }, _0x107915);
          }));
          function _0x4f2174(_0x28ffcc) {
            return _0x493130.apply(this, arguments);
          }
          return _0x4f2174;
        }()
      };
      _0xb65a12.Vd = function (_0x55bb1a, _0x200f45) {
        _wwc.customConfig(_0x55bb1a);
        if (!_0x55bb1a) {
          return;
        }
        var _0x19c79a = this;
        function _0x17649e(_0x3c66ea) {
          var _0x354704 = _0x200f45.Id.Ld;
          _0x19c79a.Rd(_0x354704, _0x200f45.Od.bc(_0x354704).lc(_0x3c66ea));
        }
        if (this.Fd) {
          this.Pd();
          return;
        }
        var _0x64a80d = [];
        var _0x2d19bd = [];
        var _0x2535f0 = 0;
        var _0x49f1c0 = new PIXI.Loader();
        for (var _0x5e6ad in _0x55bb1a.textureDict) {
          if (_0x55bb1a.textureDict.hasOwnProperty(_0x5e6ad)) {
            var _0x568b93 = _0x55bb1a.textureDict[_0x5e6ad];
            var _0x5b86ee = _0x568b93.re1ativePath || _0x568b93.relativePath;
            var _0xfe0708 = _0x568b93.fileSize || 100;
            var _0x42b18e = _0x568b93.sha256 || null;
            var _0x54055e = new _0x200f45.Wd(_0x5e6ad, _0x5b86ee, _0xfe0708, _0x42b18e);
            _0x54055e.h1 = _0x568b93.h1;
            _0x54055e.h4 = _0x568b93.h4;
            _0x54055e.skinEvo = _0x568b93.skinEvo;
            _0x54055e.lines = _0x568b93.lines;
            _0x54055e.speed = _0x568b93.speed;
            _0x64a80d.push(_0x54055e);
            _0x49f1c0.add(_0x5e6ad, _0x5b86ee);
          }
        }
        _0x49f1c0.onProgress.add(function (_0x39fe8c, _0x2b4a46) {
          _0x17649e(_0x39fe8c.progress / 100);
        });
        _0x49f1c0.load(function (_0x4b7927, _0x5792b1) {
          _0x64a80d.forEach(function (_0x2444d4) {
            _0x2444d4.resource = _0x5792b1[_0x2444d4.ae];
          });
          _0x19c79a.$d(_0x55bb1a, _0x64a80d, _0x200f45);
        });
        return;
      };
      _0xb65a12.Zd = function (_0x1ed885, _0x13d153, _0xe2ae90, _0x40d5cd) {
        $.ajax({
          type: "GET",
          url: _0x1ed885._d,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function _0x426bca(_0x25d6f8) {
              if (_0x25d6f8.lengthComputable) {
                _0x40d5cd(_0x25d6f8.loaded / _0x25d6f8.total);
              }
            }
          }
        }).fail(function () {
          _0x13d153(new Error());
        }).done(function (_0x235d92) {
          _0xe2ae90(_0x235d92);
        });
      };
      _0xb65a12.$d = function (_0x51c450, _0x22d82d, _0x349ff3) {
        function _0x368e89(_0x2fc85d) {
          var _0x26a100 = _0x349ff3.Id.Md;
          _0x5b9d66.Rd(_0x26a100, _0x349ff3.Od.bc(_0x26a100).lc(_0x2fc85d));
        }
        var _0x5b9d66 = this;
        if (this.Fd) {
          this.Pd();
          return;
        }
        var _0x57ee0e;
        var _0x34f275;
        var _0x229727 = {};
        var _0x55e2fc = function _0x1ffd4b() {
          for (var _0x22d640 = 0; _0x22d640 < _0x22d82d.length; _0x22d640++) {
            try {
              window.URL.revokeObjectURL(_0x22d82d[_0x22d640].Xd);
            } catch (_0x5d2436) {}
          }
          _0x5b9d66.Sd(new Error());
        };
        var _0x5ee76b = function _0x17b28b() {
          var _0x1ac5ec = _0x2e4f54 == 5 ? 0 : _0x2e4f54;
          _0x368e89(_0x1ac5ec / 4);
          _0x229727[_0x57ee0e.ae] = new _0xb65a12.$C.be(_0x57ee0e.Xd, _0x34f275);
          _0x4d71bf();
        };
        var _0x4d71bf = function _0x1b8345() {
          try {
            if (_0x2e4f54 < _0x22d82d.length) {
              _0x57ee0e = _0x22d82d[_0x2e4f54];
              _0x2e4f54++;
              _0x229727[_0x57ee0e.ae] = new _0xb65a12.$C.be(_0x57ee0e.resource.texture, _0x57ee0e.resource.texture.baseTexture);
              _0x4d71bf();
              return;
            }
            return _0x5b9d66.ce(_0x51c450, _0x229727);
          } catch (_0x16e7a4) {
            console.error(_0x16e7a4);
          }
        };
        var _0x2e4f54 = 0;
        _0x4d71bf();
      };
      _0xb65a12.p = function (_0x397276, _0x167e7) {
        _0x397276 = _0x397276.split("|");
        _0xb65a12.pm[_0x397276[0]] = {
          p: _0x397276[1],
          i: _0x167e7
        };
      };
      _0xb65a12.ae = function (_0x50cd1d, _0xcbc279, _0x227669) {
        if (_0xcbc279.maV !== 1) {
          _0xcbc279.maV = 1;
          var _0x53c0c5 = _0xcbc279.ma.trim().match(_0x58e058);
          if (_0x53c0c5 && _0x227669.dh.Fh[_0xcbc279.ae]) {
            var _0x247f2a = function _0x4c746c(_0x5c3b05, _0x42543d) {
              if (_0x5c3b05.includes("_")) {
                if (_0x1bbcee["WEAR_W" + _0x2c5c0c + "_" + _0x5c3b05]) {
                  return _0x1bbcee["WEAR_W" + _0x2c5c0c + "_" + _0x5c3b05].reference;
                } else {
                  return _0x42543d;
                }
              }
              return _wwc.wearMap[_0x5c3b05];
            };
            var _0x44576a = _0x53c0c5[3];
            var _0x2c5c0c = _0x53c0c5[4];
            var _0x2bccbc = _0x53c0c5[5];
            var _0x4d1e25 = _0x53c0c5[6];
            var _0x2c1cfc = _0x53c0c5[7];
            var _0x66045c = _0x53c0c5[8];
            var _0x3d24e9 = _0x53c0c5[9];
            var _0x1bbcee = _0x3c7638.Lc.Xb().textureDict;
            var _0x1947e0 = _0x44576a === "B";
            if (_0x2bccbc !== "000") {
              var _0x3b80e8 = "SKIN_S" + _0x2bccbc.substring(0, 2) + "___" + _0x2bccbc.substring(2);
              var _0x38e9b2 = _0x1bbcee[_0x3b80e8];
              _0x227669.dh.Fh[_0xcbc279.ae].Eh.Hh = !_0x1947e0 ? parseInt(_wwc.skinMap[_0x2bccbc]) : _0x38e9b2 ? _0x3b80e8 : _0x227669.dh.Fh[_0xcbc279.ae].Eh.Hh;
            }
            if (_0x4d1e25 !== "00") {
              _0x227669.dh.Fh[_0xcbc279.ae].Eh.ni = _0x247f2a(_0x4d1e25, _0x227669.dh.Fh[_0xcbc279.ae].Eh.ni);
            }
            if (_0x2c1cfc !== "00") {
              _0x227669.dh.Fh[_0xcbc279.ae].Eh.oi = _0x247f2a(_0x2c1cfc, _0x227669.dh.Fh[_0xcbc279.ae].Eh.oi);
            }
            if (_0x66045c !== "00") {
              _0x227669.dh.Fh[_0xcbc279.ae].Eh.pi = _0x247f2a(_0x66045c, _0x227669.dh.Fh[_0xcbc279.ae].Eh.pi);
            }
            if (_0x3d24e9 !== "00") {
              _0x227669.dh.Fh[_0xcbc279.ae].Eh.qi = _0x247f2a(_0x3d24e9, _0x227669.dh.Fh[_0xcbc279.ae].Eh.qi);
            }
            _0x227669.dh.Fh[_0xcbc279.ae].Eh.ma = _0x26b207(_0x227669.dh.Fh[_0xcbc279.ae].Eh.ma);
          }
        }
        _0xcbc279.ma = _0x26b207(_0xcbc279.ma);
      };
      _0xb65a12.Xp = function (_0x4e85bc, _0x3d3321, _0x4da33e, _0x49cdb1, _0x4c88e9, _0x161e41, _0x14e305) {
        if (!_wwc.skinMap) {
          _wwc.skinMap = _0x3c7638.Lc.Xb().skinMap;
        }
        if (!_wwc.wearMap) {
          _wwc.wearMap = _0x3c7638.Lc.Xb().wearMap;
        }
        var _0x39911b = /^(SKIN|WEAR)_(.*?)_(.{2}|.{3})$/;
        var _0x5db799 = _0x3c7638.Lc.Xb().hatDict[_0x14e305] ? _0x3c7638.Lc.Xb().hatDict[_0x14e305].id : _0x14e305;
        var _0x376e03 = _0x3c7638.Lc.Xb().glassesDict[_0x161e41] ? _0x3c7638.Lc.Xb().glassesDict[_0x161e41].id : _0x161e41;
        var _0x2172b0 = _0x3c7638.Lc.Xb().glassesDict[_0x4c88e9] ? _0x3c7638.Lc.Xb().mouthDict[_0x4c88e9].id : _0x4c88e9;
        var _0x1ba085 = _0x3c7638.Lc.Xb().glassesDict[_0x49cdb1] ? _0x3c7638.Lc.Xb().eyesDict[_0x49cdb1].id : _0x49cdb1;
        var _0x9d2f16 = "A";
        var _0x36f698 = "";
        var _0x5491e9 = "__";
        var _0x35e88b = function _0x345263(_0x8ad5ff, _0x503513) {
          if (_0x39911b.test(_0x8ad5ff)) {
            var _0x2b31a7 = _0x39911b.exec(_0x8ad5ff);
            return {
              id: _0x2b31a7[2],
              value: _0x2b31a7[3],
              testRun: true
            };
          }
          return {
            id: null,
            value: null,
            testRun: false
          };
        };
        var _0x3995cf = {
          h: _0x35e88b(_0x4da33e, "h"),
          r: _0x35e88b(_0x1ba085, "r"),
          a: _0x35e88b(_0x2172b0, "a"),
          f: _0x35e88b(_0x376e03, "f"),
          c: _0x35e88b(_0x5db799, "c")
        };
        if (_0x3995cf.h.testRun) {
          _0x36f698 = _0x3995cf.h.id.substring(1);
          _0x9d2f16 = "B";
        }
        if (_0x3995cf.r.testRun || _0x3995cf.a.testRun || _0x3995cf.f.testRun || _0x3995cf.c.testRun) {
          _0x5491e9 = (_0x3995cf.r.id || _0x3995cf.a.id || _0x3995cf.f.id || _0x3995cf.c.id).substring(1);
        }
        var _0x485808 = function _0x596568(_0x4c1321, _0xfb6f29) {
          if (_0x3995cf[_0xfb6f29].value) {
            return _0x3995cf[_0xfb6f29].value.padStart(_0xfb6f29 === "h" ? 3 : 2, "0");
          }
          if (!_wwc[_0xfb6f29 === "h" ? "testSkinMod" : "testWear"](_0x4c1321 || 0)) {
            if (_0x3995cf[_0xfb6f29].testRun) {
              return _0x4c1321.toString().padStart(_0xfb6f29 === "h" ? 3 : 2, "0");
            } else if (_0xfb6f29 === "h") {
              return "000";
            } else {
              return "00";
            }
          }
          return _wwc[_0xfb6f29 === "h" ? "skinMap" : "wearMap"][_0x4c1321] || (_0xfb6f29 === "h" ? "000" : "00");
        };
        var _0x3c3f0b = _0x485808(_0x4da33e, "h");
        var _0xf141bc = _0x485808(_0x49cdb1, "r");
        var _0x51f8b2 = _0x485808(_0x4c88e9, "a");
        var _0x264263 = _0x485808(_0x161e41, "f");
        var _0x2d3d31 = _0x485808(_0x14e305, "c");
        var _0x1faac0 = _0x9d2f16 + _0x5491e9 + _0x36f698 + _0x3c3f0b.replace("__", "") + _0xf141bc + _0x51f8b2 + _0x264263 + _0x2d3d31;
        bbs.code = (_0x3c3f0b || "000") + "|" + (_0x2d3d31 || "00");
        function _0x51abd4(_0x47e2cb, _0x31c86a) {
          var _0x2d5895 = "";
          _0x2d5895 = _0x47e2cb.substring(0, _0x4ac6e2).padEnd(_0x4ac6e2, "_");
          var _0x37fd1c = _0x2d5895 + _0x31c86a;
          return _0x37fd1c;
        }
        bbs.nickname = _0x51abd4(_0x3d3321, _0x1faac0);
        return bbs.nickname;
      };
      _0xb65a12.bgg = function (_0x1064f9) {
        _0x1064f9 = parseInt(_0x1064f9);
        var _0x452535 = bbs.backgroundUri || "/images/bg-pattern-pow2-ARENA.png";
        if (!isNaN(_0x1064f9)) {
          _0x452535 = backgroundArena[_0x1064f9]?.uri || _0x452535;
          bbs.bgGameWidth = backgroundArena[_0x1064f9]?.w || 512;
          bbs.bgGameHeight = backgroundArena[_0x1064f9]?.h || 256;
        }
        var _0x424f71 = PIXI.BaseTexture.from(_0x452535);
        bbs.bgGameWidth = _0x424f71.width || bbs.bgGameWidth || 512;
        bbs.bgGameHeight = _0x424f71.height || bbs.bgGameHeight || 256;
        _0x424f71.wrapMode = bbs.bgGameWidth > 999 ? PIXI.WRAP_MODES.CLAMP : PIXI.WRAP_MODES.REPEAT;
        return new PIXI.Texture(_0x424f71);
      };
      _0xb65a12.genereteTexture = function (_0x146eb9) {
        var _0x1909e8 = 128;
        var _0x176d00 = 9;
        try {
          var _0x50df5d = function _0x557c9e() {
            var _0x4f2482 = [];
            for (var _0x31c5a8 = 0; _0x31c5a8 < _0x146eb9.lines; _0x31c5a8++) {
              lineContainer = [];
              for (var _0x2809bc = 0; _0x2809bc < _0x176d00; _0x2809bc++) {
                try {
                  var _0x1490b2 = PIXI.Texture.from(_0x146eb9._d, {
                    x: _0x2809bc * _0x1909e8,
                    y: _0x31c5a8 * _0x1909e8,
                    width: _0x1909e8,
                    height: _0x1909e8
                  });
                  lineContainer.push(_0x1490b2);
                } catch (_0x377e92) {
                  console.log(_0x31c5a8, _0x2809bc);
                  console.log(_0x377e92);
                  return;
                }
              }
              _0x4f2482.push(lineContainer);
            }
            return _0x4f2482;
          };
          return _0x50df5d();
        } catch (_0x42ea64) {
          return [];
        }
      };
      var _0x32451b = {
        headshot: "https://timmapwormate.com/images/hs_2.mp3",
        shaokahn: window.URL_CDN + "/sounds/shao_kahn_sound_effect.mp3",
        speed: window.URL_CDN + "/sounds/woo_Hoo_sound_effect.mp3",
        curve: window.URL_CDN + "/sounds/yes_effect.mp3",
        loser: window.URL_CDN + "/sounds/negative_beeps_effect.mp3",
        top1: window.URL_CDN + "/sounds/mission_complete_sound_effect.mp3"
      };
      _0x3cd95c.ref = ["speed", "curve"];
      for (var _0x2d5804 in _0x32451b) {
        _0x3cd95c[_0x2d5804] = new _0x5213e9.Howl({
          src: [_0x32451b[_0x2d5804]],
          html5: true,
          autoplay: _0x2d5804 == "top1",
          loop: false
        });
      }
      var _0x220e6f = {
        "rotate(0deg)": 0,
        "rotate(90deg)": 1.5707963267948966,
        "rotate(180deg)": 3.141592653589793,
        "rotate(270deg)": 4.71238898038469,
        "rotate(360deg)": 0
      };
      var _0x3be3f8 = typeof Symbol == "function" && _0x5eb71e(Symbol.iterator) == "symbol" ? function (_0x50c223) {
        return _0x5eb71e(_0x50c223);
      } : function (_0x25dbb7) {
        if (_0x25dbb7 && typeof Symbol == "function" && _0x25dbb7.constructor === Symbol && _0x25dbb7 !== Symbol.prototype) {
          return "symbol";
        } else {
          return _0x5eb71e(_0x25dbb7);
        }
      };
      var _0x3fa18c;
      window.addEventListener("load", function () {
        function _0x349bb7() {
          (function (_0x245a63, _0xe0fdf4, _0x5c30ad) {
            function _0x4db743(_0x2d165b, _0x2b3f1c) {
              return (_0x2d165b === undefined ? "undefined" : _0x3be3f8(_0x2d165b)) === _0x2b3f1c;
            }
            function _0x500615() {
              if (typeof _0xe0fdf4.createElement != "function") {
                return _0xe0fdf4.createElement(arguments[0]);
              } else if (_0x4afe72) {
                return _0xe0fdf4.createElementNS.call(_0xe0fdf4, "http://www.w3.org/2000/svg", arguments[0]);
              } else {
                return _0xe0fdf4.createElement.apply(_0xe0fdf4, arguments);
              }
            }
            var _0x2ff9e2 = [];
            var _0x17f80c = [];
            var _0x50e5e5 = {
              _version: "3.3.1",
              _config: {
                classPrefix: "",
                enableClasses: true,
                enableJSClass: true,
                usePrefixes: true
              },
              _q: [],
              on: function _0x3e0ddd(_0x3c1383, _0x3b5671) {
                var _0x8f4166 = this;
                setTimeout(function () {
                  _0x3b5671(_0x8f4166[_0x3c1383]);
                }, 0);
              },
              addTest: function _0x3810b1(_0x40b726, _0x21adda, _0x46bf2e) {
                _0x17f80c.push({
                  name: _0x40b726,
                  fn: _0x21adda,
                  options: _0x46bf2e
                });
              },
              addAsyncTest: function _0x531b34(_0x14656c) {
                _0x17f80c.push({
                  name: null,
                  fn: _0x14656c
                });
              }
            };
            var _0x3cf45b = function _0x407730() {};
            _0x3cf45b.prototype = _0x50e5e5;
            _0x3cf45b = new _0x3cf45b();
            var _0x5bc98c = false;
            try {
              _0x5bc98c = "WebSocket" in _0x245a63 && _0x245a63.WebSocket.CLOSING === 2;
            } catch (_0x2f2b2e) {}
            _0x3cf45b.addTest("websockets", _0x5bc98c);
            var _0x4d91c8 = _0xe0fdf4.documentElement;
            var _0x4afe72 = _0x4d91c8.nodeName.toLowerCase() === "svg";
            _0x3cf45b.addTest("canvas", function () {
              var _0x5cfd94 = _0x500615("canvas");
              return !!_0x5cfd94.getContext && !!_0x5cfd94.getContext("2d");
            });
            _0x3cf45b.addTest("canvastext", function () {
              return _0x3cf45b.canvas !== false && typeof _0x500615("canvas").getContext("2d").fillText == "function";
            });
            (function () {
              var _0x4890df;
              var _0xcd24bd;
              var _0x44bf26;
              var _0xf730a4;
              var _0x5757d6;
              var _0x3e6f38;
              var _0x23199b;
              for (var _0x8c8732 in _0x17f80c) {
                if (_0x17f80c.hasOwnProperty(_0x8c8732)) {
                  _0x4890df = [];
                  _0xcd24bd = _0x17f80c[_0x8c8732];
                  if (_0xcd24bd.name && (_0x4890df.push(_0xcd24bd.name.toLowerCase()), _0xcd24bd.options && _0xcd24bd.options.aliases && _0xcd24bd.options.aliases.length)) {
                    for (_0x44bf26 = 0; _0x44bf26 < _0xcd24bd.options.aliases.length; _0x44bf26++) {
                      _0x4890df.push(_0xcd24bd.options.aliases[_0x44bf26].toLowerCase());
                    }
                  }
                  _0xf730a4 = _0x4db743(_0xcd24bd.fn, "function") ? _0xcd24bd.fn() : _0xcd24bd.fn;
                  _0x5757d6 = 0;
                  for (; _0x5757d6 < _0x4890df.length; _0x5757d6++) {
                    _0x3e6f38 = _0x4890df[_0x5757d6];
                    _0x23199b = _0x3e6f38.split(".");
                    if (_0x23199b.length === 1) {
                      _0x3cf45b[_0x23199b[0]] = _0xf730a4;
                    } else {
                      if (!!_0x3cf45b[_0x23199b[0]] && !(_0x3cf45b[_0x23199b[0]] instanceof Boolean)) {
                        _0x3cf45b[_0x23199b[0]] = new Boolean(_0x3cf45b[_0x23199b[0]]);
                      }
                      _0x3cf45b[_0x23199b[0]][_0x23199b[1]] = _0xf730a4;
                    }
                    _0x2ff9e2.push((_0xf730a4 ? "" : "no-") + _0x23199b.join("-"));
                  }
                }
              }
            })();
            (function (_0x4e00ec) {
              var _0x180636 = _0x4d91c8.className;
              var _0x1ab6ec = _0x3cf45b._config.classPrefix || "";
              if (_0x4afe72) {
                _0x180636 = _0x180636.baseVal;
              }
              if (_0x3cf45b._config.enableJSClass) {
                var _0x2414dc = new RegExp("(^|\\s)" + _0x1ab6ec + "no-js(\\s|$)");
                _0x180636 = _0x180636.replace(_0x2414dc, "$1" + _0x1ab6ec + "js$2");
              }
              if (_0x3cf45b._config.enableClasses) {
                _0x180636 += " " + _0x1ab6ec + _0x4e00ec.join(" " + _0x1ab6ec);
                if (_0x4afe72) {
                  _0x4d91c8.className.baseVal = _0x180636;
                } else {
                  _0x4d91c8.className = _0x180636;
                }
              }
            })(_0x2ff9e2);
            delete _0x50e5e5.addTest;
            delete _0x50e5e5.addAsyncTest;
            for (var _0x101893 = 0; _0x101893 < _0x3cf45b._q.length; _0x101893++) {
              _0x3cf45b._q[_0x101893]();
            }
            _0x245a63.Modernizr = _0x3cf45b;
          })(window, document);
          return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
        }
        document.getElementById("game-wrap").style.display = "unblock";
        
        // Add animated confetti background
        var confettiURL = "https://imgur.com/7dqKnra.png";
        var bgLayerId = "animated-confetti-layer";
        var bgLayer = document.getElementById(bgLayerId);
        
        if (!bgLayer) {
          bgLayer = document.createElement("div");
          bgLayer.id = bgLayerId;
          bgLayer.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            z-index: 1;
            pointer-events: none;
          `;
          document.body.appendChild(bgLayer);
        }
        
        // Add confetti CSS styles
        var styleId = "confetti-style";
        if (!document.getElementById(styleId)) {
          var st = document.createElement("style");
          st.id = styleId;
          st.textContent = `
            .confetti {
              position: absolute;
              bottom: -50px;
              width: 20px;
              height: 20px;
              background-image: url('` + confettiURL + `');
              background-size: contain;
              background-repeat: no-repeat;
              background-position: center;
              animation: floatUpRandom linear infinite;
              opacity: 0.9;
              pointer-events: none;
              will-change: transform, opacity;
            }
            
            @keyframes floatUpRandom {
              0% {
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0.9;
              }
              100% {
                transform: translateY(-100vh) translateX(var(--end-x, 0)) rotate(var(--end-rotate, 0deg));
                opacity: 0;
              }
            }
          `;
          document.head.appendChild(st);
        }
        
        // Clear existing confetti and add new ones
        bgLayer.innerHTML = '';
        for (let i = 0; i < 20; i++) {
          let confetti = document.createElement("div");
          confetti.className = "confetti";
          confetti.style.left = `${Math.random() * 100}%`;
          confetti.style.setProperty("--end-x", `${(Math.random() - 0.5) * 100}%`);
          confetti.style.setProperty("--end-rotate", `${Math.random() * 360}deg`);
          confetti.style.animationDuration = `${5 + Math.random() * 10}s`;
          confetti.style.animationDelay = `${Math.random() * 5}s`;
          bgLayer.appendChild(confetti);
        }
        
        if (!_0x349bb7()) {
          document.getElementById("error-view").style.display = "unblock";
          return;
        }
        (function () {
          function _0x4b2cbe() {
            return _0x3c7638;
          }
          var _0x3819e1 = {};
          var _0x3a8870 = {};
          var _0x36bffa = {
            a: {
              r: window.runtimeHash,
              b: "https://gateway.wormate.io",
              c: "https://resources.wormate.io",
              d: "/images/linelogo-valday2023.png",
              e: "/images/guest-avatar-valday2023.png",
              f: "/images/confetti-valday2023.png",
              g: "/images/bg-event-pattern-valday2023.png"
            }
          };
          _0x36bffa.a.i = function () {
            var _0x5455ed = window.I18N_LANG;
            _0x5455ed ||= "en";
            return _0x5455ed;
          }();
          _0x36bffa.a.j = function () {
            var _0x4a2289 = undefined;
            switch (_0x36bffa.a.i) {
              case "uk":
                _0x4a2289 = "uk_UA";
                break;
              case "de":
                _0x4a2289 = "de_DE";
                break;
              case "fr":
                _0x4a2289 = "fr_FR";
                break;
              case "es":
                _0x4a2289 = "es_ES";
                break;
              default:
                _0x4a2289 = "en_US";
            }
            return _0x4a2289;
          }();
          moment.locale(_0x36bffa.a.j);
          var _0x4efbaa = function () {
            return {
              Container: PIXI.Container,
              BaseTexture: PIXI.BaseTexture,
              Texture: PIXI.Texture,
              Renderer: PIXI.Renderer,
              Graphics: PIXI.Graphics,
              Shader: PIXI.Shader,
              Rectangle: PIXI.Rectangle,
              Sprite: PIXI.Sprite,
              Text: PIXI.Text,
              Geometry: PIXI.Geometry,
              Mesh: PIXI.Mesh,
              v: {
                z: PIXI.BLEND_MODES.ADD,
                A: PIXI.BLEND_MODES.SCREEN,
                B: PIXI.BLEND_MODES.MULTIPLY
              },
              C: {
                D: PIXI.WRAP_MODES.REPEAT
              }
            };
          }();
          _0x3a8870.F = 6.283185307179586;
          _0x3a8870.G = Math.PI;
          _0x36bffa.H = function (_0x42281d) {
            return window.I18N_MESSAGES[_0x42281d];
          };
          _0x36bffa.I = function (_0x3290ac) {
            if (_0x3290ac[_0x36bffa.a.i]) {
              return _0x3290ac[_0x36bffa.a.i];
            } else if (_0x3290ac.en) {
              return _0x3290ac.en;
            } else {
              return _0x3290ac.x;
            }
          };
          _0x36bffa.J = function (_0x4b3053) {
            var _0x2c43cc = (Math.floor(_0x4b3053) % 60).toString();
            var _0x300888 = (Math.floor(_0x4b3053 / 60) % 60).toString();
            var _0x4ee87f = (Math.floor(_0x4b3053 / 3600) % 24).toString();
            var _0xb8236e = Math.floor(_0x4b3053 / 86400).toString();
            var _0x5c61a3 = _0x36bffa.H("util.time.days");
            var _0x292e4e = _0x36bffa.H("util.time.hours");
            var _0x498a0d = _0x36bffa.H("util.time.min");
            var _0x40f2b3 = _0x36bffa.H("util.time.sec");
            if (_0xb8236e > 0) {
              return _0xb8236e + " " + _0x5c61a3 + " " + _0x4ee87f + " " + _0x292e4e + " " + _0x300888 + " " + _0x498a0d + " " + _0x2c43cc + " " + _0x40f2b3;
            } else if (_0x4ee87f > 0) {
              return _0x4ee87f + " " + _0x292e4e + " " + _0x300888 + " " + _0x498a0d + " " + _0x2c43cc + " " + _0x40f2b3;
            } else if (_0x300888 > 0) {
              return _0x300888 + " " + _0x498a0d + " " + _0x2c43cc + " " + _0x40f2b3;
            } else {
              return _0x2c43cc + " " + _0x40f2b3;
            }
          };
          _0x36bffa.K = function (_0x452a5e) {
            if (_0x452a5e.includes("href")) {
              return _0x452a5e.replaceAll("href", "target=\"_black\" href");
            } else {
              return _0x452a5e;
            }
          };
          _0x36bffa.L = function (_0x457289, _0x58e4fa, _0x3d2e4c, _0x29960c) {
            var _0x49d7a1 = document.createElement("script");
            var _0x187792 = true;
            if (_0x3be3f8(_0x58e4fa) !== "undefined" && _0x58e4fa !== null) {
              if (_0x3be3f8(_0x58e4fa.id) !== "undefined") {
                _0x49d7a1.id = _0x58e4fa.id;
              }
              if (_0x3be3f8(_0x58e4fa.async) !== "undefined" && _0x58e4fa.async) {
                _0x49d7a1.async = "async";
              }
              if (_0x3be3f8(_0x58e4fa.defer) !== "undefined" && _0x58e4fa.defer) {
                _0x49d7a1.defer = "defer";
              }
              if (_0x3be3f8(_0x58e4fa.crossorigin) !== "undefined") {
                _0x49d7a1.crossorigin = _0x58e4fa.crossorigin;
              }
            }
            _0x49d7a1.type = _0x49d7a1.type == _0x29960c ? "module" : "text/javascript";
            _0x49d7a1.src = _0x457289;
            if (_0x3d2e4c) {
              _0x49d7a1.onload = _0x49d7a1.onreadystatechange = function () {
                _0x187792 = false;
                try {
                  _0x3d2e4c();
                } catch (_0x3d86ac) {}
                _0x49d7a1.onload = _0x49d7a1.onreadystatechange = null;
              };
            }
            (document.head || document.getElementsByTagName("head")[0]).appendChild(_0x49d7a1);
          };
          _0x36bffa.M = function (_0x242fe3, _0x4a0f8c) {
            var _0x242bdf = _0x4a0f8c;
            _0x242bdf.prototype = Object.create(_0x242fe3.prototype);
            _0x242bdf.prototype.constructor = _0x242bdf;
            _0x242bdf.parent = _0x242fe3;
            return _0x242bdf;
          };
          _0x36bffa.N = function (_0xfb1a60) {
            _0xfb1a60 %= _0x3a8870.F;
            if (_0xfb1a60 < 0) {
              return _0xfb1a60 + _0x3a8870.F;
            } else {
              return _0xfb1a60;
            }
          };
          _0x36bffa.O = function (_0x495945, _0x498fc3, _0x441b26) {
            return _0x36bffa.P(_0x441b26, _0x495945, _0x498fc3);
          };
          _0x36bffa.P = function (_0x23c0c1, _0xafaa78, _0x592074) {
            if (_0x23c0c1 > _0x592074) {
              return _0x592074;
            } else if (_0x23c0c1 < _0xafaa78) {
              return _0xafaa78;
            } else if (Number.isFinite(_0x23c0c1)) {
              return _0x23c0c1;
            } else {
              return (_0xafaa78 + _0x592074) * 0.5;
            }
          };
          _0x36bffa.Q = function (_0x266a8d, _0x1e81cc, _0x56e50b, _0x36d298) {
            if (_0x1e81cc > _0x266a8d) {
              return Math.min(_0x1e81cc, _0x266a8d + _0x56e50b * _0x36d298);
            } else {
              return Math.max(_0x1e81cc, _0x266a8d - _0x56e50b * _0x36d298);
            }
          };
          _0x36bffa.R = function (_0xc47825, _0x55debb, _0x484bca, _0x43509d, _0x521940) {
            return _0x55debb + (_0xc47825 - _0x55debb) * Math.pow(1 - _0x43509d, _0x484bca / _0x521940);
          };
          _0x36bffa.S = function (_0x7516dd, _0x40f37f, _0x419cee) {
            return _0x7516dd - (_0x7516dd - _0x40f37f) * _0x419cee;
          };
          _0x36bffa.T = function (_0x23eab7, _0x112904, _0x4c3db5, _0x5061c4) {
            var _0x1b263f = _0x4c3db5;
            var _0x39fc81 = _0x112904;
            var _0x5392fa = _0x112904 + _0x5061c4;
            if (_0x23eab7 == null) {
              throw new TypeError("this is null or not defined");
            }
            var _0x57a9c6 = _0x23eab7.length >>> 0;
            var _0x258c76 = _0x1b263f >> 0;
            var _0x57e6b5 = _0x258c76 < 0 ? Math.max(_0x57a9c6 + _0x258c76, 0) : Math.min(_0x258c76, _0x57a9c6);
            var _0x5f295e = _0x39fc81 >> 0;
            var _0x44049d = _0x5f295e < 0 ? Math.max(_0x57a9c6 + _0x5f295e, 0) : Math.min(_0x5f295e, _0x57a9c6);
            var _0x28747b = _0x5392fa === undefined ? _0x57a9c6 : _0x5392fa >> 0;
            var _0x558302 = _0x28747b < 0 ? Math.max(_0x57a9c6 + _0x28747b, 0) : Math.min(_0x28747b, _0x57a9c6);
            var _0x33045b = Math.min(_0x558302 - _0x44049d, _0x57a9c6 - _0x57e6b5);
            var _0x3469a8 = 1;
            for (_0x44049d < _0x57e6b5 && _0x57e6b5 < _0x44049d + _0x33045b && (_0x3469a8 = -1, _0x44049d += _0x33045b - 1, _0x57e6b5 += _0x33045b - 1); _0x33045b > 0;) {
              if (_0x44049d in _0x23eab7) {
                _0x23eab7[_0x57e6b5] = _0x23eab7[_0x44049d];
              } else {
                delete _0x23eab7[_0x57e6b5];
              }
              _0x44049d += _0x3469a8;
              _0x57e6b5 += _0x3469a8;
              _0x33045b--;
            }
            return _0x23eab7;
          };
          _0x36bffa.U = function (_0x3cb4ba) {
            if (_0x3cb4ba.parent != null) {
              _0x3cb4ba.parent.removeChild(_0x3cb4ba);
            }
          };
          _0x36bffa.V = function (_0x3f99c5, _0x5e1bd) {
            return _0x3f99c5 + (_0x5e1bd - _0x3f99c5) * Math.random();
          };
          _0x36bffa.W = function (_0x5f5719) {
            return _0x5f5719[parseInt(Math.random() * _0x5f5719.length)];
          };
          _0x36bffa.X = function () {
            return Math.random().toString(36).substring(2, 15);
          };
          _0x36bffa.Y = function (_0x332cc3, _0x471cc7, _0x45541f) {
            var _0x5b742b = (1 - Math.abs(_0x45541f * 2 - 1)) * _0x471cc7;
            var _0x1f23e2 = _0x5b742b * (1 - Math.abs(_0x332cc3 / 60 % 2 - 1));
            var _0x52c33c = _0x45541f - _0x5b742b / 2;
            if (_0x332cc3 >= 0 && _0x332cc3 < 60) {
              return [_0x52c33c + _0x5b742b, _0x52c33c + _0x1f23e2, _0x52c33c + 0];
            } else if (_0x332cc3 >= 60 && _0x332cc3 < 120) {
              return [_0x52c33c + _0x1f23e2, _0x52c33c + _0x5b742b, _0x52c33c + 0];
            } else if (_0x332cc3 >= 120 && _0x332cc3 < 180) {
              return [_0x52c33c + 0, _0x52c33c + _0x5b742b, _0x52c33c + _0x1f23e2];
            } else if (_0x332cc3 >= 180 && _0x332cc3 < 240) {
              return [_0x52c33c + 0, _0x52c33c + _0x1f23e2, _0x52c33c + _0x5b742b];
            } else if (_0x332cc3 >= 240 && _0x332cc3 < 300) {
              return [_0x52c33c + _0x1f23e2, _0x52c33c + 0, _0x52c33c + _0x5b742b];
            } else {
              return [_0x52c33c + _0x5b742b, _0x52c33c + 0, _0x52c33c + _0x1f23e2];
            }
          };
          _0x36bffa.Z = function (_0x48a59c, _0x4bc156, _0x502f35) {
            $.get(_0x48a59c).fail(_0x4bc156).done(_0x502f35);
          };
          _0x36bffa.$ = function (_0x908703, _0xabae3d, _0x3293a2, _0x483ea5) {
            $.ajax({
              type: "GET",
              url: _0x908703,
              xhrFields: {
                responseType: "arraybuffer",
                onprogress: function _0x34a19c(_0x161516) {
                  if (_0x161516.lengthComputable) {
                    _0x483ea5(_0x161516.loaded / _0x161516.total * 100);
                  }
                }
              }
            }).fail(_0xabae3d).done(_0x3293a2);
          };
          _0x36bffa._ = function (_0x246488, _0x93eab9) {
            for (var _0xc8a7aa in _0x246488) {
              if (_0x246488.hasOwnProperty(_0xc8a7aa)) {
                _0x93eab9(_0xc8a7aa, _0x246488[_0xc8a7aa]);
              }
            }
          };
          _0x36bffa.aa = function (_0xb8c2c6) {
            for (var _0x370856 = _0xb8c2c6.length - 1; _0x370856 > 0; _0x370856--) {
              var _0x48e9ac = Math.floor(Math.random() * (_0x370856 + 1));
              var _0x343178 = _0xb8c2c6[_0x370856];
              _0xb8c2c6[_0x370856] = _0xb8c2c6[_0x48e9ac];
              _0xb8c2c6[_0x48e9ac] = _0x343178;
            }
            return _0xb8c2c6;
          };
          (function () {
            var _0x3b547f = 0;
            try {
              DataView.prototype.ba = function (_0x508c66) {
                try {
                  _0x3b547f = _0x508c66;
                  return this.getInt8(_0x508c66);
                } catch (_0x508df0) {
                  console.log(_0x3b547f);
                  _0x3c7638.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.ca = function (_0xa41611) {
                try {
                  _0x3b547f = _0xa41611;
                  return this.getInt16(_0xa41611);
                } catch (_0x1cd2ee) {
                  console.log(_0x3b547f);
                  _0x3c7638.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.da = function (_0x543af9) {
                try {
                  _0x3b547f = _0x543af9;
                  return this.getInt32(_0x543af9);
                } catch (_0x57b591) {
                  console.log(_0x3b547f);
                  _0x3c7638.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.ea = function (_0x374445) {
                try {
                  _0x3b547f = _0x374445;
                  return this.getFloat32(_0x374445);
                } catch (_0x400ae9) {
                  console.log(_0x3b547f);
                  _0x3c7638.dh.mq.close();
                  return 0;
                }
              };
              DataView.prototype.fa = function (_0x370413) {
                try {
                  _0x3b547f = _0x370413;
                  return this.getFloat64(_0x370413);
                } catch (_0x2ea0ed) {
                  console.log(_0x3b547f);
                  _0x3c7638.dh.mq.close();
                  return 0;
                }
              };
            } catch (_0x4061e7) {
              console.log(_0x3b547f);
              console.error("Error adding methods to DataView prototype:", _0x4061e7);
            }
          })();
          _0x36bffa.ga = function () {
            function _0xa13080() {
              if (URLSERV_WORMWORLD) {
                try {
                  ga("send", "event", "antiadunblocker", window.runtimeHash + "_complete");
                } catch (_0x323e45) {}
                _0x4ea41c(true);
              }
            }
            var _0x15a176 = false;
            var _0x4ea41c = function _0x9d5bde() {};
            var _0x500f6b = {};
            var _0x503c18 = "JDHnkHtYwyXyVgG9";
            $("#adbl-continue").click(function () {
              $("#" + _0x503c18).fadeOut(500);
              _0x4ea41c(false);
            });
            _0x500f6b.ha = function (_0x414a55) {
              _0x4ea41c = _0x414a55;
              if (!_0x15a176) {
                try {
                  aiptag.cmd.player.push(function () {
                    aiptag.adplayer = new aipPlayer();
                  });
                  _0x15a176 = true;
                } catch (_0x2c121) {}
              }
            };
            _0x500f6b.ia = function () {
              try {
                ga("send", "event", "antiadunblocker", window.runtimeHash + "_start");
              } catch (_0x11a96c) {}
              _0xa13080();
            };
            return _0x500f6b;
          };
          _0x36bffa.ja = function (_0x2772ee, _0x5d7ee3) {
            var _0x3f8c75 = $("#" + _0x2772ee);
            var _0x1b2d86 = _0x5d7ee3;
            var _0x1a49eb = {};
            var _0x5bbb45 = false;
            _0x1a49eb.ha = function () {
              if (!_0x5bbb45) {
                _0x3f8c75.empty();
                _0x3f8c75.append("<div id='" + _0x1b2d86 + "'></div>");
                try {
                  try {
                    ga("send", "event", "banner", window.runtimeHash + "_display");
                  } catch (_0x2cc807) {}
                  aiptag.cmd.display.push(function () {
                    aipDisplayTag.display(_0x1b2d86);
                  });
                  _0x5bbb45 = true;
                } catch (_0x43b1eb) {}
              }
            };
            _0x1a49eb.ka = function () {
              try {
                try {
                  ga("send", "event", "banner", window.runtimeHash + "_refresh");
                } catch (_0x5e1608) {}
                aiptag.cmd.display.push(function () {
                  aipDisplayTag.display(_0x1b2d86);
                });
              } catch (_0x3b59e8) {}
            };
            return _0x1a49eb;
          };
          _0x3819e1.la = function () {
            function _0x55b73c(_0x4d56fb, _0x5cb196, _0x56b941, _0x5b4415, _0x3703c1, _0x4d3986, _0x311f68, _0x294721, _0x342edc, _0x5562b5, _0xdbc28c) {
              this.ma = _0x4d56fb;
              this.na = _0x5cb196;
              this.oa = null;
              this.pa = false;
              this.qa = _0x56b941;
              this.ra = _0x5b4415;
              this.sa = _0x3703c1;
              this.ta = _0x4d3986;
              this.ua = _0x311f68 || (_0x342edc || _0x3703c1) / 2;
              this.va = _0x294721 || (_0x5562b5 || _0x4d3986) / 2;
              this.wa = _0x342edc || _0x3703c1;
              this.xa = _0x5562b5 || _0x4d3986;
              this.ya = 0.5 - (this.ua - this.wa * 0.5) / this.sa;
              this.za = 0.5 - (this.va - this.xa * 0.5) / this.ta;
              this.Aa = this.sa / this.wa;
              if (_0xdbc28c) {
                this.ev = _0xdbc28c;
              } else {
                null;
              }
              this.Ba = this.ta / this.xa;
            }
            _0x55b73c.Ca = function () {
              return new _0x55b73c("", null, 0, 0, 0, 0, 0, 0, 0, 0);
            };
            _0x55b73c.Da = function (_0x206616, _0x2f4a13, _0x2f563b, _0xc3226a) {
              return new _0x55b73c(_0x206616, _0x2f4a13, _0x2f563b.x, _0x2f563b.y, _0x2f563b.w, _0x2f563b.h, _0x2f563b.px, _0x2f563b.py, _0x2f563b.pw, _0x2f563b.ph, _0xc3226a);
            };
            _0x55b73c.prototype.Ea = function () {
              if (this.pa) {
                return this.oa;
              }
              if (this.na != null) {
                this.oa = new _0x4efbaa.Texture(this.na, new _0x4efbaa.Rectangle(this.qa, this.ra, this.sa, this.ta));
              }
              this.pa = true;
              return this.oa;
            };
            _0x55b73c.prototype.Fa = function () {
              if (this.oa != null) {
                this.oa.destroy();
              }
            };
            return _0x55b73c;
          }();
          _0x3819e1.Ga = function () {
            function _0x271ea4(_0x18c0f3, _0xef27f4, _0x57dfff, _0x14740c, _0x306103, _0xc20790, _0x5a4d66, _0x155288, _0x7df0e0, _0x4f144b, _0x473286, _0x30c03f, _0x259a5a, _0x11e790, _0xf172f0, _0x412dfc, _0x24dd33, _0x3b86fd) {
              this.Ha = _0x18c0f3;
              this.Ia = _0xef27f4;
              this.Ja = _0x57dfff;
              this.Ka = _0x14740c;
              this.La = _0x306103;
              this.Ma = _0xc20790;
              this.Na = _0x5a4d66;
              this.Oa = _0x155288;
              this.Pa = _0x7df0e0;
              this.Qa = _0x4f144b;
              this.Ra = _0x473286;
              this.Sa = _0x30c03f;
              this.Ta = _0x259a5a;
              this.Ua = _0x11e790;
              this.Va = _0xf172f0;
              this.Wa = _0x412dfc;
              this.Xa = _0x24dd33;
              this.Ya = _0x3b86fd;
            }
            _0x271ea4.prototype.Fa = function () {
              for (var _0x353210 = 0; _0x353210 < this.Ha.length; _0x353210++) {
                this.Ha[_0x353210].dispose();
                this.Ha[_0x353210].destroy();
              }
              this.Ha = [];
              for (var _0x13bfbd = 0; _0x13bfbd < this.Ia.length; _0x13bfbd++) {
                this.Ia[_0x13bfbd].Fa();
              }
              this.Ia = [];
            };
            _0x271ea4.Ca = function () {
              var _0x23e878 = new _0x271ea4.Za(_0x3819e1._a.$a, _0x3819e1._a.$a);
              var _0x28e526 = new _0x271ea4.ab("#ffffff", [_0x3819e1._a.$a], [_0x3819e1._a.$a]);
              return new _0x271ea4([], [], {}, _0x23e878, {}, new _0x271ea4.bb(_0x3819e1._a.$a), {}, _0x28e526, {}, new _0x271ea4.cb("", _0x28e526, _0x23e878), {}, new _0x271ea4.db([_0x3819e1._a.$a]), {}, new _0x271ea4.db([_0x3819e1._a.$a]), {}, new _0x271ea4.db([_0x3819e1._a.$a]), {}, new _0x271ea4.db([_0x3819e1._a.$a]));
            };
            _0x271ea4.eb = function (_0x23eda0, _0x516c8f, _0x44594d, _0x546b3e) {
              var _0x16632f = new _0x271ea4.Za(_0x3819e1._a.$a, _0x3819e1._a.$a);
              var _0x45fe50 = new _0x271ea4.ab("#ffffff", [_0x23eda0], [_0x516c8f]);
              return new _0x271ea4([], [], {}, _0x16632f, {}, new _0x271ea4.bb(_0x3819e1._a.$a), {}, _0x45fe50, {}, new _0x271ea4.cb("", _0x45fe50, _0x16632f), {}, new _0x271ea4.db([_0x44594d]), {}, new _0x271ea4.db([_0x546b3e]), {}, new _0x271ea4.db([_0x3819e1._a.$a]), {}, new _0x271ea4.db([_0x3819e1._a.$a]));
            };
            _0x271ea4.fb = function (_0x5dc044, _0x51ab3b, _0x5035bc, _0x5f079f) {
              var _0x21f656 = {};
              _0x36bffa._(_0x5dc044.colorDict, function (_0x4d968a, _0x6ce9a8) {
                _0x21f656[_0x4d968a] = "#" + _0x6ce9a8;
              });
              var _0x4651ee = {};
              for (var _0x11abb7 = 0; _0x11abb7 < _0x5dc044.skinArrayDict.length; _0x11abb7++) {
                var _0x519656 = _0x5dc044.skinArrayDict[_0x11abb7];
                _0x4651ee[_0x519656.id] = new _0x271ea4.ab(_0x21f656[_0x519656.prime], _0x519656.base.map(function (_0xce9b36) {
                  return _0x51ab3b[_0xce9b36];
                }), _0x519656.glow.map(function (_0x22902e, _0x12a228) {
                  return _0x51ab3b[_0x22902e];
                }));
                if (_0x519656.glow[0] == "a_trans") {
                  _0x4651ee[_0x519656.id].vbb = _0x51ab3b.a_black;
                }
              }
              var _0x31f6bc = undefined;
              var _0x5424f5 = _0x5dc044.skinUnknown;
              try {
                _0x31f6bc = new _0x271ea4.ab(_0x21f656[_0x5424f5.prime], _0x5424f5.base.map(function (_0x14ace7) {
                  return _0x51ab3b[_0x14ace7];
                }), _0x5424f5.glow.map(function (_0x4fa3fb) {
                  return _0x51ab3b[_0x4fa3fb];
                }));
              } catch (_0x4b89ae) {}
              var _0x4d30bc = {};
              _0x36bffa._(_0x5dc044.eyesDict, function (_0x589847, _0x466c14) {
                var _0x66cc16 = parseInt(_0x589847);
                _0x4d30bc[_0x66cc16] = new _0x271ea4.db(_0x466c14.base.map(function (_0x341586) {
                  return _0x51ab3b[_0x341586.region];
                }));
              });
              var _0x8660f3 = new _0x271ea4.db(_0x5dc044.eyesUnknown.base.map(function (_0x1ae369) {
                return _0x51ab3b[_0x1ae369.region];
              }));
              var _0x541b8f = {};
              _0x36bffa._(_0x5dc044.mouthDict, function (_0x5cc60d, _0x396c26) {
                var _0x28eab4 = parseInt(_0x5cc60d);
                _0x541b8f[_0x28eab4] = new _0x271ea4.db(_0x396c26.base.map(function (_0x193d73) {
                  return _0x51ab3b[_0x193d73.region];
                }));
              });
              var _0x4deba0 = new _0x271ea4.db(_0x5dc044.mouthUnknown.base.map(function (_0x5dfc9d) {
                return _0x51ab3b[_0x5dfc9d.region];
              }));
              var _0x3baabc = {};
              _0x36bffa._(_0x5dc044.hatDict, function (_0x70ae89, _0x18b48d) {
                var _0xfe894b = parseInt(_0x70ae89);
                _0x3baabc[_0xfe894b] = new _0x271ea4.db(_0x18b48d.base.map(function (_0x55a2d7) {
                  return _0x51ab3b[_0x55a2d7.region];
                }));
              });
              var _0x461080 = new _0x271ea4.db(_0x5dc044.hatUnknown.base.map(function (_0x2c096e) {
                return _0x51ab3b[_0x2c096e.region];
              }));
              var _0x56722c = {};
              _0x36bffa._(_0x5dc044.glassesDict, function (_0x4ee7a7, _0x5b5efe) {
                var _0x55806e = parseInt(_0x4ee7a7);
                _0x56722c[_0x55806e] = new _0x271ea4.db(_0x5b5efe.base.map(function (_0x24c7e7) {
                  return _0x51ab3b[_0x24c7e7.region];
                }));
              });
              var _0x4b6757 = new _0x271ea4.db(_0x5dc044.glassesUnknown.base.map(function (_0x24a004) {
                return _0x51ab3b[_0x24a004.region];
              }));
              var _0x4af7bc = {};
              _0x36bffa._(_0x5dc044.portionDict, function (_0x32bc70, _0x3eaa95) {
                _0x32bc70 = parseInt(_0x32bc70);
                _0x4af7bc[_0x32bc70] = new _0x271ea4.Za(_0x51ab3b[_0x3eaa95.base], _0x51ab3b[_0x3eaa95.glow]);
              });
              var _0x4632e7 = undefined;
              var _0x122133 = _0x5dc044.portionUnknown;
              _0x4632e7 = new _0x271ea4.Za(_0x51ab3b[_0x122133.base], _0x51ab3b[_0x122133.glow]);
              var _0x3de101 = {};
              _0x36bffa._(_0x5dc044.abilityDict, function (_0x25a453, _0x21b666) {
                _0x25a453 = parseInt(_0x25a453);
                _0x3de101[_0x25a453] = new _0x271ea4.bb(_0x51ab3b[_0x21b666.base]);
              });
              var _0x53f705 = undefined;
              var _0x1a106c = _0x5dc044.abilityUnknown;
              _0x53f705 = new _0x271ea4.bb(_0x51ab3b[_0x1a106c.base]);
              var _0x24029a = {};
              _0x36bffa._(_0x5dc044.teamDict, function (_0x5358ce, _0x39bb62) {
                _0x5358ce = parseInt(_0x5358ce);
                _0x24029a[_0x5358ce] = new _0x271ea4.cb(_0x39bb62.title, new _0x271ea4.ab(_0x21f656[_0x39bb62.skin.prime], null, _0x39bb62.skin.glow.map(function (_0x428bb3) {
                  return _0x51ab3b[_0x428bb3];
                })), new _0x271ea4.Za(null, _0x51ab3b[_0x39bb62.portion.glow]));
              });
              var _0x52ccfc = new _0x271ea4.cb({}, _0x31f6bc, _0x4632e7);
              return new _0x271ea4(_0x5035bc, _0x5f079f, _0x4af7bc, _0x4632e7, _0x3de101, _0x53f705, _0x4651ee, _0x31f6bc, _0x24029a, _0x52ccfc, _0x4d30bc, _0x8660f3, _0x541b8f, _0x4deba0, _0x3baabc, _0x461080, _0x56722c, _0x4b6757);
            };
            _0x271ea4.prototype.gb = function (_0x192d7c) {
              var _0x17ed59 = _0x36bffa.aa(Object.keys(this.Na)).slice(0, _0x192d7c);
              var _0x43f126 = _0x36bffa.aa(Object.keys(this.Ra)).slice(0, _0x192d7c);
              var _0x1c1d1a = _0x36bffa.aa(Object.keys(this.Ta)).slice(0, _0x192d7c);
              var _0x47711d = _0x36bffa.aa(Object.keys(this.Va)).slice(0, _0x192d7c);
              var _0x21eb79 = _0x36bffa.aa(Object.keys(this.Xa)).slice(0, _0x192d7c);
              var _0x559cd0 = [];
              for (var _0xc2cee3 = 0; _0xc2cee3 < _0x192d7c; _0xc2cee3++) {
                var _0xc5cf28 = _0x17ed59.length > 0 ? _0x17ed59[_0xc2cee3 % _0x17ed59.length] : 0;
                var _0x46750e = _0x43f126.length > 0 ? _0x43f126[_0xc2cee3 % _0x43f126.length] : 0;
                var _0x4a5307 = _0x1c1d1a.length > 0 ? _0x1c1d1a[_0xc2cee3 % _0x1c1d1a.length] : 0;
                var _0x3a75cb = _0x47711d.length > 0 ? _0x47711d[_0xc2cee3 % _0x47711d.length] : 0;
                var _0x5878c3 = _0x21eb79.length > 0 ? _0x21eb79[_0xc2cee3 % _0x21eb79.length] : 0;
                _0x559cd0.push(new _0x3819e1.hb(_0xc5cf28, _0x46750e, _0x4a5307, _0x3a75cb, _0x5878c3));
              }
              return _0x559cd0;
            };
            _0x271ea4.prototype.ib = function (_0x300538) {
              if (this.Na.hasOwnProperty(_0x300538)) {
                return this.Na[_0x300538];
              } else {
                return this.Oa;
              }
            };
            _0x271ea4.prototype.jb = function (_0x3ffd9b) {
              if (this.Pa.hasOwnProperty(_0x3ffd9b)) {
                return this.Pa[_0x3ffd9b];
              } else {
                return this.Qa;
              }
            };
            _0x271ea4.prototype.kb = function (_0x471464) {
              if (this.Ra.hasOwnProperty(_0x471464)) {
                return this.Ra[_0x471464];
              } else {
                return this.Sa;
              }
            };
            _0x271ea4.prototype.lb = function (_0x273ea1) {
              if (this.Ta.hasOwnProperty(_0x273ea1)) {
                return this.Ta[_0x273ea1];
              } else {
                return this.Ua;
              }
            };
            _0x271ea4.prototype.mb = function (_0x345c0d) {
              if (this.Xa.hasOwnProperty(_0x345c0d)) {
                return this.Xa[_0x345c0d];
              } else {
                return this.Ya;
              }
            };
            _0x271ea4.prototype.nb = function (_0x5aa2d0) {
              if (this.Va.hasOwnProperty(_0x5aa2d0)) {
                return this.Va[_0x5aa2d0];
              } else {
                return this.Wa;
              }
            };
            _0x271ea4.prototype.ob = function (_0x5ece61) {
              if (this.Ja.hasOwnProperty(_0x5ece61)) {
                return this.Ja[_0x5ece61];
              } else {
                return this.Ka;
              }
            };
            _0x271ea4.prototype.pb = function (_0x39bbf7) {
              if (this.La.hasOwnProperty(_0x39bbf7)) {
                return this.La[_0x39bbf7];
              } else {
                return this.Ma;
              }
            };
            _0x271ea4.cb = function () {
              function _0xae6b5c(_0x2f1713, _0x867f86, _0x282935) {
                this.qb = _0x2f1713;
                this.rb = _0x867f86;
                this.sb = _0x282935;
              }
              return _0xae6b5c;
            }();
            _0x271ea4.ab = function () {
              function _0x2c55c5(_0x331062, _0xb69e49, _0x2dd27b) {
                this.tb = _0x331062;
                this.ub = _0xb69e49;
                this.vb = _0x2dd27b;
              }
              return _0x2c55c5;
            }();
            _0x271ea4.db = function () {
              function _0x4cc1c7(_0x4d1093) {
                this.ub = _0x4d1093;
              }
              return _0x4cc1c7;
            }();
            _0x271ea4.Za = function () {
              function _0x41294c(_0x43a1fe, _0xda2870) {
                this.ub = _0x43a1fe;
                this.vb = _0xda2870;
              }
              return _0x41294c;
            }();
            _0x271ea4.bb = function () {
              function _0x52b2be(_0x1e4237) {
                this.ub = _0x1e4237;
              }
              return _0x52b2be;
            }();
            return _0x271ea4;
          }();
          _0x3819e1._a = function () {
            function _0x3f7514() {
              var _0xe4687a = _0x4efbaa.BaseTexture.from("/images/wear-ability.png");
              for (var _0x46b3a0 = 1; _0x46b3a0 < 10; _0x46b3a0++) {
                this["vb" + _0x46b3a0] = new _0x3819e1.la("emoji_" + _0x46b3a0, _0xe4687a, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
              }
              this.wb = new _0x3819e1.la("magnet_ability", _0xe4687a, 158, 86, 67, 124, 148, 63.5, 128, 128);
              this.xb = new _0x3819e1.la("velocity_ability", _0xe4687a, 158, 4, 87, 74, 203, 63.5, 128, 128);
              this.yb = new _0x3819e1.la("flex_ability", _0xe4687a, 158, 4, 87, 74, 203, 63.5, 128, 128);
              var _0x38fec3 = _0x4efbaa.BaseTexture.from("https://wormup.in/assets/images/zigzagability1.png");
              this.pwrFlex = new _0x3819e1.la("flex_ability", _0x38fec3, 158, 4, 87, 74, 203, 63.5, 128, 128);


              var _0x46b3a0 = _0x4efbaa.BaseTexture.from("/images/def-look.png");
              var _0x5265da = new _0x3819e1.la("def_eyes", _0x46b3a0, 0, 0, 42, 80, 75, 64, 128, 128);
              var _0x2b34d9 = new _0x3819e1.la("def_mouth", _0x46b3a0, 46, 0, 20, 48, 109, 63, 128, 128);
              var _0x33c187 = new _0x3819e1.la("def_skin_glow", _0x46b3a0, 70, 0, 32, 32, 0, 0, 0, 0);
              var _0x30411f = new _0x3819e1.la("def_skin_base", _0x46b3a0, 46, 52, 64, 64, 0, 0, 0, 0);
              var _0x58a4ad = _0x3819e1.Ga.eb(_0x30411f, _0x33c187, _0x5265da, _0x2b34d9);
              _wwc.mySkin = _0x58a4ad;
              this.zb = new _0x3819e1.Ab({}, _0x58a4ad);
              this.Bb = -10000;
              this.Cb = -10000;
              this.Db = function () {
                var _0x458b6d = window.document.createElement("canvas");
                _0x458b6d.width = 80;
                _0x458b6d.height = 80;
                return {
                  Eb: _0x458b6d,
                  Fb: _0x458b6d.getContext("2d"),
                  oa: new _0x4efbaa.Texture(_0x4efbaa.BaseTexture.from(_0x458b6d))
                };
              }();
              this.Gb = null;
              this.Hb = [];
            }
            _0x3f7514.$a = _0x3819e1.la.Ca();
            _0x3f7514.prototype.ha = function () {};
            _0x3f7514.prototype.Ib = function (_0x464c01, _0x55b5cd, _0x564f24) {
              var _0x3890d2 = this;
              var _0x1913e2 = this.zb.Jb();
              if (_0x1913e2 > 0 && Date.now() - this.Bb < 1200000) {
                if (_0x464c01 != null) {
                  _0x464c01();
                }
                return;
              }
              if (this.Gb != null && !this.Gb.Kb()) {
                if (Date.now() - this.Bb < 300000) {
                  if (_0x464c01 != null) {
                    _0x464c01();
                  }
                  return;
                }
                this.Gb.Lb();
                this.Gb = null;
              }
              var _0x269b72 = new _0x3819e1.Mb(_0x1913e2);
              _0x269b72.Nb(function (_0x259abc, _0x212313) {
                if (_0x269b72 === _0x3890d2.Gb && _0x564f24 != null) {
                  _0x564f24(_0x259abc, _0x212313);
                }
              });
              _0x269b72.Ob(function (_0x1c45ab) {
                if (_0x269b72 === _0x3890d2.Gb && _0x55b5cd != null) {
                  _0x55b5cd(_0x1c45ab);
                }
              });
              _0x269b72.Pb(function () {
                if (_0x269b72 === _0x3890d2.Gb && _0x55b5cd != null) {
                  _0x55b5cd(new Error());
                }
              });
              _0x269b72.Qb(function () {
                if (_0x269b72 === _0x3890d2.Gb && _0x464c01 != null) {
                  _0x464c01();
                }
              });
              _0x269b72.Rb(function (_0x4384a7) {
                if (_0x269b72 === _0x3890d2.Gb) {
                  _0x3890d2.Cb = Date.now();
                  _0x3890d2.Gb = null;
                  _0x3890d2.Sb();
                  _0x3890d2.zb.Ub().Fa();
                  _0x3890d2.zb = _0x4384a7;
                  if (_0x464c01 != null) {
                    _0x464c01();
                  }
                  _0x3890d2.Tb();
                  return;
                }
                try {
                  _0x4384a7.Ub().Fa();
                } catch (_0xb0595d) {}
              });
              _0x269b72.Vb();
              this.Bb = Date.now();
              this.Gb = _0x269b72;
            };
            _0x3f7514.prototype.Sb = function () {};
            _0x3f7514.prototype.Wb = function () {
              return this.zb.Jb() > 0;
            };
            _0x3f7514.prototype.Xb = function () {
              return this.zb.Yb();
            };
            _0x3f7514.prototype.Zb = function () {
              return this.Db;
            };
            _0x3f7514.prototype.$b = function (_0x549733) {
              this.Hb.push(_0x549733);
            };
            _0x3f7514.prototype.Tb = function () {
              for (var _0x1cd05d = 0; _0x1cd05d < this.Hb.length; _0x1cd05d++) {
                this.Hb[_0x1cd05d]();
              }
            };
            _0x3f7514.prototype.Ub = function () {
              return this.zb.Ub();
            };
            return _0x3f7514;
          }();
          _0x3819e1._b = function () {
            function _0x47e940(_0x12c90d) {
              this.ac = _0x12c90d;
            }
            _0x47e940.prototype.bc = function (_0x1f91ac) {
              return this.ac[_0x1f91ac];
            };
            _0x47e940.cc = function () {
              function _0x130c01() {
                this.dc = [];
              }
              _0x130c01.prototype.ec = function (_0x2a5681, _0x23aaad) {
                for (var _0x44bca4 = 0; _0x44bca4 < this.dc.length; _0x44bca4++) {
                  if (this.dc[_0x44bca4].fc === _0x2a5681) {
                    throw new Error();
                  }
                }
                this.dc.push(new _0x47e940.gc(_0x2a5681, _0x23aaad));
                return this;
              };
              _0x130c01.prototype.hc = function () {
                var _0x10ce15 = 0;
                for (var _0x2904d5 = 0; _0x2904d5 < this.dc.length; _0x2904d5++) {
                  _0x10ce15 += this.dc[_0x2904d5].ic;
                }
                var _0x341b65 = {};
                var _0x4cce46 = 0;
                for (var _0x317c54 = 0; _0x317c54 < this.dc.length; _0x317c54++) {
                  var _0x26e03a = this.dc[_0x317c54];
                  _0x26e03a.ic = _0x26e03a.ic / _0x10ce15;
                  _0x26e03a.jc = _0x4cce46;
                  _0x26e03a.kc = _0x4cce46 + _0x26e03a.ic;
                  _0x4cce46 = _0x26e03a.kc;
                  _0x341b65[_0x26e03a.fc] = _0x26e03a;
                }
                return new _0x47e940(_0x341b65);
              };
              return _0x130c01;
            }();
            _0x47e940.gc = function () {
              function _0x373c0f(_0x280c4b, _0x5e5d4c) {
                this.fc = _0x280c4b;
                this.ic = _0x5e5d4c;
                this.jc = 0;
                this.kc = 0;
              }
              _0x373c0f.prototype.lc = function (_0xf6f304) {
                return this.jc + (this.kc - this.jc) * _0xf6f304;
              };
              return _0x373c0f;
            }();
            return _0x47e940;
          }();
          _0x3819e1.WormSpriteTree = function () {
            function _0xf27b66() {
              this.nc = new _0x4efbaa.Container();
              this.nc.sortableChildren = true;
              this.oc = new _0x39400d();
              this.oc.zIndex = _0xfece1e * ((_0x5f092a + 1) * 2 + 1 + 3);
              this.pc = 0;
              this.qc = new Array(_0x5f092a);
              this.qc[0] = this.rc(0, new _0x3819e1.sc(), new _0x3819e1.sc());
              for (var _0xb04b0a = 1; _0xb04b0a < _0x5f092a; _0xb04b0a++) {
                this.qc[_0xb04b0a] = this.rc(_0xb04b0a, new _0x3819e1.sc(), new _0x3819e1.sc());
              }
              this.tc = 0;
              this.uc = 0;
              this.vc = 0;
            }
            var _0xfece1e = 0.001;
            var _0x5f092a = 797;
            var _0x51340d = 3.14159;
            var _0x37f8ca = -0.06640625;
            var _0x529157 = 0.84375;
            var _0x33b602 = 0.2578125;
            var _0x6055d6 = -0.03515625;
            var _0x12f431 = -0.0625;
            var _0x83f4fc = 0.5625;
            var _0x29d80b = _0x37f8ca * 3 + _0x529157;
            var _0x2be474 = _0x33b602 - _0x37f8ca * 3;
            var _0x2d0f3b = _0x37f8ca + _0x6055d6;
            var _0x809603 = 0.375;
            var _0x45080f = 0.75;
            var _0x4a7542 = _0x12f431 + _0x12f431;
            var _0x30465f = _0x6055d6 * 3 + _0x33b602;
            var _0x128f45 = _0x529157 - _0x6055d6 * 3;
            var _0x193574 = _0x6055d6 + _0x37f8ca;
            _0xf27b66.wc = _0x5f092a;
            _0xf27b66.prototype.rc = function (_0x130d57, _0x375774, _0x39235b) {
              var _0x47ac4a = new _0x1d143e(_0x375774, _0x39235b);
              _0x375774.xc.zIndex = _0xfece1e * ((_0x5f092a - _0x130d57) * 2 + 1 + 3);
              _0x39235b.xc.zIndex = _0xfece1e * ((_0x5f092a - _0x130d57) * 2 - 2 + 3);
              return _0x47ac4a;
            };
            _0xf27b66.prototype.yc = function (_0x15e927, _0x173d30, _0x367916, _0x4b97b5, _0x4d8929, _0x3d6ba2, _0x28742, _0x5908c0) {
              var _0x226a00 = _0x367916.ub;
              var _0x1d2347 = _0x15e927 === _0x3819e1.Ac.zc ? _0x173d30.rb.vb : _0x367916.vb;
              if (_0x226a00.length > 0 && _0x1d2347.length > 0) {
                for (var _0x3a96df = 0; _0x3a96df < this.qc.length; _0x3a96df++) {
                  this.qc[_0x3a96df].Cc.Bc(_0x226a00[_0x3a96df % _0x226a00.length], _0x3a96df % _0x226a00.length, _0x3a96df);
                  this.qc[_0x3a96df].Dc.Bc(_0x3a96df == 0 && _0x367916.vbb ? _0x367916.vbb : _0x1d2347[_0x3a96df % _0x1d2347.length], _0x3a96df % _0x226a00.length, _0x3a96df);
                  this.qc[_0x3a96df].Cc.Ec(_0x5908c0);
                  this.qc[_0x3a96df].Dc.Ec(_0x5908c0);
                }
              }
              this.oc.yc(_0x4b97b5, _0x4d8929, _0x3d6ba2, _0x28742);
            };
            var _0x39400d = function () {
              var _0x5a8157 = _0x36bffa.M(_0x4efbaa.Container, function () {
                _0x4efbaa.Container.call(this);
                this.sortableChildren = true;
                this.Fc = [];
                this.Gc = [];
                this.Hc = [];
                this.Ic = [];
                this.Jc = new _0x4efbaa.Container();
                this.Kc = [];
                this.message = new _0x4efbaa.Container();
                for (var _0x2937d2 = 0; _0x2937d2 < 4; _0x2937d2++) {
                  var _0x4e5b4a = new _0x3819e1.sc();
                  _0x4e5b4a.Bc(_0x4b2cbe().Lc.wb);
                  this.Jc.addChild(_0x4e5b4a.xc);
                  this.Kc.push(_0x4e5b4a);
                }
                this.message.zIndex = 0.0012;
                this.addChild(this.message);
                this.VcUn();
                this.Jc.zIndex = 0.0011;
                this.addChild(this.Jc);
                this.Mc();
                this.Nc = new _0x3819e1.sc();
                this.Nc.Bc(_0x4b2cbe().Lc.xb);
                this.Nc.xc.zIndex = 0.001;
                this.addChild(this.Nc.xc);
                this.Oc();
                this.pwr_flex = new _0x3819e1.sc();
                this.pwr_flex.Bc(_0x4b2cbe().Lc.pwrFlex);
                this.pwr_flex.xc.zIndex = 0.001;
                this.addChild(this.pwr_flex.xc);
                this.disableFlex();
              });
              _0x5a8157.prototype.yc = function (_0x276f5a, _0x91d88f, _0x4808d5, _0x38f8c7) {
                this.Pc(0.002, this.Fc, _0x276f5a.ub);
                this.Pc(0.003, this.Gc, _0x91d88f.ub);
                this.Pc(0.004, this.Ic, _0x38f8c7.ub);
                this.Pc(0.005, this.Hc, _0x4808d5.ub);
              };
              _0x5a8157.prototype.Pc = function (_0x296b72, _0x4851a1, _0xb91241) {
                while (_0xb91241.length > _0x4851a1.length) {
                  var _0x2a316e = new _0x3819e1.sc();
                  _0x4851a1.push(_0x2a316e);
                  this.addChild(_0x2a316e.Qc());
                }
                while (_0xb91241.length < _0x4851a1.length) {
                  _0x4851a1.pop().Rc();
                }
                var _0x450814 = _0x296b72;
                for (var _0x264e84 = 0; _0x264e84 < _0xb91241.length; _0x264e84++) {
                  _0x450814 += 0.0001;
                  var _0x3a1157 = _0x4851a1[_0x264e84];
                  _0x3a1157.Bc(_0xb91241[_0x264e84]);
                  _0x3a1157.xc.zIndex = _0x450814;
                }
              };
              _0x5a8157.prototype.Sc = function (_0x419dc6, _0x3f6719, _0x111255, _0x41d72b) {
                this.visible = true;
                this.position.set(_0x419dc6, _0x3f6719);
                this.rotation = _0x41d72b;
                for (var _0x189443 = 0; _0x189443 < this.Fc.length; _0x189443++) {
                  this.Fc[_0x189443].Tc(_0x111255);
                }
                for (var _0x2c35cd = 0; _0x2c35cd < this.Gc.length; _0x2c35cd++) {
                  this.Gc[_0x2c35cd].Tc(_0x111255);
                }
                for (var _0x2ac827 = 0; _0x2ac827 < this.Hc.length; _0x2ac827++) {
                  this.Hc[_0x2ac827].Tc(_0x111255);
                }
                for (var _0xd7ecec = 0; _0xd7ecec < this.Ic.length; _0xd7ecec++) {
                  this.Ic[_0xd7ecec].Tc(_0x111255);
                }
              };
              _0x5a8157.prototype.Uc = function () {
                this.visible = false;
              };
              _0x5a8157.prototype.VcAc = function (_0x29795c, _0x2e72fe, _0x20d487, _0x32e215, _0x5a57a4) {
                this.message.visible = true;
                this.Mc2.Tc(_0x2e72fe);
              };
              _0x5a8157.prototype.VcUn = function () {
                this.message.visible = false;
              };
              _0x5a8157.prototype.Vc = function (_0x136165, _0x24dac5, _0x25ce46, _0xe8b2e7) {
                this.Jc.visible = true;
                var _0xa88d0 = _0x25ce46 / 1000;
                var _0x2a9e07 = 1 / this.Kc.length;
                for (var _0x4f8bf1 = 0; _0x4f8bf1 < this.Kc.length; _0x4f8bf1++) {
                  var _0x4ee46d = 1 - (_0xa88d0 + _0x2a9e07 * _0x4f8bf1) % 1;
                  this.Kc[_0x4f8bf1].xc.alpha = 1 - _0x4ee46d;
                  this.Kc[_0x4f8bf1].Tc(_0x24dac5 * (0.5 + _0x4ee46d * 4.5));
                }
              };
              _0x5a8157.prototype.Mc = function () {
                this.Jc.visible = false;
              };
              _0x5a8157.prototype.Wc = function (_0x54f90f, _0x5ce083, _0x3baa94, _0x2fc5c3) {
                this.Nc.xc.visible = true;
                this.Nc.xc.alpha = _0x36bffa.Q(this.Nc.xc.alpha, _0x54f90f.Xc ? 0.9 : 0.2, _0x2fc5c3, 0.0025);
                this.Nc.Tc(_0x5ce083);
              };
              _0x5a8157.prototype.activeFlex = function (_0xcf5b3b, _0x24232d, _0x1d6112, _0x26db62) {
                this.pwr_flex.xc.visible = true;
                // Only show zigzag effect without changing color when taking spedes
                this.pwr_flex.xc.alpha = 1; // Keep constant alpha
                this.pwr_flex.Tc(_0x24232d);
              };
              _0x5a8157.prototype.disableFlex = function () {
                this.pwr_flex.xc.visible = false;
              };
              _0x5a8157.prototype.WXX = function (_0x40063a, _0x3c50b6, _0x3b683c, _0x2e7dc3) {
                this.Nc.xc.visible = true;
                // Keep constant alpha for consistency with zigzag behavior
                this.Nc.xc.alpha = 1; // Keep constant alpha
                this.Nc.Tc(_0x3c50b6);
              };
              _0x5a8157.prototype.Oc = function () {
                this.Nc.xc.visible = false;
              };
              return _0x5a8157;
            }();
            _0xf27b66.prototype.Yc = function (_0x243286) {
              return this.uc + this.vc * Math.sin(_0x243286 * _0x51340d - this.tc);
            };
            _0xf27b66.prototype.Zc = function (_0xf28f34, _0x2d50e7, _0x31c9b5, _0x4a9b99) {
              var _0x150b3e = _0xf28f34.$c * 2;
              var _0x2a6620 = _0xf28f34._c;
              var _0x28675e = _0xf28f34.ad;
              var _0x1c563d = _0x28675e * 4 - 3;
              var _0x4c7854 = _0x1c563d;
              this.tc = _0x2d50e7 / 400 * Math.PI;
              this.uc = _0x150b3e * 1.5;
              this.vc = _0x150b3e * 0.15 * _0xf28f34.bd;
              var _0xc2d9c2;
              var _0x18a8b3;
              var _0xac0a05;
              var _0x355779;
              var _0x5eea28;
              var _0x37544f;
              var _0x6bddfa;
              var _0x133121;
              _0x18a8b3 = _0x2a6620[0];
              _0x37544f = _0x2a6620[1];
              if (_0x4a9b99(_0x18a8b3, _0x37544f)) {
                _0xac0a05 = _0x2a6620[2];
                _0x6bddfa = _0x2a6620[3];
                _0x355779 = _0x2a6620[4];
                _0x133121 = _0x2a6620[5];
                var _0x2c8cd2 = Math.atan2(_0x133121 + _0x37544f * 2 - _0x6bddfa * 3, _0x355779 + _0x18a8b3 * 2 - _0xac0a05 * 3);
                this.oc.Sc(_0x18a8b3, _0x37544f, _0x150b3e, _0x2c8cd2);
                this.qc[0].Sc(_0x18a8b3, _0x37544f, _0x150b3e, this.Yc(0), _0x2c8cd2);
                this.qc[1].Sc(_0x29d80b * _0x18a8b3 + _0x2be474 * _0xac0a05 + _0x2d0f3b * _0x355779, _0x29d80b * _0x37544f + _0x2be474 * _0x6bddfa + _0x2d0f3b * _0x133121, _0x150b3e, this.Yc(1), _0x1d143e.cd(this.qc[0], this.qc[2]));
                this.qc[2].Sc(_0x809603 * _0x18a8b3 + _0x45080f * _0xac0a05 + _0x4a7542 * _0x355779, _0x809603 * _0x37544f + _0x45080f * _0x6bddfa + _0x4a7542 * _0x133121, _0x150b3e, this.Yc(2), _0x1d143e.cd(this.qc[1], this.qc[3]));
                this.qc[3].Sc(_0x30465f * _0x18a8b3 + _0x128f45 * _0xac0a05 + _0x193574 * _0x355779, _0x30465f * _0x37544f + _0x128f45 * _0x6bddfa + _0x193574 * _0x133121, _0x150b3e, this.Yc(3), _0x1d143e.cd(this.qc[2], this.qc[4]));
              } else {
                this.oc.Uc();
                this.qc[0].Uc();
                this.qc[1].Uc();
                this.qc[2].Uc();
                this.qc[3].Uc();
              }
              var _0x5f0518 = 4;
              var _0x4e21c9 = 2;
              var _0x554925 = _0x28675e * 2 - 4;
              while (_0x4e21c9 < _0x554925) {
                _0x18a8b3 = _0x2a6620[_0x4e21c9];
                _0x37544f = _0x2a6620[_0x4e21c9 + 1];
                if (_0x4a9b99(_0x18a8b3, _0x37544f)) {
                  _0xc2d9c2 = _0x2a6620[_0x4e21c9 - 2];
                  _0x5eea28 = _0x2a6620[_0x4e21c9 - 1];
                  _0xac0a05 = _0x2a6620[_0x4e21c9 + 2];
                  _0x6bddfa = _0x2a6620[_0x4e21c9 + 3];
                  _0x355779 = _0x2a6620[_0x4e21c9 + 4];
                  _0x133121 = _0x2a6620[_0x4e21c9 + 5];
                  this.qc[_0x5f0518].Sc(_0x18a8b3, _0x37544f, _0x150b3e, this.Yc(_0x5f0518), _0x1d143e.cd(this.qc[_0x5f0518 - 1], this.qc[_0x5f0518 + 1]));
                  _0x5f0518++;
                  this.qc[_0x5f0518].Sc(_0x37f8ca * _0xc2d9c2 + _0x529157 * _0x18a8b3 + _0x33b602 * _0xac0a05 + _0x6055d6 * _0x355779, _0x37f8ca * _0x5eea28 + _0x529157 * _0x37544f + _0x33b602 * _0x6bddfa + _0x6055d6 * _0x133121, _0x150b3e, this.Yc(_0x5f0518), _0x1d143e.cd(this.qc[_0x5f0518 - 1], this.qc[_0x5f0518 + 1]));
                  _0x5f0518++;
                  this.qc[_0x5f0518].Sc(_0x12f431 * _0xc2d9c2 + _0x83f4fc * _0x18a8b3 + _0x83f4fc * _0xac0a05 + _0x12f431 * _0x355779, _0x12f431 * _0x5eea28 + _0x83f4fc * _0x37544f + _0x83f4fc * _0x6bddfa + _0x12f431 * _0x133121, _0x150b3e, this.Yc(_0x5f0518), _0x1d143e.cd(this.qc[_0x5f0518 - 1], this.qc[_0x5f0518 + 1]));
                  _0x5f0518++;
                  this.qc[_0x5f0518].Sc(_0x6055d6 * _0xc2d9c2 + _0x33b602 * _0x18a8b3 + _0x529157 * _0xac0a05 + _0x37f8ca * _0x355779, _0x6055d6 * _0x5eea28 + _0x33b602 * _0x37544f + _0x529157 * _0x6bddfa + _0x37f8ca * _0x133121, _0x150b3e, this.Yc(_0x5f0518), _0x1d143e.cd(this.qc[_0x5f0518 - 1], this.qc[_0x5f0518 + 1]));
                  _0x5f0518++;
                } else {
                  this.qc[_0x5f0518].Uc();
                  _0x5f0518++;
                  this.qc[_0x5f0518].Uc();
                  _0x5f0518++;
                  this.qc[_0x5f0518].Uc();
                  _0x5f0518++;
                  this.qc[_0x5f0518].Uc();
                  _0x5f0518++;
                }
                _0x4e21c9 += 2;
              }
              _0x18a8b3 = _0x2a6620[_0x28675e * 2 - 4];
              _0x37544f = _0x2a6620[_0x28675e * 2 - 3];
              if (_0x4a9b99(_0x18a8b3, _0x37544f)) {
                _0xc2d9c2 = _0x2a6620[_0x28675e * 2 - 6];
                _0x5eea28 = _0x2a6620[_0x28675e * 2 - 5];
                _0xac0a05 = _0x2a6620[_0x28675e * 2 - 2];
                _0x6bddfa = _0x2a6620[_0x28675e * 2 - 1];
                this.qc[_0x1c563d - 5].Sc(_0x18a8b3, _0x37544f, _0x150b3e, this.Yc(_0x1c563d - 5), _0x1d143e.cd(this.qc[_0x1c563d - 6], this.qc[_0x1c563d - 4]));
                this.qc[_0x1c563d - 4].Sc(_0x193574 * _0xc2d9c2 + _0x128f45 * _0x18a8b3 + _0x30465f * _0xac0a05, _0x193574 * _0x5eea28 + _0x128f45 * _0x37544f + _0x30465f * _0x6bddfa, _0x150b3e, this.Yc(_0x1c563d - 4), _0x1d143e.cd(this.qc[_0x1c563d - 5], this.qc[_0x1c563d - 3]));
                this.qc[_0x1c563d - 3].Sc(_0x4a7542 * _0xc2d9c2 + _0x45080f * _0x18a8b3 + _0x809603 * _0xac0a05, _0x4a7542 * _0x5eea28 + _0x45080f * _0x37544f + _0x809603 * _0x6bddfa, _0x150b3e, this.Yc(_0x1c563d - 3), _0x1d143e.cd(this.qc[_0x1c563d - 4], this.qc[_0x1c563d - 2]));
                this.qc[_0x1c563d - 2].Sc(_0x2d0f3b * _0xc2d9c2 + _0x2be474 * _0x18a8b3 + _0x29d80b * _0xac0a05, _0x2d0f3b * _0x5eea28 + _0x2be474 * _0x37544f + _0x29d80b * _0x6bddfa, _0x150b3e, this.Yc(_0x1c563d - 2), _0x1d143e.cd(this.qc[_0x1c563d - 3], this.qc[_0x1c563d - 1]));
                this.qc[_0x1c563d - 1].Sc(_0xac0a05, _0x6bddfa, _0x150b3e, this.Yc(_0x1c563d - 1), _0x1d143e.cd(this.qc[_0x1c563d - 2], this.qc[_0x1c563d - 1]));
              } else {
                this.qc[_0x1c563d - 5].Uc();
                this.qc[_0x1c563d - 4].Uc();
                this.qc[_0x1c563d - 3].Uc();
                this.qc[_0x1c563d - 2].Uc();
                this.qc[_0x1c563d - 1].Uc();
              }
              if (this.pc === 0 && _0x4c7854 > 0) {
                this.nc.addChild(this.oc);
              }
              if (this.pc > 0 && _0x4c7854 === 0) {
                _0x36bffa.U(this.oc);
              }
              while (this.pc < _0x4c7854) {
                this.nc.addChild(this.qc[this.pc].Cc.Qc());
                this.nc.addChild(this.qc[this.pc].Dc.Qc());
                this.pc += 1;
              }
              while (this.pc > _0x4c7854) {
                this.pc -= 1;
                this.qc[this.pc].Dc.Rc();
                this.qc[this.pc].Cc.Rc();
              }
              var _0x525a7f = _0xf28f34.dd[_0x3819e1.fd.ed];
              if (this.qc[0].gd() && _0x525a7f && _0x525a7f.hd) {
                this.oc.Vc(_0xf28f34, _0x150b3e, _0x2d50e7, _0x31c9b5);
              } else {
                this.oc.Mc();
              }
              var _0x3db726 = _0xf28f34.dd[_0x3819e1.fd.jd];
              if (this.qc[0].gd() && _0x3db726 && _0x3db726.hd) {
                this.oc.Wc(_0xf28f34, _0x150b3e, _0x2d50e7, _0x31c9b5);
              } else {
                this.oc.Oc();
              }
              var _0x1d7399 = _0xf28f34.dd[_0x3819e1.fd.pd];
              if (this.qc[0].gd() && _0x1d7399 != null && _0x1d7399.hd) {
                this.oc.activeFlex(_0xf28f34, _0x150b3e, _0x2d50e7, _0x31c9b5);
              } else {
                this.oc.disableFlex();
              }
              movimentaLinha();
            };
            var _0x1d143e = function () {
              function _0x34f6a4(_0x557d48, _0x3c2ec1) {
                this.Cc = _0x557d48;
                this.Cc.kd(false);
                this.Dc = _0x3c2ec1;
                this.Dc.kd(false);
                this.ev = null;
              }
              _0x34f6a4.prototype.Sc = function (_0x5bed80, _0x2c95c4, _0x559eee, _0xc751f9, _0x247ce9) {
                this.Cc.kd(true);
                this.Cc.ld(_0x5bed80, _0x2c95c4);
                this.Cc.Tc(_0x559eee);
                this.Cc.md(_0x247ce9);
                this.Dc.kd(true);
                this.Dc.ld(_0x5bed80, _0x2c95c4);
                this.Dc.Tc(_0xc751f9);
                this.Dc.md(_0x247ce9);
              };
              _0x34f6a4.prototype.Uc = function () {
                this.Cc.kd(false);
                this.Dc.kd(false);
              };
              _0x34f6a4.prototype.gd = function () {
                return this.Cc.gd();
              };
              _0x34f6a4.cd = function (_0x3b9196, _0xab5e08) {
                return Math.atan2(_0x3b9196.Cc.xc.position.y - _0xab5e08.Cc.xc.position.y, _0x3b9196.Cc.xc.position.x - _0xab5e08.Cc.xc.position.x);
              };
              return _0x34f6a4;
            }();
            return _0xf27b66;
          }();
          _0x3819e1.fd = function () {
            function _0x4ca474(_0x590b40) {
              this.nd = _0x590b40;
              this.hd = false;
              this.od = 1;
            }
            _0x4ca474.jd = 0;
            _0x4ca474.pd = 1;
            _0x4ca474.ed = 2;
            _0x4ca474.qd = 6;
            _0x4ca474.rd = 3;
            _0x4ca474.sd = 4;
            _0x4ca474.td = 5;
            return _0x4ca474;
          }();
          _0x3819e1.Ab = function (_0x7782bd) {
            var _0x4f0486 = function () {
              function _0x4395c2(_0x3a3aea, _0x42efbb) {
                _0x3391a3(this, _0x4395c2);
                this.ud = _0x3a3aea;
                this.vd = _0x42efbb;
              }
              return _0x3ef9b1(_0x4395c2, [{
                key: "Jb",
                value: function _0x406fc0() {
                  return this.ud.revision;
                }
              }, {
                key: "Yb",
                value: function _0x3ef162() {
                  _0xb65a12.Jb();
                  return this.ud;
                }
              }, {
                key: "Ub",
                value: function _0x4a4753() {
                  return this.vd;
                }
              }]);
            }();
            _0x7782bd = _0x4f0486;
            _0x4ddaaa(_0x4f0486, "wd", new _0x7782bd({}, _0x3819e1.Ga.Ca()));
            return _0x4f0486;
          }();
          _0x3819e1.Mb = function () {
            function _0x413920(_0x196a7f) {
              this.xd = function () {
                ++_0x413920.yd;
                return function (_0x256e5d, _0x4b3aa5) {};
              }();
              this.zd = _0x196a7f;
              this.Ad = null;
              this.Bd = null;
              this.Cd = null;
              this.Dd = null;
              this.Ed = null;
              this.Fd = false;
              this.Gd = false;
              this.Hd = false;
            }
            _0x413920.Id = {
              Jd: "0x0",
              Kd: "0x1",
              Ld: "0x2",
              Md: "0x3",
              Nd: "0x4"
            };
            _0x413920.yd = 100000;
            _0x413920.Od = new _0x3819e1._b.cc().ec(_0x413920.Id.Jd, 1).ec(_0x413920.Id.Kd, 10).ec(_0x413920.Id.Ld, 50).ec(_0x413920.Id.Md, 15).ec(_0x413920.Id.Nd, 5).hc();
            _0x413920.prototype.Rb = function (_0x1fc60d) {
              this.Ad = _0x1fc60d;
            };
            _0x413920.prototype.Qb = function (_0x58858) {
              this.Bd = _0x58858;
            };
            _0x413920.prototype.Ob = function (_0x30fd85) {
              this.Cd = _0x30fd85;
            };
            _0x413920.prototype.Pb = function (_0x4d2d56) {
              this.Dd = _0x4d2d56;
            };
            _0x413920.prototype.Nb = function (_0x44e5c5) {
              this.Ed = _0x44e5c5;
            };
            _0x413920.prototype.Kb = function () {
              return this.Hd;
            };
            _0x413920.prototype.Lb = function () {
              this.Fd = true;
            };
            _0x413920.prototype.Vb = function () {
              if (!this.Gd) {
                this.Gd = true;
                if (this.Fd) {
                  this.Pd();
                  return;
                }
                this.Qd();
              }
            };
            _0x413920.prototype.Qd = function () {
              function _0x1b9d7c(_0x48d77f) {
                var _0x42b4d0 = _0x413920.Id.Jd;
                _0x379340.Rd(_0x42b4d0, _0x413920.Od.bc(_0x42b4d0).lc(_0x48d77f));
              }
              var _0x379340 = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              $.ajax({
                type: "GET",
                url: _0x36bffa.a.c + "/dynamic/assets/revision.json",
                xhrFields: {
                  onprogress: function _0x3e919b(_0x19e00a) {
                    if (_0x19e00a.lengthComputable) {
                      _0x1b9d7c(_0x19e00a.loaded / _0x19e00a.total);
                    }
                  }
                }
              }).fail(function () {
                _0x379340.Sd(new Error());
              }).done(function (_0x466574) {
                if (_0x466574 <= _0x379340.zd) {
                  _0x379340.Td();
                  return;
                }
                _0x379340.Ud();
              });
            };
            _0x413920.prototype.Ud = _0xbb0189(_0x1e8476().mark(function _0x3788c0() {
              var _0x4b9393;
              var _0x377ee4;
              var _0x500c24;
              return _0x1e8476().wrap(function _0x3a2303(_0x251dd6) {
                while (1) {
                  switch (_0x251dd6.prev = _0x251dd6.next) {
                    case 0:
                      _0x4b9393 = function _0x2fbdc2(_0xa81510) {
                        var _0xf2e689 = _0x413920.Id.Kd;
                        _0x377ee4.Rd(_0xf2e689, _0x413920.Od.bc(_0xf2e689).lc(_0xa81510));
                      };
                      _0x377ee4 = this;
                      if (!this.Fd) {
                        _0x251dd6.next = 4;
                        break;
                      }
                      return _0x251dd6.abrupt("return", void this.Pd());
                    case 4:
                      _0x251dd6.next = 6;
                      return fetch(URLSERV_WORMWORLD + "/version");
                    case 6:
                      _0x500c24 = _0x251dd6.sent;
                      _0x251dd6.next = 9;
                      return _0x500c24.json();
                    case 9:
                      _0x500c24 = _0x251dd6.sent;
                      localStorage.setItem("wwc_version", _0x500c24);
                      if (_0x3e0616 != _0x500c24) {
                        $.ajax({
                          type: "GET",
                          url: _0x36bffa.a.c + "/dynamic/assets/registry.json",
                          xhrFields: {
                            onprogress: function _0x27d0b1(_0x373431) {
                              if (_0x373431.lengthComputable) {
                                _0x4b9393(_0x373431.loaded / _0x373431.total);
                              }
                            }
                          }
                        }).fail(function () {
                          _0x377ee4.Sd(new Error());
                        }).done(function () {
                          var _0xf872b7 = _0xbb0189(_0x1e8476().mark(function _0x44e50a(_0x5e867e) {
                            return _0x1e8476().wrap(function _0x5303cd(_0x21c60d) {
                              while (1) {
                                switch (_0x21c60d.prev = _0x21c60d.next) {
                                  case 0:
                                    _0x21c60d.next = 2;
                                    return _0xb65a12.registry(_0x5e867e);
                                  case 2:
                                    _0x5e867e = _0x21c60d.sent;
                                    localStorage.setItem("wwc_config", JSON.stringify(_0x5e867e));
                                    _0x377ee4.Vd(_0x5e867e, _0x413920);
                                  case 5:
                                  case "end":
                                    return _0x21c60d.stop();
                                }
                              }
                            }, _0x44e50a);
                          }));
                          return function (_0x2be579) {
                            return _0xf872b7.apply(this, arguments);
                          };
                        }());
                      } else {
                        try {
                          _0x102812 = JSON.parse(_0x102812);
                          _0x4b9393(1);
                          _0x377ee4.Vd(_0x102812, _0x413920);
                        } catch (_0x407d22) {
                          console.log("ConfigError", _0x407d22);
                          localStorage.removeItem("wwc_version");
                          localStorage.removeItem("wwc_config");
                        }
                      }
                    case 12:
                    case "end":
                      return _0x251dd6.stop();
                  }
                }
              }, _0x3788c0, this);
            }));
            _0x413920.prototype.Vd = _0xb65a12.Vd || function (_0x189d52) {
              function _0x49932c(_0x5d1e2e) {
                var _0x18b4a9 = _0x413920.Id.Ld;
                _0x34313e.Rd(_0x18b4a9, _0x413920.Od.bc(_0x18b4a9).lc(_0x5d1e2e));
              }
              var _0x34313e = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              var _0x36b3ed = [];
              var _0x5f0ac5 = [];
              var _0x17d291 = 0;
              for (var _0x46039c in _0x189d52.textureDict) {
                if (_0x189d52.textureDict.hasOwnProperty(_0x46039c)) {
                  var _0x50f47b = _0x189d52.textureDict[_0x46039c];
                  var _0x155704 = _0x36bffa.a.c + _0x50f47b.relativePath;
                  var _0x48eea5 = _0x50f47b.fileSize;
                  var _0x111bf5 = _0x50f47b.sha256;
                  var _0x101a5a = new _0x413920.Wd(_0x46039c, _0x155704, _0x48eea5, _0x111bf5);
                  _0x36b3ed.push(_0x101a5a);
                  _0x5f0ac5.push(_0x101a5a);
                  _0x17d291 += _0x48eea5;
                }
              }
              var _0xc2c4af;
              var _0x50afd5 = 0;
              var _0xa9b9e5 = function _0x4b6e0f(_0x5d85a4) {
                for (var _0x5a566f = 0; _0x5a566f < _0x5f0ac5.length; _0x5a566f++) {
                  try {
                    window.URL.revokeObjectURL(_0x5f0ac5[_0x5a566f].Xd);
                  } catch (_0x3f247b) {}
                }
                _0x34313e.Sd(_0x5d85a4);
              };
              var _0x1bd77a = function _0x43b38c(_0x394315) {
                var _0xf2313b = Math.floor(_0xc2c4af.Yd * _0x394315);
                _0x49932c((_0x50afd5 + _0xf2313b) / _0x17d291);
              };
              var _0x5ba960 = function _0x205b2e(_0xc38977) {
                var _0x43c649 = new Blob([_0xc38977]);
                _0xc2c4af.Xd = window.URL.createObjectURL(_0x43c649);
                _0x50afd5 += _0xc2c4af.Yd;
                _0x2bf0b1();
              };
              var _0x2bf0b1 = function _0x57aba1() {
                if (_0x1e55f5 < _0x5f0ac5.length) {
                  _0xc2c4af = _0x5f0ac5[_0x1e55f5++];
                  _0x34313e.Zd(_0xc2c4af, _0xa9b9e5, _0x5ba960, _0x1bd77a);
                  return;
                }
                setTimeout(function () {
                  return _0x34313e.$d(_0x189d52, _0x36b3ed);
                }, 0);
              };
              var _0x1e55f5 = 0;
              _0x2bf0b1();
            };
            _0x413920.prototype.Zd = _0xb65a12.Zd || function (_0x11bd7a, _0xe838dd, _0x5c0ca6, _0xd59b0b) {
              $.ajax({
                type: "GET",
                url: _0x11bd7a._d,
                xhrFields: {
                  responseType: "arraybuffer",
                  onprogress: function _0x5d6f97(_0x35a61d) {
                    if (_0x35a61d.lengthComputable) {
                      _0xd59b0b(_0x35a61d.loaded / _0x35a61d.total);
                    }
                  }
                }
              }).fail(function () {
                _0xe838dd(new Error());
              }).done(function (_0x4aaa35) {
                _0x5c0ca6(_0x4aaa35);
              });
            };
            _0x413920.prototype.$d = _0xb65a12.$d || function (_0x2f770d, _0x2398e4) {
              function _0x1634a5(_0x34f8ea) {
                var _0xd853d0 = _0x413920.Id.Md;
                _0x4fd5ec.Rd(_0xd853d0, _0x413920.Od.bc(_0xd853d0).lc(_0x34f8ea));
              }
              var _0x4fd5ec = this;
              if (this.Fd) {
                this.Pd();
                return;
              }
              var _0x6e365f;
              var _0x244cc9;
              var _0x1e5540 = {};
              var _0x4614b2 = function _0x388f95() {
                for (var _0x4fdf21 = 0; _0x4fdf21 < _0x2398e4.length; _0x4fdf21++) {
                  try {
                    window.URL.revokeObjectURL(_0x2398e4[_0x4fdf21].Xd);
                  } catch (_0x50ab01) {}
                }
                _0x4fd5ec.Sd(new Error());
              };
              var _0x4a0303 = function _0x50784c() {
                _0x1634a5(_0x229f99 / _0x2398e4.length);
                _0x1e5540[_0x6e365f.ae] = new _0x3819e1.be(_0x6e365f.Xd, _0x244cc9);
                _0x5b7f16();
              };
              var _0x5b7f16 = function _0x561e84() {
                if (_0x229f99 < _0x2398e4.length) {
                  _0x6e365f = _0x2398e4[_0x229f99++];
                  _0x244cc9 = PIXI.BaseTexture.from(_0x6e365f.Xd);
                  _0x244cc9.on("error", _0x4614b2);
                  _0x244cc9.on("loaded", _0x4a0303);
                  return;
                }
                setTimeout(function () {
                  return _0x4fd5ec.ce(_0x2f770d, _0x1e5540);
                }, 0);
              };
              var _0x229f99 = 0;
              _0x5b7f16();
            };
            _0x413920.prototype.ce = function (_0x2dbac4, _0x459eb1) {
              function _0x22d8c3(_0x103dbe) {
                var _0x5db57d = _0x413920.Id.Nd;
                _0x10e713.Rd(_0x5db57d, _0x413920.Od.bc(_0x5db57d).lc(_0x103dbe));
              }
              var _0x10e713 = this;
              var _0x4e8b48 = {};
              var _0x168132 = 0;
              var _0x3b89e3 = Object.values(_0x2dbac4.regionDict).length;
              _0x36bffa._(_0x2dbac4.regionDict, function (_0x38b3ba, _0x2a0305) {
                var _0x27cc87 = null;
                try {
                  var _0x4f2851 = null;
                  if (_0x459eb1[_0x2a0305.texture].ev) {
                    _0x4f2851 = _0x459eb1[_0x2a0305.texture].ev;
                  }
                  var _0x39c451 = _0x2a0305.texture + ":" + _0x38b3ba;
                  _0x27cc87 = _0x3819e1.la.Da(_0x39c451, _0x459eb1[_0x2a0305.texture].oa, _0x2a0305, _0x4f2851);
                  _0x4e8b48[_0x38b3ba] = _0x27cc87;
                  if (++_0x168132 % 10 == 0) {
                    _0x22d8c3(_0x168132 / _0x3b89e3);
                  }
                } catch (_0xd3a0bb) {}
              });
              var _0x427205 = Object.values(_0x459eb1).map(function (_0x5d595d) {
                return _0x5d595d.oa;
              });
              var _0x528738 = Object.values(_0x4e8b48);
              var _0x3078c0 = new _0x3819e1.Ab(_0x2dbac4, _0x3819e1.Ga.fb(_0x2dbac4, _0x4e8b48, _0x427205, _0x528738));
              setTimeout(function () {
                return _0x10e713.de(_0x3078c0);
              }, 0);
            };
            _0x413920.Wd = function () {
              function _0x740b57(_0x3bef81, _0x5e5ae4, _0x51b64b, _0x26b986) {
                this.ae = _0x3bef81;
                this._d = _0x5e5ae4;
                this.Yd = _0x51b64b;
                this.ee = _0x26b986;
                this.Xd = "";
              }
              return _0x740b57;
            }();
            _0x413920.prototype.de = function (_0x1b6611) {
              if (this.Hd) {
                _0x1b6611.Ub().Fa();
                return;
              }
              this.Hd = true;
              var _0x489b44 = this;
              setTimeout(function () {
                return _0x489b44.Ad(_0x1b6611);
              }, 0);
            };
            _0x413920.prototype.Td = function () {
              if (!this.Hd) {
                this.Hd = true;
                var _0x2ccf90 = this;
                setTimeout(function () {
                  return _0x2ccf90.Bd();
                }, 0);
              }
            };
            _0x413920.prototype.Sd = function (_0x381953) {
              if (!this.Hd) {
                this.Hd = true;
                var _0xa0cfa8 = this;
                setTimeout(function () {
                  return _0xa0cfa8.Cd(_0x381953);
                }, 0);
              }
            };
            _0x413920.prototype.Pd = function () {
              if (!this.Hd) {
                this.Hd = true;
                var _0x32ad53 = this;
                setTimeout(function () {
                  return _0x32ad53.Dd();
                }, 0);
              }
            };
            _0x413920.prototype.Rd = function (_0x21705b, _0x17df27) {
              if (!this.Hd && !this.Fd) {
                var _0x4ffb52 = this;
                return _0x4ffb52.Ed(_0x21705b, _0x17df27);
              }
            };
            return _0x413920;
          }();
          _0x3819e1.fe = function () {
            return {};
          }();
          _0x3819e1.ge = function () {
            function _0x52e436() {
              this.he = _0x3819e1.ge.je.ie;
              this.ke = false;
              this.le = false;
              this.me = null;
              this.ne = null;
            }
            _0x52e436.prototype.ha = function () {};
            _0x52e436.prototype.oe = function (_0x514e79) {
              this.le = _0x514e79;
            };
            _0x52e436.prototype.pe = function (_0x5d07cf) {
              this.he = _0x5d07cf;
              this.qe();
            };
            _0x52e436.prototype.re = function (_0x2ef963) {
              this.ke = _0x2ef963;
              this.qe();
            };
            _0x52e436.prototype.qe = function () {};
            _0x52e436.prototype.se = function (_0x3dc61b, _0x5406dd) {
              if (!_0x4b2cbe().Lc.Wb()) {
                return null;
              }
              var _0x509cf3 = _0x3dc61b[_0x5406dd];
              if (_0x509cf3 == null || _0x509cf3.length === 0) {
                return null;
              } else {
                return _0x509cf3[Math.floor(Math.random() * _0x509cf3.length)].cloneNode();
              }
            };
            _0x52e436.prototype.te = function (_0x483b8a, _0x3dfb7b, _0x3ae504) {
              if (this.le && !(_0x3ae504 <= 0)) {
                var _0xab643b = this.se(_0x483b8a, _0x3dfb7b);
                if (_0xab643b != null) {
                  _0xab643b.volume = Math.min(1, _0x3ae504);
                  _0xab643b.play();
                }
              }
            };
            _0x52e436.prototype.ue = function (_0x45999a, _0x4c5d52) {
              if (this.he.ve) {
                this.te(app.xe.we, _0x45999a, _0x4c5d52);
              }
            };
            _0x52e436.prototype.ye = function (_0x5149f0, _0x436c74) {
              if (this.he.ze) {
                this.te(app.xe.Ae, _0x5149f0, _0x436c74);
              }
            };
            _0x52e436.prototype.Be = function () {};
            _0x52e436.prototype.Ce = function () {};
            _0x52e436.prototype.De = function () {};
            _0x52e436.prototype.Ee = function () {};
            _0x52e436.prototype.Fe = function () {};
            _0x52e436.prototype.Ge = function () {};
            _0x52e436.prototype.He = function (_0x189f75, _0x4e211e, _0x14947a) {};
            _0x52e436.prototype.Ie = function (_0x14aa4f) {};
            _0x52e436.prototype.Je = function (_0x20e9ea) {};
            _0x52e436.prototype.Ke = function (_0x3eacbd) {};
            _0x52e436.prototype.Le = function (_0x5d383d) {};
            _0x52e436.prototype.Me = function (_0x4266a3) {};
            _0x52e436.prototype.Ne = function (_0x1004a3) {};
            _0x52e436.prototype.Oe = function (_0x11ff2c) {};
            _0x52e436.prototype.Pe = function (_0x126241) {};
            _0x52e436.prototype.Qe = function (_0x2d3fe5) {};
            _0x52e436.prototype.Re = function (_0x417a62) {};
            _0x52e436.prototype.Se = function (_0xa632b) {};
            _0x52e436.prototype.Te = function (_0x27f9a7) {};
            _0x52e436.prototype.Ue = function (_0xef0af4) {};
            _0x52e436.prototype.Ve = function (_0x41f925) {};
            _0x52e436.prototype.We = function (_0x3c75bc, _0x3dbee2) {};
            _0x52e436.prototype.Xe = function (_0x29302d) {};
            _0x52e436.prototype.Ye = function (_0x478392, _0x4fe546, _0x3d77d7) {};
            _0x52e436.je = {
              ie: {
                Ze: false,
                $e: false,
                ze: true,
                ve: false
              },
              _e: {
                Ze: false,
                $e: true,
                ze: true,
                ve: false
              },
              af: {
                Ze: true,
                $e: false,
                ze: false,
                ve: true
              },
              bf: {
                Ze: false,
                $e: false,
                ze: true,
                ve: false
              },
              cf: {
                Ze: false,
                $e: false,
                ze: false,
                ve: false
              }
            };
            return _0x52e436;
          }();
          _0x3819e1.GameView = function () {
            function _0x3b15d2(_0x50dcb2) {
              var _0x33b90a = _0x4b2cbe();
              this.ef = _0x50dcb2;
              this.Eb = _0x50dcb2.get()[0];
              this.ff = 1;
              this.gf = 1;
              this.hf = null;
              this.lf = new _0x4efbaa.Renderer({
                view: _0x50dcb2.get()[0],
                backgroundColor: 0,
                transparent: false,
                antialias: false,
                autoResize: true
              });
              this.mf = new _0x4efbaa.Container();
              this.mf.sortableChildren = true;
              this.nf = new _0x4efbaa.Container();
              this.nf.zIndex = 0;
              this.mf.addChild(this.nf);
              this.uf = new _0x4efbaa.Container();
              this.uf.zIndex = 3;
              this.mf.addChild(this.uf);
              this.vf = [];
              this.wf = [];
              this.xf = [];
              this.ha();
            }
            var _0x52b8ef = 0;
            var _0xde2250 = 5;
            var _0x5e8225 = 40;
            var _0x26c5df = [{
              yf: 1,
              zf: 0.15,
              Af: 0
            }, {
              yf: 1,
              zf: 0.125,
              Af: 0
            }, {
              yf: 1,
              zf: 0.1,
              Af: 0
            }, {
              yf: 1,
              zf: 0.075,
              Af: 0
            }, {
              yf: 1,
              zf: 0.05,
              Af: 0
            }, {
              yf: 1,
              zf: 0.025,
              Af: 0
            }, {
              yf: 1,
              zf: 0,
              Af: 0.025
            }, {
              yf: 1,
              zf: 0,
              Af: 0.05
            }, {
              yf: 1,
              zf: 0,
              Af: 0.075
            }, {
              yf: 1,
              zf: 0,
              Af: 0.1
            }, {
              yf: 1,
              zf: 0,
              Af: 0.125
            }, {
              yf: 1,
              zf: 0,
              Af: 0.15
            }];
            _0x3b15d2.prototype.ha = function () {
              var _0x26e1bd = _0x4b2cbe();
              this.lf.backgroundColor = _0x52b8ef;
              this.vf = new Array(_0x26c5df.length);
              for (var _0x3509af = 0; _0x3509af < this.vf.length; _0x3509af++) {
                this.vf[_0x3509af] = new _0x4efbaa.Sprite();
                this.vf[_0x3509af].texture = _0x26e1bd.xe.Bf;
                this.vf[_0x3509af].anchor.set(0.5);
                this.nf.addChild(this.vf[_0x3509af]);
              }
              this.wf = new Array(_0x26e1bd.xe.Cf.length);
              for (var _0x5be816 = 0; _0x5be816 < this.wf.length; _0x5be816++) {
                this.wf[_0x5be816] = new _0x4efbaa.Sprite();
                this.wf[_0x5be816].texture = _0x26e1bd.xe.Cf[_0x5be816];
                this.wf[_0x5be816].anchor.set(0.5);
                this.uf.addChild(this.wf[_0x5be816]);
              }
              this.xf = new Array(this.wf.length);
              for (var _0x14e473 = 0; _0x14e473 < this.xf.length; _0x14e473++) {
                var _0x3f7efe = [0.6, 1, 0.5];
                this.xf[_0x14e473] = {
                  Df: _0x36bffa.V(0, _0x3a8870.F),
                  Ef: _0x36bffa.V(0.09, 0.16) * 0.66,
                  Ff: _0x36bffa.V(0, 1),
                  Gf: _0x36bffa.V(0, 1),
                  Hf: 0,
                  yf: _0x3f7efe[0],
                  zf: _0x3f7efe[1],
                  Af: _0x3f7efe[2]
                };
              }
              this.If();
              this.Jf();
            };
            _0x3b15d2.hd = false;
            _0x3b15d2.Kf = function (_0x3f7afc) {
              _0x3b15d2.hd = _0x3f7afc;
            };
            _0x3b15d2.prototype.Lf = function (_0x21778f) {
              this.hf.Kf(_0x21778f);
            };
            _0x3b15d2.prototype.Jf = function () {
              var _0x79f70f = window.devicePixelRatio ? window.devicePixelRatio : 1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = _0x79f70f;
              this.Eb.width = _0x79f70f * this.ff;
              this.Eb.height = _0x79f70f * this.gf;
              var _0x1b996c = Math.max(this.ff, this.gf) * 0.6;
              for (var _0x559987 = 0; _0x559987 < this.vf.length; _0x559987++) {
                this.vf[_0x559987].width = _0x1b996c;
                this.vf[_0x559987].height = _0x1b996c;
              }
            };
            _0x3b15d2.prototype.Nf = function (_0x16ec88, _0x31c2ae) {
              if (_0x3b15d2.hd) {
                var _0x1eada8 = _0x16ec88 / 1000;
                var _0x208264 = _0x31c2ae / 1000;
                var _0x56168e = this.ef.width();
                var _0x126eb9 = this.ef.height();
                for (var _0x109f52 = 0; _0x109f52 < this.vf.length; _0x109f52++) {
                  var _0x44587d = _0x26c5df[_0x109f52 % _0x26c5df.length];
                  var _0x31c5b6 = this.vf[_0x109f52];
                  var _0x54eb24 = _0x109f52 / this.vf.length * _0x3a8870.G;
                  var _0x1df3f2 = _0x1eada8 * 0.5 * 0.12;
                  var _0x14aef9 = Math.cos((_0x1df3f2 + _0x54eb24) * 3) * Math.cos(_0x54eb24) - Math.sin((_0x1df3f2 + _0x54eb24) * 5) * Math.sin(_0x54eb24);
                  var _0x41493c = Math.cos((_0x1df3f2 + _0x54eb24) * 3) * Math.sin(_0x54eb24) + Math.sin((_0x1df3f2 + _0x54eb24) * 5) * Math.cos(_0x54eb24);
                  var _0x2674ed = 0.2 + Math.cos(_0x54eb24 + _0x1eada8 * 0.075) * 0.2;
                  var _0x2e1151 = _0x44587d.Af * 255 << 16 & 16711680 | _0x44587d.zf * 255 << 8 & 65280 | _0x44587d.yf * 255 & 255;
                  _0x31c5b6.tint = _0x2e1151;
                  _0x31c5b6.alpha = _0x2674ed;
                  _0x31c5b6.position.set(_0x56168e * (0.2 + (_0x14aef9 + 1) * 0.5 * 0.6), _0x126eb9 * (0.1 + (_0x41493c + 1) * 0.5 * 0.8));
                }
                var _0xeddb31 = Math.max(_0x56168e, _0x126eb9) * 0.05;
                for (var _0x12b760 = 0; _0x12b760 < this.wf.length; _0x12b760++) {
                  var _0x52cd40 = this.xf[_0x12b760];
                  var _0x213885 = this.wf[_0x12b760];
                  var _0x1c361f = _0x3a8870.F * _0x12b760 / this.wf.length + _0x52cd40.Df;
                  _0x52cd40.Gf += _0x52cd40.Ef * _0x208264;
                  if (_0x52cd40.Gf > 1.1) {
                    _0x52cd40.Df = Math.random() * _0x3a8870.F;
                    _0x52cd40.Ef = (0.09 + Math.random() * 0.07) * 0.66;
                    _0x52cd40.Ff = 0.15 + Math.random() * 0.7;
                    _0x52cd40.Gf = -0.1;
                  }
                  var _0x1ab2b1 = _0x52cd40.Ff + Math.sin(Math.sin(_0x1c361f + _0x1eada8 * 0.48) * 6) * 0.03;
                  var _0x22c4f5 = _0x52cd40.Gf;
                  var _0x3b137c = (0.4 + (1 + Math.sin(_0x1c361f + _0x1eada8 * 0.12)) * 0.5 * 1.2) * 0.5;
                  var _0x274b28 = _0x1c361f + _0x52cd40.Ef * 2 * _0x1eada8;
                  var _0x579633 = _0x36bffa.P(Math.sin(Math.PI * _0x22c4f5), 0.1, 1);
                  var _0x576305 = _0x52cd40.zf * 255 << 8 & 65280 | _0x52cd40.Af * 255 << 16 & 16711680 | _0x52cd40.yf * 255 & 255;
                  _0x213885.alpha = _0x579633;
                  _0x213885.tint = _0x576305;
                  _0x213885.position.set(_0x56168e * _0x1ab2b1, _0x126eb9 * _0x22c4f5);
                  _0x213885.rotation = _0x274b28;
                  var _0x4759f9 = _0x213885.texture.width / _0x213885.texture.height;
                  _0x213885.width = _0x3b137c * _0xeddb31;
                  _0x213885.height = _0x3b137c * _0xeddb31 * _0x4759f9;
                }
                this.Of();
                this.lf.render(this.mf, null, true);
              }
            };
            _0x3b15d2.prototype.Pf = function () {
              var _0x368b48 = _0x4b2cbe();
              if (_0x368b48.Lc.Wb()) {
                var _0x6f265 = _0x368b48.Lc.Ub().gb(_0xde2250);
                for (var _0x3235d2 = 0; _0x3235d2 < _0xde2250; _0x3235d2++) {
                  this.hf.Qf(_0x3235d2, _0x6f265[_0x3235d2]);
                }
              } else {
                var _0x46c5f1 = _0x36bffa.V(0, 1);
                for (var _0x5a14eb = 0; _0x5a14eb < _0xde2250; _0x5a14eb++) {
                  var _0x5e38be = (_0x46c5f1 + _0x5a14eb / _0xde2250) % 1;
                  var _0x1df0f8 = _0x36bffa.Y(Math.floor(_0x5e38be * 360), 0.85, 0.5);
                  var _0x286227 = _0x1df0f8[0] * 255 & 255 | _0x1df0f8[1] * 255 << 8 & 65280 | _0x1df0f8[2] * 255 << 16 & 16711680;
                  var _0x3970d3 = "000000" + _0x286227.toString(16);
                  _0x3970d3 = "#" + _0x3970d3.substring(_0x3970d3.length - 6, _0x3970d3.length);
                  this.hf.Rf(_0x5a14eb, _0x3970d3);
                }
              }
            };
            _0x3b15d2.prototype.If = function () {
              var _0x56dc9d = Math.min(this.ff, this.gf);
              var _0x539f51 = Date.now();
              for (var _0x2015fa = 0; _0x2015fa < _0xde2250; _0x2015fa++) {
                var _0x57e374 = _0x2015fa / _0xde2250 * _0x3a8870.F;
                var _0x513af6 = _0x1908ce(_0x539f51, 0.12, _0x57e374);
                _0x513af6.qa = _0x513af6.qa * 4;
                _0x513af6.ra = _0x513af6.ra * 4;
                this.hf.Sf(_0x2015fa, (this.ff + _0x513af6.qa * _0x56dc9d) * 0.5, (this.gf + _0x513af6.ra * _0x56dc9d) * 0.5);
              }
            };
            _0x3b15d2.prototype.Of = function () {
              var _0x15e55a = Math.min(this.ff, this.gf);
              var _0x4308f5 = Date.now();
              for (var _0x2f164e = 0; _0x2f164e < _0xde2250; _0x2f164e++) {
                var _0x1d0f5d = _0x2f164e / _0xde2250 * _0x3a8870.F;
                var _0x210dda = _0x1908ce(_0x4308f5, 0.12, _0x1d0f5d);
                this.hf.Tf(_0x2f164e, (this.ff + _0x210dda.qa * _0x15e55a) * 0.5, (this.gf + _0x210dda.ra * _0x15e55a) * 0.5);
              }
              this.hf.Uf();
            };
            var _0x1908ce = function _0x4f3ea0(_0x265fea, _0x95d065, _0x37ddaf) {
              var _0x2719a0 = _0x265fea / 1000;
              return {
                qa: (Math.cos(_0x95d065 * _0x2719a0 + _0x37ddaf) + Math.cos(_0x95d065 * -32 * _0x2719a0 + _0x37ddaf) * 0.4 + Math.cos(_0x95d065 * 7 * _0x2719a0 + _0x37ddaf) * 0.7) * 0.8,
                ra: (Math.sin(_0x95d065 * _0x2719a0 + _0x37ddaf) + Math.sin(_0x95d065 * -32 * _0x2719a0 + _0x37ddaf) * 0.4 + Math.sin(_0x95d065 * 7 * _0x2719a0 + _0x37ddaf) * 0.7) * 0.8
              };
            };
            return _0x3b15d2;
          }();
          _0x3819e1.Vf = function () {
            function _0x3dd405() {}
            _0x3dd405.Wf = "consent_state_2";
            _0x3dd405.Xf = "showPlayerNames";
            _0x3dd405.Yf = "musicEnabled";
            _0x3dd405.Zf = "sfxEnabled";
            _0x3dd405.$f = "account_type";
            _0x3dd405._f = "gameMode";
            _0x3dd405.ag = "nickname";
            _0x3dd405.bg = "skin";
            _0x3dd405.cg = "prerollCount";
            _0x3dd405.dg = "shared";
            _0x3dd405.eg = function (_0x540a5e, _0xe1dc53, _0x1e2ab3) {
              var _0x1a45f8 = new Date();
              _0x1a45f8.setTime(_0x1a45f8.getTime() + _0x1e2ab3 * 86400000);
              var _0x4e35ec = "expires=" + _0x1a45f8.toUTCString();
              document.cookie = _0x540a5e + "=" + _0xe1dc53 + "; " + _0x4e35ec;
            };
            _0x3dd405.fg = function (_0x15ed63) {
              var _0x55cd2d = _0x15ed63 + "=";
              for (var _0x1f4199 = document.cookie.split(";"), _0x194350 = 0; _0x194350 < _0x1f4199.length; _0x194350++) {
                for (var _0x46d6cb = _0x1f4199[_0x194350]; _0x46d6cb.charAt(0) == " ";) {
                  _0x46d6cb = _0x46d6cb.substring(1);
                }
                if (_0x46d6cb.indexOf(_0x55cd2d) == 0) {
                  if (_0x15ed63 == "nickname=") {
                    _0x46d6cb.substring(_0x55cd2d.length, _0x46d6cb.length).substring(0, _0x4ac6e2);
                  }
                  return _0x46d6cb.substring(_0x55cd2d.length, _0x46d6cb.length);
                }
              }
              return "";
            };
            return _0x3dd405;
          }();
          _0x3a8870.gg = function () {
            function _0xa0c0c1(_0x8880e3, _0x3abd3f, _0x67a243) {
              var _0x4fc50b = false;
              for (var _0xa339b2 = _0x67a243.length, _0x5a7d06 = 0, _0x590885 = _0xa339b2 - 1; _0x5a7d06 < _0xa339b2; _0x590885 = _0x5a7d06++) {
                if (_0x67a243[_0x5a7d06][1] > _0x3abd3f != _0x67a243[_0x590885][1] > _0x3abd3f && _0x8880e3 < (_0x67a243[_0x590885][0] - _0x67a243[_0x5a7d06][0]) * (_0x3abd3f - _0x67a243[_0x5a7d06][1]) / (_0x67a243[_0x590885][1] - _0x67a243[_0x5a7d06][1]) + _0x67a243[_0x5a7d06][0]) {
                  _0x4fc50b = !_0x4fc50b;
                }
              }
              return _0x4fc50b;
            }
            var _0x52f426 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
            return {
              hg: function _0x207fd6(_0x2d7cb7, _0x19ef4f) {
                return _0xa0c0c1(_0x19ef4f, _0x2d7cb7, _0x52f426);
              }
            };
          }();
          _0x3819e1.ig = function () {
            function _0x1f89c8(_0x3a9a31) {
              var _0x3313ef = undefined;
              _0x3313ef = _0x3a9a31 > 0 ? "+" + Math.floor(_0x3a9a31) : _0x3a9a31 < 0 ? "-" + Math.floor(_0x3a9a31) : "0";
              var _0x1626a7 = Math.min(1.5, 0.5 + _0x3a9a31 / 600);
              var _0x14bfa1 = undefined;
              if (_0x3a9a31 < 1) {
                _0x14bfa1 = "0xFFFFFF";
              } else if (_0x3a9a31 < 30) {
                var _0x590aa8 = (_0x3a9a31 - 1) / 29;
                _0x14bfa1 = _0x39edec((1 - _0x590aa8) * 1 + _0x590aa8 * 0.96, (1 - _0x590aa8) * 1 + _0x590aa8 * 0.82, (1 - _0x590aa8) * 1 + _0x590aa8 * 0);
              } else if (_0x3a9a31 < 300) {
                var _0x2a203a = (_0x3a9a31 - 30) / 270;
                _0x14bfa1 = _0x39edec((1 - _0x2a203a) * 0.96 + _0x2a203a * 0.93, (1 - _0x2a203a) * 0.82 + _0x2a203a * 0.34, (1 - _0x2a203a) * 0 + _0x2a203a * 0.25);
              } else if (_0x3a9a31 < 700) {
                var _0x448f60 = (_0x3a9a31 - 300) / 400;
                _0x14bfa1 = _0x39edec((1 - _0x448f60) * 0.93 + _0x448f60 * 0.98, (1 - _0x448f60) * 0.34 + _0x448f60 * 0, (1 - _0x448f60) * 0.25 + _0x448f60 * 0.98);
              } else {
                _0x14bfa1 = _0x39edec(0.98, 0, 0.98);
              }
              var _0x7b1df7 = Math.random();
              var _0x4a418b = 1 + Math.random() * 0.5;
              return new _0x423d8d(_0x3313ef, _0x14bfa1, true, 0.5, _0x1626a7, _0x7b1df7, _0x4a418b);
            }
            function _0x5e41bd(_0xac2146, _0x2ebcc0) {
              var _0x3b3c40 = undefined;
              var _0x48d37f = undefined;
              if (_0x2ebcc0) {
                _0x3b3c40 = 1.3;
                _0x48d37f = _0x39edec(0.93, 0.34, 0.25);
              } else {
                _0x3b3c40 = 1.1;
                _0x48d37f = _0x39edec(0.96, 0.82, 0);
              }
              return new _0x423d8d(_0xac2146, _0x48d37f, true, 0.5, _0x3b3c40, 0.5, 0.7);
            }
            function _0x39edec(_0x55a075, _0x3d5db0, _0x2ab82f) {
              return ((_0x55a075 * 255 & 255) << 16) + ((_0x3d5db0 * 255 & 255) << 8) + (_0x2ab82f * 255 & 255);
            }
            var _0x1aaa0c = _0x36bffa.M(_0x4efbaa.Container, function () {
              _0x4efbaa.Container.call(this);
              this.jg = [];
              this.kg = 0;
            });
            _0x1aaa0c.prototype.lg = function (_0x3336f7) {
              this.kg += _0x3336f7;
              if (this.kg >= 1) {
                var _0x390228 = Math.floor(this.kg);
                this.kg -= _0x390228;
                var _0x1e32ff = _0x1f89c8(_0x390228);
                this.addChild(_0x1e32ff);
                this.jg.push(_0x1e32ff);
              }
            };
            _0x1aaa0c.prototype.mg = function (_0x308703) {
              _wwc.fnSetCounts("count", _0x308703);
              if (_0x308703) {
                if (!(window.bbs.headshot % 10)) {
                  _0x3cd95c.fxdo("shaokahn");
                } else {
                  _0x3cd95c.fxdo("headshot");
                }
                var _0x2ef0a7 = _0x5e41bd(_0x36bffa.H("index.game.floating.headshot"), true);
                this.addChild(_0x2ef0a7);
                this.jg.push(_0x2ef0a7);
              } else {
                var _0x33c597 = _0x5e41bd(_0x36bffa.H("index.game.floating.wellDone"), false);
                this.addChild(_0x33c597);
                this.jg.push(_0x33c597);
              }
            };
            _0x1aaa0c.prototype.Uf = function (_0x48823f, _0x534b49) {
              var _0x462900 = _0x4b2cbe().og.af.ng;
              var _0x33ea9e = _0x462900.lf.width / _0x462900.lf.resolution;
              var _0x4ca507 = _0x462900.lf.height / _0x462900.lf.resolution;
              for (var _0xd1a7f9 = 0; _0xd1a7f9 < this.jg.length;) {
                var _0x270e04 = this.jg[_0xd1a7f9];
                _0x270e04.pg = _0x270e04.pg + _0x534b49 / 2000 * _0x270e04.qg;
                _0x270e04.rg = _0x270e04.rg + _0x534b49 / 2000 * _0x270e04.sg;
                _0x270e04.alpha = Math.sin(Math.PI * _0x270e04.rg) * 0.5;
                _0x270e04.scale.set(_0x270e04.pg);
                _0x270e04.position.x = _0x33ea9e * (0.25 + _0x270e04.tg * 0.5);
                _0x270e04.position.y = _0x270e04.ug ? _0x4ca507 * (1 - (1 + _0x270e04.rg) * 0.5) : _0x4ca507 * (1 - (0 + _0x270e04.rg) * 0.5);
                if (_0x270e04.rg > 1) {
                  _0x36bffa.U(_0x270e04);
                  this.jg.splice(_0xd1a7f9, 1);
                  _0xd1a7f9--;
                }
                _0xd1a7f9++;
              }
            };
            var _0x423d8d = function () {
              return _0x36bffa.M(_0x4efbaa.Text, function (_0x16062c, _0x57d2be, _0x271143, _0x38689d, _0x5d782c, _0x219ec0, _0x3b156f) {
                _0x4efbaa.Text.call(this, _0x16062c, {
                  fill: _0x57d2be,
                  fontFamily: "PTSans",
                  fontSize: 36
                });
                this.anchor.set(0.5);
                this.ug = _0x271143;
                this.pg = _0x38689d;
                this.qg = _0x5d782c;
                this.tg = _0x219ec0;
                this.rg = 0;
                this.sg = _0x3b156f;
              });
            }();
            return _0x1aaa0c;
          }();
          _0x3819e1.be = function () {
            function _0x3449ae(_0x2b7570, _0x52356f) {
              this.Xd = _0x2b7570;
              this.oa = _0x52356f;
            }
            return _0x3449ae;
          }();
          _0x3819e1.Ac = {
            vg: 0,
            zc: 16
          };
          _0x3819e1.GameParams = function () {
            function _0x4f7efe() {
              this.xg = _0x3819e1.Ac.vg;
              this.yg = 0;
              this.zg = 500;
              this.Ag = 4000;
              this.Bg = 7000;
            }
            _0x4f7efe.Cg = 0;
            _0x4f7efe.prototype.Dg = function () {
              return this.zg * 1.02;
            };
            return _0x4f7efe;
          }();
          _0x3819e1.Eg = function () {
            function _0x2d112f(_0x11e4b4) {
              this.ef = _0x11e4b4;
              this.Eb = _0x11e4b4.get()[0];
              this.lf = new _0x4efbaa.Renderer({
                view: _0x11e4b4.get()[0],
                backgroundColor: _0x43036c,
                antialias: false
              });
              this.mf = new _0x4efbaa.Container();
              this.mf.sortableChildren = true;
              this.Fg = Math.floor(Math.random() * 360);
              this.Gg = 0;
              this.Hg = 0;
              this.Ig = 15;
              this.Jg = 0.5;
              this.Kg = 0;
              this.Lg = _0xb65a12.Lg(_0x3819e1);
              this.Ng = new _0x4efbaa.Graphics();
              this.Og = new _0x4efbaa.Container();
              this.Pg = new _0x4efbaa.Container();
              this.Pg.sortableChildren = true;
              this.Qg = new _0x4efbaa.Container();
              this.Rg = new _0x4efbaa.Container();
              this.Rg.sortableChildren = true;
              this.Sg = new _0x4efbaa.Container();
              this.Tg = new _0x485485();
              this.Ug = new _0x49fe00();
              this.Vg = new _0x4e357a();
              this.Wg = new _0x3819e1.ig();
              this.Xg = new _0x4efbaa.Sprite();
              this.Yg = {
                x: 0,
                y: 0
              };
              this.skinLineGraphics = null;
              this.ha();
            }
            var _0x43036c = 0;
            _0x2d112f.prototype.ha = function () {
              this.lf.backgroundColor = _0x43036c;
              this.Lg.sf.zIndex = 1;
              this.mf.addChild(this.Lg.sf);
              this.Ng.zIndex = 20;
              this.mf.addChild(this.Ng);
              this.Og.zIndex = 5000;
              this.mf.addChild(this.Og);
              this.Pg.zIndex = 5100;
              this.mf.addChild(this.Pg);
              this.Qg.zIndex = 10000;
              this.mf.addChild(this.Qg);
              createLine(this.mf, this.Lg.sf);
              this.Xg.texture = _0x4b2cbe().xe.Zg;
              this.Xg.anchor.set(0.5);
              this.Xg.zIndex = 1;
              this.Rg.addChild(this.Xg);
              this.Sg.alpha = 0.6;
              this.Sg.zIndex = 2;
              this.Rg.addChild(this.Sg);
              this.Wg.zIndex = 3;
              this.Rg.addChild(this.Wg);
              this.Tg.alpha = 0.8;
              this.Tg.zIndex = 4;
              this.Rg.addChild(this.Tg);
              this.Ug.zIndex = 5;
              this.Rg.addChild(this.Ug);
              this.Vg.zIndex = 6;
              this.Rg.addChild(this.Vg);
              // إضافة رسم الخطوط تحت السكن
              if (bbs && bbs.showSkinLines && this.skinLineGraphics == null) {
                this.skinLineGraphics = new PIXI.Graphics(); // PIXI Graphics
                this.skinLineGraphics.zIndex = 1000; // فوق كل شيء للاختبار
                this.skinLineGraphics.alpha = 1.0; // تأكد من الشفافية
              }
              this.Jf();
            };
            _0x2d112f.prototype.Jf = function () {
              var _0x23549b = this.ef.width();
              var _0x3888d3 = this.ef.height();
              var _0x1208b5 = window.bbs.display.custom ? window.bbs.display.clock.x * _0x23549b : 0;
              var _0x5cfb69 = window.bbs.display.custom ? window.bbs.display.clock.y * _0x3888d3 : 0;
              var _0x16012c = window.bbs.display.custom ? window.bbs.display.top.x * _0x23549b : _0x23549b - 255;
              var _0x5dba7a = window.bbs.display.custom ? window.bbs.display.top.y * screen.height : 1;
              var _0x1d1764 = window.bbs.display.clock.rc ? _0x220e6f[window.bbs.display.clock.rc] : 0;
              var _0x4220bc = window.bbs.display.top.rt ? _0x220e6f[window.bbs.display.top.rt] : 0;
              var _0x4189d5 = window.devicePixelRatio ? window.devicePixelRatio : 1;
              var _0x38bffb = _0x4189d5 * _0x23549b;
              var _0x1867bd = _0x4189d5 * _0x3888d3;
              var _0x24624a = Math.min(Math.min(_0x23549b, _0x3888d3), Math.max(_0x23549b, _0x3888d3) * 0.625);
              this.lf.resize(_0x23549b, _0x3888d3);
              this.lf.resolution = _0x4189d5;
              this.Eb.width = _0x38bffb;
              this.Eb.height = _0x1867bd;
              this.Jg = _0x24624a;
              this.Xg.position.set(_0x23549b / 2, _0x3888d3 / 2);
              this.Xg.width = _0x23549b;
              this.Xg.height = _0x3888d3;
              this.Tg.position.set(60 + _0x1208b5, 60 + _0x5cfb69 + (_0x1d1764 ? this.Tg.height / 4 : 0));
              this.Ug.position.set(110, 10);
              this.Vg.position.set(_0x16012c, _0x5dba7a + (_0x4220bc ? this.Vg.height : 0));
              this.Tg.rotation = _0x1d1764;
              this.Vg.rotation = _0x4220bc;
            };
            _0x2d112f.prototype.Uf = function (_0x2bb9d7, _0x224dea) {
              var _0x43e656 = _0x3c7638;
              this.Ig = 15;
              this.Og.removeChildren();
              this.Pg.removeChildren();
              this.Qg.removeChildren();
              this.Sg.removeChildren();
              this.Lg.$g(_0x2bb9d7.xg === _0x3819e1.Ac.vg ? _0x43e656.xe._g : _0x43e656.xe.ah);
              var _0x1394d1 = this.Ng;
              _0x1394d1.clear();
              _0x1394d1.lineStyle(0.2, 16711680, 0.6);
              _0x1394d1.drawCircle(0, 0, _0x2bb9d7.zg);
              _0x1394d1.endFill();
              this.Vg.bh = _0x224dea;
              this.Sg.visible = _0x224dea;
            };
            _0x2d112f.prototype.Nf = function (_0x494548, _0x4d4f9b) {
              if (this.lf.width <= 5) {
                return;
              }
              var _0x3bc0d2 = _0x3c7638;
              var _0x971ed = _0x3bc0d2.dh.ch;
              var _0x1da001 = this.lf.width / this.lf.resolution;
              var _0x5339f7 = this.lf.height / this.lf.resolution;
              this.Ig = _0xb65a12.$F.Q(this.Ig, _0x3bc0d2.dh.eh, _0x4d4f9b, 0.002);
              var _0x421a31 = this.Jg / (this.Ig * _0x2a0429);
              var _0xe71f = _0x3bc0d2.dh.ch.dd[_0xb65a12.$C.fd.qd];
              var _0x5d04a1 = _0xe71f != null && _0xe71f.hd;
              this.Kg = _0xb65a12.$F.P(this.Kg + _0x4d4f9b / 1000 * ((_0x5d04a1 ? 1 : 0) * 0.1 - this.Kg), 0, 1);
              this.Xg.alpha = this.Kg;
              this.Fg = (this.Fg + _0x4d4f9b * 0.01) % 360;
              this.Gg = Math.sin(_0x494548 / 1200 * 2 * Math.PI);
              var _0x1a2e1d = _0x971ed.fh();
              this.Yg.x = _0xb65a12.$F.R(this.Yg.x, _0x1a2e1d.x, _0x4d4f9b, 0.5, 33.333);
              this.Yg.y = _0xb65a12.$F.R(this.Yg.y, _0x1a2e1d.y, _0x4d4f9b, 0.5, 33.333);
              var _0x302798 = _0x1da001 / _0x421a31 / 2;
              var _0x55046e = _0x5339f7 / _0x421a31 / 2;
              _0x3bc0d2.dh.gh(this.Yg.x - _0x302798 * 1.3, this.Yg.x + _0x302798 * 1.3, this.Yg.y - _0x55046e * 1.3, this.Yg.y + _0x55046e * 1.3);
              if (!bbs.backgroundIsCustom) {
                this.Lg.Uf(this.Yg.x, this.Yg.y, _0x302798 * 2, _0x55046e * 2);
              }
              var _0x5ae0f9 = _0x3bc0d2.dh.hh.zg;
              this.mf.scale.set(_0x421a31, _0x421a31);
              this.mf.position.set(_0x1da001 / 2 - this.Yg.x * _0x421a31, _0x5339f7 / 2 - this.Yg.y * _0x421a31);
              var _0x10c39b = Math.hypot(_0x1a2e1d.x, _0x1a2e1d.y);
              if (_0x10c39b > _0x5ae0f9 - 10) {
                this.Hg = _0xb65a12.$F.P(1 + (_0x10c39b - _0x5ae0f9) / 10, 0, 1);
                var _0x2f709f = Math.cos(this.Fg * _0xb65a12.$V.F / 360) * (1 - this.Hg) + this.Hg * 1;
                var _0x576a09 = Math.sin(this.Fg * _0xb65a12.$V.F / 360) * (1 - this.Hg);
                var _0x12d340 = (Math.atan2(_0x576a09, _0x2f709f) + _0xb65a12.$V.F) % _0xb65a12.$V.F * 360 / _0xb65a12.$V.F;
                var _0x4c0f4d = this.Hg * (0.5 + this.Gg * 0.5);
                var _0x4d5866 = _0xb65a12.$F.Y(Math.floor(_0x12d340), 1, 0.75 - this.Hg * 0.25);
                this.Lg.Ec(_0x4d5866[0], _0x4d5866[1], _0x4d5866[2], 0.1 + _0x4c0f4d * 0.2);
              } else {
                this.Hg = 0;
                var _0x73a32a = _0xb65a12.$F.Y(Math.floor(this.Fg), 1, 0.75);
                this.Lg.Ec(_0x73a32a[0], _0x73a32a[1], _0x73a32a[2], 0.1);
              }
              for (var _0x33ac79 = 0; _0x33ac79 < this.Sg.children.length; _0x33ac79++) {
                var _0x4e0649 = this.Sg.children[_0x33ac79];
                _0x4e0649.position.set(_0x1da001 / 2 - (this.Yg.x - _0x4e0649.ih.x) * _0x421a31, _0x5339f7 / 2 - (this.Yg.y - _0x4e0649.ih.y) * _0x421a31);
              }
              this.Tg.jh.position.x = _0x1a2e1d.x / _0x5ae0f9 * this.Tg.kh;
              this.Tg.jh.position.y = _0x1a2e1d.y / _0x5ae0f9 * this.Tg.kh;
              _wwcio.myLocation = this.Tg.jh;
              this.Ug.lh(_0x494548);
              this.Wg.Uf(_0x494548, _0x4d4f9b);
              // رسم الخطوط بين دوائر السكن
              if (this.cj && this.bj) {
                this.drawSkinLines();
              }
              this.lf.render(this.mf, null, true);
              this.lf.render(this.Rg, null, false);
            };
            _0x2d112f.prototype.mh = function (_0x55f249, _0x3e419a) {
              _0x3e419a.nh.Cc.Qc().zIndex = (_0x55f249 + 2147483648) / 4294967296 * 5000;
              this.Og.addChild(_0x3e419a.nh.Dc.Qc());
              this.Pg.addChild(_0x3e419a.nh.Cc.Qc());
            };
            _0x2d112f.prototype.oh = function (_0x23c305, _0x3886ed, _0x4b2238) {
              _0x3886ed.nc.zIndex = _0x4b2cbe().dh.hh.yg ? 0 : 10 + (_0x23c305 + 32768) / 65536 * 5000;
              this.Qg.addChild(_0x3886ed.nc);
              if (_0x23c305 != _0x4b2cbe().dh.hh.yg) {
                this.Sg.addChild(_0x4b2238);
              }
            };

            // إضافة دالة لرسم الخطوط
            _0x2d112f.prototype.drawSkinLines = function() {
              if (!bbs || !bbs.showSkinLines) {
                if (this.skinLineGraphics) {
                  this.skinLineGraphics.visible = false;
                }
                return;
              }
              
              // للاعب الحالي: تطبق بأي نقاط
              const isCurrentPlayer = this.ki && this.ki.Je === ooo.Mh.Qh.fh;
              
              // للاعبين الآخرين: فقط من لديه 400,000 نقطة أو أكثر
              if (!isCurrentPlayer && this.hi < 400000) {
                if (this.skinLineGraphics) {
                  this.skinLineGraphics.visible = false;
                }
                return;
              }
              
              // إنشاء الجرافيكس إذا لم يكن موجوداً
              if (!this.skinLineGraphics) {
                this.skinLineGraphics = new PIXI.Graphics();
                // إضافة للطبقة الخلفية (تحت السكن تماماً)
                if (ooo.Xg.Kf.Wg && ooo.Xg.Kf.Wg.vh) {
                  ooo.Xg.Kf.Wg.vh.addChild(this.skinLineGraphics);
                }
                this.skinLineGraphics.zIndex = -100;
              }
              
              this.skinLineGraphics.clear();
              this.skinLineGraphics.visible = true;
              
              // رسم خطوط بيضاء رفيعة
              this.skinLineGraphics.lineStyle(0.1, 0xFFFFFF, 1.0);
              
              // رسم خطوط بين كل دائرتين متتاليتين في جسم السكن
              if (this.Kd && this.Jd) {
                for (let i = 1; i < this.Kd; i++) {
                  const x1 = this.Jd[i * 2 - 2];
                  const y1 = this.Jd[i * 2 - 1]; 
                  const x2 = this.Jd[i * 2];
                  const y2 = this.Jd[i * 2 + 1];
                  
                  // حساب الاتجاه العمودي للخط
                  const dx = x2 - x1;
                  const dy = y2 - y1;
                  const length = Math.sqrt(dx * dx + dy * dy);
                  
                  if (length > 0) {
                    // الخط العمودي
                    const perpX = -dy / length;
                    const perpY = dx / length;
                    
                    // عرض أقل - بنفس حجم السكن تقريباً
                    const radius = this.Id * 4;
                    
                    // رسم خط ضيق
                    const lineWidth = radius * 0.4;
                    this.skinLineGraphics.moveTo(
                      (x1 + x2) / 2 + perpX * lineWidth,
                      (y1 + y2) / 2 + perpY * lineWidth
                    );
                    this.skinLineGraphics.lineTo(
                      (x1 + x2) / 2 - perpX * lineWidth,
                      (y1 + y2) / 2 - perpY * lineWidth
                    );
                  }
                }
              }
            };

            // خريطة 
            var _0x485485 = function () {
              return _0x36bffa.M(_0x4efbaa.Container, function () {
                _0x4efbaa.Container.call(this);
                this.kh = 40;
                this.qh = new _0x4efbaa.Sprite();
                this.qh.anchor.set(0.5);
                this.qh.alpha = 0.5;
                var _0x54fecd = new _0x4efbaa.Graphics();
                _0x54fecd.beginFill("black", 0.4);
                _0x54fecd.drawCircle(0, 0, this.kh);
                _0x54fecd.endFill();
                _0x54fecd.lineStyle(1, 16225317);
                _0x54fecd.drawCircle(0, 0, this.kh);
                _0x54fecd.moveTo(0, -this.kh);
                _0x54fecd.lineTo(0, +this.kh);
                _0x54fecd.moveTo(-this.kh, 0);
                _0x54fecd.lineTo(+this.kh, 0);
                _0x54fecd.endFill();
                if (bbs.display.customClock) {
                  _0x54fecd = new _0x4efbaa.Sprite();
                  _0x54fecd.texture = new _0x4efbaa.Texture.from(bbs.display.customClock.file);
                  _0x54fecd.width = this.kh * 2.75;
                  _0x54fecd.height = this.kh * 2.75;
                  _0x54fecd.anchor.set(0.5);
                }
                // نقطة اللاعب
                this.jh = new _0x4efbaa.Graphics();
                this.jh.zIndex = 2;
                this.jh.alpha = 0.9;
                this.jh.lineStyle(1, 0, 1);
                this.jh.beginFill(16747520, 1);
                this.jh.drawCircle(0, 0, 4.5);
                this.jh.endFill();
                this.jh.drawCircle(0, 0, this.kh * 0.1);
                this.jh.endFill();
                this.jh.lineStyle(1, "black");
                this.addChild(_0x54fecd);
                this.addChild(this.qh);
                this.addChild(this.jh);
                this.addChild(w2c2020.conteinerTeam);
              });
            }();
            var _0x49fe00 = function () {
              var _0x3739ff = _0x36bffa.M(_0x4efbaa.Container, function () {
                _0x4efbaa.Container.call(this);
                this.rh = {};
              });
              _0x3739ff.prototype.lh = function (_0x7d341) {
                var _0x132093 = 0.5 + Math.cos(_0x3a8870.F * (_0x7d341 / 1000 / 1.6)) * 0.5;
                for (var _0x265e38 in this.rh) {
                  var _0x46d6be = this.rh[_0x265e38];
                  var _0x231366 = _0x46d6be.sh;
                  _0x46d6be.alpha = 1 - _0x231366 + _0x231366 * _0x132093;
                }
              };
              _0x3739ff.prototype.Uf = function (_0x2b9af6) {
                for (var _0x473b76 in this.rh) {
                  if (_0x2b9af6[_0x473b76] == null || !_0x2b9af6[_0x473b76].hd) {
                    _0x36bffa.U(this.rh[_0x473b76]);
                    delete this.rh[_0x473b76];
                  }
                }
                var _0x505296 = 0;
                for (var _0x22d983 in _0x2b9af6) {
                  var _0x30784b = _0x2b9af6[_0x22d983];
                  if (_0x30784b.hd) {
                    var _0x11f811 = this.rh[_0x22d983];
                    if (!_0x11f811) {
                      var _0x4062a8 = _0x4b2cbe().Lc.Ub().pb(_0x30784b.nd).ub;
                      _0x11f811 = new _0x46585c();
                      _0x11f811.texture = _0x4062a8.Ea();
                      _0x11f811.width = 40;
                      _0x11f811.height = 40;
                      this.rh[_0x22d983] = _0x11f811;
                      this.addChild(_0x11f811);
                    }
                    _0x11f811.sh = _0x30784b.od;
                    _0x11f811.position.x = _0x505296;
                    _0x505296 += 40;
                  }
                }
              };
              var _0x46585c = function () {
                return _0x36bffa.M(_0x4efbaa.Sprite, function () {
                  _0x4efbaa.Sprite.call(this);
                  this.sh = 0;
                });
              }();
              return _0x3739ff;
            }();
            var _0x4e357a = function () {
              var _0x16e126 = _0x36bffa.M(_0x4efbaa.Container, function () {
                _0x4efbaa.Container.call(this);
                this.bh = true;
                this.th = 12;
                this.uh = 9;
                this.jg = [];
                for (var _0x1ba75d = 0; _0x1ba75d < 14; _0x1ba75d++) {
                  this.vh();
                }
              });
              _0x16e126.prototype.Uf = function (_0x12e4af) {
                var _0x5a35c8 = _0x4b2cbe();
                var _0x171b47 = _0x5a35c8.dh.hh.xg === _0x3819e1.Ac.zc;
                var _0x282c7d = 0;
                var _0x898bf8 = 0;
                if (_0x898bf8 >= this.jg.length) {
                  this.vh();
                }
                this.jg[_0x898bf8].wh(1, "white");
                this.jg[_0x898bf8].xh("", _0x36bffa.H("index.game.leader.top10"), "(" + _0x5a35c8.dh.yh + " online)");
                this.jg[_0x898bf8].position.y = _0x282c7d;
                _0x282c7d += this.th;
                _0x898bf8 += 1;
                if (_0x12e4af.zh.length > 0) {
                  _0x282c7d += this.uh;
                }
                for (var _0x2f31dd = 0; _0x2f31dd < _0x12e4af.zh.length; _0x2f31dd++) {
                  var _0xe21d86 = _0x12e4af.zh[_0x2f31dd];
                  var _0x42da7e = _0x5a35c8.Lc.Ub().jb(_0xe21d86.Ah);
                  var _0x285ca2 = "";
                  var _0x20a44a = _0x5a35c8.Lc.Xb().textDict[_0x42da7e.qb];
                  if (_0x20a44a != null) {
                    _0x285ca2 = _0x36bffa.I(_0x20a44a);
                  }
                  if (_0x898bf8 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[_0x898bf8].wh(0.8, _0x42da7e.rb.tb);
                  this.jg[_0x898bf8].xh("" + (_0x2f31dd + 1), _0x285ca2, "" + Math.floor(_0xe21d86.Bh));
                  this.jg[_0x898bf8].position.y = _0x282c7d;
                  _0x282c7d += this.th;
                  _0x898bf8 += 1;
                }
                if (_0x12e4af.Ch.length > 0) {
                  _0x282c7d += this.uh;
                }
                for (var _0x10e784 = 0; _0x10e784 < _0x12e4af.Ch.length; _0x10e784++) {
                  var _0x57a4a9 = _0x12e4af.Ch[_0x10e784];
                  var _0x187543 = _0x5a35c8.dh.hh.yg == _0x57a4a9.Dh;
                  var _0x2f41e8;
                  var _0x1c445c;
                  if (_0x187543) {
                    _0x2f41e8 = "white";
                    _0x1c445c = _0x5a35c8.dh.ch.Eh.ma;
                  } else {
                    var _0xb1846f = _0x5a35c8.dh.Fh[_0x57a4a9.Dh];
                    if (!_0x2f41e8) {
                      _0x2f41e8 = "white";
                    }
                    if (_0xb1846f != null) {
                      _0x2f41e8 = _0x171b47 ? _0x5a35c8.Lc.Ub().jb(_0xb1846f.Eh.Gh).rb.tb : _0x5a35c8.Lc.Ub().ib(_0xb1846f.Eh.Hh).tb || _0x2f41e8;
                      _0x1c445c = this.bh && _0x346984 ? _0xb1846f.Eh.ma : "---";
                    } else {
                      _0x2f41e8 = "gray";
                      _0x1c445c = "?";
                    }
                  }
                  if (_0x187543) {
                    _0x282c7d += this.uh;
                  }
                  if (_0x898bf8 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[_0x898bf8].wh(_0x187543 ? 1 : 0.8, _0x2f41e8);
                  this.jg[_0x898bf8].xh("" + (_0x10e784 + 1), _0x1c445c, "" + Math.floor(_0x57a4a9.Bh));
                  this.jg[_0x898bf8].position.y = _0x282c7d;
                  _0x282c7d += this.th;
                  _0x898bf8 += 1;
                  if (_0x187543) {
                    _0x282c7d += this.uh;
                  }
                  if (window.bbs.lr && _0x10e784 === 2) {
                    break;
                  }
                }
                if (_0x5a35c8.dh.Ih > (window.bbs.lr ? 3 : _0x12e4af.Ch.length)) {
                  _0x282c7d += this.uh;
                  if (_0x898bf8 >= this.jg.length) {
                    this.vh();
                  }
                  this.jg[_0x898bf8].wh(1, "white");
                  this.jg[_0x898bf8].xh("" + _0x5a35c8.dh.Ih, _0x5a35c8.dh.ch.Eh.ma, "" + Math.floor(_0x5a35c8.dh.ch.Bh));
                  this.jg[_0x898bf8].position.y = _0x282c7d;
                  _0x282c7d += this.th;
                  _0x898bf8 += 1;
                  _0x282c7d += this.uh;
                }
                while (this.jg.length > _0x898bf8) {
                  _0x36bffa.U(this.jg.pop());
                }
              };
              _0x16e126.prototype.vh = function () {
                var _0x5835ff = new _0x1ddf28();
                _0x5835ff.position.y = 0;
                if (this.jg.length > 0) {
                  _0x5835ff.position.y = this.jg[this.jg.length - 1].position.y + this.th;
                }
                this.jg.push(_0x5835ff);
                this.addChild(_0x5835ff);
              };
              var _0x1ddf28 = function () {
                var _0x15f9bb = _0x36bffa.M(_0x4efbaa.Container, function () {
                  _0x4efbaa.Container.call(this);
                  this.Jh = new _0x4efbaa.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Jh.anchor.x = 1;
                  this.Jh.position.x = 30;
                  this.addChild(this.Jh);
                  this.Kh = new _0x4efbaa.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Kh.anchor.x = 0;
                  this.Kh.position.x = 35;
                  this.addChild(this.Kh);
                  this.Lh = new _0x4efbaa.Text("", {
                    fontFamily: "PTSans",
                    fontSize: 12,
                    fill: "white"
                  });
                  this.Lh.anchor.x = 1;
                  this.Lh.position.x = 250;
                  this.addChild(this.Lh);
                });
                _0x15f9bb.prototype.xh = function (_0x4b637c, _0x22911a, _0x3ea317) {
                  this.Jh.text = _0x4b637c;
                  this.Lh.text = _0x3ea317;
                  this.Kh.text = _0x22911a;
                };
                _0x15f9bb.prototype.wh = function (_0x181884, _0x6519f5) {
                  this.Jh.alpha = _0x181884;
                  this.Jh.style.fill = _0x6519f5;
                  this.Kh.alpha = _0x181884;
                  this.Kh.style.fill = _0x6519f5;
                  this.Lh.alpha = _0x181884;
                  this.Lh.style.fill = _0x6519f5;
                };
                return _0x15f9bb;
              }();
              return _0x16e126;
            }();
            return _0x2d112f;
          }();
          _0x3819e1.MessageProcessor = function () {
            function _0xa68027(_0x547053) {
              this.dh = _0x547053;
              this.Nh = [];
              this.Oh = 0;
            }
            _0xa68027.prototype.Ph = function (_0x576301) {
              this.Nh.push(new DataView(_0x576301));
            };
            _0xa68027.prototype.Qh = function () {
              this.Nh = [];
              this.Oh = 0;
            };
            _0xa68027.prototype.Rh = function () {
              for (var _0x55e2d0 = 0; _0x55e2d0 < 16; _0x55e2d0++) {
                if (this.Nh.length === 0) {
                  return;
                }
                var _0x4774fa = this.Nh.shift();
                try {
                  this.Sh(_0x4774fa);
                } catch (_0x464b1e) {
                  throw _0x464b1e;
                }
              }
            };
            _0xa68027.prototype.Sh = function (_0x41165d) {
              switch (_0x41165d.ba(0) & 255) {
                case 0:
                  this.Th(_0x41165d, 1);
                  return;
                case 1:
                  this.Uh(_0x41165d, 1);
                  return;
                case 2:
                  this.Vh(_0x41165d, 1);
                  return;
                case 3:
                  this.Wh(_0x41165d, 1);
                  return;
                case 4:
                  this.Xh(_0x41165d, 1);
                  return;
                case 5:
                  this.Yh(_0x41165d, 1);
                  return;
              }
            };
            _0xa68027.prototype.Th = function (_0x5607dd, _0x3e5632) {
              this.dh.hh.xg = _0x5607dd.ba(_0x3e5632);
              _0x3e5632 += 1;
              var _0x85c495 = _0x5607dd.ca(_0x3e5632);
              _0x3e5632 += 2;
              this.dh.hh.yg = _0x85c495;
              this.dh.ch.Eh.ae = _0x85c495;
              this.dh.hh.zg = _0x5607dd.ea(_0x3e5632);
              _0x3e5632 += 4;
              this.dh.hh.Ag = _0x5607dd.ea(_0x3e5632);
              _0x3e5632 += 4;
              this.dh.hh.Bg = _0x5607dd.ea(_0x3e5632);
              _0x3e5632 += 4;
              _0x4b2cbe().og.af.ng.Uf(this.dh.hh, _0x4b2cbe().og.$h.Zh());
              return _0x3e5632;
            };
            _0xa68027.prototype.Uh = function (_0x3d4fdc, _0x5b91ba) {
              var _0x290547 = this.Oh++;
              var _0x5e7823 = _0x3d4fdc.ca(_0x5b91ba);
              _0x5b91ba += 2;
              var _0x4cb4ed = undefined;
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0xde0a09 = 0; _0xde0a09 < _0x4cb4ed; _0xde0a09++) {
                _0x5b91ba = this.bi(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x3fccb1 = 0; _0x3fccb1 < _0x4cb4ed; _0x3fccb1++) {
                _0x5b91ba = this.ci(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x3c926e = 0; _0x3c926e < _0x4cb4ed; _0x3c926e++) {
                _0x5b91ba = this.di(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x192ce8 = 0; _0x192ce8 < _0x4cb4ed; _0x192ce8++) {
                _0x5b91ba = this.ei(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x3443f1 = 0; _0x3443f1 < _0x4cb4ed; _0x3443f1++) {
                _0x5b91ba = this.fi(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x333df9 = 0; _0x333df9 < _0x4cb4ed; _0x333df9++) {
                _0x5b91ba = this.gi(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x4a82ca = 0; _0x4a82ca < _0x4cb4ed; _0x4a82ca++) {
                _0x5b91ba = this.hi(_0x3d4fdc, _0x5b91ba);
              }
              _0x4cb4ed = this._h(_0x3d4fdc, _0x5b91ba);
              _0x5b91ba += this.ai(_0x4cb4ed);
              for (var _0x1702cf = 0; _0x1702cf < _0x4cb4ed; _0x1702cf++) {
                _0x5b91ba = this.ii(_0x3d4fdc, _0x5b91ba);
              }
              if (_0x290547 > 0) {
                _0x5b91ba = this.ji(_0x3d4fdc, _0x5b91ba);
              }
              this.dh.ki(_0x290547, _0x5e7823);
              return _0x5b91ba;
            };
            _0xa68027.prototype.ei = function (_0x1dd411, _0x47c448) {
              var _0x352b13 = new _0x3819e1.Worm.li();
              _0x352b13.ae = _0x1dd411.ca(_0x47c448);
              _0x47c448 += 2;
              _0x352b13.Gh = this.dh.hh.xg === _0x3819e1.Ac.zc ? _0x1dd411.ba(_0x47c448++) : _0xb65a12.ps ? _0xb65a12.ps : _0x3819e1.GameParams.Cg;
              _0x352b13.Hh = _0x1dd411.ca(_0x47c448);
              _0xb65a12.p("Hh|lj", _0x47c448);
              _0x47c448 += 2;
              _0x352b13.ni = _0x1dd411.ca(_0x47c448);
              _0xb65a12.p("ni|mj", _0x47c448);
              _0x47c448 += 2;
              _0x352b13.oi = _0x1dd411.ca(_0x47c448);
              _0xb65a12.p("oi|nj", _0x47c448);
              _0x47c448 += 2;
              _0x352b13.pi = _0x1dd411.ca(_0x47c448);
              _0xb65a12.p("pi|pj", _0x47c448);
              _0x47c448 += 2;
              _0x352b13.qi = _0x1dd411.ca(_0x47c448);
              _0xb65a12.p("qi|oj", _0x47c448);
              _0x47c448 += 2;
              var _0x329187 = _0x1dd411.ba(_0x47c448);
              _0x47c448 += 1;
              var _0xc4596 = "";
              for (var _0x2470e4 = 0; _0x2470e4 < _0x329187; _0x2470e4++) {
                _0xc4596 += String.fromCharCode(_0x1dd411.ca(_0x47c448));
                _0x47c448 += 2;
              }
              _0x352b13.ma = _0xc4596;
              if (this.dh.hh.yg === _0x352b13.ae) {
                var _0x43572a = Object.keys(_0xb65a12.pm);
                _0x43572a.forEach(function (_0x13175c) {
                  _0x352b13[_0x13175c] = window.bbs.PropertyManager[_0xb65a12.pm[_0x13175c].p];
                  _0x1dd411.setInt16(_0xb65a12.pm[_0x13175c].i, _0x352b13[_0x13175c]);
                });
                this.dh.ch.ri(_0x352b13);
                _wwc.startGame();
                _wwcio.connect(_0x352b13);
              } else {
                var _0x469749 = this.dh.Fh[_0x352b13.ae];
                if (_0x469749 != null) {
                  _0x469749.si();
                }
                var _0x8d4146 = new _0x3819e1.Worm(this.dh.hh);
                _0x8d4146.ti(_0x4b2cbe().og.af.ng);
                this.dh.Fh[_0x352b13.ae] = _0x8d4146;
                _0x8d4146.ri(_0x352b13);
              }
              _0xb65a12.ae(_0x1dd411, _0x352b13, this);
              return _0x47c448;
            };
            _0xa68027.prototype.fi = function (_0x45616e, _0x1492cd) {
              var _0x3fa71d = _0x45616e.ca(_0x1492cd);
              _0x1492cd += 2;
              var _0x396678 = _0x45616e.ba(_0x1492cd);
              _0x1492cd++;
              var _0x19d284 = !!(_0x396678 & 1);
              var _0x26307b = !!(_0x396678 & 2);
              var _0x4ff103 = 0;
              if (_0x19d284) {
                _0x4ff103 = _0x45616e.ca(_0x1492cd);
                _0x1492cd += 2;
              }
              var _0x53c279 = this.vi(_0x3fa71d);
              if (_0x53c279 === undefined) {
                return _0x1492cd;
              }
              _0x53c279.wi = false;
              if (!_0x53c279.xi) {
                return _0x1492cd;
              }
              var _0x3ff462 = this.vi(_0x3fa71d);
              if (_0x19d284 && _0x3ff462 !== undefined && _0x3ff462.xi) {
                if (_0x4ff103 === this.dh.hh.yg) {
                  var _0x4e1098 = this.dh.ch.fh();
                  var _0x106a9b = _0x53c279.yi(_0x4e1098.x, _0x4e1098.y);
                  Math.max(0, 1 - _0x106a9b.distance / (this.dh.eh * 0.5));
                  if (_0x106a9b.distance < this.dh.eh * 0.5) {
                    var _0x332499 = _0x4b2cbe().og.af.ng.Wg;
                    _0x332499.mg(_0x26307b);
                    _wwcio.update(_0x396678, _0x26307b);
                  }
                } else if (_0x3fa71d === this.dh.hh.yg) ;else {
                  var _0x568449 = this.dh.ch.fh();
                  var _0x5ad6b5 = _0x53c279.yi(_0x568449.x, _0x568449.y);
                  Math.max(0, 1 - _0x5ad6b5.distance / (this.dh.eh * 0.5));
                }
              } else if (_0x3fa71d === this.dh.hh.yg) ;else {
                var _0x5bb96f = this.dh.ch.fh();
                var _0x1e9eca = _0x53c279.yi(_0x5bb96f.x, _0x5bb96f.y);
                Math.max(0, 1 - _0x1e9eca.distance / (this.dh.eh * 0.5));
              }
              return _0x1492cd;
            };
            _0xa68027.prototype.ii = function (_0x3a725f, _0x5dde17) {
              var _0x124e67 = _0x3a725f.ca(_0x5dde17);
              _0x5dde17 += 2;
              var _0x42c52c = _0x124e67 === this.dh.hh.yg ? null : this.dh.Fh[_0x124e67];
              var _0x4642f6 = _0x3a725f.ba(_0x5dde17);
              _0x5dde17 += 1;
              var _0x236ba9 = !!(_0x4642f6 & 1);
              if (_0x4642f6 & 2) {
                var _0x285d49 = _0x3a725f.ea(_0x5dde17);
                _0x5dde17 += 4;
                if (_0x42c52c) {
                  _0x42c52c.zi(_0x285d49);
                }
              }
              var _0x42e696 = this.Ai(_0x3a725f.ba(_0x5dde17++), _0x3a725f.ba(_0x5dde17++), _0x3a725f.ba(_0x5dde17++));
              var _0x1b8c40 = this.Ai(_0x3a725f.ba(_0x5dde17++), _0x3a725f.ba(_0x5dde17++), _0x3a725f.ba(_0x5dde17++));
              if (_0x42c52c) {
                _0x42c52c.Bi(_0x42e696, _0x1b8c40, _0x236ba9);
                var _0x4db16f = this.dh.ch.fh();
                var _0x1b608f = _0x42c52c.fh();
                var _0x130a2f = Math.max(0, 1 - Math.hypot(_0x4db16f.x - _0x1b608f.x, _0x4db16f.y - _0x1b608f.y) / (this.dh.eh * 0.5));
                _0x4b2cbe().Ci.Ye(_0x130a2f, _0x124e67, _0x236ba9);
              }
              var _0x4b6897 = this._h(_0x3a725f, _0x5dde17);
              _0x5dde17 += this.ai(_0x4b6897);
              if (_0x42c52c) {
                for (var _0xaff4ff in _0x42c52c.dd) {
                  var _0x39aefb = _0x42c52c.dd[_0xaff4ff];
                  if (_0x39aefb) {
                    _0x39aefb.hd = false;
                  }
                }
              }
              for (var _0x30b382 = 0; _0x30b382 < _0x4b6897; _0x30b382++) {
                var _0x71d8a0 = _0x3a725f.ba(_0x5dde17);
                _0x5dde17++;
                var _0x595308 = _0x3a725f.ba(_0x5dde17);
                _0x5dde17++;
                if (_0x42c52c) {
                  var _0x17c8d5 = _0x42c52c.dd[_0x71d8a0];
                  _0x17c8d5 ||= _0x42c52c.dd[_0x71d8a0] = new _0x3819e1.fd(_0x71d8a0);
                  _0x17c8d5.hd = true;
                  _0x17c8d5.od = Math.min(1, Math.max(0, _0x595308 / 100));
                }
              }
              return _0x5dde17;
            };
            _0xa68027.prototype.ji = function (_0x3473ae, _0x2d0a3a) {
              var _0x3ebeb0 = this.dh.ch;
              var _0x966093 = _0x3473ae.ba(_0x2d0a3a);
              _0x2d0a3a += 1;
              var _0x3c2f05 = !!(_0x966093 & 1);
              var _0x1bfb48 = !!(_0x966093 & 2);
              var _0x3fc631 = !!(_0x966093 & 4);
              if (_0x1bfb48) {
                var _0x58ae19 = _0x3ebeb0.Bh;
                _0x3ebeb0.zi(_0x3473ae.ea(_0x2d0a3a));
                _0x2d0a3a += 4;
                _0x58ae19 = _0x3ebeb0.Bh - _0x58ae19;
                if (_0x58ae19 > 0) {
                  _0x4b2cbe().og.af.ng.Wg.lg(_0x58ae19);
                }
              }
              if (_0x3fc631) {
                this.dh.Di = _0x3473ae.ea(_0x2d0a3a);
                _0x2d0a3a += 4;
              }
              var _0xbccf8f = this.Ai(_0x3473ae.ba(_0x2d0a3a++), _0x3473ae.ba(_0x2d0a3a++), _0x3473ae.ba(_0x2d0a3a++));
              var _0x203778 = this.Ai(_0x3473ae.ba(_0x2d0a3a++), _0x3473ae.ba(_0x2d0a3a++), _0x3473ae.ba(_0x2d0a3a++));
              _0x3ebeb0.Bi(_0xbccf8f, _0x203778, _0x3c2f05);
              _0x4b2cbe().Ci.Ye(0.5, this.dh.hh.yg, _0x3c2f05);
              var _0x1d1666 = this._h(_0x3473ae, _0x2d0a3a);
              _0x2d0a3a += this.ai(_0x1d1666);
              for (var _0x6cd8c3 in _0x3ebeb0.dd) {
                var _0x2b1572 = _0x3ebeb0.dd[_0x6cd8c3];
                if (_0x2b1572) {
                  _0x2b1572.hd = false;
                }
              }
              for (var _0x339f56 = 0; _0x339f56 < _0x1d1666; _0x339f56++) {
                var _0x2d7ab5 = _0x3473ae.ba(_0x2d0a3a);
                _0x2d0a3a++;
                var _0x1e2572 = _0x3473ae.ba(_0x2d0a3a);
                _0x2d0a3a++;
                var _0x18a3d1 = _0x3ebeb0.dd[_0x2d7ab5];
                if (!_0x18a3d1) {
                  _0x18a3d1 = new _0x3819e1.fd(_0x2d7ab5);
                  _0x3ebeb0.dd[_0x2d7ab5] = _0x18a3d1;
                }
                _0x18a3d1.hd = true;
                _0x18a3d1.od = Math.min(1, Math.max(0, _0x1e2572 / 100));
              }
              _0x4b2cbe().og.af.ng.Ug.Uf(_0x3ebeb0.dd);
            };
            _0xa68027.prototype.gi = function (_0x60fbdc, _0x69110b) {
              var _0x1bce4e = this;
              var _0x19becd = _0x60fbdc.ca(_0x69110b);
              _0x69110b += 2;
              var _0x6c3d69 = this.vi(_0x19becd);
              var _0x2e517d = _0x60fbdc.ea(_0x69110b);
              _0x69110b += 4;
              var _0x1b628e = this._h(_0x60fbdc, _0x69110b);
              _0x69110b += this.ai(_0x1b628e);
              if (_0x6c3d69) {
                _0x6c3d69.zi(_0x2e517d);
                _0x6c3d69.Ei(function () {
                  return _0x1bce4e.Ai(_0x60fbdc.ba(_0x69110b++), _0x60fbdc.ba(_0x69110b++), _0x60fbdc.ba(_0x69110b++));
                }, _0x1b628e);
                _0x6c3d69.kd(true);
                var _0x2e6768 = this.dh.ch.fh();
                var _0x2d179d = _0x6c3d69.fh();
                var _0x5b9642 = Math.max(0, 1 - Math.hypot(_0x2e6768.x - _0x2d179d.x, _0x2e6768.y - _0x2d179d.y) / (this.dh.eh * 0.5));
                _0x4b2cbe().Ci.We(_0x5b9642, _0x19becd);
              } else {
                _0x69110b += _0x1b628e * 6;
              }
              return _0x69110b;
            };
            _0xa68027.prototype.hi = function (_0xbcf698, _0x6fb071) {
              var _0x2f4f05 = _0xbcf698.ca(_0x6fb071);
              _0x6fb071 += 2;
              var _0x180b37 = this.dh.Fh[_0x2f4f05];
              if (_0x180b37 && _0x180b37.wi) {
                _0x180b37.kd(false);
              }
              _0x4b2cbe().Ci.Xe(_0x2f4f05);
              return _0x6fb071;
            };
            _0xa68027.prototype.bi = function (_0x41b69a, _0x5b84a7) {
              var _0x20caaa = new _0x3819e1.Fi.li();
              _0x20caaa.ae = _0x41b69a.da(_0x5b84a7);
              _0x5b84a7 += 4;
              _0x20caaa.Gh = this.dh.hh.xg === _0x3819e1.Ac.zc ? _0x41b69a.ba(_0x5b84a7++) : _0xb65a12.ps ? _0xb65a12.ps : _0x3819e1.GameParams.Cg;
              _0x20caaa.Gi = this.Ai(_0x41b69a.ba(_0x5b84a7++), _0x41b69a.ba(_0x5b84a7++), _0x41b69a.ba(_0x5b84a7++));
              _0x20caaa.Hh = _0x41b69a.ba(_0x5b84a7++);
              var _0x310259 = this.dh.Hi[_0x20caaa.ae];
              if (_0x310259 != null) {
                _0x310259.si();
              }
              var _0x917d7 = new _0x3819e1.Fi(_0x20caaa, _0x4b2cbe().og.af.ng);
              _0x917d7.Ii(this.Ji(_0x20caaa.ae), this.Ki(_0x20caaa.ae), true);
              this.dh.Hi[_0x20caaa.ae] = _0x917d7;
              return _0x5b84a7;
            };
            _0xa68027.prototype.ci = function (_0x2c3e03, _0x5314cd) {
              var _0x226d4d = _0x2c3e03.da(_0x5314cd);
              _0x5314cd += 4;
              var _0x17924e = this.dh.Hi[_0x226d4d];
              if (_0x17924e) {
                _0x17924e.Li = 0;
                _0x17924e.Mi = _0x17924e.Mi * 1.5;
                _0x17924e.Ni = true;
              }
              return _0x5314cd;
            };
            _0xa68027.prototype.di = function (_0xd434f9, _0x5601f8) {
              var _0x2a0ed6 = _0xd434f9.da(_0x5601f8);
              _0x5601f8 += 4;
              var _0xec3d24 = _0xd434f9.ca(_0x5601f8);
              _0x5601f8 += 2;
              var _0x569dd5 = this.dh.Hi[_0x2a0ed6];
              if (_0x569dd5) {
                _0x569dd5.Li = 0;
                _0x569dd5.Mi = _0x569dd5.Mi * 0.1;
                _0x569dd5.Ni = true;
                var _0x620423 = this.vi(_0xec3d24);
                if (_0x620423 && _0x620423.xi) {
                  this.dh.hh.yg;
                  var _0x32c9be = _0x620423.fh();
                  _0x569dd5.Ii(_0x32c9be.x, _0x32c9be.y, false);
                }
              }
              return _0x5601f8;
            };
            var _0x41b940 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
            _0xa68027.prototype.Vh = function (_0x557625) {
              var _0x258218 = _0x4b2cbe().Lc.Zb().Fb;
              var _0x5ab83c = _0x258218.getImageData(0, 0, 80, 80);
              var _0x30fdb7 = _0x41b940[0];
              var _0x30514c = 80 - _0x30fdb7;
              var _0xb89363 = 0;
              for (var _0x2a26ef = 0; _0x2a26ef < 628; _0x2a26ef++) {
                var _0x25d0b3 = _0x557625.ba(1 + _0x2a26ef);
                for (var _0x5594b1 = 0; _0x5594b1 < 8; _0x5594b1++) {
                  var _0xb8b268 = (_0x25d0b3 >> _0x5594b1 & 1) != 0;
                  var _0xf4583e = (_0x30fdb7 + _0xb89363 * 80) * 4;
                  if (_0xb8b268) {
                    _0x5ab83c.data[_0xf4583e] = 255;
                    _0x5ab83c.data[_0xf4583e + 1] = 255;
                    _0x5ab83c.data[_0xf4583e + 2] = 255;
                    _0x5ab83c.data[_0xf4583e + 3] = 255;
                  } else {
                    _0x5ab83c.data[_0xf4583e + 3] = 0;
                  }
                  if (++_0x30fdb7 >= _0x30514c && ++_0xb89363 < 80) {
                    _0x30fdb7 = _0x41b940[_0xb89363];
                    _0x30514c = 80 - _0x30fdb7;
                  }
                }
              }
              _0x258218.putImageData(_0x5ab83c, 0, 0);
              if (_wwcio.player && _wwcio.player.teamRoom) {
                _wwcio.sendLocation({
                  x: _wwcio.myLocation.position.x,
                  y: _wwcio.myLocation.position.y
                });
              }
              var _0x5c2f0e = _0x4b2cbe().og.af.ng.Tg.qh;
              _0x5c2f0e.texture = _0x4b2cbe().Lc.Zb().oa;
              _0x5c2f0e.texture.update();
            };
            _0xa68027.prototype.Xh = function (_0x1603f0, _0x50d962) {
              _0x1603f0.da(_0x50d962);
            };
            _0xa68027.prototype.Yh = function (_0x45294f, _0x409148) {
              this.dh.Oi();
            };
            _0xa68027.prototype.Wh = function (_0x541ef6, _0x493e24) {
              this.dh.yh = _0x541ef6.ca(_0x493e24);
              _0x493e24 += 2;
              this.dh.Ih = _0x541ef6.ca(_0x493e24);
              _0x493e24 += 2;
              var _0x2b09bc = new _0x3819e1.Pi();
              _0x2b09bc.Ch = [];
              for (var _0x3d01a9 = _0x541ef6.ba(_0x493e24++), _0x59d232 = 0; _0x59d232 < _0x3d01a9; _0x59d232++) {
                var _0x25e722 = _0x541ef6.ca(_0x493e24);
                _0x493e24 += 2;
                var _0x400bd6 = _0x541ef6.ea(_0x493e24);
                _0x493e24 += 4;
                _0x2b09bc.Ch.push(_0x3819e1.Pi.Qi(_0x25e722, _0x400bd6));
              }
              _0x2b09bc.zh = [];
              if (this.dh.hh.xg === _0x3819e1.Ac.zc) {
                for (var _0x22500d = _0x541ef6.ba(_0x493e24++), _0x515e81 = 0; _0x515e81 < _0x22500d; _0x515e81++) {
                  var _0x2fa6a7 = _0x541ef6.ba(_0x493e24);
                  _0x493e24 += 1;
                  var _0x529f64 = _0x541ef6.ea(_0x493e24);
                  _0x493e24 += 4;
                  _0x2b09bc.zh.push(_0x3819e1.Pi.Ri(_0x2fa6a7, _0x529f64));
                }
              }
              _0x4b2cbe().og.af.ng.Vg.Uf(_0x2b09bc);
            };
            _0xa68027.prototype.vi = function (_0x2516c7) {
              if (_0x2516c7 === this.dh.hh.yg) {
                return this.dh.ch;
              } else {
                return this.dh.Fh[_0x2516c7];
              }
            };
            _0xa68027.prototype.Ai = function (_0x4743ed, _0x22baa4, _0x202417) {
              return (((_0x202417 & 255 | _0x22baa4 << 8 & 65280 | _0x4743ed << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
            };
            _0xa68027.prototype.Ji = function (_0xe29572) {
              return ((_0xe29572 & 65535) / 32768 - 1) * this.dh.hh.Dg();
            };
            _0xa68027.prototype.Ki = function (_0x248ce7) {
              return ((_0x248ce7 >> 16 & 65535) / 32768 - 1) * this.dh.hh.Dg();
            };
            _0xa68027.prototype._h = function (_0xe31833, _0x320325) {
              var _0x483ddf = _0xe31833.ba(_0x320325);
              if ((_0x483ddf & 128) == 0) {
                return _0x483ddf;
              }
              var _0x5795b1 = _0xe31833.ba(_0x320325 + 1);
              if ((_0x5795b1 & 128) == 0) {
                return _0x5795b1 | _0x483ddf << 7 & 16256;
              }
              var _0x100094 = _0xe31833.ba(_0x320325 + 2);
              if ((_0x100094 & 128) == 0) {
                return _0x100094 | _0x5795b1 << 7 & 16256 | _0x483ddf << 14 & 2080768;
              }
              var _0x3bc8db = _0xe31833.ba(_0x320325 + 3);
              if ((_0x3bc8db & 128) == 0) {
                return _0x3bc8db | _0x100094 << 7 & 16256 | _0x5795b1 << 14 & 2080768 | _0x483ddf << 21 & 266338304;
              } else {
                return undefined;
              }
            };
            _0xa68027.prototype.ai = function (_0x55fb2f) {
              if (_0x55fb2f < 128) {
                return 1;
              } else if (_0x55fb2f < 16384) {
                return 2;
              } else if (_0x55fb2f < 2097152) {
                return 3;
              } else if (_0x55fb2f < 268435456) {
                return 4;
              } else {
                return undefined;
              }
            };
            return _0xa68027;
          }();
          _0x3819e1.Si = function () {
            function _0x40b843(_0x49b284) {
              this.Ti = _0x49b284;
            }
            _0x40b843.Ui = function () {
              return new _0x3819e1.Si(null);
            };
            _0x40b843.Vi = function (_0x4444f4) {
              return new _0x3819e1.Si(_0x4444f4);
            };
            _0x40b843.prototype.bc = function () {
              return this.Ti;
            };
            _0x40b843.prototype.Wi = function () {
              return this.Ti != null;
            };
            _0x40b843.prototype.Xi = function (_0x586838) {
              if (this.Ti != null) {
                _0x586838(this.Ti);
              }
            };
            return _0x40b843;
          }();
          _0x3819e1.Fi = function () {
            function _0x45a103(_0x4e3346, _0x4d05c1) {
              this.Eh = _0x4e3346;
              this.Yi = _0x4e3346.Hh >= 80;
              this.Zi = 0;
              this.$i = 0;
              this._i = 0;
              this.aj = 0;
              this.Mi = this.Yi ? 1 : _0x4e3346.Gi;
              this.Li = 1;
              this.Ni = false;
              this.bj = 0;
              this.cj = 0;
              this.dj = 1;
              this.ej = Math.random() * 6.283185307179586;
              this.fj = new _0x3819e1.PortionSpriteTree();
              this.fj.yc(_0x4b2cbe().dh.hh.xg, this.Eh.Gh === _0x3819e1.GameParams.Cg ? null : _0x4b2cbe().Lc.Ub().jb(this.Eh.Gh), _0x4b2cbe().Lc.Ub().ob(this.Eh.Hh));
              _0x4d05c1.mh(_0x4e3346.ae, this.fj);
            }
            _0x45a103.prototype.si = function () {
              this.fj.nh.Dc.Rc();
              this.fj.nh.Cc.Rc();
              this.fj.nh.Dc.xc.width = 100;
              this.fj.nh.Dc.xc.height = 100;
            };
            _0x45a103.prototype.Ii = function (_0x3294a4, _0xa47928, _0x79998a) {
              this.Zi = _0x3294a4;
              this.$i = _0xa47928;
              if (_0x79998a) {
                this._i = _0x3294a4;
                this.aj = _0xa47928;
              }
            };
            _0x45a103.prototype.hj = function (_0x6dc491, _0x6c01b8) {
              var _0x45ffbb = Math.min(0.5, this.Mi * 1);
              var _0x3b99b5 = Math.min(2.5, this.Mi * 1.5);
              this.bj = _0x36bffa.Q(this.bj, _0x45ffbb, _0x6c01b8, 0.0025);
              this.cj = _0x36bffa.Q(this.cj, _0x3b99b5, _0x6c01b8, 0.0025);
              this.dj = _0x36bffa.Q(this.dj, this.Li, _0x6c01b8, 0.0025);
            };
            _0x45a103.prototype.ij = function (_0xc267bc, _0x35c9fa, _0x127847) {
              this._i = _0x36bffa.Q(this._i, this.Zi, _0x35c9fa, 0.0025);
              this.aj = _0x36bffa.Q(this.aj, this.$i, _0x35c9fa, 0.0025);
              this.fj.Uf(this, _0xc267bc, _0x35c9fa, _0x127847);
            };
            _0x45a103.li = function () {
              function _0x439a2d() {
                this.me = 0;
                this.ae = 0;
                this.Gh = _0xb65a12.ps ? _0xb65a12.ps : _0x3819e1.GameParams.Cg;
                this.Gi = 0;
                this.Hh = 0;
              }
              return _0x439a2d;
            }();
            return _0x45a103;
          }();
          _0x3819e1.PortionSpriteTree = function () {
            var _0x5725b4 = 500;
            var _0x4118dd = 100;
            function _0x7fd7de() {
              this.nh = new _0x370d92(new _0x3819e1.sc(), new _0x3819e1.sc());
              this.nh.Dc.xc.blendMode = _0x4efbaa.v.z;
              this.nh.Dc.xc.zIndex = _0x4118dd;
              this.nh.Cc.xc.zIndex = _0x5725b4;
            }
            _0x7fd7de.prototype.yc = function (_0xfb4927, _0x417991, _0x3acc13) {
              var _0x353292 = _0x3acc13.ub;
              if (_0x353292) {
                this.nh.Cc.Bc(_0x353292);
              }
              var _0x4f42e5 = _0xfb4927 === _0x3819e1.Ac.zc && _0x417991 ? _0x417991.sb.vb : _0x3acc13.vb;
              if (_0x4f42e5) {
                this.nh.Dc.Bc(_0x4f42e5);
              }
            };
            _0x7fd7de.prototype.Uf = function (_0x477392, _0x207d9d, _0x172534, _0x54c193) {
              if (!_0x54c193(_0x477392._i, _0x477392.aj)) {
                this.nh.Uc();
              } else {
                var _0x2380a0 = _0x2a0429 > 1 ? _0x2a0429 / 5 : 0;
                var _0x10b5de = _0x477392.cj * 1 + Math.cos(_0x477392.ej + _0x207d9d / 200) * 0.3;
                this.nh.Sc(_0x477392._i, _0x477392.aj, _0x477392.Yi ? _0x477392.bj * 2 + _0x2380a0 : _0x477392.bj * 2, _0x477392.Yi ? _0x477392.dj * 1 + _0x2380a0 : _0x477392.dj * 1, _0x477392.Yi ? _0x10b5de * 1.2 + _0x2380a0 : _0x10b5de * 2, _0x477392.Yi ? _0x477392.dj * 0.8 : _0x477392.dj * 0.3);
              }
            };
            var _0x370d92 = function () {
              function _0x5dccae(_0x5c9ef0, _0x14febe) {
                this.Cc = _0x5c9ef0;
                this.Dc = _0x14febe;
              }
              _0x5dccae.prototype.Sc = function (_0xc533f2, _0x5930e2, _0x702244, _0x3be74b, _0x3b29b4, _0x5c0334) {
                this.Cc.kd(true);
                this.Cc.ld(_0xc533f2, _0x5930e2);
                this.Cc.Tc(_0x702244);
                this.Cc.jj(_0x3be74b);
                this.Dc.kd(true);
                this.Dc.ld(_0xc533f2, _0x5930e2);
                this.Dc.Tc(_0x3b29b4);
                this.Dc.jj(_0x5c0334);
              };
              _0x5dccae.prototype.Uc = function () {};
              return _0x5dccae;
            }();
            return _0x7fd7de;
          }();
          _0x3819e1.kj = function () {
            function _0x2f5ea1() {
              this.lj = 0;
              this.mj = 0;
              this.nj = 0;
              this.oj = 0;
              this.pj = 0;
              this.qj = [];
            }
            function _0x5063ab(_0x4e16bf, _0x43513f) {
              for (var _0x5b30fb = 0; _0x5b30fb < _0x4e16bf.length; _0x5b30fb++) {
                if (_0x4e16bf[_0x5b30fb].id == _0x43513f) {
                  return _0x5b30fb;
                }
              }
              return -1;
            }
            _0x2f5ea1.prototype.ha = function () {};
            _0x2f5ea1.prototype.rj = function (_0x423d91) {
              if (!window.bbs.loading) {
                window.bbs.PropertyManager = _0x4e5fcd({}, this);
                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));
              }
              switch (_0x423d91) {
                case _0x3819e1.tj.sj:
                  return this.lj;
                case _0x3819e1.tj.uj:
                  return this.mj;
                case _0x3819e1.tj.vj:
                  return this.nj;
                case _0x3819e1.tj.wj:
                  return this.oj;
                case _0x3819e1.tj.xj:
                  return this.pj;
              }
              return 0;
            };
            _0x2f5ea1.prototype.yj = function () {
              return new _0x3819e1.hb(this.lj, this.mj, this.nj, this.oj, this.pj);
            };
            _0x2f5ea1.prototype.zj = function (_0x4480c8) {
              this.qj.push(_0x4480c8);
              this.Aj();
            };
            _0x2f5ea1.prototype.Bj = function () {
              if (!_0x4b2cbe().Lc.Wb()) {
                return _0x36bffa.W([32, 33, 34, 35]);
              }
              var _0x46b037 = [];
              for (var _0x51d7ba = _0x4b2cbe().Lc.Xb().skinArrayDict, _0x2a43fd = 0; _0x2a43fd < _0x51d7ba.length; _0x2a43fd++) {
                var _0x3da9b5 = _0x51d7ba[_0x2a43fd];
                if (this.Cj(_0x3da9b5.id, _0x3819e1.tj.sj)) {
                  _0x46b037.push(_0x3da9b5);
                }
              }
              if (_0x46b037.length === 0) {
                return 0;
              } else {
                return _0x46b037[parseInt(_0x46b037.length * Math.random())].id;
              }
            };
            _0x2f5ea1.prototype.Dj = function () {
              if (_0x4b2cbe().Lc.Wb()) {
                var _0x1d76e4 = _0x4b2cbe().Lc.Xb().skinArrayDict;
                var _0x54ecec = _0x5063ab(_0x1d76e4, this.lj);
                if (!(_0x54ecec < 0)) {
                  for (var _0x4a6138 = _0x54ecec + 1; _0x4a6138 < _0x1d76e4.length; _0x4a6138++) {
                    if (this.Cj(_0x1d76e4[_0x4a6138].id, _0x3819e1.tj.sj)) {
                      this.lj = _0x1d76e4[_0x4a6138].id;
                      this.Aj();
                      return;
                    }
                  }
                  for (var _0x2d08a5 = 0; _0x2d08a5 < _0x54ecec; _0x2d08a5++) {
                    if (this.Cj(_0x1d76e4[_0x2d08a5].id, _0x3819e1.tj.sj)) {
                      this.lj = _0x1d76e4[_0x2d08a5].id;
                      this.Aj();
                      return;
                    }
                  }
                }
              }
            };
            _0x2f5ea1.prototype.Ej = function () {
              var _0x23d784 = _0x4b2cbe();
              if (_0x23d784.Lc.Wb) {
                var _0xc5c657 = _0x23d784.Lc.Xb().skinArrayDict;
                var _0x5b3dbf = _0x5063ab(_0xc5c657, this.lj);
                if (!(_0x5b3dbf < 0)) {
                  for (var _0x953ada = _0x5b3dbf - 1; _0x953ada >= 0; _0x953ada--) {
                    if (this.Cj(_0xc5c657[_0x953ada].id, _0x3819e1.tj.sj)) {
                      this.lj = _0xc5c657[_0x953ada].id;
                      this.Aj();
                      return;
                    }
                  }
                  for (var _0x50552d = _0xc5c657.length - 1; _0x50552d > _0x5b3dbf; _0x50552d--) {
                    if (this.Cj(_0xc5c657[_0x50552d].id, _0x3819e1.tj.sj)) {
                      this.lj = _0xc5c657[_0x50552d].id;
                      this.Aj();
                      return;
                    }
                  }
                }
              }
            };
            _0x2f5ea1.prototype.Fj = function (_0x52c26c, _0x27b573) {
              if (!_0x4b2cbe().Lc.Wb() || this.Cj(_0x52c26c, _0x27b573)) {
                switch (_0x27b573) {
                  case _0x3819e1.tj.sj:
                    if (this.lj !== _0x52c26c) {
                      this.lj = _0x52c26c;
                      this.Aj();
                    }
                    return;
                  case _0x3819e1.tj.uj:
                    if (this.mj !== _0x52c26c) {
                      this.mj = _0x52c26c;
                      this.Aj();
                    }
                    return;
                  case _0x3819e1.tj.vj:
                    if (this.nj !== _0x52c26c) {
                      this.nj = _0x52c26c;
                      this.Aj();
                    }
                    return;
                  case _0x3819e1.tj.wj:
                    if (this.oj !== _0x52c26c) {
                      this.oj = _0x52c26c;
                      this.Aj();
                    }
                    return;
                  case _0x3819e1.tj.xj:
                    if (this.pj !== _0x52c26c) {
                      this.pj = _0x52c26c;
                      this.Aj();
                    }
                    return;
                }
              }
            };
            _0x2f5ea1.prototype.Cj = function (_0x58894d, _0x9baa93) {
              var _0x1da213 = this.Gj(_0x58894d, _0x9baa93);
              return _0x1da213 != null && (_0x4b2cbe().Ij.Hj() ? _0x1da213.Jj() === 0 && !_0x1da213.Kj() || _0x4b2cbe().Ij.Lj(_0x58894d, _0x9baa93) : _0x1da213.Mj());
            };
            _0x2f5ea1.prototype.Gj = function (_0x256285, _0x16b377) {
              if (!_0x4b2cbe().Lc.Wb()) {
                return null;
              }
              var _0x2a34c7 = _0x4b2cbe().Lc.Xb();
              if (_0x16b377 === _0x3819e1.tj.sj) {
                var _0x27d68c = _0x5063ab(_0x2a34c7.skinArrayDict, _0x256285);
                if (_0x27d68c < 0) {
                  return null;
                } else {
                  return _0x3819e1.Oj.Nj(_0x2a34c7.skinArrayDict[_0x27d68c]);
                }
              }
              var _0x50b576 = null;
              switch (_0x16b377) {
                case _0x3819e1.tj.uj:
                  _0x50b576 = _0x2a34c7.eyesDict[_0x256285];
                  break;
                case _0x3819e1.tj.vj:
                  _0x50b576 = _0x2a34c7.mouthDict[_0x256285];
                  break;
                case _0x3819e1.tj.wj:
                  _0x50b576 = _0x2a34c7.hatDict[_0x256285];
                  break;
                case _0x3819e1.tj.xj:
                  _0x50b576 = _0x2a34c7.glassesDict[_0x256285];
              }
              if (_0x50b576 != null) {
                return _0x3819e1.Oj.Pj(_0x50b576);
              } else {
                return null;
              }
            };
            _0x2f5ea1.prototype.Aj = function () {
              for (var _0x25d880 = 0; _0x25d880 < this.qj.length; _0x25d880++) {
                this.qj[_0x25d880]();
              }
            };
            return _0x2f5ea1;
          }();
          _0x3819e1.tj = function () {
            function _0x285544() {}
            _0x285544.sj = "SKIN";
            _0x285544.uj = "EYES";
            _0x285544.vj = "MOUTH";
            _0x285544.xj = "GLASSES";
            _0x285544.wj = "HAT";
            return _0x285544;
          }();
          _0x3819e1.Qj = function () {
            function _0x3acf2d() {
              this.Bf = new _0x4efbaa.Texture(_0x4efbaa.BaseTexture.from("/images/bg-obstacle.png"));
              this.Cf = new Array(36);
              this._g = _0xb65a12.bgg();
              this.ah = new _0x4efbaa.Texture(function () {
                var _0x95f41c = _0x4efbaa.BaseTexture.from("/images/bg-pattern-pow2-TEAM2.png");
                _0x95f41c.wrapMode = _0x4efbaa.C.D;
                return _0x95f41c;
              }());
              this.Zg = new _0x4efbaa.Texture(_0x4efbaa.BaseTexture.from("/images/lens.png"));
              this.rf = null;
              this.Db = function () {
                var _0x300861 = window.document.createElement("canvas");
                _0x300861.width = 80;
                _0x300861.height = 80;
                return {
                  Eb: _0x300861,
                  Fb: _0x300861.getContext("2d"),
                  oa: new _0x4efbaa.Texture(_0x4efbaa.BaseTexture.from(_0x300861))
                };
              }();
              this.Ae = {};
              this.we = {};
              this.Rj = [];
              this.Sj = null;
            }
            _0x3acf2d.prototype.ha = function (_0x3efb9d) {
              function _0xe5b55() {
                if (--_0x475338 == 0) {
                  _0x3efb9d();
                }
              }
              var _0x475338 = 4;
              this.Ae = {};
              _0xe5b55();
              this.we = {};
              _0xe5b55();
              this.Rj = [];
              _0xe5b55();
              this.Sj = null;
              _0xe5b55();
            };
            return _0x3acf2d;
          }();
          _0x3819e1.Tj = function () {
            function _0x18eaae() {
              this.Uj = null;
              this.af = new _0x3819e1.Vj();
              this._e = new _0x3819e1.Wj();
              this.Xj = new _0x3819e1.Yj();
              this.Zj = new _0x3819e1.$j();
              this._j = new _0x3819e1.ak();
              this.bk = new _0x3819e1.ck();
              this.dk = new _0x3819e1.ek();
              this.fk = new _0x3819e1.gk();
              this.$h = new _0x3819e1.hk();
              this.ik = new _0x3819e1.jk();
              this.kk = new _0x3819e1.lk();
              this.mk = new _0x3819e1.nk();
              this.ok = new _0x3819e1.pk();
              this.qk = new _0x3819e1.rk();
              this.ie = new _0x3819e1.sk();
              this.tk = new _0x3819e1.uk();
              this.vk = new _0x3819e1.wk();
              this.xk = new _0x3819e1.yk();
              this.zk = [];
            }
            function _0x4e79f9(_0x14e832, _0x437930) {
              if (_0x437930 !== 0) {
                var _0x1e97bc = _0x14e832[_0x437930];
                _0x36bffa.T(_0x14e832, 0, 1, _0x437930);
                _0x14e832[0] = _0x1e97bc;
              }
            }
            function _0x162106(_0x323116, _0xa1719) {
              if (_0xa1719 !== _0x323116.length + 1) {
                var _0x5c07da = _0x323116[_0xa1719];
                _0x36bffa.T(_0x323116, _0xa1719 + 1, _0xa1719, _0x323116.length - _0xa1719 - 1);
                _0x323116[_0x323116.length - 1] = _0x5c07da;
              }
            }
            function _0x507d19(_0x3cec0b, _0x20f27d) {
              for (var _0x73117c = 0; _0x73117c < _0x3cec0b.length; _0x73117c++) {
                if (_0x3cec0b[_0x73117c] === _0x20f27d) {
                  return _0x73117c;
                }
              }
              return -1;
            }
            _0x18eaae.prototype.ha = function () {
              this.Uj = null;
              this.zk = [this.af, this._e, this.Xj, this.Zj, this._j, this.bk, this.dk, this.fk, this.$h, this.ik, this.kk, this.mk, this.ok, this.qk, this.ie, this.tk, this.vk, this.xk];
              for (var _0xef6878 = 0; _0xef6878 < this.zk.length; _0xef6878++) {
                this.zk[_0xef6878].ha();
              }
            };
            _0x18eaae.prototype.lh = function (_0x56a293, _0x27431a) {
              for (var _0x4b2b7c = this.zk.length - 1; _0x4b2b7c >= 0; _0x4b2b7c--) {
                this.zk[_0x4b2b7c].Nf(_0x56a293, _0x27431a);
              }
              if (this.zk[0] !== this.af && this.zk[0] !== this.xk && this.Uj != null) {
                this.Uj.Nf(_0x56a293, _0x27431a);
              }
            };
            _0x18eaae.prototype.Jf = function () {
              for (var _0x49b1f6 = this.zk.length - 1; _0x49b1f6 >= 0; _0x49b1f6--) {
                this.zk[_0x49b1f6].Jf();
              }
              if (this.Uj != null) {
                this.Uj.Jf();
              }
            };
            _0x18eaae.prototype.Ak = function (_0x32ba39) {
              var _0x453ab0 = _0x507d19(this.zk, _0x32ba39);
              if (!(_0x453ab0 < 0)) {
                this.zk[0].Bk();
                _0x4e79f9(this.zk, _0x453ab0);
                this.Ck();
              }
            };
            _0x18eaae.prototype.Dk = function () {
              this.zk[0].Bk();
              do {
                _0x162106(this.zk, 0);
              } while (this.zk[0].nd !== _0x3819e1.Fk.Ek);
              this.Ck();
            };
            _0x18eaae.prototype.Ck = function () {
              var _0x17ad11 = this.zk[0];
              _0x17ad11.Gk();
              _0x17ad11.Hk();
              this.Ik();
            };
            _0x18eaae.prototype.Jk = function () {
              return this.zk.length !== 0 && this.zk[0].nd === _0x3819e1.Fk.Ek && this.qk.Kk();
            };
            _0x18eaae.prototype.Lk = function () {
              if (this.zk.length === 0) {
                return null;
              } else {
                return this.zk[0];
              }
            };
            _0x18eaae.prototype.Ik = function () {
              if (this.Jk()) {
                this.Ak(this.qk);
              }
            };
            return _0x18eaae;
          }();
          _0x3819e1.Pi = function () {
            function _0x330f12() {
              this.Ch = [];
              this.zh = [];
            }
            _0x330f12.Qi = function (_0x111f0b, _0x27d743) {
              return {
                Dh: _0x111f0b,
                Bh: _0x27d743
              };
            };
            _0x330f12.Ri = function (_0x4b3cc4, _0x7545eb) {
              return {
                Ah: _0x4b3cc4,
                Bh: _0x7545eb
              };
            };
            return _0x330f12;
          }();
          _0x3819e1.Mk = function () {
            function _0xc8518f() {
              this.setNk = new WeakSet();
              this.Nk = [];
              this.Ok = [];
              this.Pk = false;
              this.Qk = _0x194e13;
              this.Rk = {};
            }
            var _0x194e13 = "guest";
            _0xc8518f.Sk = new (function () {
              function _0xaad09b() {}
              _0xaad09b.Tk = function () {
                function _0x3c9acb(_0x4df706) {
                  this.Uk = _0x4df706;
                }
                return _0x3c9acb;
              }();
              _0xaad09b.prototype.Vk = function () {
                return typeof FB != "undefined";
              };
              _0xaad09b.prototype.Wk = function (_0x5226f7, _0x2e6493, _0x396c2e) {
                var _0x5b40dd = "https://graph.facebook.com/me?access_token=" + _0x5226f7;
                $.get(_0x5b40dd).fail(function () {
                  _0x2e6493();
                }).done(function () {
                  _0x396c2e();
                });
              };
              _0xaad09b.prototype.Xk = function (_0x3c2af0, _0x1fc047) {
                if (!this.Vk()) {
                  _0x3c2af0();
                  return;
                }
                this.Yk(function () {
                  FB.login(function (_0x42c770) {
                    if (_0x42c770.status !== "connected") {
                      _0x3c2af0();
                      return;
                    }
                    var _0x1fd32e = _0x42c770.authResponse.accessToken;
                    _0x1fc047(new _0xaad09b.Tk(_0x1fd32e));
                  });
                }, function (_0x574887) {
                  _0x1fc047(_0x574887);
                });
              };
              _0xaad09b.prototype.Yk = function (_0x4a2684, _0x12b1c5) {
                var _0x1ea723 = this;
                if (!this.Vk()) {
                  _0x4a2684();
                  return;
                }
                FB.getLoginStatus(function (_0x205c5a) {
                  if (_0x205c5a.status !== "connected") {
                    _0x4a2684();
                    return;
                  }
                  var _0x11bf79 = _0x205c5a.authResponse.accessToken;
                  _0x1ea723.Wk(_0x11bf79, function () {
                    _0x4a2684();
                  }, function () {
                    _0x12b1c5(new _0xaad09b.Tk(_0x11bf79));
                  });
                });
              };
              _0xaad09b.prototype.Zk = function () {
                if (this.Vk()) {
                  FB.logout();
                }
              };
              return _0xaad09b;
            }())();
            _0xc8518f.$k = new (function () {
              function _0x5809b3() {}
              _0x5809b3._k = function () {
                function _0x2ebc85(_0x2e84a2, _0x1e2ec9) {
                  this.Uk = _0x2e84a2;
                  this.al = _0x1e2ec9;
                }
                return _0x2ebc85;
              }();
              _0x5809b3.prototype.Vk = function () {
                return typeof _0x3fa18c !== "undefined";
              };
              _0x5809b3.prototype.Xk = function (_0x3f0500, _0x7a4188) {
                if (typeof _0x3fa18c === "undefined") {
                  _0x3f0500();
                  return;
                }
                if (_0x3fa18c === undefined) {
                  _0x3f0500();
                  return;
                }
                _0x3fa18c.then(function () {
                  if (_0x3fa18c.isSignedIn.get()) {
                    var _0x586fbd = _0x3fa18c.currentUser.get();
                    var _0x575efd = _0x586fbd.getAuthResponse().id_token;
                    var _0x145128 = new Date().getTime() + _0x586fbd.getAuthResponse().expires_in * 1000;
                    if (new Date().getTime() < _0x145128) {
                      _0x7a4188(new _0x5809b3._k(_0x575efd, _0x145128));
                      return;
                    }
                  }
                  _0x3fa18c.signIn().then(function (_0x319708) {
                    if (typeof _0x319708.error !== "undefined") {
                      _0x3f0500();
                      return;
                    }
                    if (!_0x319708.isSignedIn()) {
                      _0x3f0500();
                      return;
                    }
                    var _0x11f1a0 = _0x319708.getAuthResponse().id_token;
                    var _0x397133 = new Date().getTime() + _0x319708.getAuthResponse().expires_in * 1000;
                    _0x7a4188(new _0x5809b3._k(_0x11f1a0, _0x397133));
                  });
                });
              };
              _0x5809b3.prototype.Yk = function (_0xa49019, _0xcae42f) {
                if (_0x3fa18c === undefined) {
                  _0xa49019();
                  return;
                }
                _0x3fa18c.then(function () {
                  if (_0x3fa18c.isSignedIn.get()) {
                    var _0x4d7378 = _0x3fa18c.currentUser.get();
                    var _0x3cb1b3 = _0x4d7378.getAuthResponse().id_token;
                    var _0x5193dd = new Date().getTime() + _0x4d7378.getAuthResponse().expires_in * 1000;
                    if (new Date().getTime() < _0x5193dd) {
                      _0xcae42f(new _0x5809b3._k(_0x3cb1b3, _0x5193dd));
                      return;
                    }
                  }
                  _0xa49019();
                });
              };
              _0x5809b3.prototype.Zk = function () {
                if (_0x3fa18c !== undefined) {
                  _0x3fa18c.signOut();
                }
              };
              return _0x5809b3;
            }())();
            _0xc8518f.prototype.ha = function () {
              this.bl();
            };
            _0xc8518f.prototype.cl = function () {
              if (this.Pk) {
                return this.Rk.userId;
              } else {
                return "";
              }
            };
            _0xc8518f.prototype.dl = function () {
              if (this.Pk) {
                return this.Rk.username;
              } else {
                return "";
              }
            };
            _0xc8518f.prototype.el = function () {
              if (this.Pk) {
                return this.Rk.nickname.substring(0, _0x4ac6e2);
              } else {
                return "";
              }
            };
            _0xc8518f.prototype.fl = function () {
              if (this.Pk) {
                return this.Rk.avatarUrl;
              } else {
                return GUEST_AVATAR_URL;
              }
            };
            _0xc8518f.prototype.gl = function () {
              return this.Pk && this.Rk.isBuyer;
            };
            _0xc8518f.prototype.hl = function () {
              return this.Pk && this.Rk.isConsentGiven;
            };
            _0xc8518f.prototype.il = function () {
              if (this.Pk) {
                return this.Rk.coins;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.jl = function () {
              if (this.Pk) {
                return this.Rk.level;
              } else {
                return 1;
              }
            };
            _0xc8518f.prototype.kl = function () {
              if (this.Pk) {
                return this.Rk.expOnLevel;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.ll = function () {
              if (this.Pk) {
                return this.Rk.expToNext;
              } else {
                return 50;
              }
            };
            _0xc8518f.prototype.ml = function () {
              if (this.Pk) {
                return this.Rk.skinId;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.nl = function () {
              if (this.Pk) {
                return this.Rk.eyesId;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.ol = function () {
              if (this.Pk) {
                return this.Rk.mouthId;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.pl = function () {
              if (this.Pk) {
                return this.Rk.glassesId;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.ql = function () {
              if (this.Pk) {
                return this.Rk.hatId;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.rl = function () {
              if (this.Pk) {
                return this.Rk.highScore;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.sl = function () {
              if (this.Pk) {
                return this.Rk.bestSurvivalTimeSec;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.tl = function () {
              if (this.Pk) {
                return this.Rk.kills;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.ul = function () {
              if (this.Pk) {
                return this.Rk.headShots;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.vl = function () {
              if (this.Pk) {
                return this.Rk.sessionsPlayed;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.wl = function () {
              if (this.Pk) {
                return this.Rk.totalPlayTimeSec;
              } else {
                return 0;
              }
            };
            _0xc8518f.prototype.xl = function () {
              if (this.Pk) {
                return this.Rk.regDate;
              } else {
                return {};
              }
            };
            _0xc8518f.prototype.yl = function (_0x4267a7) {
              this.Nk.push(_0x4267a7);
              _0x4267a7();
            };
            _0xc8518f.prototype.zl = function (_0x15e462) {
              this.Ok.push(_0x15e462);
              _0x15e462();
            };
            _0xc8518f.prototype.Lj = function (_0x2fb2d7, _0x1c92a7) {
              var _0x48d186 = this.Rk.propertyList;
              if (_0x48d186 == null) {
                return false;
              }
              var _0x1601b6 = _0x2fb2d7.toString();
              for (var _0x2fe38d = 0; _0x2fe38d < _0x48d186.length; _0x2fe38d++) {
                var _0xfb9951 = _0x48d186[_0x2fe38d];
                if (_0xfb9951.id === _0x1601b6 && _0xfb9951.type === _0x1c92a7) {
                  return true;
                }
              }
              return false;
            };
            _0xc8518f.prototype.Hj = function () {
              return this.Pk;
            };
            _0xc8518f.prototype.Al = function () {
              return this.Qk;
            };
            _0xc8518f.prototype.Bl = function (_0x3d4c1d) {
              var _0x1ff883 = this;
              var _0x2d6c54 = this.cl();
              var _0x5698bb = this.il();
              var _0x5e1c19 = this.jl();
              this.Cl(function () {
                if (_0x3d4c1d != null) {
                  _0x3d4c1d();
                }
              }, function (_0x1da3ba) {
                _0x5d5bc0(_0x1da3ba.user_data);
                _0x1ff883.Rk = _0x1da3ba.user_data;
                _0x1ff883.Dl();
                _0x1ff883.Rk.isConsentGiven = true;
                var _0x22ce34 = _0x1ff883.cl();
                var _0x3fe952 = _0x1ff883.il();
                var _0x7652e0 = _0x1ff883.jl();
                if (_0x2d6c54 === _0x22ce34) {
                  if (_0x7652e0 > 1 && _0x7652e0 !== _0x5e1c19) {
                    _0x4b2cbe().og.qk.El(new _0x3819e1.Fl(currLevel));
                  }
                  var _0x57eeec = _0x3fe952 - _0x5698bb;
                  if (_0x57eeec >= 20) {
                    _0x4b2cbe().og.qk.El(new _0x3819e1.Gl(_0x57eeec));
                  }
                }
                if (_0x3d4c1d != null) {
                  _0x3d4c1d();
                }
              });
            };
            _0xc8518f.prototype.Cl = function (_0xf0a81f, _0x30d270) {
              var _0x16c510 = _0x36bffa.a.b + "/pub/wuid/" + this.Qk + "/getUserData";
              bbs.wuid = this.Qk;
              _0x36bffa.Z(_0x16c510, _0xf0a81f, function (_0x1c2c7d) {
                if (_0x1c2c7d.code !== 1200) {
                  _0xf0a81f();
                } else {
                  _0x30d270(_0x1c2c7d);
                }
              });
            };
            _0xc8518f.prototype.Hl = function (_0x3851bb, _0x49745d, _0x6b7234, _0x4096ef) {
              var _0x57afa1 = _0x36bffa.a.b + "/pub/wuid/" + this.Qk + "/buyProperty?id=" + _0x3851bb + "&type=" + _0x49745d;
              _0x36bffa.Z(_0x57afa1, function () {
                _0x6b7234();
              }, function (_0x10b609) {
                if (_0x10b609.code !== 1200) {
                  _0x6b7234();
                } else {
                  _0x4096ef(_0x10b609);
                }
              });
            };
            _0xc8518f.prototype.Il = function (_0x349e02, _0x43ec05) {
              var _0x2f82b1 = _0x36bffa.a.b + "/pub/wuid/" + this.Qk + "/deleteAccount";
              _0x36bffa.Z(_0x2f82b1, _0x349e02, function (_0x1b261f) {
                if (_0x1b261f.code !== 1200) {
                  _0x349e02();
                } else {
                  _0x43ec05(_0x1b261f);
                }
              });
            };
            _0xc8518f.prototype.Jl = function (_0x3e1de1) {
              var _0x4e6e75 = this;
              if (this.Pk) {
                this.Kl();
              }
              _0xc8518f.Sk.Xk(function () {
                _0x3e1de1();
              }, function (_0x33b6a6) {
                _0x4e6e75.Ll("fb", _0x33b6a6.Uk, _0x3e1de1);
              });
            };
            _0xc8518f.prototype.Ml = function (_0x34c700) {
              var _0x4a433a = this;
              if (this.Pk) {
                this.Kl();
              }
              _0xc8518f.$k.Xk(function () {
                _0x34c700();
              }, function (_0x1be488) {
                _0x4a433a.Ll("gg", _0x1be488.Uk, _0x34c700);
              });
            };
            _0xc8518f.prototype.Ll = function (_0x51dbdc, _0x2226ec, _0x5c2ec5, _0x90a5d1) {
              _0x90a5d1 = _0x90a5d1 || 0;
              var _0x23ed87 = $("#please-wait-view");
              if (_0x90a5d1 < 1) {
                _0x23ed87.append(" AUTO CONNECTION <i id=\"auto_connection_text\">" + _0x90a5d1 + "<i>...");
              }
              var _0x3e9c0c = this;
              var _0x58c390 = _0x51dbdc + "_" + _0x2226ec;
              var _0x225e91 = "https://gateway.wormate.io/pub/wuid/" + _0x58c390 + "/login";
              bbs.wuid = _0x58c390;
              _0x90a5d1++;
              _0x23ed87.fadeIn(500);
              $("#auto_connection_text").html(_0x90a5d1);
              fetch(_0x225e91, {
                mode: "cors"
              }).then(function (_0x2bc7dd) {
                if (_0x2bc7dd.ok) {
                  return _0x2bc7dd.json();
                } else {
                  throw new Error("Erro na solicitação");
                }
              }).then(function (_0x1b5e29) {
                if (_0x1b5e29.code !== 1200) {
                  _0x3e9c0c.Ll(_0x51dbdc, _0x2226ec, _0x5c2ec5, _0x90a5d1);
                  return;
                }
                if (_0x1b5e29.user_data) {
                  _0x23ed87.html("...");
                  _0x23ed87.fadeOut(500);
                  _0x3e9c0c.Ol(_0x51dbdc, _0x2226ec, _0x1b5e29.user_data);
                  if (_0x5c2ec5 != null) {
                    _0x5c2ec5();
                  }
                }
              }).catch(function (_0xa2c9e3) {
                _0x3e9c0c.Nl();
                _0x23ed87.html("...");
                _0x23ed87.fadeOut(500);
              });
            };
            _0xc8518f.prototype.Kl = function () {
              try {
                this.Pl();
                this.Ql();
              } catch (_0x549aec) {}
              this.Rl();
            };
            _0xc8518f.prototype.Sl = function () {
              if (this.Pk) {
                this.Il(function () {}, function (_0x268877) {});
              }
            };
            _0xc8518f.prototype.Nl = function () {
              _0x4b2cbe().og.Ak(_0x4b2cbe().og.tk);
            };
            _0xc8518f.prototype.Ol = function (_0x5939ce, _0x2c2782, _0x49e7e1) {
              var _0x1662aa = this;
              var _0x4c2314 = this.Pk ? this.Rk.userId : "guest";
              _0x43a937(_0x49e7e1, function (_0x40356e) {
                _0x5d5bc0(_0x40356e);
                _0x1662aa.Pk = true;
                _0x1662aa.Qk = _0x5939ce + "_" + _0x2c2782;
                _0x1662aa.Rk = _0x40356e;
                bbs.wuid = _0x1662aa.Qk;
                _0x3819e1.Vf.eg(_0x3819e1.Vf.$f, _0x5939ce, 60);
                if (_0x4c2314 !== _0x1662aa.Rk.userId) {
                  _0x1662aa.Tl();
                } else {
                  _0x1662aa.Dl();
                }
                window.bbs.loading = false;
              });
            };
            _0xc8518f.prototype.Rl = function () {
              var _0x105585 = this.Pk ? this.Rk.userId : "guest";
              this.Pk = false;
              this.Qk = _0x194e13;
              this.Rk = {};
              _0x3819e1.Vf.eg(_0x3819e1.Vf.$f, "", 60);
              if (_0x105585 !== this.Rk.userId) {
                this.Tl();
              } else {
                this.Dl();
              }
            };
            _0xc8518f.prototype.bl = function () {
              var _0x353255 = _0x3819e1.Vf.fg(_0x3819e1.Vf.$f);
              var _0x4855d6 = this;
              if (_0x353255 === "fb") {
                var _0x20a69e = 1;
                (function _0x27f0d5() {
                  if (!_0xc8518f.Sk.Vk() && _0x20a69e++ < 5) {
                    setTimeout(_0x27f0d5, 1000);
                    return;
                  }
                  _0xc8518f.Sk.Yk(function () {}, function (_0x4d6be6) {
                    _0x4855d6.Ll("fb", _0x4d6be6.Uk);
                  });
                })();
              } else if (_0x353255 === "gg") {
                var _0x169117 = 1;
                (function _0x1ed979() {
                  if (!_0xc8518f.$k.Vk() && _0x169117++ < 5) {
                    setTimeout(_0x1ed979, 1000);
                    return;
                  }
                  _0xc8518f.$k.Yk(function () {}, function (_0x3f60e8) {
                    _0x4855d6.Ll("gg", _0x3f60e8.Uk);
                  });
                })();
              }
            };
            _0xc8518f.prototype.Tl = function () {
              for (var _0x4af2a1 = 0; _0x4af2a1 < this.Nk.length; _0x4af2a1++) {
                this.Nk[_0x4af2a1]();
              }
              this.Dl();
            };
            _0xc8518f.prototype.Dl = function () {
              for (var _0x3e354f = 0; _0x3e354f < this.Ok.length; _0x3e354f++) {
                this.Ok[_0x3e354f]();
              }
            };
            _0xc8518f.prototype.Pl = function () {
              _0xc8518f.Sk.Zk();
            };
            _0xc8518f.prototype.Ql = function () {
              _0xc8518f.$k.Zk();
            };
            return _0xc8518f;
          }();
          _0x3819e1.if = function () {
            function _0x3f36a6(_0x167dd4, _0x30e02c, _0x233693) {
              this.ef = _0x233693;
              this.hd = false;
              this.nc = new _0x4efbaa.Container();
              this.nc.visible = false;
              this.Ul = new Array(_0x167dd4);
              for (var _0x1fc6a1 = 0; _0x1fc6a1 < this.Ul.length; _0x1fc6a1++) {
                var _0x39d224 = new _0x3819e1.Vl(new Float32Array(_0x30e02c * 3));
                _0x39d224.Wl(_0x30e02c);
                this.Ul[_0x1fc6a1] = _0x39d224;
                this.nc.addChild(_0x39d224.tf());
              }
              this.ff = 1;
              this.gf = 1;
              this.Jf();
            }
            _0x3f36a6.prototype.tf = function () {
              return this.nc;
            };
            _0x3f36a6.prototype.Kf = function (_0x31b7e7) {
              this.hd = _0x31b7e7;
              this.nc.visible = _0x31b7e7;
            };
            _0x3f36a6.prototype.Jf = function () {
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              var _0x3edb = this.gf / 30;
              for (var _0x2b8e45 = 0; _0x2b8e45 < this.Ul.length; _0x2b8e45++) {
                this.Ul[_0x2b8e45].Xl(_0x3edb);
              }
            };
            _0x3f36a6.prototype.Uf = function () {
              if (this.hd) {
                for (var _0xf1cc4f = 0; _0xf1cc4f < this.Ul.length; _0xf1cc4f++) {
                  this.Ul[_0xf1cc4f].Uf(this.lf);
                }
              }
            };
            _0x3f36a6.prototype.Yl = function () {
              return this.ff;
            };
            _0x3f36a6.prototype.Zl = function () {
              return this.gf;
            };
            _0x3f36a6.prototype.Qf = function (_0x3d8646, _0x102cc5) {
              this.Ul[_0x3d8646].$l(_0x102cc5);
            };
            _0x3f36a6.prototype.Rf = function (_0x4a92f5, _0x20a4ac) {
              this.Ul[_0x4a92f5]._l(_0x20a4ac);
            };
            _0x3f36a6.prototype.Sf = function (_0x18a32a, _0x247627, _0x27f37d) {
              var _0x41ee43 = this.Ul[_0x18a32a];
              for (var _0x2299d4 = _0x41ee43.am(), _0x2b90fe = _0x41ee43.bm, _0x95a348 = 0; _0x95a348 < _0x2299d4; _0x95a348++) {
                _0x2b90fe[_0x95a348 * 3] = _0x247627;
                _0x2b90fe[_0x95a348 * 3 + 1] = _0x27f37d;
                _0x2b90fe[_0x95a348 * 3 + 2] = 0;
              }
            };
            _0x3f36a6.prototype.Tf = function (_0x617c60, _0x511cca, _0x5585e7) {
              var _0x2d3690 = this.Ul[_0x617c60];
              var _0x183ecc = _0x2d3690.am();
              var _0x461c54 = _0x2d3690.bm;
              var _0x543013 = _0x2d3690.cm();
              var _0x21bcbe = _0x461c54[0];
              var _0x3f9e88 = undefined;
              var _0xdc906e = _0x461c54[1];
              var _0x8a4b32 = undefined;
              var _0x35ffa2 = _0x511cca - _0x21bcbe;
              var _0x222e2d = _0x5585e7 - _0xdc906e;
              var _0x1b9dc9 = Math.hypot(_0x35ffa2, _0x222e2d);
              if (_0x1b9dc9 > 0) {
                _0x461c54[0] = _0x511cca;
                _0x461c54[1] = _0x5585e7;
                _0x461c54[2] = Math.atan2(_0x222e2d, _0x35ffa2);
                var _0xcd0d0b = _0x543013 * 0.25 / (_0x543013 * 0.25 + _0x1b9dc9);
                var _0x16f518 = 1 - _0xcd0d0b * 2;
                for (var _0x372832 = 1, _0x53a7fe = _0x183ecc; _0x372832 < _0x53a7fe; _0x372832++) {
                  _0x3f9e88 = _0x461c54[_0x372832 * 3];
                  _0x461c54[_0x372832 * 3] = _0x461c54[_0x372832 * 3 - 3] * _0x16f518 + (_0x3f9e88 + _0x21bcbe) * _0xcd0d0b;
                  _0x21bcbe = _0x3f9e88;
                  _0x8a4b32 = _0x461c54[_0x372832 * 3 + 1];
                  _0x461c54[_0x372832 * 3 + 1] = _0x461c54[_0x372832 * 3 - 2] * _0x16f518 + (_0x8a4b32 + _0xdc906e) * _0xcd0d0b;
                  _0xdc906e = _0x8a4b32;
                  _0x461c54[_0x372832 * 3 + 2] = Math.atan2(_0x461c54[_0x372832 * 3 - 2] - _0x461c54[_0x372832 * 3 + 1], _0x461c54[_0x372832 * 3 - 3] - _0x461c54[_0x372832 * 3]);
                }
              }
            };
            return _0x3f36a6;
          }();
          _0x3819e1.dm = function () {
            function _0x1a4bb3(_0x4532cd) {
              var _0x1a280c = this;
              this.ef = _0x4532cd;
              this.Eb = _0x4532cd.get()[0];
              this.lf = new _0x4efbaa.Renderer({
                view: _0x4532cd.get()[0],
                transparent: true,
                antialias: false
              });
              this.hd = false;
              this.em = new _0x3819e1.Vl(new Float32Array(_0x7a0bbd * 3));
              this.ff = 1;
              this.gf = 1;
              this.fm = _0x2d130e.gm;
              this.hm = _0x2d130e.gm;
              this.im = _0x2d130e.gm;
              this.jm = _0x2d130e.gm;
              this.km = _0x2d130e.gm;
              this.Jf();
              _0x4b2cbe().Lc.$b(function () {
                _0x1a280c.em.lm();
              });
            }
            var _0x7a0bbd = Math.min(100, _0x3819e1.WormSpriteTree.wc);
            var _0x2d130e = {
              gm: "0lt0",
              mm: "0lt1",
              nm: "0lt2"
            };
            _0x1a4bb3.prototype.Kf = function (_0x273c51) {
              this.hd = _0x273c51;
            };
            _0x1a4bb3.prototype.Jf = function () {
              var _0x1eccfa = window.devicePixelRatio ? window.devicePixelRatio : 1;
              this.ff = this.ef.width();
              this.gf = this.ef.height();
              this.lf.resize(this.ff, this.gf);
              this.lf.resolution = _0x1eccfa;
              this.Eb.width = _0x1eccfa * this.ff;
              this.Eb.height = _0x1eccfa * this.gf;
              var _0x55a517 = this.gf / 4;
              this.em.Xl(_0x55a517);
              var _0x52c1dc = _0x36bffa.P(Math.floor(this.ff / _0x55a517) * 2 - 5, 1, _0x7a0bbd);
              this.em.Wl(_0x52c1dc);
            };
            _0x1a4bb3.prototype.Nf = function () {
              if (this.hd) {
                var _0x24f1cf = Date.now();
                var _0x364bb1 = _0x24f1cf / 200;
                var _0x185f84 = Math.sin(_0x364bb1);
                this.em.om(this.pm(this.fm, _0x185f84), this.qm(this.fm, _0x185f84));
                this.em.rm(this.sm(this.hm, _0x185f84), this.sm(this.im, _0x185f84), this.sm(this.jm, _0x185f84), this.sm(this.km, _0x185f84));
                var _0x28b663 = this.em.cm();
                for (var _0x30a9eb = this.em.am(), _0x49d61d = this.em.bm, _0x3c43b3 = this.ff - (this.ff - _0x28b663 * 0.5 * (_0x30a9eb - 1)) * 0.5, _0x28541a = this.gf * 0.5, _0xc50291 = 0, _0x8da5d2 = 0, _0x1a1d56 = -1; _0x1a1d56 < _0x30a9eb; _0x1a1d56++) {
                  var _0x34f69a = _0x1a1d56;
                  var _0x109154 = Math.cos(_0x34f69a * 1 / 12 * Math.PI - _0x364bb1) * (1 - Math.pow(16, _0x34f69a * -1 / 12));
                  if (_0x1a1d56 >= 0) {
                    _0x49d61d[_0x1a1d56 * 3] = _0x3c43b3 + _0x28b663 * -0.5 * _0x34f69a;
                    _0x49d61d[_0x1a1d56 * 3 + 1] = _0x28541a + _0x28b663 * 0.5 * _0x109154;
                    _0x49d61d[_0x1a1d56 * 3 + 2] = Math.atan2(_0x8da5d2 - _0x109154, _0x34f69a - _0xc50291);
                  }
                  _0xc50291 = _0x34f69a;
                  _0x8da5d2 = _0x109154;
                }
                this.em.Uf();
                this.em.tm(this.lf);
              }
            };
            _0x1a4bb3.prototype.$l = function (_0x2319f3) {
              this.em.$l(_0x2319f3);
            };
            _0x1a4bb3.prototype.um = function (_0x5003fb) {
              this.fm = _0x5003fb ? _0x2d130e.nm : _0x2d130e.mm;
              this.hm = _0x2d130e.gm;
              this.im = _0x2d130e.gm;
              this.jm = _0x2d130e.gm;
              this.km = _0x2d130e.gm;
            };
            _0x1a4bb3.prototype.vm = function (_0x4b3a3f) {
              this.fm = _0x2d130e.gm;
              this.hm = _0x4b3a3f ? _0x2d130e.nm : _0x2d130e.mm;
              this.im = _0x2d130e.gm;
              this.jm = _0x2d130e.gm;
              this.km = _0x2d130e.gm;
            };
            _0x1a4bb3.prototype.wm = function (_0x867e50) {
              this.fm = _0x2d130e.gm;
              this.hm = _0x2d130e.gm;
              this.im = _0x867e50 ? _0x2d130e.nm : _0x2d130e.mm;
              this.jm = _0x2d130e.gm;
              this.km = _0x2d130e.gm;
            };
            _0x1a4bb3.prototype.xm = function (_0x357eef) {
              this.fm = _0x2d130e.gm;
              this.hm = _0x2d130e.gm;
              this.im = _0x2d130e.gm;
              this.jm = _0x357eef ? _0x2d130e.nm : _0x2d130e.mm;
              this.km = _0x2d130e.gm;
            };
            _0x1a4bb3.prototype.ym = function (_0x227513) {
              this.fm = _0x2d130e.gm;
              this.hm = _0x2d130e.gm;
              this.im = _0x2d130e.gm;
              this.jm = _0x2d130e.gm;
              this.km = _0x227513 ? _0x2d130e.nm : _0x2d130e.mm;
            };
            _0x1a4bb3.prototype.pm = function (_0x4e5dd7, _0x21bd72) {
              switch (_0x4e5dd7) {
                case _0x2d130e.mm:
                  return 0.9 + _0x21bd72 * 0.1;
                case _0x2d130e.nm:
                  return 0.4 + _0x21bd72 * 0.3;
              }
              return 1;
            };
            _0x1a4bb3.prototype.qm = function (_0x7a8424, _0x59965b) {
              switch (_0x7a8424) {
                case _0x2d130e.mm:
                  return 0.6 + _0x59965b * 0.5;
                case _0x2d130e.nm:
                  return 0.3 + _0x59965b * 0.3;
              }
              return 1;
            };
            _0x1a4bb3.prototype.sm = function (_0x5049d0, _0x63802b) {
              switch (_0x5049d0) {
                case _0x2d130e.mm:
                  return 0.9 + _0x63802b * 0.1;
                case _0x2d130e.nm:
                  return 0.6 + _0x63802b * 0.4;
              }
              return 1;
            };
            return _0x1a4bb3;
          }();
          _0x3819e1.Oj = function () {
            function _0x51b22a(_0x1b41e0, _0x30fae9, _0x5f0176, _0x1db7b4, _0xe358a4) {
              this.zm = _0x1b41e0;
              this.Am = _0x30fae9;
              this.Bm = _0x5f0176;
              this.Cm = _0x1db7b4;
              this.Dm = _0xe358a4;
            }
            _0x51b22a.Nj = function (_0x41e1ef) {
              return new _0x51b22a(_0x41e1ef.price, _0x41e1ef.guest, _0x41e1ef.nonbuyable, _0x41e1ef.nonbuyableCause, _0x41e1ef.description || _0x41e1ef.refer?.texture || "SKIN NATIVE " + _0x41e1ef.id);
            };
            _0x51b22a.Pj = function (_0x4c8ad2) {
              return new _0x51b22a(_0x4c8ad2.price, _0x4c8ad2.guest, _0x4c8ad2.nonbuyable, _0x4c8ad2.nonbuyableCause, _0x4c8ad2.description);
            };
            _0x51b22a.prototype.Jj = function () {
              return this.zm;
            };
            _0x51b22a.prototype.Mj = function () {
              return this.Am;
            };
            _0x51b22a.prototype.Kj = function () {
              return this.Bm;
            };
            _0x51b22a.prototype.Em = function () {
              return this.Cm;
            };
            _0x51b22a.prototype.Fm = function () {
              return this.Dm;
            };
            return _0x51b22a;
          }();
          _0x3819e1.qf = function () {
            function _0x3048ef(_0x597d58) {
              this.Gm = {};
              this.Gm[_0x385270] = _0x597d58;
              var _0x17746d = _0x4efbaa.Shader.from(_0x5f0075, _0x218781, this.Gm);
              this.sf = new _0x4efbaa.Mesh(_0xa3e6a6, _0x17746d);
              this.sf.blendMode = _0x4efbaa.v.B;
            }
            var _0x43f68c = "a1_" + _0x36bffa.X();
            var _0x2c5d46 = "a2_" + _0x36bffa.X();
            var _0x385270 = "u3_" + _0x36bffa.X();
            var _0x1960b4 = "u4_" + _0x36bffa.X();
            var _0x36c042 = "v1_" + _0x36bffa.X();
            var _0xa3e6a6 = new _0x4efbaa.Geometry().addAttribute(_0x43f68c, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(_0x2c5d46, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
            var _0x5f0075 = "precision mediump float;attribute vec2 " + _0x43f68c + ";attribute vec2 " + _0x2c5d46 + ";uniform mat3 translationMatrix ;uniform mat3 projectionMatrix; uniform vec4 " + _0x1960b4 + ";varying vec2 " + _0x36c042 + ";const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((projectionMatrix * translationMatrix * vec3(" + _0x43f68c + ",1.0)).xy,0.0,1.0);vec4 _ScreenParams=" + _0x1960b4 + ";vec2 uv=" + _0x2c5d46 + ";vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;" + _0x36c042 + "=uv;}";
            var _0x218781 = "precision highp float;varying vec2 " + _0x36c042 + ";uniform sampler2D " + _0x385270 + ";void main(){gl_FragColor=texture2D(" + _0x385270 + "," + _0x36c042 + ");}";
            _0x3048ef.prototype.Mf = function (_0x3589d0, _0x32c886) {
              this.sf.scale.x = _0x3589d0;
              this.sf.scale.y = _0x32c886;
              this.Gm[_0x1960b4] = [_0x3589d0, _0x32c886, 1 / _0x3589d0 + 1, 1 / _0x32c886 + 1];
            };
            return _0x3048ef;
          }();
          _0x3819e1.WMGBS1 = function () {
            function _0x3c3a3f(_0x8e9fb3) {
              var _0x23622b = bbs.bgGameWidth || 1;
              var _0x17c721 = bbs.bgGameHeight || 1;
              var _0x10f001 = 1100;
              var _0x553768 = _0x23622b > 512 ? _0x23622b >= 1000 ? 1 : 0.1 : 0.01;
              this.Gm = {};
              this.Gm[_0x10c6a5] = [1, 0.5, 0.25, 0.5];
              this.Gm[_0x4b7c97] = _0x4efbaa.Texture.WHITE;
              this.Gm[_0xb0195b] = [0, 0];
              this.Gm[_0x481596] = [0, 0];
              this.sf = new PIXI.TilingSprite(_0x8e9fb3 || _0x3c7638.xe._g, _0x553768 == 1 ? _0x10f001 : 120000, _0x553768 == 1 ? _0x10f001 : 120000);
              this.sf.scale.x = _0x553768;
              this.sf.scale.y = _0x553768;
              this.sf.position.x = -(_0x553768 == 1 ? _0x23622b / 2 : 625);
              this.sf.position.y = -(_0x553768 == 1 ? _0x17c721 / 2 : 625);
              console.log("WMGBS1", _0x23622b, _0x17c721);
            }
            var _0x10c6a5 = "u3_";
            var _0x4b7c97 = "u4_";
            var _0xb0195b = "u5_";
            var _0x481596 = "u6_";
            _0x3c3a3f.prototype.Ec = function (_0x41d15c, _0x5d66b5, _0x30745c, _0x37594c) {
              var _0x333acf = this.Gm[_0x10c6a5];
              _0x333acf[0] = _0x41d15c;
              _0x333acf[1] = _0x5d66b5;
              _0x333acf[2] = _0x30745c;
              _0x333acf[3] = _0x37594c;
            };
            _0x3c3a3f.prototype.$g = function (_0x4842b4) {
              this.Gm[_0x4b7c97] = _0x4842b4;
            };
            _0x3c3a3f.prototype.Uf = function (_0x32ba07, _0x3de19d, _0x51d48c, _0xd23380) {};
            return _0x3c3a3f;
          }();
          _0x3819e1.WMGBS2 = function () {
            console.log("WMGBS2");
            function _0x1ccd66() {
              this.Gm = {};
              this.Gm[_0x468132] = [1, 0.5, 0.25, 0.5];
              this.Gm[_0x24db59] = _0x4efbaa.Texture.WHITE;
              this.Gm[_0x7aba59] = [0, 0];
              this.Gm[_0x247e20] = [0, 0];
              var _0x4291ae = _0x4efbaa.Shader.from(_0x5e94e3, _0x1eca04, this.Gm);
              this.sf = new _0x4efbaa.Mesh(_0x38144b, _0x4291ae);
            }
            var _0x23e980 = "a1_" + _0x36bffa.X();
            var _0x2ca798 = "a2_" + _0x36bffa.X();
            var _0x43f9ed = "translationMatrix";
            var _0x3583e1 = "projectionMatrix";
            var _0x468132 = "u3_" + _0x36bffa.X();
            var _0x24db59 = "u4_" + _0x36bffa.X();
            var _0x7aba59 = "u5_" + _0x36bffa.X();
            var _0x247e20 = "u6_" + _0x36bffa.X();
            var _0x3c37ea = "v1_" + _0x36bffa.X();
            var _0x38144b = new _0x4efbaa.Geometry().addAttribute(_0x23e980, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0x2ca798, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
            var _0x5e94e3 = "precision mediump float;attribute vec2 " + _0x23e980 + ";attribute vec2 " + _0x2ca798 + ";uniform mat3 " + _0x43f9ed + ";uniform mat3 " + _0x3583e1 + ";varying vec2 " + _0x3c37ea + ";void main(){" + _0x3c37ea + "=" + _0x2ca798 + ";gl_Position=vec4((" + _0x3583e1 + "*" + _0x43f9ed + "*vec3(" + _0x23e980 + ",1.0)).xy,0.0,1.0);}";
            var _0x1eca04 = "precision highp float;varying vec2 " + _0x3c37ea + ";uniform vec4 " + _0x468132 + ";uniform sampler2D " + _0x24db59 + ";uniform vec2 " + _0x7aba59 + ";uniform vec2 " + _0x247e20 + ";void main(){vec2 coord=" + _0x3c37ea + "*" + _0x7aba59 + "+" + _0x247e20 + ";vec4 v_color_mix=" + _0x468132 + ";gl_FragColor=texture2D(" + _0x24db59 + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
            _0x1ccd66.prototype.Ec = function (_0x112b68, _0x4c807b, _0x242f38, _0x3b43a0) {
              var _0x4c8fdd = this.Gm[_0x468132];
              _0x4c8fdd[0] = _0x112b68;
              _0x4c8fdd[1] = _0x4c807b;
              _0x4c8fdd[2] = _0x242f38;
              _0x4c8fdd[3] = _0x3b43a0;
            };
            _0x1ccd66.prototype.$g = function (_0x29e478) {
              this.Gm[_0x24db59] = _0x29e478;
            };
            _0x1ccd66.prototype.Uf = function (_0x4bedbd, _0x5343b7, _0x229c41, _0x2ecb1b) {
              this.sf.position.x = _0x4bedbd;
              this.sf.position.y = _0x5343b7;
              this.sf.scale.x = _0x229c41;
              this.sf.scale.y = _0x2ecb1b;
              var _0x131454 = this.Gm[_0x7aba59];
              _0x131454[0] = _0x229c41 * 0.2520615384615385;
              _0x131454[1] = _0x2ecb1b * 0.4357063736263738;
              var _0x24bfeb = this.Gm[_0x247e20];
              _0x24bfeb[0] = _0x4bedbd * 0.2520615384615385;
              _0x24bfeb[1] = _0x5343b7 * 0.4357063736263738;
            };
            return _0x1ccd66;
          }();
          _0x3819e1.sc = function () {
            function _0x637c7e() {
              this.xc = new PIXI.Sprite();
              this.ev = null;
              this.Hm = 0;
              this.Im = 0;
              this.si = null;
            }
            _0x637c7e.prototype.Bc = function (_0x54cdb5, _0x9368f3, _0x1c782a) {
              if (_0x54cdb5) {
                this.xc.texture = _0x54cdb5.Ea();
                this.xc.anchor.set(_0x54cdb5.ya, _0x54cdb5.za);
                this.Hm = _0x54cdb5.Aa;
                this.Im = _0x54cdb5.Ba;
              } else {}
            };
            _0x637c7e.prototype.Ec = function (_0xe89718) {
              this.xc.tint = parseInt(_0xe89718.substring(1), 16);
            };
            _0x637c7e.prototype.Tc = function (_0x14859f) {
              try {
                this.xc.width = _0x14859f * this.Hm;
                this.xc.height = _0x14859f * this.Im;
              } catch (_0x2952d7) {}
            };
            _0x637c7e.prototype.md = function (_0x30b81f) {
              this.xc.rotation = _0x30b81f;
            };
            _0x637c7e.prototype.ld = function (_0x4c50f9, _0x1864ce) {
              this.xc.position.set(_0x4c50f9, _0x1864ce);
            };
            _0x637c7e.prototype.kd = function (_0x5b2a3e) {
              this.xc.visible = _0x5b2a3e;
            };
            _0x637c7e.prototype.gd = function () {
              return this.xc.visible;
            };
            _0x637c7e.prototype.jj = function (_0x4a5e57) {
              this.xc.alpha = _0x4a5e57;
            };
            _0x637c7e.prototype.Qc = function () {
              return this.xc;
            };
            _0x637c7e.prototype.Rc = function () {
              _0x36bffa.U(this.xc);
            };
            return _0x637c7e;
          }();
          _0x3819e1.Worm = function () {
            function _0x564f14(_0x228bca) {
              this.hh = _0x228bca;
              this.Eh = new _0x3819e1.Worm.li();
              this.xi = false;
              this.wi = true;
              this.Xc = false;
              this.$c = 0;
              this.Jm = 0;
              this.dj = 1;
              this.bd = 0;
              this.Bh = 0;
              this.dd = {};
              this.ad = 0;
              this.Km = new Float32Array(_0x296569 * 2);
              this.Lm = new Float32Array(_0x296569 * 2);
              this._c = new Float32Array(_0x296569 * 2);
              this.Mm = null;
              this.Nm = null;
              this.Om = null;
              this.Pm();
            }
            var _0x296569 = 200;
            _0x564f14.prototype.si = function () {
              if (this.Nm != null) {
                _0x36bffa.U(this.Nm.nc);
              }
              if (this.Om != null) {
                _0x36bffa.U(this.Om);
              }
            };
            _0x564f14.prototype.Pm = function () {
              this.zi(0.25);
              this.Eh.ma = "";
              this.wi = true;
              this.dd = {};
              this.kd(false);
            };
            _0x564f14.prototype.ri = function (_0x44c84f) {
              this.Eh = _0x44c84f;
              this.Qm(this.xi);
            };
            _0x564f14.prototype.kd = function (_0x5689d9) {
              var _0xaf8902 = this.xi;
              this.xi = _0x5689d9;
              this.Qm(_0xaf8902);
            };
            _0x564f14.prototype.zi = function (_0x11b2fd) {
              this.Bh = _0x11b2fd * 50;
              var _0x596da3 = _0x11b2fd;
              if (_0x11b2fd > this.hh.Ag) {
                _0x596da3 = Math.atan((_0x11b2fd - this.hh.Ag) / this.hh.Bg) * this.hh.Bg + this.hh.Ag;
              }
              var _0x3875c2 = Math.sqrt(Math.pow(_0x596da3 * 5, 0.707106781186548) * 4 + 25);
              var _0x1c54d4 = Math.min(_0x296569, Math.max(3, (_0x3875c2 - 5) * 5 + 1));
              var _0x98ccbe = this.ad;
              this.$c = (5 + _0x3875c2 * 0.9) * 0.025;
              this.ad = Math.floor(_0x1c54d4);
              this.Jm = _0x1c54d4 - this.ad;
              if (_0x98ccbe > 0 && _0x98ccbe < this.ad) {
                var _0x30fc0a = this.Km[_0x98ccbe * 2 - 2];
                var _0xe9200b = this.Km[_0x98ccbe * 2 - 1];
                var _0x49c94f = this.Lm[_0x98ccbe * 2 - 2];
                var _0x3c5587 = this.Lm[_0x98ccbe * 2 - 1];
                var _0x430bd0 = this._c[_0x98ccbe * 2 - 2];
                var _0x37dd33 = this._c[_0x98ccbe * 2 - 1];
                for (var _0x52563f = _0x98ccbe; _0x52563f < this.ad; _0x52563f++) {
                  this.Km[_0x52563f * 2] = _0x30fc0a;
                  this.Km[_0x52563f * 2 + 1] = _0xe9200b;
                  this.Lm[_0x52563f * 2] = _0x49c94f;
                  this.Lm[_0x52563f * 2 + 1] = _0x3c5587;
                  this._c[_0x52563f * 2] = _0x430bd0;
                  this._c[_0x52563f * 2 + 1] = _0x37dd33;
                }
              }
            };
            _0x564f14.prototype.Ei = function (_0x306a99, _0x32603b) {
              this.ad = _0x32603b;
              for (var _0x1ff208 = 0; _0x1ff208 < this.ad; _0x1ff208++) {
                this.Km[_0x1ff208 * 2] = this.Lm[_0x1ff208 * 2] = this._c[_0x1ff208 * 2] = _0x306a99();
                this.Km[_0x1ff208 * 2 + 1] = this.Lm[_0x1ff208 * 2 + 1] = this._c[_0x1ff208 * 2 + 1] = _0x306a99();
              }
            };
            _0x564f14.prototype.Bi = function (_0x6179e0, _0x36f25b, _0x5a2a81) {
              this.Xc = _0x5a2a81;
              for (var _0x29d93a = 0; _0x29d93a < this.ad; _0x29d93a++) {
                this.Km[_0x29d93a * 2] = this.Lm[_0x29d93a * 2];
                this.Km[_0x29d93a * 2 + 1] = this.Lm[_0x29d93a * 2 + 1];
              }
              var _0x390643 = _0x6179e0 - this.Lm[0];
              var _0x88f69e = _0x36f25b - this.Lm[1];
              this.Rm(_0x390643, _0x88f69e, this.ad, this.Lm);
            };
            _0x564f14.prototype.Rm = function (_0x1f1473, _0xbc166e, _0xffe83d, _0x547a2b) {
              var _0xae32bc = Math.hypot(_0x1f1473, _0xbc166e);
              if (!(_0xae32bc <= 0)) {
                var _0x3b38b8 = _0x547a2b[0];
                var _0x4d718a = undefined;
                _0x547a2b[0] += _0x1f1473;
                var _0x33d285 = _0x547a2b[1];
                var _0x3e53e1 = undefined;
                _0x547a2b[1] += _0xbc166e;
                var _0x358fd9 = this.$c / (this.$c + _0xae32bc);
                var _0x246d2c = 1 - _0x358fd9 * 2;
                for (var _0x37b310 = 1, _0x2cd09d = _0xffe83d - 1; _0x37b310 < _0x2cd09d; _0x37b310++) {
                  _0x4d718a = _0x547a2b[_0x37b310 * 2];
                  _0x547a2b[_0x37b310 * 2] = _0x547a2b[_0x37b310 * 2 - 2] * _0x246d2c + (_0x4d718a + _0x3b38b8) * _0x358fd9;
                  _0x3b38b8 = _0x4d718a;
                  _0x3e53e1 = _0x547a2b[_0x37b310 * 2 + 1];
                  _0x547a2b[_0x37b310 * 2 + 1] = _0x547a2b[_0x37b310 * 2 - 1] * _0x246d2c + (_0x3e53e1 + _0x33d285) * _0x358fd9;
                  _0x33d285 = _0x3e53e1;
                }
                _0x358fd9 = this.Jm * this.$c / (this.Jm * this.$c + _0xae32bc);
                _0x246d2c = 1 - _0x358fd9 * 2;
                _0x547a2b[_0xffe83d * 2 - 2] = _0x547a2b[_0xffe83d * 2 - 4] * _0x246d2c + (_0x547a2b[_0xffe83d * 2 - 2] + _0x3b38b8) * _0x358fd9;
                _0x547a2b[_0xffe83d * 2 - 1] = _0x547a2b[_0xffe83d * 2 - 3] * _0x246d2c + (_0x547a2b[_0xffe83d * 2 - 1] + _0x33d285) * _0x358fd9;
              }
            };
            _0x564f14.prototype.fh = function () {
              return {
                x: this._c[0],
                y: this._c[1]
              };
            };
            _0x564f14.prototype.yi = function (_0x3dd1a5, _0x59c05e) {
              var _0x6c7014 = 1000000;
              var _0x2991f1 = _0x3dd1a5;
              var _0x2cf77d = _0x59c05e;
              for (var _0x33282f = 0; _0x33282f < this.ad; _0x33282f++) {
                var _0x4ee589 = this._c[_0x33282f * 2];
                var _0x3818eb = this._c[_0x33282f * 2 + 1];
                var _0x2cf62e = Math.hypot(_0x3dd1a5 - _0x4ee589, _0x59c05e - _0x3818eb);
                if (_0x2cf62e < _0x6c7014) {
                  _0x6c7014 = _0x2cf62e;
                  _0x2991f1 = _0x4ee589;
                  _0x2cf77d = _0x3818eb;
                }
              }
              return {
                x: _0x2991f1,
                y: _0x2cf77d,
                distance: _0x6c7014
              };
            };
            _0x564f14.prototype.ti = function (_0xd2e14b) {
              this.Mm = _0xd2e14b;
            };
            _0x564f14.prototype.hj = function (_0x2b86db, _0x542c37) {
              this.dj = _0x36bffa.Q(this.dj, this.wi ? 1 : 0, _0x542c37, 1 / 800);
              this.bd = _0x36bffa.Q(this.bd, this.wi ? this.Xc ? 1 : 0 : 0, _0x542c37, 0.0025);
              if (this.Nm != null) {
                this.Nm.nc.alpha = this.dj;
              }
              if (this.Om != null) {
                this.Om.alpha = this.dj;
              }
            };
            _0x564f14.prototype.ij = function (_0x3ab060, _0x37fa9d, _0x3f6ca1, _0x14e6ac) {
              if (this.xi && this.wi) {
                var _0x82536d = Math.pow(0.11112, _0x37fa9d / 95);
                for (var _0x4f9008 = 0; _0x4f9008 < this.ad; _0x4f9008++) {
                  this._c[_0x4f9008 * 2] = _0x36bffa.S(_0x36bffa.S(this.Km[_0x4f9008 * 2], this.Lm[_0x4f9008 * 2], _0x3f6ca1), this._c[_0x4f9008 * 2], _0x82536d);
                  this._c[_0x4f9008 * 2 + 1] = _0x36bffa.S(_0x36bffa.S(this.Km[_0x4f9008 * 2 + 1], this.Lm[_0x4f9008 * 2 + 1], _0x3f6ca1), this._c[_0x4f9008 * 2 + 1], _0x82536d);
                }
              }
              if (this.Nm && this.xi) {
                this.Nm.Zc(this, _0x3ab060, _0x37fa9d, _0x14e6ac);
              }
              if (this.Om) {
                this.Om.ih.x = this._c[0];
                this.Om.ih.y = this._c[1] - this.$c * 3;
              }
            };
            _0x564f14.prototype.Qm = function (_0x34dcc4) {
              if (this.xi) {
                if (!_0x34dcc4) {
                  this.Sm();
                }
              } else {
                if (this.Nm != null) {
                  _0x36bffa.U(this.Nm.nc);
                }
                if (this.Om != null) {
                  _0x36bffa.U(this.Om);
                }
              }
            };
            _0x564f14.prototype.Sm = function () {
              var _0x23defe = _0x4b2cbe();
              this.Nm = this.Nm || new _0x3819e1.WormSpriteTree();
              _0x36bffa.U(this.Nm.nc);
              this.Nm.yc(_0x23defe.dh.hh.xg, _0x23defe.Lc.Ub().jb(this.Eh.Gh), _0x23defe.Lc.Ub().ib(this.Eh.Hh), _0x23defe.Lc.Ub().kb(this.Eh.ni), _0x23defe.Lc.Ub().lb(this.Eh.oi), _0x23defe.Lc.Ub().mb(this.Eh.pi), _0x23defe.Lc.Ub().nb(this.Eh.qi), "#ffffff");
              this.Om = this.Om || new _0x3819e1.Tm("");
              _0x36bffa.U(this.Om);
              this.Om.style.fontFamily = "PTSans";
              this.Om.anchor.set(0.5);
              this.Om.style.fontSize = parseInt(bbs.enemyNameFontSize || 14);
              this.Om.style.fill = bbs.enemyNameColor || _0x23defe.Lc.Ub().ib(this.Eh.Hh).tb || "#fff";
              this.Om.style.fontWeight = "bold";
              this.Om.text = _0x346984 ? this.Eh.ma : "-----";
              this.Mm.oh(this.Eh.ae, this.Nm, this.Om);
            };
            _0x564f14.li = function () {
              function _0x156893() {
                this.ae = 0;
                this.Gh = _0xb65a12.ps ? _0xb65a12.ps : _0x3819e1.GameParams.Cg;
                this.Hh = 0;
                this.ni = 0;
                this.oi = 0;
                this.pi = 0;
                this.qi = 0;
                this.ma = 0;
              }
              return _0x156893;
            }();
            return _0x564f14;
          }();
          _0x3819e1.Tm = function () {
            return _0x36bffa.M(_0x4efbaa.Text, function (_0x3fc5bc, _0x2a1d89, _0x1630b6) {
              _0x4efbaa.Text.call(this, _0x3fc5bc, _0x2a1d89, _0x1630b6);
              this.ih = {
                x: 0,
                y: 0
              };
            });
          }();
          _0x3819e1.hb = function () {
            function _0x43bd5f(_0x580a41, _0x55c5ac, _0x143fa9, _0xc9733e, _0x4de8db) {
              this.lj = _0x580a41;
              this.mj = _0x55c5ac;
              this.nj = _0x143fa9;
              this.oj = _0xc9733e;
              this.pj = _0x4de8db;
            }
            _0x43bd5f.prototype.Um = function (_0x2950fe) {
              return new _0x43bd5f(_0x2950fe, this.mj, this.nj, this.oj, this.pj);
            };
            _0x43bd5f.prototype.Vm = function (_0xfdaaef) {
              return new _0x43bd5f(this.lj, _0xfdaaef, this.nj, this.oj, this.pj);
            };
            _0x43bd5f.prototype.Wm = function (_0x1fb962) {
              return new _0x43bd5f(this.lj, this.mj, _0x1fb962, this.oj, this.pj);
            };
            _0x43bd5f.prototype.Xm = function (_0x3d89e9) {
              return new _0x43bd5f(this.lj, this.mj, this.nj, _0x3d89e9, this.pj);
            };
            _0x43bd5f.prototype.Ym = function (_0x343a56) {
              return new _0x43bd5f(this.lj, this.mj, this.nj, this.oj, _0x343a56);
            };
            return _0x43bd5f;
          }();
          _0x3819e1.Vl = function () {
            function _0x47ec08(_0x18c52f) {
              this.Zm = new _0x3819e1.WormSpriteTree();
              this.Zm.nc.addChild(this.Zm.oc);
              this.$m = null;
              this._m = null;
              this.bm = _0x18c52f;
              this.pc = 0;
              this.Gi = 1;
              this.an = 1;
              this.bn = 1;
              this.cn = 1;
              this.dn = 1;
              this.gn = 1;
              this.hn = 1;
              this._l("#ffffff");
            }
            var _0x4f372e = new _0x3819e1.hb(0, 0, 0, 0, 0);
            _0x47ec08.prototype.tf = function () {
              return this.Zm.nc;
            };
            _0x47ec08.prototype.Wl = function (_0x21bfd7) {
              this.pc = _0x21bfd7;
              if (this.Zm.pc !== _0x21bfd7) {
                for (var _0x319399 = _0x21bfd7; _0x319399 < this.Zm.qc.length; _0x319399++) {
                  this.Zm.qc[_0x319399].Uc();
                }
                while (this.Zm.pc > _0x21bfd7) {
                  this.Zm.pc -= 1;
                  var _0x14430e = this.Zm.qc[this.Zm.pc];
                  _0x14430e.Dc.Rc();
                  _0x14430e.Cc.Rc();
                }
                while (this.Zm.pc < _0x21bfd7) {
                  var _0x4ed58 = this.Zm.qc[this.Zm.pc];
                  this.Zm.pc += 1;
                  this.Zm.nc.addChild(_0x4ed58.Cc.Qc());
                  this.Zm.nc.addChild(_0x4ed58.Dc.Qc());
                  _0x4ed58.Cc.jj(this.an);
                  _0x4ed58.Dc.jj(this.bn);
                }
                for (var _0x2ebb96 = 0; _0x2ebb96 < this.Zm.oc.Fc.length; _0x2ebb96++) {
                  this.Zm.oc.Fc[_0x2ebb96].jj(this.cn);
                }
                for (var _0x191856 = 0; _0x191856 < this.Zm.oc.Gc.length; _0x191856++) {
                  this.Zm.oc.Gc[_0x191856].jj(this.dn);
                }
                for (var _0x2e93f3 = 0; _0x2e93f3 < this.Zm.oc.Ic.length; _0x2e93f3++) {
                  this.Zm.oc.Ic[_0x2e93f3].jj(this.gn);
                }
                for (var _0x2b8cc0 = 0; _0x2b8cc0 < this.Zm.oc.Hc.length; _0x2b8cc0++) {
                  this.Zm.oc.Hc[_0x2b8cc0].jj(this.hn);
                }
              }
            };
            _0x47ec08.prototype.am = function () {
              return this.pc;
            };
            _0x47ec08.prototype.$l = function (_0x56f24e) {
              this.$m = _0x56f24e;
              this._m = "#ffffff";
              this.lm();
            };
            _0x47ec08.prototype._l = function (_0x44bfb1) {
              this.$m = _0x4f372e;
              this._m = _0x44bfb1;
              this.lm();
            };
            _0x47ec08.prototype.lm = function () {
              var _0xcaff9d = _0x4b2cbe();
              this.Zm.yc(_0x3819e1.Ac.vg, null, _0xcaff9d.Lc.Ub().ib(this.$m.lj), _0xcaff9d.Lc.Ub().kb(this.$m.mj), _0xcaff9d.Lc.Ub().lb(this.$m.nj), _0xcaff9d.Lc.Ub().mb(this.$m.pj), _0xcaff9d.Lc.Ub().nb(this.$m.oj), this._m);
            };
            _0x47ec08.prototype.Xl = function (_0x58701b) {
              this.Gi = _0x58701b;
            };
            _0x47ec08.prototype.cm = function () {
              return this.Gi;
            };
            _0x47ec08.prototype.om = function (_0x134bc1, _0x1e41f2) {
              this.an = _0x134bc1;
              this.bn = _0x1e41f2;
              for (var _0x27fe3f = 0; _0x27fe3f < this.pc; _0x27fe3f++) {
                var _0x478d68 = this.Zm.qc[_0x27fe3f];
                _0x478d68.Cc.jj(this.an);
                _0x478d68.Dc.jj(this.bn);
              }
            };
            _0x47ec08.prototype.rm = function (_0x45ddac, _0xaea486, _0x2a4bd6, _0x4ab728) {
              this.cn = _0x45ddac;
              this.dn = _0xaea486;
              this.gn = _0x2a4bd6;
              this.hn = _0x4ab728;
              for (var _0x1ef163 = 0; _0x1ef163 < this.Zm.oc.Fc.length; _0x1ef163++) {
                this.Zm.oc.Fc[_0x1ef163].jj(this.cn);
              }
              for (var _0x28a35b = 0; _0x28a35b < this.Zm.oc.Gc.length; _0x28a35b++) {
                this.Zm.oc.Gc[_0x28a35b].jj(this.dn);
              }
              for (var _0x107716 = 0; _0x107716 < this.Zm.oc.Ic.length; _0x107716++) {
                this.Zm.oc.Ic[_0x107716].jj(this.gn);
              }
              for (var _0x47006d = 0; _0x47006d < this.Zm.oc.Hc.length; _0x47006d++) {
                this.Zm.oc.Hc[_0x47006d].jj(this.hn);
              }
            };
            _0x47ec08.prototype.Uf = function () {
              var _0x15a366 = this.Gi * 2;
              var _0xcde63e = this.Gi * 2 * 1.5;
              if (this.pc > 0) {
                var _0xac1f2b = this.bm[0];
                var _0x453430 = this.bm[1];
                var _0x13af5c = this.bm[2];
                this.Zm.qc[0].Sc(_0xac1f2b, _0x453430, _0x15a366, _0xcde63e, _0x13af5c);
                this.Zm.oc.Sc(_0xac1f2b, _0x453430, _0x15a366, _0x13af5c);
              }
              for (var _0x173972 = 1; _0x173972 < this.pc; _0x173972++) {
                var _0x279c49 = this.bm[_0x173972 * 3];
                var _0x460e58 = this.bm[_0x173972 * 3 + 1];
                var _0x36ba73 = this.bm[_0x173972 * 3 + 2];
                this.Zm.qc[_0x173972].Sc(_0x279c49, _0x460e58, _0x15a366, _0xcde63e, _0x36ba73);
              }
            };
            _0x47ec08.prototype.tm = function (_0x10b31e) {
              _0x10b31e.render(this.Zm.nc);
            };
            return _0x47ec08;
          }();
          _0x3819e1.kf = function () {
            function _0x1fa2b7(_0x31fd3e) {
              this.nd = _0x31fd3e;
            }
            _0x1fa2b7.bgcanvas = $("#background-canvas");
            _0x1fa2b7.socialButtons = $("#social-buttons");
            _0x1fa2b7.socialButtons.html("");
            _0x1fa2b7.jn = $("#game-view");
            _0x1fa2b7.gameCanvas = $("#game-canvas");
            _0x1fa2b7.ln = $("#results-view");
            _0x1fa2b7.mn = $("#stretch-box");
            _0x1fa2b7.nn = $("#main-menu-view");
            _0x1fa2b7.pn = $("#popup-view");
            _0x1fa2b7.qn = $("#loading-view");
            _0x1fa2b7.rn = $("#restricted-view");
            _0x1fa2b7.sn = $("#toaster-view");
            _0x1fa2b7.tn = $("#error-gateway-connection-view");
            _0x1fa2b7.un_error = $("#error-game-connection-view");
            _0x1fa2b7.vn = $("#markup-wrap");
            _0x1fa2b7.prototype.ha = function () {};
            _0x1fa2b7.prototype.Gk = function () {};
            _0x1fa2b7.prototype.Hk = function () {};
            _0x1fa2b7.prototype.Bk = function () {};
            _0x1fa2b7.prototype.Jf = function () {};
            _0x1fa2b7.prototype.Nf = function (_0x1b5565, _0x36e22d) {};
            return _0x1fa2b7;
          }();
          _0x3819e1.Vj = function () {
            function _0x25628a(_0x4e9163, _0x3cb9f4, _0x337f03, _0x31bda8, _0x5bda89, _0x10f0ca) {
              var _0x16a8e3 = "OK";
              var _0x432b56 = $(_0x16a8e3);
              _0x432b56.click(function () {
                if (typeof FB != "undefined" && FB.ui !== undefined) {
                  FB.ui({
                    method: "feed",
                    display: "popup",
                    link: _0x3cb9f4,
                    name: _0x337f03,
                    caption: _0x31bda8,
                    description: _0x5bda89,
                    picture: _0x10f0ca
                  }, function () {});
                }
              });
              return _0x432b56;
            }
            var _0x24abeb = $("#final-caption");
            var _0x24faf4 = $("#final-continue");
            var _0x6945c7 = $("#congrats-bg");
            var _0x2141c3 = $("#unl6wj4czdl84o9b");
            $("#congrats");
            var _0x814b1c = $("#final-share-fb");
            var _0x4644fd = $("#final-message");
            var _0x3ebdd6 = $("#final-score");
            var _0x1444e6 = $("#final-place");
            var _0x33bd05 = $("#final-board");
            var _0x1686ef = _0x36bffa.M(_0x3819e1.kf, function () {
              _0x3819e1.kf.call(this, _0x3819e1.Fk.wn);
              var _0x1fd8e3 = this;
              var _0x2ade91 = _0x4b2cbe();
              _0x814b1c.toggle(_0x3dbc31.xn);
              _0x24abeb.text(_0x36bffa.H("index.game.result.title"));
              _0x24faf4.text(_0x36bffa.H("index.game.result.continue"));
              _0x24faf4.click(function () {
                _0x2ade91.Ci.Be();
                _0x2ade91.zn.yn.ka();
                _0x2ade91.Ci.pe(_0x3819e1.ge.je._e);
                _0x2ade91.og.Ak(_0x2ade91.og._e);
              });
              
              // Add respawn button
           //   var _0x4327d6 = _0x24faf4;
            //  _0x4327d6.after("<div id='final-replay'>Respawn</div>");
              
              $("#final-replay").click(function () {
                respawnFn();
              });
              
              $("#final-replay").css({
                "position": "absolute",
                "top": "10px",
                "left": "15px",
                "right": "15px",
                "background": "#f7941d",
                "color": "#ffffff",
                "line-height": "50px",
                "border-radius": "5px",
                "text-align": "center",
                "cursor": "pointer",
                "border": "none",
                "font-size": "24px",
                "z-index": "9999",
                "pointer-events": "auto"
              });
              
              // تأثير hover خفيف جداً
              $("#final-replay").hover(
                function() {
                  $(this).css({
                    "background": "#fa9d32"
                  });
                },
                function() {
                  $(this).css({
                    "background": "#f7941d"
                  });
                }
              );
              $("html").keydown(function (_0x5c4aec) {
                if (_0x5c4aec.keyCode === 32) {
                  _0x1fd8e3.An = true;
                }
              }).keyup(function (_0x2d2f01) {
                if (_0x2d2f01.keyCode === 32) {
                  _0x1fd8e3.An = false;
                }
              });
              this.ng = new _0x3819e1.Eg(_0x3819e1.kf.gameCanvas);
              this.Cn = 0;
              this.Bn = 0;
              this.An = false;
            });
            _0x1686ef.prototype.ha = function () {};
            _0x1686ef.prototype.Gk = function () {
              if (this.Cn === 0) {
                _0x3819e1.kf.jn.stop();
                _0x3819e1.kf.jn.fadeIn(500);
                // Remove confetti when game starts
                var bgLayer = document.getElementById("animated-confetti-layer");
                if (bgLayer) {
                  bgLayer.remove();
                }
                _0x3819e1.kf.ln.stop();
                _0x3819e1.kf.ln.fadeOut(1);
                _0x3819e1.kf.nn.stop();
                _0x3819e1.kf.nn.fadeOut(50);
                _0x3819e1.kf.pn.stop();
                _0x3819e1.kf.pn.fadeOut(50);
                _0x3819e1.kf.sn.stop();
                _0x3819e1.kf.sn.fadeOut(50);
                _0x3819e1.kf.qn.stop();
                _0x3819e1.kf.qn.fadeOut(50);
                _0x3819e1.kf.rn.stop();
                _0x3819e1.kf.rn.fadeOut(50);
                _0x3819e1.kf.tn.stop();
                _0x3819e1.kf.tn.fadeOut(50);
                _0x3819e1.kf.un_error.stop();
                _0x3819e1.kf.un_error.fadeOut(50);
                _0x3819e1.kf.mn.stop();
                _0x3819e1.kf.mn.fadeOut(1);
                _0x3819e1.kf.bgcanvas.stop();
                _0x3819e1.kf.bgcanvas.fadeOut(50);
                _0x3819e1.GameView.Kf(false);
                _0x3819e1.kf.socialButtons.stop();
                _0x3819e1.kf.socialButtons.fadeOut(50);
                _0x3819e1.kf.vn.stop();
                _0x3819e1.kf.vn.fadeOut(50);
              } else {
                _0x3819e1.kf.jn.stop();
                _0x3819e1.kf.jn.fadeIn(500);
                // Remove confetti when game starts
                var bgLayer = document.getElementById("animated-confetti-layer");
                if (bgLayer) {
                  bgLayer.remove();
                }
                _0x3819e1.kf.ln.stop();
                _0x3819e1.kf.ln.fadeIn(500);
                _0x3819e1.kf.nn.stop();
                _0x3819e1.kf.nn.fadeOut(50);
                _0x3819e1.kf.pn.stop();
                _0x3819e1.kf.pn.fadeOut(50);
                _0x3819e1.kf.sn.stop();
                _0x3819e1.kf.sn.fadeOut(50);
                _0x3819e1.kf.qn.stop();
                _0x3819e1.kf.qn.fadeOut(50);
                _0x3819e1.kf.rn.stop();
                _0x3819e1.kf.rn.fadeOut(50);
                _0x3819e1.kf.tn.stop();
                _0x3819e1.kf.tn.fadeOut(50);
                _0x3819e1.kf.un_error.stop();
                _0x3819e1.kf.un_error.fadeOut(50);
                _0x3819e1.kf.mn.stop();
                _0x3819e1.kf.mn.fadeOut(1);
                _0x3819e1.kf.bgcanvas.stop();
                _0x3819e1.kf.bgcanvas.fadeOut(50);
                _0x3819e1.GameView.Kf(false);
                _0x3819e1.kf.socialButtons.stop();
                _0x3819e1.kf.socialButtons.fadeOut(50);
                _0x3819e1.kf.vn.stop();
                _0x3819e1.kf.vn.fadeOut(50);
              }
            };
            _0x1686ef.prototype.Dn = function () {
              this.Cn = 0;
              return this;
            };
            _0x1686ef.prototype.En = function () {
              _0x6945c7.hide();
              setTimeout(function () {
                _0x6945c7.fadeIn(500);
              }, 3000);
              _0x2141c3.hide();
              setTimeout(function () {
                _0x2141c3.fadeIn(500);
              }, 500);
              this.Cn = 1;
              return this;
            };
            _0x1686ef.prototype.Hk = function () {
              this.An = false;
              this.ng.Jf();
              if (this.Cn === 1) {
                _0x4b2cbe().Ci.Fe();
              }
            };
            _0x1686ef.prototype.Jf = function () {
              this.ng.Jf();
            };
            _0x1686ef.prototype.Nf = function (_0x296c55, _0x143ee7) {
              this.ng.Nf(_0x296c55, _0x143ee7);
            };
            _0x1686ef.prototype.Fn = function (_0x25cd8b, _0x3eac6b, _0x3042b4) {
              var _0x2c7d33 = undefined;
              var _0x2f5a1c = undefined;
              var _0x5b30e9 = undefined;
              if (_0x3eac6b >= 1 && _0x3eac6b <= 10) {
                _0x2c7d33 = _0x36bffa.H("index.game.result.place.i" + _0x3eac6b);
                _0x2f5a1c = _0x36bffa.H("index.game.result.placeInBoard");
                _0x5b30e9 = _0x36bffa.H("index.game.social.shareResult.messGood").replace("{0}", _0x3042b4).replace("{1}", _0x25cd8b).replace("{2}", _0x2c7d33);
              } else {
                _0x2c7d33 = "";
                _0x2f5a1c = _0x36bffa.H("index.game.result.tryHit");
                _0x5b30e9 = _0x36bffa.H("index.game.social.shareResult.messNorm").replace("{0}", _0x3042b4).replace("{1}", _0x25cd8b);
              }
              _0x4644fd.html(_0x36bffa.H("index.game.result.your"));
              _0x3ebdd6.html(_0x25cd8b);
              _0x1444e6.html(_0x2c7d33);
              _0x33bd05.html(_0x2f5a1c);
              if (_0x3dbc31.xn) {
                var _0x683c09 = _0x36bffa.H("index.game.result.share");
                _0x36bffa.H("index.game.social.shareResult.caption");
                _0x814b1c.empty().append(_0x25628a(_0x683c09, "https://wormate.io", "wormate.io", _0x5b30e9, _0x5b30e9, "https://wormate.io/images/og-share-img-new.jpg"));
              }
            };
            _0x1686ef.prototype.Gn = function () {
              return this.Bn;
            };
            _0x1686ef.prototype.Hn = function () {
              return this.An;
            };
            return _0x1686ef;
          }();
          _0x3819e1.sk = function () {
            var _0x40a56a = $("#loading-progress-cont");
            var _0x21552d = $("#loading-progress-bar");
            var _0x5b02d5 = $("#loading-progress-text");
            var _0x2202c1 = _0x36bffa.M(_0x3819e1.kf, function () {
              _0x3819e1.kf.call(this, _0x3819e1.Fk.wn);
              this.In = -1;
              this.Jn = "";
            });
            _0x2202c1.prototype.ha = function () {};
            _0x2202c1.prototype.Gk = function () {
              _0x3819e1.kf.jn.stop();
              _0x3819e1.kf.jn.fadeOut(50);
              _0x3819e1.kf.ln.stop();
              _0x3819e1.kf.ln.fadeOut(50);
              _0x3819e1.kf.nn.stop();
              _0x3819e1.kf.nn.fadeOut(50);
              _0x3819e1.kf.pn.stop();
              _0x3819e1.kf.pn.fadeOut(50);
              _0x3819e1.kf.sn.stop();
              _0x3819e1.kf.sn.fadeOut(50);
              _0x3819e1.kf.qn.stop();
              _0x3819e1.kf.qn.fadeIn(500);
              _0x3819e1.kf.rn.stop();
              _0x3819e1.kf.rn.fadeOut(50);
              _0x3819e1.kf.tn.stop();
              _0x3819e1.kf.tn.fadeOut(50);
              _0x3819e1.kf.un_error.stop();
              _0x3819e1.kf.un_error.fadeOut(50);
              _0x3819e1.kf.mn.stop();
              _0x3819e1.kf.mn.fadeIn(1);
              _0x3819e1.kf.bgcanvas.stop();
              _0x3819e1.kf.bgcanvas.fadeIn(500);
              _0x3819e1.GameView.Kf(true);
              _0x3819e1.kf.socialButtons.stop();
              _0x3819e1.kf.socialButtons.fadeOut(50);
              _0x3819e1.kf.vn.stop();
              _0x3819e1.kf.vn.fadeOut(50);
            };
            _0x2202c1.prototype.Hk = function () {
              _0x4b2cbe().Ci.pe(_0x3819e1.ge.je.ie);
            };
            _0x2202c1.prototype.Bk = function () {};
            _0x2202c1.prototype.Kn = function () {
              this.Ln("", 0);
              _0x40a56a.stop();
              _0x40a56a.fadeIn(100);
            };
            _0x2202c1.prototype.Mn = function () {
              _0x40a56a.stop();
              _0x40a56a.fadeOut(100);
            };
            _0x2202c1.prototype.Ln = function (_0x394033, _0x65a71f) {
              if (this.Jn !== _0x394033) {
                this.Jn = _0x394033;
              }
              var _0x264d31 = _0x36bffa.P(Math.floor(_0x65a71f * 100), 0, 100);
              if (this.In !== _0x264d31) {
                _0x21552d.css({
                  width: _0x264d31 + "%"
                });
                _0x5b02d5.html(_0x264d31 + " %");
              }
            };
            return _0x2202c1;
          }();
          _0x3819e1.Wj = function () {
            var _0x4e05f3 = $("#mm-line-top");
            $("#mm-line-center");
            $("#mm-line-bottom");
            var _0x56665e = $("#mm-bottom-buttons");
            var _0x426090 = $("#mm-menu-cont");
            var _0x55955d = $("#mm-loading");
            var _0x4b3fb2 = $("#mm-loading-progress-bar");
            var _0x180a23 = $("#mm-loading-progress-text");
            var _0x4163c3 = $("#mm-skin-canv");
            var _0x2fe9a4 = $("#mm-skin-prev");
            var _0x3506ce = $("#mm-skin-next");
            var _0x33a632 = $("#mm-skin-over");
            var _0xf97a74 = $("#mm-skin-over-button-list");
            var _0x5bfca3 = $("#mm-params-nickname");
            var _0x4afc21 = $("#mm-params-game-mode");
            var _0x31bb6e = $("#mm-action-play");
            var _0x4893fa = $("#mm-action-guest");
            var _0x1af9e3 = $("#mm-action-login");
            var _0x5b4813 = $("#mm-player-info");
            var _0xa9a86d = $("#mm-store");
            var _0x10eff4 = $("#mm-leaders");
            var _0x51fd40 = $("#mm-settings");
            var _0x136abd = $("#mm-coins-box");
            var _0xd4a303 = $("#mm-player-avatar");
            var _0x393697 = $("#mm-player-username");
            var _0x5c73cb = $("#mm-coins-val");
            var _0x2fe627 = $("#mm-player-exp-bar");
            var _0x3c91f5 = $("#mm-player-exp-val");
            var _0xb7c177 = $("#mm-player-level");
            var _0x242a10 = _0x36bffa.M(_0x3819e1.kf, function () {
              _0x3819e1.kf.call(this, _0x3819e1.Fk.Ek);
              var _0x5f5d8d = _0x4b2cbe();
              this.In = -1;
              this.Jn = "";
              this.Nn = new _0x3819e1.dm(_0x4163c3);
              _0x4afc21.click(function () {
                _0x5f5d8d.Ci.Be();
              });
              _0x4163c3.click(function () {
                if (_0x5f5d8d.Ij.Hj()) {
                  _0x5f5d8d.Ci.Be();
                  _0x5f5d8d.og.Ak(_0x5f5d8d.og.ik);
                }
              });
              _0x2fe9a4.click(function () {
                _0x5f5d8d.Ci.Be();
                _0x5f5d8d.On.Ej();
              });
              _0x3506ce.click(function () {
                _0x5f5d8d.Ci.Be();
                _0x5f5d8d.On.Dj();
              });
              _0x5bfca3.keypress(function (_0x50db13) {
                if (_0x50db13.keyCode == 13) {
                  _0x5f5d8d.Pn(true);
                }
              });
              _0x31bb6e.click(function () {
                _0x5f5d8d.Ci.Be();
                _0x5f5d8d.Pn(true);
      

              });
              _0x4893fa.click(function () {
                _0x5f5d8d.Ci.Be();
                _0x5f5d8d.Pn(true);
              });
              _0x1af9e3.click(function () {
                _0x5f5d8d.Ci.Be();
                _0x5f5d8d.og.Ak(_0x5f5d8d.og.fk);
              });
              _0x51fd40.click(function () {
                _0x5f5d8d.Ci.Be();
                _0x5f5d8d.og.Ak(_0x5f5d8d.og.$h);
              });
              _0x5b4813.click(function () {
                if (_0x5f5d8d.Ij.Hj()) {
                  _0x5f5d8d.Ci.Be();
                  _0x5f5d8d.og.Ak(_0x5f5d8d.og.dk);
                }
              });
              _0x10eff4.click(function () {
                if (_0x5f5d8d.Ij.Hj()) {
                  _0x5f5d8d.Ci.Be();
                  _0x5f5d8d.og.Ak(_0x5f5d8d.og.bk);
                }
              });
              _0xa9a86d.click(function () {
                if (_0x5f5d8d.Ij.Hj()) {
                  _0x5f5d8d.Ci.Be();
                  _0x5f5d8d.og.Ak(_0x5f5d8d.og.kk);
                }
              });
              _0x136abd.click(function () {
                if (_0x5f5d8d.Ij.Hj()) {
                  _0x5f5d8d.Ci.Be();
                  _0x5f5d8d.og.Ak(_0x5f5d8d.og._j);
                }
              });
              this.Qn();
              this.Rn();
              var _0x22f78f = _0x3819e1.Vf.fg(_0x3819e1.Vf._f);
              if (_0x22f78f !== "ARENA" && _0x22f78f !== "TEAM2") {
                _0x22f78f = "ARENA";
              }
              _0x4afc21.val(_0x22f78f);
            });
            _0x242a10.prototype.ha = function () {
              var _0x12c436 = _0x4b2cbe();
              var _0x155c25 = this;
              _0x12c436.Ij.zl(function () {
                if (_0x12c436.Ij.Hj()) {
                  _0x12c436.On.Fj(_0x12c436.Ij.ml(), _0x3819e1.tj.sj);
                  _0x12c436.On.Fj(_0x12c436.Ij.nl(), _0x3819e1.tj.uj);
                  _0x12c436.On.Fj(_0x12c436.Ij.ol(), _0x3819e1.tj.vj);
                  _0x12c436.On.Fj(_0x12c436.Ij.pl(), _0x3819e1.tj.xj);
                  _0x12c436.On.Fj(_0x12c436.Ij.ql(), _0x3819e1.tj.wj);
                } else {
                  _0x12c436.On.Fj(_0x12c436.Sn(), _0x3819e1.tj.sj);
                  _0x12c436.On.Fj(0, _0x3819e1.tj.uj);
                  _0x12c436.On.Fj(0, _0x3819e1.tj.vj);
                  _0x12c436.On.Fj(0, _0x3819e1.tj.xj);
                  _0x12c436.On.Fj(0, _0x3819e1.tj.wj);
                }
              });
              _0x12c436.Ij.zl(function () {
                _0x31bb6e.toggle(_0x12c436.Ij.Hj());
                _0x1af9e3.toggle(!_0x12c436.Ij.Hj());
                _0x5b4813.toggle(true);
                _0x4893fa.toggle(!_0x12c436.Ij.Hj());
                _0x51fd40.toggle(true);
                _0x10eff4.toggle(_0x12c436.Ij.Hj());
                _0xa9a86d.toggle(_0x12c436.Ij.Hj());
                _0x136abd.toggle(_0x12c436.Ij.Hj());
                if (_0x12c436.Ij.Hj()) {
                  _0x33a632.hide();
                  _0x393697.html(_0x12c436.Ij.dl());
                  _0xd4a303.attr("src", _0x12c436.Ij.fl());
                  _0x5c73cb.html(_0x12c436.Ij.il());
                  _0x2fe627.width(_0x12c436.Ij.kl() * 100 / _0x12c436.Ij.ll() + "%");
                  _0x3c91f5.html(_0x12c436.Ij.kl() + " / " + _0x12c436.Ij.ll());
                  _0xb7c177.html(_0x12c436.Ij.jl());
                  _0x5bfca3.val(_0x12c436.Ij.el());
                } else {
                  _0x33a632.toggle(_0x3dbc31.xn && !_0x12c436.Tn());
                  _0x393697.html(_0x393697.data("guest"));
                  _0xd4a303.attr("src", _0x36bffa.a.e);
                  _0x5c73cb.html("10");
                  _0x2fe627.width("0");
                  _0x3c91f5.html("");
                  _0xb7c177.html(1);
                  _0x5bfca3.val(_0x3819e1.Vf.fg(_0x3819e1.Vf.ag));
                }
              });
              _0x12c436.On.zj(function () {
                _0x155c25.Nn.$l(_0x12c436.On.yj());
              });
            };
            _0x242a10.prototype.Gk = function () {
              _0x3819e1.kf.jn.stop();
              _0x3819e1.kf.jn.fadeOut(50);
              _0x3819e1.kf.ln.stop();
              _0x3819e1.kf.ln.fadeOut(50);
              _0x3819e1.kf.nn.stop();
              _0x3819e1.kf.nn.fadeIn(500);
              
              // Add confetti to main menu only
              var confettiURL = "https://imgur.com/7dqKnra.png";
              var bgLayerId = "animated-confetti-layer";
              var bgLayer = document.getElementById(bgLayerId);
              
              if (!bgLayer) {
                bgLayer = document.createElement("div");
                bgLayer.id = bgLayerId;
                bgLayer.style.cssText = `
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100vw;
                  height: 100vh;
                  overflow: hidden;
                  z-index: 1;
                  pointer-events: none;
                `;
                document.body.appendChild(bgLayer);
              }
              
              // Add confetti CSS styles
              var styleId = "confetti-style";
              if (!document.getElementById(styleId)) {
                var st = document.createElement("style");
                st.id = styleId;
                st.textContent = `
                  .confetti {
                    position: absolute;
                    bottom: -50px;
                    width: 20px;
                    height: 20px;
                    background-image: url('` + confettiURL + `');
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    animation: floatUpRandom linear infinite;
                    opacity: 0.9;
                    pointer-events: none;
                    will-change: transform, opacity;
                  }
                  
                  @keyframes floatUpRandom {
                    0% {
                      transform: translateY(0) translateX(0) rotate(0deg);
                      opacity: 0.9;
                    }
                    100% {
                      transform: translateY(-100vh) translateX(var(--end-x, 0)) rotate(var(--end-rotate, 0deg));
                      opacity: 0;
                    }
                  }
                `;
                document.head.appendChild(st);
              }
              
              // Clear existing confetti and add new ones
              bgLayer.innerHTML = '';
              for (let i = 0; i < 20; i++) {
                let confetti = document.createElement("div");
                confetti.className = "confetti";
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.setProperty("--end-x", `${(Math.random() - 0.5) * 100}%`);
                confetti.style.setProperty("--end-rotate", `${Math.random() * 360}deg`);
                confetti.style.animationDuration = `${5 + Math.random() * 10}s`;
                confetti.style.animationDelay = `${Math.random() * 5}s`;
                bgLayer.appendChild(confetti);
              }
              
              _0x3819e1.kf.pn.stop();
              _0x3819e1.kf.pn.fadeOut(50);
              _0x3819e1.kf.sn.stop();
              _0x3819e1.kf.sn.fadeOut(50);
              _0x3819e1.kf.qn.stop();
              _0x3819e1.kf.qn.fadeOut(50);
              _0x3819e1.kf.rn.stop();
              _0x3819e1.kf.rn.fadeOut(50);
              _0x3819e1.kf.tn.stop();
              _0x3819e1.kf.tn.fadeOut(50);
              _0x3819e1.kf.un_error.stop();
              _0x3819e1.kf.un_error.fadeOut(50);
              _0x3819e1.kf.mn.stop();
              _0x3819e1.kf.mn.fadeIn(1);
              _0x3819e1.kf.bgcanvas.stop();
              _0x3819e1.kf.bgcanvas.fadeIn(500);
              _0x3819e1.GameView.Kf(true);
              _0x3819e1.kf.socialButtons.stop();
              _0x3819e1.kf.socialButtons.fadeIn(500);
              _0x3819e1.kf.vn.stop();
              _0x3819e1.kf.vn.fadeIn(500);
            };
            _0x242a10.prototype.Un = function () {
              _0x4e05f3.fadeIn(500);
              _0x56665e.fadeIn(500);
              _0x426090.fadeIn(500);
              _0x55955d.fadeOut(100);
            };
            _0x242a10.prototype.Vn = function () {
              _0x4e05f3.fadeOut(100);
              _0x56665e.fadeOut(100);
              _0x426090.fadeOut(100);
              _0x55955d.fadeIn(500);
            };
            _0x242a10.prototype.Ln = function (_0x5529c9, _0x49662f) {
              if (this.Jn !== _0x5529c9) {
                this.Jn = _0x5529c9;
              }
              var _0x2c743f = _0x36bffa.P(Math.floor(_0x49662f * 100), 0, 100);
              if (this.In !== _0x2c743f) {
                _0x4b3fb2.css({
                  width: _0x2c743f + "%"
                });
                _0x180a23.html(_0x2c743f + " %");
              }
            };
            _0x242a10.prototype.Hk = function () {
              _0x4b2cbe().Ci.Ce();
              this.Nn.Kf(true);
            };
            _0x242a10.prototype.Bk = function () {
              this.Nn.Kf(false);
            };
            _0x242a10.prototype.Jf = function () {
              this.Nn.Jf();
            };
            _0x242a10.prototype.Nf = function (_0x5945ca, _0x314f39) {
              this.Nn.Nf();
            };
            _0x242a10.prototype.el = function () {
              return _0x5bfca3.val();
            };
            _0x242a10.prototype.Wn = function () {
              return _0x4afc21.val();
            };
            _0x242a10.prototype.Qn = function () {};
            _0x242a10.prototype.Rn = function () {
              function _0x2ed243() {
                _0x459eb6.Xn(true);
                setTimeout(function () {
                  _0x33a632.hide();
                }, 3000);
              }
              var _0x459eb6 = _0x4b2cbe();
              if (_0x3dbc31.xn && !_0x459eb6.Tn()) {
                _0x33a632.show();
                var _0x1acf3f = _0x36bffa.H("index.game.main.menu.unlockSkins.share");
                var _0x408076 = encodeURIComponent(_0x36bffa.H("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
                var _0x1a7fdc = encodeURIComponent(_0x36bffa.H("index.game.main.menu.unlockSkins.comeAndPlay"));
                _0xf97a74.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x408076 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x1acf3f + "</span></a>").click(_0x2ed243));
                _0xf97a74.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"" + _0x1a7fdc + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x1acf3f + "</span></a>").click(_0x2ed243));
              }
            };
            return _0x242a10;
          }();
          _0x3819e1.yk = function () {
            var _0x3e083a = _0x36bffa.M(_0x3819e1.kf, function () {
              _0x3819e1.kf.call(this, _0x3819e1.Fk.wn);
            });
            _0x3e083a.prototype.ha = function () {};
            _0x3e083a.prototype.Gk = function () {
              _0x3819e1.kf.jn.stop();
              _0x3819e1.kf.jn.fadeOut(50);
              _0x3819e1.kf.ln.stop();
              _0x3819e1.kf.ln.fadeOut(50);
              _0x3819e1.kf.nn.stop();
              _0x3819e1.kf.nn.fadeOut(50);
              _0x3819e1.kf.pn.stop();
              _0x3819e1.kf.pn.fadeOut(50);
              _0x3819e1.kf.sn.stop();
              _0x3819e1.kf.sn.fadeOut(50);
              _0x3819e1.kf.qn.stop();
              _0x3819e1.kf.qn.fadeOut(50);
              _0x3819e1.kf.rn.stop();
              _0x3819e1.kf.rn.fadeOut(50);
              _0x3819e1.kf.tn.stop();
              _0x3819e1.kf.tn.fadeOut(50);
              _0x3819e1.kf.un_error.stop();
              _0x3819e1.kf.un_error.fadeOut(50);
              _0x3819e1.kf.mn.stop();
              _0x3819e1.kf.mn.fadeOut(1);
              _0x3819e1.kf.bgcanvas.stop();
              _0x3819e1.kf.bgcanvas.fadeOut(50);
              _0x3819e1.GameView.Kf(false);
              _0x3819e1.kf.socialButtons.stop();
              _0x3819e1.kf.socialButtons.fadeOut(50);
              _0x3819e1.kf.vn.stop();
              _0x3819e1.kf.vn.fadeOut(50);
            };
            return _0x3e083a;
          }();
          _0x3819e1.pk = function () {
            var _0x4a91b2 = _0x36bffa.M(_0x3819e1.kf, function () {
              _0x3819e1.kf.call(this, _0x3819e1.Fk.wn);
            });
            _0x4a91b2.prototype.ha = function () {};
            _0x4a91b2.prototype.Gk = function () {
              _0x3819e1.kf.jn.stop();
              _0x3819e1.kf.jn.fadeOut(50);
              _0x3819e1.kf.ln.stop();
              _0x3819e1.kf.ln.fadeOut(50);
              _0x3819e1.kf.nn.stop();
              _0x3819e1.kf.nn.fadeOut(50);
              _0x3819e1.kf.pn.stop();
              _0x3819e1.kf.pn.fadeOut(50);
              _0x3819e1.kf.sn.stop();
              _0x3819e1.kf.sn.fadeOut(50);
              _0x3819e1.kf.qn.stop();
              _0x3819e1.kf.qn.fadeOut(50);
              _0x3819e1.kf.rn.stop();
              _0x3819e1.kf.rn.fadeIn(500);
              _0x3819e1.kf.tn.stop();
              _0x3819e1.kf.tn.fadeOut(50);
              _0x3819e1.kf.un_error.stop();
              _0x3819e1.kf.un_error.fadeOut(50);
              _0x3819e1.kf.mn.stop();
              _0x3819e1.kf.mn.fadeIn(1);
              _0x3819e1.kf.bgcanvas.stop();
              _0x3819e1.kf.bgcanvas.fadeIn(500);
              _0x3819e1.GameView.Kf(true);
              _0x3819e1.kf.socialButtons.stop();
              _0x3819e1.kf.socialButtons.fadeOut(50);
              _0x3819e1.kf.vn.stop();
              _0x3819e1.kf.vn.fadeOut(50);
            };
            _0x4a91b2.prototype.Hk = function () {};
            return _0x4a91b2;
          }();
          _0x3819e1.rk = function () {
            var _0x4d8974 = $("#toaster-stack");
            var _0x5c8b09 = _0x36bffa.M(_0x3819e1.kf, function () {
              _0x3819e1.kf.call(this, _0x3819e1.Fk.wn);
              this.Yn = [];
              this.Zn = null;
            });
            _0x5c8b09.prototype.ha = function () {};
            _0x5c8b09.prototype.Gk = function () {
              _0x3819e1.kf.jn.stop();
              _0x3819e1.kf.jn.fadeOut(50);
              _0x3819e1.kf.ln.stop();
              _0x3819e1.kf.ln.fadeOut(50);
              _0x3819e1.kf.nn.stop();
              _0x3819e1.kf.nn.fadeOut(50);
              _0x3819e1.kf.pn.stop();
              _0x3819e1.kf.pn.fadeOut(50);
              _0x3819e1.kf.sn.stop();
              _0x3819e1.kf.sn.fadeIn(500);
              _0x3819e1.kf.qn.stop();
              _0x3819e1.kf.qn.fadeOut(50);
              _0x3819e1.kf.rn.stop();
              _0x3819e1.kf.rn.fadeOut(50);
              _0x3819e1.kf.tn.stop();
              _0x3819e1.kf.tn.fadeOut(50);
              _0x3819e1.kf.un_error.stop();
              _0x3819e1.kf.un_error.fadeOut(50);
              _0x3819e1.kf.mn.stop();
              _0x3819e1.kf.mn.fadeIn(1);
              _0x3819e1.kf.bgcanvas.stop();
              _0x3819e1.kf.bgcanvas.fadeIn(500);
              _0x3819e1.GameView.Kf(true);
              _0x3819e1.kf.socialButtons.stop();
              _0x3819e1.kf.socialButtons.fadeOut(50);
              _0x3819e1.kf.vn.stop();
              _0x3819e1.kf.vn.fadeIn(500);
            };
            _0x5c8b09.prototype.Hk = function () {
              this.$n();
            };
            _0x5c8b09.prototype.Kk = function () {
              return this.Zn != null || this.Yn.length > 0;
            };
            _0x5c8b09.prototype._n = function (_0xf26fd2) {
              this.Yn.unshift(_0xf26fd2);
              setTimeout(function () {
                _0x4b2cbe().og.Ik();
              }, 0);
            };
            _0x5c8b09.prototype.El = function (_0x8a08f8) {
              this.Yn.push(_0x8a08f8);
              setTimeout(function () {
                _0x4b2cbe().og.Ik();
              }, 0);
            };
            _0x5c8b09.prototype.$n = function () {
              var _0x22c404 = this;
              if (this.Zn == null) {
                if (this.Yn.length == 0) {
                  _0x4b2cbe().og.Dk();
                  return;
                }
                var _0x3744cd = this.Yn.shift();
                this.Zn = _0x3744cd;
                var _0x561f62 = _0x3744cd.tf();
                _0x561f62.hide();
                _0x561f62.fadeIn(300);
                _0x4d8974.append(_0x561f62);
                _0x3744cd.ao = function () {
                  _0x561f62.fadeOut(300);
                  setTimeout(function () {
                    _0x561f62.remove();
                  }, 300);
                  if (_0x22c404.Zn == _0x3744cd) {
                    _0x22c404.Zn = null;
                  }
                  _0x22c404.$n();
                };
                _0x3744cd.Hk();
              }
            };
            return _0x5c8b09;
          }();
          _0x3819e1.Fk = {
            wn: 0,
            Ek: 1
          };
          _0x3819e1.bo = function () {
            var _0x44d40c = $("#popup-menu-label");
            var _0xad53ec = $("#popup-menu-coins-box");
            var _0xf2dd18 = $("#popup-menu-coins-val");
            $("#popup-menu-back").click(function () {
              var _0x44ea08 = _0x4b2cbe();
              _0x44ea08.Ci.Be();
              _0x44ea08.og.Dk();
            });
            _0xad53ec.click(function () {
              var _0x177934 = _0x4b2cbe();
              if (_0x177934.Ij.Hj()) {
                _0x177934.Ci.Be();
                _0x177934.og.Ak(_0x177934.og._j);
              }
            });
            var _0x34ead6 = _0x36bffa.M(_0x3819e1.kf, function (_0xdb1a6e, _0x5ee576) {
              _0x3819e1.kf.call(this, _0x3819e1.Fk.Ek);
              this.ma = _0xdb1a6e;
              this.co = _0x5ee576;
              this.do = [];
            });
            _0x34ead6.prototype.ha = function () {
              _0x34ead6.parent.prototype.ha.call(this);
              if (!_0x34ead6.eo) {
                _0x34ead6.eo = true;
                var _0x44873f = _0x4b2cbe();
                _0x44873f.Ij.zl(function () {
                  if (_0x44873f.Ij.Hj()) {
                    _0xf2dd18.html(_0x44873f.Ij.il());
                  } else {
                    _0xf2dd18.html("0");
                  }
                });
              }
              _0x3819e1.bo.fo.stop();
              _0x3819e1.bo.fo.fadeOut(100);
            };
            _0x34ead6.go = $("#coins-view");
            _0x34ead6.ho = $("#leaders-view");
            _0x34ead6.io = $("#profile-view");
            _0x34ead6.jo = $("#settings-view");
            _0x34ead6.ko = $("#login-view");
            _0x34ead6.lo = $("#skins-view");
            _0x34ead6.mo = $("#store-view");
            _0x34ead6.no = $("#wear-view");
            _0x34ead6.oo = $("#withdraw-consent-view");
            _0x34ead6.po = $("#delete-account-view");
            _0x34ead6.fo = $("#please-wait-view");
            _0x34ead6.prototype.Gk = function () {
              _0x3819e1.kf.jn.stop();
              _0x3819e1.kf.jn.fadeOut(200);
              _0x3819e1.kf.ln.stop();
              _0x3819e1.kf.ln.fadeOut(200);
              _0x3819e1.kf.nn.stop();
              _0x3819e1.kf.nn.fadeOut(200);
              _0x3819e1.kf.pn.stop();
              _0x3819e1.kf.pn.fadeIn(200);
              _0x3819e1.kf.sn.stop();
              _0x3819e1.kf.sn.fadeOut(200);
              _0x3819e1.kf.qn.stop();
              _0x3819e1.kf.qn.fadeOut(200);
              _0x3819e1.kf.rn.stop();
              _0x3819e1.kf.rn.fadeOut(200);
              _0x3819e1.kf.tn.stop();
              _0x3819e1.kf.tn.fadeOut(200);
              _0x3819e1.kf.un_error.stop();
              _0x3819e1.kf.un_error.fadeOut(200);
              _0x3819e1.kf.mn.stop();
              _0x3819e1.kf.mn.fadeIn(1);
              _0x3819e1.kf.bgcanvas.stop();
              _0x3819e1.kf.bgcanvas.fadeIn(500);
              _0x3819e1.GameView.Kf(true);
              _0x3819e1.kf.socialButtons.stop();
              _0x3819e1.kf.socialButtons.fadeIn(200);
              _0x3819e1.kf.vn.stop();
              _0x3819e1.kf.vn.fadeIn(200);
              _0x44d40c.html(this.ma);
              _0xad53ec.toggle(this.co);
              this.qo();
            };
            _0x34ead6.prototype.qo = function () {};
            _0x34ead6.prototype.ro = function (_0x2174a2) {
              var _0x37aa51 = this;
              var _0x13389f = _0x36bffa.V(0, 2147483647) & 2147483647;
              this.do.push(_0x13389f);
              _0x3819e1.bo.fo.stop();
              _0x3819e1.bo.fo.fadeIn(100);
              setTimeout(function () {
                _0x37aa51.so(_0x13389f);
              }, _0x2174a2);
              return new _0x597375(this, _0x13389f);
            };
            _0x34ead6.prototype.so = function (_0x4b3cb0) {
              var _0x397213 = this.do.indexOf(_0x4b3cb0);
              if (!(_0x397213 < 0)) {
                this.do.splice(_0x397213, 1);
                if (this.do.length === 0) {
                  _0x3819e1.bo.fo.stop();
                  _0x3819e1.bo.fo.fadeOut(100);
                }
              }
            };
            return _0x34ead6;
          }();
          var _0x597375 = function () {
            function _0x8f0b4f(_0x54f0ae, _0x203398) {
              this.to = _0x54f0ae;
              this.uo = _0x203398;
            }
            _0x8f0b4f.prototype.vo = function () {
              this.to.so(this.uo);
            };
            return _0x8f0b4f;
          }();
          _0x3819e1.ak = function () {
            var _0x5f543b = $("#store-buy-coins_125000");
            var _0x327a6d = $("#store-buy-coins_50000");
            var _0x3eb33d = $("#store-buy-coins_16000");
            var _0x393692 = $("#store-buy-coins_7000");
            var _0x387578 = $("#store-buy-coins_3250");
            var _0x2c9aa9 = $("#store-buy-coins_1250");
            var _0x3fbf0e = _0x36bffa.M(_0x3819e1.bo, function () {
              _0x3819e1.bo.call(this, _0x36bffa.H("index.game.popup.menu.coins.tab"), false);
              var _0x4c5a83 = _0x4b2cbe();
              var _0x3bb2ee = this;
              _0x5f543b.click(function () {
                _0x4c5a83.Ci.Be();
                _0x3bb2ee.wo("coins_125000");
              });
              _0x327a6d.click(function () {
                _0x4c5a83.Ci.Be();
                _0x3bb2ee.wo("coins_50000");
              });
              _0x3eb33d.click(function () {
                _0x4c5a83.Ci.Be();
                _0x3bb2ee.wo("coins_16000");
              });
              _0x393692.click(function () {
                _0x4c5a83.Ci.Be();
                _0x3bb2ee.wo("coins_7000");
              });
              _0x387578.click(function () {
                _0x4c5a83.Ci.Be();
                _0x3bb2ee.wo("coins_3250");
              });
              _0x2c9aa9.click(function () {
                _0x4c5a83.Ci.Be();
                _0x3bb2ee.wo("coins_1250");
              });
            });
            _0x3fbf0e.prototype.ha = function () {
              _0x3fbf0e.parent.prototype.ha.call(this);
            };
            _0x3fbf0e.prototype.qo = function () {
              _0x3819e1.bo.go.stop();
              _0x3819e1.bo.go.fadeIn(200);
              _0x3819e1.bo.ho.stop();
              _0x3819e1.bo.ho.fadeOut(50);
              _0x3819e1.bo.io.stop();
              _0x3819e1.bo.io.fadeOut(50);
              _0x3819e1.bo.ko.stop();
              _0x3819e1.bo.ko.fadeOut(50);
              _0x3819e1.bo.jo.stop();
              _0x3819e1.bo.jo.fadeOut(50);
              _0x3819e1.bo.lo.stop();
              _0x3819e1.bo.lo.fadeOut(50);
              _0x3819e1.bo.mo.stop();
              _0x3819e1.bo.mo.fadeOut(50);
              _0x3819e1.bo.no.stop();
              _0x3819e1.bo.no.fadeOut(50);
              _0x3819e1.bo.oo.stop();
              _0x3819e1.bo.oo.fadeOut(50);
              _0x3819e1.bo.po.stop();
              _0x3819e1.bo.po.fadeOut(50);
            };
            _0x3fbf0e.prototype.Hk = function () {
              _0x4b2cbe().Ci.Ce();
            };
            _0x3fbf0e.prototype.wo = function (_0x1c6601) {};
            return _0x3fbf0e;
          }();
          _0x3819e1.ck = function () {
            var _0x4e3995 = $("#highscore-table");
            var _0x4c1e1f = $("#leaders-button-level");
            var _0x3e640b = $("#leaders-button-highscore");
            var _0x5f3a59 = $("#leaders-button-kills");
            var _0x5db749 = _0x36bffa.M(_0x3819e1.bo, function () {
              _0x3819e1.bo.call(this, _0x36bffa.H("index.game.popup.menu.leaders.tab"), true);
              var _0x512c33 = _0x4b2cbe();
              var _0x1c7e0e = this;
              this.xo = {};
              this.yo = {
                zo: {
                  Ao: _0x4c1e1f,
                  Bo: "byLevel"
                },
                Co: {
                  Ao: _0x3e640b,
                  Bo: "byHighScore"
                },
                Do: {
                  Ao: _0x5f3a59,
                  Bo: "byKillsAndHeadShots"
                }
              };
              _0x4c1e1f.click(function () {
                _0x512c33.Ci.Be();
                _0x1c7e0e.Eo(_0x1c7e0e.yo.zo);
              });
              _0x3e640b.click(function () {
                _0x512c33.Ci.Be();
                _0x1c7e0e.Eo(_0x1c7e0e.yo.Co);
              });
              _0x5f3a59.click(function () {
                _0x512c33.Ci.Be();
                _0x1c7e0e.Eo(_0x1c7e0e.yo.Do);
              });
            });
            _0x5db749.prototype.ha = function () {
              _0x5db749.parent.prototype.ha.call(this);
            };
            _0x5db749.prototype.qo = function () {
              _0x3819e1.bo.go.stop();
              _0x3819e1.bo.go.fadeOut(50);
              _0x3819e1.bo.ho.stop();
              _0x3819e1.bo.ho.fadeIn(200);
              _0x3819e1.bo.io.stop();
              _0x3819e1.bo.io.fadeOut(50);
              _0x3819e1.bo.ko.stop();
              _0x3819e1.bo.ko.fadeOut(50);
              _0x3819e1.bo.jo.stop();
              _0x3819e1.bo.jo.fadeOut(50);
              _0x3819e1.bo.lo.stop();
              _0x3819e1.bo.lo.fadeOut(50);
              _0x3819e1.bo.mo.stop();
              _0x3819e1.bo.mo.fadeOut(50);
              _0x3819e1.bo.no.stop();
              _0x3819e1.bo.no.fadeOut(50);
              _0x3819e1.bo.oo.stop();
              _0x3819e1.bo.oo.fadeOut(50);
              _0x3819e1.bo.po.stop();
              _0x3819e1.bo.po.fadeOut(50);
            };
            _0x5db749.prototype.Hk = function () {
              var _0x213969 = this;
              _0x4b2cbe().Ci.Ce();
              var _0x1f0ccc = this.ro(5000);
              var _0x2d0709 = _0x36bffa.a.b + "/pub/leaders";
              _0x36bffa.Z(_0x2d0709, function () {
                _0x213969.xo = {
                  byLevel: [],
                  byHighScore: [],
                  byKillsAndHeadShots: []
                };
                _0x213969.Eo(_0x213969.Fo ?? _0x213969.yo.zo);
                _0x1f0ccc.vo();
              }, function (_0x56d790) {
                _0x213969.xo = _0x56d790;
                _0x213969.Eo(_0x213969.Fo ?? _0x213969.yo.zo);
                _0x1f0ccc.vo();
              });
            };
            _0x5db749.prototype.Eo = function (_0x178d73) {
              this.Fo = _0x178d73;
              for (var _0x145ca2 in this.yo) {
                if (this.yo.hasOwnProperty(_0x145ca2)) {
                  var _0x4761d = this.yo[_0x145ca2];
                  _0x4761d.Ao.removeClass("pressed");
                }
              }
              this.Fo.Ao.addClass("pressed");
              for (var _0x18cbc5 = this.xo[this.Fo.Bo], _0x3e1a43 = "", _0x5e578b = 0; _0x5e578b < _0x18cbc5.length; _0x5e578b++) {
                var _0x40d47 = _0x18cbc5[_0x5e578b];
                _0x3e1a43 += "<div class=\"table-row\"><span>" + (_0x5e578b + 1) + "</span><span><img src=\"" + _0x40d47.avatarUrl + "\"/></span><span>" + _0x40d47.username + "</span><span>" + _0x40d47.level + "</span><span>" + _0x40d47.highScore + "</span><span>" + _0x40d47.headShots + " / " + _0x40d47.kills + "</span></div>";
              }
              _0x4e3995.empty();
              _0x4e3995.append(_0x3e1a43);
            };
            return _0x5db749;
          }();
          _0x3819e1.gk = function () {
            var _0x235cf5 = $("#popup-login-gg");
            var _0xfc8f8d = $("#popup-login-fb");
            var _0x30a259 = _0x36bffa.M(_0x3819e1.bo, function () {
              var _0x5ee997 = this;
              _0x3819e1.bo.call(this, _0x36bffa.H("index.game.popup.menu.login.tab"), false);
              var _0x275bcd = _0x4b2cbe();
              _0x235cf5.click(function () {
                _0x275bcd.Ci.Be();
                var _0x48ae47 = _0x5ee997.ro(10000);
                setTimeout(function () {
                  _0x275bcd.Ij.Ml(function () {
                    if (_0x275bcd.Ij.Hj()) {
                      _0x275bcd.Ci.Fe();
                    }
                    _0x48ae47.vo();
                  });
                }, 500);
              });
              _0xfc8f8d.click(function () {
                _0x275bcd.Ci.Be();
                var _0x2fdd9e = _0x5ee997.ro(10000);
                setTimeout(function () {
                  _0x275bcd.Ij.Jl(function () {
                    if (_0x275bcd.Ij.Hj()) {
                      _0x275bcd.Ci.Fe();
                    }
                    _0x2fdd9e.vo();
                  });
                }, 500);
              });
            });
            _0x30a259.prototype.ha = function () {
              _0x30a259.parent.prototype.ha.call(this);
            };
            _0x30a259.prototype.qo = function () {
              _0x3819e1.bo.go.stop();
              _0x3819e1.bo.go.fadeOut(50);
              _0x3819e1.bo.ho.stop();
              _0x3819e1.bo.ho.fadeOut(50);
              _0x3819e1.bo.io.stop();
              _0x3819e1.bo.io.fadeOut(50);
              _0x3819e1.bo.ko.stop();
              _0x3819e1.bo.ko.fadeIn(200);
              _0x3819e1.bo.jo.stop();
              _0x3819e1.bo.jo.fadeOut(50);
              _0x3819e1.bo.lo.stop();
              _0x3819e1.bo.lo.fadeOut(50);
              _0x3819e1.bo.mo.stop();
              _0x3819e1.bo.mo.fadeOut(50);
              _0x3819e1.bo.no.stop();
              _0x3819e1.bo.no.fadeOut(50);
              _0x3819e1.bo.oo.stop();
              _0x3819e1.bo.oo.fadeOut(50);
              _0x3819e1.bo.po.stop();
              _0x3819e1.bo.po.fadeOut(50);
            };
            _0x30a259.prototype.Hk = function () {
              _0x4b2cbe().Ci.Ce();
            };
            return _0x30a259;
          }();
          _0x3819e1.ek = function () {
            var _0x86eed9 = $("#profile-avatar");
            var _0x57af3e = $("#profile-username");
            var _0x49ffb2 = $("#profile-experience-bar");
            var _0x176d5a = $("#profile-experience-val");
            var _0x5d95b9 = $("#profile-level");
            var _0x19179b = $("#profile-stat-highScore");
            var _0x24802f = $("#profile-stat-bestSurvivalTime");
            var _0x556a49 = $("#profile-stat-kills");
            var _0x4ca5ef = $("#profile-stat-headshots");
            var _0x5a1665 = $("#profile-stat-gamesPlayed");
            var _0x594bff = $("#profile-stat-totalTimeSpent");
            var _0x415455 = $("#profile-stat-registrationDate");
            var _0x538ed8 = _0x36bffa.M(_0x3819e1.bo, function () {
              _0x3819e1.bo.call(this, _0x36bffa.H("index.game.popup.menu.profile.tab"), true);
            });
            _0x538ed8.prototype.ha = function () {
              _0x538ed8.parent.prototype.ha.call(this);
            };
            _0x538ed8.prototype.qo = function () {
              _0x3819e1.bo.go.stop();
              _0x3819e1.bo.go.fadeOut(50);
              _0x3819e1.bo.ho.stop();
              _0x3819e1.bo.ho.fadeOut(50);
              _0x3819e1.bo.io.stop();
              _0x3819e1.bo.io.fadeIn(200);
              _0x3819e1.bo.ko.stop();
              _0x3819e1.bo.ko.fadeOut(50);
              _0x3819e1.bo.jo.stop();
              _0x3819e1.bo.jo.fadeOut(50);
              _0x3819e1.bo.lo.stop();
              _0x3819e1.bo.lo.fadeOut(50);
              _0x3819e1.bo.mo.stop();
              _0x3819e1.bo.mo.fadeOut(50);
              _0x3819e1.bo.no.stop();
              _0x3819e1.bo.no.fadeOut(50);
              _0x3819e1.bo.oo.stop();
              _0x3819e1.bo.oo.fadeOut(50);
              _0x3819e1.bo.po.stop();
              _0x3819e1.bo.po.fadeOut(50);
            };
            _0x538ed8.prototype.Hk = function () {
              var _0x5efb07 = _0x4b2cbe();
              _0x5efb07.Ci.Ce();
              var _0x5c606a = _0x5efb07.Ij.xl();
              var _0x448db5 = moment([_0x5c606a.year, _0x5c606a.month - 1, _0x5c606a.day]).format("LL");
              _0x57af3e.html(_0x5efb07.Ij.dl());
              _0x86eed9.attr("src", _0x5efb07.Ij.fl());
              _0x49ffb2.width(_0x5efb07.Ij.kl() * 100 / _0x5efb07.Ij.ll() + "%");
              _0x176d5a.html(_0x5efb07.Ij.kl() + " / " + _0x5efb07.Ij.ll());
              _0x5d95b9.html(_0x5efb07.Ij.jl());
              _0x19179b.html(_0x5efb07.Ij.rl());
              _0x24802f.html(_0x36bffa.J(_0x5efb07.Ij.sl()));
              _0x556a49.html(_0x5efb07.Ij.tl());
              _0x4ca5ef.html(_0x5efb07.Ij.ul());
              _0x5a1665.html(_0x5efb07.Ij.vl());
              _0x594bff.html(_0x36bffa.J(_0x5efb07.Ij.wl()));
              _0x415455.html(_0x448db5);
            };
            return _0x538ed8;
          }();
          _0x3819e1.hk = function () {
            var _0x1724a9 = $("#settings-music-enabled-switch");
            var _0x193835 = $("#settings-sfx-enabled-switch");
            var _0x248f0b = $("#settings-show-names-switch");
            var _0x45529c = $("#popup-logout");
            var _0x12d24f = $("#popup-logout-container");
            var _0x4bb3bc = $("#popup-delete-account");
            var _0x2a4c8a = $("#popup-delete-account-container");
            var _0x4e8149 = $("#popup-withdraw-consent");
            var _0x343546 = _0x36bffa.M(_0x3819e1.bo, function () {
              _0x3819e1.bo.call(this, _0x36bffa.H("index.game.popup.menu.settings.tab"), false);
              var _0x33556f = this;
              var _0x3abc8e = _0x4b2cbe();
              _0x1724a9.click(function () {
                var _0x36a438 = !!_0x1724a9.prop("checked");
                _0x3819e1.Vf.eg(_0x3819e1.Vf.Yf, _0x36a438, 30);
                _0x3abc8e.Ci.re(_0x36a438);
                _0x3abc8e.Ci.Be();
              });
              _0x193835.click(function () {
                var _0x529374 = !!_0x193835.prop("checked");
                _0x3819e1.Vf.eg(_0x3819e1.Vf.Zf, _0x529374, 30);
                _0x3abc8e.Ci.oe(_0x529374);
                _0x3abc8e.Ci.Be();
              });
              _0x248f0b.click(function () {
                _0x3abc8e.Ci.Be();
              });
              _0x45529c.click(function () {
                _0x3abc8e.Ci.Be();
                _0x33556f.ro(500);
                _0x3abc8e.Ij.Kl();
              });
              _0x4bb3bc.click(function () {
                if (_0x3abc8e.Ij.Hj()) {
                  _0x3abc8e.Ci.Be();
                  _0x3abc8e.og.Ak(_0x3abc8e.og.Zj);
                } else {
                  _0x3abc8e.Ci.Ge();
                }
              });
              _0x4e8149.click(function () {
                if (_0x3abc8e.Go()) {
                  _0x3abc8e.Ci.Be();
                  _0x3abc8e.og.Ak(_0x3abc8e.og.Xj);
                } else {
                  _0x3abc8e.Ci.Ge();
                }
              });
            });
            _0x343546.prototype.ha = function () {
              _0x343546.parent.prototype.ha.call(this);
              var _0x963e49 = _0x4b2cbe();
              var _0x260874 = undefined;
              switch (_0x3819e1.Vf.fg(_0x3819e1.Vf.Yf)) {
                case "false":
                  _0x260874 = false;
                  break;
                default:
                  _0x260874 = true;
              }
              _0x1724a9.prop("checked", _0x260874);
              _0x963e49.Ci.re(_0x260874);
              var _0x545abf = undefined;
              switch (_0x3819e1.Vf.fg(_0x3819e1.Vf.Zf)) {
                case "false":
                  _0x545abf = false;
                  break;
                default:
                  _0x545abf = true;
              }
              _0x193835.prop("checked", _0x545abf);
              _0x963e49.Ci.oe(_0x545abf);
              var _0x48adce = undefined;
              switch (_0x3819e1.Vf.fg(_0x3819e1.Vf.Xf)) {
                case "false":
                  _0x48adce = false;
                  break;
                default:
                  _0x48adce = true;
              }
              _0x248f0b.prop("checked", _0x48adce);
              _0x963e49.Ij.yl(function () {
                _0x12d24f.toggle(_0x963e49.Ij.Hj());
                _0x2a4c8a.toggle(_0x963e49.Ij.Hj());
              });
            };
            _0x343546.prototype.qo = function () {
              _0x3819e1.bo.go.stop();
              _0x3819e1.bo.go.fadeOut(50);
              _0x3819e1.bo.ho.stop();
              _0x3819e1.bo.ho.fadeOut(50);
              _0x3819e1.bo.io.stop();
              _0x3819e1.bo.io.fadeOut(50);
              _0x3819e1.bo.ko.stop();
              _0x3819e1.bo.ko.fadeOut(50);
              _0x3819e1.bo.jo.stop();
              _0x3819e1.bo.jo.fadeIn(200);
              _0x3819e1.bo.lo.stop();
              _0x3819e1.bo.lo.fadeOut(50);
              _0x3819e1.bo.mo.stop();
              _0x3819e1.bo.mo.fadeOut(50);
              _0x3819e1.bo.no.stop();
              _0x3819e1.bo.no.fadeOut(50);
              _0x3819e1.bo.oo.stop();
              _0x3819e1.bo.oo.fadeOut(50);
              _0x3819e1.bo.po.stop();
              _0x3819e1.bo.po.fadeOut(50);
            };
            _0x343546.prototype.Hk = function () {
              var _0x2d53ce = _0x4b2cbe();
              _0x2d53ce.Ci.Ce();
              if (_0x2d53ce.Go()) {
                _0x4e8149.show();
              } else {
                _0x4e8149.hide();
              }
            };
            _0x343546.prototype.Zh = function () {
              return _0x248f0b.prop("checked");
            };
            return _0x343546;
          }();
          _0x3819e1.jk = function () {
            var _0x5dc7ac = $("#store-view-canv");
            var _0x547fe3 = $("#skin-description-text");
            var _0x13d113 = $("#skin-group-description-text");
            var _0xf44a85 = $("#store-locked-bar");
            var _0x21820f = $("#store-locked-bar-text");
            var _0x3d9e2b = $("#store-buy-button");
            var _0x37bf59 = $("#store-item-price");
            var _0x4294ff = $("#store-groups");
            var _0x577d3a = $("#store-view-prev");
            var _0x4a5ba4 = $("#store-view-next");
            var _0x17578f = _0x36bffa.M(_0x3819e1.bo, function () {
              _0x3819e1.bo.call(this, _0x36bffa.H("index.game.popup.menu.skins.tab"), true);
              var _0x2215f8 = this;
              var _0x521a42 = _0x4b2cbe();
              this.Ho = null;
              this.Io = [];
              this.Jo = {};
              this.Ko = new _0x3819e1.dm(_0x5dc7ac);
              _0x3d9e2b.click(function () {
                _0x521a42.Ci.Be();
                _0x2215f8.Lo();
              });
              _0x577d3a.click(function () {
                _0x521a42.Ci.Be();
                _0x2215f8.Ho.Mo();
              });
              _0x4a5ba4.click(function () {
                _0x521a42.Ci.Be();
                _0x2215f8.Ho.No();
              });
            });
            _0x17578f.prototype.ha = function () {
              _0x17578f.parent.prototype.ha.call(this);
              var _0xde771c = this;
              var _0x12233e = _0x4b2cbe();
              _0x12233e.Lc.$b(function () {
                var _0x42212a = _0x12233e.Lc.Xb();
                _0xde771c.Io = [];
                for (var _0x44a866 = 0; _0x44a866 < _0x42212a.skinGroupArrayDict.length; _0x44a866++) {
                  _0xde771c.Io.push(new _0x3b77d6(_0xde771c, _0x42212a.skinGroupArrayDict[_0x44a866]));
                }
                _0xde771c.Jo = {};
                for (var _0x12beb0 = 0; _0x12beb0 < _0x42212a.skinArrayDict.length; _0x12beb0++) {
                  var _0x1e0587 = _0x42212a.skinArrayDict[_0x12beb0];
                  _0xde771c.Jo[_0x1e0587.id] = _0x1e0587;
                }
                _0xde771c.Oo();
              });
              this.Po(false);
              _0x12233e.On.zj(function () {
                _0xde771c.Po(false);
              });
            };
            _0x17578f.prototype.qo = function () {
              _0x3819e1.bo.go.stop();
              _0x3819e1.bo.go.fadeOut(50);
              _0x3819e1.bo.ho.stop();
              _0x3819e1.bo.ho.fadeOut(50);
              _0x3819e1.bo.io.stop();
              _0x3819e1.bo.io.fadeOut(50);
              _0x3819e1.bo.ko.stop();
              _0x3819e1.bo.ko.fadeOut(50);
              _0x3819e1.bo.jo.stop();
              _0x3819e1.bo.jo.fadeOut(50);
              _0x3819e1.bo.lo.stop();
              _0x3819e1.bo.lo.fadeIn(200);
              _0x3819e1.bo.mo.stop();
              _0x3819e1.bo.mo.fadeOut(50);
              _0x3819e1.bo.no.stop();
              _0x3819e1.bo.no.fadeOut(50);
              _0x3819e1.bo.oo.stop();
              _0x3819e1.bo.oo.fadeOut(50);
              _0x3819e1.bo.po.stop();
              _0x3819e1.bo.po.fadeOut(50);
            };
            _0x17578f.prototype.Hk = function () {
              _0x4b2cbe().Ci.pe(_0x3819e1.ge.je._e);
              _0x4b2cbe().Ci.Ce();
              this.Oo();
              this.Ko.Kf(true);
            };
            _0x17578f.prototype.Bk = function () {
              this.Ko.Kf(false);
            };
            _0x17578f.prototype.Jf = function () {
              this.Ko.Jf();
            };
            _0x17578f.prototype.Nf = function (_0x4560ed, _0x4f3081) {
              this.Ko.Nf();
            };
            _0x17578f.prototype.Oo = function () {
              var _0x3d1210 = this;
              var _0x32bc86 = this;
              var _0x15a2b2 = _0x4b2cbe();
              _0x4294ff.empty();
              for (var _0x417a26 = 0; _0x417a26 < this.Io.length; _0x417a26++) {
                (function (_0x236150) {
                  var _0x3b2d6f = _0x3d1210.Io[_0x236150];
                  var _0x55f9dd = document.createElement("li");
                  _0x4294ff.append(_0x55f9dd);
                  var _0x5cc0dd = $(_0x55f9dd);
                  if (_0x3b2d6f.To && _0x3b2d6f.To.isCustom) {
                    _0x5cc0dd.css("background-color", "#FFF");
                    _0x5cc0dd.css("color", "#000");
                  }
                  _0x5cc0dd.html(_0x3b2d6f.Qo());
                  _0x5cc0dd.click(function () {
                    _0x15a2b2.Ci.Be();
                    _0x32bc86.Ro(_0x3b2d6f);
                  });
                  _0x3b2d6f.So = _0x5cc0dd;
                })(_0x417a26);
              }
              if (this.Io.length > 0) {
                var _0x589439 = _0x15a2b2.On.rj(_0x3819e1.tj.sj);
                for (var _0x417a26 = 0; _0x417a26 < this.Io.length; _0x417a26++) {
                  var _0x496e31 = this.Io[_0x417a26];
                  for (var _0x33c68f = _0x496e31.To.list, _0x5c8f5a = 0; _0x5c8f5a < _0x33c68f.length; _0x5c8f5a++) {
                    if (_0x33c68f[_0x5c8f5a] == _0x589439) {
                      _0x496e31.Uo = _0x5c8f5a;
                      this.Ro(_0x496e31);
                      return;
                    }
                  }
                }
                this.Ro(this.Io[0]);
              }
            };
            _0x17578f.prototype.Ro = function (_0xecb1d1) {
              var _0x50de9d = _0x4b2cbe();
              if (this.Ho !== _0xecb1d1) {
                this.Ho = _0xecb1d1;
                _0x4294ff.children().removeClass("pressed");
                if (this.Ho.So) {
                  this.Ho.So.addClass("pressed");
                }
                _0x13d113.html("");
                if (_0xecb1d1.To != null) {
                  var _0x2069d3 = _0x50de9d.Lc.Xb().textDict[_0xecb1d1.To.description];
                  if (_0x2069d3 != null) {
                    _0x13d113.html(_0x36bffa.K(_0x36bffa.I(_0x2069d3)));
                  }
                }
                this.Po(true);
              }
            };
            _0x17578f.prototype.Vo = function () {
              if (this.Ho == null) {
                return _0x3819e1.Si.Ui();
              } else {
                return this.Ho.Wo();
              }
            };
            _0x17578f.prototype.Lo = function () {
              var _0x184b42 = this;
              var _0x2e5274 = this.Vo();
              if (_0x2e5274.Wi()) {
                var _0x57fac3 = _0x2e5274.bc();
                _0x184b42.Xo(_0x57fac3);
              }
            };
            _0x17578f.prototype.Xo = function (_0xaaf340) {
              var _0x7f7084 = _0x4b2cbe();
              var _0x2717c9 = _0x7f7084.On.Gj(_0xaaf340, _0x3819e1.tj.sj);
              if (_0x2717c9 != null) {
                var _0x180026 = _0x2717c9.Jj();
                if (!(_0x7f7084.Ij.il() < _0x180026)) {
                  var _0x3aad75 = _0x7f7084.On.rj(_0x3819e1.tj.sj);
                  var _0x1c4f43 = _0x7f7084.On.rj(_0x3819e1.tj.uj);
                  var _0xd6d6b4 = _0x7f7084.On.rj(_0x3819e1.tj.vj);
                  var _0x139738 = _0x7f7084.On.rj(_0x3819e1.tj.xj);
                  var _0x48178c = _0x7f7084.On.rj(_0x3819e1.tj.wj);
                  var _0x2177cb = this.ro(5000);
                  _0x7f7084.Ij.Hl(_0xaaf340, _0x3819e1.tj.sj, function () {
                    _0x2177cb.vo();
                    _0x7f7084.og.Ak(_0x7f7084.og.tk);
                  }, function (_0x24f9ef) {
                    _0x7f7084.Ij.Bl(function () {
                      _0x7f7084.On.Fj(_0x3aad75, _0x3819e1.tj.sj);
                      _0x7f7084.On.Fj(_0x1c4f43, _0x3819e1.tj.uj);
                      _0x7f7084.On.Fj(_0xd6d6b4, _0x3819e1.tj.vj);
                      _0x7f7084.On.Fj(_0x139738, _0x3819e1.tj.xj);
                      _0x7f7084.On.Fj(_0x48178c, _0x3819e1.tj.wj);
                      _0x7f7084.On.Fj(_0xaaf340, _0x3819e1.tj.sj);
                      _0x2177cb.vo();
                    });
                  });
                }
              }
            };
            _0x17578f.prototype.Po = function (_0x45ff54) {
              var _0x526738 = _0x4b2cbe();
              var _0x2f20d4 = _0x526738.On.yj();
              var _0x30bcfc = this.Vo();
              if (_0x30bcfc.Wi()) {
                var _0x2dd0ef = _0x30bcfc.bc();
                var _0x1bd477 = _0x526738.On.Gj(_0x2dd0ef, _0x3819e1.tj.sj);
                var _0x4349de = false;
                var _0x1bd3b8 = _0x526738.On.Cj(_0x2dd0ef, _0x3819e1.tj.sj);
                var _0x58217d = true;
                if (_0x1bd3b8) {
                  _0xf44a85.hide();
                  _0x3d9e2b.hide();
                } else if (_0x1bd477 == null || _0x1bd477.Kj()) {
                  _0x4349de = true;
                  _0xf44a85.show();
                  _0x3d9e2b.hide();
                  _0x21820f.text(_0x36bffa.H("index.game.popup.menu.store.locked"));
                  if (_0x1bd477 != null && _0x1bd477.Kj()) {
                    var _0x4d1790 = _0x526738.Lc.Xb().textDict[_0x1bd477.Em()];
                    if (_0x4d1790 != null) {
                      _0x21820f.text(_0x36bffa.I(_0x4d1790));
                    }
                  }
                } else {
                  _0x58217d = false;
                  _0xf44a85.hide();
                  _0x3d9e2b.show();
                  _0x37bf59.html(_0x1bd477.Jj());
                }
                _0x547fe3.html("");
                var _0x16d2b5 = _0x526738.Lc.Xb().textDict[_0x1bd477.Fm()];
                var _0x33e096 = _0x16d2b5 ? _0x36bffa.K(_0x36bffa.I(_0x16d2b5)) : _0x1bd477.Fm();
                if (_0x1bd477 != null && _0x1bd477.Fm() != null) {
                  _0x547fe3.html(_0x33e096);
                }
                if (_0x58217d && _0x1bd477.Bm !== true) {
                  _0x6236b5.html("<button onclick=\"mbf.mbf_cambiar_add('" + _0x2dd0ef + "', '" + _0x33e096 + "')\">Add</button>");
                } else {
                  _0x6236b5.html("");
                }
                this.Ko.$l(_0x2f20d4.Um(_0x2dd0ef));
                this.Ko.um(_0x4349de);
                if (_0x45ff54) {
                  _0x526738.On.Fj(_0x2dd0ef, _0x3819e1.tj.sj);
                }
              }
            };
            var _0x3b77d6 = function () {
              function _0x7cb2ff(_0x46bd03, _0x55d61a) {
                this.Yo = _0x46bd03;
                this.Uo = 0;
                this.To = _0x55d61a;
              }
              _0x7cb2ff.prototype.Mo = function () {
                if (--this.Uo < 0) {
                  this.Uo = this.To.list.length - 1;
                }
                this.Yo.Po(true);
              };
              _0x7cb2ff.prototype.No = function () {
                if (++this.Uo >= this.To.list.length) {
                  this.Uo = 0;
                }
                this.Yo.Po(true);
              };
              _0x7cb2ff.prototype.Qo = function () {
                if (this.To.img) {
                  var _0x2a481e = _0x4b2cbe().Lc.Xb().customPaths;
                  var _0x415f7a = URL_CDN + "/images/" + _0x2a481e.texture;
                  var _0x53aab1 = [];
                  try {
                    _0x53aab1.push("background-image:url('" + _0x415f7a + "')");
                    _0x53aab1.push("background-position: -" + _0x2a481e.map[this.To.img].x + "px -" + _0x2a481e.map[this.To.img].y + "px");
                    _0x53aab1.push("background-repeat:no-repeat");
                    _0x53aab1.push("width: 180px");
                    _0x53aab1.push("height: 40px");
                  } catch (_0x46923f) {
                    console.error(_0x415f7a, _0x46923f);
                  }
                  return "<div id=\"" + this.To.id + "\" style=\"" + _0x53aab1.join(";") + "\"></div>";
                }
                return _0x36bffa.I(this.To.name);
              };
              _0x7cb2ff.prototype.Wo = function () {
                if (this.Uo >= this.To.list.length) {
                  return _0x3819e1.Si.Ui();
                } else {
                  return _0x3819e1.Si.Vi(this.To.list[this.Uo]);
                }
              };
              return _0x7cb2ff;
            }();
            return _0x17578f;
          }();
          _0x3819e1.lk = function () {
            var _0x4ffae5 = $("#store-go-coins-button");
            var _0xeb672c = $("#store-go-skins-button");
            var _0x309dfe = $("#store-go-wear-button");
            var _0x5a8344 = _0x36bffa.M(_0x3819e1.bo, function () {
              _0x3819e1.bo.call(this, _0x36bffa.H("index.game.popup.menu.store.tab"), true);
              var _0x26979a = _0x4b2cbe();
              _0x4ffae5.click(function () {
                _0x26979a.Ci.Be();
                _0x26979a.og.Ak(_0x26979a.og._j);
              });
              _0xeb672c.click(function () {
                _0x26979a.Ci.Be();
                _0x26979a.og.Ak(_0x26979a.og.ik);
              });
              _0x309dfe.click(function () {
                _0x26979a.Ci.Be();
                _0x26979a.og.Ak(_0x26979a.og.mk);
              });
            });
            _0x5a8344.prototype.ha = function () {
              _0x5a8344.parent.prototype.ha.call(this);
            };
            _0x5a8344.prototype.qo = function () {
              _0x3819e1.bo.go.stop();
              _0x3819e1.bo.go.fadeOut(50);
              _0x3819e1.bo.ho.stop();
              _0x3819e1.bo.ho.fadeOut(50);
              _0x3819e1.bo.io.stop();
              _0x3819e1.bo.io.fadeOut(50);
              _0x3819e1.bo.ko.stop();
              _0x3819e1.bo.ko.fadeOut(50);
              _0x3819e1.bo.jo.stop();
              _0x3819e1.bo.jo.fadeOut(50);
              _0x3819e1.bo.lo.stop();
              _0x3819e1.bo.lo.fadeOut(50);
              _0x3819e1.bo.mo.stop();
              _0x3819e1.bo.mo.fadeIn(200);
              _0x3819e1.bo.no.stop();
              _0x3819e1.bo.no.fadeOut(50);
              _0x3819e1.bo.oo.stop();
              _0x3819e1.bo.oo.fadeOut(50);
              _0x3819e1.bo.po.stop();
              _0x3819e1.bo.po.fadeOut(50);
            };
            _0x5a8344.prototype.Hk = function () {
              _0x4b2cbe().Ci.Ce();
            };
            return _0x5a8344;
          }();
          _0x3819e1.nk = function () {
            var _0x902deb = $("#wear-view-canv");
            var _0x2f6a63 = $("#wear-description-text");
            var _0x222a78 = $("#wear-locked-bar");
            var _0x5459a3 = $("#wear-locked-bar-text");
            var _0x4336b7 = $("#wear-buy-button");
            var _0x34d1b4 = $("#wear-item-price");
            var _0x5f0aac = $("#wear-eyes-button");
            var _0x3d8da2 = $("#wear-mouths-button");
            var _0x3bd0d1 = $("#wear-glasses-button");
            var _0x535695 = $("#wear-hats-button");
            var _0x58ed6b = $("#wear-tint-chooser");
            var _0x362e5d = $("#wear-view-prev");
            var _0x1b4768 = $("#wear-view-next");
            var _0x3c2c8d = _0x36bffa.M(_0x3819e1.bo, function () {
              var _0x3bce9f = this;
              _0x3819e1.bo.call(this, _0x36bffa.H("index.game.popup.menu.wear.tab"), true);
              var _0x5f5b89 = _0x4b2cbe();
              var _0x3625d5 = this;
              this.Zo = [];
              this.uj = new _0x356434(this, _0x3819e1.tj.uj, _0x5f0aac);
              this.vj = new _0x356434(this, _0x3819e1.tj.vj, _0x3d8da2);
              this.xj = new _0x356434(this, _0x3819e1.tj.xj, _0x3bd0d1);
              this.wj = new _0x356434(this, _0x3819e1.tj.wj, _0x535695);
              this.$o = null;
              this._o = null;
              this.ap = null;
              this.bp = null;
              this.cp = null;
              this.dp = null;
              this.Ko = new _0x3819e1.dm(_0x902deb);
              _0x4336b7.click(function () {
                _0x5f5b89.Ci.Be();
                _0x3625d5.ep();
              });
              _0x362e5d.click(function () {
                _0x5f5b89.Ci.Be();
                _0x3625d5.$o.fp();
              });
              _0x1b4768.click(function () {
                _0x5f5b89.Ci.Be();
                _0x3625d5.$o.gp();
              });
              _0x5f0aac.click(function () {
                _0x5f5b89.Ci.Be();
                _0x3625d5.hp(_0x3bce9f.uj);
              });
              _0x3d8da2.click(function () {
                _0x5f5b89.Ci.Be();
                _0x3625d5.hp(_0x3bce9f.vj);
              });
              _0x3bd0d1.click(function () {
                _0x5f5b89.Ci.Be();
                _0x3625d5.hp(_0x3bce9f.xj);
              });
              _0x535695.click(function () {
                _0x5f5b89.Ci.Be();
                _0x3625d5.hp(_0x3bce9f.wj);
              });
              this.Zo.push(this.uj);
              this.Zo.push(this.vj);
              this.Zo.push(this.xj);
              this.Zo.push(this.wj);
            });
            _0x3c2c8d.prototype.ha = function () {
              _0x3c2c8d.parent.prototype.ha.call(this);
              var _0x876506 = _0x4b2cbe();
              var _0x42e708 = this;
              _0x876506.Lc.$b(function () {
                var _0x255a37 = _0x876506.Lc.Xb();
                _0x42e708._o = _0x255a37.eyesDict;
                _0x42e708.ap = _0x255a37.mouthDict;
                _0x42e708.bp = _0x255a37.glassesDict;
                _0x42e708.cp = _0x255a37.hatDict;
                _0x42e708.dp = _0x255a37.colorDict;
                _0x42e708.uj.ip(_0x255a37.eyesVariantArray);
                _0x42e708.uj.jp(_0x42e708._o);
                _0x42e708.vj.ip(_0x255a37.mouthVariantArray);
                _0x42e708.vj.jp(_0x42e708.ap);
                _0x42e708.xj.ip(_0x255a37.glassesVariantArray);
                _0x42e708.xj.jp(_0x42e708.bp);
                _0x42e708.wj.ip(_0x255a37.hatVariantArray);
                _0x42e708.wj.jp(_0x42e708.cp);
              });
              this.Po(false);
              _0x876506.On.zj(function () {
                _0x42e708.Po(false);
              });
            };
            _0x3c2c8d.prototype.qo = function () {
              _0x3819e1.bo.go.stop();
              _0x3819e1.bo.go.fadeOut(50);
              _0x3819e1.bo.ho.stop();
              _0x3819e1.bo.ho.fadeOut(50);
              _0x3819e1.bo.io.stop();
              _0x3819e1.bo.io.fadeOut(50);
              _0x3819e1.bo.ko.stop();
              _0x3819e1.bo.ko.fadeOut(50);
              _0x3819e1.bo.jo.stop();
              _0x3819e1.bo.jo.fadeOut(50);
              _0x3819e1.bo.lo.stop();
              _0x3819e1.bo.lo.fadeOut(50);
              _0x3819e1.bo.mo.stop();
              _0x3819e1.bo.mo.fadeOut(50);
              _0x3819e1.bo.no.stop();
              _0x3819e1.bo.no.fadeIn(200);
              _0x3819e1.bo.oo.stop();
              _0x3819e1.bo.oo.fadeOut(50);
              _0x3819e1.bo.po.stop();
              _0x3819e1.bo.po.fadeOut(50);
            };
            _0x3c2c8d.prototype.Hk = function () {
              _0x4b2cbe().Ci.pe(_0x3819e1.ge.je._e);
              _0x4b2cbe().Ci.Ce();
              this.hp(this.$o ?? this.uj);
              this.Ko.Kf(true);
            };
            _0x3c2c8d.prototype.Bk = function () {
              this.Ko.Kf(false);
            };
            _0x3c2c8d.prototype.Jf = function () {
              this.Ko.Jf();
            };
            _0x3c2c8d.prototype.Nf = function (_0x47d3a3, _0x1dce97) {
              this.Ko.Nf();
            };
            _0x3c2c8d.prototype.hp = function (_0x1ed9ec) {
              this.$o = _0x1ed9ec;
              for (var _0x4f5c5b = 0; _0x4f5c5b < this.Zo.length; _0x4f5c5b++) {
                this.Zo[_0x4f5c5b].Ao.removeClass("pressed");
              }
              this.$o.Ao.addClass("pressed");
              this.$o.Gk();
            };
            _0x3c2c8d.prototype.kp = function () {
              if (this.$o == null) {
                return _0x3819e1.Si.Ui();
              } else {
                return _0x3819e1.Si.Vi({
                  ae: this.$o.Wo(),
                  nd: this.$o.nd
                });
              }
            };
            _0x3c2c8d.prototype.ep = function () {
              var _0x4c4ea1 = this;
              var _0x381a40 = this.kp();
              if (_0x381a40.Wi()) {
                var _0x3471f0 = _0x381a40.bc();
                _0x4c4ea1.lp(_0x3471f0.ae, _0x3471f0.nd);
              }
            };
            _0x3c2c8d.prototype.lp = function (_0x31c0fe, _0x14a29c) {
              var _0x155539 = _0x4b2cbe();
              var _0x5b2241 = _0x155539.On.Gj(_0x31c0fe, _0x14a29c);
              if (_0x5b2241 != null) {
                var _0x11c204 = _0x5b2241.Jj();
                if (!(_0x155539.Ij.il() < _0x11c204)) {
                  var _0x12decd = _0x155539.On.rj(_0x3819e1.tj.sj);
                  var _0x2fa7ec = _0x155539.On.rj(_0x3819e1.tj.uj);
                  var _0x11baf4 = _0x155539.On.rj(_0x3819e1.tj.vj);
                  var _0x57eb67 = _0x155539.On.rj(_0x3819e1.tj.xj);
                  var _0x51097c = _0x155539.On.rj(_0x3819e1.tj.wj);
                  var _0x5b2d21 = this.ro(5000);
                  _0x155539.Ij.Hl(_0x31c0fe, _0x14a29c, function () {
                    _0x5b2d21.vo();
                    _0x155539.og.Ak(_0x155539.og.tk);
                  }, function (_0x3e3c2e) {
                    _0x155539.Ij.Bl(function () {
                      _0x155539.On.Fj(_0x12decd, _0x3819e1.tj.sj);
                      _0x155539.On.Fj(_0x2fa7ec, _0x3819e1.tj.uj);
                      _0x155539.On.Fj(_0x11baf4, _0x3819e1.tj.vj);
                      _0x155539.On.Fj(_0x57eb67, _0x3819e1.tj.xj);
                      _0x155539.On.Fj(_0x51097c, _0x3819e1.tj.wj);
                      _0x155539.On.Fj(_0x31c0fe, _0x14a29c);
                      _0x5b2d21.vo();
                    });
                  });
                }
              }
            };
            _0x3c2c8d.prototype.Po = function (_0x2644e9) {
              var _0x798f42 = _0x4b2cbe();
              var _0x4075f9 = _0x798f42.On.yj();
              var _0x1382fd = this.kp();
              if (_0x1382fd.Wi()) {
                var _0x2763fa = _0x1382fd.bc();
                var _0x1d4cb6 = _0x798f42.On.Gj(_0x2763fa.ae, _0x2763fa.nd);
                var _0x1dfd7b = false;
                if (_0x798f42.On.Cj(_0x2763fa.ae, _0x2763fa.nd)) {
                  _0x222a78.hide();
                  _0x4336b7.hide();
                } else if (_0x1d4cb6 == null || _0x1d4cb6.Kj()) {
                  _0x1dfd7b = true;
                  _0x222a78.show();
                  _0x4336b7.hide();
                  _0x5459a3.text(_0x36bffa.H("index.game.popup.menu.store.locked"));
                  if (_0x1d4cb6 != null && _0x1d4cb6.Kj()) {
                    var _0x787c2a = _0x798f42.Lc.Xb().textDict[_0x1d4cb6.Em()];
                    if (_0x787c2a != null) {
                      _0x5459a3.text(_0x36bffa.I(_0x787c2a));
                    }
                  }
                } else {
                  _0x222a78.hide();
                  _0x4336b7.show();
                  _0x34d1b4.html(_0x1d4cb6.Jj());
                }
                _0x2f6a63.html("");
                if (_0x1d4cb6 != null && _0x1d4cb6.Fm() != null) {
                  var _0x4f0404 = _0x798f42.Lc.Xb().textDict[_0x1d4cb6.Fm()];
                  if (_0x4f0404 != null) {
                    _0x2f6a63.html(_0x36bffa.K(_0x36bffa.I(_0x4f0404)));
                  }
                }
                var _0x3d48ec = this.Ko;
                switch (_0x2763fa.nd) {
                  case _0x3819e1.tj.uj:
                    _0x3d48ec.$l(_0x4075f9.Vm(_0x2763fa.ae));
                    _0x3d48ec.vm(_0x1dfd7b);
                    break;
                  case _0x3819e1.tj.vj:
                    _0x3d48ec.$l(_0x4075f9.Wm(_0x2763fa.ae));
                    _0x3d48ec.wm(_0x1dfd7b);
                    break;
                  case _0x3819e1.tj.xj:
                    _0x3d48ec.$l(_0x4075f9.Ym(_0x2763fa.ae));
                    _0x3d48ec.ym(_0x1dfd7b);
                    break;
                  case _0x3819e1.tj.wj:
                    _0x3d48ec.$l(_0x4075f9.Xm(_0x2763fa.ae));
                    _0x3d48ec.xm(_0x1dfd7b);
                }
                if (_0x2644e9) {
                  _0x798f42.On.Fj(_0x2763fa.ae, _0x2763fa.nd);
                }
              }
            };
            var _0x356434 = function () {
              function _0x7a30ed(_0x35be1c, _0x56c05d, _0x249629) {
                this.Yo = _0x35be1c;
                this.nd = _0x56c05d;
                this.Ao = _0x249629;
                this.ac = {};
                this.mp = [[]];
                this.np = -10;
                this.op = -10;
              }
              _0x7a30ed.prototype.ip = function (_0x1ed990) {
                this.mp = _0x1ed990;
              };
              _0x7a30ed.prototype.jp = function (_0x1f3a41) {
                this.ac = _0x1f3a41;
              };
              _0x7a30ed.prototype.Gk = function () {
                var _0x3c486c = _0x4b2cbe();
                var _0x1ea331 = _0x3c486c.On.rj(this.nd);
                for (var _0x2ab6b6 = 0; _0x2ab6b6 < this.mp.length; _0x2ab6b6++) {
                  for (var _0x2a45d9 = 0; _0x2a45d9 < this.mp[_0x2ab6b6].length; _0x2a45d9++) {
                    if (this.mp[_0x2ab6b6][_0x2a45d9] == _0x1ea331) {
                      this.pp(_0x2ab6b6);
                      this.qp(_0x2a45d9);
                      return;
                    }
                  }
                }
                this.pp(0);
                this.qp(0);
              };
              _0x7a30ed.prototype.fp = function () {
                var _0x2cf4a9 = this.np - 1;
                if (_0x2cf4a9 < 0) {
                  _0x2cf4a9 = this.mp.length - 1;
                }
                this.pp(_0x2cf4a9);
                this.qp(this.op % this.mp[_0x2cf4a9].length);
              };
              _0x7a30ed.prototype.gp = function () {
                var _0x43c7eb = this.np + 1;
                if (_0x43c7eb >= this.mp.length) {
                  _0x43c7eb = 0;
                }
                this.pp(_0x43c7eb);
                this.qp(this.op % this.mp[_0x43c7eb].length);
              };
              _0x7a30ed.prototype.pp = function (_0x24208) {
                var _0xbf5b26 = this;
                if (!(_0x24208 < 0) && !(_0x24208 >= this.mp.length)) {
                  this.np = _0x24208;
                  _0x58ed6b.empty();
                  var _0x2aebf2 = this.mp[this.np];
                  if (_0x2aebf2.length > 1) {
                    for (var _0xd54cdc = 0; _0xd54cdc < _0x2aebf2.length; _0xd54cdc++) {
                      (function (_0x1d2434) {
                        var _0x554910 = _0x2aebf2[_0x1d2434];
                        var _0x4902bd = _0xbf5b26.ac[_0x554910];
                        var _0xa79893 = "#" + _0xbf5b26.Yo.dp[_0x4902bd.prime];
                        var _0x140b3b = $("<div style=\"border-color:" + _0xa79893 + "\"></div>");
                        _0x140b3b.click(function () {
                          _0x4b2cbe().Ci.Be();
                          _0xbf5b26.qp(_0x1d2434);
                        });
                        _0x58ed6b.append(_0x140b3b);
                      })(_0xd54cdc);
                    }
                  }
                }
              };
              _0x7a30ed.prototype.qp = function (_0x3656a5) {
                if (!(_0x3656a5 < 0) && !(_0x3656a5 >= this.mp[this.np].length)) {
                  this.op = _0x3656a5;
                  _0x58ed6b.children().css("background-color", "transparent");
                  var _0x23885c = _0x58ed6b.children(":nth-child(" + (1 + _0x3656a5) + ")");
                  _0x23885c.css("background-color", _0x23885c.css("border-color"));
                  this.Yo.Po(true);
                }
              };
              _0x7a30ed.prototype.Wo = function () {
                return this.mp[this.np][this.op];
              };
              return _0x7a30ed;
            }();
            return _0x3c2c8d;
          }();
          _0x3819e1.Yj = function () {
            var _0x48d382 = $("#withdraw-consent-yes");
            var _0x4ccabe = $("#withdraw-consent-no");
            var _0x162250 = _0x36bffa.M(_0x3819e1.bo, function () {
              _0x3819e1.bo.call(this, _0x36bffa.H("index.game.popup.menu.consent.tab"), false);
              var _0x34030a = _0x4b2cbe();
              _0x48d382.click(function () {
                _0x34030a.Ci.Be();
                if (_0x34030a.Go()) {
                  _0x34030a.og.Ak(_0x34030a.og._e);
                  _0x34030a.rp(false, true);
                  _0x34030a.og.qk._n(new _0x3819e1.sp());
                } else {
                  _0x34030a.og.Dk();
                }
              });
              _0x4ccabe.click(function () {
                _0x34030a.Ci.Be();
                _0x34030a.og.Dk();
              });
            });
            _0x162250.prototype.ha = function () {
              _0x162250.parent.prototype.ha.call(this);
            };
            _0x162250.prototype.qo = function () {
              _0x3819e1.bo.go.stop();
              _0x3819e1.bo.go.fadeOut(50);
              _0x3819e1.bo.ho.stop();
              _0x3819e1.bo.ho.fadeOut(50);
              _0x3819e1.bo.io.stop();
              _0x3819e1.bo.io.fadeOut(50);
              _0x3819e1.bo.ko.stop();
              _0x3819e1.bo.ko.fadeOut(50);
              _0x3819e1.bo.jo.stop();
              _0x3819e1.bo.jo.fadeOut(50);
              _0x3819e1.bo.lo.stop();
              _0x3819e1.bo.lo.fadeOut(50);
              _0x3819e1.bo.mo.stop();
              _0x3819e1.bo.mo.fadeOut(50);
              _0x3819e1.bo.no.stop();
              _0x3819e1.bo.no.fadeOut(50);
              _0x3819e1.bo.oo.stop();
              _0x3819e1.bo.oo.fadeIn(200);
              _0x3819e1.bo.po.stop();
              _0x3819e1.bo.po.fadeOut(50);
            };
            _0x162250.prototype.Hk = function () {
              _0x4b2cbe().Ci.Ce();
            };
            return _0x162250;
          }();
          _0x3819e1.$j = function () {
            var _0x5a221e = $("#delete-account-timer");
            var _0x5365ed = $("#delete-account-yes");
            var _0xe0be6f = $("#delete-account-no");
            var _0x242f19 = _0x36bffa.M(_0x3819e1.bo, function () {
              _0x3819e1.bo.call(this, _0x36bffa.H("index.game.popup.menu.delete.tab"), false);
              var _0xf76f73 = _0x4b2cbe();
              _0x5365ed.click(function () {
                _0xf76f73.Ci.Be();
                if (_0xf76f73.Ij.Hj()) {
                  _0xf76f73.Ij.Sl();
                  _0xf76f73.Ij.Kl();
                } else {
                  _0xf76f73.og.Dk();
                }
              });
              _0xe0be6f.click(function () {
                _0xf76f73.Ci.Be();
                _0xf76f73.og.Dk();
              });
              this.tp = [];
            });
            _0x242f19.prototype.ha = function () {
              _0x242f19.parent.prototype.ha.call(this);
            };
            _0x242f19.prototype.qo = function () {
              _0x3819e1.bo.go.stop();
              _0x3819e1.bo.go.fadeOut(50);
              _0x3819e1.bo.ho.stop();
              _0x3819e1.bo.ho.fadeOut(50);
              _0x3819e1.bo.io.stop();
              _0x3819e1.bo.io.fadeOut(50);
              _0x3819e1.bo.ko.stop();
              _0x3819e1.bo.ko.fadeOut(50);
              _0x3819e1.bo.jo.stop();
              _0x3819e1.bo.jo.fadeOut(50);
              _0x3819e1.bo.lo.stop();
              _0x3819e1.bo.lo.fadeOut(50);
              _0x3819e1.bo.mo.stop();
              _0x3819e1.bo.mo.fadeOut(50);
              _0x3819e1.bo.no.stop();
              _0x3819e1.bo.no.fadeOut(50);
              _0x3819e1.bo.oo.stop();
              _0x3819e1.bo.oo.fadeOut(50);
              _0x3819e1.bo.po.stop();
              _0x3819e1.bo.po.fadeIn(200);
            };
            _0x242f19.prototype.Hk = function () {
              _0x4b2cbe().Ci.Ge();
              _0x5365ed.stop();
              _0x5365ed.hide();
              _0x5a221e.stop();
              _0x5a221e.show();
              _0x5a221e.text(".. 10 ..");
              this.up();
              this.vp(function () {
                _0x5a221e.text(".. 9 ..");
              }, 1000);
              this.vp(function () {
                _0x5a221e.text(".. 8 ..");
              }, 2000);
              this.vp(function () {
                _0x5a221e.text(".. 7 ..");
              }, 3000);
              this.vp(function () {
                _0x5a221e.text(".. 6 ..");
              }, 4000);
              this.vp(function () {
                _0x5a221e.text(".. 5 ..");
              }, 5000);
              this.vp(function () {
                _0x5a221e.text(".. 4 ..");
              }, 6000);
              this.vp(function () {
                _0x5a221e.text(".. 3 ..");
              }, 7000);
              this.vp(function () {
                _0x5a221e.text(".. 2 ..");
              }, 8000);
              this.vp(function () {
                _0x5a221e.text(".. 1 ..");
              }, 9000);
              this.vp(function () {
                _0x5a221e.hide();
                _0x5365ed.fadeIn(300);
              }, 10000);
            };
            _0x242f19.prototype.vp = function (_0xce7b69, _0x52789c) {
              var _0x4238c9 = setTimeout(_0xce7b69, _0x52789c);
              this.tp.push(_0x4238c9);
            };
            _0x242f19.prototype.up = function () {
              for (var _0x4a19e1 = 0; _0x4a19e1 < this.tp.length; _0x4a19e1++) {
                clearTimeout(this.tp[_0x4a19e1]);
              }
              this.tp = [];
            };
            return _0x242f19;
          }();
          _0x3819e1.wp = function () {
            function _0x320177() {
              this.ao = function () {};
            }
            _0x320177.prototype.tf = function () {};
            _0x320177.prototype.Hk = function () {};
            return _0x320177;
          }();
          _0x3819e1.Gl = function () {
            var _0x20d858 = _0x36bffa.M(_0x3819e1.wp, function (_0x40bde6) {
              _0x3819e1.wp.call(this);
              var _0x3ecc0f = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + _0x3ecc0f + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x40bde6 + "</div>    <div class=\"toaster-coins-close\">" + _0x36bffa.H("index.game.toaster.continue") + "</div></div>");
              var _0x6c2ec2 = this;
              this.xp.find(".toaster-coins-close").click(function () {
                _0x4b2cbe().Ci.Be();
                _0x6c2ec2.ao();
              });
            });
            _0x20d858.prototype.tf = function () {
              return this.xp;
            };
            _0x20d858.prototype.Hk = function () {
              _0x4b2cbe().Ci.Ee();
            };
            return _0x20d858;
          }();
          _0x3819e1.Fl = function () {
            var _0x58094e = _0x36bffa.M(_0x3819e1.wp, function (_0x326468) {
              _0x3819e1.wp.call(this);
              var _0x3655bc = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + _0x3655bc + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x326468 + "</div>    <div class=\"toaster-levelup-text\">" + _0x36bffa.H("index.game.toaster.levelup") + "</div>    <div class=\"toaster-levelup-close\">" + _0x36bffa.H("index.game.toaster.continue") + "</div></div>");
              var _0x2de71e = this;
              this.xp.find(".toaster-levelup-close").click(function () {
                _0x4b2cbe().Ci.Be();
                _0x2de71e.ao();
              });
            });
            _0x58094e.prototype.tf = function () {
              return this.xp;
            };
            _0x58094e.prototype.Hk = function () {
              _0x4b2cbe().Ci.De();
            };
            return _0x58094e;
          }();
          _0x3819e1.sp = function () {
            var _0x3bc06b = _0x36bffa.M(_0x3819e1.wp, function () {
              _0x3819e1.wp.call(this);
              var _0x21b290 = this;
              var _0x44f421 = _0x4b2cbe();
              var _0x3e8880 = Date.now() + "_" + Math.floor(1000 + Math.random() * 8999);
              this.xp = $("<div id=\"" + _0x3e8880 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + _0x36bffa.a.d + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + _0x36bffa.H("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + _0x36bffa.H("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + _0x36bffa.H("index.game.toaster.consent.iAccept") + "</div></div>");
              this.yp = this.xp.find(".toaster-consent-close");
              this.yp.hide();
              this.yp.click(function () {
                _0x44f421.Ci.Be();
                if (_0x44f421.Go()) {
                  _0x44f421.rp(true, true);
                }
                _0x21b290.ao();
              });
            });
            _0x3bc06b.prototype.tf = function () {
              return this.xp;
            };
            _0x3bc06b.prototype.Hk = function () {
              var _0x320a61 = this;
              var _0x1daeb6 = _0x4b2cbe();
              if (_0x1daeb6.Go() && !_0x1daeb6.hl()) {
                _0x1daeb6.Ci.Ge();
                setTimeout(function () {
                  _0x320a61.yp.fadeIn(300);
                }, 2000);
              } else {
                setTimeout(function () {
                  _0x320a61.ao();
                }, 0);
              }
            };
            return _0x3bc06b;
          }();
          _0x3819e1.uk = function () {
            var _0x71ba7c = $("#error-gateway-connection-retry");
            var _0x52d8be = _0x36bffa.M(_0x3819e1.kf, function () {
              _0x3819e1.kf.call(this, _0x3819e1.Fk.wn);
              var _0x453788 = _0x4b2cbe();
              _0x71ba7c.click(function () {
                _0x453788.Ci.Be();
                _0x453788.og.ie.Mn();
                _0x453788.og.Ak(_0x453788.og.ie);
                setTimeout(function () {
                  var _0x186c7e = _0x36bffa.a.b + "/pub/healthCheck/ping";
                  _0x36bffa.Z(_0x186c7e, function () {
                    _0x453788.og.Ak(_0x453788.og.tk);
                  }, function (_0x1862dd) {
                    _0x453788.og.ie.Kn();
                    _0x453788.Lc.Ib(function () {
                      _0x453788.og.Ak(_0x453788.og._e);
                    }, function (_0x12a05a) {
                      _0x453788.og.Ak(_0x453788.og.tk);
                    }, function (_0x4dd4f6, _0x2fea26) {
                      var _0x2e3b65 = _0x4dd4f6;
                      _0x453788.og.ie.Ln(_0x2e3b65, _0x2fea26);
                    });
                  });
                }, 2000);
              });
            });
            _0x52d8be.prototype.ha = function () {};
            _0x52d8be.prototype.Gk = function () {
              _0x3819e1.kf.jn.stop();
              _0x3819e1.kf.jn.fadeOut(50);
              _0x3819e1.kf.ln.stop();
              _0x3819e1.kf.ln.fadeOut(50);
              _0x3819e1.kf.nn.stop();
              _0x3819e1.kf.nn.fadeOut(50);
              _0x3819e1.kf.pn.stop();
              _0x3819e1.kf.pn.fadeOut(50);
              _0x3819e1.kf.sn.stop();
              _0x3819e1.kf.sn.fadeOut(50);
              _0x3819e1.kf.qn.stop();
              _0x3819e1.kf.qn.fadeOut(50);
              _0x3819e1.kf.rn.stop();
              _0x3819e1.kf.rn.fadeOut(50);
              _0x3819e1.kf.tn.stop();
              _0x3819e1.kf.tn.fadeIn(500);
              _0x3819e1.kf.un_error.stop();
              _0x3819e1.kf.un_error.fadeOut(50);
              _0x3819e1.kf.mn.stop();
              _0x3819e1.kf.mn.fadeIn(1);
              _0x3819e1.kf.bgcanvas.stop();
              _0x3819e1.kf.bgcanvas.fadeIn(500);
              _0x3819e1.GameView.Kf(true);
              _0x3819e1.kf.socialButtons.stop();
              _0x3819e1.kf.socialButtons.fadeOut(50);
              _0x3819e1.kf.vn.stop();
              _0x3819e1.kf.vn.fadeOut(50);
            };
            _0x52d8be.prototype.Hk = function () {
              var _0x224deb = _0x4b2cbe();
              _0x224deb.Ci.pe(_0x3819e1.ge.je._e);
              _0x224deb.Ci.Ge();
            };
            return _0x52d8be;
          }();
          _0x3819e1.wk = function () {
            var _0x4ab265 = $("#error-game-connection-retry");
            var _0x58899e = _0x36bffa.M(_0x3819e1.kf, function () {
              _0x3819e1.kf.call(this, _0x3819e1.Fk.wn);
              var _0x2f28c9 = _0x4b2cbe();
              _0x4ab265.click(function () {
                _0x2f28c9.Ci.Be();
                _0x2f28c9.og.Ak(_0x2f28c9.og._e);
              });
            });
            _0x58899e.prototype.ha = function () {};
            _0x58899e.prototype.Gk = function () {
              _0x3819e1.kf.jn.stop();
              _0x3819e1.kf.jn.fadeOut(50);
              _0x3819e1.kf.ln.stop();
              _0x3819e1.kf.ln.fadeOut(50);
              _0x3819e1.kf.nn.stop();
              _0x3819e1.kf.nn.fadeOut(50);
              _0x3819e1.kf.pn.stop();
              _0x3819e1.kf.pn.fadeOut(50);
              _0x3819e1.kf.sn.stop();
              _0x3819e1.kf.sn.fadeOut(50);
              _0x3819e1.kf.qn.stop();
              _0x3819e1.kf.qn.fadeOut(50);
              _0x3819e1.kf.rn.stop();
              _0x3819e1.kf.rn.fadeOut(50);
              _0x3819e1.kf.tn.stop();
              _0x3819e1.kf.tn.fadeOut(50);
              _0x3819e1.kf.un_error.stop();
              _0x3819e1.kf.un_error.fadeIn(500);
              _0x3819e1.kf.mn.stop();
              _0x3819e1.kf.mn.fadeIn(1);
              _0x3819e1.kf.bgcanvas.stop();
              _0x3819e1.kf.bgcanvas.fadeIn(500);
              _0x3819e1.GameView.Kf(true);
              _0x3819e1.kf.socialButtons.stop();
              _0x3819e1.kf.socialButtons.fadeOut(50);
              _0x3819e1.kf.vn.stop();
              _0x3819e1.kf.vn.fadeOut(50);
            };
            _0x58899e.prototype.Hk = function () {
              var _0x4a8188 = _0x4b2cbe();
              _0x4a8188.Ci.pe(_0x3819e1.ge.je._e);
              _0x4a8188.Ci.Ge();
            };
            return _0x58899e;
          }();
          _0x36bffa.zp = function () {
            function _0x9e5e38(_0x265690) {
              var _0x3e4d40 = _0x265690 + Math.floor(Math.random() * 65535) * 37;
              _0x3819e1.Vf.eg(_0x3819e1.Vf.cg, _0x3e4d40, 30);
            }
            function _0x2b6e21() {
              return parseInt(_0x3819e1.Vf.fg(_0x3819e1.Vf.cg)) % 37;
            }
            return function () {
              var _0x2a98fd = _0x2b6e21();
              if (!(_0x2a98fd >= 0) || !(_0x2a98fd < _0x3dbc31.Ap)) {
                _0x2a98fd = Math.max(0, _0x3dbc31.Ap - 2);
              }
              var _0x5d5740 = {
                zn: _0x3dbc31,
                Bp: false
              };
              _0x5d5740.Cp = Date.now();
              _0x5d5740.Dp = 0;
              _0x5d5740.Ep = 0;
              _0x5d5740.Fp = null;
              _0x5d5740.Gp = _0x36bffa.a.j;
              _0x5d5740.Hp = _0x36bffa.a.i;
              _0x5d5740.dh = null;
              _0x5d5740.Lc = null;
              _0x5d5740.xe = null;
              _0x5d5740.Ci = null;
              _0x5d5740.og = null;
              _0x5d5740.On = null;
              _0x5d5740.Ij = null;
              try {
                if (navigator && navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(function (_0x537fdd) {
                    if (_0x537fdd.coords !== undefined) {
                      var _0xa376ff = _0x537fdd.coords;
                      if (_0xa376ff.latitude !== undefined && _0xa376ff.longitude !== undefined) {
                        _0x5d5740.Fp = _0x537fdd;
                      }
                    }
                  }, function (_0x575880) {});
                }
              } catch (_0x19c1ee) {}
              _0x5d5740.Ip = function () {
                _0x5d5740.dh = new _0x3819e1.Engine();
                _0x5d5740.dh.Kp = new _0x3819e1.MessageProcessor(_0x5d5740.dh);
                _0x5d5740.Lc = new _0x3819e1._a();
                _0x5d5740.xe = new _0x3819e1.Qj();
                _0x5d5740.Ci = new _0x3819e1.ge();
                _0x5d5740.og = new _0x3819e1.Tj();
                _0x5d5740.On = new _0x3819e1.kj();
                _0x5d5740.Ij = new _0x3819e1.Mk();
                _0x5d5740.ha();
              };
              _0x5d5740.ha = function () {
                try {
                  ga("send", "event", "app", window.runtimeHash + "_init");
                } catch (_0xb0f7b7) {}
                _0x5d5740.dh.Lp = function () {
                  _0x5d5740.og.Ak(_0x5d5740.og.vk);
                };
                _0x5d5740.dh.Mp = function () {
                  var _0x2b8b2c = _0x5d5740.og._e.Wn();
                  try {
                    ga("send", "event", "game", window.runtimeHash + "_start", _0x2b8b2c);
                  } catch (_0x46be3c) {}
                  _0x5d5740.Ci.pe(_0x3819e1.ge.je.af);
                  _0x5d5740.og.Ak(_0x5d5740.og.af.Dn());
                };
                _0x5d5740.dh.Np = function () {
                  try {
                    ga("send", "event", "game", window.runtimeHash + "_end");
                  } catch (_0x3b959a) {}
                  if ($("body").height() >= 430) {
                    _0x5d5740.zn.Op.ka();
                  }
                  _0x5d5740.Lc.Ib(null, null, null);
                  (function () {
                    var _0x87a60e = Math.floor(_0x5d5740.dh.ch.Bh);
                    var _0x4d5b27 = _0x5d5740.dh.Ih;
                    if (_0x5d5740.Ij.Hj()) {
                      _0x5d5740.Ij.Bl(function () {
                        _0x5d5740.Pp(_0x87a60e, _0x4d5b27);
                      });
                    } else {
                      _0x5d5740.Pp(_0x87a60e, _0x4d5b27);
                    }
                  })();
                };
                _0x5d5740.dh.Qp = function (_0x1f9cfd) {
                  _0x1f9cfd(_0x5d5740.og.af.Gn(), _0x5d5740.og.af.Hn());
                };
                _0x5d5740.Ij.yl(function () {
                  var _0x1bc745 = _0x5d5740.og.Lk();
                  if (_0x1bc745 != null && _0x1bc745.nd === _0x3819e1.Fk.Ek) {
                    _0x5d5740.Ci.pe(_0x3819e1.ge.je._e);
                    _0x5d5740.og.Ak(_0x5d5740.og._e);
                  }
                  if (_0x5d5740.Ij.Hj()) {
                    try {
                      var _0x6432fc = _0x5d5740.Ij.cl();
                      ga("set", "userId", _0x6432fc);
                    } catch (_0x16dcdf) {}
                  }
                  if (_0x5d5740.Go() && _0x5d5740.Ij.Hj() && !_0x5d5740.Ij.hl()) {
                    _0x5d5740.rp(false, false);
                    _0x5d5740.og.qk._n(new _0x3819e1.sp());
                  } else {
                    _0x5d5740.Rp(true);
                  }
                });
                _0x5d5740.dh.run();
                _0x5d5740.og.ha();
                _0x5d5740.On.ha();
                _0x5d5740.Lc.ha();
                _0x5d5740.og._e.Vn();
                _0x5d5740.og.Ak(_0x5d5740.og._e);
                _0x5d5740.xe.ha(function () {
                  _0x5d5740.Ci.ha();
                  _0x5d5740.Ij.ha();
                  _0x5d5740.Lc.Ib(function () {
                    _0x5d5740.og._e.Un();
                    _0x5d5740.og.Ak(_0x5d5740.og._e);
                  }, function (_0x294c7a) {
                    _0x5d5740.og._e.Un();
                    _0x5d5740.og.Ak(_0x5d5740.og.tk);
                  }, function (_0x413f9b, _0x5966c3) {
                    var _0x3cedc3 = _0x413f9b;
                    _0x5d5740.og.ie.Ln(_0x3cedc3, _0x5966c3);
                    _0x5d5740.og._e.Ln(_0x3cedc3, _0x5966c3);
                  });
                  if (_0x5d5740.Go() && !_0x5d5740.hl()) {
                    _0x5d5740.og.qk._n(new _0x3819e1.sp());
                  } else {
                    _0x5d5740.Rp(true);
                  }
                });
              };
              _0x5d5740.Sp = function (_0x13d52b) {
                if (_0x5d5740.Ij.Hj()) {
                  var _0xa0874e = _0x5d5740.Ij.Al();
                  var _0x27e6e4 = _0x36bffa.a.b + "/pub/wuid/" + _0xa0874e + "/consent/change?value=" + encodeURI(_0x13d52b);
                  _0x36bffa.Z(_0x27e6e4, function () {}, function (_0x319c6e) {});
                }
              };
              _0x5d5740.Pn = function (_0x15d091) {
                _0x2a98fd++;
                if (!_0x5d5740.zn.Tp && _0x2a98fd >= _0x5d5740.zn.Ap) {
                  _0x5d5740.og.Ak(_0x5d5740.og.xk);
                  _0x5d5740.Ci.pe(_0x3819e1.ge.je.cf);
                  _0x5d5740.zn.Up.ia();
                } else {
                  _0x9e5e38(_0x2a98fd);
                  _0x5d5740.Vp(_0x15d091);
                }
              };
              _0x5d5740.Vp = function (_0x5c8a53) {
                if (_0x5d5740.dh.Wp()) {
                  _0x5d5740.og.ie.Mn();
                  _0x5d5740.og.Ak(_0x5d5740.og.ie);
                  var _0x2b7a36 = _0x5d5740.og._e.Wn();
                  _0x3819e1.Vf.eg(_0x3819e1.Vf._f, _0x2b7a36, 30);
                  var _0x522dfa = _0x5d5740.og.$h.Zh();
                  _0x3819e1.Vf.eg(_0x3819e1.Vf.Xf, _0x522dfa, 30);
                  var _0x46696f = 0;
                  if (_0x5d5740.Fp != null) {
                    var _0x5582fd = _0x5d5740.Fp.coords.latitude;
                    var _0x499ccc = _0x5d5740.Fp.coords.longitude;
                    _0x46696f = Math.max(0, Math.min(32767, (_0x5582fd + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (_0x499ccc + 180) / 360 * 65536)) << 16;
                  }
                  if (_0x5d5740.Ij.Hj()) {
                    _0x5d5740.Xp(_0x2b7a36, _0x46696f, _0x5c8a53);
                  } else {
                    var _0x51bb91 = _0x5d5740.og._e.el();
                    _0x3819e1.Vf.eg(_0x3819e1.Vf.ag, _0x51bb91, 30);
                    var _0x5ec31d = _0x5d5740.On.rj(_0x3819e1.tj.sj);
                    _0x3819e1.Vf.eg(_0x3819e1.Vf.bg, _0x5ec31d, 30);
                    _0x5d5740.Yp(_0x2b7a36, _0x46696f);
                  }
                }
              };
              _0x5d5740.Xp = function (_0x578822, _0x3a73ff, _0x3415a7) {
                var _0x1bca32 = _0x5d5740;
                var _0x288176 = _0x5d5740.Ij.Al();
                var _0x32b685 = _0x5d5740.og._e.el();
                var _0x3cb0b9 = _0x5d5740.On.rj(_0x3819e1.tj.sj);
                var _0x533346 = _0x5d5740.On.rj(_0x3819e1.tj.uj);
                var _0x4e7ff0 = _0x5d5740.On.rj(_0x3819e1.tj.vj);
                var _0x915031 = _0x5d5740.On.rj(_0x3819e1.tj.xj);
                var _0x16a392 = _0x5d5740.On.rj(_0x3819e1.tj.wj);
                var _0x54d181 = (_0x3320e7 ? URL_CDN : _0x36bffa.a.b) + "/pub/wuid/" + _0x288176 + "/start?gameMode=" + encodeURI(_0x578822) + "&gh=" + _0x3a73ff + "&nickname=" + _0xb65a12.Xp(_0x288176, _0x32b685, _0x3cb0b9, _0x533346, _0x4e7ff0, _0x915031, _0x16a392) + "&skinId=" + encodeURI(_wwc.validInput(_0x3cb0b9 || 0)) + "&eyesId=" + encodeURI(_wwc.validInputWear(_0x533346)) + "&mouthId=" + encodeURI(_wwc.validInputWear(_0x4e7ff0)) + "&glassesId=" + encodeURI(_wwc.validInputWear(_0x915031)) + "&hatId=" + encodeURI(_wwc.validInputWear(_0x16a392));
                _0x36bffa.Z(_0x54d181, function () {
                  _0x1bca32.og.Ak(_0x1bca32.og.tk);
                }, function (_0x32fb82) {
                  if (_0x32fb82.code === 1460) {
                    _0x1bca32.og.Ak(_0x1bca32.og.ok);
                    try {
                      ga("send", "event", "restricted", window.runtimeHash + "_tick");
                    } catch (_0x39285a) {}
                  } else if (false) {} else {
                    if (!_0x32fb82.server_url) {
                      _0x3c7638.dh.Cq();
                      return;
                    }
                    var _0x398480 = _0x32fb82.server_url;
                    _0x1bca32.dh.Zp(_0x398480, _0x288176, _0x3415a7);
                  }
                });
              };
              _0x5d5740.Yp = function (_0x4b1185, _0x368649) {
                var _0x32b380 = _0x5d5740;
                var _0x40a87b = _0x5d5740.og._e.el();
                var _0x3477e9 = _0x5d5740.On.rj(_0x3819e1.tj.sj);
                var _0x204051 = _0x36bffa.a.b + "/pub/wuid/guest/start?gameMode=" + encodeURI(_0x4b1185) + "&gh=" + _0x368649 + "&nickname=" + encodeURI(_0x40a87b) + "&skinId=" + encodeURI(_0x3477e9);
                _0x36bffa.Z(_0x204051, function () {
                  _0x32b380.og.Ak(_0x32b380.og.tk);
                }, function (_0x5c8a89) {
                  if (_0x5c8a89.code === 1460) {
                    _0x32b380.og.Ak(_0x32b380.og.ok);
                    try {
                      ga("send", "event", "restricted", window.runtimeHash + "_tick");
                    } catch (_0x475d2b) {}
                  } else if (_0x5c8a89.code !== 1200) {
                    _0x32b380.og.Ak(_0x32b380.og.tk);
                  } else {
                    var _0xe99bfb = _0x5c8a89.server_url;
                    _0x32b380.dh.$p(_0xe99bfb, _0x40a87b, _0x3477e9);
                  }
                });
              };
              _0x5d5740.Pp = function (_0x33041a, _0x4d47ce) {
                var _0x2f5523 = _0x5d5740.og._e.el();
                _0x5d5740.og.af.Fn(_0x33041a, _0x4d47ce, _0x2f5523);
                _0x5d5740.Ci.pe(_0x3819e1.ge.je.bf);
                _0x5d5740.og.Ak(_0x5d5740.og.af.En());
              };
              _0x5d5740.Sn = function () {
                if (!_0x5d5740.Tn()) {
                  return _0x5d5740.On.Bj();
                }
                var _0x53b1cd = parseInt(_0x3819e1.Vf.fg(_0x3819e1.Vf.bg));
                if (_0x53b1cd != null && _0x5d5740.On.Cj(_0x53b1cd, _0x3819e1.tj.sj)) {
                  return _0x53b1cd;
                } else {
                  return _0x5d5740.On.Bj();
                }
              };
              _0x5d5740.Xn = function (_0x730d3f) {
                _0x3819e1.Vf.eg(_0x3819e1.Vf.dg, _0x730d3f ? "true" : "false", 1800);
              };
              _0x5d5740.Tn = function () {
                return _0x3819e1.Vf.fg(_0x3819e1.Vf.dg) === "true";
              };
              _0x5d5740.Rp = function (_0x5ec5a3) {
                if (_0x5ec5a3 !== _0x5d5740.Bp) {
                  _0x5d5740.Bp = _0x5ec5a3;
                  var _0x17aca1 = _0x17aca1 || {};
                  _0x17aca1.consented = _0x5ec5a3;
                  _0x17aca1.gdprConsent = _0x5ec5a3;
                  _0x5d5740.zn.yn.ha();
                  _0x5d5740.zn.Op.ha();
                  _0x5d5740.zn.Up.ha(function (_0x55e816) {
                    if (_0x55e816) {
                      _0x9e5e38(_0x2a98fd = 0);
                    }
                    _0x5d5740.Vp();
                  });
                }
              };
              _0x5d5740.rp = function (_0x2a11c8, _0x1e6b4f) {
                _0x3819e1.Vf.eg(_0x3819e1.Vf.Wf, _0x2a11c8 ? "true" : "false");
                if (_0x1e6b4f) {
                  _0x5d5740.Sp(_0x2a11c8);
                }
                _0x5d5740.Rp(_0x2a11c8);
              };
              _0x5d5740.hl = function () {
                switch (_0x3819e1.Vf.fg(_0x3819e1.Vf.Wf)) {
                  case "true":
                    return true;
                  default:
                    return false;
                }
              };
              _0x5d5740.Go = function () {
                try {
                  return !!window.isIPInEEA || _0x5d5740.Fp != null && !!_0x3a8870.gg.hg(_0x5d5740.Fp.coords.latitude, _0x5d5740.Fp.coords.longitude);
                } catch (_0x3e5995) {
                  return true;
                }
              };
              _0x5d5740.Nf = function () {
                _0x5d5740.Dp = performance.now();
                _0x5d5740.Ep = _0x5d5740.Dp - _0x5d5740.Cp;
                _0x5d5740.dh.lh(_0x5d5740.Dp, _0x5d5740.Ep);
                _0x5d5740.og.lh(_0x5d5740.Dp, _0x5d5740.Ep);
                _0x5d5740.Cp = _0x5d5740.Dp;
              };
              _0x5d5740.Jf = function () {
                _0x5d5740.og.Jf();
              };
              return _0x5d5740;
            }();
          };
          _0x3819e1.Engine = function () {
            var _0x5aa237 = {
              dq: 30,
              fq: new Float32Array(100),
              gq: 0,
              hq: 0,
              iq: 0,
              jq: 0,
              kq: 0,
              lq: 0,
              Cn: 0,
              mq: null,
              nq: 300,
              Mp: function () {},
              Np: function () {},
              Qp: function () {},
              Lp: function () {},
              hh: new _0x3819e1.GameParams(),
              Kp: null,
              ch: null,
              Hi: {},
              Fh: {},
              Di: 12.5,
              eh: 40,
              oq: 1,
              pq: -1,
              qq: 1,
              rq: 1,
              sq: -1,
              tq: -1,
              uq: 1,
              vq: 1,
              wq: -1,
              Ih: 500,
              yh: 500
            };
            _0x5aa237.hh.zg = 500;
            _0x5aa237.ch = new _0x3819e1.Worm(_0x5aa237.hh);
            _0x5aa237.run = function () {
              _0x5aa237.ch.ti(_0x4b2cbe().og.af.ng);
            };
            _0x5aa237.gh = function (_0x2c3951, _0x53edfd, _0x50bc82, _0x1c671f) {
              _0x5aa237.pq = _0x2c3951;
              _0x5aa237.qq = _0x53edfd;
              _0x5aa237.rq = _0x50bc82;
              _0x5aa237.sq = _0x1c671f;
              _0x5aa237.yq();
            };
            _0x5aa237.zq = function (_0x16958c) {
              _0x5aa237.oq = _0x16958c;
              _0x5aa237.yq();
            };
            _0x5aa237.yq = function () {
              _0x5aa237.tq = _0x5aa237.pq - _0x5aa237.oq;
              _0x5aa237.uq = _0x5aa237.qq + _0x5aa237.oq;
              _0x5aa237.vq = _0x5aa237.rq - _0x5aa237.oq;
              _0x5aa237.wq = _0x5aa237.sq + _0x5aa237.oq;
            };
            _0x5aa237.lh = function (_0x476aea, _0x23076d) {
              _0x5aa237.iq += _0x23076d;
              _0x5aa237.hq -= _0x5aa237.gq * 0.2 * _0x23076d;
              _0x5aa237.Kp.Rh();
              if (_0x5aa237.mq !== null && (_0x5aa237.Cn === 2 || _0x5aa237.Cn === 3)) {
                _0x5aa237.Aq(_0x476aea, _0x23076d);
                _0x5aa237.eh = 4 + _0x5aa237.Di * _0x5aa237.ch.$c;
              }
              var _0x4e890c = 1000 / Math.max(1, _0x23076d);
              var _0x3ca407 = 0;
              for (var _0x3e09c2 = 0; _0x3e09c2 < _0x5aa237.fq.length - 1; _0x3e09c2++) {
                _0x3ca407 += _0x5aa237.fq[_0x3e09c2];
                _0x5aa237.fq[_0x3e09c2] = _0x5aa237.fq[_0x3e09c2 + 1];
              }
              _0x5aa237.fq[_0x5aa237.fq.length - 1] = _0x4e890c;
              _0x5aa237.dq = (_0x3ca407 + _0x4e890c) / _0x5aa237.fq.length;
            };
            _0x5aa237.Bq = function (_0x28de2b, _0x562153) {
              return _0x28de2b > _0x5aa237.tq && _0x28de2b < _0x5aa237.uq && _0x562153 > _0x5aa237.vq && _0x562153 < _0x5aa237.wq;
            };
            _0x5aa237.Aq = function (_0x1959b2, _0x46688d) {
              var _0x4cb273 = _0x5aa237.iq + _0x5aa237.hq;
              var _0x5d7e14 = (_0x4cb273 - _0x5aa237.jq) / (_0x5aa237.kq - _0x5aa237.jq);
              _0x5aa237.ch.hj(_0x1959b2, _0x46688d);
              _0x5aa237.ch.ij(_0x1959b2, _0x46688d, _0x5d7e14, _0x5aa237.Bq);
              var _0xd25ada = 0;
              for (var _0x58731e in _0x5aa237.Fh) {
                var _0x4c901e = _0x5aa237.Fh[_0x58731e];
                _0x4c901e.hj(_0x1959b2, _0x46688d);
                _0x4c901e.ij(_0x1959b2, _0x46688d, _0x5d7e14, _0x5aa237.Bq);
                if (_0x4c901e.xi && _0x4c901e.$c > _0xd25ada) {
                  _0xd25ada = _0x4c901e.$c;
                }
                if (!_0x4c901e.wi && (!!(_0x4c901e.dj < 0.005) || !_0x4c901e.xi)) {
                  _0x4c901e.si();
                  delete _0x5aa237.Fh[_0x4c901e.Eh.ae];
                }
              }
              _0x5aa237.zq(_0xd25ada * 3);
              for (var _0x45eec8 in _0x5aa237.Hi) {
                var _0x1fb601 = _0x5aa237.Hi[_0x45eec8];
                _0x1fb601.hj(_0x1959b2, _0x46688d);
                _0x1fb601.ij(_0x1959b2, _0x46688d, _0x5aa237.Bq);
                if (_0x1fb601.Ni && (_0x1fb601.dj < 0.005 || !_0x5aa237.Bq(_0x1fb601.Zi, _0x1fb601.$i))) {
                  _0x1fb601.si();
                  delete _0x5aa237.Hi[_0x1fb601.Eh.ae];
                }
              }
            };
            _0x5aa237.ki = function (_0x3a3e2c, _0x575f62) {
              if (_0x5aa237.Cn === 1) {
                _0x5aa237.Cn = 2;
                _0x5aa237.Mp();
              }
              var _0x10f373 = _0x4b2cbe().Dp;
              _0x5aa237.lq = _0x3a3e2c;
              if (_0x3a3e2c === 0) {
                _0x5aa237.jq = _0x10f373 - 95;
                _0x5aa237.kq = _0x10f373;
                _0x5aa237.iq = _0x5aa237.jq;
                _0x5aa237.hq = 0;
              } else {
                _0x5aa237.jq = _0x5aa237.kq;
                _0x5aa237.kq = _0x5aa237.kq + _0x575f62;
              }
              var _0x535d6e = _0x5aa237.iq + _0x5aa237.hq;
              _0x5aa237.gq = (_0x535d6e - _0x5aa237.jq) / (_0x5aa237.kq - _0x5aa237.jq);
            };
            _0x5aa237.Oi = function () {
              if (_0x5aa237.Cn === 1 || _0x5aa237.Cn === 2) {
                _0x5aa237.Cn = 3;
                var _0x4b484b = _0x5aa237.mq;
                setTimeout(function () {
                  if (_0x5aa237.Cn === 3) {
                    _0x5aa237.Cn = 0;
                  }
                  if (_0x4b484b != null && _0x4b484b === _0x5aa237.mq) {
                    _0x5aa237.mq.close();
                    _0x5aa237.mq = null;
                  }
                }, 4500);
                _0x5aa237.Np();
              }
            };
            _0x5aa237.Wp = function () {
              return _0x5aa237.Cn !== 2 && (_0x5aa237.Cn = 1, _0x5aa237.Kp.Qh(), _0x5aa237.Hi = {}, _0x5aa237.Fh = {}, _0x5aa237.ch.Pm(), _0x5aa237.mq != null && (_0x5aa237.mq.close(), _0x5aa237.mq = null), true);
            };
            _0x5aa237.Cq = function () {
              _0x5aa237.mq = null;
              _0x5aa237.Kp.Qh();
              if (_0x5aa237.Cn !== 3) {
                _0x5aa237.Lp();
              }
              _0x5aa237.Cn = 0;
            };
            _0x5aa237.Zp = function (_0x5819b4, _0x555498) {
              _0x5aa237.Dq(_0x5819b4, function () {
                var _0x549a7f = Math.min(2048, _0x555498.length);
                var _0x9fc70 = new ArrayBuffer(6 + _0x549a7f * 2);
                var _0x5bb8b7 = new DataView(_0x9fc70);
                var _0x264f84 = 0;
                _0x5bb8b7.setInt8(_0x264f84, 129);
                _0x264f84 += 1;
                _0x5bb8b7.setInt16(_0x264f84, 2800);
                _0x264f84 += 2;
                _0x5bb8b7.setInt8(_0x264f84, 1);
                _0x264f84 += 1;
                _0x5bb8b7.setInt16(_0x264f84, _0x549a7f);
                _0x264f84 += 2;
                for (var _0x21f6c4 = 0; _0x21f6c4 < _0x549a7f; _0x21f6c4++) {
                  _0x5bb8b7.setInt16(_0x264f84, _0x555498.charCodeAt(_0x21f6c4));
                  _0x264f84 += 2;
                }
                _0x5aa237.Eq(_0x9fc70);
              });
            };
            _0x5aa237.$p = function (_0x40f23f, _0xa8a22b, _0xbbdb4f) {
              _0x5aa237.Dq(_0x40f23f, function () {
                var _0xbb04d7 = Math.min(32, _0xa8a22b.length);
                var _0x2308e3 = new ArrayBuffer(7 + _0xbb04d7 * 2);
                var _0x17049c = new DataView(_0x2308e3);
                var _0x17f07b = 0;
                _0x17049c.setInt8(_0x17f07b, 129);
                _0x17f07b += 1;
                _0x17049c.setInt16(_0x17f07b, 2800);
                _0x17f07b += 2;
                _0x17049c.setInt8(_0x17f07b, 0);
                _0x17f07b += 1;
                _0x17049c.setInt16(_0x17f07b, _0xbbdb4f);
                _0x17f07b += 2;
                _0x17049c.setInt8(_0x17f07b, _0xbb04d7);
                _0x17f07b++;
                for (var _0x3e5f71 = 0; _0x3e5f71 < _0xbb04d7; _0x3e5f71++) {
                  _0x17049c.setInt16(_0x17f07b, _0xa8a22b.charCodeAt(_0x3e5f71));
                  _0x17f07b += 2;
                }
                _0x5aa237.Eq(_0x2308e3);
              });
            };
            _0x5aa237.Eq = function (_0x158425) {
              try {
                if (_0x5aa237.mq != null && _0x5aa237.mq.readyState === WebSocket.OPEN) {
                  _0x5aa237.mq.send(_0x158425);
                }
              } catch (_0x5e1336) {
                _0x5aa237.Cq();
              }
            };
            _0x5aa237.xq = function (_0x49760f, _0x1071c4) {
              var _0x163dd2 = _0x1071c4 ? 128 : 0;
              var _0x4f0a33 = _0x36bffa.N(_0x49760f) / _0x3a8870.F * 128 & 127;
              var _0x1f6850 = (_0x163dd2 | _0x4f0a33) & 255;
              var _0x1f4306 = new ArrayBuffer(1);
              new DataView(_0x1f4306).setInt8(0, _0x1f6850);
              _0x5aa237.Eq(_0x1f4306);
              _0x5aa237.nq = _0x1f6850;
            };
            _0x5aa237.Dq = function (_0x2abefd, _0x43352b) {
              var _0x2ca066 = _0x5aa237.mq = new WebSocket(_0x2abefd);
              _0x2ca066.binaryType = "arraybuffer";
              _0x2ca066.onopen = function () {
                if (_0x5aa237.mq === _0x2ca066) {
                  _0x43352b();
                }
              };
              _0x2ca066.onclose = function () {
                if (_0x5aa237.mq === _0x2ca066) {
                  _0x5aa237.Cq();
                }
              };
              _0x2ca066.onerror = function (_0x38aa74) {
                if (_0x5aa237.mq === _0x2ca066) {
                  _0x5aa237.Cq();
                }
              };
              _0x2ca066.onmessage = function (_0x5e5a22) {
                if (_0x5aa237.mq === _0x2ca066) {
                  _0x5aa237.Kp.Ph(_0x5e5a22.data);
                }
              };
            };
            return _0x5aa237;
          };
          var _0x3184a7 = _0x4e5fcd({}, _0xb65a12);
          _0xb65a12 = _0x4e5fcd({
            $C: _0x3819e1,
            $V: _0x3a8870,
            $F: _0x36bffa,
            POGL: _0x4efbaa
          }, _0x3184a7);
          _0xb65a12.Jb = function () {
            (_0x3c7638.Lc.zb.ud.skinArrayDict || []).forEach(function (_0x5b1f2d) {
              if (_0x5b1f2d.associados && _0x5b1f2d.associados.includes(_0x3c7638.Ij.Rk.userId)) {
                _0x5b1f2d[["n", "o", "n", "b", "u", "y", "a", "b", "l", "e"].join("")] = false;
              }
            });
          };
          var _0x3dbc31 = function (_0x517e51) {
            var _0x41eec5 = {};
            _0x41eec5.main = {
              yn: _0x36bffa.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
              Op: _0x36bffa.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
              Up: _0x36bffa.ga(),
              Ap: 4,
              Tp: false,
              xn: true
            };
            _0x41eec5.miniclip = {
              yn: _0x36bffa.ja("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
              Op: _0x36bffa.ja("ltmolilci1iurq1i", "wormate-io_970x250"),
              Up: _0x36bffa.ga(),
              Ap: 4,
              Tp: false,
              xn: false
            };
            var _0x341c29 = _0x41eec5[window.ENV];
            _0x341c29 ||= _0x41eec5.main;
            return _0x341c29;
          }(window.ENV);
          $(function () {
            FastClick.attach(document.body);
          });
          addEventListener("contextmenu", function (_0x21f08a) {
            _0x21f08a.preventDefault();
            _0x21f08a.stopPropagation();
            return false;
          });
          window.fbAsyncInit = function () {
            FB.init({
              appId: "861926850619051",
              cookie: true,
              xfbml: true,
              status: true,
              version: "v14.0"
            });
          };
          _0x36bffa.L("//apis.google.com/js/api:client.js", null, function () {
            gapi.load("auth2", function () {
              _0x3fa18c = gapi.auth2.init({
                client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
              });
            });
          });
          _0x36bffa.L("//connect.facebook.net/" + _0x36bffa.a.j + "/sdk.js", {
            id: "facebook-jssdk",
            async: true,
            defer: true,
            crossorigin: "anonymous"
          });
          _0x3c7638 = _0x36bffa.zp();
          _0x3c7638.Ip();
          (function () {
            function _0xeab48a() {
              requestAnimationFrame(_0xeab48a);
              _0x4b2cbe().Nf();
            }
            _0xeab48a();
          })();
          (function () {
            function _0x4278fd() {
              var _0x58ff8a = _0x3dc13f.width();
              var _0x2fe6e9 = _0x3dc13f.height();
              var _0x5ba751 = _0x1206b9.outerWidth();
              var _0x5649d2 = _0x1206b9.outerHeight();
              var _0x20e281 = _0x33b8ad.outerHeight();
              var _0x19a98f = _0x57a815.outerHeight();
              var _0x39fbdd = Math.min(1, Math.min((_0x2fe6e9 - _0x19a98f - _0x20e281) / _0x5649d2, _0x58ff8a / _0x5ba751));
              var _0xd7c189 = "translate(-50%, -50%) scale(" + _0x39fbdd + ")";
              _0x1206b9.css({
                "-webkit-transform": _0xd7c189,
                "-moz-transform": _0xd7c189,
                "-ms-transform": _0xd7c189,
                "-o-transform": _0xd7c189,
                transform: _0xd7c189
              });
              _0x4b2cbe().Jf();
              window.scrollTo(0, 1);
            }
            var _0x3dc13f = $("body");
            var _0x1206b9 = $("#stretch-box");
            var _0x33b8ad = $("#markup-header");
            var _0x57a815 = $("#markup-footer");
            _0x4278fd();
            $(window).resize(_0x4278fd);
          })();
        })();
      });
      setTimeout(function () {
        $(".mm-merchant-cont").append("\n \n  ");
        $(".mm-merchant-cont").css("top", "-10px");
      }, 4500);
      $(".description-text").css("height", "300px");
      var _0x2ec2f7 = "";
      var _0x3b1baa = function _0x10f32e(_0x1efbb7) {
        // Animated RGB gradient background with bubble effect
        var _0x12a642 = URL_CDN + "https://i.imgur.com/yLAoBGS.jpeg";
        
        // Create animated gradient with bubble effect
        var time = Date.now() / 1000;
        var r1 = Math.floor(Math.sin(time * 0.3) * 127 + 128);
        var g1 = Math.floor(Math.sin(time * 0.5 + 2) * 127 + 128);
        var b1 = Math.floor(Math.sin(time * 0.7 + 4) * 127 + 128);
        var r2 = Math.floor(Math.sin(time * 0.4 + 1) * 127 + 128);
        var g2 = Math.floor(Math.sin(time * 0.6 + 3) * 127 + 128);
        var b2 = Math.floor(Math.sin(time * 0.8 + 5) * 127 + 128);
        
        document.body.style.backgroundColor = "";
        document.body.style.backgroundImage = 
          "radial-gradient(circle at 20% 50%, #4400ff 0%, #00ffd5 35%, #1e00ff 70%, #00ddff 100%), " +
          "radial-gradient(circle at 80% 30%, #1500ff 0%, #00ffb3 35%, #2200ff 70%, #00fff2 100%), " +
          "radial-gradient(circle at 40% 80%, #0011ff 0%, #00ffff 35%, #8800ff 70%, #00b3ff 100%)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.overflow = "hidden";
        var _0x31a165 = document.getElementById("background-canvas");
        var _0x468074 = document.getElementById("game-wrap");
        if (_0x31a165) { 
          _0x31a165.style.backgroundColor = ""; 
          _0x31a165.style.opacity = "0.65"; 
        }
        if (_0x468074) { 
          _0x468074.style.backgroundColor = "transparent"; 
        }
      };
      
      // Add continuous animation for the bubble background
      setInterval(function() {
        var time = Date.now() / 1000;
        // Slower, more fluid color transitions for bubble effect
        var r1 = Math.floor(Math.sin(time * 0.3) * 127 + 128);
        var g1 = Math.floor(Math.sin(time * 0.5 + 2) * 127 + 128);
        var b1 = Math.floor(Math.sin(time * 0.7 + 4) * 127 + 128);
        var r2 = Math.floor(Math.sin(time * 0.4 + 1) * 127 + 128);
        var g2 = Math.floor(Math.sin(time * 0.6 + 3) * 127 + 128);
        var b2 = Math.floor(Math.sin(time * 0.8 + 5) * 127 + 128);
        
        // Create moving bubble effect with multiple radial gradients
        var posX1 = (Math.sin(time * 0.2) * 30 + 50);
        var posY1 = (Math.cos(time * 0.15) * 20 + 50);
        var posX2 = (Math.cos(time * 0.25) * 40 + 50);
        var posY2 = (Math.sin(time * 0.18) * 30 + 50);
        var posX3 = (Math.sin(time * 0.17) * 35 + 50);
        var posY3 = (Math.cos(time * 0.22) * 25 + 50);
        var posX4 = (Math.cos(time * 0.19) * 45 + 50);
        var posY4 = (Math.sin(time * 0.16) * 35 + 50);
        
        document.body.style.backgroundImage = 
          "radial-gradient(circle at " + posX1 + "% " + posY1 + "%, #3a5874 0%, #8800ff 35%, #2600ff 70%, #00ccff 100%), " +
          "radial-gradient(circle at " + posX2 + "% " + posY2 + "%, #3a5874 0%, #a600ff 35%, #0040ff 70%, #0088ff 100%), " +
          "radial-gradient(circle at " + posX3 + "% " + posY3 + "%, #3a5874 0%, #3700ff 35%, #2b00ff 70%, #00c8ff 100%)";
      }, 50);
      
      if (_0x4f82c6) {
        _0x4f82c6 = JSON.parse(_0x4f82c6);
        if (_0x4f82c6.background) {
          _0x3b1baa(_0x4f82c6.background);
        } else {
          _0x3b1baa();
        }
      } else {
        _0x3b1baa();
      }
      if (_0x33def7) {
        _0x33def7 = JSON.parse(_0x33def7);
        if (_0x33def7 && _0x33def7.audio) {
          _0x3cd95c.headshot = new _0x5213e9.Howl({
            src: [_0x33def7.audio],
            html5: true,
            autoplay: false,
            loop: false
          });
        }
      }
      window.testAudioCustom = function () {
        if (_0x33def7 && _0x33def7.audio) {
          console.log("Playing custom audio?", _0x33def7.audio);
          _0x3cd95c.headshot.play();
        }
      };
      var _0x1c321b = _0x3ef9b1(function _0x3df9d5(_0x23a6c8, _0xef406f, _0x318aaf, _0x196600, _0x36090c) {
        _0x3391a3(this, _0x3df9d5);
        this.sid = null;
        this.refer = _0x23a6c8;
        this.nickname = _0xef406f;
        this.score = _0x196600;
        this.myRoom = _0x318aaf;
        this.myLocation = {
          x: 0,
          y: 0
        };
        this.teamRoom = _0x36090c;
        this.wuid = bbs.wuid;
      });
      w2c2020.containerHsRec.alpha = 0;
      w2c2020.containerHstop.alpha = 0;
      var _0x2e3827 = [16711680, 65280, 16776960, 16752640, 16711935, 16777215, 10066329, 65535, 8388736, 255, 3447003, 2719929, 3066993, 1752220];
      function _0x2d0958(_0x56ea7e, _0x434874) {
        if (!_0x434874) {
          return;
        }
        _0x434874.playerMap.position.x = _0x56ea7e.position.x;
        _0x434874.playerMap.position.y = _0x56ea7e.position.y;
      }
      function _0x4ec261(_0x3f9f7a, _0x3ac1de, _0x1496ff) {
        var _0x2dce48 = Array.from(_0x3f9f7a.keys()).indexOf(_0x3ac1de.sid);
        if (_0x2dce48 < 0) {
          _0x2dce48 = 0;
        }
        console.log("Index", _0x2dce48);
        var _0x27f24b = _0x2e3827[_0x2dce48 % _0x2e3827.length];
        var _0x118b7d = _0x2dce48 + 1 + " - " + _0x3ac1de.nickname.substring(0, 15);
        var _0x4233a8 = new PIXI.Text(_0x118b7d, {
          fontFamily: "Arial",
          fontSize: 9.5,
          fill: _0x27f24b,
          align: "left"
        });
        _0x4233a8.position.y = _0x2dce48 * 13;
        w2c2020.friends.addChild(_0x4233a8);
        return _0x4233a8;
      }
      function _0x57aa56(_0x26ca34, _0x6a204c) {
        var _0x24a39c = Array.from(_0x26ca34.keys()).indexOf(_0x6a204c.sid);
        if (_0x24a39c < 0) {
          _0x24a39c = 0;
        }
        console.log("Index", _0x24a39c);
        var _0x1cf65b = _0x2e3827[_0x24a39c % _0x2e3827.length];
        var _0x52bb1f = new PIXI.Graphics();
        _0x52bb1f.id = _0x6a204c.sid;
        _0x52bb1f.zIndex = 3;
        _0x52bb1f.alpha = 1;
        _0x52bb1f.beginFill(_0x1cf65b, 1);
        _0x52bb1f.drawCircle(0, 0, 3.5);
        _0x52bb1f.endFill();
        _0x52bb1f.position.x = _0x6a204c.position.x;
        _0x52bb1f.position.y = _0x6a204c.position.y;
        w2c2020.conteinerTeam.addChild(_0x52bb1f);
        return _0x52bb1f;
      }
      var _0x44f857 = new Map();
      var _0x3b2793 = function _0x33c2d6() {
        _0x44f857.forEach(function (_0x3d22f3, _0x1dc1c4) {
          w2c2020.conteinerTeam.removeChild(_0x3d22f3.playerMap);
          w2c2020.friends.removeChild(_0x3d22f3.playerText);
        });
        _0x44f857.clear();
      };
      _wwcio.connect = function (_0x15035a) {
        if (_wwcio.socket) {
          console.warn("Já conectado. Ignorando nova tentativa.");
          return;
        }
        var _0x4380ee = (bbs.con || "").match(/(wss:|ws:)\/\/(.*?)-(.*):(.*?)\//);
        if (!_0x4380ee) {
          _0x4380ee = [];
        }
        if (_0x4380ee && _0x41d210.includes(_0x4380ee[2])) {
          _wwcio.leaderboardUpdated([], []);
          var _0x2d48ee = _0xdfcc37 ? "local" : _0x4380ee[2];
          var _0x5f2e91 = _wwc._anApp.dh.hh.xg + (_0x4380ee[2] || "L") + (_0x4380ee[4] || "0");
          _wwcio.player = new _0x1c321b(_0x15035a ? _0x15035a.ae : userId, _0x15035a ? _0x15035a.ma : "AN", _0x5f2e91, 0, _wwcio.player.teamRoom);
          try {
            var _0x4f54fe = (0, _0x32df20.io)(_0x246168[_0x2d48ee], {
              path: "/api/",
              transports: ["websocket"],
              reconnectionAttempts: 5,
              query: {
                tk: bbs.tk
              }
            });
            var _0x39ab16 = function _0x16e967() {
              _0x4f54fe.emit("join", _wwcio.player, function (_0x38f271) {
                _wwcio.leaderboardUpdated(_0x38f271.top10, _0x38f271.top3);
                if (_wwcio.player.teamRoom) {
                  _0x4f54fe.emit("joinTeam");
                  var _0xb8083d = _0x4ec261(_0x44f857, _wwcio.player, true);
                  _0x44f857.set(_wwcio.player.sid, {
                    wid: _wwcio.player.wid,
                    playerMap: null,
                    playerText: _0xb8083d
                  });
                  w2c2020.friends.alpha = 1;
                  console.log("Conectado com Team!", _wwcio.player.teamRoom);
                } else {
                  w2c2020.friends.alpha = 0;
                  console.log("Conectado sem Team!", _wwcio.player.teamRoom);
                }
              });
            };
            _0x4f54fe.on("connect", function () {
              console.log("Conectado ao servidor:", _0x4f54fe.id);
              _wwcio.socket = true;
              _wwcio.player.sid = _0x4f54fe.id;
              _0x39ab16();
            });
            _0x4f54fe.on("message", function (_0x435ca0) {
              console.log("Recebido", _0x435ca0);
              switch (_0x435ca0.type) {
                case "join":
                  _wwcio.obj.sid = _0x435ca0.sid;
                  break;
                case "leaderBoard":
                  _wwcio.leaderboardUpdated(_0x435ca0.top10, _0x435ca0.top3);
                  break;
                case "update":
                  break;
                case "leave":
                  break;
                default:
                  break;
              }
              if (_0x435ca0 && _0x435ca0.top10) {
                _wwcio.leaderboardUpdated(_0x435ca0.top10, _0x435ca0.top3);
              }
            });
            _0x4f54fe.on("connect_error", function (_0x24edb3) {
              console.error("Erro de conexão:", _0x24edb3);
              _wwcio.socket = false;
              _0x3b2793();
            });
            _0x4f54fe.on("disconnect", function () {
              console.warn("Desconectado.");
              _wwcio.socket = false;
              _0x3b2793();
            });
            _0x4f54fe.on("error", function (_0xcc6717) {
              console.log(_0xcc6717?.message || "Erro inesperado na conexão.");
              _wwcio.socket = false;
              _0x3b2793();
            });
            _0x4f54fe.on("updateLocation", function (_0x37f41f) {
              if (!_0x37f41f) {
                return;
              }
              if (player && !player.teamRoom) {
                _0x3b2793();
                return;
              }
              var _0x11f0db = _0x44f857.get(_0x37f41f.sid);
              if (!_0x11f0db) {
                var _0x3ecfaa = Array.from(_0x44f857.values()).find(function (_0x346862) {
                  return _0x346862.wid === _0x37f41f.wid;
                });
                console.log("Player", _0x3ecfaa);
                _0x44f857.set(_0x37f41f.sid, {
                  wid: _0x37f41f.wid
                });
                var _0x1f1e45 = _0x4ec261(_0x44f857, _0x37f41f);
                var _0x2f49d1 = _0x57aa56(_0x44f857, _0x37f41f);
                _0x11f0db = _0x44f857.get(_0x37f41f.sid);
                _0x11f0db.playerMap = _0x2f49d1;
                _0x11f0db.playerText = _0x1f1e45;
              }
              _0x2d0958(_0x37f41f, _0x11f0db);
            });
            _0x4f54fe.on("leaveTeam", function (_0x323477) {
              console.log("Saiu do time", _0x323477);
              var _0x3dd104 = _0x44f857.get(_0x323477.sid);
              if (_0x3dd104) {
                w2c2020.conteinerTeam.removeChild(_0x3dd104.playerMap);
                w2c2020.friends.removeChild(_0x3dd104.playerText);
                _0x44f857.delete(_0x323477.sid);
              }
            });
            _wwcio.sendLocation = function (_0x32b6fd) {
              _0x4f54fe.emit("updateLocation", _0x32b6fd);
            };
            _wwcio.update = function (_0x36623a, _0x7e7b11) {
              if (_0x36623a >= 6) {
                _0x36623a = 1;
              }
              var _0x2e78cc = !!(_0x36623a & 2);
              var _0xca0046 = "update";
              if (_0x2e78cc && _0x7e7b11) {
                _0xca0046 = "headshot";
              }
              if (typeof _0x36623a === "string") {
                _0xca0046 = _0x36623a;
              }
              _0x4f54fe.emit("message", {
                action: _0xca0046,
                player: _wwcio.player
              });
            };
            _wwcio.close = function () {
              _0x4f54fe.emit("leaveTeam");
              setTimeout(function () {
                _0x4f54fe.disconnect();
                _0x4f54fe.close();
              }, 1000);
            };
          } catch (_0x58ec4d) {
            w2c2020.containerHsRec.alpha = 0;
            w2c2020.containerHstop.alpha = 0;
            console.error("Erro: Servidor não disponível.");
            _wwcio.close();
          }
        } else {
          w2c2020.containerHsRec.alpha = 0;
          w2c2020.containerHstop.alpha = 0;
          console.error("NO MATCH!");
        }
      };
    }
  };
  var _0xe32778 = {};
  function _0x391270(_0x59c27f) {
    var _0x28d27e = _0xe32778[_0x59c27f];
    if (_0x28d27e !== undefined) {
      return _0x28d27e.exports;
    }
    var _0x4a9019 = _0xe32778[_0x59c27f] = {
      id: _0x59c27f,
      loaded: false,
      exports: {}
    };
    _0x507ff3[_0x59c27f](_0x4a9019, _0x4a9019.exports, _0x391270);
    _0x4a9019.loaded = true;
    return _0x4a9019.exports;
  }
  (() => {
    _0x391270.amdO = {};
  })();
  (() => {
    _0x391270.n = _0x39dc97 => {
      var _0x40f012 = _0x39dc97 && _0x39dc97.__esModule ? () => _0x39dc97.default : () => _0x39dc97;
      _0x391270.d(_0x40f012, {
        a: _0x40f012
      });
      return _0x40f012;
    };
  })();
  (() => {
    _0x391270.d = (_0x4bdd3b, _0x910d) => {
      for (var _0x394f4b in _0x910d) {
        if (_0x391270.o(_0x910d, _0x394f4b) && !_0x391270.o(_0x4bdd3b, _0x394f4b)) {
          Object.defineProperty(_0x4bdd3b, _0x394f4b, {
            enumerable: true,
            get: _0x910d[_0x394f4b]
          });
        }
      }
    };
  })();
  (() => {
    _0x391270.g = function () {
      if (typeof globalThis === "object") {
        return globalThis;
      }
      try {
        return this || new Function("return this")();
      } catch (_0x48a6fb) {
        if (typeof window === "object") {
          return window;
        }
      }
    }();
  })();
  (() => {
    _0x391270.hmd = _0x2fbd5d => {
      _0x2fbd5d = Object.create(_0x2fbd5d);
      if (!_0x2fbd5d.children) {
        _0x2fbd5d.children = [];
      }
      Object.defineProperty(_0x2fbd5d, "exports", {
        enumerable: true,
        set: () => {
          throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + _0x2fbd5d.id);
        }
      });
      return _0x2fbd5d;
    };
  })();
  (() => {
    _0x391270.o = (_0x4832bb, _0x952c64) => Object.prototype.hasOwnProperty.call(_0x4832bb, _0x952c64);
  })();
  (() => {
    _0x391270.r = _0x48d108 => {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(_0x48d108, Symbol.toStringTag, {
          value: "Module"
        });
      }
      Object.defineProperty(_0x48d108, "__esModule", {
        value: true
      });
    };
    var _0x5d2467 = _0x391270("./src/temp.js");
  })();
  $(document).ready(function () {
    function _0x2ca347() {
      const _0x34ea81 = window.fetch;
      window.fetch = function (_0x1f3479, _0x582617) {
        if (_0x1f3479.includes("/load-page") && _0x582617 && _0x582617.method === "POST") {
          console.log("اعتراض طلب صفحة السيرفرات الأصلية");
          return $.get("https://xo2xo2.github.io/xo/game.html").then(function (_0x403105) {
            return {
              text: function () {
                return Promise.resolve(_0x403105);
              }
            };
          }).catch(function (_0x476daf) {
            console.error("خطأ في تحميل الصفحة المخصصة:", _0x476daf);
            return _0x34ea81(_0x1f3479, _0x582617);
          });
        }
        return _0x34ea81(_0x1f3479, _0x582617);
      };
      console.log("تم تعديل وظيفة fetch لاستبدال صفحة السيرفرات");
    }
    _0x2ca347();
  });
})();









// اعتراض جميع طلبات fetch

(function() {

    const originalFetch = window.fetch;

    

    window.fetch = function(...args) {

        const url = args[0];

        console.log("🌐 طلب fetch:", url);

        

        return originalFetch.apply(this, args)

            .then(response => {

                console.log("📥 استجابة من:", url);

                

                // اعتراض طلب set-worm-world

                if (url.includes('/extension/set-worm-world') || url.includes('/set-worm-world')) {

                    console.log("🎯 اعتراض set-worm-world");

                    

                    // إنشاء استجابة مخصصة كاملة

                    const customResponse = `<style>

  .news-box-wormworld {

    background-color: #ffffff;

    padding: 10px;

    border: 2px solid #ff0000;

    border-radius: 5px;

    margin-bottom: 10px;

    width: 100%;

    height: 86%;

    position: relative;

    z-index: 1;

    overflow-y: scroll;

  }



  .news-box-wormworld .news-content {

    width: 100%;

    height: 85%;

    overflow-y: auto;

    padding: 10px;

    border: 1px solid #eb0000;

    box-sizing: border-box;

  }



  .news-box-wormworld .news-button {

    position: absolute;

    bottom: 20px;

    display: flex;

    align-items: center;

    gap: 5px;

    width: 100%;

  }



  .news-box-wormworld .close-button {

    position: absolute;

    right: 33px;

    background-color: #f44336;

    color: white;

    border: none;

    padding: 5px 10px;

    cursor: pointer;

    font-size: 12px;

    top: -24px;

    width: 100px;

    height: 50px;

  }



  #idwormworld a {

    color: #fff;

  }



  .wwc-joystick div {

    min-width: 100px;

    display: inline-block;

  }



  @keyframes mmwwcGlow {
    0%, 100% {
      box-shadow: 0 0 8px 2px rgba(0, 200, 255, 0.5), 0 0 15px 4px rgba(0, 200, 255, 0.3);
    }
    50% {
      box-shadow: 0 0 12px 3px rgba(0, 200, 255, 0.7), 0 0 20px 6px rgba(0, 200, 255, 0.5);
    }
  }

  #game-wrap #game-cont #stretch-box #main-menu-view .line-bottom #mm-wwc {

    background: #00ccff;

    color: #fff;

    overflow: hidden;

    height: 50px;

    line-height: 50px;

    font-size: 20px;

    padding: 0 10px;

    box-sizing: border-box;

    border-radius: 5px;

    border: 0;

    outline: 0;

    box-shadow: 0 0 8px 2px rgba(0, 200, 255, 0.5), 0 0 15px 4px rgba(0, 200, 255, 0.3);

    text-align: center;

    text-shadow: 0 0 3px rgba(0, 200, 255, 0.5);

    cursor: pointer;

    transition: all 0.3s ease;
    animation: mmwwcGlow 2s ease-in-out infinite;

    min-width: 120px;

    display: inline-block;

    margin: 0 3px;

  }



  .group-tab-button {

    display: flex;

    margin-top: 7px;

  }



  .tab-button {

    cursor: pointer;

    padding: 5px 15px;

    background-color: #eee;

    border: 1px solid #ccc;

    border-radius: 5px 5px 0 0;

  }



  .tab-button:hover {

    background-color: #000;

    color: #fff;

  }



  .tab-button.active {

    background-color: #fff;

    color: #ff0000;

  }



  .tab-content {

    display: none;

    padding: 5px 10px 0 10px;

    border-radius: 0 0 5px 5px;

  }



  .active-tab {

    display: block;

  }



  .sub-title {

    font-size: 14px;

    font-weight: bold;

    display: block;

    color: rgb(0, 0, 0);

    border-bottom: 1px solid;

    margin: 10px 0;

  }



  #idReplaceSkin button {

    font-size: small;

    padding: 5px 15px;

    z-index: 1;

    position: absolute;

    background-color: transparent;

    color: #FFF;

    border: 1px solid #eb991c;

    border-radius: 15px;

  }

<style>


  #idReplaceSkin button:hover {

    background-color: #eb991c;

    color: #000;

    border: 1px solid #cfcfcf;

  }

</style>



<div style="position: relative; padding: 10px; background: linear-gradient(135deg, #868691ff 0%, #868697ff 100%); border-radius: 22px;">

  <h2 style="text-align: center; color: #00ccff; margin: 0 0 12px 0; font-size: 18px; font-weight: bold; text-shadow: 0 0 8px rgba(0, 200, 255, 0.4);">🐛 WormXO ⚙️</h2>

  <button style="background: linear-gradient(135deg, #ff4444, #cc0000); color: #fff; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); position: absolute; top: 8px; right: 8px; font-size: 12px;" id="mm-wwc-close">

    ✕ CLOSE

  </button>

  <div style="margin-bottom: 10px; background: white; padding: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); clear: both; margin-top: 5px;">

    <label style="font-weight: bold; color: #333; font-size: 12px; display: block; margin-bottom: 4px;">📋 ID:</label>

    <div style="display: flex; gap: 6px; align-items: center;">

      <input type="text" value="${bbs.userId}" id="wormate_id" readonly style="flex: 1; padding: 5px; border: 1px solid #00ccff; border-radius: 4px; background: #f0f8ff; font-family: monospace; font-size: 11px;" />

      <button onclick="navigator.clipboard.writeText('${bbs.userId}')" style="background: #4CAF50; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-weight: bold; box-shadow: 0 1px 3px rgba(0,0,0,0.2); font-size: 11px;">COPY</button>

    </div>

  </div>

  

    

      <form name="formSkin" method="POST" enctype="multipart/form-data" style="background: white; padding: 8px; border-radius: 6px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 10px;">

        <label style="font-weight: bold; color: #333; font-size: 12px; display: block; margin-bottom: 4px;">📁 File:</label>

        <input id="fileSkin" type="file" accept="application/json" style="padding: 5px; border: 1px solid #00ccff; border-radius: 4px; width: 100%; box-sizing: border-box; font-size: 11px;" />

      </form>

      
        <div class="page-set-worm-world">

          <div class="group-tab-button">

            <div id="tab_b1" class="tab-button active" onclick="changeTab(0)">

              SET

            </div>

            <div id="tab_b3" class="tab-button" onclick="changeTab(2)">Account</div>

            <div id="tab_b4" class="tab-button" onclick="changeTab(3)">HELP</div>

            <div id="tab_b5" class="tab-button" onclick="changeTab(4)">CUSTOM</div>

            <div id="tab_b6" class="tab-button" onclick="changeTab(5)">SET ZOOM</div>

            <div id="tab_b7" class="tab-button" onclick="changeTab(6)">SKIN SWAP</div>

            <div id="tab_b8" class="tab-button" onclick="changeTab(7)">JOYSTICK</div>

          </div>



          <div id="tab1" class="tab-content active-tab">

            

              <div style="display: flex">

    <div style="width: 33%">

        <label>SAVE Kill:</label>

        <input type="checkbox" id="saveGame" />

    </div>

    <div style="width: 33%">

        <label>Background:</label>

        <select id="backgroundArena"></select>
    </div>

    <div style="width: 25%">
        <label style="display: block; text-align: center; font-weight: bold; color: #00ccff; text-shadow: 0 0 5px rgba(0,204,255,0.5); font-size: 14px; margin-bottom: 3px;">&#128028; ZIGZAG &#128028;</label>
        <select id="sel_zigzag" style="width: 100%; padding: 4px; border: 1px solid #4a9bff; border-radius: 4px; background: #1a1a2e; color: white; font-size: 12px; box-shadow: 0 0 5px rgba(74,155,255,0.3);">
            <option value="0">Normal</option>
            <option value="1">Zigzag 1</option>
            <option value="2">Zigzag 2</option>
            <option value="3">Zigzag 3</option>
        </select>
    </div>



    <div style="width: 34%">

        <label>Replace SKIN:</label>

        <input style="width: 60px" type="text" name="inputReplaceSkin" id="inputReplaceSkin" value="35" maxlength="4"

            onchange="setIdReplaceSkin(this)" />

    </div>

</div>

<div style="display: grid;

          grid-template-columns: repeat(3, 1fr);

          grid-template-rows: 1fr;

          grid-column-gap: 0px;

          grid-row-gap: 0px;

          margin-top: 10px;">

    <div>

        <label>TOP HS ("9")</label>

        <input type="checkbox" id="showTophs" />

    </div>

    <div>

        <label>Record HS ("0")</label>

        <input type="checkbox" id="showRechs" />

    </div>

    <div>

        <label>TOP 3</label>

        <input type="checkbox" id="onlytop" />

    </div>

</div>

            <div class="setting-item" style="text-align: right;">

              <span class="setting-label"><i class="fas fa-desktop" style="color: #ffbb00;"></i> :</span>

              <select id="hudPositionMode">

                <option value="0">100%</option>

                <option value="1">75%</option>

                <option value="2">Center</option>

              </select>

            </div>

<div style="margin-bottom: 5px">

    <strong class="sub-title">Joystick Settings</strong>

    <div class="wwc-joystick">

        <div>

            <label style="display: block">Active</label>

            <input type="checkbox" id="joystick_checked" onclick="setconfigjoystick_checked(this)" />

        </div>

        <div>

            <label style="display: block">Color</label>

            <select id="joystick_color" onchange="setconfigjoystick_color(this)">

                <option value="red">RED</option>

                <option value="blue">BLUE</option>

                <option value="white">WHITE</option>

                <option value="black">Black</option>

            </select>

        </div>

        <div>

            <label style="display: block">Mode</label>

            <select id="joystick_mode" onchange="setconfigjoystick_mode(this)">

                <option value="dynamic">Dynamic</option>

                <option value="static">Static</option>

            </select>

        </div>

        <div>

            <label style="display: block">Position</label>

            <select id="joystick_position" onchange="setconfigjoystick_position(this)">

                <option value="R">Right</option>

                <option value="L">Left</option>

            </select>

        </div>

        <div>

            <label style="display: block; margin-top: 10px;">Size</label>

            <select id="joystick_size" onchange="setconfigjoystick_size(this)">

                <option value="110">110</option>

                <option value="100">100</option>

                <option value="90">90</option>

                <option value="80">80</option>

                <option value="75">75</option>

                <option value="70">70</option>

            </select>

        </div>

    </div>

</div>

<strong class="sub-title">Plus</strong>

<div style="

          display: grid;

          grid-template-columns: repeat(4, 1fr);

          grid-template-rows: 1fr;

          grid-column-gap: 0px;

          grid-row-gap: 0px;

          margin-top: 10px;

        ">

    <div>

        <label>Bad Language</label>

        <input type="checkbox" id="activeBadLang" />

    </div>

    <div>

        <label>SOUNDS:</label>

        <input type="checkbox" id="activeSounds" />

    </div>

</div>

                

          </div>

          <div id="tab2" class="tab-content">

            em construção

          </div>

          <div id="tab3" class="tab-content">

            <style>

  .tabLabel {

    display: block;

    font-size: 12px;

  }

</style>

<div style="position: relative; padding: 30px; background: linear-gradient(to bottom, #00f0ff, #c285ff); border-radius: 20px; width: 400px; box-shadow: 0 0 20px rgba(0, 255, 255, 0.3); color: #fff;">

  <div style="text-align: center;">

    <span style="float: right; cursor: pointer; font-size: 24px; font-weight: bold; color: #fff;" id="mm-wwc-close">&times;</span>

    <h2 style="margin: 0 0 20px 0; font-size: 32px;">⚙️</h2>

  </div>

  
  <div style="margin-bottom: 15px;">

    <label for="wormate_id" style="display: block; margin-bottom: 8px; font-weight: bold;">📋 Account ID</label>

    <div style="display: flex; gap: 10px;">

      <input value="${bbs.userId}" type="text" id="wormate_id" readonly style="padding: 8px; border: none; border-radius: 8px; flex: 1; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);" />

      <button onclick="navigator.clipboard.writeText('${bbs.userId}')" style="background-color: #910e91; color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-weight: bold; box-shadow: 0 0 10px #f0f; transition: 0.3s ease;" onmouseover="this.style.backgroundColor='#b91ab9'; this.style.boxShadow='0 0 20px #f0f'" onmouseout="this.style.backgroundColor='#910e91'; this.style.boxShadow='0 0 10px #f0f'">COPY</button>

    </div>

  </div>

  

  <div style="margin-bottom: 15px;">

    <label for="fileSkin" style="display: block; margin-bottom: 8px; font-weight: bold;">📁 Skin_Wear_file (.json)</label>

    <div style="display: flex; gap: 10px;">

      <input type="file" accept=".json" id="fileSkin" style="padding: 8px; border: none; border-radius: 8px; flex: 1; box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);" />

      <button onclick="document.getElementById('fileSkin').value=''" style="background-color: #910e91; color: white; border: none; border-radius: 8px; padding: 8px 12px; cursor: pointer; font-weight: bold; box-shadow: 0 0 10px #f0f; transition: 0.3s ease;" onmouseover="this.style.backgroundColor='#b91ab9'; this.style.boxShadow='0 0 20px #f0f'" onmouseout="this.style.backgroundColor='#910e91'; this.style.boxShadow='0 0 10px #f0f'">Clear</button>

    </div>

  </div>

  <br>

      
  <div style="margin: 10px 0;border-bottom: 1px  solid #CCC;padding-bottom: 5px;">

    <button id="toShareRank" onclick="toShareRank()">To Share in data e Rank</button>

  </div>

  <div style="margin: 10px 0;border-bottom: 1px  solid #CCC;padding-bottom: 5px;">

    The data is updated manually only due to data sharing regulations.

    <div style="margin: 10px 0;">

      <button id="btnGenerateToken" type="button" onclick="onOpen()"

        style="width: 100%;background-color: #54fd36;padding: 6px;font-size: 20px;">

        Open Account

      </button>

    </div>

  </div>

  <br />

  <div style="margin-top: 5px;">

    <div style="display: flex;gap: 10px;justify-content: space-between;align-items: center;">

      <div>

        <label for="sharedLocation">CONNECT IN</label>

        <input type="text" placeholder="ROOM CODE" id="roomCode" name="roomCode" />

        <div style="display: flex;justify-content: space-between;gap: 5px;margin: 5px 0;">

          <button style="width: 100%;" onclick="setRoomCode(true)">CONNECT</button>

          <button style="width: 100%;" onclick="setRoomCode(false)">DISCONNECT</button>

        </div>

      </div>

      

    </div>

  </div>

</div>

<script>

  const serverGame = JSON.parse(localStorage.getItem("serverGame") || "{}");

  const url_token = "https://wormworld.io/extension";

  

  // ✅ استخدام التوكن المحفوظ

  var token = localStorage.getItem("wormworld_token") || bbs.tk;

  var idwormate = bbs.userId;



  (async function () {

    if (document.getElementById("code")) {

      document.getElementById("code").value = serverGame.code || "";

    }

    document.getElementById("roomCode").value = serverGame.roomCode || "";

    _wwcio.player.teamRoom = serverGame.roomCode || "";



    console.log(_wwcio.player);

  })();



  function copyToken(e) {

    const copyText = document.getElementById("code");

    copyText.select();

    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied the text: " + copyText.value);

  }



  function onOpen() {

    var newWindow = window.open("", "_blank");

    onGenerateToken(function () {

      newWindow.location.href = "https://wormworld.io/admin?page=login&token=" + token;

    });

  }



  function createRoom() {

    const oldCode = document.getElementById("code").value;

    serverGame.code = window.gerarCodigoUnico();

    document.getElementById("code").value = serverGame.code;

    serverGame.roomCode = serverGame.code;

    localStorage.setItem("serverGame", JSON.stringify(serverGame));

    alert("Room created successfully!");

  }



  function setRoomCode(connect) {

    try {



      serverGame.roomCode = connect ? document.getElementById("roomCode").value : "";

      _wwcio.player.teamRoom = serverGame.roomCode;

      localStorage.setItem("serverGame", JSON.stringify(serverGame));

      alert("Room " + (connect ? "connected" : "disconnected") + " successfully!");



    } catch (e) {

      console.log(e);

    }

  }



  function onChangeCode() {

    serverGame.code = document.getElementById("code").value;

    localStorage.setItem("serverGame", JSON.stringify(serverGame));

  }



  function onGenerateToken(fn) {

    fetch(url_token + "/account/gen", {

      method: "POST",

      headers: {

        "Content-Type": "application/json",

      },

      body: JSON.stringify({

        tk: token, // ✅ استخدام التوكن المحفوظ

        wuid: bbs.wuid,

      }),

    }).then(async function (response) {

      const json = await response.json();

      token = json.tk;

      // ✅ حفظ التوكن الجديد

      localStorage.setItem("wormworld_token", token);

      if (fn) {

        fn();

      }

    });

  }



  function toShareRank() {

    if (!confirm("Are you sure you want to share your rank?")) {

      return;

    }

    const url_token = "https://gateway.wormate.io/pub/wuid/" + bbs.wuid + "/consent/change?value=true";



    fetch(url_token).then(async function (response) {

      alert("To Share Rank Success!");

      window.location.reload();

    });

  }

</script>

          </div>

          <div id="tab4" class="tab-content">

            

              <strong class="sub-title">KEYBOARD</strong>

<div style="padding: 5px; margin-top: 5px; border: #eb991c 1px solid; display: flex;">

  <ul>

    <li>0 - SHOW/HIDE RECORD HS</li>

    <li>1 - SKIN REPLACE</li>

    <li>9 - SHOW/HIDE TOP HS</li>

    <li>8 - AUTOMATIC LOOP</li>

    <li>7 - AUTOMATIC SPIRAL</li>

    <li>6 - SHOW/HIDE NAMES TOP(1 SEG RUN)</li>

  </ul>

  <ul>

    <li>5 - RESPAWN</li>

    <li>4 - LASER</li>

    <li>3 - BACKGROUND</li>

    <li>&lt;|, - ZOOM(+ 0.25)</li>

    <li>&gt;|. - ZOOM(- 0.25)</li>

    <li>Z = ZOOM(1)</li>

    <li>C = CLOSE-UP(0.5)</li>

  </ul>

</div>

                

          </div>

          <div id="tab5" class="tab-content">

            

              <div style="display:flex; gap: 15px;">

  <div>

    <strong class="sub-title">LASER</strong>

    <input type="checkbox" id="laser" name="laser" value="laser" checked>

    <input type="color" id="color" name="color" value="#ff0000">

    <input type="range" id="range" name="range" min="0.1" max="1" step="0.1" value="0.1">

    <span id="range-value">0.1</span>

  </div>

  <div>

    <strong class="sub-title">ENEMY NAME COLOR</strong>

    <input type="color" id="enemyNameColor" name="enemyNameColor" value="#ff0000">

    <input type="number" id="enemyNameFontSize" name="enemyNameFontSize" min="14" max="28" step="1" value="14">

  </div>

</div>

<strong class="sub-title">CUSTOMIZE</strong>

<button id="TestAUDIO" onclick="testAudio()">Test AUDIO</button>

<button id="clearBackground" onclick="clearBackground()">Clear WALLPAPERS</button>

<button id="clearPosition" onclick="clearMapPosition()">Clear Map Position</button>

<button id="clearClock" onclick="clearClock()">Clear Map Clock</button>

<button id="clearJoyStick" onclick="clearJoyStick()">Clear Joy Stick</button>

<button id="clearBgGame" onclick="clearBgGame()">Clear Bg GAME</button>



<script>



  const range = document.getElementById('range');

  const rangeValue = document.getElementById('range-value');

  const color = document.getElementById('color');

  const laserActive = document.getElementById('laser');

  const enemyNameColor = document.getElementById('enemyNameColor');

  const enemyNameFontSize = document.getElementById('enemyNameFontSize');



  range.value = bbs.laser || 0.1;

  rangeValue.textContent = bbs.laser || 0.1;

  color.value = bbs.laserColor || 0xff0000;

  laserActive.checked = bbs.laserActive || false;

  enemyNameColor.value = bbs.enemyNameColor;

  enemyNameFontSize.value = bbs.enemyNameFontSize || 14;



  range.addEventListener('input', (e) => {

    const value = parseFloat(e.target.value).toFixed(1);

    rangeValue.textContent = value;

    bbs.laser = value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  });



  color.addEventListener('input', (e) => {

    const colorValue = e.target.value;

    bbs.laserColor = colorValue;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log("Selected color: " + colorValue);

  });



  laserActive.addEventListener('change', (e) => {

    bbs.laserActive = e.target.checked;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  });



  enemyNameColor.addEventListener('input', (e) => {

    const colorValue = e.target.value;

    bbs.enemyNameColor = colorValue;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log("Selected color: " + colorValue);

  });



  enemyNameFontSize.addEventListener('input', (e) => {

    const fontSizeValue = e.target.value;

    bbs.enemyNameFontSize = parseInt(fontSizeValue, 10);

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log("Selected font size: " + fontSizeValue);

  });



  function testAudio() {

    testAudioCustom();

  }



  function clearBackground() {

    bbs.backgroundUri = null;

    bbs.background = 0;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("Clear Background");

  }





  function clearMapPosition() {

    bbs.display.clock = { x: 60, y: 60, Tg: null };

    bbs.display.top = { x: 225, y: 1 };

    bbs.display.custom = false;

    bbs.displayFriends = {

      x: -10,

      y: 315,

      rotation: 0,

    }

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("Clear Map Position");

    window.location.reload();

  }



  function clearClock() {

    bbs.display.customClock = null;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("CLOCK MAP UPDATE OK!");

    window.location.reload();

  }



  function clearJoyStick() {

    bbs.customJoystick = null;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("JOYSTICK MAP UPDATE OK!");

    window.location.reload();

  }



  function clearBgGame() {

    bbs.background = null;

    bbs.backgroundIsCustom = false;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("BG GAME CLEAR OK!");

    window.location.reload();

  }





</script>

                

          </div>

          <div id="tab6" class="tab-content">



            <style>

  .set-zoom-wwc {

    display: grid;

    grid-template-columns: repeat(2, 1fr);

    grid-template-rows: repeat(3, 1fr);

    grid-column-gap: 0px;

    grid-row-gap: 0px;

    margin-top: 10px;

  }



  .szwwc-item {

    grid-column: 1 / 3;

  }



  .szwwc-item label {

    display: block;

  }



  .szwwc-item div {

    display: flex;

    align-items: center;

  }



  .szwwc-item input[type="range"] {

    flex: 1;

    width: 90%;

  }

</style>

<div class="set-zoom-wwc">

  <div>

    <label>Zoom PC</label>

    <input type="checkbox" id="activeZoom" />

  </div>

  <div>

    <label>Zoom Mobile</label>

    <input type="checkbox" id="activeZoomMobile" />

  </div>

  <div class="szwwc-item">

    <label>Zoom Limit Down</label>

    <div>

      <input type="range" id="limitDown" min="0.25" max="2" step="0.25" />

      <span id="limitDownValue"></span>

    </div>

  </div>

  <div class="szwwc-item">

    <label>Zoom +|- step (CAUTION)</label>

    <div>

      <input type="range" id="step" min="0.25" max="2" step="0.25" />

      <span id="stepValue"></span>

    </div>

  </div>

  <div class="szwwc-item">

    <label>Zoom Keyboard (c or C)</label>

    <div>

      <input type="range" id="closeUp" min="0.25" max="2" step="0.25" />

      <span id="closeUpValue"></span>

    </div>

  </div>

  <div class="szwwc-item">

    <label>Zoom Keyboard (z or Z)</label>

    <div>

      <input type="range" id="closeDown" min="0.25" max="2" step="0.25" />

      <span id="closeDownValue"></span>

    </div>

  </div>

</div>



<script>

  const configZoom = bbs.configZoom || {

    limitDown: 0.25,

    step: 0.25,

    closeUp: 0.5,

    closeDown: 1,

  };



  document.getElementById("limitDown").value = configZoom.limitDown;

  document.getElementById("step").value = configZoom.step;

  document.getElementById("closeUp").value = configZoom.closeUp;

  document.getElementById("closeDown").value = configZoom.closeDown;



  document.getElementById("limitDownValue").textContent = configZoom.limitDown;

  document.getElementById("stepValue").textContent = configZoom.step;

  document.getElementById("closeUpValue").textContent = configZoom.closeUp;

  document.getElementById("closeDownValue").textContent = configZoom.closeDown;



  function updateConfigZoom() {

    bbs.configZoom = {

      limitDown: parseFloat(document.getElementById("limitDown").value),

      step: parseFloat(document.getElementById("step").value),

      closeUp: parseFloat(document.getElementById("closeUp").value),

      closeDown: parseFloat(document.getElementById("closeDown").value),

    };

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  }



  document.getElementById("limitDown").addEventListener("input", function () {

    document.getElementById("limitDownValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("step").addEventListener("input", function () {

    document.getElementById("stepValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("closeUp").addEventListener("input", function () {

    document.getElementById("closeUpValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("closeDown").addEventListener("input", function () {

    document.getElementById("closeDownValue").textContent = this.value;

    updateConfigZoom();

  });



  document.getElementById("activeZoom").checked = bbs.activeZoom;



  if (false) {

    bbs.activeZoom = false;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  }



  document.getElementById("activeZoom").addEventListener("change", function () {

    if (false) {

      bbs.activeZoom = false;

    } else {

      bbs.activeZoom = this.checked;

    }

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    window.location.reload();

  });



  document.getElementById("activeZoomMobile").checked = bbs.activeZoomMobile;

  document.getElementById("activeZoomMobile").addEventListener("change", function () {

    bbs.activeZoomMobile = this.checked;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    window.location.reload();

  });



</script>



          </div>

          <div id="tab7" class="tab-content">

            

              <style>

  .container-tab7 {}

</style>

<div class="container-tab7">

  <h3>SKINS SELECTEDS</h3>

  <ul id="myListSkin"></ul>

  <hr />

  <button id="cleanTheSkinShed" onclick="initTab7()">Reload LIST</button>

  <button id="cleanTheSkinShed" onclick="cleanTheSkinShed()">Clean LIST</button>

</div>

<script>

  const initTab7 = () => {

    const myListSkin = document.getElementById("myListSkin");

    bbs.cambiar = bbs.cambiar || {};

    if(Object.keys(bbs.cambiar).length === 0){

      myListSkin.innerHTML = "<li>Empty</li>";

      return;

    }

    myListSkin.innerHTML = "";

    for (const key in bbs.cambiar) {

      const li = document.createElement("li");

      li.innerHTML = bbs.cambiar[key];

      myListSkin.appendChild(li);

    }

  }



  function cleanTheSkinShed() {

    bbs.cambiar = {};

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    alert("Clean the skin shed.");

    initTab7();

  }



  initTab7();

</script>

                

          </div>

          <div id="tab8" class="tab-content">

            

              <style>

    .game-area {

        border: 1px solid #CCC;

    }



    .menu-bar {

        width: 100%;

        display: flex;

        gap: 10px;

        justify-content: center;

        align-content: flex-start;

        align-items: flex-start;

    }



    .slider-container-01 {

        width: 95%;

        height: 110px;

        background: #eee;

        display: flex;

        align-content: center;

        justify-content: center;

        align-items: center;

    }



    .slider-container-02 {

        width: 5%;

        display: flex;

        justify-content: center;

    }



    .slider-container-02 input[type="range"] {

        transform: rotate(270deg);

    }

</style>

<div style="padding: 0 0 5px 0;border-bottom: 1px solid #CCC;margin: 0 0 5px 0;">

    <div style="display: flex;">

        <div>

            <label>Type Button Zoom</label>

            <select id="joystickSelectTypeCurrent" name="joystickSelectTypeCurrent">

                <option value="btn">BUTTON</option>

                <option value="range">RANGE</option>

            </select>

        </div> &nbsp; | &nbsp;

        <div>

            <label>Type Name</label>

            <select id="joystickSelectTypeName" name="joystickSelectTypeCurrentName">

                <option value="all">all</option>

                <option value="abb">abbreviated</option>

            </select>

        </div>

    </div>

    <div id="joystickButtons" style="display: flex;margin: 5px 0;justify-content: space-between;">

    </div>

</div>

PREVIEW

<div class="game-area">

    <div class="menu-bar"></div>

    <div style="display: flex;">

        <div class="slider-container-01">

            TOUCH DIRECTIONAL

        </div>

        <div class="slider-container-02">

            <input id="sliderZoom" type="range" min="0.25" max="2" step="0.25" value="1" style="width: 90px;">

        </div>

    </div>

</div>

<hr>

<div>

    <button id="joystickCleanConfig">CLEAN CONFIG</button>

</div>

<script>

    const btn = "btn_";



    document.getElementById("joystickCleanConfig").addEventListener("click", () => {

        if(!confirm("Do you want to clean the configuration?")) return;

        bbs.configJoystick = null

        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        location.reload();

    });



    const initTab8 = () => {



        document.querySelector(".menu-bar").innerHTML = "";

        document.getElementById("joystickButtons").innerHTML = "";



        Object.keys(bbs.configJoystick.buttons).forEach((key) => {



            const button = bbs.configJoystick.buttons[key];

            const buttonElement = document.createElement("button");

            buttonElement.innerHTML = bbs.configJoystick.typeCurrentName === 'all' ? button.label : button.labelAbbreviation;

            buttonElement.id = btn + key;

            buttonElement.disabled = !button.active;

            document.querySelector(".menu-bar").appendChild(buttonElement);



            const checkebox = document.createElement("input");

            checkebox.type = "checkbox";

            checkebox.id = btn + key + "check";

            checkebox.checked = button.active;

            checkebox.addEventListener("change", (event) => {

                bbs.configJoystick.buttons[key].active = event.target.checked;

                localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

                document.getElementById(btn + key).disabled = !event.target.checked;

            });



            const label = document.createElement("label");

            label.htmlFor = checkebox.id;

            label.textContent = button.label;



            const container = document.getElementById("joystickButtons");

            label.prepend(checkebox);

            container.appendChild(label);

        });



        const joystickSelect = document.getElementById("joystickSelectTypeCurrent");

        joystickSelect.value = bbs.configJoystick.typeCurrent;



        joystickSelect.addEventListener("change", (event) => {

            bbs.configJoystick.typeCurrent = event.target.value;

            localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

            initTab8();

        });



        const joystickSelectName = document.getElementById("joystickSelectTypeName");

        joystickSelectName.value = bbs.configJoystick.typeCurrentName;



        joystickSelectName.addEventListener("change", (event) => {

            bbs.configJoystick.typeCurrentName = event.target.value;

            localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

            initTab8();

        });



        const sliderZoom = document.getElementById("sliderZoom");

        if (joystickSelect.value === "btn") {

            sliderZoom.disabled = true;

            document.getElementById(btn + "zoomplus").disabled = false;

            document.getElementById(btn + "zoomminus").disabled = false;

        } else {

            sliderZoom.disabled = false;

            document.getElementById(btn + "zoomplus").disabled = true;

            document.getElementById(btn + "zoomminus").disabled = true;

        }





    }

    initTab8();

</script>

                

          </div>

        </div>

        

          

</div>

<script>

  function changeTab(tabIndex) {

    const tabButtons = document.querySelectorAll(".tab-button");

    for (let i = 0; i < tabButtons.length; i++) {

      tabButtons[i].classList.remove("active");

    }

    const selectedButton = document.getElementById("tab_b" + (tabIndex + 1));

    selectedButton.classList.add("active");



    const tabContents = document.querySelectorAll(".tab-content");

    for (let i = 0; i < tabContents.length; i++) {

      tabContents[i].classList.remove("active-tab");

    }

    const selectedTab = document.getElementById("tab" + (tabIndex + 1));

    selectedTab.classList.add("active-tab");

  }

</script>

<script>

  if (false) {

    function _0x5d83(){const _0x206afa=['prototype','key','77ZtDLrZ','click','includes','return\\x20(function()\\x20','__proto__','9iCzcDS','3174892TttXOR','console','{}.constructor(\\x22return\\x20this\\x22)(\\x20)','1261272KMMZqr','opacity','warn','style','1318701xpEzMU','constructor','5bzjkOa','bind','2554388YgJKyP','log','5574462mflStJ','2182920EZdGNs','(((.+)+)+)+$','getElementById','search','apply','error','stopPropagation','1202714pzPFzR','pointerEvents','length','2hiYRgI','trace','toString','0.5'];_0x5d83=function(){return _0x206afa;};return _0x5d83();}const _0x1fe8a1=_0x100d;(function(_0x543c18,_0x1395cb){const _0x59b7d8=_0x100d,_0x2f54e7=_0x543c18();while(!![]){try{const _0x549729=-parseInt(_0x59b7d8(0x130))/0x1*(parseInt(_0x59b7d8(0x133))/0x2)+-parseInt(_0x59b7d8(0x146))/0x3+-parseInt(_0x59b7d8(0x14a))/0x4+parseInt(_0x59b7d8(0x148))/0x5*(parseInt(_0x59b7d8(0x14c))/0x6)+parseInt(_0x59b7d8(0x13f))/0x7+-parseInt(_0x59b7d8(0x142))/0x8*(-parseInt(_0x59b7d8(0x13e))/0x9)+parseInt(_0x59b7d8(0x14d))/0xa*(parseInt(_0x59b7d8(0x139))/0xb);if(_0x549729===_0x1395cb)break;else _0x2f54e7['push'](_0x2f54e7['shift']());}catch(_0x4d846a){_0x2f54e7['push'](_0x2f54e7['shift']());}}}(_0x5d83,0xc0402));const _0x267f96=(function(){let _0x323eb7=!![];return function(_0x5bd17a,_0x523ed9){const _0x1910a2=_0x323eb7?function(){const _0x2d0df1=_0x100d;if(_0x523ed9){const _0x701c6c=_0x523ed9[_0x2d0df1(0x12d)](_0x5bd17a,arguments);return _0x523ed9=null,_0x701c6c;}}:function(){};return _0x323eb7=![],_0x1910a2;};}()),_0x544ecf=_0x267f96(this,function(){const _0x540910=_0x100d;return _0x544ecf[_0x540910(0x135)]()[_0x540910(0x12c)](_0x540910(0x12a))['toString']()[_0x540910(0x147)](_0x544ecf)[_0x540910(0x12c)](_0x540910(0x12a));});function _0x100d(_0x3ce5b8,_0x168500){const _0x41f287=_0x5d83();return _0x100d=function(_0x5f257c,_0xaf3251){_0x5f257c=_0x5f257c-0x12a;let _0x57c0ce=_0x41f287[_0x5f257c];return _0x57c0ce;},_0x100d(_0x3ce5b8,_0x168500);}_0x544ecf();const _0xaf3251=(function(){let _0xc75621=!![];return function(_0x1a75f7,_0x13e69d){const _0x289d37=_0xc75621?function(){if(_0x13e69d){const _0x4fea53=_0x13e69d['apply'](_0x1a75f7,arguments);return _0x13e69d=null,_0x4fea53;}}:function(){};return _0xc75621=![],_0x289d37;};}()),_0x5f257c=_0xaf3251(this,function(){const _0x1a93d5=_0x100d,_0xca38f9=function(){const _0x3bb04d=_0x100d;let _0x2eed00;try{_0x2eed00=Function(_0x3bb04d(0x13c)+_0x3bb04d(0x141)+');')();}catch(_0x1cec9c){_0x2eed00=window;}return _0x2eed00;},_0x5468ef=_0xca38f9(),_0x27b0a5=_0x5468ef[_0x1a93d5(0x140)]=_0x5468ef['console']||{},_0x3ef65f=[_0x1a93d5(0x14b),_0x1a93d5(0x144),'info',_0x1a93d5(0x12e),'exception','table',_0x1a93d5(0x134)];for(let _0x232895=0x0;_0x232895<_0x3ef65f[_0x1a93d5(0x132)];_0x232895++){const _0x468347=_0xaf3251[_0x1a93d5(0x147)][_0x1a93d5(0x137)][_0x1a93d5(0x149)](_0xaf3251),_0x23f84f=_0x3ef65f[_0x232895],_0xa80bb4=_0x27b0a5[_0x23f84f]||_0x468347;_0x468347[_0x1a93d5(0x13d)]=_0xaf3251[_0x1a93d5(0x149)](_0xaf3251),_0x468347[_0x1a93d5(0x135)]=_0xa80bb4[_0x1a93d5(0x135)]['bind'](_0xa80bb4),_0x27b0a5[_0x23f84f]=_0x468347;}});_0x5f257c(),window['onwheel']=_0x12b532=>{const _0x140b92=_0x100d;luaDeCristal=0x1,e['preventDefault'](),e[_0x140b92(0x12f)]();},window['addEventListener']('keydown',function(_0x3a5d5d){const _0x599c55=_0x100d;['<',',','>','.','z','c'][_0x599c55(0x13b)](_0x3a5d5d[_0x599c55(0x138)])&&(luaDeCristal=0x1,_0x3a5d5d['preventDefault'](),_0x3a5d5d[_0x599c55(0x12f)]());},![]);const el=document[_0x1fe8a1(0x12b)]('mm-action-play');el&&(el['disabled']=!![],el[_0x1fe8a1(0x145)][_0x1fe8a1(0x131)]='none',el[_0x1fe8a1(0x145)][_0x1fe8a1(0x143)]=_0x1fe8a1(0x136),el['addEventListener'](_0x1fe8a1(0x13a),_0xcf1853=>{_0xcf1853['preventDefault'](),_0xcf1853['stopPropagation']();},!![]));setInterval(()=>{luaDeCristal=0x1;},0xbb8);

  }

  var setWormworld = document.getElementById("set_wormworld");

  if (setWormworld) {

    setWormworld.addEventListener("click", function() {

      document.getElementById("mm-settings").click();

    });

  }



  var select = document.getElementById("backgroundArena");

  var inputFile = document.getElementById("fileSkin");



  const setconfigjoystick_checked = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.checked = e.checked;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_color = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.color = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_mode = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.mode = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    console.log(bbs.joystick);

  };

  const setconfigjoystick_position = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.position = {

      left: "75px",

      bottom: "75px",

    };

    if (e.value === "R") {

      bbs.joystick.position = {

        right: "75px",

        bottom: "75px",

      };

    }

    bbs.joystick.positionMode = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_pxy = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.position = {

      left: (parseInt(e.value) + 10).toString() + "px",

      bottom: e.value + "px",

    };

    if (bbs.joystick.positionMode === "R") {

      bbs.joystick.position = {

        right: (parseInt(e.value) + 10).toString() + "px",

        bottom: e.value + "px",

      };

    }

    bbs.joystick.pxy = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setconfigjoystick_size = function (e) {

    if (!bbs.joystick) {

      bbs.joystick = window._wwc.joystick();

    }

    bbs.joystick.size = e.value;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };

  const setIdReplaceSkin = function (e) {

    bbs.idReplaceSkin = window._wwc.isNumberValid(e.value) ? e.value : 32;

    localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

  };



  if (document.getElementById("setArrawInd")) {

    document.getElementById("setArrawInd").checked = bbs.arrow;

    document.getElementById("setArrawInd").addEventListener("change", function () {

      bbs.arrow = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }



  if (document.getElementById("onlytop")) {

    document.getElementById("onlytop").checked = bbs.lr;

    document.getElementById("onlytop").addEventListener("change", function () {

      bbs.lr = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (document.getElementById("showTophs")) {

    document.getElementById("showTophs").checked = bbs.showTophs;

    document.getElementById("showTophs").addEventListener("change", function () {

      bbs.showTophs = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (document.getElementById("showRechs")) {

    document.getElementById("showRechs").checked = bbs.showRechs;

    document.getElementById("showRechs").addEventListener("change", function () {

      bbs.showRechs = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (document.getElementById("activeBadLang")) {

    document.getElementById("activeBadLang").checked = bbs.activeBadLang;

    document.getElementById("activeBadLang").addEventListener("change", function () {

      bbs.activeBadLang = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }



  if (document.getElementById("activeSounds")) {

    document.getElementById("activeSounds").checked = bbs.activeSounds2;

    document.getElementById("activeSounds").addEventListener("change", function () {

      bbs.activeSounds2 = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }





    // إضافة كود Screen Mode هنا

  if (document.getElementById("hudPositionMode")) {

    document.getElementById("hudPositionMode").value = bbs.hudSettings?.mode || 0;

    

    document.getElementById("hudPositionMode").addEventListener("change", function() {

      if (!bbs.hudSettings) {

        bbs.hudSettings = { mode: 0, wi: 1 };

      }

      

      bbs.hudSettings.mode = parseInt(this.value);

      

      if (bbs.hudSettings.mode == 1) {

        bbs.hudSettings.wi = screen.height / (screen.width * 2);

      } else if (bbs.hudSettings.mode == 2) {

        bbs.hudSettings.wi = 0;

      } else {

        bbs.hudSettings.wi = 1;

      }

      

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      console.log("HUD mode changed to:", bbs.hudSettings.mode);

    });

  }



  if (document.getElementById("modoSTREAMER")) {

    document.getElementById("modoSTREAMER").checked = bbs.display.custom;

    document.getElementById("modoSTREAMER").addEventListener("change", function () {

      bbs.display.clock.x = this.checked ? 250 : 60;

      bbs.display.clock.y = 60;

      bbs.display.top.x = this.checked ? 475 : 225;

      bbs.display.top.y = 1;

      bbs.display.custom = this.checked;

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

      window.location.reload();

    });

  }



  if (select && typeof backgroundArena !== 'undefined') {

    for (var i = 0; i < backgroundArena.length; i++) {

      let opt = document.createElement("option");

      opt.value = i;

      opt.innerHTML = backgroundArena[i].nome;

      select.appendChild(opt);

    }

    select.value = isNaN(bbs.background) ? 0 : bbs.background || 0;

  }



  function onChange(event) {

    var reader = new FileReader();

    reader.onload = onReaderLoad;

    reader.readAsText(event.target.files[0]);

  }



  var region = function (a, d, t, e) {

    return {

      texture: d,

      h: t - 5,

      w: t - 5,

      x: t * (e ? 0 : a || 0),

      y: 0,

    };

  };



  function onReaderLoad(event) {

    try {

      let hasBrowserCompatible = "55524c534552565f574f524d574f524c44";

      var hex = hasBrowserCompatible.toString();

      var name_browser = "";



      for (var n = 0; n < hex.length; n += 2) {

        name_browser += String.fromCharCode(parseInt(hex.substr(n, 2), 16));

      }



      if (!window[name_browser]) {

        document.location.reload(true);

        return;

      }



      hasBrowserCompatible =

        /w.*wo.*rl.*h.*ap/gim.test(window[name_browser]) ||

        /l.*host/gim.test(window[name_browser]);



      let t = JSON.parse(event.target.result);



      if (t && t.wear) {

        localStorage.setItem("custom_wormworld_wear", event.target.result);

        alert("LOAD WEAR OK!");

        window.location.reload();

        return;

      }



      if (t && t.skin) {

        localStorage.setItem("custom_wormworld_skin", event.target.result);

        alert("LOAD SKIN OK!");

        window.location.reload();

        return;

      }

      

        if (t.typeCustom && t.typeCustom === "background") {

          alert("Free MODE!");

        }

      

      

        if (t.typeCustom && t.typeCustom === "bgGame") {

          alert("Free MODE!");

        }

      



      

        if (t.typeCustom && t.typeCustom === "audio") {

          alert("Free MODE!");

        }

      

      if (t.typeCustom && t.typeCustom === "customJoyStick") {

        bbs.customJoystick = t;

        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        alert("BACKGROUND JOYSTICK OK!");

        window.location.reload();

        return;

      }

      

        if (t.typeCustom && t.typeCustom === "clockMap") {

          alert("Free MODE!");

        }

      

      if (t.typeCustom && t.typeCustom === "demoSetLayout") {

        bbs.display.clock.x = t.data.wc || 60;

        bbs.display.clock.y = t.data.hc || 60;

        bbs.display.clock.rc = t.data.rc || 0;

        bbs.display.top.x = t.data.wt || 225;

        bbs.display.top.y = t.data.ht || 1;

        bbs.display.top.rt = t.data.rt || 0;

        bbs.display.custom = true;



        localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

        alert("LAYOUT UPDATE OK!");

        return;

      }



      if (Array.isArray(t) && t.length > 0) {

        localStorage.setItem("custom_wormworld_badLang", JSON.stringify(t));

        let regex = [];

        (t || []).forEach((x) => {

          regex.push(x + " | " + x + " | " + x);

        });

        if (typeof badLanguageRegEx !== 'undefined') {

          badLanguageRegEx = badLanguageRegEx + "|" + regex.join("|");

        }

        alert("LIST UPDATE OK!");

        window.location.reload();

      }



      if (t.version_skin === 2) {

        let id_item = "SKIN_" + t.id + "___Z"

        const obj = {

          id: t.id,

          regionDict: {},

          textureDict: {},

          skinArrayDict: [],

          skinGroupArrayDict: [{

            id: t.id,

            name: { en: "Custom V2" },

            list: [],

          }],

          version_skin: 3

        }

        const skin = {

          id: id_item,

          guest: false,

          price: 0,

          priceBefore: 0,

          nonbuyable: false,

          prime: "c_white",

          glow: t.glow,

          base: [],

        };

        for (let c = t.len - 1; 0 <= c; c--) {

          obj.regionDict[id_item + "_" + c] = region(c, id_item, t.cos, 0);

          skin.base.push(id_item + "_" + c);

        }

        obj.textureDict[id_item] = {

          custom: true,

          re1ativePath: t.file || t.td.file,

          h1: true,

        };

        obj.skinArrayDict.push(skin);

        obj.skinGroupArrayDict[0].list.push(id_item);



        alert("SKIN OK!");

        localStorage.setItem("custom_wormworld_skin", JSON.stringify(obj));

        window.location.reload();

      }



      if (t.version_skin === 3) {

        let id_wormate = document.getElementById("wormate_id").value;

        const obj = {

          id: t.id,

          regionDict: {},

          textureDict: {},

          skinArrayDict: [],

          skinGroupArrayDict: [{

            id: t.id,

            name: { en: "CUSTON PACK:" + (t.skins.length) },

            list: [],

          }],

          version_skin: 3

        }

        for (let item of t.skins) {

          const skin = {

            id: item.id,

            guest: false,

            price: 0,

            priceBefore: 0,

            nonbuyable: item.associados.includes(id_wormate),

            prime: "c_white",

            associados: item.associados,

            glow: item.glow,

            base: [],

          };

          for (let c = t.len - 1; 0 <= c; c--) {

            obj.regionDict[item.id + "_" + c] = region(c, item.id, t.cos, 0);

            skin.base.push(item.id + "_" + c);

          }

          obj.textureDict[item.id] = {

            custom: true,

            re1ativePath: item.file,

            h1: true,

            h4: true,

          };

          obj.skinArrayDict.push(skin);

          obj.skinGroupArrayDict[0].list.push(item.id);

        }

        alert("PACKAGE SKIN OK!");

        localStorage.setItem("custom_wormworld_skin", JSON.stringify(obj));

        window.location.reload();

      }



    } catch (error) {

      console.error(error);

      alert("file not valid!");

    }

  }



  if (inputFile) {

    document.getElementById("fileSkin").addEventListener("change", onChange);

  }



  function closeWwcSetView() {

    const element = document.getElementById("wwc-set-view");

    if (element) element.style.display = "none";

  }



  if (document.getElementById("mm-wwc-close")) {

    document.getElementById("mm-wwc-close").addEventListener("click", closeWwcSetView);

  }



  const newsBox = document.querySelector(".news-box-wormworld");

  const newsBoxClose = document.getElementById("close-news-button");

  const newsCheckbox = document.getElementById("news-checkbox");



  var novidadewormworld = 1;



  if (newsCheckbox) {

    newsCheckbox.addEventListener("change", function () {

      if (this.checked) {

        bbs.novidadewormworld = novidadewormworld;

      } else {

        bbs.novidadewormworld = 0;

      }

      localStorage.setItem("wwcSaveGame", JSON.stringify(bbs));

    });

  }



  if (newsBoxClose) {

    newsBoxClose.addEventListener("click", function () {

      newsBox.style.display = "none";

    });

  }





  if (newsBox && novidadewormworld != bbs.novidadewormworld) {

    newsBox.style.display = "block";

    fetch("https://wormworld.io/news/index.html")

      .then((response) => {

        if (!response.ok) {

          throw new Error("Network response was not ok");

        }

        return response.text();

      })

      .then((html) => {

        document.querySelector(".news-content").innerHTML = html;

      })

      .catch((error) => {

        console.error("Error loading HTML:", error);

      });

  }

</script>`;

                    

                    // إنشاء response جديد

                    return Promise.resolve(new Response(customResponse, {

                        status: 200,

                        statusText: 'OK',

                        headers: {

                            'Content-Type': 'text/html'

                        }

                    }));

                }

                

                // للطلبات الأخرى، إرجاع الاستجابة الأصلية

                return response;

            })

            .catch(error => {

                console.error("❌ خطأ في fetch:", error);

                throw error;

            });

    };

    

    console.log("🔧 تم تثبيت مُعترض fetch المُحدث");

})();



// إضافة اعتراض XMLHttpRequest أيضاً

(function() {

    const originalOpen = XMLHttpRequest.prototype.open;

    const originalSend = XMLHttpRequest.prototype.send;

    

    XMLHttpRequest.prototype.open = function(method, url, ...args) {

        this._url = url;

        console.log("🌐 طلب XHR:", method, url);

        return originalOpen.apply(this, [method, url, ...args]);

    };

    

    XMLHttpRequest.prototype.send = function(...args) {

        const xhr = this;

        

        if (this._url && (this._url.includes('/extension/set-worm-world') || this._url.includes('/set-worm-world'))) {

            console.log("🎯 اعتراض XHR set-worm-world");

            

            // منع الطلب الأصلي

            setTimeout(() => {

                const customResponse = `<h3>✅ CUSTOMER MODE ACTIVATED VIA XHR ✅</h3>`;

                

                Object.defineProperty(xhr, 'status', { value: 200 });

                Object.defineProperty(xhr, 'statusText', { value: 'OK' });

                Object.defineProperty(xhr, 'responseText', { value: customResponse });

                Object.defineProperty(xhr, 'response', { value: customResponse });

                Object.defineProperty(xhr, 'readyState', { value: 4 });

                

                if (xhr.onreadystatechange) xhr.onreadystatechange();

                if (xhr.onload) xhr.onload();

            }, 100);

            

            return;

        }

        

        return originalSend.apply(this, args);

    };

    

    console.log("🔧 تم تثبيت مُعترض XHR");

})();



console.log("🚀 مُعترض الطلبات جاهز - مع إصلاح مشكلة التوكن!");








document.querySelector(".mm-event-cont")?.style.setProperty("display", "none", "important");
document.querySelector(".mm-logo")?.style.setProperty("display", "none", "important");
document.querySelector(".mm-event-cont + span")?.style.setProperty("display", "none", "important");

// Added server initialization codeee
var N = window.servers || {};
window.servers = N;
(async function() {
    try {
        const t = document.createElement("link");
        t.rel = "stylesheet";
        t.href = "https://xo2xo2.github.io/xo/game.css",
        document.head.appendChild(t);
    } catch (t) {
        console.error("Failed to load TimMap:", t);
        N.Api_listServer = [];
    }
})();












/**

 * WormWorld Skin Changer - مغير سكنات وورم وورلد المطور

 * تم إزالة ميزة الدوران وإبقاء باقي الميزات

 * الإصدار النهائي 1.1 - معدل

 */

(function() {

    'use strict';

    

    // =============== الإعدادات الأساسية ===============

    

    // السكنات الافتراضية للتبديل - يمكن أن تكون أرقاماً أو نصوصاً مختلطة

    const SKIN_IDS = [131];

    

    // أسماء اللاعبين للتبديل عند النقر بزر الماوس الأيمن

    const NAME_OPTIONS = ["حامل من up", "كس امي", "ستريم جحاش"];

    

    // متغيرات التحكم

    let pauseUpdates = false;

    let flyingInterval = null;

    let effectsActive = false;

    let isPlayerListVisible = false;

    let isToggleButtonVisible = false; // إضافة متغير للتحكم في ظهور الزر

    let modalOpen = false; // إضافة متغير للتحقق من وجود نافذة مفتوحة

    let inputActive = false; // إضافة متغير للتحقق من حالة الإدخال النشطة

    let isHoveringList = false; // إضافة متغير للتحقق من تحويم الماوس فوق القائمة

    let originalMousePosition = null; // لحفظ موضع الماوس الأصلي

    let effectsMode = 'none'; // حالة التأثيرات: none, hover, modal

    

    // سجل التغييرات للاعبين

    const playerChanges = {};

    

    // =============== وظائف المساعدة ===============

    

    // قص اسم اللاعب للعرض

    function truncateName(name, maxLength = 15) {

        if (!name || name.trim() === '') {

            return '********';

        }

        return name.length > maxLength ? name.substring(0, maxLength) + '...' : name;

    }

    

    // إنشاء معرف عشوائي

    function generateRandomId() {

        return Math.random().toString(36).substring(2, 10);

    }

    

    // الحصول على اللاعب الحالي

    function getCurrentPlayer() {

        if (window._wwc && window._wwc._anApp && window._wwc._anApp.dh && window._wwc._anApp.dh.ch) {

            return window._wwc._anApp.dh.ch;

        }

        return null;

    }

    

    // التحقق من حالة اللعب

    function isInGameState() {

        return window._wwc && 

               window._wwc._anApp && 

               window._wwc._anApp.dh && 

               window._wwc._anApp.dh.ch;

    }

    

    // =============== وظائف التأثيرات الخاصة ===============

    

    // حفظ حالة اللاعب الأصلية

    function saveOriginalPlayerState() {

        try {

            if (!isInGameState()) return;

            

            const currentPlayer = getCurrentPlayer();

            if (!currentPlayer) return;

            

            // حفظ موضع اللاعب الأصلي إذا لم يكن محفوظًا بالفعل

            if (originalMousePosition === null) {

                const playerPos = currentPlayer.fh();

                originalMousePosition = { x: playerPos.x, y: playerPos.y };

            }

            

            console.log("تم حفظ حالة اللاعب الأصلية");

        } catch (e) {

            console.error("خطأ في حفظ حالة اللاعب:", e);

        }

    }

    

    // استعادة حالة اللاعب الأصلية

    function restoreOriginalPlayerState() {

        try {

            if (!isInGameState()) return;

            

            // استعادة موضع اللاعب إذا كان محفوظاً

            if (originalMousePosition !== null) {

                const currentPlayer = getCurrentPlayer();

                if (currentPlayer && currentPlayer.vh) {

                    currentPlayer.vh(originalMousePosition.x, originalMousePosition.y);

                }

            }

            

            console.log("تم استعادة حالة اللاعب الأصلية");

            

        } catch (e) {

            console.error("خطأ في استعادة حالة اللاعب:", e);

        }

    }

    

    // تحديث حالة التأثيرات بناءً على الوضع الحالي

    function updateEffectsState() {

        // تحديد وضع التأثيرات الحالي

        let newEffectsMode = 'none';

        

        if (modalOpen) {

            // إذا كانت هناك نافذة مفتوحة، فعّل التأثيرات دائمًا

            newEffectsMode = 'modal';

        } else if (isPlayerListVisible && isHoveringList) {

            // إذا كانت القائمة مفتوحة والمؤشر فوقها، فعّل التأثيرات

            newEffectsMode = 'hover';

        } else {

            // في الحالات الأخرى، أوقف التأثيرات

            newEffectsMode = 'none';

        }

        

        // تطبيق التغييرات إذا كان هناك تغيير في الوضع

        if (newEffectsMode !== effectsMode) {

            effectsMode = newEffectsMode;

            

            // تطبيق التأثيرات أو إيقافها حسب الوضع الجديد

            if (effectsMode === 'none') {

                // إيقاف التأثيرات واستعادة التحكم الطبيعي

                if (effectsActive) {

                    stopSpecialEffects();

                }

            } else {

                // تفعيل التأثيرات إذا لم تكن مفعلة بالفعل

                if (!effectsActive) {

                    startSpecialEffects();

                }

            }

            

            console.log("تم تحديث حالة التأثيرات:", effectsMode);

        }

    }

    

    // بدء تأثير الطيران

    function startFlying() {

        // إيقاف تأثير الطيران الحالي أولاً

        stopFlying();

        

        // حفظ حالة اللاعب الأصلية إذا لم تكن محفوظة بالفعل

        if (originalMousePosition === null) {

            saveOriginalPlayerState();

        }

        

        let flyStep = 0;

        let amplitude = 4; // تم تقليل مقدار الارتفاع والانخفاض

        

        // تأثير الحركة لأعلى وأسفل

        flyingInterval = setInterval(function() {

            try {

                if (!isInGameState()) {

                    return;

                }

                

                const currentPlayer = getCurrentPlayer();

                if (!currentPlayer || !currentPlayer.vh) {

                    return;

                }

                

                // التحقق من وضع التأثيرات الحالي

                if (effectsMode === 'none') {

                    // استعادة الموضع الأصلي في وضع عدم التأثيرات

                    if (originalMousePosition !== null) {

                        currentPlayer.vh(originalMousePosition.x, originalMousePosition.y);

                    }

                } else {

                    // تطبيق تأثير الطيران في أوضاع التأثيرات

                    if (originalMousePosition !== null) {

                        // تحريك اللاعب لأعلى وأسفل بشكل متموج

                        const verticalOffset = amplitude * Math.sin(flyStep);

                        

                        // تحديد المكان الجديد للاعب

                        currentPlayer.vh(originalMousePosition.x, originalMousePosition.y + verticalOffset);

                        

                        // زيادة خطوة التأثير

                        flyStep += 0.1;

                    }

                }

            } catch (e) {

                console.log("خطأ في تأثير الطيران:", e);

            }

        }, 50);

        

        console.log("تم تشغيل تأثير الطيران");

    }

    

    // إيقاف تأثير الطيران مع استعادة الحالة

    function stopFlying() {

        if (flyingInterval !== null) {

            clearInterval(flyingInterval);

            flyingInterval = null;

            

            try {

                // استعادة موضع اللاعب الأصلي

                if (originalMousePosition !== null && isInGameState()) {

                    const currentPlayer = getCurrentPlayer();

                    if (currentPlayer && currentPlayer.vh) {

                        currentPlayer.vh(originalMousePosition.x, originalMousePosition.y);

                    }

                }

            } catch (e) {

                console.error("خطأ أثناء استعادة موضع اللاعب:", e);

            }

            

            console.log("تم إيقاف تأثير الطيران");

        }

    }

    

    // تفعيل التأثيرات الخاصة

    function startSpecialEffects() {

        if (effectsActive) return;

        

        effectsActive = true;

        console.log('بدء التأثيرات الخاصة');

        

        // حفظ حالة اللاعب الأصلية قبل بدء التأثيرات

        saveOriginalPlayerState();

        

        // إطلاق تأثير الطيران فقط

        setTimeout(() => {

            startFlying();

        }, 50);

    }

    

    // إيقاف التأثيرات الخاصة واستعادة التحكم

    function stopSpecialEffects() {

        if (!effectsActive) return;

        

        console.log('إيقاف التأثيرات الخاصة');

        effectsActive = false;

        stopFlying();

        

        // استعادة حالة اللاعب الأصلية

        restoreOriginalPlayerState();

        

        // إعادة تعيين المتغيرات المتعلقة بالتأثيرات

        originalMousePosition = null;

    }

    

    // التأكد من إيقاف التأثيرات في جميع الحالات

    function forceStopEffects() {

        effectsActive = false;

        stopFlying();

        

        // استعادة حالة اللاعب الأصلية

        restoreOriginalPlayerState();

        

        // إعادة تعيين المتغيرات المتعلقة بالتأثيرات

        originalMousePosition = null;

        

        // إعادة تعيين وضع التأثيرات

        effectsMode = 'none';

    }

    

    // =============== وظائف تغيير السكنات والأسماء ===============

    

    // تغيير السكن للاعب - تم تحسينها لدعم المعرفات المختلطة

    function cycleSkin(playerId) {

        if (!playerId || !isInGameState()) return;

        

        // الحصول على اللاعب من قائمة اللاعبين

        const player = window._wwc._anApp.dh.Fh[playerId];

        if (!player || !player.Eh) return;

        

        // إنشاء سجل للتغييرات إذا لم يكن موجودًا

        if (!playerChanges[playerId]) {

            playerChanges[playerId] = {

                originalSkin: player.Eh.Hh,

                originalName: player.Eh.ma,

                changes: [],

                currentNameIndex: -1

            };

        }

        

        // دورة السكنات بين القيم المحددة - دعم المعرفات المختلطة

        const currentSkin = String(player.Eh.Hh);

        const currentSkinIndex = SKIN_IDS.findIndex(id => String(id) === currentSkin);

        const nextIndex = (currentSkinIndex === -1 || currentSkinIndex + 1 >= SKIN_IDS.length) ? 0 : currentSkinIndex + 1;

        

        // تغيير السكن

        player.Eh.Hh = SKIN_IDS[nextIndex];

        

        // تسجيل التغيير

        playerChanges[playerId].changes.push({

            type: 'skin',

            from: playerChanges[playerId].originalSkin,

            to: player.Eh.Hh,

            timestamp: Date.now()

        });

    }

    

    // تعيين سكن محدد للاعب - تم تحسينها لدعم المعرفات المختلطة

    function setSkinById(playerId, skinId) {

        if (!playerId || !isInGameState()) return;

        

        // الحصول على اللاعب من قائمة اللاعبين

        const player = window._wwc._anApp.dh.Fh[playerId];

        if (!player || !player.Eh) return;

        

        // التعامل مع معرفات السكن سواء كانت أرقاماً أو حروفاً أو مختلطة

        const newSkinId = skinId;

        

        // إنشاء سجل للتغييرات إذا لم يكن موجودًا

        if (!playerChanges[playerId]) {

            playerChanges[playerId] = {

                originalSkin: player.Eh.Hh,

                originalName: player.Eh.ma,

                changes: [],

                currentNameIndex: -1

            };

        }

        

        // تعيين السكن الجديد

        player.Eh.Hh = newSkinId;

        

        // تسجيل التغيير

        playerChanges[playerId].changes.push({

            type: 'skin',

            from: playerChanges[playerId].originalSkin,

            to: newSkinId,

            timestamp: Date.now()

        });

    }

    

    // تغيير اسم اللاعب

    function setCustomName(playerId, customName) {

        if (!playerId || !isInGameState()) return;

        

        // التحقق من صحة الاسم

        if (!customName || customName.trim() === '') return;

        

        // الحصول على اللاعب من قائمة اللاعبين

        const player = window._wwc._anApp.dh.Fh[playerId];

        if (!player || !player.Eh) return;

        

        // إنشاء سجل للتغييرات إذا لم يكن موجودًا

        if (!playerChanges[playerId]) {

            playerChanges[playerId] = {

                originalSkin: player.Eh.Hh,

                originalName: player.Eh.ma,

                changes: [],

                currentNameIndex: -1

            };

        }

        

        // الاسم السابق

        const previousName = player.Eh.ma;

        

        // تعيين الاسم الجديد

        player.Eh.ma = customName;

        

        // تسجيل التغيير

        playerChanges[playerId].changes.push({

            type: 'name',

            from: previousName,

            to: customName,

            timestamp: Date.now()

        });

    }

    

    // تدوير الاسم بين الخيارات المحددة

    function cycleNameOption(playerId) {

        if (!playerId || !isInGameState()) return;

        

        // الحصول على اللاعب من قائمة اللاعبين

        const player = window._wwc._anApp.dh.Fh[playerId];

        if (!player || !player.Eh) return;

        

        // إنشاء سجل للتغييرات إذا لم يكن موجودًا

        if (!playerChanges[playerId]) {

            playerChanges[playerId] = {

                originalSkin: player.Eh.Hh,

                originalName: player.Eh.ma,

                changes: [],

                currentNameIndex: -1

            };

        }

        

        // الاسم السابق

        const previousName = player.Eh.ma;

        

        // تغيير الاسم للخيار التالي

        playerChanges[playerId].currentNameIndex = 

            (playerChanges[playerId].currentNameIndex + 1) % NAME_OPTIONS.length;

        

        const newName = NAME_OPTIONS[playerChanges[playerId].currentNameIndex];

        

        // تعيين الاسم الجديد

        player.Eh.ma = newName;

        

        // تسجيل التغيير

        playerChanges[playerId].changes.push({

            type: 'name',

            from: previousName,

            to: newName,

            timestamp: Date.now()

        });

        

        return newName;

    }

    

    // إعادة تعيين سكن اللاعب

    function resetSkin(playerId) {

        if (!playerId || !isInGameState()) return;

        

        // الحصول على اللاعب من قائمة اللاعبين

        const player = window._wwc._anApp.dh.Fh[playerId];

        if (!player || !player.Eh) return;

        

        // التحقق من وجود سجل للتغييرات

        if (playerChanges[playerId] && playerChanges[playerId].originalSkin) {

            // إعادة السكن الأصلي

            player.Eh.Hh = playerChanges[playerId].originalSkin;

            

            // تسجيل التغيير

            playerChanges[playerId].changes.push({

                type: 'reset_skin',

                timestamp: Date.now()

            });

        }

    }

    

    // إعادة تعيين اسم اللاعب

    function resetName(playerId) {

        if (!playerId || !isInGameState()) return;

        

        // الحصول على اللاعب من قائمة اللاعبين

        const player = window._wwc._anApp.dh.Fh[playerId];

        if (!player || !player.Eh) return;

        

        // التحقق من وجود سجل للتغييرات

        if (playerChanges[playerId] && playerChanges[playerId].originalName) {

            // إعادة الاسم الأصلي

            player.Eh.ma = playerChanges[playerId].originalName;

            

            // تسجيل التغيير

            playerChanges[playerId].changes.push({

                type: 'reset_name',

                timestamp: Date.now()

            });

            

            // إعادة ضبط مؤشر الاسم

            playerChanges[playerId].currentNameIndex = -1;

        }

    }

    

    // إعادة تعيين جميع إعدادات اللاعب

    function resetAllSettings(playerId) {

        resetSkin(playerId);

        resetName(playerId);

    }

    

    // =============== وظائف واجهة المستخدم - معالجة المدخلات ===============

    

    // تعيين حالة الإدخال النشطة

    function setInputState(active) {

        inputActive = active;

    }

    

    // =============== وظائف واجهة المستخدم - النافذة المخصصة ===============

    

    // إضافة تأثير رفرفة للنافذة

    function addFlutterEffect(promptId) {

        const overlay = $('#' + promptId);

        if (!overlay.length) return;

        

        const promptBox = overlay.find('.wwc-custom-prompt-box');

        

        // إضافة تأثير الرفرفة

        let angle = 0;

        const flutterInterval = setInterval(function() {

            angle += 0.1;

            

            const scaleValue = 1 + Math.sin(angle * 1.5) * 0.03;

            

            promptBox.css({

                'transform': `scale(${scaleValue})`

            });

        }, 50);

        

        // حفظ الفاصل الزمني في كائن النافذة لإيقافه لاحقًا

        overlay.data('flutterInterval', flutterInterval);

        

        // إيقاف التأثير عند إزالة النافذة

        overlay.on('remove', function() {

            clearInterval(flutterInterval);

            

            // إيقاف حالة الإدخال النشطة

            setInputState(false);

            

            // إيقاف حالة النافذة المفتوحة

            modalOpen = false;

            

            // تحديث حالة التأثيرات

            setTimeout(function() {

                updateEffectsState();

            }, 50);

        });

    }

    

    // إنشاء نافذة إدخال مخصصة

    function createCustomPrompt(title, defaultValue, callback) {

        // إزالة أي نوافذ سابقة

        $('.wwc-custom-prompt-overlay').remove();

        

        // تعيين متغير النافذة المفتوحة

        modalOpen = true;

        

        // حفظ حالة اللاعب الأصلية قبل فتح النافذة

        saveOriginalPlayerState();

        

        // تحديث حالة التأثيرات

        setTimeout(function() {

            updateEffectsState();

        }, 50);

        

        // إنشاء معرف فريد للنافذة

        const promptId = 'wwc-prompt-' + generateRandomId();

        

        // إنشاء العناصر

        const overlay = $("<div>").addClass("wwc-custom-prompt-overlay").attr('id', promptId).css({

            position: 'fixed',

            top: 0,

            left: 0,

            width: '100%',

            height: '100%',

            backgroundColor: 'rgba(0,0,0,0)',

            zIndex: 999999,

            display: 'flex',

            justifyContent: 'flex-end',

            alignItems: 'flex-start',

            backdropFilter: 'none'

        });

        

        const promptBox = $("<div>").addClass("wwc-custom-prompt-box").css({

            backgroundColor: 'rgba(0, 0, 0, 0.8)',

            padding: '15px',

            borderRadius: '8px',

            minWidth: '200px',

            maxWidth: '250px',

            boxShadow: '0 0 15px rgba(0,128,255,0.7)',

            display: 'flex',

            flexDirection: 'column',

            gap: '6px',

            margin: '180px 15px 0 0',

            border: '1px solid rgba(100, 200, 255, 0.5)'

        });

        

        const promptTitle = $("<div>").addClass("wwc-custom-prompt-title").text(title).css({

            fontWeight: 'bold',

            fontSize: '15px',

            color: '#fff',

            marginBottom: '5px',

            textAlign: 'center',

            textShadow: '0 0 5px rgba(0,150,255,0.8)'

        });

        

        const promptInput = $("<input>").addClass("wwc-custom-prompt-input").attr({

            type: 'text',

            value: defaultValue || ''

        }).css({

            padding: '6px',

            border: '1px solid #4a90e2',

            borderRadius: '4px',

            width: '100%',

            boxSizing: 'border-box',

            backgroundColor: 'rgba(255, 255, 255, 0.9)',

            color: '#000',

            fontSize: '14px'

        });

        

        const buttonContainer = $("<div>").css({

            display: 'flex',

            justifyContent: 'space-between',

            marginTop: '8px'

        });

        

        const cancelBtn = $("<button>").text("إلغاء").css({

            padding: '5px 10px',

            backgroundColor: 'rgba(244, 67, 54, 0.8)',

            color: 'white',

            border: 'none',

            borderRadius: '4px',

            cursor: 'pointer',

            flex: '1',

            marginRight: '5px',

            transition: 'all 0.3s ease'

        }).hover(

            function() { $(this).css('backgroundColor', 'rgba(244, 67, 54, 1)'); },

            function() { $(this).css('backgroundColor', 'rgba(244, 67, 54, 0.8)'); }

        ).click(function() {

            overlay.remove();

            setInputState(false);

            

            // إيقاف حالة النافذة المفتوحة

            modalOpen = false;

            

            // تحديث حالة التأثيرات

            setTimeout(function() {

                updateEffectsState();

            }, 50);

        });

        

        const confirmBtn = $("<button>").text("تأكيد").css({

            padding: '5px 10px',

            backgroundColor: 'rgba(76, 175, 80, 0.8)',

            color: 'white',

            border: 'none',

            borderRadius: '4px',

            cursor: 'pointer',

            flex: '1',

            marginLeft: '5px',

            transition: 'all 0.3s ease'

        }).hover(

            function() { $(this).css('backgroundColor', 'rgba(76, 175, 80, 1)'); },

            function() { $(this).css('backgroundColor', 'rgba(76, 175, 80, 0.8)'); }

        ).click(function() {

            const value = promptInput.val();

            overlay.remove();

            setInputState(false);

            

            // إيقاف حالة النافذة المفتوحة

            modalOpen = false;

            

            // تحديث حالة التأثيرات

            setTimeout(function() {

                updateEffectsState();

                

                // استدعاء دالة الاسترجاع بعد استعادة التحكم

                if (callback) callback(value);

            }, 50);

        });

        

        // تجميع العناصر

        buttonContainer.append(cancelBtn, confirmBtn);

        promptBox.append(promptTitle, promptInput, buttonContainer);

        overlay.append(promptBox);

        

        // إضافة النافذة إلى الصفحة

        $("body").append(overlay);

        

        // تركيز الإدخال

        promptInput.focus();

        

        // تفعيل حالة الإدخال النشطة

        setInputState(true);

        

        // تعيين معالجات أحداث حقل الإدخال

        promptInput

            .on('focus', function() {

                setInputState(true);

            })

            .on('blur', function() {

                // لا تقم بإلغاء تنشيط الإدخال لأن هذا قد يحدث عند النقر على الأزرار

            })

            .on('keydown', function(e) {

                // منع انتشار أحداث مفتاح R خارج حقل الإدخال

                if (e.key === 'r' || e.key === 'R') {

                    e.stopPropagation();

                }

                

                // معالجة الضغط على Enter

                if (e.key === 'Enter') {

                    const value = promptInput.val();

                    overlay.remove();

                    setInputState(false);

                    

                    // إيقاف حالة النافذة المفتوحة

                    modalOpen = false;

                    

                    // تحديث حالة التأثيرات

                    setTimeout(function() {

                        updateEffectsState();

                        

                        // استدعاء دالة الاسترجاع بعد استعادة التحكم

                        if (callback) callback(value);

                    }, 50);

                }

            });

        

        // معالجة الضغط على ESC

        $(document).on('keydown.customprompt', function(e) {

            if (e.key === 'Escape') {

                overlay.remove();

                setInputState(false);

                $(document).off('keydown.customprompt');

                

                // إيقاف حالة النافذة المفتوحة

                modalOpen = false;

                

                // تحديث حالة التأثيرات

                setTimeout(function() {

                    updateEffectsState();

                }, 50);

            }

        });

        

        // تأثيرات الحركة للنافذة

        promptBox.css({

            animation: 'wwc-float 3s infinite ease-in-out'

        });

        

        // تأثيرات الحركة للنافذة

        promptBox.css({

            animation: 'wwc-float 3s infinite ease-in-out'

        });

        

        // إضافة تأثير الرفرفة

        addFlutterEffect(promptId);

        

        return promptId;

    }



    // =============== وظائف واجهة المستخدم - قائمة اللاعبين ===============

    

    // إنشاء واجهة المستخدم الرئيسية

    function createUI() {

        // إنشاء قائمة اللاعبين

        if ($("#wwc-player-names").length === 0) {

            const playerList = $("<div id='wwc-player-names' style='top: 340px; right: 10px; width:200px; z-index: 999999; position: absolute; display: none;'></div>")

                .prependTo("body")

                .on('mouseenter', function() {

                    pauseUpdates = true;

                    isHoveringList = true;

                    

                    // تحديث حالة التأثيرات

                    updateEffectsState();

                })

                .on('mouseleave', function() {

                    pauseUpdates = false;

                    isHoveringList = false;

                    

                    // تحديث حالة التأثيرات

                    updateEffectsState();

                    

                    updatePlayerList();

                });

            

            // إضافة أنماط CSS

            const style = $("<style></style>").text(`

                #wwc-player-names {

                    display: flex;

                    flex-direction: column;

                    gap: 1px;

                    padding: 4px;

                    margin: 0;

                    background-color: rgba(0, 0, 0, 0.7);

                    border-radius: 8px;

                    border: 1px solid rgba(100, 180, 255, 0.4);

                    box-shadow: 0 0 15px rgba(0, 120, 255, 0.3);

                    backdrop-filter: blur(3px);

                    max-height: 80vh;

                    overflow-y: auto;

                }

                .wwc-player-row {

                    display: flex;

                    align-items: center;

                    width: 100%;

                    margin: 1px 0;

                    padding: 2px;

                    position: relative;

                    height: 18px;

                    line-height: 18px;

                    background-color: rgba(30, 30, 40, 0.6);

                    border-radius: 5px;

                    transition: all 0.3s ease;

                }

                .wwc-player-row:hover {

                    background-color: rgba(50, 50, 80, 0.8);

                    transform: translateX(-3px);

                }

                .wwc-player-name {

                    position: absolute;

                    left: 5px;

                    right: 65px;

                    color: white;

                    font-size: 11px;

                    white-space: nowrap;

                    overflow: hidden;

                    text-overflow: ellipsis;

                    transition: all 0.3s ease;

                    padding: 0;

                    margin: 0;

                }

                .wwc-player-name.skin-changed {

                    text-decoration: underline wavy #4a90e2;

                    color: #a0e0ff;

                }

                .wwc-player-name.name-changed {

                    font-style: italic;

                    color: #ff9999;

                }

                .wwc-player-controls {

                    position: absolute;

                    right: 0;

                    top: 0;

                    display: flex;

                    height: 100%;

                }

                .wwc-player-btn {

                    width: 18px;

                    height: 18px;

                    display: flex;

                    justify-content: center;

                    align-items: center;

                    font-size: 11px;

                    cursor: pointer;

                    transition: all 0.3s ease;

                    opacity: 0.8;

                    margin: 0 1px;

                    padding: 0;

                    line-height: 18px;

                    border-radius: 3px;

                }

                .wwc-player-btn:hover {

                    opacity: 1;

                    transform: scale(1.2);

                }

                .wwc-player-btn.skin-btn { color: #a0d0ff; }

                .wwc-player-btn.reset-btn { color: #a0ffa0; }

                .wwc-player-btn.name-btn { color: #ffa0a0; }

                

                /* تأثيرات النوافذ والحركة */

                .wwc-custom-prompt-overlay {

                    animation: wwc-pulse 3s infinite;

                }

                @keyframes wwc-pulse {

                    0% { background-color: rgba(0,0,0,0); }

                    50% { background-color: rgba(0,0,0,0.05); }

                    100% { background-color: rgba(0,0,0,0); }

                }

                @keyframes wwc-float {

                    0% { transform: translateY(0px); }

                    50% { transform: translateY(-8px); }

                    100% { transform: translateY(0px); }

                }

                

               /* زر التبديل */

                #wwc-toggle-button {

                    position: fixed;

                    top: 300px;

                    right: 10px;

                    width: 30px;

                    height: 30px;

                    border-radius: 50%;

                    background-color: rgba(20, 120, 220, 0.8);

                    color: white;

                    display: none;

                    justify-content: center;

                    align-items: center;

                    cursor: pointer;

                    z-index: 999999;

                    font-size: 16px;

                    box-shadow: 0 0 10px rgba(0, 100, 255, 0.5);

                    border: 2px solid rgba(255, 255, 255, 0.3);

                    transition: all 0.3s ease;

                }

                #wwc-toggle-button:hover {

                    transform: scale(1.1);

                    background-color: rgba(30, 150, 255, 0.9);

                }

            `);

            

            // إضافة زر تبديل الظهور (مخفي في البداية)

            const toggleButton = $("<div>")

                .attr("id", "wwc-toggle-button")

                .html("👁️")

                .attr("title", "إظهار/إخفاء قائمة اللاعبين (اضغط M)")

                .click(function() {

                    togglePlayerList();

                });

            

            $("head").append(style);

            $("body").append(toggleButton);

        }

    }

    

    // =============== وظائف تحديث قائمة اللاعبين ===============

    

    // تبديل إظهار/إخفاء قائمة اللاعبين

    function togglePlayerList() {

        isPlayerListVisible = !isPlayerListVisible;

        

        if (isPlayerListVisible) {

            // حفظ حالة اللاعب الأصلية قبل فتح القائمة

            saveOriginalPlayerState();

            

            $("#wwc-player-names").fadeIn(300);

            updatePlayerList();

            $("#wwc-toggle-button").css("background-color", "rgba(30, 150, 255, 0.9)");

        } else {

            $("#wwc-player-names").fadeOut(300);

            $("#wwc-toggle-button").css("background-color", "rgba(20, 120, 220, 0.8)");

            

            // إعادة تعيين متغير التحويم عند إغلاق القائمة

            isHoveringList = false;

        }

        

        // تحديث حالة التأثيرات

        setTimeout(function() {

            updateEffectsState();

        }, 50);

    }



    

    // إظهار زر التبديل

    function showToggleButton() {

        if (!isToggleButtonVisible) {

            isToggleButtonVisible = true;

            $("#wwc-toggle-button").css('display', 'flex').fadeIn(300);

        }

    }

    

    // إخفاء زر التبديل

    function hideToggleButton() {

        if (isToggleButtonVisible) {

            isToggleButtonVisible = false;

            $("#wwc-toggle-button").fadeOut(300);

            

            // إخفاء القائمة أيضاً إذا كانت مفتوحة

            if (isPlayerListVisible) {

                isPlayerListVisible = false;

                $("#wwc-player-names").fadeOut(300);

                isHoveringList = false;

                

                // تحديث حالة التأثيرات

                setTimeout(function() {

                    updateEffectsState();

                }, 50);

            }

        }

    }

    

    // تحديث قائمة اللاعبين

    function updatePlayerList() {

        // إذا كان التحديث متوقفاً، لا تقم بالتحديث

        if (pauseUpdates) return;

        

        const playerContainer = $("#wwc-player-names");

        playerContainer.empty();

        

        // التحقق من حالة اللعب

        if (!isInGameState()) {

            playerContainer.hide();

            isPlayerListVisible = false;

            isHoveringList = false;

            

            // تحديث حالة التأثيرات

            updateEffectsState();

            return;

        }

        

        // إظهار القائمة فقط إذا كانت الحالة "مرئية"

        if (isPlayerListVisible) {

            playerContainer.show();

        } else {

            playerContainer.hide();

            return;

        }

        

        // الحصول على اللاعب الحالي

        const currentPlayer = getCurrentPlayer();

        if (!currentPlayer || !currentPlayer.Eh) return;

        

        const currentPlayerId = currentPlayer.Eh.ae;

        const currentPos = currentPlayer.fh();

        

        // إضافة العنوان

        playerContainer.append(

            $("<div>").css({

                color: 'white',

                textAlign: 'center',

                padding: '2px',

                marginBottom: '3px',

                borderBottom: '1px solid rgba(255,255,255,0.3)',

                fontSize: '12px',

                fontWeight: 'bold'

            }).text("قائمة اللاعبين القريبين")

        );

        

        // جمع وترتيب اللاعبين حسب القرب

        const nearbyPlayers = [];

        

        // مرر على جميع اللاعبين في اللعبة

        for (const playerId in window._wwc._anApp.dh.Fh) {

            const player = window._wwc._anApp.dh.Fh[playerId];

            

            // تجاهل اللاعب الحالي

            if (playerId == currentPlayerId) continue;

            

            // تأكد من أن اللاعب موجود ونشط

            if (!player || !player.Eh || !player.xi) continue;

            

            // حساب المسافة بين اللاعبين

            const playerPos = player.fh();

            const distance = Math.sqrt(

                Math.pow(playerPos.x - currentPos.x, 2) + 

                Math.pow(playerPos.y - currentPos.y, 2)

            );

            

            // إضافة اللاعب وتفاصيله إلى القائمة إذا كان ضمن نطاق محدد

            if (distance <= 1000) {

                nearbyPlayers.push({

                    id: playerId,

                    player: player,

                    distance: distance,

                    name: player.Eh.ma || "لاعب مجهول",

                    skin: player.Eh.Hh

                });

            }

        }

        

        // ترتيب اللاعبين حسب القرب

        nearbyPlayers.sort((a, b) => a.distance - b.distance);

        

        // قصر القائمة على عدد محدد من اللاعبين

        const limitedPlayers = nearbyPlayers.slice(0, 8);

        

        // عرض كل لاعب في القائمة

        limitedPlayers.forEach((playerData) => {

            // إنشاء صف للاعب

            const playerRow = $("<div>").addClass("wwc-player-row");

            

            // اسم اللاعب

            const displayName = truncateName(playerData.name);

            const playerName = $("<span>")

                .addClass("wwc-player-name")

                .text(displayName)

                .on('click', function(e) {

                    e.preventDefault();

                    e.stopPropagation();

                    

                    // تغيير السكن عند النقر

                    cycleSkin(playerData.id);

                    

                    // إضافة تأثير

                    $(this).addClass('skin-changed');

                    

                    return false;

                })

                .on('contextmenu', function(e) {

                    e.preventDefault();

                    e.stopPropagation();

                    

                    // تغيير اسم اللاعب بين الخيارات المحددة

                    const newName = cycleNameOption(playerData.id);

                    

                    // تحديث النص المعروض

                    $(this).text(truncateName(newName));

                    $(this).addClass('name-changed');

                    

                    return false;

                });

            

            // تطبيق تأثيرات إضافية على الاسم إذا كان السكن قد تغير - دعم المعرفات المختلطة

            if (playerChanges[playerData.id] && 

                String(playerChanges[playerData.id].originalSkin) !== String(playerData.player.Eh.Hh)) {

                playerName.addClass('skin-changed');

            }

            

            // أزرار التحكم

            const playerControls = $("<div>").addClass("wwc-player-controls");

            

            // زر تغيير الاسم

            const nameBtn = $("<div>")

                .addClass("wwc-player-btn name-btn")

                .html("📝")

                .attr('title', 'تغيير الاسم')

                .click((e) => {

                    e.preventDefault();

                    e.stopPropagation();

                    

                    // فتح نافذة تغيير الاسم مع تفعيل التأثيرات

                    createCustomPrompt("أدخل الاسم المخصص", playerData.player.Eh.ma, function(customName) {

                        if (customName) {

                            setCustomName(playerData.id, customName);

                            playerName.text(truncateName(customName));

                            playerName.addClass('name-changed');

                        }

                    });

                    

                    return false;

                });

            

            // زر تغيير السكن

            const skinBtn = $("<div>")

                .addClass("wwc-player-btn skin-btn")

                .html("🎨")

                .attr('title', 'تغيير السكن')

                .click((e) => {

                    e.preventDefault();

                    e.stopPropagation();

                    

                    // دورة السكن بسرعة

                    cycleSkin(playerData.id);

                    playerName.addClass('skin-changed');

                    

                    return false;

                })

                .on('contextmenu', function(e) {

                    e.preventDefault();

                    e.stopPropagation();

                    

                    // فتح نافذة لإدخال رقم السكن مع تفعيل التأثيرات

                    createCustomPrompt("أدخل رقم السكن (Skin ID)", playerData.player.Eh.Hh, function(skinId) {

                        if (skinId) {

                            setSkinById(playerData.id, skinId);

                            playerName.addClass('skin-changed');

                        }

                    });

                    

                    return false;

                });

            

            // زر إعادة الإعدادات الأصلية

            const resetBtn = $("<div>")

                .addClass("wwc-player-btn reset-btn")

                .html("↩️")

                .attr('title', 'إعادة الإعدادات الأصلية')

                .click((e) => {

                    e.preventDefault();

                    e.stopPropagation();

                    

                    // إعادة السكن والاسم الأصلي

                    resetAllSettings(playerData.id);

                    

                    // تحديث النص المعروض

                    if (playerChanges[playerData.id] && playerChanges[playerData.id].originalName) {

                        playerName.text(truncateName(playerChanges[playerData.id].originalName));

                    }

                    

                    // إزالة التأثيرات

                    playerName.removeClass('skin-changed name-changed');

                    

                    return false;

                });

            

            // تطبيق تأثيرات إضافية على الاسم إذا كان قد تغير

            if (playerChanges[playerData.id] && 

                playerChanges[playerData.id].originalName != playerData.player.Eh.ma) {

                playerName.addClass('name-changed');

            }

            

            // تجميع أزرار التحكم

            playerControls.append(nameBtn, skinBtn, resetBtn);

            

            // تجميع عناصر الصف

            playerRow.append(playerName, playerControls);

            

            // إضافة الصف إلى الحاوية

            playerContainer.append(playerRow);

        });

        

        // إضافة رسالة إذا لم يتم العثور على لاعبين

        if (limitedPlayers.length === 0) {

            playerContainer.append(

                $("<div>").css({

                    color: 'white',

                    textAlign: 'center',

                    padding: '8px',

                    backgroundColor: 'rgba(0,0,0,0.4)',

                    borderRadius: '5px',

                    margin: '3px 0'

                }).text("لا يوجد لاعبين قريبين")

            );

        }

        

        // إضافة تعليمات استخدام

        playerContainer.append(

            $("<div>").css({

                color: 'rgba(255,255,255,0.7)',

                fontSize: '9px',

                textAlign: 'center',

                padding: '3px',

                marginTop: '3px',

                borderTop: '1px solid rgba(255,255,255,0.3)'

            }).html("🎨: تغيير السكن | 📝: تغيير الاسم<br>زر يمين على الاسم: تبديل أسماء جاهزة")

        );

    }

    

    // =============== إعداد التتبع والمراقبة ===============

    

    // إعداد تتبع اللاعبين

    function setupPlayerTracking() {

        const checkInterval = 500; // فحص كل نصف ثانية

        

        let trackingInterval = setInterval(function() {

            // التحقق من حالة اللعب

            const isInGame = isInGameState();

            

            if (isInGame) {

                // تحديث قائمة اللاعبين إذا كانت مرئية

                if (isPlayerListVisible) {

                    updatePlayerList();

                }

                

                // إظهار زر التبديل فقط إذا كان مفعلاً

                if (isToggleButtonVisible) {

                    $("#wwc-toggle-button").show();

                }

            } else {

                // إخفاء القائمة وإيقاف التأثيرات عند الخروج من اللعبة

                $("#wwc-player-names").hide();

                $("#wwc-toggle-button").hide();

                isPlayerListVisible = false;

                isHoveringList = false;

                

                // تحديث حالة التأثيرات

                updateEffectsState();

            }

        }, checkInterval);

        

        // إيقاف التتبع عند مغادرة الصفحة

        $(window).on('beforeunload', function() {

            forceStopEffects();

            clearInterval(trackingInterval);

        });

        

        // إيقاف التأثيرات عند تبديل التبويب

        document.addEventListener('visibilitychange', function() {

            if (document.hidden) {

                isHoveringList = false;

                

                // تحديث حالة التأثيرات

                updateEffectsState();

            }

        });

    }

    

    // =============== تهيئة السكريبت ===============

    

    // وظيفة البداية

    function initialize() {

        // التحقق من وجود jQuery

        if (typeof $ === 'undefined') {

            console.log("في انتظار تحميل jQuery...");

            setTimeout(initialize, 1000);

            return;

        }

        

        // التحقق من وجود كائنات اللعبة

        if (!window._wwc || !window._wwc._anApp) {

            console.log("في انتظار تحميل كائنات اللعبة...");

            setTimeout(initialize, 1000);

            return;

        }

        

        console.log("بدء تهيئة مغير الجلود مع تأثير الطيران فقط...");

        

        // إنشاء واجهة المستخدم

        createUI();

        

        // إعداد تتبع اللاعبين

        setupPlayerTracking();

        

        // معالجة مفتاح M لإظهار/إخفاء القائمة والزر

        let lastKeyPress = 0;

        $(document).on('keydown', function(e) {

            // استخدام keyCode للمفتاح M (77) لدعم جميع اللغات

            if (e.keyCode === 77) { // مفتاح M

                // منع الضغطات المتكررة السريعة

                const now = Date.now();

                if (now - lastKeyPress < 300) {

                    return;

                }

                lastKeyPress = now;

                

                // تبديل حالة ظهور الزر

                if (!isToggleButtonVisible) {

                    // إظهار الزر

                    showToggleButton();

                } else {

                    // إخفاء الزر والقائمة

                    hideToggleButton();

                }

            }

            

            // إيقاف التأثيرات بمفتاح Escape

            if (e.key === 'Escape') {

                forceStopEffects();

                isHoveringList = false;

            }

        });

        

        // رصد كل الأحداث المرتبطة بحقول الإدخال

        $(document).on('focus', 'input, textarea', function() {

            setInputState(true);

        }).on('blur', 'input, textarea', function() {

            // تأخير إلغاء تنشيط الإدخال لتجنب المشاكل عند النقر على الأزرار

            setTimeout(function() {

                if (!modalOpen) {

                    setInputState(false);

                }

            }, 100);

        });

        

        // إضافة مراقب للحركة على مستوى المستند لرصد تحركات الماوس

        $(document).on('mousemove', function(e) {

            // رصد حركة الماوس للتعامل مع حالة اللاعب

            if (isInGameState() && isPlayerListVisible && !modalOpen) {

                const playerListElement = $("#wwc-player-names");

                if (playerListElement.length) {

                    const rect = playerListElement[0].getBoundingClientRect();

                    

                    // تحقق إذا كان المؤشر فوق القائمة

                    const isMouseOverList = (

                        e.clientX >= rect.left &&

                        e.clientX <= rect.right &&

                        e.clientY >= rect.top &&

                        e.clientY <= rect.bottom

                    );

                    

                    // تحديث متغير التحويم

                    if (isMouseOverList !== isHoveringList) {

                        isHoveringList = isMouseOverList;

                        

                        // تحديث حالة التأثيرات

                        updateEffectsState();

                    }

                }

            }

        });

        

        // تسجيل العناصر الأصلية لتشغيل خاصية الماوس

        document.mouseCaptureList = [];

        

        console.log("اكتملت تهيئة مغير الجلود بنجاح مع تأثير الطيران فقط!");

    }

    

    // بدء التهيئة عند اكتمال تحميل الصفحة

    if (document.readyState === "complete" || document.readyState === "interactive") {

        setTimeout(initialize, 3000);

    } else {

        window.addEventListener('load', function() {

            setTimeout(initialize, 3000);

        });

    }

    

    // التأكد من إيقاف التأثيرات عند إغلاق الصفحة

    window.addEventListener('unload', function() {

        forceStopEffects();

    });

    

})();



// ========== أضافه خطوط الرقيقه لجلد الثعبان xo dark ==========
(function() {
  let snakeLinesEnabled = false;
  let linesContainer = null;
  let linesGraphics = null;

  // Initialize the lines graphics container
  function initLinesGraphics() {
    if (linesContainer) return true;

    try {
      // Find the render container - try multiple paths
      let renderContainer = null;
      
      if (window._wwc && window._wwc._anApp && window._wwc._anApp.og && 
          window._wwc._anApp.og.af && window._wwc._anApp.og.af.ng && 
          window._wwc._anApp.og.af.ng.Qg) {
        renderContainer = window._wwc._anApp.og.af.ng.Qg; // Snake container
      } else if (window._1f8817 && window._1f8817.og && window._1f8817.og.af && 
                 window._1f8817.og.af.ng && window._1f8817.og.af.ng.Qg) {
        renderContainer = window._1f8817.og.af.ng.Qg;
      }
      
      if (!renderContainer) {
        console.log('Render container not found');
        return false;
      }

      // Create container for lines
      linesContainer = new PIXI.Container();
      linesGraphics = new PIXI.Graphics();
      linesContainer.addChild(linesGraphics);
      linesContainer.zIndex = 9999; // Render on top
      renderContainer.addChild(linesContainer);
      
      console.log('Lines graphics initialized successfully');
      return true;
    } catch (e) {
      console.error('Failed to init lines graphics:', e);
      return false;
    }
  }

  // Draw horizontal lines on snake body
  function drawSnakeLines() {
    if (!snakeLinesEnabled || !linesGraphics) return;

    try {
      linesGraphics.clear();

      // Get the game instance
      const gameInstance = window._wwc?._anApp?.dh || window._1f8817?.dh;
      if (!gameInstance || !gameInstance.Fh) return;

      // Set line style
      linesGraphics.lineStyle(0.2, 0xFFFFFF, 0.9); // White lines, thicker and more opaque

      // Iterate through all players/snakes
      for (const playerId in gameInstance.Fh) {
        const worm = gameInstance.Fh[playerId];
        if (!worm || !worm.xi || !worm.Eh) continue;
        if (!worm.wi) continue; // Skip dead worms

        // Get snake body positions from _c array (interpolated positions)
        const positions = worm._c;
        const segmentCount = worm.ad; // actual segment count
        const radius = worm.$c || 10; // segment radius

        if (!positions || segmentCount < 2) continue;

        // Draw lines on each body segment
        const spacing = 3; // Draw a line every 3 segments
        
        for (let i = 0; i < segmentCount - 1; i += spacing) {
          const x1 = positions[i * 2];
          const y1 = positions[i * 2 + 1];
          const x2 = positions[(i + 1) * 2];
          const y2 = positions[(i + 1) * 2 + 1];

          // Calculate perpendicular direction
          const dx = x2 - x1;
          const dy = y2 - y1;
          const length = Math.sqrt(dx * dx + dy * dy);
          
          if (length === 0) continue;

          // Normalized perpendicular vector
          const perpX = -dy / length;
          const perpY = dx / length;

          // Draw horizontal line across the segment
          const lineLength = radius * 2; // Line extends across body width
          const startX = x1 + perpX * lineLength;
          const startY = y1 + perpY * lineLength;
          const endX = x1 - perpX * lineLength;
          const endY = y1 - perpY * lineLength;

          linesGraphics.moveTo(startX, startY);
          linesGraphics.lineTo(endX, endY);
        }
      }
    } catch (e) {
      console.error('Error drawing snake lines:', e);
    }
  }

  // Toggle lines on/off
  function toggleSnakeLines() {
    snakeLinesEnabled = !snakeLinesEnabled;
    
    if (snakeLinesEnabled) {
      if (!initLinesGraphics()) {
        console.log('❌ Failed to initialize lines graphics');
        snakeLinesEnabled = false;
        return;
      }
      console.log('✅ Snake body lines ENABLED');
      linesContainer.visible = true;
    } else {
      console.log('❌ Snake body lines DISABLED');
      if (linesContainer) {
        linesContainer.visible = false;
      }
      if (linesGraphics) {
        linesGraphics.clear();
      }
    }
  }

  // Render loop - update lines every frame
  function updateLines() {
    if (snakeLinesEnabled) {
      drawSnakeLines();
    }
    requestAnimationFrame(updateLines);
  }

  // Initialize the system
  function init() {
    if (typeof PIXI === 'undefined') {
      console.log('Waiting for PIXI...');
      setTimeout(init, 1000);
      return;
    }
    
    if (!window._wwc && !window._1f8817) {
      console.log('Waiting for game to load...');
      setTimeout(init, 1000);
      return;
    }
    
    updateLines();
    console.log('🐍 Snake lines system initialized. Press N to toggle.');
  }

  // Start initialization
  setTimeout(init, 3000);

  // Keyboard handler for 'N' key
  document.addEventListener('keydown', function(e) {
    // Check for 'N' key (keyCode 78)
    if (e.keyCode === 78 || e.key === 'l' || e.key === 'L') {
      // Ignore if typing in input fields
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }
      
      e.preventDefault();
      toggleSnakeLines();
    }
  });

  // Expose toggle function globally (optional)
  window.toggleSnakeLines = toggleSnakeLines;
})();

// Fix settings button click handler
document.addEventListener('DOMContentLoaded', function() {
  // Periodic memory cleanup every 30 seconds
  setInterval(cleanupBackgroundMemory, 30000);
  
  // Settings panel interactive features
  setTimeout(() => {
    const copyBtn = document.querySelector('#mm-wwc-close').parentElement.querySelector('button[onclick*="clipboard"]');
    const idInput = document.getElementById('wormate_id');
    const clearBtn = document.querySelector('button[onclick*="fileSkin.value"]');
    const fileInput = document.getElementById('fileSkin');
   
    
    });

    

})();





































// Headshot Simulator for WormWorld.io

// Updated version with improved features from original game code



// Global configuration

const HeadshotSimulator = {

  // Configuration

  config: {

    defaultCount: 1000,

    delayBetween: 3200, // تم تعديل الوقت إلى 4200 مللي ثانية

    soundEnabled: true,

    visualEnabled: true,

    logEnabled: true,

    soundVolume: 0.0, // تم زيادة مستوى الصوت للسماع

    keyBinding: 'h'

  },

  

  // State

  state: {

    running: false,

    sentCount: 0,

    targetCount: 0,

    startTime: 0,

    floatingTexts: [] // لتتبع النصوص العائمة

  },

  

  // Initialize the simulator

  init: function() {

    this.setupKeyBinding();

    // Silent initialization - no UI message

    return this;

  },

  

  // Setup keyboard shortcut

  setupKeyBinding: function() {

    // إزالة أي مستمع موجود لتجنب التكرار

    try {

      if (this._eventListenerAdded) {

        document.removeEventListener('keydown', this._keyDownHandler);

      }

    } catch (e) {

      // تجاهل الأخطاء هنا

    }

    

    // إنشاء معالج جديد يغلق على هذا

    const self = this;

    this._keyDownHandler = function(event) {

      if (event.key.toLowerCase() === self.config.keyBinding.toLowerCase()) {

        self.start();

        event.preventDefault();

      }

    };

    

    // إضافة المستمع الجديد

    document.addEventListener('keydown', this._keyDownHandler);

    this._eventListenerAdded = true;

  },

  

  // Start simulation with optional count

  start: function(count) {

    if (this.state.running) {

      // Silent - no UI message

      return false;

    }

    

    // Validate game state

    if (!this.validateGameState()) {

      return false;

    }

    

    // Initialize simulation

    this.state.running = true;

    this.state.sentCount = 0;

    this.state.targetCount = count || this.config.defaultCount;

    this.state.startTime = Date.now();

    

    // No initialization message

    this.simulateNext();

    return true;

  },

  

  // Start with just 2 headshots

  startTwoHeadshots: function() {

    if (this.state.running) {

      // Already running

      return false;

    }

    

    // Validate game state

    if (!this.validateGameState()) {

      return false;

    }

    

    // Initialize simulation

    this.log("Starting 2 headshots with interval");

    

    // First headshot immediately

    this.simulateHeadshot();

    this.log("Headshot 1/2 simulated", "success");

    

    // Second headshot after delay

    setTimeout(() => {

      this.simulateHeadshot();

      this.log("Headshot 2/2 simulated", "success");

      

      // Continue with normal simulation if needed

      this.log("Two headshots completed, continuing normal operation");

    }, this.config.delayBetween);

    

    return true;

  },

  

  // Validate the current game state

  validateGameState: function() {

    if (!window._wwc || !window._wwc._anApp) {

      this.log("Error: Game not properly initialized or not in-game", "error");

      return false;

    }

    

    // Check if we're in the game by checking for player existence

    if (!window._wwcio || !window._wwcio.player || !window.bbs) {

      this.log("Error: Player not initialized or not in-game", "error");

      return false;

    }

    

    return true;

  },

  

  // Simulate next headshot

  simulateNext: function() {

    if (!this.state.running || this.state.sentCount >= this.state.targetCount) {

      this.complete();

      return;

    }

    

    // Increment counter

    this.state.sentCount++;

    

    // Perform simulation

    try {

      this.simulateHeadshot();

      this.log(`Headshot ${this.state.sentCount}/${this.state.targetCount} simulated`, "success");

      

      // Schedule next with delay

      setTimeout(() => this.simulateNext(), this.config.delayBetween);

    } catch (error) {

      this.log("Error in headshot simulation: " + error.message, "error");

      this.complete();

    }

  },

  

  // Complete the simulation

  complete: function() {

    if (!this.state.running) return;

    

    const duration = ((Date.now() - this.state.startTime) / 1000).toFixed(1);

    this.log(`Simulation complete! ${this.state.sentCount} headshots in ${duration}s`);

    

    // Reset state

    this.state.running = false;

    

    // Save to localStorage

    if (window.bbs) {

      localStorage.setItem("wwcSaveGame", JSON.stringify(window.bbs));

    }

  },

  

  // Core simulation function - UPDATED to match original game logic

  simulateHeadshot: function() {

    // التحقق من حالة اللعبة

    if (!this.validateGameState()) {

      this.log("Game state is no longer valid, stopping simulation", "error");

      this.state.running = false;

      return;

    }

    

    try {

      // استدعاء الدالة الأصلية fnSetCounts من اللعبة إذا كانت متاحة

      if (window._wwc && typeof window._wwc.fnSetCounts === 'function') {

        window._wwc.fnSetCounts("count", true);

      } else {

        // تحديث العدادات يدويًا إذا لم تكن الدالة متاحة

        this.updateCountersManually();

      }

      

      // تحديث نتيجة اللاعب إذا كان ممكنًا

      try {

        if (window._wwcio && window._wwcio.update) {

          window._wwcio.update("headshot");

        }

      } catch (e) {

        this.log("Couldn't update player score", "warn");

      }

      

      // تشغيل صوت headshot - مع دعم للصوت الخاص كل 10 headshots

      if (this.config.soundEnabled) {

        this.playHeadshotSound();

      }

      

      // تنشيط التأثير المرئي إذا كان ممكّنًا

      if (this.config.visualEnabled) {

        this.triggerVisualEffect();

      }

    } catch (error) {

      this.log("Error in headshot simulation: " + error.message, "error");

    }

  },

  

  // NEW: Update counters manually if original function is not available

  updateCountersManually: function() {

    if (window.bbs) {

      // Update all relevant counters like the original game

      window.bbs.headshot = (window.bbs.headshot || 0) + 1;

      window.bbs.theadshot = (window.bbs.theadshot || 0) + 1;

      

      // Update HOL (Highest headshot count) like original game

      window.bbs.HOL = window.bbs.headshot > (window.bbs.HOL || 0) ? window.bbs.headshot : (window.bbs.HOL || 0);

      

      // Try to update the UI counters if setCountGame function exists

      try {

        if (window._wwc && typeof window._wwc.setCountGame === 'function') {

          window._wwc.setCountGame(

            window.bbs.kill || 0,

            window.bbs.headshot || 0,

            window.bbs.tkill || 0,

            window.bbs.theadshot || 0

          );

        }

      } catch (e) {

        this.log("Couldn't update counters in UI", "warn");

      }

      

      // Save to localStorage like original game

      localStorage.setItem("wwcSaveGame", JSON.stringify(window.bbs));

    }

  },

  

  // UPDATED: Play headshot sound to match original game logic

  playHeadshotSound: function() {

    try {

      // Logic from original game: play special sound every 10 headshots

      const isSpecialSound = window.bbs && window.bbs.headshot && !(window.bbs.headshot % 10);

      const soundType = isSpecialSound ? "shaokahn" : "headshot";

      

      // Try to use original game sound system first

      if (window._0x49249a && typeof window._0x49249a.fxdo === 'function') {

        window._0x49249a.fxdo(soundType);

        return;

      } 

      // Second approach - direct Howl objects if available

      else if (window._0x49249a) {

        if (isSpecialSound && window._0x49249a.shaokahn && window._0x49249a.shaokahn.play) {

          window._0x49249a.shaokahn.play();

          return;

        } else if (window._0x49249a.headshot && window._0x49249a.headshot.play) {

          window._0x49249a.headshot.play();

          return;

        }

      }

      

      // Fallback to direct audio playback

      const soundFile = isSpecialSound ? 

        "/sounds/shaokahn_sound_effect.mp3" : 

        "/sounds/headshot_sound_effect.mp3";

      

      const audioElement = document.createElement("audio");

      audioElement.src = (window.URL_CDN || "") + soundFile;

      audioElement.volume = this.config.soundVolume;

      audioElement.play();

    } catch (error) {

      this.log("Couldn't play sound: " + error.message, "warn");

    }

  },

  

  // UPDATED: Trigger visual effect to match original game

  triggerVisualEffect: function() {

    try {

      // Check if we can access the game's UI functions

      if (window._wwc && window._wwc._anApp && typeof window._wwc._anApp.addChild === 'function') {

        // This is just a simulation - no actual floating text is added

        this.log("Floating headshot text would appear now", "info");

      } else {

        this.log("Visual effect triggered silently", "info");

      }

    } catch (error) {

      this.log("Error triggering visual effect: " + error.message, "warn");

    }

  },

  

  // Logging utility - only logs to console, not UI

  log: function(message, type = "info") {

    if (!this.config.logEnabled) return;

    

    const prefix = "🎯 HeadshotSim: ";

    

    switch (type) {

      case "error":

        console.error(prefix + message);

        break;

      case "warn":

        console.warn(prefix + message);

        break;

      default:

        console.log(prefix + message);

    }

  }

};



// تهيئة المحاكي عندما تكون الصفحة جاهزة

(() => {

  // تنظيف أي نسخة سابقة إذا كانت موجودة

  if (window.HeadshotSimulator && window.HeadshotSimulator._cleanupFn) {

    try {

      window.HeadshotSimulator._cleanupFn();

    } catch (e) {

      console.log("Error cleaning up previous simulator:", e);

    }

  }



  // إزالة أي عنصر toast موجود من إصدارات سابقة

  const oldToast = document.getElementById('headshot-toast');

  if (oldToast && oldToast.parentNode) {

    oldToast.parentNode.removeChild(oldToast);

  }



  // انتظر لحظة حتى تتم تهيئة اللعبة

  setTimeout(() => {

    // تهيئة المحاكي بصمت

    HeadshotSimulator.init();

    

    // دالة التنظيف لفصل الأحداث

    HeadshotSimulator._cleanupFn = function() {

      try {

        if (HeadshotSimulator._eventListenerAdded) {

          document.removeEventListener('keydown', HeadshotSimulator._keyDownHandler);

          HeadshotSimulator._eventListenerAdded = false;

        }

      } catch (e) {

        console.log("Error during cleanup:", e);

      }

    };

  }, 3000);

})();



// جعله متاح من خلال متغير عالمي

window.HeadshotSimulator = HeadshotSimulator;



// لاستخدام وظيفة الـ headshots الثنائية:

// HeadshotSimulator.startTwoHeadshots();



// أو للسلوك العادي:

// HeadshotSimulator.start(10);



