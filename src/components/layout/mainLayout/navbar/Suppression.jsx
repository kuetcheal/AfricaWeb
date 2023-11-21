import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, Typography, Divider } from '@mui/material'
import { ReactComponent as JeneeLogo } from '@assets/svg/mainLayout/jenee-logo.svg'

const Suppression = ({ onClose }) => {
    return (
        <Box className="suppression">
            <div className="suppression__header">
                <div className="suppression__back">
                    {' '}
                    <ArrowBackIcon onClick={onClose} />
                </div>
                <Typography variant="h5"> Réglages </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <div className="suppression__title1">
                <Typography variant="h6">Suppression de Compte</Typography>{' '}
            </div>
            <Box sx={{ mb: 2 }} />
            <Divider style={{ backgroundColor: 'rgb(247, 247, 247)', width: '100%' }} />
            <Box sx={{ mb: 2 }} /> <Box sx={{ mb: 2 }} />
            <div className="suppression__account">
                <Typography>Etes-vous sûr de vouloir supprimer votre compte ?</Typography>{' '}
            </div>
            <Box sx={{ mb: 2 }} /> <Box sx={{ mb: 2 }} />
            <Box className="suppression__great-box">
                <div className="suppression__little-box">
                    {' '}
                    <Box />{' '}
                </div>
                <div className="suppression__nom">
                    <Typography variant="body1">Jules Andrieux </Typography>{' '}
                </div>
                <div className="suppression__commu">
                    <Typography variant="body1">Communication</Typography>{' '}
                </div>
            </Box>
            <Box sx={{ mb: 2 }} /> <Box sx={{ mb: 2 }} />
            <Divider style={{ backgroundColor: 'rgb(247, 247, 247)', width: '100%' }} />
            <Box sx={{ mb: 2 }} /> <Box sx={{ mb: 2 }} />
            <button className="suppression__button-delet">Supprimer</button>
            <Box sx={{ mb: 2 }} /> <Box sx={{ mb: 2 }} />
            <div className="suppression__alert">
                <Typography>Attention ! une fois le compte de ce menbre supprimer, vous ne pouvez plus revenir en arrière.</Typography>
            </div>
            <JeneeLogo className="suppression__logo" />
        </Box>
    )
}

export default Suppression
