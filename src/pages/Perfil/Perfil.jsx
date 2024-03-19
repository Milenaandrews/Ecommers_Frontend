import UserContext from "../../context/user/UserContext";
import { useContext, useState, useEffect } from "react";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box, Container, TextField } from "@mui/material";

const Profile = () => {

    const {infoUser, userEdit} = useContext(UserContext)
    console.log(infoUser)
    
    const {name, email, phone, comune, region, adress} = infoUser

    const [open, setOpen] = useState(false);

    const [userForm, setUserForm] = useState({
      name: "",
      email:"",
      phone:"",
      comune:"",
      region:"",
      adress:""
    })

  const handleChange = async(e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    })
  }

  const sendData = () => {
    userEdit(userForm)
  }

  useEffect(() => {
    const updateData = () => {
      return setUserForm({
        ...userForm,
        name,
        email,
        phone,
        comune,
        region,
        adress
      })
    }

    updateData()
  }, [])


  const handleOpen = () => {
    setOpen(!open)
  }

  // const fetchUserData = async () => {
  //     try {
  //       const response = await fetch("/api/userData"); //ruta en backend xra traer datos de usuario 
  //       if (response.ok) {
  //         const userData = await response.json();
  //         setUserForm(userData);
  //       } else {
  //         console.error("Error fetching user data");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data", error);
  //     }
  //   };

    const enviar = () => {
      alert("Enviando")
    }

  return (
    <div>
       <Container sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "140px"
      }}>
        <Card sx={{ maxWidth: 500}}>
          <CardMedia sx={{ height: 250, width: 500}} image="https://source.unsplash.com/random" title="Hombre con cigarro" />
          <CardContent>
          <Typography
              gutterBottom
              variant="h4"
              component="div"
              align="center"
            >
              {name}
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              {phone}
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              {region}
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              {comune}
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              {adress}
            </Typography>
            <Typography variant="h6" color="text.secondary" align="center">
              {email}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button onClick={handleOpen}>Edit User</Button>
            <Button size="small">Advanced Config</Button>
          </CardActions>
        </Card>
      </Container>
      <div>
      <Box    
          component="form"
          onSubmit={(e) => sendData(e)}
          display={!open ? "none" : "flex"}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "45ch" },
            justifyContent: "center",
            alignContent: "center",
            marginTop: "20px",
            marginBottom: "40px"   
          }}
          noValidate
          autoComplete="off"
        >
         
          
          <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
            Edita tu usuario!
          </Typography>
            <TextField
                id="outlined-disabled"
                label="Name"
                value={userForm.name}
                name="name"
                onChange={handleChange}
                type="text"
            />
            <TextField
                id="outlined-disabled"
                label="Age"
                value={userForm.age}
                type="number"
                onChange={handleChange}
                name="age"
            />
            <TextField
                id="outlined-disabled"
                label="Email"
                value={userForm.email}
                type="email"
                onChange={handleChange}
                name="email"
            />
            <Button onClick={enviar}>Send</Button>
          
        </Box>
      </div>
    </div>
  )
}



export default Profile