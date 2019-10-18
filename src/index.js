import React, { Component } from "react";
import PropTypes from "prop-types";
import * as UIKit from 'uikit'
import 'uikit/dist/css/uikit.min.css';
import './index.css'

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
        console.log(this.props)
        const userInput = e.currentTarget.value;

        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
        this.props.handleTypeAheadChange(e.currentTarget.value)
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
                    <ul className="uk-nav uk-dropdown-nav uk-background-muted uk-padding" style={{ maxHeight: "500px", overflowX: "hidden", overflowY: "auto", maxWidth: "350px" }} collapsible="true">
                        <li className="option-item uk-margin-small">
                            <div className="uk-align-center uk-margin-small uk-text-bold">
                                <input type="checkbox" className="uk-checkbox uk-margin-small-right" onChange={() => this.handleItemClick("All")} />
                                <span>Select All</span>
                            </div>

                        </li>
                        {filteredSuggestions.map((suggestion, index) => {
                            let className;

                            if (index === activeSuggestion) {
                                className = "uk-active";
                            }

                            return (
                                <li key={suggestion} className="option-item uk-margin-small">
                                    <div className="uk-align-center uk-margin-small">
                                        <input name={suggestion} type="checkbox" className="uk-checkbox uk-margin-small-right" onChange={() => onClick(suggestion)} />
                                        <span>
                                            {suggestion}
                                        </span>
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