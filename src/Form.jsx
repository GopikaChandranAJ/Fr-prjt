import React, { useState } from 'react';

const Form = () => {
    const [plainText, setPlainText] = useState('');        // For Plain Text Input
    const [cipherInput, setCipherInput] = useState('');    // For Cipher Text Input
    const [encryptedText, setEncryptedText] = useState(''); // Display Encrypted Text
    const [decryptedText, setDecryptedText] = useState(''); // Display Decrypted Text

    // Function to Encrypt Plain Text
    const handleEncrypt = () => {
        if (plainText) {
            setEncryptedText(btoa(plainText)); // Base64 encoding
        } else {
            setEncryptedText('');
        }
    };

    // Function to Decrypt Cipher Text
    const handleDecrypt = () => {
        try {
            if (cipherInput) {
                setDecryptedText(atob(cipherInput)); // Base64 decoding
            } else {
                setDecryptedText('');
            }
        } catch (error) {
            setDecryptedText('Invalid cipher text'); // Error handling
        }
    };

    const handleUploadImage = () => {
        alert('Upload Image button clicked');
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="row w-100 justify-content-center">
                {/* Encryption Box */}
                <div className="col-md-5 border p-4 rounded shadow text-center m-2">
                    <h3>Encryption</h3>
                    {/* Enter Plain Text */}
                    <div className="mb-3">
                        <label htmlFor="plainText" className="form-label">Enter Plain Text</label>
                        <input
                            type="text"
                            id="plainText"
                            className="form-control"
                            value={plainText}
                            onChange={(e) => setPlainText(e.target.value)}
                            placeholder="Enter text"
                        />
                    </div>
                    {/* Buttons */}
                    <div className="d-flex justify-content-around mb-3">
                        <button className="btn btn-primary" onClick={handleEncrypt}>Encrypt</button>
                        <button className="btn btn-primary" onClick={() => alert('Download Image')}>
                            Download Image
                        </button>
                    </div>
                    {/* Encrypted Text */}
                    <div className="bg-light p-3 rounded">
                        <h5>Encrypted Text:</h5>
                        {encryptedText || 'Your encrypted text will appear here.'}
                    </div>
                </div>

                {/* Decryption Box */}
                <div className="col-md-5 border p-4 rounded shadow text-center m-2">
                    <h3>Decryption</h3>
                    {/* Enter Cipher Text */}
                    <div className="mb-3">
                        <label htmlFor="cipherInput" className="form-label">Enter Cipher Text</label>
                        <input
                            type="text"
                            id="cipherInput"
                            className="form-control"
                            value={cipherInput}
                            onChange={(e) => setCipherInput(e.target.value)}
                            placeholder="Enter cipher text"
                        />
                    </div>
                    {/* Buttons */}
                    <div className="d-flex justify-content-around mb-3">
                        <button className="btn btn-secondary" onClick={handleUploadImage}>Upload Image</button>
                        <button className="btn btn-secondary" onClick={handleDecrypt}>Decrypt</button>
                    </div>
                    {/* Decrypted Text */}
                    <div className="bg-light p-3 rounded">
                        <h5>Decrypted Text:</h5>
                        {decryptedText || 'Your decrypted text will appear here.'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
