import { Alert } from '@mui/material'

const ErrorMessage = ({ message }) => {
  return (
    <Alert severity="error" sx={{ my: 2 }}>
      {message || 'An error occurred. Please try again later.'}
    </Alert>
  )
}

export default ErrorMessage