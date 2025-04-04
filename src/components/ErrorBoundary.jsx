import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMsg: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      errorMsg: error.message,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error.message);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError)
      return (
        <div className="error-message-boundary">
          <p>Упс...Что-то пошло не так :(</p>
          <p>
            Попробуйте позже, мы уже сообщили разработчикам, о неполадках в
            нашем Web-приложении
          </p>
          <p>
            <strong>DEV-INFO:</strong> {this.state.errorMsg}
          </p>
        </div>
      );

    return this.props.children;
  }
}

export default ErrorBoundary;
