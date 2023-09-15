import React, { useState } from "react";
import Medicines from "../formularios/FormMedicacoes";
import Pagina from "../templates/Pagina";
import { Container, Alert } from "react-bootstrap";
import { useLocation } from "react-router-dom";


export default function TelaCadMedicacoes(props) {


    const location = useLocation();


    if (location.state) {
        console.log(location.state)
        const [objectSelected, setObjectSelected] = useState(location.state.id)
        const [medicineEditing, setMedicineEditing] = useState({
            pacientName: objectSelected,
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