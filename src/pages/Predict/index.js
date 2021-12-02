import "./Predict.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../components/Common/Container";
import DateAdapter from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";

const Predict = () => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({
    intakeTermCode: null,
    admitTermCode: null,
    expectedGradTermCode: null,
    primaryProgramCode: null,
    hsAverageMarks: null,
    englishTestScore: null,
    firstYearPersistenceCount: null,
    intakeCollegeExperience: null,
    schoolCode: null,
    studentLevelName: null,
    timeStatusName: null,
    fundingSourceName: null,
    mailingPostalCodeGroup3: null,
    gender: null,
    disabilityInd: null,
    futureTermEnroll: null,
    academicPerformance: null,
    ageGroupLongName: null,
    firstGenerationInd: null,
    effectiveAcademicHistory: null,
    applicantTargetSegmentName: null,
  });
  const [form, setForm] = useState({
    intakeTermCode: null,
    admitTermCode: null,
    expectedGradTermCode: null,
    primaryProgramCode: null,
    hsAverageMarks: "",
    englishTestScore: null,
    firstYearPersistenceCount: "",
    intakeCollegeExperience: "",
    schoolCode: "",
    studentLevelName: "",
    timeStatusName: "",
    fundingSourceName: "",
    mailingPostalCodeGroup3: "",
    gender: "",
    disabilityInd: "",
    futureTermEnroll: "",
    academicPerformance: "",
    ageGroupLongName: "",
    firstGenerationInd: "",
    effectiveAcademicHistory: "",
    applicantTargetSegmentName: "",
  });

  const changeHandler = ({ inputName, value: inputValue }) => {
    setForm({ ...form, [inputName]: inputValue });

    if (inputName === "intakeTermCode") {
      if (inputValue === null) {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "admitTermCode") {
      if (inputValue === null) {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "expectedGradTermCode") {
      if (inputValue === null) {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "primaryProgramCode") {
      if (inputValue === null) {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else if (inputValue <= 0 || inputValue > 9999) {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field must be between (0, 9999)",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "hsAverageMarks") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "englishTestScore") {
      if (inputValue === null) {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else if (inputValue <= 0 || inputValue > 200) {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field must be between (0, 200)",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "firstYearPersistenceCount") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "intakeCollegeExperience") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "schoolCode") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "studentLevelName") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "timeStatusName") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "fundingSourceName") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "mailingPostalCodeGroup3") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "gender") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "disabilityInd") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "futureTermEnroll") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "academicPerformance") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "ageGroupLongName") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "firstGenerationInd") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "effectiveAcademicHistory") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
    if (inputName === "applicantTargetSegmentName") {
      if (inputValue === "") {
        setFormErrors((prev) => {
          return {
            ...prev,
            [inputName]: "This field cant be empty",
          };
        });
      } else {
        // empty errors if user is filling again
        setFormErrors((prev) => {
          return { ...prev, [inputName]: null };
        });
      }
    }
  };

  const submitHandler = () => {
    // Check validations for each field of the form
    Object.entries(form).forEach((entry) => {
      const [key, value] = entry;
      changeHandler({ inputName: key, value: value });
    });

    // on submit form validations
    if (
      form.intakeTermCode !== null &&
      form.admitTermCode !== null &&
      form.expectedGradTermCode !== null &&
      form.primaryProgramCode !== null &&
      form.hsAverageMarks !== "" &&
      form.englishTestScore !== null &&
      form.firstYearPersistenceCount !== "" &&
      form.intakeCollegeExperience !== "" &&
      form.schoolCode !== "" &&
      form.studentLevelName !== "" &&
      form.timeStatusName !== "" &&
      form.fundingSourceName !== "" &&
      form.mailingPostalCodeGroup3 !== "" &&
      form.gender !== "" &&
      form.disabilityInd !== "" &&
      form.futureTermEnroll !== "" &&
      form.academicPerformance !== "" &&
      form.ageGroupLongName !== "" &&
      form.firstGenerationInd !== "" &&
      form.effectiveAcademicHistory !== "" &&
      form.applicantTargetSegmentName !== "" &&
      formErrors.intakeTermCode === null &&
      formErrors.admitTermCode === null &&
      formErrors.expectedGradTermCode === null &&
      formErrors.primaryProgramCode === null &&
      formErrors.hsAverageMarks === null &&
      formErrors.englishTestScore === null &&
      formErrors.firstYearPersistenceCount === null &&
      formErrors.intakeCollegeExperience === null &&
      formErrors.schoolCode === null &&
      formErrors.studentLevelName === null &&
      formErrors.timeStatusName === null &&
      formErrors.fundingSourceName === null &&
      formErrors.mailingPostalCodeGroup3 === null &&
      formErrors.gender === null &&
      formErrors.disabilityInd === null &&
      formErrors.futureTermEnroll === null &&
      formErrors.academicPerformance === null &&
      formErrors.ageGroupLongName === null &&
      formErrors.firstGenerationInd === null &&
      formErrors.effectiveAcademicHistory === null &&
      formErrors.applicantTargetSegmentName === null
    ) {
      // submit form
      console.log("SUBMITTED FORM :>>\n", form);
      navigate("/results", { state: { form: form } });
    } else {
      // do not submit form
      console.log("FORM HAVE ERRORS :>> NO ACTION TOOK");
    }
  };

  return (
    <Container>
      <h1>PREDICT</h1>
      <div className="form-fields-container">
        {/* intakeTermCode */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                views={["year"]}
                label="Intake Term Year"
                value={
                  form.intakeTermCode === null
                    ? null
                    : new Date(form.intakeTermCode, 1)
                }
                minDate={new Date("1950-01-01")}
                maxDate={new Date("2050-01-01")}
                error={formErrors.intakeTermCode !== null && true}
                onChange={(newValue) =>
                  changeHandler({
                    inputName: "intakeTermCode",
                    value: new Date(newValue).getFullYear(),
                  })
                }
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </LocalizationProvider>
          </FormControl>
          {formErrors.intakeTermCode !== null && (
            <FormHelperText style={{ color: "tomato" }}>
              {formErrors.intakeTermCode}
            </FormHelperText>
          )}
        </Box>

        {/* admitTermCode */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                views={["year"]}
                label="Admit Term Year"
                value={
                  form.admitTermCode === null
                    ? null
                    : new Date(form.admitTermCode, 1)
                }
                minDate={new Date("1950-01-01")}
                maxDate={new Date("2050-01-01")}
                error={formErrors.admitTermCode !== null && true}
                onChange={(newValue) =>
                  changeHandler({
                    inputName: "admitTermCode",
                    value: new Date(newValue).getFullYear(),
                  })
                }
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </LocalizationProvider>
          </FormControl>
          {formErrors.admitTermCode !== null && (
            <FormHelperText style={{ color: "tomato" }}>
              {formErrors.admitTermCode}
            </FormHelperText>
          )}
        </Box>

        {/* expectedGradTermCode */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DatePicker
                views={["year"]}
                label="Expected Grad Year"
                value={
                  form.expectedGradTermCode === null
                    ? null
                    : new Date(form.expectedGradTermCode, 1)
                }
                minDate={new Date("1950-01-01")}
                maxDate={new Date("2050-01-01")}
                onChange={(newValue) =>
                  changeHandler({
                    inputName: "expectedGradTermCode",
                    value: new Date(newValue).getFullYear(),
                  })
                }
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </LocalizationProvider>
          </FormControl>
          {formErrors.expectedGradTermCode !== null && (
            <FormHelperText style={{ color: "tomato" }}>
              {formErrors.expectedGradTermCode}
            </FormHelperText>
          )}
        </Box>

        {/* primaryProgramCode */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <TextField
            fullWidth
            id="primaryProgramCode"
            label="Primary Program Code"
            type="number"
            error={formErrors.primaryProgramCode !== null && true}
            onChange={(event) =>
              changeHandler({
                inputName: "primaryProgramCode",
                value: parseFloat(event.target.value),
              })
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
          {formErrors.primaryProgramCode !== null && (
            <FormHelperText style={{ color: "tomato" }}>
              {formErrors.primaryProgramCode}
            </FormHelperText>
          )}
        </Box>

        {/* englishTestScore */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <TextField
            fullWidth
            id="englishTestScore"
            label="English Test Score"
            type="number"
            error={formErrors.englishTestScore !== null && true}
            onChange={(event) =>
              changeHandler({
                inputName: "englishTestScore",
                value: parseFloat(event.target.value),
              })
            }
            InputLabelProps={{
              shrink: true,
            }}
          />
          {formErrors.englishTestScore !== null && (
            <FormHelperText style={{ color: "tomato" }}>
              {formErrors.englishTestScore}
            </FormHelperText>
          )}
        </Box>

        {/* hsAverageMarks */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.hsAverageMarks !== null && true}
          >
            <InputLabel id="hsAverageMarks">HS Average Marks</InputLabel>
            <Select
              labelId="hsAverageMarks"
              id="hsAverageMarks"
              value={form.hsAverageMarks}
              label="HS Average Marks"
              onChange={(event) =>
                changeHandler({
                  inputName: "hsAverageMarks",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"A+"}>A+</MenuItem>
              <MenuItem value={"A"}>A</MenuItem>
              <MenuItem value={"B+"}>B+</MenuItem>
              <MenuItem value={"B"}>B</MenuItem>
              <MenuItem value={"C+"}>C+</MenuItem>
              <MenuItem value={"C"}>C</MenuItem>
              <MenuItem value={"D+"}>D+</MenuItem>
              <MenuItem value={"D"}>D</MenuItem>
              <MenuItem value={"F"}>F</MenuItem>
            </Select>
          </FormControl>
          {formErrors.hsAverageMarks !== null && (
            <FormHelperText style={{ color: "tomato" }}>
              {formErrors.hsAverageMarks}
            </FormHelperText>
          )}
        </Box>

        {/* firstYearPersistenceCount */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.firstYearPersistenceCount !== null && true}
          >
            <InputLabel id="firstYearPersistenceCount">
              First Year Persistence Count
            </InputLabel>
            <Select
              labelId="firstYearPersistenceCount"
              id="firstYearPersistenceCount"
              value={form.firstYearPersistenceCount}
              label="First Year Persistence Count"
              onChange={(event) =>
                changeHandler({
                  inputName: "firstYearPersistenceCount",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
            </Select>
          </FormControl>
          {formErrors.firstYearPersistenceCount !== null && (
            <FormHelperText style={{ color: "tomato" }}>
              {formErrors.firstYearPersistenceCount}
            </FormHelperText>
          )}
        </Box>

        {/* intakeCollegeExperience */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.intakeCollegeExperience !== null && true}
          >
            <InputLabel id="intakeCollegeExperience">
              Intake College Experience
            </InputLabel>
            <Select
              labelId="intakeCollegeExperience"
              id="intakeCollegeExperience"
              value={form.intakeCollegeExperience}
              label="Intake College Experience"
              onChange={(event) =>
                changeHandler({
                  inputName: "intakeCollegeExperience",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"CE Enrolled"}>CE Enrolled</MenuItem>
              <MenuItem value={"Enrolled"}>Enrolled</MenuItem>
              <MenuItem value={"Graduate"}>Graduate</MenuItem>
              <MenuItem value={"New to College"}>New to College</MenuItem>
              <MenuItem value={"Prep Program Enrolled"}>
                Prep Program Enrolled
              </MenuItem>
              <MenuItem value={"Prep Program Graduate"}>
                Prep Program Graduate
              </MenuItem>
            </Select>
            {formErrors.intakeCollegeExperience !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.intakeCollegeExperience}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* schoolCode */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl fullWidth error={formErrors.schoolCode !== null && true}>
            <InputLabel id="schoolCode">School Code</InputLabel>
            <Select
              labelId="schoolCode"
              id="schoolCode"
              value={form.schoolCode}
              label="School Code"
              onChange={(event) =>
                changeHandler({
                  inputName: "schoolCode",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"AS"}>AS</MenuItem>
              <MenuItem value={"BU"}>BU</MenuItem>
              <MenuItem value={"CA"}>CA</MenuItem>
              <MenuItem value={"CH"}>CH</MenuItem>
              <MenuItem value={"HT"}>HT</MenuItem>
              <MenuItem value={"ST"}>ST</MenuItem>
              <MenuItem value={"TR"}>TR</MenuItem>
            </Select>
            {formErrors.schoolCode !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.schoolCode}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* studentLevelName */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.studentLevelName !== null && true}
          >
            <InputLabel id="studentLevelName">Student Level Name</InputLabel>
            <Select
              labelId="studentLevelName"
              id="studentLevelName"
              value={form.studentLevelName}
              label="Student Level Name"
              onChange={(event) =>
                changeHandler({
                  inputName: "studentLevelName",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"Post Diploma"}>Post Diploma</MenuItem>
              <MenuItem value={"Post Secondary"}>Post Secondary</MenuItem>
            </Select>
            {formErrors.studentLevelName !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.studentLevelName}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* timeStatusName */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.timeStatusName !== null && true}
          >
            <InputLabel id="timeStatusName">Time Status Name</InputLabel>
            <Select
              labelId="timeStatusName"
              id="timeStatusName"
              value={form.timeStatusName}
              label="Time Status Name"
              onChange={(event) =>
                changeHandler({
                  inputName: "timeStatusName",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"Full-Time"}>Full-Time</MenuItem>
              <MenuItem value={"Part-Time"}>Part-Time</MenuItem>
            </Select>
            {formErrors.timeStatusName !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.timeStatusName}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* fundingSourceName */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.fundingSourceName !== null && true}
          >
            <InputLabel id="fundingSourceName">Funding Source Name</InputLabel>
            <Select
              labelId="fundingSourceName"
              id="fundingSourceName"
              value={form.fundingSourceName}
              label="Funding Source Name"
              onChange={(event) =>
                changeHandler({
                  inputName: "fundingSourceName",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"Apprentice - PS"}>Apprentice - PS</MenuItem>
              <MenuItem value={"GPOG - FT"}>GPOG - FT</MenuItem>
              <MenuItem value={"GPOG - PT"}>GPOG - PT</MenuItem>
              <MenuItem value={"Intl - Regular"}>Intl - Regular</MenuItem>
              <MenuItem value={"Second Career Program"}>
                Second Career Program
              </MenuItem>
            </Select>
            {formErrors.fundingSourceName !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.fundingSourceName}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* mailingPostalCodeGroup3 */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.mailingPostalCodeGroup3 !== null && true}
          >
            <InputLabel id="mailingPostalCodeGroup3">
              Mailing Postal Code
            </InputLabel>
            <Select
              labelId="mailingPostalCodeGroup3"
              id="mailingPostalCodeGroup3"
              value={form.mailingPostalCodeGroup3}
              label="Mailing Postal Code"
              onChange={(event) =>
                changeHandler({
                  inputName: "mailingPostalCodeGroup3",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"J7C"}>J7C</MenuItem>
              <MenuItem value={"K0K"}>K0K</MenuItem>
              <MenuItem value={"K2G"}>K2G</MenuItem>
              <MenuItem value={"K2L"}>K2L</MenuItem>
              <MenuItem value={"L1C"}>L1C</MenuItem>
              <MenuItem value={"L1G"}>L1G</MenuItem>
              <MenuItem value={"L1J"}>L1J</MenuItem>
              <MenuItem value={"L1L"}>L1L</MenuItem>
              <MenuItem value={"L1M"}>L1M'</MenuItem>
              <MenuItem value={"L1N"}>L1N</MenuItem>
              <MenuItem value={"L1P"}>L1P</MenuItem>
              <MenuItem value={"L1R"}>L1R</MenuItem>
              <MenuItem value={"L1S"}>L1S</MenuItem>
              <MenuItem value={"L1T"}>L1T</MenuItem>
              <MenuItem value={"L1V"}>L1V</MenuItem>
              <MenuItem value={"L1W"}>L1W</MenuItem>
              <MenuItem value={"L1X"}>L1X</MenuItem>
              <MenuItem value={"L1Z"}>L1Z</MenuItem>
              <MenuItem value={"L3B"}>L3B'</MenuItem>
              <MenuItem value={"L3R"}>L3R</MenuItem>
              <MenuItem value={"L3S"}>L3S</MenuItem>
              <MenuItem value={"L3Y"}>L3Y</MenuItem>
              <MenuItem value={"L3Z"}>L3Z</MenuItem>
              <MenuItem value={"L4A"}>L4A</MenuItem>
              <MenuItem value={"L4X"}>L4X</MenuItem>
              <MenuItem value={"L6B"}>L6B</MenuItem>
              <MenuItem value={"L6E"}>L6E</MenuItem>
              <MenuItem value={"L6W"}>L6W</MenuItem>
              <MenuItem value={"L6Y"}>L6Y</MenuItem>
              <MenuItem value={"L7A"}>L7A</MenuItem>
              <MenuItem value={"L9C"}>L9C</MenuItem>
              <MenuItem value={"M1B"}>M1B</MenuItem>
              <MenuItem value={"M1C"}>M1C</MenuItem>
              <MenuItem value={"M1E"}>M1E</MenuItem>
              <MenuItem value={"M1G"}>M1G</MenuItem>
              <MenuItem value={"M1H"}>M1H</MenuItem>
              <MenuItem value={"M1J"}>M1J</MenuItem>
              <MenuItem value={"M1K"}>M1K</MenuItem>
              <MenuItem value={"M1L"}>M1L</MenuItem>
              <MenuItem value={"M1M"}>M1M</MenuItem>
              <MenuItem value={"M1N"}>M1N</MenuItem>
              <MenuItem value={"M1P"}>M1P</MenuItem>
              <MenuItem value={"M1R"}>M1R</MenuItem>
              <MenuItem value={"M1S"}>M1S</MenuItem>
              <MenuItem value={"M1T"}>M1T</MenuItem>
              <MenuItem value={"M1V"}>M1V</MenuItem>
              <MenuItem value={"M1W"}>M1W</MenuItem>
              <MenuItem value={"M1X"}>M1X</MenuItem>
              <MenuItem value={"M2H"}>M2H</MenuItem>
              <MenuItem value={"M2J"}>M2J</MenuItem>
              <MenuItem value={"M2K"}>M2K</MenuItem>
              <MenuItem value={"M2L"}>M2L</MenuItem>
              <MenuItem value={"M2N"}>M2N</MenuItem>
              <MenuItem value={"M3A"}>M3A</MenuItem>
              <MenuItem value={"M3C"}>M3C</MenuItem>
              <MenuItem value={"M3J"}>M3J</MenuItem>
              <MenuItem value={"M3L"}>M3L</MenuItem>
              <MenuItem value={"M3M"}>M3M</MenuItem>
              <MenuItem value={"M3N"}>M3N</MenuItem>
              <MenuItem value={"M4A"}>M4A</MenuItem>
              <MenuItem value={"M4B"}>M4B</MenuItem>
              <MenuItem value={"M4C"}>M4C</MenuItem>
              <MenuItem value={"M4H"}>M4H</MenuItem>
              <MenuItem value={"M4J"}>M4J</MenuItem>
              <MenuItem value={"M4K"}>M4K</MenuItem>
              <MenuItem value={"M4L"}>M4L</MenuItem>
              <MenuItem value={"M4M"}>M4M</MenuItem>
              <MenuItem value={"M4S"}>M4S</MenuItem>
              <MenuItem value={"M4X"}>M4X</MenuItem>
              <MenuItem value={"M4Y"}>M4Y</MenuItem>
              <MenuItem value={"M5A"}>M5A</MenuItem>
              <MenuItem value={"M5B"}>M5B</MenuItem>
              <MenuItem value={"M6A"}>M6A</MenuItem>
              <MenuItem value={"M6B"}>M6B</MenuItem>
              <MenuItem value={"M6E"}>M6E</MenuItem>
              <MenuItem value={"M6L"}>M6L</MenuItem>
              <MenuItem value={"M6M"}>M6M</MenuItem>
              <MenuItem value={"M6N"}>M6N</MenuItem>
              <MenuItem value={"M6P"}>M6P</MenuItem>
              <MenuItem value={"M8X"}>M8X</MenuItem>
              <MenuItem value={"M8Z"}>M8Z</MenuItem>
              <MenuItem value={"M9M"}>M9M</MenuItem>
              <MenuItem value={"M9N"}>M9N</MenuItem>
              <MenuItem value={"N5V"}>N5V</MenuItem>
              <MenuItem value={"N5X"}>N5X</MenuItem>
              <MenuItem value={"V2S"}>V2S</MenuItem>
              <MenuItem value={"overseas"}>overseas</MenuItem>
            </Select>
            {formErrors.mailingPostalCodeGroup3 !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.mailingPostalCodeGroup3}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* gender */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl fullWidth error={formErrors.gender !== null && true}>
            <InputLabel id="gender">Gender</InputLabel>
            <Select
              labelId="gender"
              id="gender"
              value={form.gender}
              label="Gender"
              onChange={(event) =>
                changeHandler({
                  inputName: "gender",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"F"}>Female</MenuItem>
              <MenuItem value={"M"}>Male</MenuItem>
            </Select>
            {formErrors.gender !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.gender}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* disabilityInd */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.disabilityInd !== null && true}
          >
            <InputLabel id="disabilityInd">Disability</InputLabel>
            <Select
              labelId="disabilityInd"
              id="disabilityInd"
              value={form.disabilityInd}
              label="Disability"
              onChange={(event) =>
                changeHandler({
                  inputName: "disabilityInd",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"N"}>No</MenuItem>
              <MenuItem value={"Y"}>Yes</MenuItem>
            </Select>
            {formErrors.disabilityInd !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.disabilityInd}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* futureTermEnroll */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.futureTermEnroll !== null && true}
          >
            <InputLabel id="futureTermEnroll">Future Term Enroll</InputLabel>
            <Select
              labelId="futureTermEnroll"
              id="Future Term Enroll"
              value={form.futureTermEnroll}
              label="futureTermEnroll"
              onChange={(event) =>
                changeHandler({
                  inputName: "futureTermEnroll",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"1-0-0-0-0-0-0-0-0-0"}>
                1-0-0-0-0-0-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-0-0-0-0-0-0-0-0-1"}>
                1-0-0-0-0-0-0-0-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-0-0-0-0-0-0-0-1-1"}>
                1-0-0-0-0-0-0-0-1-1
              </MenuItem>
              <MenuItem value={"1-0-0-0-0-0-1-0-0-0"}>
                1-0-0-0-0-0-1-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-0-0-0-0-0-1-0-1-1"}>
                1-0-0-0-0-0-1-0-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-0-0-0-0-0-1-1-0-0"}>
                1-0-0-0-0-0-1-1-0-0
              </MenuItem>
              <MenuItem value={"1-0-0-0-0-0-1-1-1-1"}>
                1-0-0-0-0-0-1-1-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-0-0-0-0-1-0-0-0-0"}>
                1-0-0-0-0-1-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-0-0-0-1-0-0-0-0-0"}>
                1-0-0-0-1-0-0-0-0-0
              </MenuItem>
              <MenuItem value={"1-0-0-0-1-1-1-0-0-0"}>
                1-0-0-0-1-1-1-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-0-0-1-0-0-0-0-0-0"}>
                1-0-0-1-0-0-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-0-0-1-0-0-0-1-0-0"}>
                1-0-0-1-0-0-0-1-0-0
              </MenuItem>
              <MenuItem value={"1-0-0-1-1-0-0-0-0-1"}>
                1-0-0-1-1-0-0-0-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-0-0-1-1-0-1-0-0-0"}>
                1-0-0-1-1-0-1-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-0-0-1-1-0-1-1-0-0"}>
                1-0-0-1-1-0-1-1-0-0
              </MenuItem>
              <MenuItem value={"1-0-0-1-1-0-1-1-0-1"}>
                1-0-0-1-1-0-1-1-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-0-0-1-1-1-1-0-1-1"}>
                1-0-0-1-1-1-1-0-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-0-0-1-1-1-1-1-1-0"}>
                1-0-0-1-1-1-1-1-1-0
              </MenuItem>
              <MenuItem value={"1-0-1-0-0-0-0-0-0-0"}>
                1-0-1-0-0-0-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-0-1-0-0-0-1-0-0-0"}>
                1-0-1-0-0-0-1-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-0-1-1-0-0-0-0-0-0"}>
                1-0-1-1-0-0-0-0-0-0
              </MenuItem>
              <MenuItem value={"1-0-1-1-0-1-0-0-0-1"}>
                1-0-1-1-0-1-0-0-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-0-1-1-0-1-1-0-0-0"}>
                1-0-1-1-0-1-1-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-0-1-1-0-1-1-0-1-0"}>
                1-0-1-1-0-1-1-0-1-0
              </MenuItem>
              <MenuItem value={"1-0-1-1-0-1-1-0-1-1"}>
                1-0-1-1-0-1-1-0-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-0-1-1-1-0-0-0-0-0"}>
                1-0-1-1-1-0-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-0-1-1-1-0-1-1-0-0"}>
                1-0-1-1-1-0-1-1-0-0
              </MenuItem>
              <MenuItem value={"1-0-1-1-1-1-0-0-0-0"}>
                1-0-1-1-1-1-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-0-1-1-1-1-0-0-0-1"}>
                1-0-1-1-1-1-0-0-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-0-1-1-1-1-1-0-1-1"}>
                1-0-1-1-1-1-1-0-1-1
              </MenuItem>
              <MenuItem value={"1-1-0-0-0-0-0-0-0-0"}>
                1-1-0-0-0-0-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-0-0-0-0-0-0-1"}>
                1-1-0-0-0-0-0-0-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-0-0-0-0-0-1-1"}>
                1-1-0-0-0-0-0-0-1-1
              </MenuItem>
              <MenuItem value={"1-1-0-0-0-0-0-1-0-0"}>
                1-1-0-0-0-0-0-1-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-0-0-0-0-1-1-1"}>
                1-1-0-0-0-0-0-1-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-0-0-0-1-0-0-0"}>
                1-1-0-0-0-0-1-0-0-0
              </MenuItem>
              <MenuItem value={"1-1-0-0-0-0-1-1-0-0"}>
                1-1-0-0-0-0-1-1-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-0-0-0-1-1-0-1"}>
                1-1-0-0-0-0-1-1-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-0-0-0-1-1-1-1"}>
                1-1-0-0-0-0-1-1-1-1
              </MenuItem>
              <MenuItem value={"1-1-0-0-0-1-0-0-0-0"}>
                1-1-0-0-0-1-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-0-1-0-0-0-0-0"}>
                1-1-0-0-1-0-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-0-1-0-0-0-0-1"}>
                1-1-0-0-1-0-0-0-0-1
              </MenuItem>
              <MenuItem value={"1-1-0-0-1-0-0-0-1-0"}>
                1-1-0-0-1-0-0-0-1-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-0-1-0-1-0-0-0"}>
                1-1-0-0-1-0-1-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-0-1-1-0-0-0-0"}>
                1-1-0-0-1-1-0-0-0-0
              </MenuItem>
              <MenuItem value={"1-1-0-0-1-1-0-1-1-0"}>
                1-1-0-0-1-1-0-1-1-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-0-1-1-1-0-1-1"}>
                1-1-0-0-1-1-1-0-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-0-1-1-1-1-0-1"}>
                1-1-0-0-1-1-1-1-0-1
              </MenuItem>
              <MenuItem value={"1-1-0-0-1-1-1-1-1-1"}>
                1-1-0-0-1-1-1-1-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-0-0-0-0-0-0"}>
                1-1-0-1-0-0-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-0-0-0-0-0-1"}>
                1-1-0-1-0-0-0-0-0-1
              </MenuItem>
              <MenuItem value={"1-1-0-1-0-0-0-1-0-0"}>
                1-1-0-1-0-0-0-1-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-0-0-0-1-1-1"}>
                1-1-0-1-0-0-0-1-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-0-0-1-0-0-0"}>
                1-1-0-1-0-0-1-0-0-0
              </MenuItem>
              <MenuItem value={"1-1-0-1-0-0-1-1-0-0"}>
                1-1-0-1-0-0-1-1-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-0-1-0-1-0-0"}>
                1-1-0-1-0-1-0-1-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-0-0-0-0-0"}>
                1-1-0-1-1-0-0-0-0-0
              </MenuItem>
              <MenuItem value={"1-1-0-1-1-0-0-0-0-1"}>
                1-1-0-1-1-0-0-0-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-0-0-0-1-0"}>
                1-1-0-1-1-0-0-0-1-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-0-0-0-1-1"}>
                1-1-0-1-1-0-0-0-1-1
              </MenuItem>
              <MenuItem value={"1-1-0-1-1-0-0-1-0-0"}>
                1-1-0-1-1-0-0-1-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-0-0-1-0-1"}>
                1-1-0-1-1-0-0-1-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-0-0-1-1-0"}>
                1-1-0-1-1-0-0-1-1-0
              </MenuItem>
              <MenuItem value={"1-1-0-1-1-0-0-1-1-1"}>
                1-1-0-1-1-0-0-1-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-0-1-0-0-0"}>
                1-1-0-1-1-0-1-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-0-1-0-0-1"}>
                1-1-0-1-1-0-1-0-0-1
              </MenuItem>
              <MenuItem value={"1-1-0-1-1-0-1-1-0-0"}>
                1-1-0-1-1-0-1-1-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-0-1-1-0-1"}>
                1-1-0-1-1-0-1-1-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-0-1-1-1-0"}>
                1-1-0-1-1-0-1-1-1-0
              </MenuItem>
              <MenuItem value={"1-1-0-1-1-0-1-1-1-1"}>
                1-1-0-1-1-0-1-1-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-1-0-0-0-0"}>
                1-1-0-1-1-1-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-1-0-0-0-1"}>
                1-1-0-1-1-1-0-0-0-1
              </MenuItem>
              <MenuItem value={"1-1-0-1-1-1-0-1-0-1"}>
                1-1-0-1-1-1-0-1-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-1-0-1-1-0"}>
                1-1-0-1-1-1-0-1-1-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-1-1-0-0-0"}>
                1-1-0-1-1-1-1-0-0-0
              </MenuItem>
              <MenuItem value={"1-1-0-1-1-1-1-0-0-1"}>
                1-1-0-1-1-1-1-0-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-1-1-1-0-0"}>
                1-1-0-1-1-1-1-1-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-1-1-1-0-1"}>
                1-1-0-1-1-1-1-1-0-1
              </MenuItem>
              <MenuItem value={"1-1-0-1-1-1-1-1-1-0"}>
                1-1-0-1-1-1-1-1-1-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-0-1-1-1-1-1-1-1"}>
                1-1-0-1-1-1-1-1-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-0-0-0-0-0-0-0"}>
                1-1-1-0-0-0-0-0-0-0
              </MenuItem>
              <MenuItem value={"1-1-1-0-0-0-0-0-0-1"}>
                1-1-1-0-0-0-0-0-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-0-0-0-0-0-1-0"}>
                1-1-1-0-0-0-0-0-1-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-0-0-0-1-0-0-0"}>
                1-1-1-0-0-0-1-0-0-0
              </MenuItem>
              <MenuItem value={"1-1-1-0-0-0-1-1-1-0"}>
                1-1-1-0-0-0-1-1-1-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-0-0-1-0-0-0-0"}>
                1-1-1-0-0-1-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-0-0-1-1-0-1-0"}>
                1-1-1-0-0-1-1-0-1-0
              </MenuItem>
              <MenuItem value={"1-1-1-0-1-0-0-0-0-0"}>
                1-1-1-0-1-0-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-0-1-1-0-0-0-0"}>
                1-1-1-0-1-1-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-0-1-1-0-1-0-0"}>
                1-1-1-0-1-1-0-1-0-0
              </MenuItem>
              <MenuItem value={"1-1-1-0-1-1-1-0-0-0"}>
                1-1-1-0-1-1-1-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-0-1-1-1-0-1-1"}>
                1-1-1-0-1-1-1-0-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-0-1-1-1-1-0-0"}>
                1-1-1-0-1-1-1-1-0-0
              </MenuItem>
              <MenuItem value={"1-1-1-1-0-0-0-0-0-0"}>
                1-1-1-1-0-0-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-0-0-0-0-1-0"}>
                1-1-1-1-0-0-0-0-1-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-0-0-1-0-0-0"}>
                1-1-1-1-0-0-1-0-0-0
              </MenuItem>
              <MenuItem value={"1-1-1-1-0-0-1-1-1-0"}>
                1-1-1-1-0-0-1-1-1-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-0-1-0-0-0-0"}>
                1-1-1-1-0-1-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-0-1-1-0-0-0"}>
                1-1-1-1-0-1-1-0-0-0
              </MenuItem>
              <MenuItem value={"1-1-1-1-0-1-1-0-0-1"}>
                1-1-1-1-0-1-1-0-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-0-1-1-0-1-0"}>
                1-1-1-1-0-1-1-0-1-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-0-1-1-0-1-1"}>
                1-1-1-1-0-1-1-0-1-1
              </MenuItem>
              <MenuItem value={"1-1-1-1-0-1-1-1-0-0"}>
                1-1-1-1-0-1-1-1-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-0-0-0-0-0"}>
                1-1-1-1-1-0-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-0-0-0-0-1"}>
                1-1-1-1-1-0-0-0-0-1
              </MenuItem>
              <MenuItem value={"1-1-1-1-1-0-0-1-0-0"}>
                1-1-1-1-1-0-0-1-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-0-0-1-0-1"}>
                1-1-1-1-1-0-0-1-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-0-0-1-1-1"}>
                1-1-1-1-1-0-0-1-1-1
              </MenuItem>
              <MenuItem value={"1-1-1-1-1-0-1-0-0-0"}>
                1-1-1-1-1-0-1-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-0-1-0-0-1"}>
                1-1-1-1-1-0-1-0-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-0-1-0-1-0"}>
                1-1-1-1-1-0-1-0-1-0
              </MenuItem>
              <MenuItem value={"1-1-1-1-1-0-1-1-0-0"}>
                1-1-1-1-1-0-1-1-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-0-1-1-0-1"}>
                1-1-1-1-1-0-1-1-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-0-1-1-1-0"}>
                1-1-1-1-1-0-1-1-1-0
              </MenuItem>
              <MenuItem value={"1-1-1-1-1-0-1-1-1-1"}>
                1-1-1-1-1-0-1-1-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-1-0-0-0-0"}>
                1-1-1-1-1-1-0-0-0-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-1-0-0-0-1"}>
                1-1-1-1-1-1-0-0-0-1
              </MenuItem>
              <MenuItem value={"1-1-1-1-1-1-0-0-1-0"}>
                1-1-1-1-1-1-0-0-1-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-1-0-1-1-1"}>
                1-1-1-1-1-1-0-1-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-1-1-0-0-0"}>
                1-1-1-1-1-1-1-0-0-0
              </MenuItem>
              <MenuItem value={"1-1-1-1-1-1-1-0-0-1"}>
                1-1-1-1-1-1-1-0-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-1-1-0-1-1"}>
                1-1-1-1-1-1-1-0-1-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-1-1-1-0-0"}>
                1-1-1-1-1-1-1-1-0-0
              </MenuItem>
              <MenuItem value={"1-1-1-1-1-1-1-1-0-1"}>
                1-1-1-1-1-1-1-1-0-1
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-1-1-1-1-0"}>
                1-1-1-1-1-1-1-1-1-0
              </MenuItem>{" "}
              <MenuItem value={"1-1-1-1-1-1-1-1-1-1"}>
                1-1-1-1-1-1-1-1-1-1
              </MenuItem>
            </Select>
            {formErrors.futureTermEnroll !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.futureTermEnroll}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* academicPerformance */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.academicPerformance !== null && true}
          >
            <InputLabel id="academicPerformance">
              Academic Performance
            </InputLabel>
            <Select
              labelId="academicPerformance"
              id="academicPerformance"
              value={form.academicPerformance}
              label="Academic Performance"
              onChange={(event) =>
                changeHandler({
                  inputName: "academicPerformance",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"AB - Good"}>AB - Good</MenuItem>
              <MenuItem value={"C - Satisfactory"}>C - Satisfactory</MenuItem>
              <MenuItem value={"DF - Poor"}>DF - Poor</MenuItem>
            </Select>
            {formErrors.academicPerformance !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.academicPerformance}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* ageGroupLongName */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.ageGroupLongName !== null && true}
          >
            <InputLabel id="ageGroupLongName">Age Group</InputLabel>
            <Select
              labelId="ageGroupLongName"
              id="ageGroupLongName"
              value={form.ageGroupLongName}
              label="Age Group"
              onChange={(event) =>
                changeHandler({
                  inputName: "ageGroupLongName",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"0 to 18"}>0 to 18</MenuItem>
              <MenuItem value={"19 to 20"}>19 to 20</MenuItem>
              <MenuItem value={"21 to 25"}>21 to 25</MenuItem>
              <MenuItem value={"26 to 30"}>26 to 30</MenuItem>
              <MenuItem value={"31 to 35"}>31 to 35</MenuItem>
              <MenuItem value={"36 to 40"}>36 to 40</MenuItem>
              <MenuItem value={"41 to 50"}>41 to 50</MenuItem>
              <MenuItem value={"51 to 60"}>51 to 60</MenuItem>
            </Select>
            {formErrors.ageGroupLongName !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.ageGroupLongName}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* firstGenerationInd */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.firstGenerationInd !== null && true}
          >
            <InputLabel id="firstGenerationInd">
              Indigenous First Generation
            </InputLabel>
            <Select
              labelId="firstGenerationInd"
              id="firstGenerationInd"
              value={form.firstGenerationInd}
              label="Indigenous First Generation"
              onChange={(event) =>
                changeHandler({
                  inputName: "firstGenerationInd",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"N"}>No</MenuItem>
              <MenuItem value={"Y"}>Yes</MenuItem>
            </Select>
            {formErrors.firstGenerationInd !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.firstGenerationInd}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* effectiveAcademicHistory */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.effectiveAcademicHistory !== null && true}
          >
            <InputLabel id="effectiveAcademicHistory">
              Effective Academic History
            </InputLabel>
            <Select
              labelId="effectiveAcademicHistory"
              id="effectiveAcademicHistory"
              value={form.effectiveAcademicHistory}
              label="Effective Academic History"
              onChange={(event) =>
                changeHandler({
                  inputName: "effectiveAcademicHistory",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"no"}>No</MenuItem>{" "}
              <MenuItem value={"high school"}>High School</MenuItem>{" "}
              <MenuItem value={"post secondary"}>Post Secondary</MenuItem>
            </Select>
            {formErrors.effectiveAcademicHistory !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.effectiveAcademicHistory}
              </FormHelperText>
            )}
          </FormControl>
        </Box>

        {/* applicantTargetSegmentName */}
        <Box sx={{ minWidth: 300, margin: 2 }}>
          <FormControl
            fullWidth
            error={formErrors.applicantTargetSegmentName !== null && true}
          >
            <InputLabel id="applicantTargetSegmentName">
              Applicant Target Segment
            </InputLabel>
            <Select
              labelId="applicantTargetSegmentName"
              id="applicantTargetSegmentName"
              value={form.applicantTargetSegmentName}
              label="Applicant Target Segment"
              onChange={(event) =>
                changeHandler({
                  inputName: "applicantTargetSegmentName",
                  value: event.target.value,
                })
              }
            >
              <MenuItem value={"Direct Entry"}>Direct Entry</MenuItem>
              <MenuItem value={"Non-Direct Entry"}>Non-Direct Entry</MenuItem>
              <MenuItem value={"International"}>International</MenuItem>
            </Select>
            {formErrors.applicantTargetSegmentName !== null && (
              <FormHelperText style={{ color: "tomato" }}>
                {formErrors.applicantTargetSegmentName}
              </FormHelperText>
            )}
          </FormControl>
        </Box>
      </div>

      <div style={{ margin: 15 }}>
        <Button variant="contained" size="large" onClick={submitHandler}>
          Predict
        </Button>
      </div>
    </Container>
  );
};

export default Predict;
