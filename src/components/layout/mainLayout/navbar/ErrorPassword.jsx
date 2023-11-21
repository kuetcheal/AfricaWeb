import React from 'react'
import { Box, Typography, Divider, InputAdornment, Button } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const ErrorPassword = ({ onClose }) => {
    return (
        <Box className="error">
            <div className="error__header">
                <div className="error__back">
                    {' '}
                    <ArrowBackIcon onClick={onClose} />
                </div>
                <div className="error__title">
                    <Typography variant="h6">Réglages</Typography>{' '}
                </div>
            </div>{' '}
            <Box sx={{ mb: 2 }} />
            <div className="error__modif">
                <Typography variant="h6">Modification du mot de passe</Typography>
            </div>
            <Divider />
            <Box sx={{ mb: 2 }} />
            <div className="error__password">
                <Typography>Mot de passe actuel</Typography>{' '}
            </div>
            <div className="error__confirm">
                <Typography style={{ fontSize: '14px' }}>
                    Veuillez renseigner le mot de passe actuellement utilisé pour vous connecter à votre compte.
                </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="error__input1" placeholder="Ex: Jeandupont123" type="password" />
            <InputAdornment position="end">
                <VisibilityIcon style={{ position: 'fixed', right: '11px', top: '200px', color: 'rgb(222, 83, 92)' }} />
            </InputAdornment>
            <Box sx={{ mb: 2 }} />
            <Divider />
            <Box sx={{ mb: 2 }} />
            <div className="error__new">
                <Typography>Nouveau mot de passe</Typography>{' '}
            </div>
            <div className="error__actual">
                <Typography style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '14px' }}>
                    Veuillez renseigner le mot de passe actuellement utilisé pour vous connecter à votre compte
                </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="error__input2" placeholder="Ex: Jeandupont123" type="password" />
            <InputAdornment position="end">
                <VisibilityIcon style={{ position: 'fixed', right: '11px', top: '354px', color: 'rgb(222, 83, 92)' }} />
            </InputAdornment>
            <Box sx={{ mb: 2 }} />
            <div className="error__title2">
                <Typography>Confirmation mot de passe</Typography>{' '}
            </div>
            <div className="error__confirmation">
                <Typography style={{ fontSize: '14px' }}> Veuillez confirmer votre nouveau mot de passe </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="error__input3" placeholder="Ex: Jeandupont123" type="password" />
            <InputAdornment position="end">
                <VisibilityIcon style={{ position: 'fixed', right: '11px', top: '471px', color: 'rgb(222, 83, 92)' }} />
            </InputAdornment>
            <Box sx={{ mb: 2 }} />
            <Divider />
            <Box sx={{ mb: 2 }} />
            <div>
                <button className="error__button-suivant">Modifier le mot de passe</button>
            </div>
            <Box sx={{ mb: 2 }} />
            <div className="error__attention">
                <Typography style={{ fontSize: '13px' }}>Attention ! votre nouveau mot de passe ne peut pas </Typography>
            </div>
            <div className="error__same-password">
                <Typography style={{ fontSize: '13px' }}>être identique à votre mot de passe actuel. </Typography>
            </div>
        </Box>
    )
}

export default ErrorPassword

// npm run git:cz:push
//npm run eslint:fix
