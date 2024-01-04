const router = require("express").Router();
const { getAllUniversities } = require("../controllers/universityController");
const { getMajorsByFaculty } = require("../controllers/majorController");
const { getAvailableDegreesForMajorById } = require("../controllers/degreeController");
const { getMajorDegreeByKeys } = require("../controllers/majorDegreeController");

router.get("/all", getAllUniversities);
router.get("/majors/faculty/:faculty_id", getMajorsByFaculty);
router.get("/degrees/major/:major_id", getAvailableDegreesForMajorById);
router.get("/major/:major_id/degree/:degree_id", getMajorDegreeByKeys);

module.exports = router;