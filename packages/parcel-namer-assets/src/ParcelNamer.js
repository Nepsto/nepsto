const path = require("path");
const plugin = require("@parcel/plugin");

const namer = new plugin.Namer({
  name({ bundle }) {
    const origName = path.basename(bundle.getMainEntry().filePath);

    if (["main.scss"].includes(origName)) {
      console.log("Renamed to parcel_style.css");
      return "parcel_style.css";
    }
    if (["main.js"].includes(origName)) {
      console.log("Renamed to parcel_scripts.js");
      return "parcel_scripts.js";
    }

    // Continue to next Namer
    return null;
  },
});

module.exports = namer;
