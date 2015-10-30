var Profile = require("./profile.js");

var studentProfile = new Profile("nathanmaddrey");

studentProfile.on("end", console.dir);

studentProfile.on("error", console.error);