import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Encrypt = () => {
    const [plainText, setPlainText] = useState('');
    const [encryptedText, setEncryptedText] = useState('');

    const handleEncrypt = () => {
        if (plainText) {
            setEncryptedText(btoa(plainText)); // Base64 encoding
        } else {
            setEncryptedText('');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="row w-100 justify-content-center">
                <div
                    className="col-md-8 border p-4 rounded shadow text-center m-2"
                    style={{ minWidth: '400px' }} // Ensures the box has a minimum width
                >
                    <h3>Encryption</h3>
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
                    <div className="d-flex flex-column align-items-center mb-3">
                    {/* Encrypt Button */}
                    <button className="btn btn-primary mb-2">Encrypt</button>

                        {/* Secondary Buttons */}
                        <div className="d-flex justify-content-center gap-2">
                        <button className="btn btn-primary">Download Image</button>
                        <button className="btn btn-primary">Upload Image</button>
                        </div>
                    </div>

                    <div className="bg-light p-3 rounded">
                        <h5>Encrypted Text:</h5>
                        {encryptedText || 'Your encrypted text will appear here.'}
                    </div>
                    <Link to="/decrypt" className="btn btn-success mt-3">Go to Decryption</Link>
                </div>
            </div>
        </div>
    );
};

export default Encrypt;
