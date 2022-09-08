var inv_mainConfiguration = {
    //18-01-2017 Urvi : Allow File execution in local machine
    inv_local: false,
  
    inv_isIE8: /MSIE (\d+\.\d+);/.test(navigator.userAgent)
      ? new Number(RegExp.$1) == 8
      : false,
    inv_videoJQuery: $j,
    inv_videoCodeReady: false,
    inv_protocol: "https://", //'http://'  //'https://'  //'http://'
    inv_hostName: "viz.tools.investis.com/", //'visualisation.investis.com/'   //'viz.tools.investis.com/'    //'localhost/'
    inv_playerPath: "video/videoPlayer-v.2.0-latest/", //'video/videoPlayer-v.2.0-test/'        //'video/videoPlayer-v.2.0/' 	//clients/n/non-standardFinance/videoPlayer-v.2.0-latest/
  
    inv_videoClient: "apollo",
  
    inv_cssPath: "css/videoPlayer.css",
    inv_renderViewPath: "view/@viewFileName.html",
  
    inv_gaType: "traditional",
    inv_gaAccount: "UA-118326922-1",
    inv_startTime: new Date(),
  
    inv_dateFormat: "yyyy-dd-MM",
  
    inv_modulesRequested: new Array(),
    inv_modulesLoaded: new Array(),
    inv_bypassModuleLoadLogic: false,
  
    inv_disableBuiltInDeeplinking: false,
  
    inv_debugMode: false, //For debugging - Value:true/false - DefaultValue:false
  };
  //18-01-2017 Urvi : Allow File execution in local machine -- start
  if (window.location.host + "/" == inv_mainConfiguration.inv_hostName)
    inv_mainConfiguration.inv_local = true;
  
  if (inv_mainConfiguration.inv_local) {
    inv_mainConfiguration.inv_bypassModuleLoadLogic = false;
    inv_mainConfiguration.inv_gaAccount = "UA-123-1";
    inv_mainConfiguration.inv_renderViewPath = "view/@viewFileName.html";
  }
  
  inv_mainConfiguration.inv_videoBaseURL = function () {
    if (inv_mainConfiguration.inv_local) return "../";
    else
      return (
        inv_mainConfiguration.inv_protocol +
        inv_mainConfiguration.inv_hostName +
        inv_mainConfiguration.inv_playerPath
      );
  };
  //18-01-2017 Urvi : Allow File execution in local machine -- end
  if (!inv_mainConfiguration.inv_isIE8) {
    inv_mainConfiguration.inv_modules = {
      //18-01-2017 Urvi : Changed Centralized Files path
      paths: {
        libs:
          inv_mainConfiguration.inv_videoBaseURL() +
          "centralizedprojectfiles/js/libs/",
        models:
          inv_mainConfiguration.inv_videoBaseURL() +
          "centralizedprojectfiles/js/models/",
        controllers:
          inv_mainConfiguration.inv_videoBaseURL() +
          "centralizedprojectfiles/js/controllers/",
        clientDir:
          inv_mainConfiguration.inv_videoBaseURL() +
          inv_mainConfiguration.inv_videoClient +
          "/js/",
      },
      shim: {
        "clientDir/jquery.videoCode": {
          deps: [
            "libs/matchMedia",
            "models/jquery.deviceDetection",
            "libs/ga",
            "models/jquery.gaCode",
            "libs/imagesloaded.min",
          ],
        },
        "controllers/jquery.videoDataCtrl": {
          deps: ["clientDir/jquery.brightcoveData", "models/jquery.youtubeData"],
        },
        "controllers/jquery.singlePlayerCtrl": {
          deps: ["controllers/jquery.videoPlayerCtrl"],
        },
        "controllers/jquery.videoPlayerCtrl": {
          deps: ["models/jquery.html5Player", "models/jquery.youtubePlayer"],
        },
        "controllers/jquery.videoControlsCtrl": {
          deps: ["models/jquery.videoControls"],
        },
        "controllers/jquery.soundCtrl": {
          deps: [
            "models/jquery.soundCode",
            // getDirName() + "/jquery.mobile.custom.min",
          ],
        },
      },
    };
    function getDirName() {
      if (jQuery.fn.jquery === "1.8.3") {
        return "libs";
      }
      return "clientDir";
    }
    inv_mainConfiguration.inv_videoJQuery(function () {
      inv_mainConfiguration.inv_videoJQuery.getScript(
        inv_mainConfiguration.inv_modules.paths.libs +
          "globalScripts.js?" +
          inv_mainConfiguration.inv_videoJQuery.now(),
        function () {
          inv_mainConfiguration.inv_debugConsole("jquery is ready");
  
          //18-01-2017 Urvi : Allow File execution in local machine
          if (!inv_mainConfiguration.inv_local) {
            var inv_absoluteFilePath =
              inv_mainConfiguration.inv_videoBaseURL() +
              inv_mainConfiguration.inv_videoClient;
  
            inv_mainConfiguration.inv_cssPath =
              inv_absoluteFilePath + "/" + inv_mainConfiguration.inv_cssPath;
            inv_mainConfiguration.inv_renderViewPath =
              inv_absoluteFilePath +
              "/" +
              inv_mainConfiguration.inv_renderViewPath;
          }
          inv_mainConfiguration
            .inv_videoJQuery(
              '<link rel="stylesheet" href="' +
                inv_mainConfiguration.inv_cssPath +
                '" type="text/css" />'
            )
            .appendTo("head")
            .each(function () {
              inv_mainConfiguration.inv_debugConsole("css is ready");
            });
  
          inv_mainConfiguration.inv_resolveModuleNameAndLoad(
            ["clientDir/jquery.videoCode", "controllers/jquery.videoDataCtrl"],
            function () {
              inv_mainConfiguration.inv_videoDataContainer = inv_mainConfiguration
                .inv_videoJQuery("body")
                .videoDataCtrl({
                  videoDataReceived: function () {
                    inv_mainConfiguration.inv_debugConsole(
                      "video code and data js ready"
                    );
                    inv_mainConfiguration.inv_videoCodeReady = true;
                  },
                  errorReceived: function (errString) {
                    inv_mainConfiguration.inv_debugConsole(
                      "inv_videoDataContainer Error:" + errString
                    );
                  },
                });
            }
          );
        }
      );
    });
  }
  (function ($) {
    $.fn.InvPlayer = function (params) {
      var def = new $.Deferred();
      var me = $(this);
      var dataname = "videoCode";
      var instance = me.data(dataname);
      if (!inv_mainConfiguration.inv_isIE8) {
        if (instance == undefined && !inv_mainConfiguration.inv_videoCodeReady) {
          var checkVideoCodeReady = setInterval(function () {
            if (inv_mainConfiguration.inv_videoCodeReady) {
              clearInterval(checkVideoCodeReady);
              def.resolve(me.videoCode(params));
            }
          }, 500);
        } else {
          def.resolve(me.videoCode(params));
        }
      } else {
        me.html("not supported");
        def.reject();
      }
      return def.promise(instance);
    };
  })(inv_mainConfiguration.inv_videoJQuery);