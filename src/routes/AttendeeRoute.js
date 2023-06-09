const router = require("express").Router();
const AttendeeController = require("../controllers/AttendeeController");

router.post("/create", AttendeeController.createAttendees);
router.get("/list", AttendeeController.getAttendeeList);
router.get("/:id", AttendeeController.getAttendeeById);
router.put("/update/:id", AttendeeController.updateAttendee);

module.exports = router;
