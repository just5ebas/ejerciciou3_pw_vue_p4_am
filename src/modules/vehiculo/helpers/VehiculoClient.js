import axios from "axios";

export const consultaTotalFachada = async () => {
  return await consultaTotal();
};

export const consultaUnicaFachada = async (placa) => {
  return await consultaUnica(placa);
};

const consultaTotal = async () => {
  const data = axios
    .get("http://localhost:8080/API/v1.0/Inventario/vehiculos")
    .then((r) => r.data);
  return data;
};

const consultaUnica = (placa) => {
  const data = axios
    .get(`http://localhost:8080/API/v1.0/Inventario/vehiculos/${placa}`)
    .then((r) => r.data);
  return data;
};
