import React, { useState } from "react";
import Medicines from "../formularios/FormMedicacoes";
import Pagina from "../templates/Pagina";
import { Container, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";


export default function TelaCadMedicacoes(props) {


    const location = useLocation();

    const [objectSelected, setObjectSelected] = useState({})
    const [medicineEditing, setMedicineEditing] = useState({
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

    if (location.state) {
        setMedicineEditing({
            ...medicineEditing,
            id: location.state.id,
            medicineName: location.state.medicineName,
            medicineDosage: location.state.medicineDosage,
            medicineHours: location.state.medicineHours,
            medicineHours2: location.state.medicineHours2,
            medicineHours3: location.state.medicineHours3,
            medicineDateStart: location.state.medicineDateStart,
            medicineDateEnd: location.state.medicineDateEnd,
            medicineObservation: location.state.medicineObservation
        })
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