"use strict";

use(function () {
    var teaserkids = resource.getChild("teasers") != null ? resource.getChild("teasers").listChildren() : null;

    return {
        teaserkids: teaserkids
    };
});