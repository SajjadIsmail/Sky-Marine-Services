import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import './OnlineVerification.css';

const OnlineVerification = () => {
  const [verificationType, setVerificationType] = useState('indian-cdc');
  const [certificateNumber, setCertificateNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const verificationTypes = [
    { id: 'indian-cdc', label: 'Indian CDC', placeholder: 'Enter Indian CDC Number' },
    { id: 'indian-coc', label: 'Indian COC', placeholder: 'Enter Indian COC Number' },
    { id: 'bahamas-cdc', label: 'Bahamas CDC', placeholder: 'Enter Bahamas CDC Number' },
    { id: 'bahamas-coc', label: 'Bahamas COC', placeholder: 'Enter Bahamas COC Number' },
    { id: 'palau-cdc', label: 'Palau CDC', placeholder: 'Enter Palau CDC Number' },
    { id: 'palau-coc', label: 'Palau COC', placeholder: 'Enter Palau COC Number' },
    { id: 'belize-cdc', label: 'Belize CDC', placeholder: 'Enter Belize CDC Number' },
    { id: 'belize-coc', label: 'Belize COC', placeholder: 'Enter Belize COC Number' },
    { id: 'panama-cdc', label: 'Panama CDC', placeholder: 'Enter Panama CDC Number' },
    { id: 'liberia-coe', label: 'Liberian COE', placeholder: 'Enter Liberian COE Number' },
    { id: 'liberia-cdc', label: 'Liberian CDC', placeholder: 'Enter Liberian CDC Number' },
    { id: 'honduras-coc', label: 'Honduras COC', placeholder: 'Enter Honduras COC Number' },
    { id: 'honduras-cdc', label: 'Honduras CDC', placeholder: 'Enter Honduras CDC Number' }
  ];

  const handleVerify = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Mock verification process
    setTimeout(() => {
      // Simulate random verification result
      const isValid = Math.random() > 0.3;
      setVerificationResult({
        valid: isValid,
        certificateNumber,
        type: verificationTypes.find(t => t.id === verificationType).label,
        holderName: isValid ? 'John Doe' : null,
        rank: isValid ? 'Chief Engineer' : null,
        issueDate: isValid ? '15-Jan-2023' : null,
        expiryDate: isValid ? '14-Jan-2028' : null,
        status: isValid ? 'Active' : 'Invalid'
      });
      setLoading(false);
    }, 2000);
  };

  const selectedType = verificationTypes.find(t => t.id === verificationType);

  return (
    <div className="verification-page">
      {/* Hero Section */}
      <section className="verification-hero">
        <div className="verification-hero-overlay"></div>
        <div className="container">
          <div className="verification-hero-content">
            <h1 className="fade-in">Online Verification</h1>
            <p className="fade-in">Verify Seafarer Certificates & Documents</p>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section verification-info-section">
        <div className="container">
          <div className="verification-info fade-in">
            <div className="info-icon">
              <AlertCircle size={50} />
            </div>
            <div className="info-text">
              <h3>Certificate Verification Service</h3>
              <p>
                Verify the authenticity of seafarer certificates including CDC (Continuous Discharge Certificate) 
                and COC (Certificate of Competency) from various countries. Enter the certificate number below to verify.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Form */}
      <section className="section verification-form-section">
        <div className="container">
          <div className="verification-form-wrapper fade-in">
            <h2>Select Certificate Type</h2>
            
            <div className="certificate-types">
              {verificationTypes.map((type) => (
                <button
                  key={type.id}
                  className={`cert-type-btn ${verificationType === type.id ? 'active' : ''}`}
                  onClick={() => {
                    setVerificationType(type.id);
                    setVerificationResult(null);
                  }}
                >
                  {type.label}
                </button>
              ))}
            </div>

            <form onSubmit={handleVerify} className="verification-form">
              <div className="form-group">
                <label htmlFor="certNumber">Certificate Number</label>
                <div className="input-with-icon">
                  <input
                    type="text"
                    id="certNumber"
                    value={certificateNumber}
                    onChange={(e) => setCertificateNumber(e.target.value)}
                    placeholder={selectedType.placeholder}
                    required
                  />
                  <Search size={20} />
                </div>
              </div>

              <button type="submit" className="btn-primary verify-btn" disabled={loading}>
                {loading ? 'Verifying...' : 'Verify Certificate'}
              </button>
            </form>

            {/* Verification Result */}
            {verificationResult && (
              <div className={`verification-result ${verificationResult.valid ? 'valid' : 'invalid'}`}>
                <div className="result-header">
                  {verificationResult.valid ? (
                    <CheckCircle size={50} className="result-icon" />
                  ) : (
                    <XCircle size={50} className="result-icon" />
                  )}
                  <h3>{verificationResult.valid ? 'Certificate Verified' : 'Certificate Not Found'}</h3>
                </div>

                {verificationResult.valid ? (
                  <div className="result-details">
                    <div className="detail-row">
                      <span className="detail-label">Certificate Type:</span>
                      <span className="detail-value">{verificationResult.type}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Certificate Number:</span>
                      <span className="detail-value">{verificationResult.certificateNumber}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Holder Name:</span>
                      <span className="detail-value">{verificationResult.holderName}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Rank:</span>
                      <span className="detail-value">{verificationResult.rank}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Issue Date:</span>
                      <span className="detail-value">{verificationResult.issueDate}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Expiry Date:</span>
                      <span className="detail-value">{verificationResult.expiryDate}</span>
                    </div>
                    <div className="detail-row">
                      <span className="detail-label">Status:</span>
                      <span className="detail-value status-badge active">{verificationResult.status}</span>
                    </div>
                  </div>
                ) : (
                  <p className="result-message">
                    The certificate number you entered could not be verified. Please check the number and try again.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="section verification-disclaimer">
        <div className="container">
          <div className="disclaimer-box fade-in">
            <h3>Important Notice</h3>
            <p>
              This online verification system is provided as a service to verify the authenticity of seafarer certificates. 
              While we strive to maintain accurate and up-to-date records, we recommend contacting our office directly 
              for official verification or if you have any concerns about a certificate.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OnlineVerification;
