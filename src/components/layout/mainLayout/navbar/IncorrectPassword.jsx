import React from 'react'
import { Box, Typography, Divider, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'

const IncorrectPassword = ({ onClose }) => {
    return (
        <Box className="incorrect">
            <div className="incorrect__header">
                <div className="incorrect__back">
                    {' '}
                    <ArrowBackIcon onClick={onClose} />
                </div>
                <div className="incorrect__title">
                    <Typography variant="h6">Réglages</Typography>{' '}
                </div>
            </div>
            <Box sx={{ mb: 2 }} />
            <div className="incorrect__modif">
                <Typography>Modification du mot de passe</Typography>
            </div>
            <Divider style={{ backgroundColor: 'rgb(247, 247, 247)', width: '100%' }} />
            <Box sx={{ mb: 2 }} />
            <div className="incorrect__password">
                <Typography> Mot de passe actuel </Typography>{' '}
            </div>
            <div className="incorrect__confirm">
                <Typography style={{ fontSize: '12px' }}>
                    Veuillez renseigner le mot de passe actuellement utilisé pour vous connecter à votre compte.
                </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="incorrect__input4" placeholder="Ex: Jeandupont123" type="password" />
            <InputAdornment position="end">
                <VisibilityIcon />
            </InputAdornment>
            <Box sx={{ mb: 2 }} />
            <Divider style={{ backgroundColor: 'rgb(236, 236, 236)', width: '100%' }} />
            <Box sx={{ mb: 2 }} />
            <div className="incorrect__new-password">
                <Typography>Nouveau mot de passe</Typography>{' '}
            </div>
            <div className="incorrect__actual-password">
                <Typography style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '12px' }}>
                    Veuillez renseigner le mot de passe actuellement utilisé pour vous connecter à votre compte.
                </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="incorrect__input5" placeholder="Ex: Jeandupont123" type="text" />
            <Box sx={{ mb: 2 }} />
            <div className="incorrect__title2">
                <Typography>Confirmation mot de passe</Typography>{' '}
            </div>
            <div className="incorrect__confirmation">
                <Typography style={{ fontSize: '12px' }}> Veuillez confirmer votre nouveau mot de passe. </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="incorrect__input6" placeholder="Ex: Jeandupont123" type="text" />
            <Box sx={{ mb: 2 }} />
            <Divider style={{ backgroundColor: 'rgb(236, 236, 236)', width: '100%' }} />
            <Box sx={{ mb: 2 }} />
            <div>
                <button className="incorrect__button-suivant">Modifier le mot de passe </button>
            </div>

            <Box sx={{ mb: 2 }} />
            <Typography style={{ textAlign: 'center', color: 'rgb(222, 83, 92)', fontSize: '12px' }}>
                Attention, votre mot de passe actuel est incorrect, veuillez vérifier{' '}
            </Typography>
            <Typography style={{ textAlign: 'center', color: 'rgb(222, 83, 92)', fontSize: '12px' }}>son exactitude. </Typography>
            <Box sx={{ mb: 2 }} />
            <Typography style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '14px' }}>
                Un problème ?{' '}
                <Link className="suppression__link" style={{ color: 'rgb(96, 113, 196)' }} to={'Settings'}>
                    Mot de passe oublié
                </Link>
            </Typography>
        </Box>
    )
}

export default IncorrectPassword
