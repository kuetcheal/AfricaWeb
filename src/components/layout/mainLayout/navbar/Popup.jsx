import Settings from './Settings'
import Deconnecter from './Deconnecter'
import React, { useState } from 'react'
import { DialogActions } from '@mui/material'

const Popup = () => {
    //gestion d'ouverture et de fermeture du Settings
    const [isSecondPopupOpen, setSecondPopupOpen] = useState(false)
    const handleOpenSecondPopup = () => {
        setSecondPopupOpen(true)
    }
    const handleCloseSecondPopup = () => {
        setSecondPopupOpen(false)
    }

    //gestion d'ouverture et de fermeture de la page de deconnection
    const [isForthPopupOpen, setForthPopupOpen] = useState(false)
    const handleOpenForthPopup = () => {
        setForthPopupOpen(true)
    }
    const handleCloseForthPopup = () => {
        setForthPopupOpen(false)
    }

    return (
        <div className="popup">
            <DialogActions>
                <div className="popup__inner">
                    <div>
                        <button className="popup__button-set" onClick={handleOpenSecondPopup}>
                            Settings
                        </button>
                        {isSecondPopupOpen && <Settings onClose={handleCloseSecondPopup} />}
                    </div>
                    <div>
                        <button className="popup__button-deco" onClick={handleOpenForthPopup}>
                            Se déconnecter
                        </button>
                        {isForthPopupOpen && <Deconnecter onClose={handleCloseForthPopup} />}
                    </div>
                </div>
            </DialogActions>
        </div>
    )
}

export default Popup
