export const isAuthenticated = () => {
    const authToken = localStorage.getItem('authToken');
    return authToken !== null; 
  };