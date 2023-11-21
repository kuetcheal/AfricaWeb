import React from 'react'
import { Box, Typography, Divider, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const ErrorNumber = ({ onClose }) => {
    return (
        <Box className="number">
            <div className="number__header">
                <div className="number__back">
                    {' '}
                    <ArrowBackIcon onClick={onClose} />
                </div>
                <div className="number__title">
                    <Typography variant="h6">Réglages</Typography>{' '}
                </div>
            </div>{' '}
            <Box sx={{ mb: 2 }} />
            <div className="number__modif">
                <Typography variant="h6">Modification du mot de passe</Typography>
            </div>
            <Divider />
            <Box sx={{ mb: 2 }} />
            <div className="number__password">
                <Typography>Mot de passe actuel</Typography>{' '}
            </div>
            <div className="number__confirm">
                <Typography style={{ fontSize: '13px' }}>
                    Veuillez renseigner le mot de passe actuellement utilisé pour vous connecter à votre compte.
                </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="number__input1" placeholder="Ex: Jeandupont123" type="password" />
            <InputAdornment position="end">
                <VisibilityIcon style={{ position: 'fixed', right: '11px', top: '195px', color: 'black' }} />
            </InputAdornment>
            {/* </Box> */}
            <Box sx={{ mb: 2 }} />
            <Divider style={{ backgroundColor: 'rgb(247, 247, 247)', width: '100%' }} />
            <Box sx={{ mb: 2 }} />
            <div className="number__new">
                <Typography>Nouveau mot de passe</Typography>{' '}
            </div>
            <div className="number__actual">
                <Typography style={{ fontSize: '13px' }}>
                    Veuillez renseigner le mot de passe actuellement utilisé pour vous connecter à votre compte
                </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="number__input2" placeholder="Ex: Jeandupont123" type="password" />
            <InputAdornment position="end">
                <VisibilityIcon style={{ position: 'fixed', right: '11px', top: '349px', color: 'rgb(222, 83, 92)' }} />
            </InputAdornment>
            <Box sx={{ mb: 2 }} />
            <div className="number__title2">
                <Typography>Confirmation mot de passe</Typography>{' '}
            </div>
            <div className="number__confirmation">
                <Typography style={{ fontSize: '13px' }}> Veuillez confirmer votre nouveau mot de passe </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="number__input3" placeholder="Ex: Jeandupont123" type="password" />
            <InputAdornment position="end">
                <VisibilityIcon style={{ position: 'fixed', right: '11px', top: '465px', color: 'rgb(222, 83, 92)' }} />
            </InputAdornment>
            <Box sx={{ mb: 2 }} />
            <Divider style={{ backgroundColor: 'rgb(247, 247, 247)', width: '100%' }} />
            <Box sx={{ mb: 2 }} />
            <Box sx={{ mb: 2 }} />
            <div>
                <button className="number__button-suivant">Modifier le mot de passe </button>
            </div>
            <Box sx={{ mb: 2 }} />
            <Typography style={{ textAlign: 'center', color: 'rgb(222, 83, 92)', fontSize: '12px' }}>
                Attention ! votre nouveau mot de passe doit contenir au moins 8{' '}
            </Typography>
            <Typography style={{ textAlign: 'center', color: 'rgb(222, 83, 92)', fontSize: '12px' }}>
                caractères dont un chiffre, une lettre Majiscule et Minuscule.{' '}
            </Typography>
        </Box>
    )
}

export default ErrorNumber
