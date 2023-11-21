import React from 'react'
import { Box, Typography, Button, Divider, InputAdornment, Input } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const FieldCorrespond = ({ onClose }) => {
    return (
        <Box className="field">
            <div className="field__header">
                <div className="field__back">
                    {' '}
                    <ArrowBackIcon onClick={onClose} />
                </div>
                <div className="field__title">
                    <Typography variant="h6">Réglages</Typography>{' '}
                </div>
            </div>{' '}
            <Box sx={{ mb: 2 }} />
            <div className="field__modif">
                <Typography variant="h6">Modification du mot de passe</Typography>
            </div>
            <Divider />
            <Box sx={{ mb: 2 }} />
            <div className="field__password">
                <Typography>Mot de passe actuel</Typography>{' '}
            </div>
            <div className="field__confirm">
                <Typography style={{ fontSize: '13px' }}>
                    Veuillez renseigner le mot de passe actuellement utilisé pour vous connecter à votre compte.
                </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="field__input1" placeholder="Ex: Jeandupont123" type="password" />
            <InputAdornment position="end">
                <VisibilityIcon />
            </InputAdornment>
            <Box sx={{ mb: 2 }} />
            <Divider />
            <Box sx={{ mb: 2 }} />
            <div className="field__new">
                <Typography>Nouveau mot de passe</Typography>{' '}
            </div>
            <div className="field__actual">
                <Typography style={{ color: 'rgba(0, 0, 0, 0.5)', fontSize: '13px' }}>
                    Veuillez renseigner le mot de passe actuellement utilisé pour vous connecter à votre compte
                </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="field__input2" placeholder="Ex: Jeandupont123" type="password" />
            <InputAdornment position="end">
                <VisibilityIcon style={{ position: 'fixed', right: '11px', top: '350px', color: 'rgb(222, 83, 92)' }} />
            </InputAdornment>
            <Box sx={{ mb: 2 }} />
            <div className="field__title2">
                <Typography>Confirmation mot de passe</Typography>{' '}
            </div>
            <div className="field__confirmation">
                <Typography style={{ fontSize: '13px' }}> Veuillez confirmer votre nouveau mot de passe </Typography>
            </div>
            <Box sx={{ mb: 2 }} />
            <input className="field__input3" placeholder="Ex: Jeandupont123" type="password" />
            <InputAdornment position="end">
                <VisibilityIcon style={{ position: 'fixed', right: '11px', top: '465px', color: 'rgb(222, 83, 92)' }} />
            </InputAdornment>
            <Box sx={{ mb: 2 }} />
            <Divider />
            <Box sx={{ mb: 2 }} />
            <div>
                <button className="field__button-suivant">Modifier le mot de passe</button>
            </div>
            <Box sx={{ mb: 2 }} />
            <div className="field__text">
                <Typography style={{ fontSize: '13px' }}>Attention! vos deux champs de texte doivent correspondre, </Typography>
            </div>
            <div className="field__exact">
                <Typography style={{ fontSize: '13px' }}>Veuillez vérifier de leur exactitude. </Typography>
            </div>
        </Box>
    )
}

export default FieldCorrespond
