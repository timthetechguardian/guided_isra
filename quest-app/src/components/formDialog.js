// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useState, useEffect } from 'react'; 
// import { useParams, useHistory } from 'react-router-dom';

// export default function FormDialog() {
//   const [open, setOpen] = React.useState(false);

//   const [form, setForm] = useState({
//     software_owner: {
//       name: '',
//       e_mail: '',
//       position: '',
//       department: '',
//     },
//   });
//   const params = useParams();
//   const history = useHistory();

//   useEffect(() => {
//     async function fetchData() {
//       // const id = params.id?.toString() || undefined;
//       // if (!id) return;
//       // const response = await fetch(
//       //   `http://localhost:5050/profile/${params.id.toString()}`,
//       // )
//       // if (!response.ok) {
//       //   const message = `An error occured: ${response.statusText}`;
//       //   console.error(message);
//       //   return;
//       // }
//       // const owner = await response.json();
//       // if (!owner) {
//       //     console.warn(`Document with id ${id} not found!`);
//       //     history.push("/");
//       //     return;
//       // }
//       // setForm(owner);
//       const email = localStorage.getItem('software_owner.e_mail');
//       if (!email) return;
//       const response = await fetch(
//         `http://localhost:5050/profile/${email}`,
//       );
//     }
//     fetchData();
//     return;
//   }, [params.id, history]);

//   function updateForm(value) {
//     return setForm ((prev) => {
//       return { ...prev, ...value };        
//     });
//   }

//   async function onSubmit(event) {
//     event.preventDefault();
//     const owner = { ...form };
//     try {
//         let response;
//             response = await fetch(`http://localhost:5050/profile/${params.id}`, {
//                 method: 'PATCH',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(owner),
//             });
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//     } catch (error) {
//         console.error('A problem occured adding or updating a document: ', error);
//     } finally {
//         setForm({
//             software_owner: {
//                 name: '',
//                 e_mail: '',
//                 position: '',
//                 department: '',
//             },
//         });
//         history.replace("/profile");
//     }
//   }
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = (event, reason) => {
//     if (reason && reason === "backdropClick") 
//         return;
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <button 
//         style={{
//             backgroundColor:"transparent",
//             borderColor:"transparent",
//             cursor:'pointer',
//             margin:'0',
//             padding:'0'
//         }} 
//         onClick={handleClickOpen}
//       >
//         <AccountCircleIcon sx={{ fontSize: 50 }}/>
//       </button>
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         PaperProps={{
//           component: 'form',
//           onSubmit: (event) => {
//             event.preventDefault();
//             const formData = new FormData(event.currentTarget);
//             const formJson = Object.fromEntries(formData.entries());
//             const fullname = formJson.fullname;
//             const email = formJson.email;
//             const position = formJson.position;
//             const department = formJson.department;
//             console.log(fullname);
//             console.log(email);
//             console.log(position);
//             console.log(department);
//             handleClose();
//           },
//         }}
//       >
//         <DialogTitle>Profile Information</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             To enter your profile, please fill out the missing fields.
//           </DialogContentText>
//           <form onSubmit={onSubmit}>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="fullname"
//             label="Full Name"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={form.software_owner.name}
//             onChange={(event) => {
//               updateForm({ software_owner: { name: event.target.value } });
//             }}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//             value={form.software_owner.e_mail}
//             onChange={(event) => {
//               updateForm({ software_owner: { e_mail: event.target.value } });
//             }}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="name"
//             name="position"
//             label="Position"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={form.software_owner.position}
//             onChange={(event) => {
//               updateForm({ software_owner: { position: event.target.value } });
//             }}
//           />
//           <TextField
//             required
//             margin="dense"
//             id="name"
//             name="department"
//             label="Department"
//             type="text"
//             fullWidth
//             variant="standard"
//             value={form.software_owner.department}
//             onChange={(event) => {
//               updateForm({ software_owner: { department: event.target.value } });
//             }}
//           />
//           </form>
//         </DialogContent>
//         <DialogActions>
//           {/* <Button onClick={handleClose}>Cancel</Button> */}
//           <Button type="submit">Confirm</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }
