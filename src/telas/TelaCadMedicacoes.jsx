import React, { useState } from "react";
import Medicines from "../formularios/FormMedicacoes";
import Pagina from "../templates/Pagina";
import { Container, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";


export default function TelaCadMedicacoes(props) {


    const location = useLocation();
    const [objectSelected, setObjectSelected] = useState({});
    const [medicineEditing, setMedicineEditing] = useState({});

    try {
        if (location.state) {
            console.log(location.state)
            setMedicineEditing({
                pacientName: location.state.id,
                medicineName: location.state,
                medicineDosage: location.state,
                medicineHours: location.state,
                medicineHours2: location.state,
                medicineHours3: location.state,
                medicineDateStart: location.state,
                medicineDateEnd: location.state,
                medicineObservation: location.state
            })
        } else {

            setMedicineEditing({
                pacientName: objectSelected,
                medicineName: "",
                medicineDosage: "",
                medicineHours: "",
                medicineHours2: "",
                medicineHours3: "",
                medicineDateStart: "",
                medicineDateEnd: "",
                medicineObservation: ""
            })
    }} catch (error) {
        console.error(error)
    }




    return (
        <Pagina>
            <Container className="border m-6">
                <Alert variant={'secondary'} className="text-center m-3">
                    <font size="6">
                        <strong>Cadastro de Medicamentos</strong>
                    </font>
                </Alert>
                <Medicines
                    medicineEditing={medicineEditing}
                    setMedicineEditing={setMedicineEditing}
                    setObject={setObjectSelected}
                />
            </Container>
        </Pagina>
    )
}