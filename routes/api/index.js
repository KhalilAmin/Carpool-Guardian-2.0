const router = require("express").Router();
const faceRoutes = require("./face");
const dbRoutes = require("./db");
const driverRoutes = require("./driver");

router.use("/face", faceRoutes);
router.use("/db", dbRoutes);
router.use("/driver", driverRoutes)

module.exports = router;

