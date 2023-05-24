'use client';
import React, { useState, useRef } from 'react';
import Paper from '@mui/material/Paper';
import QRCode from 'qrcode.react';
import qr from './QRCode.module.css';
import TextField from '@mui/material/TextField';
import AddLinkIcon from '@mui/icons-material/AddLink';
import Button from '@mui/material/Button';
import html2canvas from 'html2canvas';
import DownloadIcon from '@mui/icons-material/Download';

const Qrcode = () => {
    const [text, setText] = useState(null);
    const [view, setView] = useState(false);
    const qrCodeRef = useRef(null);
    const handleTextChange = (event) => {
        setText(event.target.value);
        setView(false);
    };
    const handleGenerateQRCode = () => {
        text === null ? setView(false) : setView(true);
    };
    const handleDownload = (format) => {
        html2canvas(qrCodeRef.current)
            .then((canvas) => {
                const link = document.createElement('a');
                const fileName = `qrcode.${format}`;
                link.download = fileName;
                link.href = canvas.toDataURL(`image/${format}`);
                link.click();
            })
            .catch((error) => {
                console.error('Error generating QR code image : ', error);
            });
    };
    return (
        <>
            <Paper elevation={9} className={qr.mainComp}>
                <TextField
                    id="outlined-basic"
                    label="URL"
                    variant="outlined"
                    size="small"
                    style={{ marginLeft: '80px', width: '270px', marginTop: '50px' }}
                    onChange={handleTextChange}
                />
                <Button
                    variant="outlined"
                    style={{ height: '40px', marginLeft: '5px', marginTop: '50px', backgroundColor: "lightgreen", color: "blue" }}
                    onClick={handleGenerateQRCode}
                >
                    <AddLinkIcon />
                </Button>
                {view && (
                    <>
                        <Paper elevation={0} style={{ width: 'fit-content', margin: 'auto', marginTop: '40px' }}>
                            <div ref={qrCodeRef}>
                                <QRCode value={text} style={{ width: '200px', height: '200px' }} />
                            </div>
                        </Paper>
                    </>
                )}
                {view && (
                    <>
                        {/* <Button variant="outlined" startIcon={<DownloadIcon />} onClick={() => handleDownload('png')}>Download as PNG</Button> */}
                        <Button variant="outlined" startIcon={<DownloadIcon />} onClick={() => handleDownload('jpg')} style={{ marginLeft: "150px", marginTop: "10px" }}>Download as JPG</Button>
                    </>
                )}
            </Paper>
        </>
    );
};

export default Qrcode;