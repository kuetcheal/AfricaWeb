import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, Typography, Divider } from '@mui/material'
import { ReactComponent as JeneeLogo } from '@assets/svg/mainLayout/jenee-logo.svg'

const Deconnecter = ({ onClose }) => {
    return (
        <Box className="Deconnecter">
            <div className="Deconnecter__header">
                <div className="Deconnecter__back">
                    <ArrowBackIcon onClick={onClose} style={{ position: 'fixed', cursor: 'pointer', right: '383px', top: '13px' }} />
                </div>
                <div className="Deconnecter__regla">
                    <Typography variant="h5">Réglages </Typography>
                </div>
            </div>
            <Box sx={{ mb: 2 }} />
            <div className="Deconnecter__title1">
                <Typography variant="h6">Se déconnecter</Typography> <Box sx={{ mb: 2 }} />
            </div>
            <Divider style={{ width: '100%', color: 'rgb(247, 247, 247)' }} />
            <Box sx={{ mb: 2 }} /> <Box sx={{ mb: 2 }} />
            <div className="Deconnecter__account">
                <Typography>Etes-vous sûr de vouloir vous déconnecter ?</Typography>
            </div>
            <Box sx={{ mb: 2 }} /> <Box sx={{ mb: 2 }} />
            <Box className="Deconnecter__great-box">
                <div className="Deconnecter__little-box">
                    <Box />
                </div>
                <div className="Deconnecter__nom">
                    <Typography variant="body1">Jules Andrieux </Typography>
                </div>
                <div className="Deconnecter__commu">
                    <Typography variant="body1">Communication</Typography>
                </div>
            </Box>
            <Box sx={{ mb: 2 }} /> <Box sx={{ mb: 2 }} />
            <Divider style={{ backgroundColor: 'rgb(247, 247, 247)', width: '100%' }} />
            <Box sx={{ mb: 2 }} /> <Box sx={{ mb: 2 }} />
            <button className="Deconnecter__button-deconect">Se déconnecter</button>
            <Box sx={{ mb: 2 }} /> <Box sx={{ mb: 2 }} />
            <div className="Deconnecter__alert">
                <Typography>
                    Attention ! si vous vous déconnecter vos identifiants ne seront plus forcement enregistrés dans l&apos;application.
                </Typography>
            </div>
            <JeneeLogo className="Deconnecter__logo" />
        </Box>
    )
}

export default Deconnecter
