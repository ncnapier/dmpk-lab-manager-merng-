export const isAuthenticated = () => {
    const authToken = localStorage.getItem('authToken');
    return authToken !== null; // Returns true if authToken is found in localStorage, otherwise false
  };