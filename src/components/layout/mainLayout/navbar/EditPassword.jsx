import React, { useState } from 'react'
import { Box, Typography, Divider, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import IncorrectPassword from './IncorrectPassword'

const EditPassword = ({ onClose }) => {
    //gestion d'ouverture et de fermeture de la page de ErrorPassword
    const [isSixthPopupOpen, setSixthPopupOpen] = useState(false)

    const handleOpenSixthPopup = () => {
        setSixthPopupOpen(true)
    }

    const handleCloseSixthPopup = () => {
        setSixthPopupOpen(false)
    }
    return (
        <Box className="edit">
            <div className="edit__header">
                <div className="edit__back">
                    {' '}
                    <ArrowBackIcon onClick={onClose} />
                </div>
                <div className="edit__title">
                    <Typography variant="h6">Réglages</Typography>{' '}
                </div>
            </div>{' '}
            <Box sx={{ mb: 2 }} />
            <div className="edit__modif">
                <Typography>Modification du mot de passe</Typography>
            </div>
            <Divider style={{ backgroundColor: 'rgb(247, 247, 247)', width: '100%' }} />
            <Box sx={{ mb: 2 }} />
            <div className="edit__password">
                <Typography> Mot de passe actuel </Typography>{' '}
            </div>
            <div className="edit__confirm">
                <Typography style={{ fontSize: '12px' }}>
                    Veuillez renseigner le mot de passe actuellement utilisé pour vous connecter à votre compte.
                </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="edit__input4" placeholder="Ex: Jeandupont123" type="password" />
            <InputAdornment position="end">
                <VisibilityIcon />
            </InputAdornment>
            <Box sx={{ mb: 2 }} />
            <Divider style={{ backgroundColor: 'rgb(236, 236, 236)', width: '100%' }} />
            <Box sx={{ mb: 2 }} />
            <div className="edit__new-password">
                <Typography>Nouveau mot de passe</Typography>{' '}
            </div>
            <div className="edit__actual-password">
                <Typography style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '12px' }}>
                    Veuillez renseigner le mot de passe actuellement utilisé pour vous connecter à votre compte.
                </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="edit__input5" placeholder="Ex: Jeandupont123" type="text" />
            <Box sx={{ mb: 2 }} />
            <div className="edit__title2">
                <Typography>Confirmation mot de passe</Typography>{' '}
            </div>
            <div className="edit__confirmation">
                <Typography style={{ fontSize: '12px' }}> Veuillez confirmer votre nouveau mot de passe. </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="edit__input6" placeholder="Ex: Jeandupont123" type="text" />
            <Box sx={{ mb: 2 }} />
            <Divider style={{ backgroundColor: 'rgb(236, 236, 236)', width: '100%' }} />
            <Box sx={{ mb: 2 }} />
            <div>
                <button className="edit__button-suivant" onClick={handleOpenSixthPopup}>
                    modifier le mot de passe
                </button>
                {isSixthPopupOpen && <IncorrectPassword onClose={handleCloseSixthPopup} />}
            </div>
            <Box sx={{ mb: 2 }} />
            <Typography style={{ textAlign: 'center', fontSize: '12px' }}>
                Attention votre nouveau mot de passe doit contenir au moins 8{' '}
            </Typography>
            <Typography style={{ textAlign: 'center', fontSize: '12px' }}>
                caractères dont un chiffre, une lettre Majuscule et Minuscule.{' '}
            </Typography>
            <Typography style={{ textAlign: 'center', fontSize: '12px' }}>
                Vous allez recevoir un mail confirmant la modification du
            </Typography>
            <Typography style={{ textAlign: 'center', fontSize: '12px' }}> Mot de passe. </Typography>
        </Box>
    )
}

export default EditPassword
