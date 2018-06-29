let ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    render: function() {
        return (
        React.createElement('form', {className: 'contactForm'},
            React.createElement('label', {htmlFor: 'name'},
                React.createElement('input', {
                    type: 'text',
                    name: 'name',
                    placeholder: 'Name',
                    value: this.props.contact.firstName,
                }),
            ),
             React.createElement('label', {htmlFor: 'surname'},
                React.createElement('input', {
                    type: 'text',
                    name: 'surname',
                    placeholder: 'Surname',
                    value: this.props.contact.lastName,
                }),
            ),     
             React.createElement('label', {htmlFor: 'email'}, 
                React.createElement('input', {
                    name: 'email',
                    type: 'email',
                    placeholder: 'Email',
                    value: this.props.contact.email,
                }),
            ),
            React.createElement('button', {type: 'submit'}, 'Add to contact')
            )
        );
    },
});