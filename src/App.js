import React, { useState } from "react";

const ScreenshotCaptureSimulation = () => {
  const [testResults, setTestResults] = useState([
    { testName: "Test 1", status: "passed", screenshot: null },
    { testName: "Test 2", status: "passed", screenshot: null },
    { testName: "Test 3", status: "failed", screenshot: null },
    { testName: "Test 4", status: "passed", screenshot: null },
  ]);

  // Function to simulate capturing a screenshot for failed test
  const captureScreenshot = (index) => {
    setTestResults((prevResults) =>
      prevResults.map((test, i) =>
        i === index ? { ...test, screenshot: `Screenshot_${i + 1}.png` } : test
      )
    );
  };

  // Function to restart all tests (reset test results to initial state)
  const restartTests = () => {
    setTestResults([
      { testName: "Test 1", status: "passed", screenshot: null },
      { testName: "Test 2", status: "passed", screenshot: null },
      { testName: "Test 3", status: "failed", screenshot: null },
      { testName: "Test 4", status: "passed", screenshot: null },
    ]);
  };

  // Render different status with color coding
  const renderTestStatus = (status) => {
    switch (status) {
      case "passed":
        return <span style={styles.statusPassed}>Passed</span>;
      case "failed":
        return <span style={styles.statusFailed}>Failed</span>;
      default:
        return <span>Unknown</span>;
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Test Execution Status</h2>
      <div style={styles.testSequence}>
        {testResults.map((test, index) => (
          <div key={index} style={styles.testItem}>
            <div style={styles.testName}>
              {test.testName} - {renderTestStatus(test.status)}
            </div>
            {test.status === "failed" && !test.screenshot && (
              <button
                onClick={() => captureScreenshot(index)}
                style={styles.captureButton}
              >
                Capture Screenshot
              </button>
            )}
            {test.screenshot && (
              <div style={styles.screenshot}>
                <span>Screenshot: {test.screenshot}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <button onClick={restartTests} style={styles.restartButton}>
        Restart All Tests
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: "380px",
    padding: "20px",
    margin: "0 auto",
    backgroundColor: "#f5f5f5",
    borderRadius: "12px",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    textAlign: "center",
  },
  header: {
    fontSize: "1.5rem",
    color: "#333",
    marginBottom: "30px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  testSequence: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
  },
  testItem: {
    width: "100%",
    padding: "18px",
    margin: "12px 0",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    fontSize: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  testName: {
    marginBottom: "12px",
    fontWeight: "600",
    fontSize: "1.1rem",
  },
  statusPassed: {
    color: "#28a745",
    fontWeight: "bold",
  },
  statusFailed: {
    color: "#dc3545",
    fontWeight: "bold",
  },
  captureButton: {
    padding: "10px 20px",
    backgroundColor: "#ffc107",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  captureButtonHover: {
    backgroundColor: "#e0a800",
  },
  screenshot: {
    fontSize: "0.9rem",
    color: "#007bff",
    marginTop: "10px",
    fontStyle: "italic",
  },
  restartButton: {
    padding: "12px 25px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "1.1rem",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
    marginTop: "20px",
  },
  restartButtonHover: {
    backgroundColor: "#0056b3",
  },
};

export default ScreenshotCaptureSimulation;
