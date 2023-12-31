import { createContext, useState, useEffect } from "react";
import{
  getAllDateDataFunction,
  createDateFunction,
  deleteDateFunction,
  updateDateFunction
 
 } from "./DateData";
import {
  createPatientFunction,
  deletePatientFunction,
  getAllPatientDataFunction,
  updatePatientFunction,
} from "./PatientData.js";

import {
  getAllDoctorsDataFunction,
  createDoctorFunction,
  updateDoctorFunction,
  deleteDoctorFunction,
} from "./DoctorData.js";

import {
  getAllMedicineDataFunction,
  createMedicineFunction,
  updateMedicineFunction,
  deleteMedicineFunction,
} from "./MedicineData.js";

import {
  allPrescriptionsFromApiFunction,
  createPrescriptionFunction,
  deletePrescriptionFunction,
  updatePrescriptionFunction,
} from "./Prescription.js";

import {
  allHistoryFromApiFunction,
  createHistoryFunction,
  updateHistoryFunction,
  deleteHistoryFunction,
} from "./History.js";

export const GetTheAppContext = createContext();

export const AppContext = (props) => {
  const [MedicalHistoryData, setAllMedicalHistoryData] = useState([]);

  const [getDataFromTable, setGetDataFromTable] = useState({});
  const [actionButtonModal, setActionButtonModal] = useState("Agregar");
  const [textAlert, setTextAlert] = useState("");

  const [medicalPrescriptionData, setMedicalPrescriptionData] = useState({});
  const [prescriptionPatientId, setPrescriptionPatientId] = useState("");
  const [prescriptionDoctorId, setPrescriptionDoctorId] = useState("");
  const [allPrescriptionsData, setAllPrescriptionsData] = useState([]);
  const [dataPrescription, setDataPrescription] = useState({});

  const [doctorId, setDoctorId] = useState("");
  const [dataGetAllDoctors, setGetDataAllDoctors] = useState([]);
  const [dataUserDoctor, setDataUserDoctor] = useState({});

  const [getAllPatientsData, setGetAllPatientsData] = useState([]);
  const [dataUserPatient, setDataUserPatient] = useState({});
  const [patientId, setPatientId] = useState("");

  const [dataGetAllMedicine, setAllDataMedicine] = useState([]);
  const [dataUserMedicine, setDataUserMedicine] = useState({});
  const [idMedicine, setIdMedicine] = useState("");
  const [dataMedicineFromTable, setDataMedicineFromTable] = useState({});

  const [dataMedicalHistory, setDataMedicalHistory] = useState({});
  const [patientHistoryId, setPatientHistoryId] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [nameMedicine, setNameMedicine] = useState(false);

  const [dataGetAllDate, setAllDataDate] = useState([]);
  const [dataUserDate, setDataUserDate] = useState({});
  const [idDate, setIdDate] = useState("");
  const [Error, setError] = useState(false);

  const [doctorSelected, setDoctorSelected] = useState([]);

  const [patientSelected, setPatientSelected] = useState([]);
  useEffect(() => {
    getAllDoctorsDataFunction(setGetDataAllDoctors);
    getAllPatientDataFunction(setGetAllPatientsData);

    getAllDateDataFunction(setAllDataDate);

    getAllMedicineDataFunction(setAllDataMedicine);
    allPrescriptionsFromApiFunction(setAllPrescriptionsData);
    allHistoryFromApiFunction(setAllMedicalHistoryData);

  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const [showFloatingAlert, setShowFloatingAlert] = useState(false);

  const handleShowFloatAlter = () => {
    setShowFloatingAlert(true);
  };

  const handleCloseFloatAlert = () => {
    setShowFloatingAlert(false);
  };

  return (
    <GetTheAppContext.Provider
      value={{
        handleCloseModal,
        handleShowModal,
        showModal,
        medicalPrescriptionData,
        setMedicalPrescriptionData,
        dataUserDoctor,
        setDataUserDoctor,
        dataUserPatient,
        setDataUserPatient,
        dataUserMedicine,
        setDataUserMedicine,
        getDataFromTable,
        setGetDataFromTable,
        actionButtonModal,
        setActionButtonModal,
        handleShowFloatAlter,
        handleCloseFloatAlert,
        showFloatingAlert,
        textAlert,
        setTextAlert,
        dataGetAllDoctors,
        setGetDataAllDoctors,
        getAllDoctorsDataFunction,
        createDoctorFunction,
        updateDoctorFunction,
        doctorId,
        setDoctorId,
        deleteDoctorFunction,
        
        createPatientFunction,
        deletePatientFunction,
        getAllPatientDataFunction,
        updatePatientFunction,
        getAllPatientsData,
        setGetAllPatientsData,
        patientId,
        setPatientId,

        dataGetAllDate, 
        getAllDateDataFunction,
        setAllDataDate,
        dataUserDate,
        setDataUserDate,
        idDate, 
        setIdDate,
        doctorSelected, 
        setDoctorSelected,
        patientSelected, 
        setPatientSelected,
        createDateFunction,
        updateDateFunction,
        deleteDateFunction,
        Error, 
        setError,

        dataGetAllMedicine,
        setAllDataMedicine,
        getAllMedicineDataFunction,
        createMedicineFunction,
        updateMedicineFunction,
        idMedicine,
        setIdMedicine,
        deleteMedicineFunction,
        dataMedicineFromTable,
        setDataMedicineFromTable,
        nameMedicine,
        setNameMedicine,
        setPrescriptionPatientId,
        prescriptionPatientId,
        setPrescriptionDoctorId,
        prescriptionDoctorId,

        allPrescriptionsData,
        setAllPrescriptionsData,
        createPrescriptionFunction,
        allPrescriptionsFromApiFunction,
        dataPrescription,
        setDataPrescription,
        deletePrescriptionFunction,
        updatePrescriptionFunction,

        dataMedicalHistory,
        setDataMedicalHistory,

        patientHistoryId,
        setPatientHistoryId,

        MedicalHistoryData,
        setAllMedicalHistoryData,
        createHistoryFunction,
        allHistoryFromApiFunction,
        updateHistoryFunction,
        deleteHistoryFunction,
      }}
    >
      {props.children}
    </GetTheAppContext.Provider>
  );
};
