
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function App() {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const navigate = useNavigate();

  //VARIABLES
  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');
  const [error,setError]=useState('');
  //FUNCION
  const funcionlogin = async(event)=>{
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:3001/api/login',{
        username,
        password
      })

      if(response.data.success===true){
        console.log(response.data);
        //alert("Login exitoso");
        navigate('/home');
      }else{
        console.log(response.data);
        alert("Login fallido");
      }


    }catch(error){
      setError("Login failed");
    }
  }
  return (
    <div className='container'>
      <h1>BIENVENIDO</h1>
      <h2>Ingresa tus datos</h2>
      <form onSubmit={funcionlogin}>
        <input
          type="text"
          value={username}
          onChange={(event)=>setUsername(event.target.value)}
          placeholder='Nombre de usuario'
          />
          <br/>
          <br/>
         <input
          type="password"
          value={password}
          onChange= {(event)=>setPassword(event.target.value)}
          placeholder='Ingresa tu contraseña'/>
          <br/>
          <br/>

          <button className='boton' type='submit'>Ingresar</button>
          <br/>
          <br/>
          <Button variant='contained' type='submit' color='error'>Ingresar</Button>
              <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
    </Box>
          
          <br/>
          <br/>
          {error && <p>{error}</p>}
      </form>
    </div>
  );
}
export default App;