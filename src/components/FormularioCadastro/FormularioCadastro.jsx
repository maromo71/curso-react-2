import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import React, { useState } from "react";

function FormularioCadastro({aoEnviar, validarCPF}) {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    cpf: {
      valido: true,
      texto: ''
    }
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobreNome, cpf, promocoes, novidades})
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobreNome}
        onChange={(event) => {
          setSobreNome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        onBlur={(event) =>{
          const ehValido = validarCPF(cpf);
          setErros({cpf: ehValido});
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
            checked={promocoes}
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            checked={novidades}
            color="primary"
          />
        }
      />

      <Button variant="contained" color="primary" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
