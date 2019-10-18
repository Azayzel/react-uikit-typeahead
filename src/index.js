import React, { Component } from "react";
import * as UIKit from 'uikit'
import 'uikit/dist/css/uikit.min.css';
import './index.css'

class MultiSelect extends Component {

    constructor(props) {
        super(props)
        this.state = this.getInitialState();
        this.OptionItem = this.OptionItem.bind(this)
    }

    OptionItem({ opt }) {
        return (
            <li className="option-item uk-margin-small">
                <div className="uk-margin-small" onClick={() => {
                    opt.checked = opt.checked ? false : true;
                    this.handleItemClick(opt);
                }}>
                    <input name={opt.value} type="checkbox" checked={opt.checked} className="uk-checkbox uk-margin-small-right" />
                    <span>
                        {opt.value}
                    </span>
                </div>
            </li>
        )
    }

    getInitialState() {
        let newOptions = [];
        this.props.OptionsList.forEach(opt => {
            newOptions.push({ checked: false, value: opt })
        });

        return {
            allChecked: false,
            optionsList: newOptions,
            selectedItems: []
        }
    }

    handleItemClick(opt) {
        let arr = this.state.selectedItems;
        if (opt.checked) {
            arr.push(opt.value);
        }
        else {

            arr.splice(arr.indexOf(opt), 1)
        }

        this.setState({ selectedItems: arr })

        this.props.onOptionChecked(arr)
    }

    render() {
        return (
            <div className="uk-button-group uk-width-1-1" style={{ maxHeight: "500px", maxWidth: "350px" }}>
                <div className="uk-inline uk-width-1-1">
                    <button className="uk-button uk-button-default uk-select uk-background-muted" type="button" />
                    <div uk-dropdown="mode: click; boundary: ! .uk-button-group; boundary-align: true;" className="uk-background-muted">
                        <ul className="uk-nav uk-dropdown-nav" style={{ maxHeight: "500px", overflowX: "hidden", overflowY: "auto", maxWidth: "350px" }}>

                            {
                                this.state.optionsList.map((opt, i) => {
                                    return (
                                        <this.OptionItem key={i} opt={opt} />
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default MultiSelect