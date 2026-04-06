import React, { useContext, useState } from 'react';
import { Container, Box, TextField, Button, Typography } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

export const Signup = () => {
  const { signup, user } = useContext(AuthContext)
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.username = formValues.username ? "" : "Username is required.";
    tempErrors.email = formValues.email ? "" : "Email is required.";
    tempErrors.email = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(formValues.email) ? "" : "Email is not valid.";
    tempErrors.password = formValues.password ? "" : "Password is required.";
    tempErrors.confirmPassword = formValues.confirmPassword ? "" : "Confirm Password is required.";
    tempErrors.confirmPassword = formValues.password === formValues.confirmPassword ? "" : "Passwords do not match.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        await signup(formValues.email, formValues.password).then
        setSuccessMessage('User registered successfully!');
        // Optionally, you can store the username in the user's profile or database
      } catch (error) {
        console.error('Error registering user:', error);
        setErrors({ ...errors, form: error.message });
      }
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Typography component="h1" variant="h5">
          Sign Up 
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {errors.form && <Typography color="error">{errors.form}</Typography>}
          {successMessage && <Typography color="primary">{successMessage}</Typography>}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={formValues.username}
            onChange={handleChange}
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formValues.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
