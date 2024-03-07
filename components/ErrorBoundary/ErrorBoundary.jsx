import React, { Component } from "react";
import styles from "./ErrorBoundary.module.scss";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: {},
      info: "",
    };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }
  componentDidCatch(error, { componentStack }) {
    this.setState({ info: componentStack });
    console.error(error, componentStack);
    alert("Error: please check the console log");
  }

  render() {
    return this.state.hasError ? (
      <div className={styles["error-boundary"]}>
        <h3 className={styles.title}>Error</h3>
        <pre className={styles.details}>{this.state.info}</pre>
      </div>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
