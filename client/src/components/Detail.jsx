import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Add, Warning, Close, ThumbUpOutlined } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Detail = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            {/* *************** Modal *************** */}
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    style={{
                        backgroundColor: "white",
                        margin: "5% 25%",
                        width: "50%",
                        height: "400px",
                    }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        This is a modal
                    <div
                            style={{
                                float: "right",
                                padding: "10px",
                                pointer: "cursor",
                            }}>
                            <ThumbUpOutlined />
                            <Close onClick={handleClose} />
                        </div>
                    </Typography>
                    <Typography id="modal-modal-description" >
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}

export default Detail;