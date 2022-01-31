import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Input, Button, Label } from "reactstrap";
export default function Home() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [result, setResult] = useState("");

  function CalculateIMC() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setResult(
        "Voce está abaixo do peso o seu peso atual é: " + imc.toFixed(2)
      );
    } else if (imc >= 18.6 && imc < 24.9) {
      setResult("Peso Ideal IMC: : " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setResult(
        "Voce está um pouco acima do peso seu peso atual é: " + imc.toFixed(2)
      );
    } else if (imc > 34.9) {
      setResult("Voce está com Obsidade  " + imc.toFixed(2));
    }
  }

  let styleProps = {
    label: {
      fontSize: 18,
    },
  };

  return (
    <div>
      <h3>CALCULAR IMC</h3>
      <Input
        type="number"
        placeholder="Peso em (KG) ex: 55 "
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <br />
      <Input
        type="text"
        placeholder="Altura em (CM) ex: 162"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <br />
      <Button onClick={CalculateIMC}>Realizar Calculo</Button>
      <br />
      <br />
      <Label style={styleProps.label}>{result}</Label>
    </div>
  );
}
