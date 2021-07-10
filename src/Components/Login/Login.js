import React from 'react';
import { auth, provider } from '../../firebase';
import { Box, Button, Container } from './Login.style';
export const Login = ({ setUser }) => {
  const login = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <Box>
      <Container>
        <Button onClick={login}>Google ile Giris yap</Button>
      </Container>
    </Box>
  );
};
