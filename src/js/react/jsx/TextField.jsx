var React = require('react');
var createReactClass = require('create-react-class');

/**
 * https://material.io/components/web/catalog/input-controls/text-fields/
 **/

module.exports = createReactClass({
    getInitialState: function() {
        return {
            value:this.props.value
        }
    },
    componentWillMount: function(){

    },
    componentDidMount: function(){
        // DOM に追加されたとき
        if(this.props.id){
            var c = '.mdc-text-field-' + this.props.id;
            mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field-' + this.props.id));
        }
    },
    onChange:function(e){
        this.setState({
            value: e.target.value
        });
        if(this.props.onChange){
            this.props.onChange(e);
        }
    },
    render: function() {
        var fieldClasses = ['mdc-text-field', 'mdc-text-field--fullwidth'];

        var id;
        if(this.props.id){
            id = this.props.id;
            fieldClasses.push('mdc-text-field-' + id);
        }

        var placeholder = null;
        if(this.props.placeholder){
            placeholder = this.props.placeholder;
        }

        var labelClasses = ['mdc-text-field__label'];
        if(this.state.value || this.props.placeholder){
            //labelClasses.push('mdc-text-field--upgraded');
            labelClasses.push('mdc-text-field__label--float-above');
        }

        var label = null;
        if(this.props.label){
            label = (<label htmlFor={id} className={labelClasses.join(' ')}>{this.props.label}</label>)
        }

        var validationMsg = null;
        var ariaControls = null;
        if(this.props['validation-msg']){
            ariaControls = id + "-validation-msg";
            validationMsg = (
                <p className="mdc-text-field-helper-text mdc-text-field-helper-text--persistent mdc-text-field-helper-text--validation-msg" id={ariaControls}>
                    {this.props['validation-msg']}
                </p>
            );
        }

        return(
            <div>
                <div className={fieldClasses.join(" ")}>
                  <input pattern={this.props.pattern} type={this.props.type} className="mdc-text-field__input" id={id} aria-controls={ariaControls} value={this.state.value} placeholder={placeholder} required={this.props.required} onChange={this.onChange} />
                  {label}
                  <div className="mdc-text-field__bottom-line"></div>
                </div>
                {validationMsg}
            </div>
        );
    }
});