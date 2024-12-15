import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Decrypt = () => {
    const [cipherInput, setCipherInput] = useState('');
    const [decryptedText, setDecryptedText] = useState('');

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
                <div
                    className="col-md-8 border p-4 rounded shadow text-center m-2"
                    style={{ minWidth: '400px' }} // Ensures the box has a minimum width
                >
                    <h3>Decryption</h3>
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
                    <div className="d-flex flex-column align-items-center mb-3">
                    {/* Encrypt Button */}
                    <button className="btn btn-primary mb-2">Decrypt</button>

                        {/* Secondary Buttons */}
                        <div className="d-flex justify-content-center gap-2">
                        <button className="btn btn-primary">Download Image</button>
                        <button className="btn btn-primary">Upload Image</button>
                        </div>
                    </div>
                    <div className="bg-light p-3 rounded">
                        <h5>Decrypted Text:</h5>
                        {decryptedText || 'Your decrypted text will appear here.'}
                    </div>
                    <Link to="/" className="btn btn-success mt-3">Go to Encryption</Link>
                </div>
            </div>
        </div>
    );
};

export default Decrypt;
