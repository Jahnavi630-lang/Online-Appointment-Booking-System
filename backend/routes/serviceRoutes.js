const express = require("express");

const router =
express.Router();

const {
  createService,
  getServices,
  updateSlots
} =
require(
"../controllers/serviceController"
);

router.post(
  "/create",
  createService
);

router.put(
  "/slots/:id",
  updateSlots
);

router.get(
  "/all",
  getServices
);

module.exports = router;