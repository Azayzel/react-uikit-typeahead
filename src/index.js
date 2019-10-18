import React, { Component } from "react";
import PropTypes from "prop-types";
import 'uikit/dist/css/uikit.min.css';
import './module.css'

export class TypeAhead extends Component {

    static propTypes = {
        suggestions: PropTypes.instanceOf(Array)
    };
    static defaultProperty = {
        suggestions: []
    };
    constructor(props) {
        super(props);
        this.state = {
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: props.showSuggestions,
            userInput: ""
        };
    }

    onChange = e => {
        const { suggestions } = this.props;
        const userInput = e.target.value;

        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.target.value
        });
    };

    onClick = e => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e
        });
        this.props.handleTypeAheadChange(e)
    };
    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;

        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
            this.props.handleTypeAheadChange(filteredSuggestions[activeSuggestion])
        } else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion - 1 });
        } else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }

            this.setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                activeSuggestion,
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;
        let suggestionsListComponent;
        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="uk-nav uk-dropdown-nav" style={{ maxHeight: "500px", overflowX: "hidden", overflowY: "auto", maxWidth: "350px" }}>
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            if (index === activeSuggestion) {
                                className = "uk-active";
                            }

                            return (
                                <li key={suggestion} className="option-item uk-margin-small">
                                    <div className="uk-margin-small" onClick={() => onClick(suggestion)}>
                                        <span>{suggestion}</span>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className="uk-card uk-card-default uk-card-body uk-position-absolute uk-width-1-3">
                        <div uk-alert="true">
                            <em className="uk-alert-danger">No suggestions</em>
                        </div>
                    </div>
                );
            }
        }

        return (
            <React.Fragment>
                <input
                    type="search"
                    className="uk-input uk-select"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                {suggestionsListComponent}
            </React.Fragment>
        );
    }
}

export default TypeAhead;