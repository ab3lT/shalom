import React, { useState } from 'react';
import { Button, TextField, Typography, Paper, CircularProgress, Alert, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// Styled components for better customization
const FullScreenDiv = styled('div')({
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Consistent background color
});

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Added shadow for better visual appeal
    borderRadius: theme.spacing(1), // Slight border radius for better design
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '400px', // Limit the width of the login form
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: theme.spacing(1),
    color: theme.palette.primary.main, // Consistent color
}));

const StyledDescription = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(3),
    fontSize: '0.9rem',
}));

const StyledForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
    width: '100%',
}));

const StyledInput = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.grey[400], // Improved border color
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.main, // Hover effect
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main, // Focus effect
            boxShadow: `0 0 0 2px ${theme.palette.primary.light}`, // Add a subtle shadow
        },
    },
    '& .MuiInputBase-input': {
        fontSize: '1rem',
    },
}));

const StyledButton = styled(Button)(({ theme }) => ({
    width: '100%',
    padding: theme.spacing(1.5),
    fontSize: '1rem',
    fontWeight: 'medium',
    textTransform: 'none', // Prevent uppercase
}));
// import { useAuth } from "../hooks/useAuth";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [role, setRole] = useState("user");
    // const { setAuth } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        // setAuth({ user: email, role });
        navigate("/dashboard");
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        // Simulate an API call
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            if (email === 'test@example.com' && password === 'password') {
                alert('Login successful!');
                navigate('/dashboard');
            } else {
                setError('Invalid credentials. Please try again.');
            }
        } catch (err) {
            setError(err.message || 'An error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <FullScreenDiv>
            <StyledPaper>
                <StyledTitle variant="h2">Login</StyledTitle>
                <StyledDescription variant="body2">
                    Welcome back! Please enter your credentials to log in.
                </StyledDescription>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInput
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!error}
                        fullWidth
                        variant="outlined"
                        required
                    />
                    <StyledInput
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!error}
                        fullWidth
                        variant="outlined"
                        required
                    />
                    {error && (
                        <Alert severity="error" variant="outlined">
                            {error}
                        </Alert>
                    )}
                    <StyledButton
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <CircularProgress size={20} style={{ marginRight: 8, color: 'white' }} />
                                Logging in...
                            </>
                        ) : (
                            'Login'
                        )}
                    </StyledButton>
                </StyledForm>
                <Box mt={2} textAlign="center">
                    <Typography variant="body2" color="textSecondary">
                        <a href="#" style={{ textDecoration: 'none', color: '#1976d2' }}>Forgot password?</a>
                    </Typography>
                </Box>
            </StyledPaper>
        </FullScreenDiv>
    );
};

export default Login;